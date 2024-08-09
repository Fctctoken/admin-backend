const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        throw err;
    }
});

const getTotalBalance = (callback) => {
    const query = `SELECT SUM(balance) AS totalBalance FROM Users`; // Replace `Users` with your relevant table
    db.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        const totalBalance = results[0].totalBalance || 0;
        callback(null, totalBalance);
    });
};

module.exports = {
    getTotalBalance,
};
