const express = require('express');
const { getWithdrawals, createWithdrawal, approveWithdrawal, rejectWithdrawal } = require('../controllers/withdrawController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/', getWithdrawals);
router.post('/', createWithdrawal);
router.post('/approve/:id', approveWithdrawal);
router.post('/reject/:id', rejectWithdrawal);

module.exports = router;
