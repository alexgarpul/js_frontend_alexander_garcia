// // document.body.addEventListener("onload",alert("Hola"))



// document.querySelector("#boton").addEventListener("click", (e)=>{
//     alert("🐙" + e.target)
    
// })
let age = document.querySelector("#age")
let boton= document.querySelector("button")

boton.addEventListener("click", ()=>{
    alert(`su edad es: ${age.value}`)
})
