const Withdrawal = require('../models/Withdrawal');

exports.getWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdrawal.findAll();
    res.json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createWithdrawal = async (req, res) => {
  const { amount } = req.body;

  try {
    const withdrawal = await Withdrawal.create({ amount });
    res.json(withdrawal);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.approveWithdrawal = async (req, res) => {
  const { id } = req.params;

  try {
    const withdrawal = await Withdrawal.findByPk(id);
    if (!withdrawal) return res.status(404).json({ message: 'Withdrawal not found' });

    withdrawal.status = 'approved';
    await withdrawal.save();

    res.json({ message: 'Withdrawal approved' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.rejectWithdrawal = async (req, res) => {
  const { id } = req.params;

  try {
    const withdrawal = await Withdrawal.findByPk(id);
    if (!withdrawal) return res.status(404).json({ message: 'Withdrawal not found' });

    withdrawal.status = 'rejected';
    await withdrawal.save();

    res.json({ message: 'Withdrawal rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
