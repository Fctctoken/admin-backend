const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch unpaid withdrawals with pagination
const getUnpaidWithdrawals = (page, rowsPerPage, callback) => {
    const offset = (page - 1) * rowsPerPage;
    const query = 'SELECT * FROM adminTodayUnpaidWithdrawals WHERE status = "Pending" LIMIT ?, ?';
    connection.query(query, [offset, rowsPerPage], callback);
};

// Get the count of unpaid withdrawals
const getUnpaidWithdrawalsCount = (callback) => {
    const query = 'SELECT COUNT(*) as count FROM adminTodayUnpaidWithdrawals WHERE status = "Pending"';
    connection.query(query, callback);
};

module.exports = {
    getUnpaidWithdrawals,
    getUnpaidWithdrawalsCount,
};
