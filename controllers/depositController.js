const depositModel = require('../models/depositModel');

const getAllDeposits = (req, res) => {
    depositModel.getAllDeposits((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

const getDepositById = (req, res) => {
    const id = req.params.id;
    depositModel.getDepositById(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results[0]);
    });
};

const createDeposit = (req, res) => {
    const deposit = req.body;
    depositModel.createDeposit(deposit, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...deposit });
    });
};

const updateDepositStatus = (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    depositModel.updateDepositStatus(id, status, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ id, status });
    });
};

const deleteDeposit = (req, res) => {
    const id = req.params.id;
    depositModel.deleteDeposit(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'Deposit deleted successfully' });
    });
};

const getTodaysDeposits = (req, res) => {
    depositModel.getTodaysDeposits((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

module.exports = {
    getAllDeposits,
    getDepositById,
    createDeposit,
    updateDepositStatus,
    deleteDeposit,
    getTodaysDeposits,
};
