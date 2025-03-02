//* Cliente WebSocket 
const socket = new WebSocket('ws://localhost:8080');

//? Evento cuando la conexión se abre
socket.addEventListener('open', () => {
    console.log('Conectado al servidor WebSocket');
    socket.send('Hola desde el cliente');
});

//? Evento cuando se recibe un mensaje
socket.addEventListener('message', (event) => {
    console.log(`Mensaje del servidor: ${event.data}`);
});

//? Evento cuando la conexión se cierra
socket.addEventListener('close', () => {
    console.log('Conexión cerrada');
});

