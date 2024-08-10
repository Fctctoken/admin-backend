const express = require('express');
const todayUnpaidWithdrawalController = require('../controllers/todayUnpaidWithdrawalController');

const router = express.Router();

// Route to get unpaid withdrawals with pagination
router.get('/unpaid', todayUnpaidWithdrawalController.getUnpaidWithdrawals);

module.exports = router;
