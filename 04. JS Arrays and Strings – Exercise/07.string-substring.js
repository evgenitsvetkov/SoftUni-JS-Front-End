function findWord(word, inputString) {

    const match = inputString.split(' ').find((x) => x.toLowerCase() === word.toLowerCase());
    console.log(match ? word : `${word} not found!`);
}

findWord('javascript', 'JavaScript is the best programming language');