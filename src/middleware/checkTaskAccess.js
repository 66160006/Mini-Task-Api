const db = require('../config/db');

async function getTaskById(taskId) {
 const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
 return rows[0];
}

function checkTaskAccess(action) {
  return async (req, res, next) => {
    try {
    const taskId = req.params.id;
    const task = await getTaskById(taskId);

    if (!task) {
    return res.status(404).json({
      error: {
       code: 'NOT_FOUND',
            
    }
    });
    }

      
     const user = req.user; 
     const currentUserId = user.userId; 

     switch (action) {
     case 'read':
       if (
        task.isPublic ||
        task.ownerId === currentUserId || 
        (task.assignedTo && task.assignedTo === currentUserId) ||
        user.role === 'admin'
        ) return next();
      break;

    case 'write':
       if (task.ownerId === currentUserId || user.role === 'admin') return next(); 
      break;
 }

return res.status(403).json({
 error: {
code: 'ACCESS_DENIED',
       
 }
});
} catch (err) {
next(err);
 }
 };
}

module.exports = checkTaskAccess;