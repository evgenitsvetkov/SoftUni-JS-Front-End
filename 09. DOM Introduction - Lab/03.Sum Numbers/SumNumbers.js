function calc() {
    const firstNum = document.getElementById('num1');
    const secondNum = document.getElementById('num2');
    const sum = document.getElementById('sum');
    
    const firstConvert = Number(firstNum.value);
    const secondConvert = Number(secondNum.value);
    
    return sum.value = firstConvert + secondConvert;
}
