const express = require('express');
const adminCommunityController = require('../controllers/adminCommunityController');

const router = express.Router();

// Route to add a new member to AdminCommunityTable
router.post('/add-community-member', adminCommunityController.addAdminCommunityMember);

module.exports = router;
