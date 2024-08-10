const mysql = require('mysql');
const bcrypt = require('bcryptjs'); // Switched to bcryptjs
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Existing methods
const getUserById = (id, callback) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const updateUserPassword = (id, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return callback(err);
        connection.query('UPDATE users SET password = ? WHERE id = ?', [hash, id], callback);
    });
};

// New methods
const createUser = (userData, callback) => {
    bcrypt.hash(userData.password, 10, (err, hash) => {
        if (err) return callback(err);
        const { name, mobile, userId, email, joined } = userData;
        const query = `
            INSERT INTO users (name, mobile, userId, email, password, joined)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        connection.query(query, [name, mobile, userId, email, hash, joined], callback);
    });
};

const getAllUsers = (callback) => {
    connection.query('SELECT * FROM users ORDER BY joined DESC', callback);
};

const searchUsers = (searchTerm, callback) => {
    const query = `
        SELECT * FROM users 
        WHERE name LIKE ? 
        OR mobile LIKE ?
        OR userId LIKE ? 
        OR email LIKE ?
        ORDER BY joined DESC
    `;
    const searchQuery = `%${searchTerm}%`;
    connection.query(query, [searchQuery, searchQuery, searchQuery, searchQuery], callback);
};

const deleteUser = (id, callback) => {
    connection.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = {
    getUserById,
    updateUserPassword,
    createUser,
    getAllUsers,
    searchUsers,
    deleteUser,
};
