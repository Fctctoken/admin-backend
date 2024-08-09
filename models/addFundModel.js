const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        throw err;
    }
});

const getAddFunds = (searchTerm, callback) => {
    let query = `SELECT * FROM AddFunds`;
    if (searchTerm) {
        query += ` WHERE senderId LIKE ? OR sendToId LIKE ? OR sendToName LIKE ? OR ngmValue LIKE ? OR date LIKE ? OR status LIKE ?`;
        searchTerm = `%${searchTerm}%`;
    }

    db.query(query, [searchTerm, searchTerm, searchTerm, searchTerm, searchTerm, searchTerm], callback);
};

module.exports = {
    getAddFunds,
};
