let mascota ={
    nombre:"Deimos",
    raza:"Galgo",
    color:"Cafe",
    hambriento:true,
    ladrando:function(nombre,color,raza){
        this.nombre=nombre
        this.color=color
        this.raza=raza
        return`El ${this.nombre} esta ladrando`

    }
}

console.log(mascota)
console.log(`${mascota.nombre} ${mascota.color}`)

console.log(mascota.ladrando("Firulais","Gris", "Pitbull"))

//------------------------------------------------------------------------------------------------------------------------------------

let dibujosAnimados=[
    {nombre:"Bugs Bunny", color:"Gris", categoria:"Personaje Principal"},
    {nombre:"Pato Lucas", color:"Negro", categoria:"Personaje Principal"},
    {nombre:"Tazmania", color:"Cafe", categoria:"Personaje Segundario"} 
]

console.log(dibujosAnimados)