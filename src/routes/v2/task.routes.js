const express = require('express');
const router = express.Router();


const { authenticate } = require('../../middleware/authenticate');
const rateLimiterByRole = require('../../middleware/rateLimit');
const checkTaskAccess = require('../../middleware/checkTaskAccess'); 
const { idempotencyCheck } = require('../../middleware/idempotency');


const taskController = require('../../controllers/task.controller');


router.use(rateLimiterByRole);


router.get(
 '/', 
 authenticate, 
 taskController.getTasks 
);


router.post(
 '/', 
 authenticate, 
 idempotencyCheck, 
 taskController.createTask 
);


router.get(
 '/:id', 
 authenticate, 
 checkTaskAccess('read'), 
 taskController.getTaskById
);


router.put(
 '/:id', 
 authenticate, 
 checkTaskAccess('write'), 
 taskController.updateTask
);


router.delete(
 '/:id', 
 authenticate, 
 checkTaskAccess('write'), 
 taskController.deleteTask
);


router.patch(
 '/:id/status',
 authenticate,
 checkTaskAccess('write'), 
 idempotencyCheck, 
 taskController.updateTaskStatus
);

module.exports = router;