function check(first, second, third) {
    const multiply = (a, b) => a * b;

    const result = multiply(multiply(first, second), third);

    if (result >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

check(-6,
    -12,
    14);