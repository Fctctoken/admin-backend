const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

const getAllMembers = (callback) => {
    connection.query('SELECT * FROM members', callback);
};

const getMemberById = (id, callback) => {
    connection.query('SELECT * FROM members WHERE id = ?', [id], callback);
};

const createMember = (member, callback) => {
    connection.query('INSERT INTO members SET ?', member, callback);
};

const updateMember = (id, member, callback) => {
    connection.query('UPDATE members SET ? WHERE id = ?', [member, id], callback);
};

const deleteMember = (id, callback) => {
    connection.query('DELETE FROM members WHERE id = ?', [id], callback);
};

module.exports = {
    getAllMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember,
};
