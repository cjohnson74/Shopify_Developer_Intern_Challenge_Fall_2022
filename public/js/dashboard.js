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

document
    .querySelector('.new-warehouse-form')
    .addEventListener('submit', newFormHandler);