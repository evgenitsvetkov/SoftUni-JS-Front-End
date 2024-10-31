function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadButton = document.getElementById('btnLoad');
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');
    const createButton = document.getElementById('btnCreate');
    const phoneBookElement = document.getElementById('phonebook');

    loadButton.addEventListener('click', loadPhoneBookHandler);
    createButton.addEventListener('click', createNewContactHandler);

    function createNewContactHandler() {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: inputPerson.value,
                phone: inputPhone.value
            })
        })
        .then(() => {
            inputPerson.value = '';
            inputPhone.value = '';

            window.location.reload();
        });
    }

    function loadPhoneBookHandler() {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((result) => {
                Object.keys(result).map(entry => {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${result[entry].person}: ${result[entry].phone}`;
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';

                    deleteButton.addEventListener('click', () => {
                       fetch(`${baseUrl}/${entry}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                       })
                       .then(response => response.json())
                       .then(result => {
                        console.log(result)

                        phoneBookElement.textContent = '';

                        loadPhoneBookHandler();
                       });
                    });
               
                    liElement.appendChild(deleteButton);
                    phoneBookElement.appendChild(liElement);
                });
            });
    }
}

attachEvents();