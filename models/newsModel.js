const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getAllNews = (callback) => {
    connection.query('SELECT * FROM news', callback);
};

const getNewsById = (id, callback) => {
    connection.query('SELECT * FROM news WHERE id = ?', [id], callback);
};

const createNews = (news, callback) => {
    connection.query('INSERT INTO news SET ?', news, callback);
};

const deleteNews = (id, callback) => {
    connection.query('DELETE FROM news WHERE id = ?', [id], callback);
};

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    deleteNews,
};
