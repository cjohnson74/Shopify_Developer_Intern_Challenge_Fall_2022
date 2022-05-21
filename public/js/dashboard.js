const newFormHandler = async (event) => {
    event.preventDefault();

    const location = docuement.querySelector('#warehouse-location').value.trim();
    const name = document.querySelector('#warehouse-name').value.trim();

    if (location && name) {
        const response = await fetch('/api/warehouses', {
            method: 'POST',
            body: JSON.stringify({ location, name }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create warehouse');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch('/api/warehouses/${id}', {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete warehouse');
        }
    }
};

document
    .querySelector('.new-warehouse-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.warehouse-list')
    .addEventListener('click', delButtonHandler);