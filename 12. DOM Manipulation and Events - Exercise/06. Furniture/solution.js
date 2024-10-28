function solve() {
  const [generateButton, buyButton] = document.querySelectorAll('button');
  const [inputElement, outputElement] = document.querySelectorAll('textarea');

  const tBody = document.querySelector('tbody');
  const firstTrElement = tBody.querySelector('tr');
   
  function appendTrForEachData ({img, name, price, decFactor}) {
    const currentTrClone = firstTrElement.cloneNode(true);

    const imgTd = currentTrClone.children[0];
    imgTd.children[0].setAttribute('src', img);
    imgTd.innerHTML = imgTd.innerHTML.trim();

    const nameTd = currentTrClone.children[1];
    nameTd.children[0].textContent = name;
    nameTd.innerHTML = nameTd.innerHTML.trim();

    const priceTd = currentTrClone.children[2];
    priceTd.children[0].textContent = price;
    priceTd.innerHTML = priceTd.innerHTML.trim();
    
    const decFactorTd = currentTrClone.children[3];
    decFactorTd.children[0].textContent = decFactor;
    decFactorTd.innerHTML = decFactorTd.innerHTML.trim();
    
    const checkboxElement = currentTrClone.children[4].children[0];
    checkboxElement.disabled = false;
    checkboxElement.innerHTML = checkboxElement.innerHTML.trim();
    currentTrClone.children[4].innerHTML = currentTrClone.children[4].innerHTML.trim();
    
    currentTrClone.setAttribute('name', name);
    currentTrClone.setAttribute('price', price);
    currentTrClone.setAttribute('decFactor', decFactor);

    tBody.appendChild(currentTrClone);
  }

  function onGenerateButtonHandler() {
    const inputData = JSON.parse(inputElement.value);
    
    inputData.forEach(appendTrForEachData);
  } 

  function onBuyButtonHandler() {
    const outputData = [...document.querySelectorAll("input[type='checkbox']")]
      .filter((inputElement) => inputElement.checked)
      .reduce((acc, currInputElement) => {
        const name = currInputElement.closest('tr').getAttribute('name');
        const price = currInputElement.closest('tr').getAttribute('price');
        const decFactor = currInputElement.closest('tr').getAttribute('decFactor');
        
        currInputElement.parentElement.innerHTML = 
          currInputElement.parentElement.innerHTML.trim();

        acc.names.push(name);
        acc.totalPrice += Number(price);
        acc.totalDecFactor += Number(decFactor);

        return acc;
      }, { names: [], totalPrice: 0, totalDecFactor: 0 });

      outputElement.value = `Bought furniture: ${outputData.names.join(
        ', '
      )}\nTotal price: ${outputData.totalPrice.toFixed(
        2
      )}\nAverage decoration factor: ${
        outputData.totalDecFactor / outputData.names.length
      }`;
  }
  
  generateButton.addEventListener('click', onGenerateButtonHandler);
  buyButton.addEventListener('click', onBuyButtonHandler);

}