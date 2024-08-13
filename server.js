const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const memberRoutes = require('./routes/memberRoutes');
const depositRoutes = require('./routes/depositRoutes');
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');
const fundRoutes = require('./routes/fundRoutes');
const withdrawalsRoutes = require('./routes/withdrawalsRoutes'); // Routes for Customer_Withdrawals
const todayUnpaidWithdrawalRoutes = require('./routes/todayUnpaidWithdrawalRoutes');
const todayWithdrawRoutes = require('./routes/todayWithdrawRoutes');
const addFundRoutes = require('./routes/addFundRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const inactiveMembersRoutes = require('./routes/inactiveMembersRoutes');
const withdrawFundRoutes = require('./routes/withdrawFundRoutes');
const adminCommunityRoutes = require('./routes/adminCommunityRoutes'); // Import the routes
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route Handling
app.use('/api/members', memberRoutes);
app.use('/api/deposits', depositRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/funds', fundRoutes);
app.use('/api/withdrawals', withdrawalsRoutes); // Routes for Customer_Withdrawals
app.use('/api/today-withdraw', todayWithdrawRoutes);
app.use('/api/addfunds', addFundRoutes);
app.use('/api/balance', balanceRoutes);
app.use('/api/inactive-members', inactiveMembersRoutes);
app.use('/api', withdrawFundRoutes); // Ensure this is the correct route for your withdraw fund routes
app.use('/api/withdrawals/unpaid', todayUnpaidWithdrawalRoutes);
app.use('/api/community', adminCommunityRoutes); // Add this line


// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
    console.log("Successfully Connected");
});
