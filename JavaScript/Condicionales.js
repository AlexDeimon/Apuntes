//* Condicional simple: 
let num = 6;

//* una sola linea de código a ejecutar:
if(num > 0) console.log(`${num} es positivo`);

//* varias lineas de código:
num = -4;

if(num > 0) {
    console.log(`el número es ${num}`)
    console.log(`${num} es positivo`);
} 

//* Condicional compuesto: 
num = 8;

if(num < 0) {
    console.log(`${num} es negativo`);
} else {
    console.log(`${num} es positivo`);
}

//* Condicional múltiple:
num = 0;

if(num > 0) {
    console.log(`${num} es positivo`);
} else if(num < 0) {
    console.log(`${num} es negativo`);
} else {
    console.log(`el número es 0`);
}

//* if - else anidados:
let min = -50;
let max = 50;
num = Math.round(Math.random() * (max - min) + min);

if(num > 0) {
    if(num < 50) {
        console.log(`${num} es mayor que 0 y menor que 50`);
    } else {
        console.log(`${num} es igual a 50`);
    }
} else if(num < 0) {
    if(num > -50){
        console.log(`${num} es menor que 0 y mayor que -50`);
    } else {
        console.log(`${num} es igual a -50`);
    }
} else {
    console.log(`${num} es igual a 0`);
}

// //* operadores lógicos
if(num > 0 && num < 50){
    console.log(`${num} es mayor que 0 y menor que 50`);
} else if(num < 0 && num > -50) {
    console.log(`${num} es menor que 0 y mayor que -50`);
} else if(num == 50 || num == -50) {
    console.log(`${num} igual a -50 o a 50`);
} else {
    console.log(`${num} es igual a 0`);
}

//* Switch
//* sintaxis simple
min = 1;
max = 6;
let opcion = Math.round(Math.random() * (max - min) + min);

switch (opcion) {
    case 1: console.log("opción 1"); break;
    case 2: console.log("opción 2"); break;
    case 3:  console.log("opción 3"); break;
    case 4:  console.log("opción 4"); break;
    case 5:  console.log("opción 5"); break;
    default: console.log("opcion invalida");
}

//* sintaxis múltiple 
switch (opcion) {
    case 1:
    case 3:
    case 5: console.log(`${opcion} es impar`); break;
    case 2: 
    case 4:  console.log(`${opcion} es par`); break;
    default: console.log(`${opcion} no está contemplado en los casos`);
}

//* Operador ternario: 
//* (condición) ? true : false

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);