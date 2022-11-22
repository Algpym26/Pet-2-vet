const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Dog extends Model {}

Dog.init(
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

        size: {
            type: DataTypes.VARCHAR,
            allowNull: false

        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: false

        },

        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        pet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Owner',
                key: 'id'

            }
        }

    },

    {
        sequelize,
        bcrypt,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Dog',
      }
)

module.exports = Dog;