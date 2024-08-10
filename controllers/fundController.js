// controllers/addFundController.js
const fundModel = require('../models/fundModel');

const getTodaysFunds = (req, res) => {
    fundModel.getTodaysFunds((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

module.exports = {
    getTodaysFunds,
};
