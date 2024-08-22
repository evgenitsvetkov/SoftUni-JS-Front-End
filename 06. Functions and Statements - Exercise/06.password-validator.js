function isValidPassword(password) {
    const regex = '[A-Za-z]{6,10}\d{2,}/gm';
    
    function validateLength(pass) {
        const minLength = 6;
        const maxLength = 10;
        return pass.length >= minLength && pass.length <= maxLength;
    }
    
    function consistOnlyOfLettersAndDigits(pass) {
        const regex = /^[A-Za-z0-9]+$/g;
        return regex.test(pass);
    }
    
    function hasAtLeastTwoDigits(pass) {
        const minLength = 2;
        const regex = /[0-9]/g;
        return pass.match(regex)?.length >= minLength;
    }
    
    function getMessages (password) {
        
        const messages = [];

        if (!validateLength(password)) {
            messages.push('Password must be between 6 and 10 characters');
        }
        
        if (!consistOnlyOfLettersAndDigits(password)) {
            messages.push('Password must consist only of letters and digits');
        }
        
        if (!hasAtLeastTwoDigits(password)) {
            messages.push('Password must have at least 2 digits');
        }

        if (messages.length === 0) {
            messages.push('Password is valid');
        }

        return messages;
    }

    getMessages(password).forEach((msg) => console.log(msg));
}

isValidPassword('logIn');