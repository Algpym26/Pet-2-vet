const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
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
            primaryKey:true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.VARCHAR,
            allowNull: false,
        },

        Declawed: {
            type: DataTypes.BOOLEAN,
            allowNull: false

        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: false

        },

        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }

    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Cat',
      }
)

module.exports = Cat;
