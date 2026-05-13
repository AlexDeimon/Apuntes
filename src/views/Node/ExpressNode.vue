<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Express.js</h1>
      <p class="subtitle">El framework web rápido, minimalista y flexible para Node.js.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es Express?</h2>
      <p class="section-desc">Express abstrae la complejidad del módulo <code>http</code> nativo de Node.js, ofreciendo una sintaxis mucho más limpia para crear servidores, manejar rutas y trabajar con peticiones/respuestas.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Crear un Servidor Básico</h3>
        </div>
        <CodeBlock language="javascript" code="const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Definición de Rutas</h2>
      <p class="section-desc">El enrutamiento determina cómo responde una aplicación a una solicitud de un cliente en una determinada vía final (URI) mediante un método HTTP específico (GET, POST, etc.).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Parámetros de Ruta (Params)</h3>
          </div>
          <p>Capturan valores dinámicos definidos directamente en la URL. Se accede con <code>req.params</code>.</p>
          <CodeBlock language="javascript" code="app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario ${userId}`);
});
// Ejemplo: /usuarios/42 -> userId = '42'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Cadenas de Consulta (Query)</h3>
          </div>
          <p>Parámetros adicionales enviados en la URL tras un <code>?</code>. Se accede con <code>req.query</code>.</p>
          <CodeBlock language="javascript" code="app.get('/buscar', (req, res) => {
  const termino = req.query.q;
  res.send(`Resultados para: ${termino}`);
});
// Ejemplo: /buscar?q=node -> termino = 'node'" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Route y Router en Express</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Route</h3>
          </div>
          <p>El método app.route() se utiliza para manejar varias solicitudes HTTP en un solo punto de ruta sin necesidad de repetir la ruta en cada método.</p>
          <ul class="def-list">
            <li><span class="def-term">Propósito:</span>Manejar múltiples métodos en una ruta.</li>
            <li><span class="def-term">Uso principal:</span>Simplificación para rutas específicas.</li>
            <li><span class="def-term">Escalabilidad:</span>Limitada a rutas únicas.</li>
            <li><span class="def-term">Sintaxis:</span>Más concisa para casos simples.</li>
          </ul>
          <CodeBlock language="javascript" code="const app = express();

app.route('/usuario')
  .get((req, res) => {
    res.send('Obtener un usuario');
  })
  .post((req, res) => {
    res.send('Crear un usuario');
  })
  .put((req, res) => {
    res.send('Actualizar un usuario');
  })
  .delete((req, res) => {
    res.send('Eliminar un usuario');
  });" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Router</h3>
          </div>
          <p>Para evitar tener todas las rutas en el archivo principal (<code>index.js</code> o <code>app.js</code>), usamos <code>express.Router()</code> para agrupar manejadores de rutas comunes.</p>
          <ul class="def-list">
            <li><span class="def-term">Propósito:</span>Modularizar y agrupar rutas relacionadas.</li>
            <li><span class="def-term">Uso principal:</span>Estructuración y escalabilidad de la app.</li>
            <li><span class="def-term">Escalabilidad:</span>Más escalable para APIs grandes.</li>
            <li><span class="def-term">Sintaxis:</span>Más código, pero mejor organización.</li>
          </ul>
          <CodeBlock language="javascript" code="// En routes/usuarios.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Lista de usuarios'));
router.post('/', (req, res) => res.send('Usuario creado'));

module.exports = router;

// ------------------------------------------

// En el archivo principal (index.js)
const userRoutes = require('./routes/usuarios');

// Usar el router en un prefijo específico
app.use('/api/usuarios', userRoutes);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Middleware y Body Parsing</h2>
      <p class="section-desc">Los middleware son funciones que se ejecutan antes de que se ejecute una ruta. Se utilizan para realizar tareas comunes a todas las rutas, como la validación de datos, la autenticación de usuarios y el manejo de errores. Tienen acceso al objeto de solicitud (<code>req</code>), al objeto de respuesta (<code>res</code>) y a la siguiente función de middleware (<code>next</code>).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Ejemplo de Middleware Propio</h3>
          </div>
          <p>Se ejecutan secuencialmente. <strong>Importante:</strong> Siempre llamar a <code>next()</code> si no se termina la petición.</p>
          <CodeBlock language="javascript" code="const logger = (req, res, next) => {
  console.log(`${req.method} a ${req.url}`);
  next(); // Pasa el control a la siguiente función
};

app.use(logger);" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Middlewares Integrados (Body Parser)</h3>
            <span class="badge warning">Crucial</span>
          </div>
          <p>Express no parsea el body de POST/PUT automáticamente. Necesitas estos middlewares nativos.</p>
          <CodeBlock language="javascript" code="// Para parsear application/json
app.use(express.json());

// Para parsear formularios (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.post('/datos', (req, res) => {
  console.log(req.body); // Ahora req.body existe
  res.send('Datos recibidos');
});" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Ejemplo de Manejo de Errores</h3>
          </div>
          <p>Si ocurre un error en un middleware, se debe llamar a <code>next(err)</code> para pasar el error al siguiente middleware de error.</p>
          <CodeBlock language="javascript" code="const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
};

app.use(errorHandler);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Express en Acción</h2>
      <div class="card recommended">
        <div class="card-header">
          <h3>Ejemplo Práctico</h3>
        </div>
        <CodeBlock language="javascript" code="// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta GET
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Ruta con parámetro
app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario ${userId}`);
});

// Ruta con query
app.get('/buscar', (req, res) => {
  const termino = req.query.q;
  res.send(`Resultados para: ${termino}`);
});

// Ruta POST
app.post('/datos', (req, res) => {
  console.log(req.body);
  res.send('Datos recibidos');
});

// Middleware de error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'http', text: 'Módulo HTTP Nativo' },
      { techId: 'nodejs', moduleId: 'npm', text: 'NPM (Para instalar Express)' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
