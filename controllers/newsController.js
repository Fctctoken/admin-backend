const newsModel = require('../models/newsModel');

const getAllNews = (req, res) => {
    newsModel.getAllNews((err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
};

const getNewsById = (req, res) => {
    const id = req.params.id;
    newsModel.getNewsById(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results[0]);
    });
};

const createNews = (req, res) => {
    const news = req.body;
    newsModel.createNews(news, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, ...news });
    });
};

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
