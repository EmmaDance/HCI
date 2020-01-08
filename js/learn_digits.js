
var cifre=["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png"];
var imagini=["images/creanga.png","images/lebada.png","images/inel.png","images/scaun.jpg","images/secera.png","images/melc.png","images/coasa.png","images/covrig.png","images/dus.jpg"];
var poezii=["audio/Bat.m4a","audio/Lebada.m4a","audio/Inel.m4a","audio/Scaun.m4a","audio/Secera.m4a","audio/Melc.m4a","audio/Coasa.m4a","audio/Colac.m4a","audio/Dus.m4a"];
var audio_cifre=["audio/Unumerged.mp3","audio/Doimerged.m4a","audio/Treimerged.m4a","audio/Patrumerged.m4a","audio/Cincimerged.m4a","audio/Sasemerged.m4a","audio/Saptemerged.m4a","audio/Optmerged.m4a","audio/Nouamerged.m4a"];
var audio_nr=["audio/1elefant.m4a","audio/2elefanti.m4a","audio/3elefanti.m4a","audio/4elefanti.m4a","audio/5elefanti.m4a","audio/6elefanti.m4a","audio/7elefanti.m4a","audio/8elefanti.m4a","audio/9elefanti.m4a"];


var audio_cifra_1=new Audio(audio_cifre[0]);
var audio_cifra_2=new Audio(audio_cifre[1]);
var audio_cifra_3=new Audio(audio_cifre[2]);
var audio_cifra_4=new Audio(audio_cifre[3]);
var audio_cifra_5=new Audio(audio_cifre[4]);
var audio_cifra_6=new Audio(audio_cifre[5]);
var audio_cifra_7=new Audio(audio_cifre[6]);
var audio_cifra_8=new Audio(audio_cifre[7]);
var audio_cifra_9=new Audio(audio_cifre[8]);


$(document).ready(function() {
      incarca(1);
});


function incarca(cifra){
    if(cifra<=9){

        document.getElementById("cifra").src=cifre[cifra-1];
        document.getElementById("imagine").src=imagini[cifra-1];
        var audio_poezie=new Audio(poezii[cifra-1]);
        document.getElementById("play").style.visibility="visible"; 
        document.getElementById("play").onclick=function(){
            this.style.visibility="hidden";
            audio_poezie.play();
            $( "#elefant"+cifra).animate({
                width: "250px",  
            }, 1000 );
            $( "#elefant"+cifra ).animate({
            width: "200px",
            
            }, 1000 );
            
            audio_poezie.onended=function(){
                afisareElefanti(cifra);
                window["audio_cifra_"+cifra].play();
                window["audio_cifra_"+cifra].onended=function(){
                    var audio_nr_elefanti=new Audio(audio_nr[cifra-1]);
                    audio_nr_elefanti.play();
                    audio_nr_elefanti.onended=function(){
                        incarca(cifra+1);
                    }
                }  
            } 
        } 
    
    }
    else {
        var bravo=new Audio("audio/Bravo.m4a");
        bravo.play();
        bravo.onended=function(){
           var audio_game=new Audio("audio/intro_game_cifre.m4a");
           audio_game.play();
           audio_game.onended=function(){
            var audio_apasa_play = new Audio("audio/apasa_play.m4a");
            audio_apasa_play.play();
            audio_apasa_play.onended=function(){
                go_to_game();
            }
            
           }
           
        }
        document.getElementById("confetti").style.display="block";
    }
}


function afisareElefanti(cifra){
   
    for(var i=1;i<=cifra;i++){
            $( "#elefant"+i).delay(1000*(i-1)).animate({
                width: "250px",
                
                 }, 1000 );
            $( "#elefant"+i ).animate({
            width: "200px",
            
            }, 1000 );
   
    }
        
    
}


function go_to_game(){
    location.href='digits.html';
}

