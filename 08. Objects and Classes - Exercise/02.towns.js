function printObjects(input) {
    const result = input
        .map((entry) => entry.split(' | '))
        .reduce((towns, [name, latitude, longitude]) => {
            const formatedLatitude = Number.parseFloat(latitude).toFixed(2);
            const formatedLongitude = Number.parseFloat(longitude).toFixed(2);
            
            towns.push({
                name,
                formatedLatitude,
                formatedLongitude
            });

            return towns;
        }, []);

    result.forEach((town) => {
        console.log(`{ town: '${town.name}', latitude: '${town.formatedLatitude}', longitude: '${town.formatedLongitude}' }`);
    });
}

printObjects([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);