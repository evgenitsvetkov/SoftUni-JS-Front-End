function printMoviesInfo(input) {
    const result = input
        .reduce((movies, command) => {
            if (command.startsWith('addMovie')) {
                const [name] = command.split('addMovie ').filter(Boolean);
                movies.push({ name });

            } else if (command.includes('directedBy')) {
                const [name, director] = command.split(' directedBy ').filter(Boolean);
                const movie = movies.find((m) => m?.name === name);

                if (movie?.name) {
                    movie.director = director;
                }
                
            } else if (command.includes('onDate')) {
                const [name, date] = command.split(' onDate ').filter(Boolean);
                const movie = movies.find((m) => m?.name === name);

                if (movie?.name) {
                    movie.date = date;
                }
            }

            return movies;
        }, []);

        result
        .filter((movie) => movie.name && movie.director && movie.date)
        .forEach((movie) => console.log(JSON.stringify(movie)));
}

printMoviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);