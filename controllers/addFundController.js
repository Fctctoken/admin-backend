const addFundModel = require('../models/addFundModel');

const getAddFunds = (req, res) => {
    const searchTerm = req.query.search || '';
    addFundModel.getAddFunds(searchTerm, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};

module.exports = {
    getAddFunds,
};
