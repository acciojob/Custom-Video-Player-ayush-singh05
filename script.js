/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
document.addEventListener("DOMContentLoaded", function () {
    // const video = document.getElementById("video");
    const progressBar = document.getElementById("progress-bar");

    progressBar.addEventListener("timeupdate", updateProgressBar);

    function updateProgressBar() {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const progress = (currentTime / duration) * 100;
        progressBar.style.width = progress + "%";
    }
});
 skipButtons.dataset.-10.addEventListener("click", () => {
        video.currentTime -= 10; // Adjust the skip duration as needed (e.g., skip back 10 seconds)
    });

    skipButtons.dataset.25.addEventListener("click", () => {
        video.currentTime += 10; // Adjust the skip duration as needed (e.g., skip forward 10 seconds)
    });