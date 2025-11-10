const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class UserModel {
  static async findByEmail(email) {
    const sql = 'SELECT * FROM Users WHERE email = ?';
    const [rows] = await db.query(sql, [email]);
    return rows[0];
  }

  // --- เพิ่มฟังก์ชันใหม่ ---
  static async findById(id) {
    const sql = 'SELECT id, email, name, role, isPremium, createdAt FROM Users WHERE id = ?';
    // เลือกเฉพาะ field ที่ปลอดภัย ไม่เอา password ออกไป
    const [rows] = await db.query(sql, [id]);
    return rows[0];
  }

  static async findAll() {
    const sql = 'SELECT id, email, name, role, isPremium, createdAt FROM Users';
    const [rows] = await db.query(sql);
    return rows;
  }

  static async update(id, userData) {
    const { name, email } = userData; // อนุญาตให้อัปเดตแค่ name กับ email ก่อน (ง่ายๆ)
    const sql = 'UPDATE Users SET name = ?, email = ? WHERE id = ?';
    await db.query(sql, [name, email, id]);
    return this.findById(id); // ส่งข้อมูลล่าสุดกลับไป
  }

  static async delete(id) {
    const sql = 'DELETE FROM Users WHERE id = ?';
    const [result] = await db.query(sql, [id]);
    return result.affectedRows > 0;
  }
  // -----------------------

  static async create(userData) {
    const { email, password, name } = userData;
    const id = uuidv4();
    const sql = `INSERT INTO Users (id, email, password, name, role, isPremium) VALUES (?, ?, ?, ?, 'user', false)`;
    await db.query(sql, [id, email, password, name]);
    return { id, email, name, role: 'user' };
  }
}

module.exports = UserModel;