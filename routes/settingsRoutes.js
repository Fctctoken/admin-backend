const express = require('express');
const { changePassword } = require('../controllers/settingsController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/change-password', changePassword);

module.exports = router;
