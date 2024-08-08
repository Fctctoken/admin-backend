const News = require('../models/news');

exports.getNews = async (req, res) => {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createNews = async (req, res) => {
  const { title, content } = req.body;

  try {
    const news = await News.create({ title, content });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const news = await News.findByPk(id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    news.title = title;
    news.content = content;
    await news.save();

    res.json({ message: 'News updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findByPk(id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    await news.destroy();

    res.json({ message: 'News deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
