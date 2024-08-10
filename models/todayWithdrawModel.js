const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch all withdrawals made today
const getTodayWithdraws = (callback) => {
    const today = new Date().toISOString().split('T')[0];
    const query = 'SELECT * FROM Customer_Withdrawals WHERE DATE(punchTimes) = ?';
    connection.query(query, [today], callback);
};

// Update the status of a specific withdrawal
const updateWithdrawalStatus = (id, status, callback) => {
    const query = 'UPDATE Customer_Withdrawals SET status = ? WHERE id = ?';
    connection.query(query, [status, id], callback);
};

// Fetch all withdrawals made by a specific user
const getWithdrawalsByUser = (userId, callback) => {
    const query = 'SELECT * FROM Customer_Withdrawals WHERE user_id = ?';
    connection.query(query, [userId], callback);
};

module.exports = {
    getTodayWithdraws,
    updateWithdrawalStatus,
    getWithdrawalsByUser,
};
