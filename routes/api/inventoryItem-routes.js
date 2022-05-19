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
        .then((inventoryItem) => res.status(200).json(inventoryItem))
        .catch((err) => {
            console.log(err);
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
        .then((inventoryItem) => res.json(inventoryItems))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// create new inventoryItem
router.post('/', (req, res) => {
    InventoryItem.create(req.body)
        .then((inventoryItem) => {
            res.status(200).json(inventoryItem);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});