function storeInformation(input) {
    const phoneBook = {};

    for (const entry of input) {
        const [name, phoneNumber] = entry.split(" ");

        phoneBook[name] = phoneNumber;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

storeInformation(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);

// function fancySolve(input) {
//     let result = input
//     .map(entry => entry.split(" "))
//     .reduce((phoneBook, [name, phone]) => {
//         phoneBook[name] = phone;

//         return phoneBook;
//     }, {});

//     for (const name in result) {
//         console.log(`${name} -> ${result[name]}`);
//     }
// }

// fancySolve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);