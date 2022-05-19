const seedWarehouses = require('./warehouse-seeds');
const seedInventoryItems = require('./inventoryItem-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedWarehouses();
    console.log('\n----- WAREHOUSES SEEDED -----\n');

    await seedInventoryItems();
    console.log('\n----- INVENTORYITEMS SEEDED -----\n');

    process.exit(0);
};

seedAll();