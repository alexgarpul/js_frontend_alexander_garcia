let numeros=[2,5,8,9,3,1]

console.log(numeros)

numeros.push(10)
console.log(numeros)

numeros.pop()
console.log(numeros)

numeros.unshift(10)
console.log(numeros.length)

function person (name,age,color) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.getInfo = function (){
        return`${this.name}, ${this.age} ${this.color}`;

    }

}

let father = new person('jhon', 18, 'red');
let mother = new person('juana', 19, 'green');

person.prototype.getName = function () {
    return `Name: ${this.name}`
}

console.log(mother.getInfo())
console.log(father.getName())
console.log(mother)