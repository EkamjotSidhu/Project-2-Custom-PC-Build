const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class saveconfig extends Model { }

saveconfig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    motherboard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keyboard: {
      type: DataTypes.STRING,
      allowNull: true
    },

    gpu: {
      type: DataTypes.STRING,
      allowNull: true
    },

    cases: {
      type: DataTypes.STRING,
      allowNull: true
    },

    casefan: {
      type: DataTypes.STRING,
      allowNull: true
    },

    cpu: {
      type: DataTypes.STRING,
      allowNull: true
    },

    // monitor: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'saveconfig',
  }
);

module.exports = saveconfig;
