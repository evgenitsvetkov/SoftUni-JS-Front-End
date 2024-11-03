const baseUrl = 'http://localhost:3030/jsonstore/games';

const formElement = document.querySelector('#form form');
const gamesList = document.getElementById('games-list');
const loadGamesButton = document.getElementById('load-games');
loadGamesButton.addEventListener('click', loadGamesHandler);

const [gameName, type, players] = document.querySelectorAll('form input');
const [addGameButton, editGameButton] = document.querySelectorAll('div#btn-container button');

addGameButton.addEventListener('click', addGameHandler);
editGameButton.addEventListener('click', editGameHandler);

function editGameHandler() {
    const gameId = formElement.getAttribute('data-game-id');  

    fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: gameName.value,
            type: type.value,
            players: players.value,
            _id: gameId
        })
    })
    .then(() => {
        gameName.value = '';
        type.value = '';
        players.value = '';

        formElement.removeAttribute('data-game-id');
        editGameButton.setAttribute('disabled', 'disabled');
        addGameButton.removeAttribute('disabled');

        loadGamesHandler();
    })
}

function addGameHandler() {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: gameName.value,
            type: type.value,
            players: players.value,
        })
    })
    .then(() => {
        gameName.value = '';
        type.value = '';
        players.value = '';

        loadGamesHandler();
    })
}

function loadGamesHandler() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((result) => { 
        appendAllGames(Object.values(result)) 
    });
}

function changeButtonHandler(e, _id) {
    const buttonsContainer = e.target.parentElement;
    const currentGame = buttonsContainer.parentElement;
    const [currentName, currentType, currentPlayers] = currentGame.querySelectorAll('div.content p');
    
    gameName.value = currentName.textContent;
    type.value = currentType.textContent;
    players.value = currentPlayers.textContent;
    
    formElement.setAttribute('data-game-id', _id);

    editGameButton.removeAttribute('disabled');
    addGameButton.setAttribute('disabled', 'disabled');
}

function deleteGameHandler(_id) {
    fetch(`${baseUrl}/${_id}`, {
        method: 'DELETE'
    })
    .then(() => loadGamesHandler());
}

function appendAllGames(games) {
    gamesList.textContent = '';

    games.forEach(({ name, type, players, _id }) => {
        const pNameElement = document.createElement('p');
        pNameElement.textContent = name;
        const pPlayersElement = document.createElement('p');
        pPlayersElement.textContent = players;
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = type;
        
        const divContent = document.createElement('div');
        divContent.classList.add('content');
        divContent.appendChild(pNameElement);
        divContent.appendChild(pTypeElement);
        divContent.appendChild(pPlayersElement);
        
        const changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.classList.add('change-btn');
        changeButton.addEventListener('click', (e) => changeButtonHandler(e, _id));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => deleteGameHandler(_id));
        
        const divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add('buttons-container');
        divButtonsElement.appendChild(changeButton);
        divButtonsElement.appendChild(deleteButton);
        
        const divTypeElement = document.createElement('div');
        divTypeElement.classList.add('board-game');
        divTypeElement.appendChild(divContent);   
        divTypeElement.appendChild(divButtonsElement);   
        
        const gamesList = document.getElementById('games-list');
        gamesList.appendChild(divTypeElement);
    }); 
}