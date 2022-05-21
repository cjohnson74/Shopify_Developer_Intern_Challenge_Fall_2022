// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize InvetoryItem model (table) by extending off Sequelize's Model class
class InventoryItem extends Model {}

// set up fields and rules for InventoryItem model
InventoryItem.init(
    {
        // define columns
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
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        warehouse_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'warehouse',
                key: 'id',
            },
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventoryItem',
    }
);

module.exports = InventoryItem;