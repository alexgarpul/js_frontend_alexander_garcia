const mascotas = {
    nombreCompleto: "hobbit",
    edad:2,
    raza:"chizu",
    habilidades:["modelar","rastrear"]
}

if (mascotas.edad > 2) {
    console.log("no es un cachorro")
}

console.log(mascotas)

const mascotasJSON=JSON.stringify(mascotas)