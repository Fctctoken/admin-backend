const todayWithdrawModel = require('../models/todayWithdrawModel');

const getTodayWithdraws = (req, res) => {
    todayWithdrawModel.getTodayWithdraws((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

const updateWithdrawalStatus = (req, res) => {
    const { id, status } = req.body;
    todayWithdrawModel.updateWithdrawalStatus(id, status, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Withdrawal status updated successfully' });
    });
};

module.exports = {
    getTodayWithdraws,
    updateWithdrawalStatus,
};
