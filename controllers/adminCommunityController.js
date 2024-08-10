const adminCommunityModel = require('../models/adminCommunityModel');

// Function to add a new member to AdminCommunityTable
const addAdminCommunityMember = (req, res) => {
    const data = req.body;

    // Validate the input data (you can add more validation as needed)
    if (!data.name || !data.user_id || !data.email_id) {
        return res.status(400).json({ error: 'Name, User ID, and Email are required.' });
    }

    adminCommunityModel.addAdminCommunityMember(data, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Community member added successfully', memberId: results.insertId });
    });
};

module.exports = {
    addAdminCommunityMember,
};
