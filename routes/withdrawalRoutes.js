const express = require('express');
const router = express.Router();
const withdrawalController = require('../controllers/withdrawalController');

router.get('/', withdrawalController.getAllWithdrawals);
router.put('/status', withdrawalController.updateWithdrawalStatus);

module.exports = router;
