function repeatString(text, count) {
    if (count === 1) {
        return text;
    }

    return text + repeatString(text, count - 1);
}

function printResult(text, count) {
    const result = repeatString(text, count);

    console.log(result);
}

printResult('abc', 3)