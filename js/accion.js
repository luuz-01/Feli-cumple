const video = document.getElementById("videoCumple");

video.addEventListener("timeupdate", function () {
    if (video.currentTime >= 4) {
        video.currentTime = 0;
        video.play();
    }
});