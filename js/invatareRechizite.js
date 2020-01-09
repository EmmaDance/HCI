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
var start = '<img src="ImaginiInvatare/start.png"  alt="Start"  onclick="startTeaching(this)">';
var multime='<img id="multime"  alt="Rechizite" src="ImaginiInvatare/multime.jpg"">';
var next='<img src="ImaginiInvatare/next.png"  alt="urmatoareaPagina" onclick="nextPage()">';

var ghiozdane = [
    '<img src="ImaginiInvatare/Ghiozdan1.png" alt="Ghiozdan">',
    '<img src="ImaginiInvatare/Ghiozdan2.png" alt="Ghiozdan">',
    '<img src="ImaginiInvatare/Ghiozdan3.jpg" alt="Ghiozdan">'
];
var ascutitori = [
    '<img src="ImaginiInvatare/Ascutitoare2.png" alt="Ascutitoare">',
    '<img src="ImaginiInvatare/Ascutitoare3.png" alt="Ascutitoare">'
];
var caiete = [
    '<img src="ImaginiInvatare/Caiet2.jpg" alt="Caiet">',
    '<img src="ImaginiInvatare/Caiet3.png" alt="Caiet">'
];
var carioci = [
    '<img src="ImaginiInvatare/Carioci1.png" alt="Carioci">',
    '<img src="ImaginiInvatare/Carioci3.png" alt="Carioci">'
];
var creioaneC = [
    '<img src="ImaginiInvatare/Creioane2.jpg" alt="Creioane colorate">',
    '<img src="ImaginiInvatare/Creioane3.png" alt="Creioane colorate">'
];
var creioane = [
    '<img src="ImaginiInvatare/Creion1.png" alt="Creion">',
    '<img src="ImaginiInvatare/Creion2.png" alt="Creion">',
    '<img src="ImaginiInvatare/Creion3.png" alt="Creion">',
    '<img src="ImaginiInvatare/Creion4.png" alt="Creion">'
];
var penare = [
    '<img src="ImaginiInvatare/Penar2.jpg" alt="Penar">',
    '<img src="ImaginiInvatare/Penar3.png" alt="Penar">',
    '<img src="ImaginiInvatare/Penar4.png" alt="Penar">'
];
var radiere = [
    '<img src="ImaginiInvatare/Radiera1.gif" alt="Radiera">',
    '<img src="ImaginiInvatare/Radiera2.png" alt="Radiera">'
];
var stilouri = [
    '<img src="ImaginiInvatare/Stilou1.png" alt="Stilou">',
   // '<img src="ImaginiInvatare/Stilou2.png" alt="Stilou">',
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