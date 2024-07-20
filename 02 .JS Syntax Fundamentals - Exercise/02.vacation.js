function calc(people, category, day) {
    let result;
    let total;
    let singlePrice = 0;

    if (day == 'Friday') {
        if (category == 'Students') {
            singlePrice += 8.45;
        } else if (category == 'Business') {
            singlePrice += 10.90;
        } else if (category == 'Regular') {
            singlePrice += 15;
        }
    } else if (day == 'Saturday') {
        if (category == 'Students') {
            singlePrice += 9.80;
        } else if (category == 'Business') {
            singlePrice += 15.60
        } else if (category == 'Regular') {
            singlePrice += 20;
        }
    } else if (day == 'Sunday') {
        if (category == 'Students') {
            singlePrice += 10.46;
        } else if (category == 'Business') {
            singlePrice += 16;
        } else if (category == 'Regular') {
            singlePrice += 22.50;
        }
    }

    const totalSumWithoutDiscount = people * singlePrice;

    const totalSumWithDiscount = 
        category == 'Students' && people >= 30
        ? totalSumWithoutDiscount * 0.85
        : category == 'Business' && people >= 100
        ? (people - 10) * singlePrice
        : category == 'Regular' && people >= 10 && people <= 20
        ? totalSumWithoutDiscount * 0.95
        : totalSumWithoutDiscount;

        console.log(`Total price: ${totalSumWithDiscount.toFixed(2)}`);
}

calc(40, 'Regular', 'Saturday')