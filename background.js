var css = document.getElementsByTagName("h4")[0];
var color1 = document.getElementsByClassName("input1")[0];
var color2 = document.getElementsByClassName("input2")[0];
var body = document.getElementsByTagName("body")[0];
var html = document.getElementsByTagName("html")[0];

function function1() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
     html.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background+";";
}

color1.addEventListener("input", function1);
color2.addEventListener("input", function1);