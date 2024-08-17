function addAndSubtract(first, second, third) {
    let result = subtract(sum(first, second), third);
    
    console.log(result);
}

function sum(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

addAndSubtract(23,
    6,
    10);