const on = document.getElementById("on");
const off = document.getElementById("off");
const lamp = document.getElementById("lamp");

function quebrada() {
    return lamp.src.indexOf("quebrada") > 1;
}

function lampOn() {
    if (!quebrada()) {
        lamp.src = "assets/img/la2.png";
    }
}

function lampOff() {
    if (!quebrada()) {
        lamp.src = "assets/img/la1.png";
    }
}

function lampQuebra() {
    lamp.src = "assets/img/quebrada.png";
}

on.addEventListener("click", lampOn);

off.addEventListener("click", lampOff);

lamp.addEventListener("mousemove", lampOn);

lamp.addEventListener("mouseleave", lampOff);

lamp.addEventListener("dblclick", lampQuebra);
