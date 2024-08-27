function getDivision(firstNum, secondNum) {
    function calculateFirstFactorial(firstNum) {
        if (firstNum == 1) {
            return firstNum;
        }

        return firstNum * calculateFirstFactorial(firstNum - 1);
    }

    function calculateSecondFactorial(secondNum) {
        if (secondNum == 1) {
            return secondNum
        }

        return secondNum * calculateSecondFactorial(secondNum - 1);
    }

    let result = calculateFirstFactorial(firstNum) / calculateSecondFactorial(secondNum);

    console.log(result.toFixed(2));
}

getDivision(6, 2);
