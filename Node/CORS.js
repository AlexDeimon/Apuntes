const express = require('express');
const cors = require('cors');

const app = express();

//* Configuración de CORS
app.use(cors({
  origin: 'https://miaplicacion.com', //? Permitir solicitudes desde este dominio
  methods: ['GET', 'POST', 'PUT', 'DELETE'], //? Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], //? Encabezados permitidos
  credentials: true, //? Permitir credenciales
}));

app.get('/api/datos', (req, res) => {
  res.json({ mensaje: 'Hola desde el servidor' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});


