function sortSpecialOrder(numbers) {
    numbers.sort((a, b) => a - b);

    const result = [];
    let left = 0;
    let right = numbers.length - 1;
    let toggle = true;

    while (left <= right) {
        if (toggle) {
            result.push(numbers[left]);
            left++;
        } else {
            result.push(numbers[right]);
            right--;
        }
        toggle = !toggle;
    }

    return result;
}

const numbersArray = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
const sortedArray = sortSpecialOrder(numbersArray);
console.log(sortedArray);