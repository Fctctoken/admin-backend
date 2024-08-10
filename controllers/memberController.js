const memberModel = require('../models/memberModel');

// Get all members
const getAllMembers = (req, res) => {
    memberModel.getAllMembers((err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json(results);
    });
};

// Get a member by ID
const getMemberById = (req, res) => {
    const id = req.params.id;
    memberModel.getMemberById(id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json(results[0]);
    });
};

// Create a new member
const createMember = (req, res) => {
    const member = req.body;
    memberModel.createMember(member, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(201).json({ id: results.insertId, ...member });
    });
};

// Update a member
const updateMember = (req, res) => {
    const id = req.params.id;
    const member = req.body;
    memberModel.updateMember(id, member, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({ id, ...member });
    });
};

// Delete a member
const deleteMember = (req, res) => {
    const id = req.params.id;
    memberModel.deleteMember(id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({ message: 'Member deleted successfully' });
    });
};

// Get inactive members
const getInactiveMembers = (req, res) => {
    memberModel.getInactiveMembers((err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json(results);
    });
};

module.exports = {
    getAllMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember,
    getInactiveMembers,
};
