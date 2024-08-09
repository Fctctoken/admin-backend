const express = require('express');
const todayWithdrawController = require('../controllers/todayWithdrawController');

const router = express.Router();

router.get('/', todayWithdrawController.getTodayWithdraws);
router.put('/status', todayWithdrawController.updateWithdrawalStatus);

module.exports = router;
