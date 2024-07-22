function printTable(number) {
    let result = 0;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < array.length; i++) {
        result = number * array[i];
        console.log(`${number} X ${array[i]} = ${result}`);   
    }
}

printTable(5);