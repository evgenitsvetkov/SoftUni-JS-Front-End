function getStoreProvision(currentStock, orderedStock) {
    function generateObjectData(inputArray) {
        return new Array(inputArray.length / 2)
            .fill({})
            .reduce((acc, curr, i) => {
                const product = inputArray[i + i];
                const quantity = Number(inputArray[i + i + 1]);
    
                if (!curr[product]) {
                    curr[product] = 0;
                }
                curr[product] += quantity;   
    
                return Object.assign(acc, curr);
            }, {});
    }

    const inStock = generateObjectData(currentStock);
    const ordered = generateObjectData(orderedStock);
    
    const allProducts = structuredClone(inStock);
    
    Object.keys(ordered).forEach((productName) => {
        if (!allProducts[productName]) {
            allProducts[productName] = 0;
        }

        allProducts[productName] += ordered[productName];
    });

    Object.entries(allProducts).forEach(([productName, quantity]) => {
        console.log(`${productName} -> ${quantity}`);
        
    });
}

getStoreProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);