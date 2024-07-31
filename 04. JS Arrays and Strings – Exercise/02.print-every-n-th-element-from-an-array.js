function print(array, num) {
    const newArray = [];

    array.forEach((element, index) => {
        if (index % num === 0) {
            newArray.push(element);
        }
    })

    return newArray;
}

print(['5', '20', '31', '4', '20'], 2);