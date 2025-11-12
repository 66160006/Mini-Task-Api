const express = require('express');
const router = express.Router();


const taskController = require('../../controllers/task.controller');


const { authenticate } = require('../../middleware/authenticate');
const rateLimiterByRole = require('../../middleware/rateLimit');
const { idempotencyCheck } = require('../../middleware/idempotency');



router.use(rateLimiterByRole); 


router.post(
 '/', 
 authenticate, 
 idempotencyCheck, 
 taskController.createTask 
);


router.get(
 '/', 
 authenticate, 
 taskController.getTasks
);


router.get(
 '/:id', 
 authenticate, 
 taskController.getTaskById 
);

router.put(
 '/:id', 
 authenticate, 
 taskController.updateTask
);


router.patch(
 '/:id/status', 
 authenticate, 
 idempotencyCheck, 
 taskController.updateTaskStatus 
);


router.delete(
 '/:id', 
 authenticate, 
 taskController.deleteTask
);

module.exports = router;