function occurrences(text, word) {
    let arr = text.split(' ');
    let count = 0;

    for (let singleWord of arr) {
        if (word == singleWord) {
            count++;
        }
    }
    
    console.log(count);
}

occurrences('This is a word and it also is a sentence','is');