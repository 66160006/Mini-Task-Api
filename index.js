require('dotenv').config();
const express = require('express');
const db = require('./src/config/db');

const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());


const authRoutes = require('./src/routes/v1/auth.routes');
const taskRoutes = require('./src/routes/v1/task.routes');
const userRoutes = require('./src/routes/v1/user.routes');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/users', userRoutes);


app.get('/api/v1/test', (req, res) => {
  res.json({ message: `API is working on port ${port}!` });
});


const errorHandler = require('./src/middleware/errorHandler');
app.use(errorHandler);


app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  try {
    const [results] = await db.query('SELECT 1 as val');
    console.log('Database connection successful! (Value returned:', results[0].val, ')');
  } catch (err) {
    console.error('Database connection failed!');
    console.error('Error details:', err.message);
  }
});