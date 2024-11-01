function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
  
  const tbodyElement = document.querySelector('table#results tbody');
  const submitButton = document.getElementById('submit');
  const [
    firstNameInput,
    lastNameInput,
    facultyNumberInput,
    gradeInput
  ] = document.querySelectorAll('.inputs input[type=text]');
  
  function getAllStudents() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((result) => {
      appendStudents(Object.values(result));
    });
  }
  
  function appendStudents(students) {
    students.forEach((student) => {
      const trElement = document.createElement('tr');
      const tdFirstNameElement = document.createElement('td');
      const tdLastNameElement = document.createElement('td');
      const tdFacultyNumberElement = document.createElement('td');
      const tdGradeElement = document.createElement('td');
      
      tdFirstNameElement.textContent = student.firstName;
      tdLastNameElement.textContent = student.lastName;
      tdFacultyNumberElement.textContent = student.facultyNumber;
      tdGradeElement.textContent = student.grade;
      
      trElement.appendChild(tdFirstNameElement);
      trElement.appendChild(tdLastNameElement);
      trElement.appendChild(tdFacultyNumberElement);
      trElement.appendChild(tdGradeElement);
      
      tbodyElement.appendChild(trElement);
    });
  }
  
  getAllStudents();
  
  submitButton.addEventListener('click', submitStudentDataHandler);
  
  function submitStudentDataHandler() {
    if(firstNameInput.value !== null && firstNameInput.value !== '' && firstNameInput.value !== undefined || 
      lastNameInput.value !== null && lastNameInput.value !== '' && lastNameInput.value !== undefined ||
      facultyNumberInput.value !== null && facultyNumberInput.value !== '' && facultyNumberInput.value !== undefined ||
      gradeInput.value !== null && gradeInput.value !== '' && gradeInput.value !== undefined
    ) {
      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          facultyNumber: facultyNumberInput.value,
          grade: gradeInput.value
        })
      })
      .then(() => {
        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
        
        window.location.reload();
      });
    }
  }
}

attachEvents();