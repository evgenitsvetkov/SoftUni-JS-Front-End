function lockedProfile() {
    const profileElements = document.querySelectorAll('div.profile');

    profileElements.forEach(element => {
        const inputUnlockElement = element.querySelector('input[value=unlock]');
        const hiddenDetailsElement = element.querySelector('div');
        const buttonElement = element.querySelector('button');

        buttonElement.addEventListener('click', (e) => {
            if (!inputUnlockElement.checked) {
                return;
            }

            if (e.currentTarget.textContent == 'Show more') {
                hiddenDetailsElement.style.display = 'block';
                e.currentTarget.textContent = 'Hide it';   
            } else {
                hiddenDetailsElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more'    
            }
        });
    
    });
}