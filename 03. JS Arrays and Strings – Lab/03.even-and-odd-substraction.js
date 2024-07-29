function substract(arr) {
    let evenNumbers = 0;
    let oddNumbers = 0;
   
    for (let i = 0; i < arr.length; i++) {
        let singleNumber = arr[i];
        
        if (singleNumber % 2 == 0) {
            evenNumbers += singleNumber;
        } else if (Math.abs(singleNumber % 2) == 1) {
            oddNumbers += singleNumber;
        }
    }

    let result = evenNumbers - oddNumbers;
    console.log(result);
}

substract([3,5,7,9])