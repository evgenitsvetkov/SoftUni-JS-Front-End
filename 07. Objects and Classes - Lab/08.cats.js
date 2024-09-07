function getCatInfo(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    // for (const entry of input) {
    //     const [name, age] = entry.split(" ");
        
    //     const newCat = new Cat(name, age);
    //     newCat.meow();
    // }

    input
        .map(entry => entry.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow());
}

getCatInfo(['Mellow 2', 'Tom 5']);