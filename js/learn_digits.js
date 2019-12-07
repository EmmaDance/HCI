
var cifre=["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png"];
var imagini=["images/creanga.png","images/lebada.png","images/inel.png","images/scaun.jpg","images/secera.png","images/melc.png","images/coasa.png","images/covrig.png","images/dus.jpg"];
var poezii=["audio/Bat.mp3","audio/Lebada.mp3","audio/Inel.mp3","audio/Scaun.mp3","audio/Secera.mp3","audio/Melc.mp3","audio/Coasa.mp3","audio/Colac.mp3","audio/Dus.mp3"];
var audio_cifre=["audio/Unu_merged.mp3","audio/Doi_merged.mp3","audio/Trei_merged.mp3","audio/Patru_merged.mp3","audio/Cinci_merged.mp3","audio/Sase_merged.mp3","audio/Sapte_merged.mp3","audio/Opt_merged.mp3","audio/Noua_merged.mp3"];
var audio_nr=["audio/1elefant.mp3","audio/2elefanti.mp3","audio/3elefanti.mp3","audio/4elefanti.mp3","audio/5elefanti.mp3","audio/6elefanti.mp3","audio/7elefanti.mp3","audio/8elefanti.mp3","audio/9elefanti.mp3"];


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
        var bravo=new Audio("audio/Bravo.mp3");
        bravo.play();
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


function home(){
    location.href='index.html';
}

