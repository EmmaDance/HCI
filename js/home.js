$(document).ready(function() {
    let playing = false;
    $('#s').click(function() {
        let intro = new Audio("sound/intro.mp3");
        intro.addEventListener("ended", function(){
            playing=false;
            window.location.href = "letter_s.html";

        });
        if (!playing) {
            playing = true;
            intro.play();
        }
    });
});
