function getSmallestNum(first, second, third) {
    const numbers = (a, b) => a > b ? b : a;

    let result = numbers(numbers(first, second), third);

    console.log(result);
}

getSmallestNum(2,
    5,
    3);