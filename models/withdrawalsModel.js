const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getWithdrawals = (callback) => {
    const query = 'SELECT * FROM Withdrawals';
    connection.query(query, callback);
};

const updateWithdrawalStatus = (id, status, callback) => {
    const query = 'UPDATE Withdrawals SET status = ? WHERE id = ?';
    connection.query(query, [status, id], callback);
};

module.exports = {
    getWithdrawals,
    updateWithdrawalStatus,
};
