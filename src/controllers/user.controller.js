const UserModel = require('../models/user.model');

exports.getMe = async (req, res) => {
  try {
    // req.user.userId มาจาก authenticate middleware
    const user = await UserModel.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'User not found' } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: error.message } });
  }
};

exports.updateMe = async (req, res) => {
  try {
    const updatedUser = await UserModel.update(req.user.userId, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: error.message } });
  }
};

exports.deleteMe = async (req, res) => {
  try {
    await UserModel.delete(req.user.userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: error.message } });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: error.message } });
  }
};