function calculate(number, power) {
    if (power === 1) {
        return number;
    }

    return number * calculate(number, power - 1);
}

function print(base, radix) {
    const result = calculate(base,radix);

    console.log(result);
}

print(2, 8);