$(document).ready(function() {

    let count = 0;
    const all = 5;
    let playing = false;
    let k = 0;
    while(k<7){
        const rand = Math.floor(Math.random()*19)+1;
        let str = `#${rand}`;
        if (rand%2===1){
            console.log(rand);
            console.log(str);
            $(str).css("display","none");
            k++;
        }
    }

    $('.correct').click(function(event) {
        let successes = {0:'sound/success0.mp3', 1:"sound/success1.mp3", 2:"sound/success2.mp3"};
        const rand = Math.floor((Math.random() * 3));
        let success = new Audio(successes[rand]);
        success.addEventListener("ended", function(){
            console.log("success - stopped playing");
            success.currentTime = 0;
            playing=false;
            $(event.target).css("opacity", 0.2).css("pointer-events", "none");
            count++;
            if (count===all)
                finished();
        });
        if (!playing) {
            console.log("success -  started playing "+rand);
            playing = true;
            success.play();
        }
    });

    $('.wrong').click(function() {
        const rand = Math.floor((Math.random() * 2));
        let errors = {0:'sound/error0.mp3', 1:"sound/error1.mp3"};
        let error = new Audio(errors[rand]);
        error.addEventListener("ended", function(){
            console.log("error -  stopped playing");
            playing = false;
        });
        if (!playing) {
            console.log("error -  started playing " + rand);
            playing = true;
            error.play();}
    });

    function finished(){
        let finished = new Audio("sound/f.mp3");
        finished.addEventListener("ended", function(){
            window.location.href = "home.html";

        });
        finished.play();
    }

});

