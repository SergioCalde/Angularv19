
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Yo Quisiera Amarla",
    details: {
        author: "Aventura",
        year: 2009
    }
}

const { 
    song, 
    songDuration: duration, 
    audioVolume: volume, 
    details: { 
        author, 
        year 
    } 
} = audioPlayer;

// console.log( "Song:", song);
// console.log( "Author:", author);
// console.log( "Year:", year);
// console.log( "Duration:", duration);
// console.log( "Audio Volume:", volume);

const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];

const [, , gohan = 'No character found'] = dbz;

// console.log( 'Character 3:',dbz[3] || 'No character found' );
console.log( 'Character 3:', gohan );

export {}