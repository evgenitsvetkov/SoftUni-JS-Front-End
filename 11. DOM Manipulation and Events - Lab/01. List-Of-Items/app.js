function addItem() {
    const inputElement = document.getElementById('newItemText');

    const createNewElement = document.createElement('li');
    createNewElement.textContent = inputElement.value;

    const ulElement = document.querySelector('ul');
    ulElement.appendChild(createNewElement);

    inputElement = '';
}