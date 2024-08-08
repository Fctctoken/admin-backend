const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

const getAllDeposits = (callback) => {
    connection.query('SELECT * FROM deposits', callback);
};

const getDepositById = (id, callback) => {
    connection.query('SELECT * FROM deposits WHERE id = ?', [id], callback);
};

const createDeposit = (deposit, callback) => {
    connection.query('INSERT INTO deposits SET ?', deposit, callback);
};

const updateDepositStatus = (id, status, callback) => {
    connection.query('UPDATE deposits SET status = ? WHERE id = ?', [status, id], callback);
};

const deleteDeposit = (id, callback) => {
    connection.query('DELETE FROM deposits WHERE id = ?', [id], callback);
};

const getTodaysDeposits = (callback) => {
    const today = new Date().toISOString().split('T')[0];
    connection.query('SELECT * FROM deposits WHERE DATE(date) = ?', [today], callback);
};

module.exports = {
    getAllDeposits,
    getDepositById,
    createDeposit,
    updateDepositStatus,
    deleteDeposit,
    getTodaysDeposits,
};
