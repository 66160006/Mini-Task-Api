const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class TaskModel {
  static async create(taskData) {
    const { title, description, priority, isPublic, ownerId } = taskData;
    const id = uuidv4();

    const sql = ` 
      INSERT INTO Tasks (id, title, description, priority, isPublic, ownerId, status)
      VALUES (?, ?, ?, ?, ?, ?, 'pending')
    `;

    await db.query(sql, [id, title, description, priority || 'low', isPublic || false, ownerId]);
    return { id, ...taskData, status: 'pending' };
  }

  static async findAll(userId) {
    // ดึงงานทั้งหมดที่เป็นของ User คนนี้ (ตามโจทย์เบื้องต้น)
    const sql = 'SELECT * FROM Tasks WHERE ownerId = ? ORDER BY createdAt DESC';
    const [rows] = await db.query(sql, [userId]);
    return rows;
  }
}

module.exports = TaskModel;