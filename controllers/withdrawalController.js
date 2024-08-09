const withdrawalModel = require('../models/withdrawalModel');

const getAllWithdrawals = (req, res) => {
    withdrawalModel.getAllWithdrawals((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
};

const updateWithdrawalStatus = (req, res) => {
    const { id, status } = req.body;
    withdrawalModel.updateWithdrawalStatus(id, status, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ message: 'Status updated successfully' });
        }
    });
};

module.exports = {
    getAllWithdrawals,
    updateWithdrawalStatus,
};
