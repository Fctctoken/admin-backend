const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fund = sequelize.define('Fund', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

module.exports = Fund;
