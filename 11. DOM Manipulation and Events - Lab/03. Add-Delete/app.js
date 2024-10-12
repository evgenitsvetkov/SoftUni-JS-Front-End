function addItem() {
    const itemsElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');
    
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    
    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    liElement.appendChild(deleteButton);
    itemsElement.appendChild(liElement);

    inputElement.value = '';
}