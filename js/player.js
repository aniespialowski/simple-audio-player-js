var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var playerAudio = document.getElementById("player-audio");
var progress = document.getElementById("progress-on");
var resTime = 0;

var i = 0;
var song0 = document.getElementById("song-0");
var song1 = document.getElementById("song-1");
var song2 = document.getElementById("song-2");
var song3 = document.getElementById("song-3");
var song4 = document.getElementById("song-4");
var song5 = document.getElementById("song-5");
var song6 = document.getElementById("song-6");


var time0 = document.getElementById("time-0");
var time1 = document.getElementById("time-1");
var time2 = document.getElementById("time-2");
var time3 = document.getElementById("time-3");
var time4 = document.getElementById("time-4");
var time5 = document.getElementById("time-5");
var time6 = document.getElementById("time-6");


var songTable = ["http://niespialowski-portfolio.pl/audio_player/mp3/utwor-pierwszy.mp3","http://niespialowski-portfolio.pl/audio_player/mp3/utwor-drugi.mp3","http://niespialowski-portfolio.pl/audio_player/mp3/utwor-trzeci.mp3","http://niespialowski-portfolio.pl/audio_player/mp3/utwor-czwarty.mp3","http://niespialowski-portfolio.pl/audio_player/mp3/utwor-piaty.mp3","http://niespialowski-portfolio.pl/audio_player/mp3/utwor-szosty.mp3","http://niespialowski-portfolio.pl/audio_player/mp3/utwor-siodmy.mp3"];

var muteButton = document.getElementById("muteButton");
var unMuteButton = document.getElementById("unMuteButton");

