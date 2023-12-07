window.addEventListener("load", function (event) {

});

let rozkliknuty_burbr = document.getElementById("rozkliknuty_burbr");
let burbr_obsah = document.getElementById("burbr_obsah");

function otevriBurbr() {
    rozkliknuty_burbr.style.zIndex = 999;
    rozkliknuty_burbr.classList.add('rb_viditelny');
    burbr_seznam.classList.add('rb_posunuti');
}

function zavriBurbr() {
    rozkliknuty_burbr.style.zIndex = -1;
    rozkliknuty_burbr.classList.remove('rb_viditelny');
    burbr_seznam.classList.remove('rb_posunuti');
}
