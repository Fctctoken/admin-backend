const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        throw err;
    }
});

// Fetch all withdrawals from the Customer_Withdrawals table
const getAllWithdrawals = (callback) => {
    db.query('SELECT * FROM Customer_Withdrawals', callback);
};

// Update the status of a specific withdrawal (Approve or Reject)
const updateWithdrawalStatus = (id, status, callback) => {
    db.query('UPDATE Customer_Withdrawals SET status = ? WHERE id = ?', [status, id], callback);
};

module.exports = {
    getAllWithdrawals,
    updateWithdrawalStatus,
};
