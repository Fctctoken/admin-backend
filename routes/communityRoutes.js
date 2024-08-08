const express = require('express');
const { getActiveMembers, getInactiveMembers } = require('../controllers/communityController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.use(adminMiddleware);

router.get('/active', getActiveMembers);
router.get('/inactive', getInactiveMembers);

module.exports = router;
