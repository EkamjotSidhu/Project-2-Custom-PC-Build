const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monitor extends Model {}

Monitor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Amazon_link:{
      type: DataTypes.STRING,
      allowNull:true
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'monitor',
  }
);

module.exports = Monitor;
