function extractText() {
    const itemElements = document.getElementById('items');
    const resultElements = document.getElementById('result');

    return resultElements.textContent = itemElements.innerText;
}