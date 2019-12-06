var random;
var random_nr_obj;
var r;
var rounds=7;
var happy_faces=0;



var backgrounds=["images/blue.png","images/violet.jpg","images/yellow.png","images/green.jpg","images/blue.png","images/blue.png","images/blue.png"];
var personaje=["images/frozen.png","images/vampirina.png","images/miki.png","images/buburuza_motan.png","images/thomas.png","images/piratii.png","images/miles.png"];
var obiecte=["images/olaf.png","images/liliac.png","images/donald.png","images/tikki.png","images/fat_controller.png","images/treasure.png","images/spaceship.png"];
var sounds=["audio/Frozen.mp3","audio/Vampirina.mp3","audio/Miki.mp3","audio/Miraculos.mp3","audio/Thomas.mp3","audio/Piratii.mp3","audio/Miles.mp3"];
var for_play=[];
for(var j=0;j<rounds;j++){
    for_play.push(j);
}
//for_play.splice(2,1);




$(document).ready(function() {
    incarca();
   
});

var audio_play;

function incarca(){
   
   // alert(for_play);
    r=Math.floor(Math.random() * for_play.length);
    random=for_play[r];
   // alert(random);
    random_nr_obj=Math.floor(Math.random() * 8);

    
    audio_play = new Audio(sounds[random]) ;
    //audio_play = new Audio("audio/yey.mp3") ;

    audio_play.onended = function() {
        document.getElementById("divstop").style.display="none";
        document.getElementById("divplay").style.display="block";
    };

    document.getElementById("divplay").style.display="block";
    document.getElementById("divstop").style.display="none";

    document.getElementById("divplay").onclick=function(){
        audio_play.play();
        this.style.display="none";
        document.getElementById("divstop").style.display="block";
    }

    document.getElementById("divstop").onclick=function(){
        audio_play.pause();
        audio_play.currentTime = 0;
        this.style.display="none";
        document.getElementById("divplay").style.display="block";
    }

    document.body.style.backgroundImage = "url('"+backgrounds[random]+"')";

    document.getElementById("personaj_img").innerHTML="<img src='"+ personaje[random] + "' class='pers'>";

    var inner="";
    for(var i=0;i<random_nr_obj;i++){
        inner+= "<img src='"+ obiecte[random] + "' class='obiect'>";
        
    }
    document.getElementById("obiecte").innerHTML=inner;
}

function verify(id){
 
    //alert(id==random_nr_obj);
    if(id==random_nr_obj){
        var audio = new Audio("audio/yey.mp3") ;
        audio.play();
        happy_faces++;
        document.getElementById("happy"+happy_faces).style.visibility="visible";
        for_play.splice(r,1);
    }
    else{
        var audio = new Audio("audio/error.mp3") ;
        audio.play();
    }
    
    if(for_play.length>0){
        if(id==random_nr_obj){  
            audio_play.pause();
            incarca();
        }
    }
    else{
        //alert("JOC TERMINAT");
        document.getElementById("confetti").style.display="block";
        document.getElementById("button_next").onclick=function(){};
        //location.href = 'index.html';
    }
}

function home(){
    location.href='index.html';
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }