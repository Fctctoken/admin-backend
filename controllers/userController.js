const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Function to get a user by ID
const getUserById = (req, res) => {
    const { id } = req.params;
    userModel.getUserById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(results[0]);
    });
};

// Function to update a user's password
const updateUserPassword = (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;

    userModel.getUserById(userId, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });

        const user = results[0];
        bcrypt.compare(oldPassword, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!isMatch) return res.status(400).json({ message: 'Old password is incorrect' });

            bcrypt.hash(newPassword, 10, (err, hash) => {
                if (err) return res.status(500).json({ error: err.message });

                userModel.updateUserPassword(userId, hash, (err) => {
                    if (err) return res.status(500).json({ error: err.message });
                    res.json({ message: 'Password updated successfully' });
                });
            });
        });
    });
};

// Function to create a new user
const createUser = (req, res) => {
    const userData = req.body;

    bcrypt.hash(userData.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        userData.password = hash;

        userModel.createUser(userData, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'User created successfully', userId: results.insertId });
        });
    });
};

// Function to get all users
const getAllUsers = (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Function to search users by a term
const searchUsers = (req, res) => {
    const { search } = req.body;
    userModel.searchUsers(search, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Function to delete a user
const deleteUser = (req, res) => {
    const { id } = req.params;
    userModel.deleteUser(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    });
};

module.exports = {
    getUserById,
    updateUserPassword,
    createUser,
    getAllUsers,
    searchUsers,
    deleteUser,
};
