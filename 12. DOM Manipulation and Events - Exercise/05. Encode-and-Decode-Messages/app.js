function encodeAndDecodeMessages() {
    const [encodeButton, decodeButton] = document.querySelectorAll('div button');
    const [encodeInputElement, decodeInputElement] = document.querySelectorAll('div textarea');

    function encodeOrDecodeMessage(message, asciiDiff) {
        return message
            .split('')
            .map((char) => {
                const currentAsciiValue = char.charCodeAt(0);
                return String.fromCharCode(currentAsciiValue + asciiDiff);
            }).join('');
    };

    function encodeMessageHandler() {
        decodeInputElement.value = encodeOrDecodeMessage(encodeInputElement.value, 1); 
        encodeInputElement.value = '';
    }

    function decodeMessageHandler() {
        decodeInputElement.value = encodeOrDecodeMessage(decodeInputElement.value, - 1);
    }

    encodeButton.addEventListener('click', encodeMessageHandler);
    decodeButton.addEventListener('click', decodeMessageHandler);
}