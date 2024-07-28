function reverseArray(num, arr) {
 
    let result = [];
debugger;

    for (let i = 0; i < num; i++) {
        result.push(arr[i]);
    }

    let reverse = result.reverse();

    console.log(reverse.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50])