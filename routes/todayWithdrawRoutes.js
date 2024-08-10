const express = require('express');
const todayWithdrawController = require('../controllers/todayWithdrawController');

const router = express.Router();

// Route to get all withdrawals made today
router.get('/', todayWithdrawController.getTodayWithdraws);

// Route to update the status of a withdrawal
router.put('/status', todayWithdrawController.updateWithdrawalStatus);

// Route to get all withdrawals made by a specific user
router.get('/user/:userId', todayWithdrawController.getWithdrawalsByUser);

module.exports = router;
