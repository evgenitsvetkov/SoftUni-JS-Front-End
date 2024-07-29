function censored(text, singleWord) {
    debugger;
    let censoredWord = text.replaceAll(singleWord, '*'.repeat(singleWord.length));

    console.log(censoredWord);
}

censored('A small sentence with some words', 'small');