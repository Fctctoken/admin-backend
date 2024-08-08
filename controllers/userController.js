const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ where: { role: 'customer' } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.toggleUserStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isActive = !user.isActive;
    await user.save();

    res.json({ message: 'User status updated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
