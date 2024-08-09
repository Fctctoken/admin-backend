const balanceModel = require('../models/balanceModel');

const getTotalBalance = (req, res) => {
    balanceModel.getTotalBalance((err, balance) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ balance: balance.toFixed(2) });
        }
    });
};

module.exports = {
    getTotalBalance,
};
