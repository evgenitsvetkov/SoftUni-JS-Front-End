function getOddOccurrences(input) {
    const words = input
        .split(' ')
        .reduce((words, word) => {
            const wordToLower = word.toLowerCase();

            if (!words.hasOwnProperty(wordToLower)) {
                words[wordToLower] = 0;
            }
            words[wordToLower] += 1;

            return words;
        }, {})

        console.log(
            Object.keys(words)
            .filter((word) => words[word] % 2 !== 0)
            .join(' '));
}

getOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');