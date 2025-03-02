//* Servidor WebSocket
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Cliente conectado');

    //? Enviar un mensaje al cliente
    socket.send('¡Bienvenido al servidor WebSocket!');

    //? Manejar mensajes recibidos del cliente
    socket.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        socket.send(`Echo: ${message}`); 
    });

    //? Manejar desconexión
    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});

