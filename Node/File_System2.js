const fs = require('node:fs').promises;

async function manejarArchivos() {
    try {
        //* Leer un archivo
        const archivo = await fs.readFile('Hola_mundo.txt', 'utf8');
        console.log(archivo);

        //* Escritura de un archivo
        await fs.writeFile('Hola_mundo2.txt', 'Hola, soy un archivo escrito por node.js');
        
        const archivo2 = await fs.readFile('Hola_mundo2.txt', 'utf8');
        console.log('Contenido nuevo archivo: ' + archivo2);

        //* Modificar un archivo
        await fs.appendFile('Hola_mundo2.txt', ' y acabo de ser modificado');
        
        const archivo3 = await fs.readFile('Hola_mundo2.txt', 'utf8');
        console.log('Contenido archivo modificado: ' + archivo3);

        //* Eliminar archivo
        await fs.unlink('Hola_mundo2.txt');
        console.log('El archivo 2 se ha eliminado');
        
    } catch (err) {
        console.error('Error manejando los archivos:', err);
    }
}

manejarArchivos();

