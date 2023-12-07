let vc;
let currentslide = 0;
window.addEventListener("load", (event) => {
    vc = document.getElementById("vrchni_carousel");
    vc.addEventListener("mousemove", cursors);
    vc.addEventListener("click", move);
});

window.addEventListener("resize", (event) => {

    vc.style.right = currentslide * document.querySelector(".vc_obsah").offsetWidth + "px";
});

function cursors(event) {
    if (event.clientX > window.innerWidth / 2)
        vc.style.cursor = "url('./obrazky/vrchnicarousel/kurzorR.png') 35 35, auto";
    else
        vc.style.cursor = "url('./obrazky/vrchnicarousel/kurzorL.png') 35 35, auto";
};

function move(event) {
    let vcObsah = document.querySelector(".vc_obsah");
    if (event.clientX > window.innerWidth / 2) {
        if (currentslide < 4)
            currentslide++;
        vc.style.right = currentslide * vcObsah.offsetWidth + "px";
    }
    else {
        if (currentslide > 0)
            currentslide--;
        vc.style.right = currentslide * vcObsah.offsetWidth + "px";
    }
    for (let vcTlacitko of vcTlacitka)
        vcTlacitko.style.backgroundColor = "white";
    vcTlacitka[currentslide].style.backgroundColor = "rgb(0, 183, 255)";
};

let vcTlacitka = document.querySelectorAll(".vc-tlacitko");
vcTlacitka[0].style.backgroundColor = "rgb(0, 183, 255)";
for (let i = 0; i < 5; i++) {
    vcTlacitka[i].addEventListener("click", function () {
        currentslide = i;
        vc.style.right = i * document.querySelector(".vc_obsah").offsetWidth + "px";
        for (let vcTlacitko of vcTlacitka)
            vcTlacitko.style.backgroundColor = "white";
        vcTlacitka[currentslide].style.backgroundColor = "rgb(0, 183, 255)";
    });
}


let modelTlacitka = document.querySelectorAll(".modely-tlacitko");
modelTlacitka[0].style.backgroundColor = "rgb(0, 183, 255)";
let modelFotky = document.querySelectorAll(".model-fotka");
for (let i = 0; i < 3; i++) {
    modelTlacitka[i].addEventListener("click", function () {
        for (let modelFotka of modelFotky)
            modelFotka.style.filter = "opacity(0.5)";
        modelFotky[i].style.filter = "";

        document.getElementById("model-fotky").style.right = document.querySelector(".model-fotka").offsetWidth * i + "px";
        for (let modelTlacitko of modelTlacitka)
            modelTlacitko.style.backgroundColor = "white";
        modelTlacitka[i].style.backgroundColor = "rgb(0, 183, 255)";
    });
}

let blogisekTlacitka = document.querySelectorAll(".blogisek-tlacitko");
blogisekTlacitka[0].style.backgroundColor = "rgb(0, 183, 255)";
let blogFotky = document.querySelectorAll(".blog");
for (let i = 0; i < 3; i++) {
    blogisekTlacitka[i].addEventListener("click", function () {
        for (let blogFotka of blogFotky)
            blogFotka.style.filter = "opacity(0.5)";
        blogFotky[i].style.filter = ""

        document.getElementById("blogy").style.right = document.querySelector(".blog").offsetWidth * i + "px";
        for (let modelTlacitko of blogisekTlacitka)
            modelTlacitko.style.backgroundColor = "white";
        blogisekTlacitka[i].style.backgroundColor = "rgb(0, 183, 255)";
    });
}