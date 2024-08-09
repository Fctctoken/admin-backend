const withdrawFundModel = require('../models/withdrawFundModel');

const getAllWithdrawFunds = (req, res) => {
    withdrawFundModel.getAllWithdrawFunds((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

const searchWithdrawFunds = (req, res) => {
    const { search } = req.body;
    withdrawFundModel.searchWithdrawFunds(search, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

module.exports = {
    getAllWithdrawFunds,
    searchWithdrawFunds
};
