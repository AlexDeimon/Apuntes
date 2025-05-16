//* Variables:
//* Declaración
let nombre;

//* Declaración múltiple
let dia,mes,año;

//* Inicialización
nombre = "Alex";
console.log(nombre);

//* Reasignación
nombre = "Diego";
console.log(nombre);

//* Constantes
const EDAD = 22;
console.log(EDAD);

//! EDAD = 23; //! ERROR YA QUE NO PUEDE MODIFICARSE UNA CONSTANTE

//* var
var fecha;

fecha = '29/10/2023';

//* Redeclaración
//let nombre;
var fecha = '30/10/2023'; //! POR ESTE MOTIVO YA NO SE USA VAR, DEBIDO A QUE PERMITE REDECLARAR VARIABLES

//* Tipos de datos
//* Numeros:
let edad = 22;

let altura = 1.75;

//* Strings:
let lenguaje = "JavaScript";

lenguaje = 'JS'

//* Boolean:
let correcto = true;

let incorrecto = false;

//* typeOf 
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof lenguaje);
console.log(typeof correcto);
console.log(typeof incorrecto);

//* Operadores
let numero = 3;

//* matemáticos: 
console.log(numero + 4);
console.log(numero - 9);
console.log(numero * 4);
console.log(numero ** 2);
console.log(numero / 2);
console.log(numero % 2);

//* asignación:
numero = 2;
console.log(numero);

numero += 3;
console.log(numero);

numero -= 2;
console.log(numero);

numero *= 5;
console.log(numero);

numero /= 3;
console.log(numero);

numero %= 8;
console.log(numero);

numero **=2;
console.log(numero);

//* Incremento / decremento: 
console.log(numero++);
console.log(numero);

console.log(++numero);
console.log(numero);

console.log(numero--);
console.log(numero);

console.log(--numero);
console.log(numero);

//* Comparación
let a = 2, b = 2, c = 3, d='3';

console.log(a==c);
console.log(c===d);
console.log(a===b);
console.log(a!=b);
console.log(c!==d);

//* Relación
let e = 2, f = 3;

console.log(e>f);
console.log(e<f);
console.log(e>=c);
console.log(e<=a);