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

//* Métodos avanzados:
let saludo = 'Hola mundo';

console.log(Array.from(saludo));

const letras = ['b', 'c', 'z', 'a'];
numeros = [1, 8, 100, 300, 3];

console.log(letras.sort());

//* solo con sort() no ordena numeros correctamente debido a su valor unicode:
console.log(numeros.sort());

//* sort([callback])
console.log(numeros.sort((a, b) => a - b));

//* callbacks: 
function menorMayor(a, b) {
    if (a - b < 0) return -1;
    if (a - b > 0) return 1;
    if(a == b) return 0;
}

function mayorMenor(a, b) {
    if (b - a < 0) return -1;
    if (b - a > 0) return 1;
    if(b == a) return 0;
}

numeros.forEach((number) => console.log(number));
numeros.forEach((number, index) => console.log(`${number} está en la posición ${index}`));

lenguajes = ['HTML', 'CSS', 'JavaScript', 'Python'];

console.log(lenguajes.some(lenguaje => lenguaje.length > 3));
console.log(lenguajes.every(lenguaje => lenguaje.length > 3));

numeros = [1, 2, 3, 4, 5];

numeros2 = numeros.map(numero => numero * 5);
console.log(numeros2); 

numeros3 = numeros2.filter(numero => numero % 2 ==0);
console.log(numeros3); 

console.log(numeros3.reduce((a, b) => a + b));

const usuarios = [
    {
        username: 'user 1',
        online: true
    },
    {
        username: 'user 2',
        online: true
    },
    {
        username: 'user 3',
        online: false
    },
    {
        username: 'user 4',
        online: false
    },
    {
        username: 'user 5',
        online: false
    }
];

const usersOnline = usuarios.reduce((cont, user) => {
    if (user.online) {
        cont++
    }
    return cont;
}, 0); //* reduce(callback, valor inicial) = reduce((cont, user) => {}, cont = 0)

console.log(`Hay ${usersOnline} usuarios conectados`);