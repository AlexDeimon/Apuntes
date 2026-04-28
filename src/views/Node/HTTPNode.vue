<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Módulo HTTP</h1>
      <p class="subtitle">Creación de servidores y manejo de peticiones nativo en Node.js.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es el módulo HTTP?</h2>
      <p class="section-desc"><code>node:http</code> es un módulo central de Node.js que permite transferir datos a través del Protocolo de Transferencia de Hipertexto (HTTP). Permite a Node.js actuar tanto como servidor web (para recibir peticiones) como cliente (para hacer peticiones a otras APIs).</p>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Creando un Servidor Básico</h2>
      <p class="section-desc">El método <code>http.createServer()</code> genera un servidor que escucha en un puerto específico.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Ejemplo de Servidor</h3>
        </div>
        <CodeBlock language="javascript" code="const http = require('node:http');

// Crear el servidor
const server = http.createServer((req, res) => {
  // Configurar la cabecera de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Enviar el cuerpo de la respuesta y terminar
  res.end('¡Hola Mundo desde Node.js!');
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Anatomía HTTP</h2>
      <p class="section-desc">Cada conexión HTTP se compone de una petición (Request - <code>req</code>) y una respuesta (Response - <code>res</code>).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Request (req)</h3>
          </div>
          <p>Información que envía el cliente al servidor para realizar una petición de algún recurso o realizar alguna acción.</p>
          <ul class="def-list">
            <li><span class="def-term">req.method:</span> Define el tipo de petición que se está realizando. Los métodos más comunes son:
              <ul class="def-list">
                <li><span class="def-term">GET:</span> Solicita datos al servidor.</li>
                <li><span class="def-term">POST:</span> Envía datos al servidor para crear un nuevo recurso.</li>
                <li><span class="def-term">PUT:</span> Envía datos al servidor para actualizar un recurso existente.</li>
                <li><span class="def-term">DELETE:</span> Envía datos al servidor para eliminar un recurso existente.</li>
                <li><span class="def-term">PATCH:</span> Envía datos al servidor para actualizar un recurso existente de manera parcial.</li>
              </ul>
            </li>
            <li><span class="def-term">req.headers:</span> Contiene datos que proporciona información adicional sobre la solicitud o sobre el cliente.
              <ul class="def-list">
                <li><span class="def-term">Accept:</span> Define el tipo de contenido que el cliente espera recibir.</li>
                <li><span class="def-term">Authorization:</span> Define los datos de autenticación.</li>
                <li><span class="def-term">Content-Length:</span> Define el tamaño del contenido.</li>
                <li><span class="def-term">Content-Type:</span> Define el tipo de contenido que se está enviando.</li>
                <li><span class="def-term">Host:</span> Define el dominio del servidor.</li>
                <li><span class="def-term">User-Agent:</span> Informacion del cliente que hace la peticion (navegador, sistema operativo, etc.).</li>
              </ul>
            </li>
            <li><span class="def-term">req.url:</span> La URL solicitada por el cliente.</li>
            <li><span class="def-term">req.params:</span> Son parametros opcionales enviados por el cliente en la URL.</li>
            <li><span class="def-term">req.query:</span> Contiene los parametros opcionales enviados por el cliente en la URL.</li>
            <li><span class="def-term">req.body:</span> Contiene los datos enviados por el cliente en el cuerpo de la petición.</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Response (res)</h3>
          </div>
          <p>Lo que el servidor le contesta al cliente.</p>
          <ul class="def-list">
            <li><span class="def-term">res.writeHead():</span> Proporciona información adicional sobre la respuesta.</li>
            <li><span class="def-term">res.body:</span> El contenido real solicitado por el cliente (por ejemplo, el HTML de una página web, una imagen, datos JSON, etc.).</li>
            <li><span class="def-term">res.statusCode:</span> Código de estado HTTP que indica el resultado de la petición. Los códigos más comunes son:
              <ul class="def-list">
                <li><span class="def-term">200:</span> OK - Petición exitosa.</li>
                <li><span class="def-term">201:</span> Created - El recurso ha sido creado exitosamente.</li>
                <li><span class="def-term">204:</span> No Content - La petición ha sido exitosa, pero no hay contenido para enviar.</li>
                <li><span class="def-term">400:</span> Bad Request - La petición es inválida.</li>
                <li><span class="def-term">401:</span> Unauthorized - La petición requiere autenticación.</li>
                <li><span class="def-term">403:</span> Forbidden - El cliente no tiene permiso para acceder al recurso.</li>
                <li><span class="def-term">404:</span> Not Found - El recurso solicitado no existe.</li>
                <li><span class="def-term">500:</span> Internal Server Error - Error del servidor.</li>
                <li><span class="def-term">503:</span> Service Unavailable - El servidor no está disponible.</li>
                <li><span class="def-term">504:</span> Gateway Timeout - El servidor no recibió respuesta a tiempo.</li>
                <li><span class="def-term">Todos los demas:</span> <a href="https://http.cat/" target="_blank" class="link-external">Revisa el resto de codigos en HTTP Cat</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Enrutamiento (Routing) Nativo</h2>
      <p class="section-desc">Sin usar frameworks externos, puedes manejar diferentes rutas evaluando <code>req.url</code> y <code>req.method</code>.</p>
      <CodeBlock language="javascript" code="const server = http.createServer((req, res) => {
  // Configuración base para enviar JSON
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ mensaje: 'Bienvenido a la API' }));

  } else if (req.url === '/usuarios' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([{ id: 1, nombre: 'Diego' }]));

  } else {
    // Manejo de rutas no encontradas (404)
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});" /><br/><br/>
      <div class="card warning">
        <div class="card-header">
          <h3>Aviso sobre Frameworks</h3>
        </div>
        <p>Aunque es crucial entender el módulo <code>http</code> nativo, en proyectos reales de producción se utilizan frameworks como <strong>Express.js</strong> o <strong>Fastify</strong>. Estos frameworks envuelven el módulo <code>http</code> para facilitar el enrutamiento, manejo de middlewares y parseo del body de manera mucho más limpia y segura.</p>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'process', text: 'Objeto Process y Puertos' },
      { techId: 'nodejs', moduleId: 'envvars', text: 'Variables de Entorno' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
