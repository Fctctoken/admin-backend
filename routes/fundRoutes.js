const express = require('express');
const { getFunds, createFund, approveFund, rejectFund } = require('../controllers/fundController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/', getFunds);
router.post('/', createFund);
router.post('/approve/:id', approveFund);
router.post('/reject/:id', rejectFund);

module.exports = router;
