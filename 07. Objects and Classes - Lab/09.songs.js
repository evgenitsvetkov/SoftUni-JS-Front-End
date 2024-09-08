function songInfo(input) {
    class Song {
        constructor (name, time) {
            this.name = name,
            this.time = time
        }

        print() {
            console.log(this.name);
        }
    }

   const count = input.shift();
   const songLibrary = {};
   const allSongs = [];

   for (let i = 0; i < count; i++) {
        const [typeList, name, time] = input.shift().split('_');

        if (!songLibrary[typeList]) {
            songLibrary[typeList] = [];
        }

        const newSong = new Song(name, time);
        songLibrary[typeList].push(newSong);
        allSongs.push(newSong);
   }

   const typeList = input.shift();

   if (typeList === 'all') {
        allSongs.forEach(song => song.print());
   } else {
       songLibrary[typeList].forEach(song => song.print());
   }
}

songInfo([3, 'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);