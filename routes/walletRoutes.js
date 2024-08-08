const express = require('express');
const { getWalletRequests, createWalletRequest, approveWalletRequest, rejectWalletRequest } = require('../controllers/walletController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/', getWalletRequests);
router.post('/', createWalletRequest);
router.post('/approve/:id', approveWalletRequest);
router.post('/reject/:id', rejectWalletRequest);

module.exports = router;
