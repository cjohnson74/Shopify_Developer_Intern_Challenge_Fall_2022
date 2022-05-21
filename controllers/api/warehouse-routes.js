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
            res.render('homepage', {
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
        .then((warehouses) =>
            res.render('warehouse', {
                ...warehouses,
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
        if (!warehouse) {
            res.status(404).json({ message: "No warehouse with this id!" });
            return;
        }
        res.status(200).json(warehouse);
    })
    .catch((err) => {
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