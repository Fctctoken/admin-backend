const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/change-password', userController.changePassword);

module.exports = router;
