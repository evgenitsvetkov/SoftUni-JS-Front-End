function specialWords(text) {

    const regex = /#[A-Za-z]+/gm;
    const matches = text.matchAll(regex);

    for (const match of matches) {
        console.log(match[0].substring(1));
    }
}

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');