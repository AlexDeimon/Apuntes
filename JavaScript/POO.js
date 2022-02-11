//* Objetos
//* Crear objeto usuario:
let usuario = {
    id: '13211022',
    nombre: 'Alex',
    edad: 22,
    lenguajes: ['HTML','CSS','JavaScript']
}

//* acceder a atributo nombre:
console.log(usuario.nombre);
console.log(usuario['nombre']); 

//* acceder a todos los atributos
for(const key in usuario){
    console.log(key);
}

//* acceder a los atributos y sus valores:
for(const key in usuario){
    console.log(`${key}: ${usuario[key]}`);
}

//* acceder a cada uno de los valores del atributo lenguajes:
for(const lenguaje of usuario.lenguajes){
    console.log(lenguaje);
}

//*imprimir el objeto en una frase
console.log(`El usuario ${usuario.id} de nombre ${usuario.nombre} tiene ${usuario.edad} años y maneja los lenguajes: ${usuario.lenguajes.join(', ')}`);


//*Funciones
//* sintaxis con fuction:
function saludar1(){
    console.log("Hola mundo");
}

//* sintaxis con funcion flecha:
const saludar2 = () => { console.log("Hola mundo") };

//* uso de parámatros:
function saludarUsuario1(usuario){
    console.log(`Hola ${usuario}`);
}

const saludarUsuario2 = (usuario) => { console.log(`Hola ${usuario}`) };

//* devolucion de valores (return): 
function suma1(num1, num2){
    return num1 + num2
}

const suma2 = (num1, num2) => num1 + num2 //* en las funciones flecha si solo hay una instruccion no es necesario el return ni las {} 

//* invocar funciones:
saludar1();
saludar2();

saludarUsuario1('Alex');
saludarUsuario2('Diego');

console.log(suma1(2, 1)); 

let result = suma2(4, 1);

console.log(result);