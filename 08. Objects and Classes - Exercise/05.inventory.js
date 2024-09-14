function getHeroInfo(input) {
    // input
    //     .map((heroData) => {
    //         const [name, level, items] = heroData.split(' / ')
    //         return {
    //             name,
    //             level: Number(level),
    //             items
    //         };
    //     })
    //     .sort((a, b) => a.level - b.level)
    //     .forEach(hero => {
    //         console.log(`Hero: ${hero.name}`);
    //         console.log(`level => ${hero.level}`);
    //         console.log(`items => ${hero.items}`);
    //     });

    input
        .map((entry) => entry.split(' / '))
        .reduce((heroes, [heroName, level, items]) => {
            const convertedLevel = Number(level);
            
            heroes.push({
                heroName,
                convertedLevel,
                items
            }); 
            
            return heroes;
        }, [])
        .sort((a, b) => a.convertedLevel - b.convertedLevel)
        .forEach(hero => {
            console.log(`Hero: ${hero.heroName}`);
            console.log(`level => ${hero.convertedLevel}`);
            console.log(`items => ${hero.items}`);
        });
}


getHeroInfo([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);