function deleteByEmail() {
    debugger;
    const inputElement = document.querySelector('input[type=text][name=email]');
    const customerTableElement = document.getElementById('customers');
    const resultElement = document.getElementById('result');

    const searchEmail = inputElement.value;
    const tdElements = customerTableElement.querySelectorAll('tbody td:last-child');

    const searchElement = Array
        .from(tdElements)
        .find(element => element.textContent == searchEmail);

    if (searchElement) {
        searchElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}