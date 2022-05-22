// import models
const InventoryItem = require('./InventoryItem');
const Warehouse = require('./Warehouse');

// InventoryItems belongsTo Warehouse
InventoryItem.belongsTo(Warehouse, {
    foreignKey: 'warehouse_id',
});
// Warehouses have many InventoryItems
Warehouse.hasMany(InventoryItem, {
    foreignKey: 'warehouse_id',
    onDelete: 'cascade',
    hooks: true
});

module.exports = {
    InventoryItem,
    Warehouse,
};