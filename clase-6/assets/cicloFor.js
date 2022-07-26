
//CICLO PARA con VECTOR
//ciclo con vector (arrays)

let numeros = [5,2,3,4,1,3];
console.log(numeros) //impime el vector
console.log(numeros.length) //imprime el tamaño del vector



//clico con advertencia
console.warn("Ciclo para con Vector (Arrays)")
for (let i = 0; i < numeros.length; i++) {
   console.log(numeros[i]*2)
}

//Tarea de VECTOR
let numeros1 = [5,2,3,4,1,3];
for (let i = 0; i <= numeros1.length; i++){
    if (numeros1[i]%2==0){
        console.log(`el número ${i} es impar`)
    }else{
       console.log(`el número ${i} es par`)
    }
    console.log(i)
}




//Ciclo FOR OF
console.warn("Ciclo for of") //imprime datos dentro del vector
for (let i = 0; i < numeros.length; i++) {
   console.log(numeros[i]*2)
}
for (const numero of numeros) {
    console.log(numero)
}

//ciclo for in
console.warn("for in") //imprime el indice
for (const key in numeros) {
    console.log([key])
    if (key==2) {
        console.log(numeros[key])
    }
}

//ciclo for each (para recorrer los elementos que estan dentro del vector)
console.warn("foreach")
numeros.forEach(element => {
   console.log(element)
})
