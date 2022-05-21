const { InventoryItem } = require('../models');

const inventoryItemData = [
    {
        name: 'Print Book',
        price: 14.99,
        stock: 1236,
        warehouse_id: 2,
    },
    {
        name: 'Vinyl',
        price: 19.99,
        stock: 423,
        warehouse_id: 1,
    },
    {
        name: 'Belt Buckle',
        price: 5.99,
        stock: 278,
        warehouse_id: 7,
    },
    {
        name: 'False Eyelashes',
        price: 4.99,
        stock: 569,
        warehouse_id: 5,
    },
    {
        name: 'Household Cleaning Supply Kit',
        price: 52.99,
        stock: 396,
        warehouse_id: 3,
    },
    {
        name: 'Circuit Board',
        price: 129.99,
        stock: 52,
        warehouse_id: 7,
    },
    {
        name: 'Toy Vehicle',
        price: 12.99,
        stock: 839,
        warehouse_id: 3,
    },
    {
        name: 'Dinnerware',
        price: 35.99,
        stock: 1298,
        warehouse_id: 7,
    },
    {
        name: 'Pet Carrier',
        price: 154.99,
        stock: 371,
        warehouse_id: 1,
    },
    {
        name: 'Curtain',
        price: 45.99,
        stock: 364,
        warehouse_id: 3,
    },
    {
        name: 'Marine Radar',
        price: 389.99,
        stock: 128,
        warehouse_id: 2,
    },
    {
        name: 'DJ System',
        price: 789.99,
        stock: 84,
        warehouse_id: 6,
    },
    {
        name: 'Measuring Cup',
        price: 6.99,
        stock: 659,
        warehouse_id: 5,
    },
    {
        name: 'Shampoo',
        price: 12.99,
        stock: 306,
        warehouse_id: 1,
    },
    {
        name: 'Computer',
        price: 1299.99,
        stock: 156,
        warehouse_id: 6,
    },
    {
        name: 'Cables',
        price: 57.99,
        stock: 2437,
        warehouse_id: 7,
    },
    {
        name: 'Mouse Pad',
        price: 17.99,
        stock: 3476,
        warehouse_id: 4,
    },
];

const seedInventoryItems = () => InventoryItem.bulkCreate(inventoryItemData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedInventoryItems;