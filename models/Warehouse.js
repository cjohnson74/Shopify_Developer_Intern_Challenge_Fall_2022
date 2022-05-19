const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Warehouse extends Model {}

Warehouse.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'warehouse',
    }
);

module.exports = Warehouse;