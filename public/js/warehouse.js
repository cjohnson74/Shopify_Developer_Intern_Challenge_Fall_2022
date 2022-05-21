const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/warehouses/${id}`, {
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
    .querySelector('#warehouse-destroy')
    .addEventListener('click', delButtonHandler);