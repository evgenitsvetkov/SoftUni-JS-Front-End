function fruitCalc(type, grams, pricePerKg) {
    let kg = grams / 1000;
    let totalPrice = pricePerKg * kg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}

fruitCalc('orange', 2500, 1.80);