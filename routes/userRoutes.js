const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route to get a user by ID
router.get('/users/:id', userController.getUserById);

// Route to update a user's password
router.put('/users/password', userController.updateUserPassword);

// Route to create a new user
router.post('/users', userController.createUser);

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to search users
router.post('/users/search', userController.searchUsers);

// Route to delete a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
