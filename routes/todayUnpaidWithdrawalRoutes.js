const express = require('express');
const todayUnpaidWithdrawalController = require('../controllers/todayUnpaidWithdrawalController');

const router = express.Router();

router.get('/unpaid', todayUnpaidWithdrawalController.getUnpaidWithdrawals);

module.exports = router;
