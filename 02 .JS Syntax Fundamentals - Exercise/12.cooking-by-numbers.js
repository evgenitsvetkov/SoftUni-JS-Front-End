function cook(num, op1, op2, op3, op4, op5) {
debugger;
    let convertNum = Number(num);
    let arr = [op1, op2, op3, op4, op5];
    let result;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == 'chop') {
            result = convertNum / 2;
            convertNum = result;
            console.log(result);
        } else if (arr[i] == 'dice') {
            result = Math.sqrt(convertNum);
            convertNum = result;
            console.log(result);
        } else if (arr[i] == 'spice') {
            result = convertNum + 1;
            convertNum = result;
            console.log(result);
        } else if (arr[i] == 'bake') {
            result = convertNum * 3;
            convertNum = result;
            console.log(result);
        } else if (arr[i] == 'fillet') {
            result = convertNum - (convertNum * 0.20);
            convertNum = result;
            console.log(result);
        }
    }

}

cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');