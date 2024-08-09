const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        throw err;
    }
});

const getInactiveMembers = (callback) => {
    const query = `SELECT id, name, referralId, main, withdrawal, activate FROM Members WHERE activate = 0`;
    db.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

module.exports = {
    getInactiveMembers,
};
