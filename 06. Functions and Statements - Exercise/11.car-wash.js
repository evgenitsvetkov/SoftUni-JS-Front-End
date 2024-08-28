function washing(commands) {
    let value = 0;
    
    commands.forEach(command => {
        switch (command) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value = value + (value * 0.2);
                break;
            case 'vacuum cleaner':
                value = value + (value * 0.25);
                break;
            case 'mud':
                value = value - (value * 0.1);
                break;
        }
    });
    
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

washing(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);