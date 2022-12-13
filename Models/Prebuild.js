const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PrebuiltPC extends Model {}

PrebuiltPC.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    build_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motherboard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chipset: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gpu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    psu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    os: {
      type: DataTypes.STRING,
      allowNull: true
    },
    case: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'prebuilds',
  }
);

module.exports = PrebuiltPC;
