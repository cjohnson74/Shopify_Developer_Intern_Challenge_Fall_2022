const { Warehouse } = require('../models');

const warehouseData = [
    {
        location: 'California',
        name: 'us-west-1-cal-1a',
    },
    {
        location: 'Atlanta',
        name: 'us-east-1-atl-1a',
    },
    {
        location: 'Nevada',
        name: 'us-west-2-nev-1a',
    },
    {
        location: 'New York City',
        name: 'us-east-1-nyc-1a',
    },
    {
        location: 'Ohio',
        name: 'us-east-1-ohi-1a',
    },
    {
        location: 'Portland',
        name: 'us-west-2-pdx-1a',
    },
    {
        location: 'Texas',
        name: 'us-east-1-tex-1a',
    },
];

const seedWarehouses = () => Warehouse.bulkCreate(warehouseData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedWarehouses;