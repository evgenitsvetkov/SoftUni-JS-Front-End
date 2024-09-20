
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type,
            this.model = model,
            this.parts = {
                ...parts,
                quality: parts.engine * parts.power
            };
            this.fuel = fuel
        }

        drive(fuelConsumption) {
            this.fuel -= fuelConsumption;
        }
    }

    let parts = {engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

    let parts2 = {engine: 6, power: 100 };
    let vehicle2 = new Vehicle('c', 'd', parts, 840);
    vehicle2.drive(20);
    console.log(vehicle2.fuel);
    console.log(vehicle2.parts.quality);
    
