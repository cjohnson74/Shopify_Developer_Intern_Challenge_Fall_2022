const { Warehouse } = require('../models');

const warehouseData = [
    {
        warehouse_location: 'California',
        warehouse_name: 'us-west-1-cal-1a',
    },
    {
        warehouse_location: 'Atlanta',
        warehouse_name: 'us-east-1-atl-1a',
    },
    {
        warehouse_location: 'Nevada',
        warehouse_name: 'us-west-2-nev-1a',
    },
    {
        warehouse_location: 'New York City',
        warehouse_name: 'us-east-1-nyc-1a',
    },
    {
        warehouse_location: 'Ohio',
        warehouse_name: 'us-east-1-ohi-1a',
    },
    {
        warehouse_location: 'Portland',
        warehouse_name: 'us-west-2-pdx-1a',
    },
    {
        warehouse_location: 'Texas',
        warehouse_name: 'us-east-1-tex-1a',
    },
];

const seedWarehouses = () => Warehouse.bulkCreate(warehouseData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedWarehouses;