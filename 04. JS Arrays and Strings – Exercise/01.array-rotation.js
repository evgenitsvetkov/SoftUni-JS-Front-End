function rotate(arr, number) {
    let array = arr;

    for (let i = 0; i < number; i++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }

    console.log(array.join(' '));
}

rotate([51, 47, 32, 61, 21], 2);