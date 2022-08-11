
const obtenerNumero = () => {
    let x = prompt("Ingrese un número:")
    try {
        if ( x == "") throw "Esta vacio"
        if(isNaN(x)) throw "No es un número"
        x=Number(x)
        if (x < 5) throw "El numero es muy pequeño"
        if (x > 10) throw "El numero es muy grande" 
    } catch (error) {
        console.log(error)
    }
}
obtenerNumero()