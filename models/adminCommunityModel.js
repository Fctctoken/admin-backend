const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) throw err;
});

// Function to insert a new record into AdminCommunityTable
const addAdminCommunityMember = (data, callback) => {
    const query = `
        INSERT INTO AdminCommunityTable (date_of_joining, name, mobile_no, user_id, email_id, wallet_address, kyc_status, staked_coins)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        data.date_of_joining,
        data.name,
        data.mobile_no,
        data.user_id,
        data.email_id,
        data.wallet_address,
        data.kyc_status,
        data.staked_coins
    ];
    connection.query(query, values, callback);
};

module.exports = {
    addAdminCommunityMember,
};
