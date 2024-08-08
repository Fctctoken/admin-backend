const express = require('express');
const { getDeposits, createDeposit, approveDeposit, rejectDeposit } = require('../controllers/depositController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/', getDeposits);
router.post('/', createDeposit);
router.post('/approve/:id', approveDeposit);
router.post('/reject/:id', rejectDeposit);

module.exports = router;
