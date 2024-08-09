const express = require('express');
const router = express.Router();
const inactiveMembersController = require('../controllers/inactiveMembersController');

router.get('/', inactiveMembersController.getInactiveMembers);

module.exports = router;
