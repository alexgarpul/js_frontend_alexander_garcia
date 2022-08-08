const titulos = document.querySelectorAll("h1")

for(let i = 0; i < titulos.length; i++){
    titulos[i].className="titulos"
}

titulos[1].id="titulo1"
titulos[2].id="titulos2"

console.log(titulos)

let Nirvana=document.getElementById("Nirvana")

Nirvana.setAttribute("src","https://indiehoy.com/wp-content/uploads/2020/09/nirvana-logo.jpg")

let enlace=document.querySelector("a")
enlace.setAttribute("href","hhtps://www.google.com/")
