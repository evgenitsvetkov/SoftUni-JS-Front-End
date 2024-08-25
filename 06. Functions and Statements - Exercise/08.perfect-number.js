function getPerfectNumber(number) {
    function isPositive(num) {
        if (num > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function divideWithoutResidue(num) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function isNumberEqualToTheDivisors(number) {
        let divide = number;
        let sum = 0;
        
        while (divide > 1) {
            divide = Math.ceil(divide / 2);
            sum += divide;
        }
        
        if (sum == number) {
            return true;
        } else {
            return false;
        }
    }
    
    if (isPositive(number) && divideWithoutResidue(number) && isNumberEqualToTheDivisors(number)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

getPerfectNumber(6);