const router = require('express').Router();
const { Warehouse, InventoryItem } = require('../../models');

// The '/api/warehouses' endpoint
router.get('/', (req, res) => {
    // find all warehouses
    // includes its associated InventoryItems
    Warehouse.findAll({
        include: InventoryItem,
    })
        // Serialize data so that template can read it
        .then((warehouseData) =>
            warehouseData.map((warehouse) => warehouse.get({ plain: true }))
        )

        // Pass serialized data into template
        .then((warehouses) =>
            res.render('dashboard', {
                warehouses,
            })
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one warehouse by its 'id' value
    // includes its associated InventoryItems
    Warehouse.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
        include: InventoryItem, where: { warehouse_id: req.params.id },
    })
        .then((warehouse) => warehouse.get({ plain: true }))
        .then((warehouse) =>
            res.render('warehouse', {
                ...warehouse,
            })
        );
});
router.post('/', async (req, res) => {
    // create a new warehouse
    Warehouse.create({
        ...req.body,
    })
        .then((warehouse) => res.status(200).json(warehouse))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.put('/:id', (req, res) => {
    // update a warehouse by its 'id' value
    Warehouse.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((warehouse) => {
            // find all associated inventoryItems from WarehouseInventoryItems
            return WarehouseInventoryItem.findAll({ where: { warehouse_id: req.params.id } });
        })
        .then((warehouseInventoryItems) => {
            // get list of current inventoryItem_ids
            const warehouseInventoryItemIds = warehouseInventoryItems.map(
                ({ inventoryItem_id }) => inventoryItem_id
            );
            const newWarehouseInventoryItems = req.body.InventoryItemIds
                .filter((inventoryItem_id) => !warehouseInventoryItemIds.includes(inventoryItem_id))
                .map((inventoryItem_id) => {
                    return {
                        warehouse_id: req.params.id,
                        inventoryItem_id,
                    };
                });
            // figure out which ones to remove
            const warehouseInventoryItemsToRemove = warehouseInventoryItems
                .filter(({ inventoryItem_id }) => !req.body.inventoryItemIds.includes(inventoryItem_id))
                .map(({ id }) => id);

            // run both actions
            return Promise.all([
                WarehouseInventoryItem.destroy({ where: { id: warehouseInventoryItemsToRemove } }),
                WarehouseInventoryItem.bulkCreate(newWarehouseInventoryItems),
            ]);
        })
        .then((updatedWarehouseInventoryItems) =>
            res.status(200).json(updatedWarehouseInventoryItems)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', async (req, res) => {
    // delete a warehouse by its 'id' value
    Warehouse.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((warehouses) => {
            console.log(warehouses);
            res.json(warehouses)
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;