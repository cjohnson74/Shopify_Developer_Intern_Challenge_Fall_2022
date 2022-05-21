const newInventoryItemHandler = async (event) => {

    const inventoryItemName = document.querySelector('#inventoryItem-name').value.trim();
    const inventoryItemPrice = document.querySelector('#inventoryItem-price').value.trim();
    const inventoryItemStock = document.querySelector('#inventoryItem-stock').value.trim();
    const inventoryItemWarehouse_id = document.querySelector('#inventoryItem-stock').value.trim();
    const dataElement = document.getElementById('warehouse-id');
    var inventoryItem_id = dataElement.getAttribute('data-id');
    console.log(inventoryItem_id);
    if (inventoryItemName) {
        await fetch('/api/inventoryItems', {
            method: 'POST',
            body: JSON.stringify({ inventoryItemName, inventoryItemPrice, inventoryItemStock, inventoryItemWarehouse_id
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                fetch('/api/warehouse/' + warehouse_id, {
                    method: 'GET',
                });
                window.location.reload();
            } else {
                alert('Failed to create inventoryItem');
            }
        })
    }
}

document
    .querySelector('.new-inventoryItem-form')
    .addEventListener('submit', newInventoryItemHandler);