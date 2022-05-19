const { InventoryItem } = require('../models');

const inventoryItemData = [
    {
        inventoryItem_name: '',
        price: 14.99,
        stock: 14,
        warehouse_id: 1,
    }
];

const seedInventoryItems = () => InventoryItem.bulkCreate(inventoryItemData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedInventoryItems;