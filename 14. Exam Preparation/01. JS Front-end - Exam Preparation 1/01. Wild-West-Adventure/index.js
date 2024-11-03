function resolve(input) {
    const count = Number(input.shift());
    const posse = {};    

    for (let i = 0; i < count; i++) {
        const [characterName, hpInput, bulletsInput] = input.shift().split(' ');
        
        posse[characterName] = {
            hp: Number(hpInput),
            bullets: Number(bulletsInput)
        };
    }

    const commands = {
        FireShot(characterName, target){
            if (posse[characterName].bullets) {
                const currentBullets = posse[characterName].bullets -= 1;
                console.log(`${characterName} has successfully hit ${target} and now has ${currentBullets} bullets!`);
            } else {
                console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`);
            }
        },
        TakeHit(characterName, damage, attacker){
            posse[characterName].hp -= damage;

            if (posse[characterName].hp) {
                console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${posse[characterName].hp} HP!`);
            } else {
                delete posse[characterName];
                console.log(`${characterName} was gunned down by ${attacker}!`);
            }
        },
        Reload(characterName){
            if (posse[characterName].bullets < 6) {
                const reloadedBullets = 6 - posse[characterName].bullets;
                posse[characterName].bullets = 6;
                console.log(`${characterName} reloaded ${reloadedBullets} bullets!`);
            } else {
                console.log(`${characterName}'s pistol is fully loaded!`);
            }
        },
        PatchUp(characterName, amount){
            if (posse[characterName].hp < 100) {
               posse[characterName].hp += Number(amount);

               if (posse[characterName].hp > 100) {
                    posse[characterName].hp == 100
               }
                console.log(`${characterName} patched up and recovered ${amount} HP!`);
            } else {
                console.log(`${characterName} is in full health!`);
            }
        }
    }

    let commandInput = input.shift();

    while (commandInput !== 'Ride Off Into Sunset') {
        const [command, characterName, ...args] = commandInput.split(' - ');

        
        commands[command](characterName, ...args);

        commandInput = input.shift();
    }


    for (const character in posse) {
        console.log(character);
        console.log(`HP: ${posse[character].hp}`);
        console.log(`Bullets: ${posse[character].bullets}`);
    }
}


resolve(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"
]);

















