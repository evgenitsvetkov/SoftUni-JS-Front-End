function getPersonInfo(input) {
    const addressBook = {};

    // input.forEach(entry => {
    //     const [name, address] = entry.split(" ");
    //     addressBook[name] = address;
    // });

    // const sortedAddressBook = Object
    // .entries(addressBook)
    // .sort((a, b) => a[0].localeCompare(b[0]))
    // .forEach(([name, address]) => console.log(`${name} -> ${address}`));

    for (const entry of input) {
        const [name, address] = entry.split(':');

        addressBook[name] = address;
    }

    let addressBookEntries = Object.entries(addressBook);
    addressBookEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of addressBookEntries) {
        console.log(`${name} -> ${address}`);
    }
}

getPersonInfo(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);