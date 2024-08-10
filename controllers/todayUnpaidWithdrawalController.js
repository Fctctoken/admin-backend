const todayUnpaidWithdrawalModel = require('../models/todayUnpaidWithdrawalModel');

// Get unpaid withdrawals with pagination
const getUnpaidWithdrawals = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const rowsPerPage = parseInt(req.query.rowsPerPage) || 15;

    todayUnpaidWithdrawalModel.getUnpaidWithdrawals(page, rowsPerPage, (err, results) => {
        if (err) return res.status(500).send(err);

        todayUnpaidWithdrawalModel.getUnpaidWithdrawalsCount((err, countResult) => {
            if (err) return res.status(500).send(err);
            res.status(200).json({
                data: results,
                totalRows: countResult[0].count,
                currentPage: page,
                rowsPerPage: rowsPerPage,
            });
        });
    });
};

module.exports = {
    getUnpaidWithdrawals,
};
