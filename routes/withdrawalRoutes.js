const express = require('express');
const router = express.Router();
const withdrawalController = require('../controllers/withdrawalController');

// Route to get all withdrawals
router.get('/', withdrawalController.getAllWithdrawals);

// Route to update the status of a withdrawal (Approve or Reject)
router.put('/status', withdrawalController.updateWithdrawalStatus);

module.exports = router;
