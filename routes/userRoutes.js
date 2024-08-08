const express = require('express');
const { getUsers, toggleUserStatus } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/', getUsers);
router.post('/toggle-status/:id', toggleUserStatus);

module.exports = router;
