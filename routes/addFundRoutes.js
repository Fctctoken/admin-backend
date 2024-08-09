const express = require('express');
const router = express.Router();
const addFundController = require('../controllers/addFundController');

router.get('/', addFundController.getAddFunds);

module.exports = router;
