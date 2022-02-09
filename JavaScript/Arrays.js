let numeros = [1, 2, 3, 4, 5, 6];

let lenguajes = ['HTML', 'CSS', 'JavaScript', 'Python'];

let booleans = [true, true, false];

console.log(numeros[0] + numeros[1]);

console.log(`"${lenguajes[3]}" tiene ${lenguajes[3].length} letras`);

console.log(numeros);

//* Propiedades
console.log(`el número de posiciones del array "numeros" es ${numeros.length}`);

//* métodos
let numero = 3;
console.log(Array.isArray(numero));
console.log(Array.isArray(numeros));

console.log(numeros);
let deleteElement = numeros.shift();
console.log(numeros);
console.log(`elemento eliminado: ${deleteElement}`);
console.log(numeros);
deleteElement= numeros.pop();
console.log(`elemento eliminado: ${deleteElement}`);
console.log(numeros);

console.log(numeros);
console.log(`longitud actual: ${numeros.length}`)
let newElement = numeros.push(6);
console.log(numeros);
console.log(`nueva longitud: ${newElement}`);
console.log(numeros);
newElement= numeros.unshift(0,1);
console.log(`nueva longitud: ${newElement}`);
console.log(numeros);

console.log(numeros.indexOf(7));
console.log(numeros.indexOf(2));

numeros.push(2);
console.log(numeros);
console.log(numeros.lastIndexOf(2));

let invertNumeros = numeros.reverse();
console.log(invertNumeros);
numeros.reverse();

console.log(numeros);
let arrayString = numeros.join();
console.log(arrayString);
arrayString = numeros.join('-');
console.log(arrayString);

//* slice:
let numeros2 = numeros.slice();
console.log(numeros);
console.log(numeros2);

let numeros3 = numeros.slice(1);
console.log(numeros);
console.log(numeros3);

let numeros4= numeros.slice(1,6);
console.log(numeros);
console.log(numeros4);

//*splice: 

numeros2.splice(3);//* Elimina desde la posición 3 hasta el final
console.log(numeros2);

numeros3.splice(2, 2);//* Elimina desde la posición 2 el número valores que le indiquemos
console.log(numeros3);

//* Si B es un valor distinto de 0 elimina el número de valores que indiquemos en B y añade los valores de items a partir de la posición A: 
numeros4.splice(2, 2, 4, 42, 7);
console.log(numeros4);

//* Si b vale 0 añade los elementos a partir de la posición a y no elimina ninguno:
numeros4.splice(4, 0, 43, 20, 2);
console.log(numeros4);