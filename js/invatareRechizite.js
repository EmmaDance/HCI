var urlRechizite = 'AudioInvatare/Rechizite.mp3';
var urlFinal='AudioInvatare/Final.mp4';
var urlCaiet = 'AudioInvatare/Caiet.mp3';
var urlCreion = 'AudioInvatare/Creion.mp3';
var urlCreioane = 'AudioInvatare/CreioaneC.mp3';
var urlCarioci = 'AudioInvatare/Carioci.mp3';
var urlAscutitoare = 'AudioInvatare/Ascutitoare.mp3';
var urlGhiozdan = 'AudioInvatare/Ghiozdan.mp3';
var urlPenar = 'AudioInvatare/Penar.mp3';
var urlRadiera = 'AudioInvatare/Radiera.mp3';
var urlStilou = 'AudioInvatare/Stilou.mp3';
var start = '<img src="ImaginiInvatare/start.png"  onclick="startTeaching(this)">';
var multime='<img id="multime" src="ImaginiInvatare/multime.jpg"">';
var next='<img src="ImaginiInvatare/next.png" onclick="nextPage()">';

var ghiozdane = [
    '<img src="ImaginiInvatare/Ghiozdan1.png">',
    '<img src="ImaginiInvatare/Ghiozdan2.png">',
    '<img src="ImaginiInvatare/Ghiozdan3.jpg">'
];
var ascutitori = [
    '<img src="ImaginiInvatare/Ascutitoare2.png">',
    '<img src="ImaginiInvatare/Ascutitoare3.png">'
];
var caiete = [
    '<img src="ImaginiInvatare/Caiet2.jpg">',
    '<img src="ImaginiInvatare/Caiet3.png">'
];
var carioci = [
    '<img src="ImaginiInvatare/Carioci1.png">',
    '<img src="ImaginiInvatare/Carioci3.png">'
];
var creioaneC = [
    '<img src="ImaginiInvatare/Creioane2.jpg">',
    '<img src="ImaginiInvatare/Creioane3.png">'
];
var creioane = [
    '<img src="ImaginiInvatare/Creion1.png">',
    '<img src="ImaginiInvatare/Creion2.png">',
    '<img src="ImaginiInvatare/Creion3.png">',
    '<img src="ImaginiInvatare/Creion4.png">'
];
var penare = [
    '<img src="ImaginiInvatare/Penar2.jpg">',
    '<img src="ImaginiInvatare/Penar3.png">',
    '<img src="ImaginiInvatare/Penar4.png">'
];
var radiere = [
    '<img src="ImaginiInvatare/Radiera1.gif">',
    '<img src="ImaginiInvatare/Radiera2.png">'
];
var stilouri = [
    '<img src="ImaginiInvatare/Stilou1.png">',
    '<img src="ImaginiInvatare/Stilou2.png">',
    '<img src="ImaginiInvatare/Stilou3.png">'
];


var ghiozdan, creion, creionC, caiet,carioca,ascutitoare,penar,radiera, stilou;

function showItems() {
    document.getElementById("image").innerHTML = start;
    ghiozdan=ghiozdane[Math.floor(Math.random()*ghiozdane.length)];
    creion=creioane[Math.floor(Math.random()*creioane.length)];
    carioca=carioci[Math.floor(Math.random()*carioci.length)];
    creionC=creioaneC[Math.floor(Math.random()*creioaneC.length)];
    caiet=caiete[Math.floor(Math.random()*caiete.length)];
    ascutitoare=ascutitori[Math.floor(Math.random()*ascutitori.length)];
    penar=penare[Math.floor(Math.random()*penare.length)];
    radiera=radiere[Math.floor(Math.random()*radiere.length)];
    stilou=stilouri[Math.floor(Math.random()*stilouri.length)];

}

function startTeaching(startImage) {
    var audioInceput = new Audio(urlRechizite);
    audioInceput.play();
    document.getElementById("image").innerHTML = multime;
    if (audioInceput.ended == false) {
        setTimeout(function () {
            // alert("Hello");
            document.getElementById("image").innerHTML = ghiozdan;
            var audioGhiozdan = new Audio(urlGhiozdan);
            audioGhiozdan.play();
            if (audioGhiozdan.ended == false) {
                setTimeout(function () {
                    //alert("Hello");
                    document.getElementById("image").innerHTML = ascutitoare;
                    var audioAscutitoare = new Audio(urlAscutitoare);
                    audioAscutitoare.play();
                    if (audioAscutitoare.ended == false) {
                        setTimeout(function () {
                            //alert("Hello");
                            document.getElementById("image").innerHTML = caiet;
                            var audioCaiet = new Audio(urlCaiet);
                            audioCaiet.play();
                            if (audioCaiet.ended == false) {
                                setTimeout(function () {
                                    //alert("Hello");
                                    document.getElementById("image").innerHTML = carioca;
                                    var audioCarioca = new Audio(urlCarioci);
                                    audioCarioca.play();
                                    if (audioCarioca.ended == false) {
                                        setTimeout(function () {
                                            //alert("Hello");
                                            document.getElementById("image").innerHTML = creionC;
                                            var audioCreioaneC = new Audio(urlCreioane);
                                            audioCreioaneC.play();
                                            if (audioCreioaneC.ended == false) {
                                                setTimeout(function () {
                                                    //alert("Hello");
                                                    document.getElementById("image").innerHTML = creion;
                                                    var audioCreioane = new Audio(urlCreion);
                                                    audioCreioane.play();
                                                    if (audioCreioane.ended == false) {
                                                        setTimeout(function () {
                                                            //alert("Hello");
                                                            document.getElementById("image").innerHTML = penar;
                                                            var audioPenare = new Audio(urlPenar);
                                                            audioPenare.play();
                                                            if (audioPenare.ended == false) {
                                                                setTimeout(function () {
                                                                    //alert("Hello");
                                                                    document.getElementById("image").innerHTML = radiera;
                                                                    var audioRadiera = new Audio(urlRadiera);
                                                                    audioRadiera.play();
                                                                    if (audioRadiera.ended == false) {
                                                                        setTimeout(function () {
                                                                            //alert("Hello");
                                                                            document.getElementById("image").innerHTML = stilou;
                                                                            var audioStilouri = new Audio(urlStilou);
                                                                            audioStilouri.play();
                                                                            if (audioStilouri.ended == false) {
                                                                                setTimeout(function () {
                                                                                    //alert("Hello");
                                                                                    var audioFinal=new Audio(urlFinal);
                                                                                    audioFinal.play();
                                                                                    if(audioFinal.ended==false){
                                                                                        setTimeout(function(){
                                                                                            window.location.href='jocRechizite.html';
                                                                                            //document.getElementById("image").innerHTML = next;
                                                                                        }, 7000);
                                                                                    }
                                                                                }, 6000);
                                                                            }
                                                                        }, 7000);
                                                                    }
                                                                }, 7000);
                                                            }
                                                        }, 6000);
                                                    }
                                                }, 7000);
                                            }
                                        }, 6000);
                                    }
                                }, 8000);
                            }
                        }, 7000);
                    }
                }, 10000);
            }
        }, 20000);
    }
}

function nextPage(){

}