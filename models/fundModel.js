// models/fundModel.js
const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

const getTodaysFunds = (callback) => {
    const today = new Date().toISOString().split('T')[0];
    const query = 'SELECT * FROM adminTodayFundAdmin WHERE DATE(date) = ?';
    connection.query(query, [today], callback);
};

module.exports = {
    getTodaysFunds,
};
