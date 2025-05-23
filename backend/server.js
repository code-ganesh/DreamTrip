// backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const aiRoutes = require('./routes/aiRoutes');
const bucketRoutes = require('./routes/bucketRoutes');
const userRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes);
app.use('/api/bucket', bucketRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
