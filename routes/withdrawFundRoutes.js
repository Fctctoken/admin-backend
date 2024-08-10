const express = require('express');
const withdrawFundController = require('../controllers/withdrawFundController');

const router = express.Router();

// Route to get all withdrawal records
router.get('/withdraw-funds', withdrawFundController.getAllWithdrawFunds);

// Route to search for withdrawal records
router.post('/withdraw-funds/search', withdrawFundController.searchWithdrawFunds);

module.exports = router;
