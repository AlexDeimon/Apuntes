//* Spread Operator
//*Enviar elementos en un array a una función

const addNumbers = (a, b, c) => {
    console.log(a + b + c);
}

let numbersToAdd = [1, 2, 3]; 

addNumbers(...numbersToAdd);

//* Añadir un array a otro array
let lenguajes = ['HTML', 'CSS', 'JavaScript'];
let otrosLenguajes = ['Python', 'java', 'PHP'];
lenguajes.push(...otrosLenguajes);
console.log(lenguajes); 

//*Copiar arrays
let numeros = [1, 2, 3, 4, 5];
let copiaNumeros = [...numeros];
console.log(copiaNumeros); 

//*Concatenar arrays
let numeros2 = [6, 7, 8];
let numeros3 = [...numeros, ...numeros2];
console.log(numeros3);

//* Enviar un número indefinido de argumentos a una función (parámetros REST)
const restParms = (...numeros) => {
    console.log(numeros)
}
restParms(1,2,3,4,5,6,7,8);

//* librería math
numeros = [-8, 4, 1, 3, 2, 2, 20];

console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

//* Eliminar elementos duplicados
numeros = [2, 2, 8, 4, 3, 1, 3, 2];
console.log([...new Set(numeros)]);