function create(words) {
  const contentElement = document.getElementById('content');
  
  for (let i = 0; i < words.length; i++) {
   const newDiv = document.createElement('div');
   const newPElement = document.createElement('p');

   newPElement.style.display = 'none';
   newPElement.textContent = 'Section ' + words[i];
   
   newDiv.addEventListener('click', () => {
      newPElement.style.display = 'block';
   });
   
   newDiv.appendChild(newPElement);
   contentElement.appendChild(newDiv);
  }
}