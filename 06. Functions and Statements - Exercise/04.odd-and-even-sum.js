function sumOddAndEven(number) {

    const getDigits = (currentNum) => {
        const evenDigits = [];
        const oddDigits = [];

        while (currentNum > 0) {
            const lastDigit = currentNum % 10;

            if (lastDigit % 2 === 0) {
                evenDigits.push(lastDigit);
            } else {
                oddDigits.push(lastDigit);
            }

            currentNum = parseInt(currentNum / 10);
        }

        return [
            evenDigits,
             oddDigits
            ]
    };
    
    const getSum = (array) => array.reduce((a, b) => a + b, 0);
    const printOutputResult = (evenSum, oddSum) => console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
    const [evenDigits, oddDigits] = getDigits(number);
    
    const evenSum = getSum(evenDigits);
    const oddSum = getSum(oddDigits);

    printOutputResult(evenSum, oddSum);
}

sumOddAndEven(1000435);