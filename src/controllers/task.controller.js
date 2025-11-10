const TaskModel = require('../models/task.model');

exports.createTask = async (req, res) => {
  try {
    const { title, description, priority, isPublic } = req.body;


    const newTask = await TaskModel.create({
      title,
      description,
      priority,
      isPublic,
      ownerId: req.user.userId 
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: error.message } });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll(req.user.userId);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: error.message } });
  }
};