const express = require('express');
const withdrawFundController = require('../controllers/withdrawFundController');

const router = express.Router();

router.get('/withdraw-funds', withdrawFundController.getAllWithdrawFunds);
router.post('/withdraw-funds/search', withdrawFundController.searchWithdrawFunds);

module.exports = router;
