const fs = require('fs')

//* Leer un archivo
const archivo = fs.readFileSync('Hola_mundo.txt', 'utf8');

console.log(archivo);

//* Escritura de un archivo
const crearArchivo2 = fs.writeFileSync('Hola_mundo2.txt', 'Hola, soy un archivo escrito por node.js');

crearArchivo2

const archivo2 = fs.readFileSync('Hola_mundo2.txt', 'utf8');

console.log('Contenido nuevo archivo: ' + archivo2);

//* Modificar un archivo
const modificarArchivo2 = fs.appendFileSync('Hola_mundo2.txt', ' y acabo de ser modificado');

modificarArchivo2

const archivo3 = fs.readFileSync('Hola_mundo2.txt', 'utf8');

console.log('Contenido archivo modificado: ' + archivo3);

//* Eliminar archivo
const eliminarArchivo2 = fs.unlinkSync('Hola_mundo2.txt');

eliminarArchivo2

console.log('El archivo 2 se ha eliminado')

