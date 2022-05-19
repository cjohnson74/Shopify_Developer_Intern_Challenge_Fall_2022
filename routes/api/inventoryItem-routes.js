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