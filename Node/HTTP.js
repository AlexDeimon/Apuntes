const http = require('http');

const server = http.createServer((req, res) => {
    //? req: solicitud (request) del cliente
    //? res: respuesta (response) que enviará el servidor

    res.statusCode = 200; //* Código de estado HTTP
    res.setHeader('Content-Type', 'text/html'); //* Establece el tipo de contenido
    res.end('Hola mundo'); //* Envía la respuesta al cliente
});

//* Hacer que el servidor escuche en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

//* Ejemplo básico de un servidor
const server2 = http.createServer((req, res) => {
    res.end('Servidor funcionando');
});

//* Ejemplo 2: Petición a un servidor
const options = {
    hostname: 'example.com',
    port: 80,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`Estado: ${res.statusCode}`);
    res.on('data', (chunk) => {//? chunk: fragmento de datos recibidos del servidor. on: evento que se ejecuta cuando se recibe un chunk
        console.log(`Cuerpo: ${chunk}`);
    });
});

req.end();

//* Ejemplo 3 diferentes rutas
const server3 = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('Bienvenido a la pagina principal');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Acerca de nosotros');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Pagina no encontrada');
    }
});

server3.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});