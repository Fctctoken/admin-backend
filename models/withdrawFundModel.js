const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getAllWithdrawFunds = (callback) => {
    connection.query('SELECT * FROM withdraw_funds', callback);
};

const searchWithdrawFunds = (searchTerm, callback) => {
    const query = `
        SELECT * FROM withdraw_funds
        WHERE id LIKE ? OR name LIKE ? OR fundValue LIKE ? 
        OR reason LIKE ? OR time LIKE ? OR status LIKE ?
    `;
    const formattedSearchTerm = `%${searchTerm}%`;
    connection.query(query, 
        [formattedSearchTerm, formattedSearchTerm, formattedSearchTerm, formattedSearchTerm, formattedSearchTerm, formattedSearchTerm], 
        callback);
};

module.exports = {
    getAllWithdrawFunds,
    searchWithdrawFunds
};
