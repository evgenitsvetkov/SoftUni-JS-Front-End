function calculate(product, quantity) {
    const totalPrice = (a, b) => a * b;
    let singleProductPrice = 0;

    switch (product) {
        case 'coffee':
            singleProductPrice = 1.50;
            break;
        case 'water':
            singleProductPrice = 1.00;
            break;
        case 'coke':
            singleProductPrice = 1.40;
            break;
        case 'snacks':
            singleProductPrice = 2.00;
            break;       
        default:
            console.log(`The ${product} does not exist!`);
            break;
    }

    console.log(totalPrice(singleProductPrice, quantity).toFixed(2));
}

calculate('coffee', 2);