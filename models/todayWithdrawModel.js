const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getTodayWithdraws = (callback) => {
    const today = new Date().toISOString().split('T')[0];
    const query = 'SELECT * FROM TodayWithdraw WHERE DATE(punchTimes) = ?';
    connection.query(query, [today], callback);
};

const updateWithdrawalStatus = (id, status, callback) => {
    const query = 'UPDATE TodayWithdraw SET status = ? WHERE id = ?';
    connection.query(query, [status, id], callback);
};

module.exports = {
    getTodayWithdraws,
    updateWithdrawalStatus,
};
