function printKeyValuePairs(city) {
    // for (const key in city) {
    //     console.log(`${key} -> ${city[key]}`);
    // }

    for (const [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`);
    }
}

printKeyValuePairs({name: 'Sofia', area: '492', population: '1238438', country: 'Bulgaria', postCode: '1000'});