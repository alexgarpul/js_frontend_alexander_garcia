const entrarAlBar=(edad,pago)=>{
    if (edad>=18 || pago===true){
        console.log("Puede entrar al bar")
    }else{
        console.log("No puede entrar al bar")
    }
}


let edadPersona = Number(prompt("Ingrese su edad"))
let pagoEntrada = Boolean(prompt("¿¿Usted Pago??"))

entrarAlBar(edadPersona,pagoEntrada)

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)