const songs = [
    "Anthony Hamilton - Freedom (Artenvielfalt Edit).mp3",
    "Justin Timberlake - Can't Stop The Feeling (Astero Remix).mp3",
    "Ben E. King - Stand By Me.mp3",
    "Lost Frequencies - Reality.mp3",
    "Reality.mp3",
    "The Chainsmokers & Coldplay - Something Just Like This (Chris Forks Remix).mp3",
    "The Queen Kings - We Are the Champions.mp3",
    "The Wind and The Wave - Chasing Cars (Live).mp3"
    ];

function createSongList() {
        const list = document.createElement ("ol");
        for(let i=0; i < songs.length; i++) {
         const item = document.createElement('li');
         item.appendChild(document.createTextNode(songs[i]));
         list.appendChild(item);
        }
        return list
     }

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

songList.onclick = function (e) {
const source = document.getElementById('source');
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

const player = document.getElementById("player")
    player.load();
    player.play();
};