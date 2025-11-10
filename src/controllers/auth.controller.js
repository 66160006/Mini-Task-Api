const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const AppError = require('../utils/appError'); // <-- ต้องเพิ่มบรรทัดนี้!

exports.register = async (req, res, next) => {
  try {
    // --- (Debug) ---
    console.log('---------------- START REGISTER ----------------');
    console.log('Req Body แบบดิบๆ:', JSON.stringify(req.body));
    console.log('------------------------------------------------');
    // ----------------

    const { email, password, name } = req.body;

    // 1. Validation (ใช้ AppError เพื่อส่ง Error ตาม Format ที่ต้องการ)
    if (!email || !password || !name) {
      throw new AppError(400, 'VALIDATION_ERROR', 'Email, password, and name are required', {
        missingFields: ['email', 'password', 'name'].filter(field => !req.body[field])
      });
    }

    // 2. เช็คว่ามี User อยู่แล้วหรือไม่
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      throw new AppError(409, 'DUPLICATE_EMAIL', 'Email already exists');
    }

    // 3. สร้าง User ใหม่
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      name
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: newUser
    });

  } catch (error) {
    next(error); // ส่งต่อ Error ไปให้ Error Handler จัดการ
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
       throw new AppError(400, 'VALIDATION_ERROR', 'Email and password are required');
    }

    // 2. หา User และตรวจสอบรหัสผ่าน
    const user = await UserModel.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new AppError(401, 'AUTH_FAILED', 'Invalid email or password');
    }

    // 3. สร้าง Token
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, role: user.role, isPremium: user.isPremium === 1 },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ message: 'Login successful', accessToken, refreshToken });

  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(200).json({ message: 'Already logged out' });
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.decode(token);
    
    if (decoded) {
       const expiryDate = new Date(decoded.exp * 1000);
       await db.query('INSERT INTO TokenBlacklist (token, expiryDate) VALUES (?, ?)', [token, expiryDate]);
    }

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    // ถ้า Token ซ้ำ (เคย logout ไปแล้ว) ก็ถือว่าสำเร็จ
    if (error.code === 'ER_DUP_ENTRY') {
        return res.json({ message: 'Logged out successfully' });
    }
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw new AppError(400, 'VALIDATION_ERROR', 'Refresh token is required');
    }

    // ตรวจสอบ Refresh Token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    
    // (Optional) เช็คว่า User ยังมีตัวตนอยู่จริงไหม
    const user = await UserModel.findById(decoded.userId);
    if (!user) {
        throw new AppError(401, 'INVALID_TOKEN', 'User belonging to this token no longer exists');
    }

    // สร้าง Access Token ใหม่
    const newAccessToken = jwt.sign(
      { userId: user.id, email: user.email, role: user.role, isPremium: user.isPremium === 1 },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });

  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        return next(new AppError(401, 'INVALID_TOKEN', 'Refresh token is invalid or expired'));
    }
    next(error);
  }
};