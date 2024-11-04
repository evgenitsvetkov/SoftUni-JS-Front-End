const baseUrl = 'http://localhost:3030/jsonstore/records';

const formElement = document.querySelector('form');
const listOfRecords = document.getElementById('list');

const loadRecordsButton = document.getElementById('load-records');
loadRecordsButton.addEventListener('click', getRecordsHandler);

const [inputName, inputSteps, inputCalories] = document.querySelectorAll('form input');

const [addRecordButton, editRecordButton] = document.querySelectorAll('div#btn-container button');
addRecordButton.addEventListener('click', addRecordHandler);
editRecordButton.addEventListener('click', editRecordHandler);

function clearInput() {
    inputName.value = '';
    inputSteps.value = '';
    inputCalories.value = '';
}

function editRecordHandler() {
    const recordId = formElement.getAttribute('data-record-id');

    fetch(`${baseUrl}/${recordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName.value,
            steps: inputSteps.value,
            calories: inputCalories.value,
            _id: recordId
        })
    })
    .then(() => {
        formElement.removeAttribute('data-record-id');

        addRecordButton.removeAttribute('disabled');
        editRecordButton.setAttribute('disabled', 'disabled');

        getRecordsHandler();
        clearInput();
    })
}

function addRecordHandler() {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName.value,
            steps: inputSteps.value,
            calories: inputCalories.value
        })
    })
    .then(() => {
        clearInput();
        getRecordsHandler();
    });
}

function getRecordsHandler() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((result) => {
        fetchAllRecords(Object.values(result));
    });
}

function changeRecordHandler(e, _id) {
    const currentButtons = e.target.parentElement;
    const currentRecord = currentButtons.parentElement;

    const [currentName, currentSteps, currentCalories] = currentRecord.querySelectorAll('div.info p');

    inputName.value = currentName.textContent;
    inputSteps.value = currentSteps.textContent;
    inputCalories.value = currentCalories.textContent;

    formElement.setAttribute('data-record-id', _id);

    editRecordButton.removeAttribute('disabled');
    addRecordButton.setAttribute('disabled', 'disabled');
}

function deleteRecordHandler(_id) {
    fetch(`${baseUrl}/${_id}`, {
        method: 'DELETE'
    })
    .then(() => getRecordsHandler());
}

function fetchAllRecords(records) {
    listOfRecords.textContent = '';

    records.forEach(({ name, steps, calories, _id}) => {
        const pNameElement = document.createElement('p');
        pNameElement.textContent = name;
        
        const pStepsElement = document.createElement('p');
        pStepsElement.textContent = steps;
        
        const pCaloriesElement = document.createElement('p');
        pCaloriesElement.textContent = calories;
        
        const divInfoElement = document.createElement('div');
        divInfoElement.classList.add('info');
        divInfoElement.appendChild(pNameElement);
        divInfoElement.appendChild(pStepsElement);
        divInfoElement.appendChild(pCaloriesElement);
        
        const changeButton = document.createElement('button');
        changeButton.classList.add('change-btn');
        changeButton.textContent = 'Change';
        changeButton.addEventListener('click', (e) => changeRecordHandler(e, _id));

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteRecordHandler(_id));
        
        const divButtons = document.createElement('div');
        divButtons.classList.add('btn-wrapper');
        divButtons.appendChild(changeButton);
        divButtons.appendChild(deleteButton);
        
        const liElement = document.createElement('li');
        liElement.classList.add('record');
        liElement.appendChild(divInfoElement);
        liElement.appendChild(divButtons);

        listOfRecords.appendChild(liElement);
    });
}
