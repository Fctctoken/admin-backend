const mysql = require('mysql');
const bcrypt = require('bcrypt');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

const getUserById = (id, callback) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const updateUserPassword = (id, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return callback(err);
        connection.query('UPDATE users SET password = ? WHERE id = ?', [hash, id], callback);
    });
};



module.exports = {
    getUserById,
    updateUserPassword,
};
