var var1, var2, var3, var4, var5, start, next;
var ghiozdane = [], stilouri = [], radiere = [], penare = [], creioane = [], creioaneColorate = [], carioci = [], caiete = [], ascutitori = [], elemente1 = [], elemente2 = [], elemente3 = [];
var items = [];
var rechizite = [];
var altele = [];
var count = 0;
var chosen = [];
var leftItems = [];
var canStart = false;
var stea = '<img id="steaId" src="ImagesJoc/stea.png" alt="Stea">';
var totalStele = 0;
function initializeItems() {
    start = '<img id="start" onclick="playAudio()" src="ImagesJoc/start.png" alt="Start">';
    next = '<img id="next" onclick="nextPage()" src="images/wrong.png" alt="Next">';
    var1 = '<img id="Gh" src="ImagesJoc/Ghiozdan1.png" alt="Ghiozdan1">;';
    var2 = '<img id="Gh" src="ImagesJoc/Ghiozdan2.png" alt="Ghiozdan2">';
    var3 = '<img id="Gh" src="ImagesJoc/Ghiozdan3.jpg" alt="Ghiozdan3">';
    ghiozdane = [var1, var2, var3];
    var1 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Ascutitoare1.png" alt="Ascutitoare1">';
    var2 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Ascutitoare2.png" alt="Ascutitoare2">';
    var3 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Ascutitoare3.png" alt="Ascutitoare3">';
    ascutitori = [var1, var2, var3];
    var1 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Caiet1.jpg" alt="Caiet1">';
    var2 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Caiet2.jpg" alt="Caiet2">';
    var3 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Caiet3.png" alt="Caiet3">';
    caiete = [var1, var2, var3];
    var1 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Carioci1.png" alt="Carioci1">';
    var2 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Carioci2.png" alt="Carioci2">';
    var3 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Carioci3.png" alt="Carioci3">';
    carioci = [var1, var2, var3];
    var1 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creioane1.jpg" alt="Creioane1">';
    var2 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creioane2.jpg" alt="Creioane2">';
    var3 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creioane3.png" alt="Creioane3">';
    creioaneColorate = [var1, var2, var3];
    var1 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creion1.png" alt="Creion1">';
    var2 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creion2.png" alt="Creion2">';
    var3 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creion3.png" alt="Creion3">';
    var4 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creion4.png" alt="Creion4">';
    var5 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Creion5.png" alt="Creion5">';
    creioane = [var1, var2, var3, var4, var5];
    var1 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Penar1.png" alt="Penar1">';
    var2 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Penar2.jpg" alt="Penar2">';
    var3 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Penar3.png" alt="Penar3">';
    var4 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Penar4.png" alt="Penar4">';
    penare = [var1, var2, var3, var4];
    var1 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Radiera1.gif" alt="Radiera1">';
    var2 = '<img id="image1" onclick="numaraRechizite(this)" src="ImagesJoc/Radiera2.png" alt="Radiera2">';
    radiere = [var1, var2];
    var1 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Stilou1.png" alt="Stilou1">';
    var2 = '<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Stilou2.png" alt="Stilou2">';
    stilouri = [var1, var2];
    // var3='<img id="image2" onclick="numaraRechizite(this)" src="ImagesJoc/Stilou3.png" alt="Stilou3">';
    // stilouri=[var1,var2,var3];
    elemente1 = [
        '<img id="image1" src="ImagesJoc/I1.png" alt="I1">',
        '<img id="image1" src="ImagesJoc/I2.png" alt="I2">',
        '<img id="image1" src="ImagesJoc/I3.png" alt="I3">',
        '<img id="image1" src="ImagesJoc/I4.png" alt="I4">',
        '<img id="image1" src="ImagesJoc/I5.png" alt="I5">',
        '<img id="image1" src="ImagesJoc/I6.png" alt="I6">',
        '<img id="image1" src="ImagesJoc/I7.png" alt="I7">'
    ];
    elemente2 = [
        '<img id="image2" src="ImagesJoc/I8.png" alt="I8">',
        '<img id="image2" src="ImagesJoc/I9.jpg" alt="I9">',
        '<img id="image2" src="ImagesJoc/I10.png" alt="I10">',
        '<img id="image2" src="ImagesJoc/I11.png" alt="I11">'
    ];
    elemente3 = [
        '<img id="image3" src="ImagesJoc/I12.png" alt="I12">',
        '<img id="image3" src="ImagesJoc/I13.png" alt="I13">',
        '<img id="image3" src="ImagesJoc/I14.png" alt="I14">',
        '<img id="image3" src="ImagesJoc/I15.gif" alt="I15">'
    ];
}
function playAudio() {
    if (canStart == false) {
        canStart = true;
        var url = 'AudioJoc/Inceput.mp3';
        var audio = new Audio(url);
        audio.play();
        document.getElementById("Gh").style.opacity = "1.0";

        var childrens = document.getElementById("right").children;
        for (var i = 0, length = childrens.length; i < length; i++) {
            childrens[i].style.opacity = "1.0";
        }
        count = 0;
        chosen = [];
    }
}

