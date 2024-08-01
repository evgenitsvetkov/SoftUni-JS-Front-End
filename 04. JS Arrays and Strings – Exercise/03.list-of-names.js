function sortNames(array) {
    array.sort((a, b) => a.localeCompare(b)).map((element, index) => {
        console.log(`${index + 1}.${element}`);
    });
}

sortNames(["John", "Bob", "Christina", "Ema"]);