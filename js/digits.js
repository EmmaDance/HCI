var random;
var random_nr_obj;
var r;
var rounds=7;
var happy_faces=0;
var audio_incearca = new Audio("audio/mai_incearca.m4a") ;
var audio_play;
var audio_yey = new Audio("audio/yey.mp3") ;  
var audio_primit_stelua = new Audio("audio/primit_steluta.m4a") ;
var audio_alege_numar = new Audio("audio/alege_numar.m4a");
var audio_apasa_play = new Audio("audio/apasa_play.m4a")

var backgrounds=["images/blue.png","images/violet.jpg","images/yellow.png","images/green.jpg","images/blue.png","images/blue.png","images/blue.png"];
var personaje=["images/frozen.png","images/vampirina.png","images/miki.png","images/buburuza_motan.png","images/thomas.png","images/piratii.png","images/miles.png"];
var obiecte=["images/olaf.png","images/liliac.png","images/donald.png","images/tikki.png","images/fat_controller.png","images/treasure.png","images/spaceship.png"];
var sounds=["audio/Frozen.m4a","audio/Vampirina.m4a","audio/Miki.m4a","audio/Miraculos.m4a","audio/Thomas.m4a","audio/Piratii.m4a","audio/Miles.m4a"];
var for_play=[];
for(var j=0;j<rounds;j++){
    for_play.push(j);
}


$(document).ready(function() {
    ascunde();
    incarca();
    document.getElementById("play").style.visibility="visible";
    //  for(var i=1;i<=happy_faces;i++){
    //     $( "#happy"+i).animate({
    //         width: "250px",  
    //     }, 1000 );
    //     $( "#happy"+i ).animate({
    //     width: "200px",
        
    //     }, 1000 );
    // }
});



function incarca(){
   
   if(audio_play!=null){
    audio_play.pause();
   }
   if(audio_alege_numar!=null){
    audio_alege_numar.pause();
   }
    r=Math.floor(Math.random() * for_play.length);
    random=for_play[r];
    random_nr_obj=Math.floor(Math.random() * 8);

    
    audio_play = new Audio(sounds[random]) ;

    audio_play.onended = function() {
        audio_alege_numar.play();
        audio_alege_numar.onended=function(){
            afiseaza();
        }
        //document.getElementById("divstop").style.display="none";
        //document.getElementById("divplay").style.display="block";
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
        audio_alege_numar.pause();
        audio_alege_numar.currentTime = 0;
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
    if(audio_incearca.paused){
        if(id==random_nr_obj){
            audio_yey.play();
            ascunde();
            audio_yey.onended=function(){
                audio_primit_stelua.play();
                audio_primit_stelua.onended=function(){
                    if(for_play.length!=0){
                        audio_apasa_play.play();
                        audio_apasa_play.onended=function(){
                            document.getElementById("play").style.visibility="visible";
                        }
                    }  
                }
            } 
            happy_faces++;
            document.getElementById("happy"+happy_faces).style.visibility="visible";
            for_play.splice(r,1);
        }
        else{
            audio_play.pause();
            audio_play.currentTime = 0;
            audio_alege_numar.pause();
            audio_alege_numar.currentTime = 0;
            //document.getElementById("divstop").style.display="none";
            //document.getElementById("divplay").style.display="block";
            if (audio_incearca.paused) {
                audio_incearca.play();
            }else{
                audio_incearca.currentTime = 0
            }
        }
        
        if(for_play.length>0){
            if(id==random_nr_obj){  
                audio_play.pause();
                setTimeout(function(){
                    incarca();
                },6000);
            
            }
        }
        else{
            audio_play.pause();
            audio_alege_numar.pause();
            document.getElementById("confetti").style.display="block";
            document.getElementById("button_next").style.display="none";
            document.getElementById("play").style.display="none";
            document.getElementById("stop").style.display="none";
            document.getElementById("0").style.display="none";
            document.getElementById("1").style.display="none";
            document.getElementById("2").style.display="none";
            document.getElementById("3").style.display="none";
            document.getElementById("4").style.display="none";
            document.getElementById("5").style.display="none";
            document.getElementById("6").style.display="none";
            document.getElementById("7").style.display="none";
            setTimeout(function(){ 
                var audio_all_stars = new Audio("audio/toate_stelutele.m4a") ;
                audio_all_stars.play();
                audio_all_stars.onended=function(){
                    home();
                }
            }, 6000);
        

        }
    }
}


function home(){
    location.href='home.html';
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


  function ascunde(){
    document.getElementById("play").style.visibility="hidden";
    document.getElementById("stop").style.visibility="hidden";
    document.getElementById("0").style.visibility="hidden";
    document.getElementById("1").style.visibility="hidden";
    document.getElementById("2").style.visibility="hidden";
    document.getElementById("3").style.visibility="hidden";
    document.getElementById("4").style.visibility="hidden";
    document.getElementById("5").style.visibility="hidden";
    document.getElementById("6").style.visibility="hidden";
    document.getElementById("7").style.visibility="hidden";
  }

  function afiseaza(){
    //document.getElementById("play").style.visibility="visible";
    //document.getElementById("stop").style.visibility="visible";
    document.getElementById("0").style.visibility="visible";
    document.getElementById("1").style.visibility="visible";
    document.getElementById("2").style.visibility="visible";
    document.getElementById("3").style.visibility="visible";
    document.getElementById("4").style.visibility="visible";
    document.getElementById("5").style.visibility="visible";
    document.getElementById("6").style.visibility="visible";
    document.getElementById("7").style.visibility="visible";
  }