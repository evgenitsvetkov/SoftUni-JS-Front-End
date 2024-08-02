function reveal(wordsString, templateString) {

    const words = wordsString.split(', ');
    let finalSentence = templateString;
    
    words.forEach((word) => {
        const searchValue = '*'.repeat(word.length);
        finalSentence = finalSentence.replace(searchValue, word);     
    });

    console.log(finalSentence);
}

reveal('great, learning', 'softuni is ***** place for ******** new programming languages');
