const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {};

Character.init(
  {
    //BASIC
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subrace: {
        type: DataTypes.STRING,
        //might not have a subrace,
        allowNull: true,
      },
    //DESCRIPTION
    background: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    look: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    personality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    //ATTRIBUTES
    strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    dexterity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    constitution: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    intelligence: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    wisdom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    charisma: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Character;