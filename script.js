var casual = document.getElementById("Casual")
var Esport = document.getElementById("Esportivo")
var Elegant = document.getElementById("Elegante")

var divIMG = document.getElementById("imgform")


function casualClick() {
    Esport.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(56, 56, 56))";
    Elegant.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(56, 56, 56))";
    casual.style.background = "linear-gradient(to right, rgb(103, 91, 0), rgb(56, 56, 56))";
    divIMG.src = "Casual.jfif"; 
}
function EsportClick() {
    Elegant.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(56, 56, 56))";
    casual.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(56, 56, 56))";
    Esport.style.background = "linear-gradient(to right, rgb(103, 91, 0), rgb(56, 56, 56))";
    divIMG.src = "esport.jpg";
}
function EleganteClick() {
    Esport.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(56, 56, 56))";
    casual.style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(56, 56, 56))";
    Elegant.style.background = "linear-gradient(to right, rgb(103, 91, 0), rgb(56, 56, 56))";
      divIMG.src = "elegante.jpg";
}