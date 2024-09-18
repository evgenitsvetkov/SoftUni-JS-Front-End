function getCarsInTheParking(input) {
    const cars = input
        .map(entry => entry.split(', '))
        .reduce((cars, [direction, carPlate, isDeleted = true]) => {
            if (direction == 'IN') {
                cars[carPlate] = isDeleted;
            } else if (direction == 'OUT') {
                cars[carPlate] = !isDeleted;
            }

            return cars;
        }, {});

        const inParkingLot = Object.keys(cars)
        .sort((a, b) => a.localeCompare(b))
        .filter((car) => cars[car] == true)

        if (inParkingLot.length > 0) {
            inParkingLot.forEach(car => console.log(car));
        } else {
            console.log('Parking Lot is Empty');
        }       
}

getCarsInTheParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);