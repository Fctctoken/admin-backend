const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        throw err;
    }
});

const getAllWithdrawals = (callback) => {
    db.query('SELECT * FROM TodayWithdrawals', callback);
};

const updateWithdrawalStatus = (id, status, callback) => {
    db.query('UPDATE TodayWithdrawals SET status = ? WHERE id = ?', [status, id], callback);
};

module.exports = {
    getAllWithdrawals,
    updateWithdrawalStatus,
};
