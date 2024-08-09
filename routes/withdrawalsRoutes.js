const express = require('express');
const withdrawalsController = require('../controllers/withdrawalsController');

const router = express.Router();

// GET /api/withdrawals - Retrieve all withdrawal requests
router.get('/', withdrawalsController.getWithdrawals);

// PUT /api/withdrawals/status - Update the status of a withdrawal request
router.put('/status', withdrawalsController.updateWithdrawalStatus);

module.exports = router;
