โปรเจกต์ REST API สำหรับจัดการ Task ที่มีความปลอดภัยสูง มาพร้อมระบบ Authentication, Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), และ API Versioning (v1/v2)

🚀 Features (คุณสมบัติเด่น)

Authentication: ระบบ JWT (Access Token + Refresh Token) ที่ปลอดภัย พร้อมระบบ TokenBlacklist เมื่อ Logout 
Authorization (RBAC & ABAC):     
    RBAC: แบ่ง Role (admin, user) โดย admin สามารถดู User ทั้งหมดได้     
    ABAC: User สามารถแก้ไข/ลบ ได้เฉพาะ Task ที่ "เป็นของตัวเอง" เท่านั้น (ผ่าน Middleware checkTaskAccess) 
API Versioning: แยกการทำงานระหว่าง /api/v1 และ /api/v2 
Idempotency Key: ป้องกันการ "ยิงซ้ำ" (Double POST/PATCH) ใน Endpoint ที่สำคัญ (ใช้กลยุทธ์ "Insert-First" กัน Race Condition) 
Rate Limiting: ป้องกันการโจมตีแบบ Brute-force (กำหนดโควต้าตาม Role) Custom Error 
Handling: ระบบ errorHandler กลาง ที่ตอบกลับเป็น JSON ที่ชัดเจน

🛠️ Tech Stack (เทคโนโลยีที่ใช้)

Backend: Node.js, Express.js 
Database: MySQL (เชื่อมต่อผ่าน mysql2/promise)
Authentication: JSON Web Tokens (JWT) Password 
Hashing: bcryptjs 
Middleware: express-rate-limit, uuid

📦 Setup Instructions (วิธีติดตั้ง)
ผู้สอนสามารถทำตามขั้นตอนนี้เพื่อรันโปรเจกต์และทดสอบ API ได้จริง

### 1. Clone Project 
git clone https://github.com/66160006/Mini-Task-Api
cd Mini-Task-Api
### 2. Install Dependencies
npm install
### 3. Setup Database (MySQL)
สร้าง Database ใหม่ชื่อ task_db
รันคำสั่ง SQL ทั้ง 4 บล็อกนี้ (Users, Tasks, Blacklist, Idempotency)
**Block 1: users**
CREATE TABLE users (
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
**Block 2: tasks**
CREATE TABLE tasks (
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  isPublic BOOLEAN DEFAULT false,
  ownerId VARCHAR(36) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (ownerId) REFERENCES users(id) ON DELETE CASCADE
);
**Block 3: TokenBlacklist (สำหรับ Logout)**
CREATE TABLE TokenBlacklist (
  token TEXT NOT NULL,
  expiryDate DATETIME NOT NULL
);
**Block 4: idempotency_keys (สำหรับกันยิงซ้ำ)**
CREATE TABLE idempotency_keys (
  id VARCHAR(255) NOT NULL PRIMARY KEY,
  ownerId VARCHAR(36) NOT NULL,
  responseBody TEXT,
  responseStatus INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ownerId) REFERENCES users(id) ON DELETE CASCADE
);
### 4. Create .env file
**Database**
DB_HOST=localhost
DB_USER=root
DB_PASSWORD= [รหัสผ่าน MySQL ของคุณ]
DB_NAME=task_db

**JWT Secrets**
JWT_ACCESS_SECRET=your_very_strong_access_secret
JWT_REFRESH_SECRET=your_very_strong_refresh_secret
### 5. Run the Application
npm run dev
เซิร์ฟเวอร์จะรันที่ http://localhost:8080