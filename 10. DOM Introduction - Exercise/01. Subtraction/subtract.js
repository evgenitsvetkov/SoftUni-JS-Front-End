function subtract() {
   
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    const convertFirstNum = Number(firstNum.value);
    const convertSecondNum = Number(secondNum.value);

    result.textContent = convertFirstNum - convertSecondNum;
    return result;
}