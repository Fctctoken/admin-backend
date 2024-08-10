const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch a user by ID
const getUserById = (id, callback) => {
    connection.query('SELECT * FROM Customer_Users WHERE id = ?', [id], callback);
};

// Update a user's password
const updateUserPassword = (id, password, callback) => {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return callback(err);
        connection.query('UPDATE Customer_Users SET password = ? WHERE id = ?', [hash, id], callback);
    });
};

// Create a new user
const createUser = (userData, callback) => {
    bcrypt.hash(userData.password, 10, (err, hash) => {
        if (err) return callback(err);
        const { name, mobile, userId, email, joined } = userData;
        const query = `
            INSERT INTO Customer_Users (name, mobile, userId, email, password, joined)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        connection.query(query, [name, mobile, userId, email, hash, joined], callback);
    });
};

// Fetch all users
const getAllUsers = (callback) => {
    connection.query('SELECT * FROM Customer_Users ORDER BY joined DESC', callback);
};

// Search users
const searchUsers = (searchTerm, callback) => {
    const query = `
        SELECT * FROM Customer_Users 
        WHERE name LIKE ? 
        OR mobile LIKE ?
        OR userId LIKE ? 
        OR email LIKE ?
        ORDER BY joined DESC
    `;
    const searchQuery = `%${searchTerm}%`;
    connection.query(query, [searchQuery, searchQuery, searchQuery, searchQuery], callback);
};

// Delete a user
const deleteUser = (id, callback) => {
    connection.query('DELETE FROM Customer_Users WHERE id = ?', [id], callback);
};

module.exports = {
    getUserById,
    updateUserPassword,
    createUser,
    getAllUsers,
    searchUsers,
    deleteUser,
};
