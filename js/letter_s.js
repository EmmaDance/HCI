$(document).ready(function() {

    let count = 0;
    const all = 3;
    $('.correct').click(function(event) {
        alert('correct');
        $(event.target).css("opacity", 0.2).css("pointer-events", "none");
        count++;
        if (count===all)
            finished()
    });

    $('.wrong').click(function() {
        alert('wrong');
    });

    function finished(){
        alert("You completed the game");
        // go to the next page
        location.href = 'index.html';
    }

});

