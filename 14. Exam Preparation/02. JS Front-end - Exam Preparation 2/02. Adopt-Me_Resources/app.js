window.addEventListener("load", solve);

function solve() {
  const inputTypeOfAnimal = document.getElementById('type');
  const inputGender = document.getElementById('gender');
  const inputAge = document.getElementById('age');
  
  const adoptButton = document.getElementById('adopt-btn');
  adoptButton.addEventListener('click', checkInfoPetHandler);
  
  const [adoptionInfo, adoptedList] = document.querySelectorAll('div#pet-info ul');

  function clearInput() {
    inputTypeOfAnimal.value = '';
    inputGender.value = '';
    inputAge.value = '';
  }

  function editPetHandler(name, gender, age) {
    inputTypeOfAnimal.value = name.textContent.slice(4);
    inputGender.value = gender.textContent.slice(7);
    inputAge.value = age.textContent.slice(4);

    const liElement = adoptionInfo.querySelector('li');
    liElement.remove();
  }

  function clearAdoptedPetHandler() {
    adoptedList.querySelector('li').remove();
  }

  function adoptPetHandler() {
    const liElement = adoptionInfo.querySelector('li');
    const cloneAdoptionList = liElement.cloneNode(true);

    liElement.remove();

    const clonedButtons = cloneAdoptionList.querySelector('div');
    clonedButtons.remove();

    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-btn');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', clearAdoptedPetHandler);

    cloneAdoptionList.appendChild(clearButton);

    adoptedList.appendChild(cloneAdoptionList);
  }
  
  function checkInfoPetHandler(e) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `Pet:${inputTypeOfAnimal.value}`;
    
    const pGenderElement = document.createElement('p');
    pGenderElement.textContent = `Gender:${inputGender.value}`;
    
    const pAgeElement = document.createElement('p');
    pAgeElement.textContent = `Age:${inputAge.value}`;
    
    const articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pGenderElement);
    articleElement.appendChild(pAgeElement);
    
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => 
      editPetHandler(pNameElement, pGenderElement, pAgeElement));
    
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', adoptPetHandler);
    
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons');
    buttonsDivElement.appendChild(editButton);
    buttonsDivElement.appendChild(doneButton);
    
    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(buttonsDivElement);
    
    adoptionInfo.appendChild(liElement);
    
    clearInput();

    e.preventDefault();
  }
}