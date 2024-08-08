const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const changePassword = (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;

    userModel.getUserById(userId, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        bcrypt.compare(oldPassword, user.password, (err, isMatch) => {
            if (err) return res.status(500).send(err);
            if (!isMatch) return res.status(400).send('Old password is incorrect');

            userModel.updateUserPassword(userId, newPassword, (err, results) => {
                if (err) return res.status(500).send(err);
                res.status(200).send('Password updated successfully');
            });
        });
    });
};

module.exports = {
    changePassword,
};
