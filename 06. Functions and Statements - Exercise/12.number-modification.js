function modify(number) {
    function sumOfDigit(num) {
        return num.toString().split("")
            .reduce((sum, digit) =>
                sum + parseInt(digit), 0);
    }

    function getNumberAverage(number) {
        return sumOfDigit(number) / number.toString().split('').length;
    }    
    
    while (getNumberAverage(number) < 5) {
        number = parseInt(number + '9');
    }
    
    console.log(number);
}

modify(101);