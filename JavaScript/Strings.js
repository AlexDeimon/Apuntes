let cadena = "Hola Mundo";

//* PROPIEDADES
//* length

console.log(cadena.length);

//* Métodos
console.log(cadena.toUpperCase());

console.log(cadena.toLowerCase());

console.log(cadena.indexOf('M'));
console.log(cadena.indexOf('Hola'));

console.log(cadena.replace('Mundo','a todos'));

console.log(cadena.substring(2));
console.log(cadena.substring(4, 8));

console.log(cadena.slice(-2));
console.log(cadena.slice(4));
console.log(cadena.slice(0,-2));

let cadena2 = '     Hola mundo     ';
console.log(cadena2.trim());

console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M',5));

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('n',8));
console.log(cadena.endsWith('Mundo'));

console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2));

let cadena3 = 'Hola ';
console.log(cadena3.repeat(3));
console.log('Mundo '.repeat(2));

//* Template Strings

let nombre = 'Diego';
let apellido = 'Sandoval';
let edad = 22;

console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");

console.log(`Hola, soy ${nombre} ${apellido} y tengo ${edad} años.`);