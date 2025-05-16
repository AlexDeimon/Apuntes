const express = require('express');
//const app = express();
const PORT = 3000;

//* Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola, mundo con Express!');
});

//* Rutas con métodos HTTP
app.get('/ruta', (req, res) => {
    res.send('GET: Esta es la ruta');
});

app.post('/ruta', (req, res) => {
    res.send('POST: Esta es la ruta');
});

app.put('/ruta', (req, res) => {
    res.send('PUT: Actualizando en esta ruta');
});

app.delete('/ruta', (req, res) => {
    res.send('DELETE: Eliminando en esta ruta');
});

//* Rutas con parámetros
app.get('/ruta/:id', (req, res) => {
    res.send(`GET: Parámetro recibido ${req.params.id}`);
});

app.post('/ruta/:id', (req, res) => {
    res.send(`POST: Parámetro recibido ${req.params.id}`);
});

app.put('/ruta/:id', (req, res) => {
    res.send(`PUT: Actualizando en esta ruta ${req.params.id}`);
});

app.delete('/ruta/:id', (req, res) => {
    res.send(`DELETE: Eliminando en esta ruta ${req.params.id}`);
});

//* Rutas con query parameters
app.get('/ruta', (req, res) => {
    res.send(`GET: Query recibido ${req.query.param}`);
    //? http://localhost:3000/ruta?param=valor
});

//* Escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//* Middleware
//* Middleware global
app.use((req, res, next) => {
    console.log('Middleware ejecutado. Todas las rutas pasan por aquí');
    next();
});

//* Middleware con ruta específica
app.get('/ruta', (req, res, next) => {
    console.log('Middleware específico ejecutado. Solo la ruta /ruta pasa por aquí');
    next();
}, (req, res) => {
    res.send('GET: Esta es la ruta');
    }
);

//* route
//* Definir una ruta específica con varios métodos
app.route('/usuario')
  .get((req, res) => {
    res.send('Obtener información del usuario');
  })
  .post((req, res) => {
    res.send('Crear un nuevo usuario');
  })
  .put((req, res) => {
    res.send('Actualizar información del usuario');
  })
  .delete((req, res) => {
    res.send('Eliminar al usuario');
  });

//* router
const router = express.Router();
//* Ruta base: /usuario
router.get('/', (req, res) => {
    res.send('Obtener todos los usuarios');
  });
  
  router.post('/', (req, res) => {
    res.send('Crear un nuevo usuario');
  });
  
  router.put('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Actualizar información del usuario con ID: ${userId}`);
  });
  
  router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Eliminar usuario con ID: ${userId}`);
  });
  
module.exports = router;

//* Importar el router en el archivo principal
const usuarioRouter = require('./routes/usuario'); //* Ruta al archivo del router
const app = express();

app.use('/usuario', usuarioRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

//* Middleware de error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
  });

//* Middleware de error con ruta específica
app.get('/error', (req, res, next) => {
    const err = new Error('Error en la ruta /error');
    next(err);
  });
  
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
  });

//* body parsing
app.use(express.json());    //? Para peticiones con Content-Type: application/json
app.use(express.urlencoded());    //? Para peticiones con Content-Type: application/x-www-form-urlencoded

app.post('/datos', (req, res) => {
    const { nombre, edad } = req.body;
    res.send(`Recibido: Nombre - ${nombre}, Edad - ${edad}`);
});