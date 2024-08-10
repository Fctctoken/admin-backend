const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Fetch all members
const getAllMembers = (callback) => {
    connection.query('SELECT * FROM Customer_Users', callback);
};

// Fetch member by ID
const getMemberById = (id, callback) => {
    connection.query('SELECT * FROM Customer_Users WHERE id = ?', [id], callback);
};

// Create a new member
const createMember = (member, callback) => {
    connection.query('INSERT INTO Customer_Users SET ?', member, callback);
};

// Update an existing member
const updateMember = (id, member, callback) => {
    connection.query('UPDATE Customer_Users SET ? WHERE id = ?', [member, id], callback);
};

// Delete a member
const deleteMember = (id, callback) => {
    connection.query('DELETE FROM Customer_Users WHERE id = ?', [id], callback);
};

// Fetch inactive members
const getInactiveMembers = (callback) => {
    const query = 'SELECT id, name, referralId, main, withdrawal, activate FROM Customer_Users WHERE activate = 0';
    connection.query(query, callback);
};

module.exports = {
    getAllMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember,
    getInactiveMembers,
};
