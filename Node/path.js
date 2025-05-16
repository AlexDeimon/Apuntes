const path = require('path');

const ruta = path.join('directorio', 'subdirectorio', 'archivo.txt');
console.log(ruta);

const rutaAbsoluta = path.resolve();
console.log(rutaAbsoluta); 

const archivo = path.basename('Apuntes/Node/path.js');
console.log(archivo);

const archivoSinExtension = path.basename('Apuntes/Node/path.js', '.js');
console.log(archivoSinExtension);

const directorio = path.dirname('Apuntes/Node/path.js');
console.log(directorio);

const extension = path.extname('Apuntes/Node/path.js');
console.log(extension);

const rutaParseada = path.parse('Apuntes/Node/path.js');
console.log(rutaParseada);

const rutaFormateada = path.format(rutaParseada);
console.log(rutaFormateada);

