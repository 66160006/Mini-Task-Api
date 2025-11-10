const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
const authenticate = require('../../middleware/authenticate');
const authorize = require('../../middleware/authorize');


router.use(authenticate);


router.get('/me', userController.getMe);
router.put('/me', userController.updateMe);
router.delete('/me', userController.deleteMe);


router.get('/', authorize(['admin']), userController.getAllUsers);

module.exports = router;