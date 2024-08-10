const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch all withdrawals from the Customer_Withdrawals table
const getAllWithdrawFunds = (callback) => {
    connection.query('SELECT * FROM Customer_Withdrawals', callback);
};

// Search withdrawals in the Customer_Withdrawals table based on various criteria
const searchWithdrawFunds = (searchTerm, callback) => {
    const query = `
        SELECT * FROM Customer_Withdrawals
        WHERE id LIKE ? OR user_id LIKE ? OR amount LIKE ? 
        OR status LIKE ? OR punchTimes LIKE ?
    `;
    const formattedSearchTerm = `%${searchTerm}%`;
    connection.query(query, 
        [formattedSearchTerm, formattedSearchTerm, formattedSearchTerm, formattedSearchTerm, formattedSearchTerm], 
        callback);
};

module.exports = {
    getAllWithdrawFunds,
    searchWithdrawFunds
};
