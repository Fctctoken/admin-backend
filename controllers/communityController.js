const User = require('../models/User');

exports.getActiveMembers = async (req, res) => {
  try {
    const activeMembers = await User.findAll({ where: { isActive: true, role: 'customer' } });
    res.json(activeMembers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getInactiveMembers = async (req, res) => {
  try {
    const inactiveMembers = await User.findAll({ where: { isActive: false, role: 'customer' } });
    res.json(inactiveMembers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
