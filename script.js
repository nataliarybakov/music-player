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

const links = document.querySelectorAll('li');
for(const link of links) {
    link.addEventListener('click', setSong);
}

function setSong(e) {
    document.querySelector("#headphones").classList.remove("pulse");

const source = document.getElementById('source');
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

const player = document.getElementById("player")
    player.load();
    player.play();
    document.querySelector("#headphones").classList.add("pulse");
};

function playAudio() {
    if(player.readyState) {
        player.play();
    }
    }
    
    function pauseAudio() {
        player.pause();
    }

    const slider = document.getElementById('volumeSlider')
slider.oninput = function (e) {
    const volume = e.target.value
    player.volume = volume;
};

function updateProgress() {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
    progressBar.value = (player.currentTime / player.duration) * 100;
    }
};