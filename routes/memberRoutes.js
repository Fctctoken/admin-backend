const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();

// Route to get all members
router.get('/', memberController.getAllMembers);

// Route to get a member by ID
router.get('/:id', memberController.getMemberById);

// Route to create a new member
router.post('/', memberController.createMember);

// Route to update a member
router.put('/:id', memberController.updateMember);

// Route to delete a member
router.delete('/:id', memberController.deleteMember);

// Route to get inactive members
router.get('/inactive', memberController.getInactiveMembers);

module.exports = router;
