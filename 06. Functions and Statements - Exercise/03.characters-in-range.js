function printCharsInRange(firstChar, secondChar) {
    let asciiFirst = firstChar.charCodeAt(0);
    let asciiSecond = secondChar.charCodeAt(0);

    let start = Math.min(asciiFirst, asciiSecond);
    let end = Math.max(asciiFirst, asciiSecond);

    let chars = [];

    for (let i = start + 1; i < end; i++) {
        chars.push(String.fromCharCode(i));
    }

    console.log(chars.join(' '));
}

printCharsInRange('a', 'd');