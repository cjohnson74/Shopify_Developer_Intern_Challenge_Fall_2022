const router = require('express').Router();
const warehouseRoutes = require('./warehouse-routes');

router.use('/warehouses', warehouseRoutes);

module.exports = router;