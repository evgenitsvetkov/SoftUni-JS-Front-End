function checkPalindromeNum(arr) {
    function isPalindrome(number) {
        const reversedNumber = number.toString().split("").reverse().join("");
        return reversedNumber == number;
    }

    arr.forEach((number) => {
        console.log(isPalindrome(number));
    })
}

checkPalindromeNum([123, 323, 421, 121]);