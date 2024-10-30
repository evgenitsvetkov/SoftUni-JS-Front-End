function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    
    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const authorName = document.querySelector('input[name=author]');
    const authorMessage = document.querySelector('input[name=content]');
    const textAreaElement = document.getElementById('messages');
    
    submitButton.addEventListener('click', sendMessageHandler);
    refreshButton.addEventListener('click', getAllMessagesHandler);
    
    function sendMessageHandler() {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName.value,
                content: authorMessage.value    
            })
        }).then(() => {
            authorName.value = '';
            authorMessage.value = '';
        });
    };
    
    function getAllMessagesHandler() {
        fetch(baseUrl)
        .then((response) => response.json())
        .then(result => {
            textAreaElement.textContent = Object.values(result)
                .map(({author, content }) => `${author}: ${content}`)
                .join('\n')});
        };
    }

    attachEvents();