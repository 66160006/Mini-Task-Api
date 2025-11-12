const db = require('../config/db');

const { v4: uuidv4 } = require('uuid');


async function createTask(req, res, next) { 
     try {
    
    const { title, description, priority, isPublic } = req.body;
    const taskId = uuidv4(); 
    const ownerId = req.user.userId;

await db.query(
 'INSERT INTO tasks (id, title, description, priority, isPublic, ownerId) VALUES (?, ?, ?, ?, ?, ?)',
 [taskId, title, description, priority, isPublic, ownerId]
 );


    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
    const createdTask = rows[0];
    const statusCode = 201;

   
 if (req.idempotencyKey) {
console.log(`[Idempotency] Key: ${req.idempotencyKey} (ใหม่) -> อัปเดตผลลัพธ์`);
await db.query(
 'UPDATE idempotency_keys SET responseBody = ?, responseStatus = ? WHERE id = ? AND ownerId = ?',
 [
JSON.stringify(createdTask), 
 statusCode,
req.idempotencyKey,
ownerId
 ]
);
 }

     res.status(statusCode).json(createdTask);

 } catch (error) {
 console.error(error);
next(error); 
}
}


async function getTasks(req, res, next) { 
 try {

 const [tasks] = await db.query(
 'SELECT * FROM tasks WHERE ownerId = ?', 
[req.user.userId]
 );

    
 res.json(tasks);

 } catch (error) {
 console.error(error);
 next(error); 
 }
}


async function getTaskById(req, res, next) {
 try {
 const taskId = req.params.id;
 const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
 
 if (rows.length === 0) {
return res.status(404).json({ message: 'Task not found or unauthorized' });
 }
 res.json(rows[0]);
 } catch (error) {
console.error(error);
next(error);
}
}


async function updateTask(req, res, next) {
 try {
 const taskId = req.params.id;
 const { title, description, priority, isPublic, status } = req.body;

 await db.query(
'UPDATE tasks SET title = ?, description = ?, priority = ?, isPublic = ?, status = ? WHERE id = ?',
 [title, description, priority, isPublic, status, taskId]
 );

    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
    res.json(rows[0]);
     } catch (error) {
    console.error(error);
    next(error);
 }
}


    async function deleteTask(req, res, next) {
     try {
     const taskId = req.params.id;
     await db.query('DELETE FROM tasks WHERE id = ?', [taskId]);
    res.status(204).send();
     } catch (error) {
     console.error(error);
    next(error);
    }
}


async function updateTaskStatus(req, res, next) {
     try {
    
     const taskId = req.params.id;
    const { status } = req.body;
    const ownerId = req.user.userId;

    if (!status) {
        return res.status(400).json({ message: 'Status is required' });
    }

     await db.query(
    'UPDATE tasks SET status = ? WHERE id = ? AND ownerId = ?',
    [status, taskId, ownerId]
    );

    
     const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
    
    if (rows.length === 0) {
        return res.status(404).json({ message: 'Task not found or unauthorized' });
    }

    const updatedTask = rows[0];
    const statusCode = 200;

    
    if (req.idempotencyKey) {
    console.log(`[Idempotency] Key: ${req.idempotencyKey} (ใหม่) -> อัปเดตผลลัพธ์`);
    await db.query(
    'UPDATE idempotency_keys SET responseBody = ?, responseStatus = ? WHERE id = ? AND ownerId = ?',
         [
        JSON.stringify(updatedTask), 
        statusCode,
        req.idempotencyKey,
        ownerId
        ]
 );
 }

     res.status(statusCode).json(updatedTask);

     } catch (error) {
    console.error(error);
    next(error);
     }
}



module.exports = {
 createTask,
 getTasks,
 getTaskById,
 updateTask,
 deleteTask,
 updateTaskStatus 
};