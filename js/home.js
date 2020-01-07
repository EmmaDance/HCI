$(document).ready(function() {
    $('#s').click(function() {
        let intro = new Audio("sound/intro.mp3");
        intro.addEventListener("ended", function(){
        window.location.href = "letter_s.html";

        });
        intro.play();

        ;
    });
});
