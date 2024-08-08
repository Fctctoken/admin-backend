const Fund = require('../models/Fund');

exports.getFunds = async (req, res) => {
  try {
    const funds = await Fund.findAll();
    res.json(funds);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createFund = async (req, res) => {
  const { amount, type } = req.body;

  try {
    const fund = await Fund.create({ amount, type });
    res.json(fund);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.approveFund = async (req, res) => {
  const { id } = req.params;

  try {
    const fund = await Fund.findByPk(id);
    if (!fund) return res.status(404).json({ message: 'Fund not found' });

    fund.status = 'approved';
    await fund.save();

    res.json({ message: 'Fund approved' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.rejectFund = async (req, res) => {
  const { id } = req.params;

  try {
    const fund = await Fund.findByPk(id);
    if (!fund) return res.status(404).json({ message: 'Fund not found' });

    fund.status = 'rejected';
    await fund.save();

    res.json({ message: 'Fund rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
