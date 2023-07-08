const music = new Audio('songs/Believer.mp3');
const songs = [
    {
        id: "1",
        songName:`Believer<br>
        <div class="subtitle">Imagine Dragons</div>`,
        poster: "covers/1.jpg"
    },

    {
        id: "2",
        songName: `Hall of Fame<br>
        <div class="subtitle">The Script</div>`,
        poster: "covers/2.jpg"
    },

    {
        id: "3",
        songName: `Cheap Thrills<br>
        <div class="subtitle">sia</div>`,
        poster: "covers/3.jpg"
    },

    {
        id: "4",
        songName: `Señorita<br>
        <div class="subtitle">Camila Cabello</div>`,
        poster: "covers/4.jpg"
    },

    {
        id: "5",
        songName: `Havana<br>
        <div class="subtitle">Camila Cabello</div>`,
        poster: "covers/5.jpg"
    },

    {
        id: "6",
        songName: `Sorry<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "covers/6.jpg"
    },

    {
        id: "7",
        songName: `let Me Love You<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "covers/7.jpg"
    },

    {
        id: "8",
        songName: `Attention<br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "covers/8.jpg"
    },

    {
        id: "9",
        songName: `Girls Like You<br>
        <div class="subtitle">Maroon 5</div>`,
        poster: "covers/9.jpg"
    },

    {
        id: "10",
        songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "covers/10.jpg"
    },

    {
        id: "11",
        songName: `Kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "covers/11.jpg"
    },

    {
        id: "12",
        songName: `Pasoori<br>
        <div class="subtitle">Ali Sethi & Shae Gill</div>`,
        poster: "covers/12.jpg"
    },

    {
        id: "13",
        songName: `My Heart Will Go On<br>
        <div class="subtitle">Celine Dion</div>`,
        poster: "covers/13.jpg"
    },

    {
        id: "14",
        songName: `Sun Raha Raha Hai<br>
        <div class="subtitle">Aditya Roy Kapur</div>`,
        poster: "covers/14.jpg"
    },

    {
        id: "15",
        songName: `Breathless<br>
        <div class="subtitle">Shankar Mahadevan</div>`,
        poster: "covers/15.jpg"
    } 
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click' , ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
    } else {
       music.pause();
       wave.classList.remove('active2');
       masterPlay.classList.add('bi-play-fill');
       masterPlay.classList.remove('bi-pause-fill');
    }
    
});





const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background  = 'rgb(105, 105, 105, .0)';
    })
}



const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
      el.classList.remove('bi-pause-circle-fill');
      el.classList.add('bi-play-circle-fill');
    })
}



let  pop_song_left = document.getElementById('pop_song_left');
let  pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;

})
    
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;

})
    


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (el)=>{
        index = el.target.id;
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `covers/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
       
        let songTitles = songs.filter((ele)=> {
              return ele.id == index;
        });

        songTitles.forEach((ele1) =>{
            let {songName} = ele1;
            title.innerHTML = songName;
           
        });


        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active2');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = (seek.value * music.duration )/ 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
       vol_icon.classList.remove('bi-volume-up-fill'); 
       vol_icon.classList.remove('bi-volume-down-fill'); 
       vol_icon.classList.add('bi-volume-off-fill'); 
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill'); 
        vol_icon.classList.add('bi-volume-down-fill'); 
        vol_icon.classList.remove('bi-volume-off-fill'); 
     }
     if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill'); 
        vol_icon.classList.remove('bi-volume-down-fill'); 
        vol_icon.classList.remove('bi-volume-off-fill'); 
     }

     let vol_a = vol.value;
     vol_bar.style.width = `${vol_a}%`;
     vol_dot.style.left = `${vol_a}%`;
     music.volume = vol_a / 100;

})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles = songs.filter((ele)=> {
          return ele.id == index;
    });

    songTitles.forEach((ele1) =>{
        let {songName} = ele1;
        title.innerHTML = songName;
    });


    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active2');

})

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `covers/${index}.jpg`;
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');

    let songTitles = songs.filter((ele)=> {
          return ele.id == index;
    });

    songTitles.forEach((ele1) =>{
        let {songName} = ele1;
        title.innerHTML = songName;
    });


    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active2');

})