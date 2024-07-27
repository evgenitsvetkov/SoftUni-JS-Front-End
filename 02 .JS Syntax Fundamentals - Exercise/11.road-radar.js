function radar(speed, area) {
    let speedLimit = 0;
    let status;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed - speedLimit <= 20) {
                status = 'speeding';
            } else if (speed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving'
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed - speedLimit <= 20) {
                status = 'speeding';
            } else if (speed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving'
            }
            break;
        case 'city': 
            speedLimit = 50;
            if (speed - speedLimit <= 20) {
                status = 'speeding';
            } else if (speed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving'
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed - speedLimit <= 20) {
                status = 'speeding';
            } else if (speed - speedLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving'
            }
            break;
    }



    switch (area) {
        case 'motorway':
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'interstate':
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'city':
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
        case 'residential':
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            } else {
                console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            break;
    }
}

radar(40, 'city');