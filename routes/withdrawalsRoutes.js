const express = require('express');
const withdrawalsController = require('../controllers/withdrawalsController');

const router = express.Router();

// Route to get all withdrawals
router.get('/', withdrawalsController.getWithdrawals);

// Route to update the status of a withdrawal (Approve or Reject)
router.put('/status', withdrawalsController.updateWithdrawalStatus);

module.exports = router;
