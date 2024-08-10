const express = require('express');
const newsController = require('../controllers/newsController');

const router = express.Router();

// Route to get all news
router.get('/', newsController.getAllNews);

// Route to get news by ID
router.get('/:id', newsController.getNewsById);

// Route to create a new news entry
router.post('/', newsController.createNews);

// Route to delete news by ID
router.delete('/:id', newsController.deleteNews);

module.exports = router;
