function addItem() {
    const menuElement = document.getElementById('menu');
    const textInputElement = document.getElementById('newItemText');
    const valueInputElement = document.getElementById('newItemValue');

    const newOptionElement = document.createElement('option');

    newOptionElement.textContent = textInputElement.value;
    newOptionElement.setAttribute('value', valueInputElement.value.toString());

    menuElement.appendChild(newOptionElement);

    textInputElement.value = '';
    valueInputElement.value = '';
}