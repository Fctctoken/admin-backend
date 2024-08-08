const express = require('express');
const depositController = require('../controllers/depositController');

const router = express.Router();

router.get('/', depositController.getAllDeposits);
router.get('/:id', depositController.getDepositById);
router.post('/', depositController.createDeposit);
router.put('/:id', depositController.updateDepositStatus);
router.delete('/:id', depositController.deleteDeposit);
router.get('/today', depositController.getTodaysDeposits);

module.exports = router;
