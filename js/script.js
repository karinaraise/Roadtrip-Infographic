//Volgens mij heb ik samen met Peter deze code tijdens zijn les gemaakt
function animateCharlie() {
    let staticCharlie = document.getElementById("charlie-static");
    staticCharlie.classList.toggle("hidden");

    let animatedCharlie = document.getElementById("charlie-animated");
    animatedCharlie.classList.toggle("hidden");
    console.log("test");
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("charlie-button").addEventListener("click", animateCharlie);
});

//onderstaande codes zijn voor de tweede pagina. 
//function update en show code, heb ik geleerd tijdens de workshop die werd gegeven door Teun en Lucy
var hoogte = 0;

$('show').hide();

//the update loop
window.onload = function () {
    setInterval(update, 10);
}

function update() { //hierin zitten alle animaties om zo maar te noemen, zodat ik function show niet hoef te kopieren en plakken

    hoogte = window.pageXOffset;
    show($('#object1'), 1400, 2500);
    show($('#object2'), 2950, 3650);
    show($('#object3'), 5300, 6800);
    show($('#object4'), 8200, 9600);
    show($('#object5'), 11300, 12900);
    show($('#object6'), 14100, 18000);
    show($('#bestemmingen'), 8200, 9600);
}

function show(object, min, max) {
    if (hoogte > min && hoogte < max) {
        object.fadeIn()
    } else {
        object.fadeOut()
    }
}

//onderstaande event code heb ik gevonden op https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageXOffset / (document.body.offsetWidth - window.innerWidth) //dit heb ik aangepast naar de lengte van de scherm.

        );
    },
    false
);