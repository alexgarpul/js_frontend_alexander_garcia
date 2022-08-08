//document.getElementById("titulos").classList.remove('titulos')

let titulos= document.querySelectorAll('h1')

titulos.forEach(element=>{
    element.classList.add("titulos2")

})
    console.log(titulos[0].classList.contains("titulos2"))

    titulos[1].classList.toggle("titulos")
    
    console.warn('feliz con lo que hago')
    