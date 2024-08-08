const memberModel = require('../models/memberModel');

const getAllMembers = (req, res) => {
    memberModel.getAllMembers((err, results) => {
        if (err) res.status(500).send(err);
        res.status(200).json(results);
    });
};

const getMemberById = (req, res) => {
    const id = req.params.id;
    memberModel.getMemberById(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.status(200).json(results[0]);
    });
};

const createMember = (req, res) => {
    const member = req.body;
    memberModel.createMember(member, (err, results) => {
        if (err) res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...member });
    });
};

const updateMember = (req, res) => {
    const id = req.params.id;
    const member = req.body;
    memberModel.updateMember(id, member, (err, results) => {
        if (err) res.status(500).send(err);
        res.status(200).json({ id, ...member });
    });
};

const deleteMember = (req, res) => {
    const id = req.params.id;
    memberModel.deleteMember(id, (err, results) => {
        if (err) res.status(500).send(err);
        res.status(200).json({ message: 'Member deleted successfully' });
    });
};

module.exports = {
    getAllMembers,
    getMemberById,
    createMember,
    updateMember,
    deleteMember,
};
