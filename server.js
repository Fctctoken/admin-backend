const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const communityRoutes = require('./routes/communityRoutes');
const depositRoutes = require('./routes/depositRoutes');
const fundRoutes = require('./routes/fundRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const userRoutes = require('./routes/userRoutes');
const withdrawRoutes = require('./routes/withdrawRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/deposits', depositRoutes);
app.use('/api/funds', fundRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/withdrawals', withdrawRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to MySQL
sequelize.authenticate()
  .then(() => console.log('MySQL connected'))
  .catch((error) => console.error('Unable to connect to MySQL:', error));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
