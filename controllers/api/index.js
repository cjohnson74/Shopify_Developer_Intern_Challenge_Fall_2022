const router = require('express').Router();
const warehouseRoutes = require('./warehouse-routes');
const inventoryItemRoutes = require('./inventoryItem-routes');

router.use('/warehouses', warehouseRoutes);
router.use('/inventoryitems', inventoryItemRoutes);

module.exports = router;