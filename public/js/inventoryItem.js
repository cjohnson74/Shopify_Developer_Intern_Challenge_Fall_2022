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

const editInventoryItemButtonHandler = async (event) => {
    const name = document.querySelector('#inventoryItem-name').value.trim();
    const price = document.querySelector('#inventoryItem-price').value.trim();
    const stock = document.querySelector('#inventoryItem-stock').value.trim();
    const element = document.querySelector('#inventoryItem-id');
    const id = element.getAttribute('data-id');
    console.log(name, price, stock, id)
    if (name) {
        await fetch(`/api/inventoryitems/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, price, stock }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                alert('Inventory Item Edit Successfully!')
            } else {
                alert('Failed to edit inventory item')
            }
        })
    }
}

const delInventoryItemButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        const response = await fetch(`/api/inventoryItems/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Inventory item failed to delete.');
        }
    }
};

document
    .querySelector('#edit-inventoryItem-form')
    .addEventListener('submit', editInventoryItemButtonHandler);

document
    .querySelector('#inventoryItem-destroy')
    .addEventListener('click', delInventoryItemButtonHandler);

document
    .querySelector('#new-inventoryItem-form')
    .addEventListener('submit', newInventoryItemHandler);