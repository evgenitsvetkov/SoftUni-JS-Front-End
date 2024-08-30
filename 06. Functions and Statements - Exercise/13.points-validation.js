function isValid(array) {
    
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    function firstPoint() {
        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    }

    function secondPoint() {
        return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    }

    function thirdPoint() {
        return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    }

    let firstPointCheck = firstPoint(array);
    let secondPointCheck = secondPoint(array);
    let thirdPointCheck = thirdPoint(array);

    if (firstPointCheck === Math.trunc(firstPointCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondPointCheck === Math.trunc(secondPointCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdPointCheck === Math.trunc(thirdPointCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

isValid([2, 1, 1, 1]);