function ChangePlayButtonToPauseButton(){
    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");
    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");
    
    doPlay();
    function doPlay(){
        playerAudio.play();

    }
    goWithProgressOfSong();
}
function ChangePauseButtonToPlayButton(){
    playButton.classList.remove("play-button-off");
    playButton.classList.add("play-button-on");
    pauseButton.classList.remove("pause-button-on");
    pauseButton.classList.add("pause-button-off");
    
    doPause();
    function doPause(){
        playerAudio.pause();
    }
    goWithProgressOfSong();
}
function goWithProgressOfSong(){
    progress.offsetWidth = 0;
    var id = setInterval(frame,5);
    function frame(){
        if (playerAudio.readyState){
            resTime = (playerAudio.currentTime*356)/playerAudio.duration;
            progress.style.width = resTime; 
        }
    }

}
function PlayFirstSong(){
    i = 0;
    playerAudio.src = songTable[0];
    song0.classList.add("blue-title-song-0");
    song1.classList.remove("blue-title-song-1");
    song2.classList.remove("blue-title-song-2");
    song3.classList.remove("blue-title-song-3");
    song4.classList.remove("blue-title-song-4");
    song5.classList.remove("blue-title-song-5");
    song6.classList.remove("blue-title-song-6");


    time0.classList.add("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time4.classList.remove("time4");
    time5.classList.remove("time5");
    time6.classList.remove("time6");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();

}
function PlaySecondSong(){
    i = 1;
    playerAudio.src = songTable[1];
    song1.classList.add("blue-title-song-1");
    song0.classList.remove("blue-title-song-0");
    song2.classList.remove("blue-title-song-2");
    song3.classList.remove("blue-title-song-3");
    song4.classList.remove("blue-title-song-4");
    song5.classList.remove("blue-title-song-5");
    song6.classList.remove("blue-title-song-6");

    time1.classList.add("time1");
    time0.classList.remove("time0");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time4.classList.remove("time4");
    time5.classList.remove("time5");
    time6.classList.remove("time6");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();

}
function PlayThirdSong(){
    i = 2;
    playerAudio.src = songTable[2];
    song2.classList.add("blue-title-song-2");
    song0.classList.remove("blue-title-song-0");
    song1.classList.remove("blue-title-song-1");
    song3.classList.remove("blue-title-song-3");
    song4.classList.remove("blue-title-song-4");
    song5.classList.remove("blue-title-song-5");
    song6.classList.remove("blue-title-song-6");

    time2.classList.add("time2");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time3.classList.remove("time3");
    time4.classList.remove("time4");
    time5.classList.remove("time5");
    time6.classList.remove("time6");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();
}
function PlayFourthSong(){
    i = 3;
    playerAudio.src = songTable[3];
    song3.classList.add("blue-title-song-3");
    song0.classList.remove("blue-title-song-0");
    song1.classList.remove("blue-title-song-1");
    song2.classList.remove("blue-title-song-2");
    song4.classList.remove("blue-title-song-4");
    song5.classList.remove("blue-title-song-5");
    song6.classList.remove("blue-title-song-6");

    time3.classList.add("time3");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time4.classList.remove("time4");
    time5.classList.remove("time5");
    time6.classList.remove("time6");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();
}
function PlayFifthSong(){
    i = 4;
    playerAudio.src = songTable[4];
    song4.classList.add("blue-title-song-4");
    song0.classList.remove("blue-title-song-0");
    song1.classList.remove("blue-title-song-1");
    song2.classList.remove("blue-title-song-2");
    song3.classList.remove("blue-title-song-3");
    song5.classList.remove("blue-title-song-5");
    song6.classList.remove("blue-title-song-6");

    time4.classList.add("time4");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time5.classList.remove("time5");
    time6.classList.remove("time6");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();
}
function PlaySixthSong(){
    i = 5;
    playerAudio.src = songTable[5];
    song5.classList.add("blue-title-song-5");
    song0.classList.remove("blue-title-song-0");
    song1.classList.remove("blue-title-song-1");
    song2.classList.remove("blue-title-song-2");
    song3.classList.remove("blue-title-song-3");
    song4.classList.remove("blue-title-song-4");
    song6.classList.remove("blue-title-song-6");

    time5.classList.add("time5");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time4.classList.remove("time4");
    time6.classList.remove("time6");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();
}
function PlaySeventhSong(){
    i = 6;
    playerAudio.src = songTable[6];
    song6.classList.add("blue-title-song-6");
    song0.classList.remove("blue-title-song-0");
    song1.classList.remove("blue-title-song-1");
    song2.classList.remove("blue-title-song-2");
    song3.classList.remove("blue-title-song-3");
    song4.classList.remove("blue-title-song-4");
    song5.classList.remove("blue-title-song-5");

    time6.classList.add("time6");
    time0.classList.remove("time0");
    time1.classList.remove("time1");
    time2.classList.remove("time2");
    time3.classList.remove("time3");
    time4.classList.remove("time4");
    time5.classList.remove("time5");

    playButton.classList.remove("play-button-on");
    playButton.classList.add("play-button-off");

    pauseButton.classList.remove("pause-button-off");
    pauseButton.classList.add("pause-button-on");

    playerAudio.play();
    goWithProgressOfSong();
}

function PlayNextSong(){
    ++i;
    if (i==0){
        PlayFirstSong();
    }
    else if (i==1)
    {
        PlaySecondSong();
    } 
    else if (i==2){
        PlayThirdSong();
    }
    else if (i==3){
        PlayFourthSong();
    }
    else if (i==4){
        PlayFifthSong();
    }
    else if (i==5){
        PlaySixthSong();
    }
    else if (i==6){
        PlaySeventhSong();
    }
    else if (i>=7){
        i=0;
        PlayFirstSong();
    }
    else if (i<0){
        i=0;
    }
}
function PlayPrevSong(){
    --i;
    if (i==0){
        PlayFirstSong();
    }
    else if (i==1)
    {
        PlaySecondSong();
    } 
    else if (i==2){
        PlayThirdSong();
    }
    else if (i==3){
        PlayFourthSong();
    }
    else if (i==4){
        PlayFifthSong();
    }
    else if (i==5){
        PlaySixthSong();
    }
    else if (i==6){
        PlaySeventhSong();
    }
    else if (i>=7){
        i=0;
        PlayFirstSong();
    }
    else if (i<0){
        i=6;
        PlaySeventhSong();
    }
}
function Mute(){
    muteButton.classList.remove("volume");
    muteButton.classList.add("volume-off");
    unMuteButton.classList.remove("volume-mute-off");
    unMuteButton.classList.add("volume-mute-on");

    playerAudio.muted = true;

}
function UnMute(){
    muteButton.classList.add("volume");
    muteButton.classList.remove("volume-off");

    unMuteButton.classList.add("volume-mute-off");
    unMuteButton.classList.remove("volume-mute-on");

    playerAudio.muted = false;
}
