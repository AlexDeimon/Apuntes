//* Indormación del proceso de Node.js
console.log(`ID del Proceso: ${process.pid}`);
console.log(`Plataforma: ${process.platform}`);
console.log(`Versión de Node.js: ${process.version}`);

//* Argumentos de linea de comandos
console.log(`Argumentos de linea de comandos: ${process.argv}`);

//* Entrada salida estandar
process.stdin.on('data', (data) => {
    process.stdout.write(`salida: ${data}`);
    process.exit();
});

//* Salida estandar de errores
process.stderr.write('Esto es un error\n');

process.on('exit', () => {
    console.log('El proceso terminó');
});

