const withdrawFundModel = require('../models/withdrawFundModel');

// Get all withdrawal records
const getAllWithdrawFunds = (req, res) => {
    withdrawFundModel.getAllWithdrawFunds((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Search for specific withdrawal records
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
