const router = require('express').Router();
const { InventoryItem , Warehouse } = require('../models');

router.get('/', async (req, res) => {
    try {
        // Get all InventoryItems and JOIN with Warehouse data
        const inventoryItemData = await InventoryItem.findAll({
            include: Warehouse,
        });

        // Serialize data so that template can read it
        const inventoryItems = inventoryItemData.map((inventoryItem) =>
            inventoryItem.get({ plain: true })
        );
        // Pass serialized data into template
        res.render('homepage', {
            inventoryItems,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const warehousesData = await Warehouse.findAll({
            include: [{ model: InventoryItem }],
        });

        const warehouses = warehousesData.get({ plain: true });

        res.render('dashboard', {
            ...warehouses,
        });
    }   catch (err) {
            res.status(500).json(err);
    }
});

module.exports = router;