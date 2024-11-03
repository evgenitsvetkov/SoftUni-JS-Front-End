window.addEventListener("load", solve);

function solve() {
    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone');
    const inputCategory = document.getElementById('category');

    const addButtonElement = document.getElementById('add-btn');
    const [checkList, contactList] = document.querySelectorAll('div section ul');
    const liElement = checkList.querySelector('li');
    addButtonElement.addEventListener('click', addContactHandler);
    
    function editButtonHandler(name, phone, category) {          
      inputName.value = name.textContent.substring(5);
      inputPhone.value = phone.textContent.substring(6);
      inputCategory.value = category.textContent.substring(9);

      liElement.remove();
    }

    function deleteContactHandler() {
      contactList.querySelector('li').remove();
    }

    function saveContactHandler() {
      const checkListClone = checkList.querySelector('li').cloneNode(true);
      checkListClone.querySelector('div.buttons').remove();
            
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');
      deleteButton.addEventListener('click', deleteContactHandler);
      
      checkListClone.appendChild(deleteButton);
      contactList.appendChild(checkListClone);
      
      liElement.remove();
    }

    function addContactHandler() {
      const inputName = document.getElementById('name');
      const inputPhone = document.getElementById('phone');
      const inputCategory = document.getElementById('category');

      const pNameElement = document.createElement('p');
      pNameElement.textContent = `name:${inputName.value}`;

      const pPhoneElement = document.createElement('p');
      pPhoneElement.textContent = `phone:${inputPhone.value}`;

      const pCategoryElement = document.createElement('p');
      pCategoryElement.textContent = `category:${inputCategory.value}`;

      const articleElement = document.createElement('article');
      articleElement.appendChild(pNameElement);
      articleElement.appendChild(pPhoneElement);
      articleElement.appendChild(pCategoryElement);

      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.addEventListener('click', () => 
        editButtonHandler(pNameElement, pPhoneElement, pCategoryElement)
      );

      const saveButton = document.createElement('button');
      saveButton.classList.add('save-btn');
      saveButton.addEventListener('click', saveContactHandler);

      const divElement = document.createElement('div');
      divElement.classList.add('buttons');
      divElement.appendChild(editButton);
      divElement.appendChild(saveButton);

      const liElement = document.createElement('li');
      liElement.appendChild(articleElement);
      liElement.appendChild(divElement);

      checkList.appendChild(liElement);

      inputName.value = '';
      inputPhone.value = '';
      inputCategory.value = '';
    }
  }