function setOpacity(image) {
    image.style.opacity = "0.3";
}
function nextPage() {
        window.location.href='home.html';
}
function showItems() {
    initializeItems();
    // playAudio();
    var ghiozdanRandom = Math.floor(Math.random() * ghiozdane.length);
    var ascutitoareRandom = Math.floor(Math.random() * ascutitori.length);
    var caietRandom = Math.floor(Math.random() * caiete.length);
    var cariocaRandom = Math.floor(Math.random() * carioci.length);
    var creionColorRandom = Math.floor(Math.random() * creioaneColorate.length);
    var creionRandom = Math.floor(Math.random() * creioane.length);
    var penarRandom = Math.floor(Math.random() * penare.length);
    var radieraRandom = Math.floor(Math.random() * radiere.length);
    var stilouRandom = Math.floor(Math.random() * stilouri.length);
    var e1Random = Math.floor(Math.random() * elemente1.length);
    var e2Random = Math.floor(Math.random() * elemente1.length);
    var e3Random = Math.floor(Math.random() * elemente1.length);
    var e4Random = Math.floor(Math.random() * elemente2.length);
    var e5Random = Math.floor(Math.random() * elemente3.length);
    items = [elemente1[e1Random], ascutitori[ascutitoareRandom], caiete[caietRandom], elemente1[e2Random], carioci[cariocaRandom], radiere[radieraRandom], elemente1[e3Random], creioane[creionRandom], penare[penarRandom], elemente2[e4Random], creioaneColorate[creionColorRandom], stilouri[stilouRandom], elemente3[e5Random], next];
    rechizite = [ascutitori[ascutitoareRandom], caiete[caietRandom], carioci[cariocaRandom], creioaneColorate[creionColorRandom], creioane[creionRandom], penare[penarRandom], radiere[radieraRandom], stilouri[stilouRandom]];
    altele = [elemente1[e1Random], elemente1[e2Random], elemente1[e3Random], elemente2[e4Random], elemente3[e5Random]];
    leftItems = [start, ghiozdane[ghiozdanRandom]];
    document.getElementById("left").innerHTML = leftItems.join("");
    document.getElementById("right").innerHTML = items.join("");
}

function numaraRechizite(img) {
    if (canStart == true) {
        var audioBravo = new Audio('AudioJoc/Correct-answer.mp3');
        audioBravo.play();
        setOpacity(img);
        if (checkIfChosen(img) == false) {
            count = count + 1;
            chosen[count - 1] = img;
            var stars = [];
            for (i = 0; i < count; i++) {
                stars[i] = stea;
            }
            document.getElementById("stele").innerHTML = stars.join("");
        }
        if (count == 8) {
            var audioNex = new Audio('AudioJoc/Next.mp4');
            audioNex.play();
            if(audioNex.ended==false){
                setTimeout(function(){
                    window.location.href='home.html';
                }, 7000);
            }
            totalStele = count;
        }
    }
}

function checkIfChosen(img) {
    for (i = 0; i < chosen.length; i++) {
        if (img == chosen[i]) {
            return true;
        }
    }
    return false;
}