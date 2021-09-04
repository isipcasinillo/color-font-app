const { Model, Datatypes, DataTypes } = require('sequelize');

const sequelize = require('../config/connection')

class Pallete extends Model {

};

Pallete.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        color1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        font1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        font2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        font3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pallete',
    }
);


module.exports = Pallete;