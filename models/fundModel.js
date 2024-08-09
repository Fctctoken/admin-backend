const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getTodaysFunds = (callback) => {
    const today = new Date().toISOString().split('T')[0];
    connection.query('SELECT * FROM funds WHERE DATE(date) = ?', [today], callback);
};

module.exports = {
    getTodaysFunds,
};
