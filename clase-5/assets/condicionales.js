let age=19;
//condicionales con if solamente
if (age>=18) {
    console.log("Eres mayor de edad");
}
//-----------------------------------------------------------------------------------------------------

//condicionales con if y else
if (age>=18) {
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}
//-----------------------------------------------------------------------------------------------------
//condicional switch case
let personName = "Alexander"  
switch (personName){
    case "Alexander":
        console.log(`A ${personName}Le gusta el Anime`);
        break;
        case "Estevenson" :
        console.log('Es el monitor de Front');
        break;
    default:
        console.log('Esta es una persona diferente');
        break;
}
//---------------------------------------------------------------------------------------------------------
//condicional con operador ternario
let personGenre ="mujer"
personGenre === "mujer"? console.log("Es una mujer"):console.log("Es un hombre")


//------------------------------------------------------------------------------------------------------
// operador ternario con edad

let personaAge =Number(prompt('Ingrese su edad'))

personaAge > 18? console.log("Mayor a 18"): console.log("Menor a 18")

let isHungry =false

isHungry ? console.log("Tenemos hambre") : console.log("Tenemos sueñito")