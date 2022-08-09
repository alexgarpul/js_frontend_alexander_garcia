// let lista=document.querySelector("#lista")

// let elementos=document.querySelectorAll(".elemento")

// for(let i = 0; i< elementos.length; i++){
//     lista.removeChild(elementos[i])
// }


let lista= document.querySelector('#lista')

for(let i = 1; i <= 100; i++){

    let elemento = document.createElement("li")
    elemento.innerHTML=i
    lista.appendChild(elemento)
}