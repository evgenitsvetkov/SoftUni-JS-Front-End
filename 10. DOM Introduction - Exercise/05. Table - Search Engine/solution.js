function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rowElements = document.querySelectorAll("table tbody tr");

      function getMatchElements(input) {
         return Array.from(rowElements).filter((element) => 
            element.textContent.toLowerCase().includes(input.toLowerCase()));
      }

      function clearHighlightedElements() {
         return rowElements.forEach(element => element.classList.remove('select'));
      }

      clearHighlightedElements();

      const inputElement = document.getElementById('searchField');
      const matchElements = getMatchElements(inputElement.value);

      matchElements.forEach((matchelement) => matchelement.classList.add('select'));

      inputElement.value = '';
   }
}