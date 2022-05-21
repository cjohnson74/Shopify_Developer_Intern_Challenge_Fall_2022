const newInventoryItemHandler = async (event) => {

    const name = document.querySelector('#inventoryItem-name').value.trim();
    const price = document.querySelector('#inventoryItem-price').value.trim();
    const stock = document.querySelector('#inventoryItem-stock').value.trim();
    const dataElement = document.getElementById('warehouse-id');
    var warehouse_id = dataElement.getAttribute('data-id');
    console.log(name, price, stock, warehouse_id);
    if (name) {
        await fetch('/api/inventoryitems/', {
            method: 'POST',
            body: JSON.stringify({ name, price, stock, warehouse_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                fetch('/api/warehouses/' + warehouse_id, {
                    method: 'GET',
                });
                event.preventDefault();
            } else {
                alert('Failed to create inventoryItem');
            }
        })
    }
}

document
    .querySelector('#new-inventoryItem-form')
    .addEventListener('submit', newInventoryItemHandler);