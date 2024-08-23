function printMatrix(n) {
    const getNumberNTimes = (number, separator = " ") => {
        return `${number}${separator}`.repeat(number).trim();
    };

    for (let row = 0; row < n; row++) {
        console.log(getNumberNTimes(n));
    }
}

printMatrix(7);