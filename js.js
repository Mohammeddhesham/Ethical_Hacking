var style=document.querySelector("strong");
var color1=document.querySelector(".color");
var color2=document.querySelector(".color2");
var body=document.getElementBYId("gradient");

function c(){
    boody.style.background=
    "linear-gradient(to right,"
    + color1.value
    +","
    +color2.value
    +")";
    css.textcntent = body.style.background+";";

}
color1.addEventListener("input",c);

color2.addEventListener("input",c);


