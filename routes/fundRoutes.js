const express = require('express');
const fundController = require('../controllers/fundController');

const router = express.Router();

router.get('/today', fundController.getTodaysFunds);

module.exports = router;
