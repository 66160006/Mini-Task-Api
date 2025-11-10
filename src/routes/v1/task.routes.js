const express = require('express');
const router = express.Router();
const taskController = require('../../controllers/task.controller');
const authenticate = require('../../middleware/authenticate.js');

router.use(authenticate);

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);

module.exports = router;