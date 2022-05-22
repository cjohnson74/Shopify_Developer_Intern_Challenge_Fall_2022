const router = require('express').Router();
const { InventoryItem, Warehouse } = require('../../models');

// The '/api/inventoryitems' endpoint

// get all inventoryitems
router.get('/', (req, res) => {
    // find all inventoryItems
    // includes its associated Warehouse
    InventoryItem.findAll({
        include: [
            Warehouse,
        ],
    })
        // Serialize data so that template can read it
        .then((inventoryItem) => res.status(200).json(inventoryItem))
        .catch((err) => {
            res.status(500).json(err);
        });
});

// get one inventoryItem
router.get('/:id', (req, res) => {
    // find a single inventoryItem by its 'id'
    // includes its associated Warehouse
    InventoryItem.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
        include: [
            Warehouse,
        ],
    })
    .then((inventoryItem) => inventoryItem.get({ plain: true }))
    .then((inventoryItem) =>
        res.render('inventoryItem', {
            ...inventoryItem,
        })
    );
});

// create new inventoryItem
router.post('/', (req, res) => {
    InventoryItem.create({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        warehouse_id: req.body.warehouse_id,
    })
        .then((inventoryItem) => {
            res.status(200).json(inventoryItem);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// update inventoryItem
router.put('/:id', (req, res) => {
    // update inventoryItem data
    InventoryItem.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((inventoryItem) => {
        if (!inventoryItem) {
            res.status(404).json({ message: "No inventoryItem with this id!" });
            return;
        }
        res.status(200).json(inventoryItem);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    // delete one inventoryItem by its 'id' value
    InventoryItem.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((inventoryItems) => {
            console.log(inventoryItems);
            res.json(inventoryItems);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;