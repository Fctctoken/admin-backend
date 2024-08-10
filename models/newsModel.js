const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch all news
const getAllNews = (callback) => {
    connection.query('SELECT * FROM Customer_News ORDER BY created_at DESC', callback);
};

// Fetch news by ID
const getNewsById = (id, callback) => {
    connection.query('SELECT * FROM Customer_News WHERE id = ?', [id], callback);
};

// Create new news entry
const createNews = (news, callback) => {
    connection.query('INSERT INTO Customer_News SET ?', news, callback);
};

// Delete news by ID
const deleteNews = (id, callback) => {
    connection.query('DELETE FROM Customer_News WHERE id = ?', [id], callback);
};

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    deleteNews,
};
