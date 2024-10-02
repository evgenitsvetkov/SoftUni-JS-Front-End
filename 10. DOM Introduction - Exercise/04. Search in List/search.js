function search() {
   const townElements = document.querySelectorAll("#towns li");

   function getMatchElements(input) {
      return Array.from(townElements).filter((element) => 
         element.textContent.toLowerCase().includes(input.toLowerCase()));
   }

   function clearPreviousState() {
      townElements.forEach((element) => {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';   
      });
   }

   clearPreviousState();

   const [inputElement] = document.getElementsByTagName('input');
   const matchElements = getMatchElements(inputElement.value);

   matchElements.forEach((matchelement) => {
      matchelement.style.fontWeight = 'bold';
      matchelement.style.textDecoration = 'underline';
   });

   document.querySelector('div#result').textContent = `${matchElements.length} matches found`;
}
