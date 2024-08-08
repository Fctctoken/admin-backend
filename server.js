const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const memberRoutes = require('./routes/memberRoutes');
const depositRoutes = require('./routes/depositRoutes');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/members', memberRoutes);
app.use('/api/deposits', depositRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/users', userRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
