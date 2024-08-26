function checkLoadingBar(number) {
    let bar = '[..........]';
    let repeatTime = number / 10;
    
    if (number < 100) {
        console.log(`${number}% ${bar.replace('.'.repeat(repeatTime), '%'.repeat(repeatTime))}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${bar.replace('.'.repeat(repeatTime), '%'.repeat(repeatTime))}`);
    }
}

checkLoadingBar(50);