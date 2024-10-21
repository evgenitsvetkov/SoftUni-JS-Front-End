function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[type=button]');

    buttonElements.forEach(button => {
        button.addEventListener('click', () => {
            const daysInputElement = document.getElementById('days');                 
            const hoursInputElement = document.getElementById('hours'); 
            const minutesInputElement = document.getElementById('minutes');
            const secondsInputElement = document.getElementById('seconds'); 

            if (daysInputElement.value > 0) {
                hoursInputElement.value = Number(daysInputElement.value * 24);
                minutesInputElement.value = Number(hoursInputElement.value * 60);
                secondsInputElement.value = Number(minutesInputElement.value * 60);
            } else if (hoursInputElement.value > 0) {
                daysInputElement.value = Number(hoursInputElement.value / 24);
                minutesInputElement.value = Number(hoursInputElement.value * 60);
                secondsInputElement.value = Number(minutesInputElement.value * 60);
            } else if (minutesInputElement.value > 0) {
                secondsInputElement.value = Number(minutesInputElement.value * 60);
                hoursInputElement.value = Number(minutesInputElement.value / 60);
                daysInputElement.value = Number(hoursInputElement.value / 24);
            } else if (secondsInputElement.value > 0) {
                minutesInputElement.value = Number(secondsInputElement.value / 60);
                hoursInputElement.value = Number(minutesInputElement.value / 60);
                daysInputElement.value = Number(hoursInputElement.value / 24);
            }
        });
    });
}