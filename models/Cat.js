const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
// id
// name
// Declawed
// age
//weight

class Cat extends Model {}

Cat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    declawed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Owner",
        key: "id",
      },
    },
  },

  {
    sequelize,
    bcrypt,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cat",
  }
);

module.exports = Cat;
