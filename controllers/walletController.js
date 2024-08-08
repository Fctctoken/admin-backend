const Wallet = require('../models/wallet');

exports.getWalletRequests = async (req, res) => {
  try {
    const requests = await Wallet.findAll();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createWalletRequest = async (req, res) => {
  const { userId, address } = req.body;

  try {
    const request = await Wallet.create({ userId, address });
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.approveWalletRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const request = await Wallet.findByPk(id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.status = 'approved';
    await request.save();

    res.json({ message: 'Request approved' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.rejectWalletRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const request = await Wallet.findByPk(id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.status = 'rejected';
    await request.save();

    res.json({ message: 'Request rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
