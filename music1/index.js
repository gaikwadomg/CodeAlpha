 // JavaScript function to toggle play/pause button icon and control audio playback
 function togglePlayPause() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseBtn = document.getElementById('playPauseBtn');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.classList.add('pause-icon');
    } else {
        audioPlayer.pause();
        playPauseBtn.classList.remove('pause-icon');
    }
}