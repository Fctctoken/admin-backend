const withdrawalsModel = require('../models/withdrawalsModel');

const getWithdrawals = (req, res) => {
    withdrawalsModel.getWithdrawals((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

const updateWithdrawalStatus = (req, res) => {
    const { id, status } = req.body;
    withdrawalsModel.updateWithdrawalStatus(id, status, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Withdrawal status updated successfully' });
    });
};

module.exports = {
    getWithdrawals,
    updateWithdrawalStatus,
};
