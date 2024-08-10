const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch all withdrawals from the Customer_Withdrawals table
const getWithdrawals = (callback) => {
    const query = 'SELECT * FROM Customer_Withdrawals';
    connection.query(query, callback);
};

// Update the status of a specific withdrawal
const updateWithdrawalStatus = (id, status, callback) => {
    const query = 'UPDATE Customer_Withdrawals SET status = ? WHERE id = ?';
    connection.query(query, [status, id], callback);
};

module.exports = {
    getWithdrawals,
    updateWithdrawalStatus,
};
