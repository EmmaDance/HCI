$(document).ready(function() {
    let playing = false;
    $('#s').click(function() {
            window.location.href = "sentences.html";
    });

    $('#digits').click(function() {
        let intro = new Audio("sound/intro_cifre.m4a");
        intro.addEventListener("ended", function(){
            playing=false;
            window.location.href = "learn_digits.html";
        });
        if (!playing) {
            playing = true;
            intro.play();
        }
    });
    $('#backPack').click(function() {
        window.location.href = "invatareRechizite.html";
    });

    $('#story').click(function() {
        window.location.href = "story.html";
    });

});

