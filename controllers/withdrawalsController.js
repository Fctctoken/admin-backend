const withdrawalsModel = require('../models/withdrawalsModel');

// Fetch all withdrawals
const getWithdrawals = (req, res) => {
    withdrawalsModel.getWithdrawals((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Update the status of a specific withdrawal
const updateWithdrawalStatus = (req, res) => {
    const { id, status } = req.body;

    // Validate status value
    if (!['Approved', 'Rejected'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    withdrawalsModel.updateWithdrawalStatus(id, status, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Withdrawal status updated successfully' });
    });
};

module.exports = {
    getWithdrawals,
    updateWithdrawalStatus,
};
