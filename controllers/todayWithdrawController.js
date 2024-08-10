const todayWithdrawModel = require('../models/todayWithdrawModel');

// Get all withdrawals made today
const getTodayWithdraws = (req, res) => {
    todayWithdrawModel.getTodayWithdraws((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Update the status of a specific withdrawal
const updateWithdrawalStatus = (req, res) => {
    const { id, status } = req.body;
    todayWithdrawModel.updateWithdrawalStatus(id, status, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Withdrawal status updated successfully' });
    });
};

// Get all withdrawals made by a specific user
const getWithdrawalsByUser = (req, res) => {
    const userId = req.params.userId;
    todayWithdrawModel.getWithdrawalsByUser(userId, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

module.exports = {
    getTodayWithdraws,
    updateWithdrawalStatus,
    getWithdrawalsByUser,
};
