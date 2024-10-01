function toggle() {
    
    const buttonElement = document.querySelector('div.head span.button');
    const text = document.getElementById('extra');

    const isHidden = text.style.display === 'none';

    if (isHidden || !text.style.display) {
        text.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        text.style.display = 'none';
        buttonElement.textContent = 'More';
     }
}