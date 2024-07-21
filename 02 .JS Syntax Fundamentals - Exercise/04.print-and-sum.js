function printSum(m, n) {
    var array = [];
    let sum = 0;


    for (let index = m; index <= n; index++) {
        array.push(index);
    }
    console.log(array.join(' '));

    for (let z = 0; z < array.length; z++) {
        sum += array[z];
    }

    console.log(`Sum: ${sum}`);
}

printSum(5, 10);