const newWarehouseFormHandler = async (event) => {

    const location = document.querySelector('#warehouse-location').value.trim();
    const name = document.querySelector('#warehouse-name').value.trim();
    console.log(name, location);
    event.preventDefault();
    if (location && name) {
        const response = await fetch('/api/warehouses/', {
            method: 'POST',
            body: JSON.stringify({ location, name }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/api/warehouses');
        } else {
            alert('Failed to create warehouse');
        }
    }
};

document
    .querySelector('#new-warehouse-form')
    .addEventListener('submit', newWarehouseFormHandler);