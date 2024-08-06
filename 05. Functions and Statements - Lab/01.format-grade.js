function format(grade) {
    let result = null;

    if (grade < 3.00) {
        result = 'Fail';
    } else if (grade < 3.50) {
        result = 'Poor';
    } else if (grade < 4.50) {
        result = 'Good';
    } else if (grade < 5.50) {
        result = 'Very good'
    } else if (grade <= 6.00) {
        result = 'Excellent';
    } else {
        result = 'Not valid grade!';
    }

    console.log(`${result} (${grade < 3 ? 2 : grade.toFixed(2)})`);
}

format(4.50);