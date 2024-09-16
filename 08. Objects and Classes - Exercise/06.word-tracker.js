function findOccurrences(input) {
    const [specialWords, ...restOfTheWords] = input;

    const words = specialWords.split(' ').reduce((occurrences, word) => {
        occurrences[word] = 0;
        return occurrences;
     }, {});

     restOfTheWords.forEach((word) => {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
     });

     Object.keys(words)
        .sort((a, b) => words[b] - words[a])
        .forEach((word) => console.log(`${word} - ${words[word]}`));
}

findOccurrences([
    'this sentence', 

    'In', 'this', 'sentence', 'you', 'have', 
    'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);