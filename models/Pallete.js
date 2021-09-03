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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        pallete_id: {
            type: DataTypes.INTEGER,
            references: {
                modle: 'user',  
                key: 'id',
            },
        },
    },
    {
        hooks: {
          
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pallete',
      }
    
)


module.exports = Pallete;