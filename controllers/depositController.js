const Deposit = require('../models/Deposit');

exports.getDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.findAll();
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createDeposit = async (req, res) => {
  const { amount } = req.body;

  try {
    const deposit = await Deposit.create({ amount });
    res.json(deposit);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.approveDeposit = async (req, res) => {
  const { id } = req.params;

  try {
    const deposit = await Deposit.findByPk(id);
    if (!deposit) return res.status(404).json({ message: 'Deposit not found' });

    deposit.status = 'approved';
    await deposit.save();

    res.json({ message: 'Deposit approved' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.rejectDeposit = async (req, res) => {
  const { id } = req.params;

  try {
    const deposit = await Deposit.findByPk(id);
    if (!deposit) return res.status(404).json({ message: 'Deposit not found' });

    deposit.status = 'rejected';
    await deposit.save();

    res.json({ message: 'Deposit rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
