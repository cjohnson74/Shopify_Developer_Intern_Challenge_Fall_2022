const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

const editButtonHandler = async (event) => {
    const location = document.querySelector('#warehouse-location').value.trim();
    const name = document.querySelector('#warehouse-name').value.trim();
    const dataElement = document.getElementById('warehouse-id');
    var id = dataElement.getAttribute('data-id');
    console.log( name, location, id );
    if (name) {
        await fetch(`/api/warehouses/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ location, name }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                alert('Warehouse Edited Successfully!')
            } else {
                alert('Failed to edit warehouse')
            }
        })
    }
}

const confirmWarehouseEditFormSubmit = async (event) => {
    const firstButton = document.querySelector('#warehouse-edit-first');
    firstButton.style = "display: none";
    const submitButton = document.querySelector('#warehouse-edit-submit');
    submitButton.style = "display: block";
}

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/warehouses/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/api/warehouses/');
        } else {
            alert('Warehouse failed to delete. All inventory items in warehouse must be moved to another warehouse or destroyed before warehouse deletion.');
        }
    }
};

document
    .querySelector('#warehouse-destroy')
    .addEventListener('click', delButtonHandler);

document
    .querySelector('#warehouse-edit-form')
    .addEventListener('submit', editButtonHandler);

document
    .querySelector('#warehouse-edit-first')
    .addEventListener('click', confirmWarehouseEditFormSubmit);