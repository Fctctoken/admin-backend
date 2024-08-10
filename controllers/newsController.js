const newsModel = require('../models/newsModel');

// Get all news
const getAllNews = (req, res) => {
    newsModel.getAllNews((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

// Get news by ID
const getNewsById = (req, res) => {
    const id = req.params.id;
    newsModel.getNewsById(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results[0]);
    });
};

// Create new news entry
const createNews = (req, res) => {
    const news = req.body;
    newsModel.createNews(news, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...news });
    });
};

// Delete news by ID
const deleteNews = (req, res) => {
    const id = req.params.id;
    newsModel.deleteNews(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ message: 'News deleted successfully' });
    });
};

module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    deleteNews,
};
