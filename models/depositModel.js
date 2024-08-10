// models/depositsModel.js
const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getAllDeposits = (callback) => {
    connection.query('SELECT * FROM Customer_Deposits', callback);
};

const getDepositById = (id, callback) => {
    connection.query('SELECT * FROM Customer_Deposits WHERE id = ?', [id], callback);
};

const createDeposit = (deposit, callback) => {
    connection.query('INSERT INTO Customer_Deposits SET ?', deposit, callback);
};

const updateDepositStatus = (id, status, callback) => {
    connection.query('UPDATE Customer_Deposits SET status = ? WHERE id = ?', [status, id], callback);
};

const deleteDeposit = (id, callback) => {
    connection.query('DELETE FROM Customer_Deposits WHERE id = ?', [id], callback);
};

const getTodaysDeposits = (callback) => {
    const today = new Date().toISOString().split('T')[0];
    connection.query('SELECT * FROM Customer_Deposits WHERE DATE(date) = ?', [today], callback);
};

module.exports = {
    getAllDeposits,
    getDepositById,
    createDeposit,
    updateDepositStatus,
    deleteDeposit,
    getTodaysDeposits,
};
