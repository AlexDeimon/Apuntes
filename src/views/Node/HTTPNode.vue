<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Módulo HTTP</h1>
      <p class="subtitle">Creación de servidores, consumo como cliente y manejo nativo del protocolo HTTP en Node.js.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es el módulo HTTP?</h2>
      <p class="section-desc"><code>node:http</code> es uno de los módulos centrales de Node.js. Permite construir <strong>servidores web</strong> capaces de procesar peticiones y transmitir respuestas mediante streams, así como actuar como <strong>cliente HTTP</strong> de bajo nivel (complementado hoy en día por la API global <code>fetch</code>).</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Creando un Servidor Básico</h3>
          <span class="badge success">Nativo</span>
        </div>
        <p>El método <code>http.createServer()</code> recibe un <em>request listener</em> que se ejecuta en cada petición entrante y retorna una instancia de <code>http.Server</code>.</p>
        <CodeBlock language="javascript" code="// CommonJS: const http = require('node:http');
// ES Modules: import http from 'node:http';
const http = require('node:http');

const server = http.createServer((req, res) => {
  // Configurar código de estado y cabeceras (incluyendo charset UTF-8)
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Enviar el cuerpo de la respuesta y cerrar la transmisión
  res.end('¡Hola Mundo desde Node.js!');
});

const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Anatomía de una Transacción HTTP</h2>
      <p class="section-desc">En <code>node:http</code>, cada conexión entrega dos objetos basados en <strong>Streams</strong>: la petición entrante (<code>req</code>, instancia de <code>http.IncomingMessage</code> / <code>Readable</code>) y la respuesta saliente (<code>res</code>, instancia de <code>http.ServerResponse</code> / <code>Writable</code>).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Request (req)</h3>
            <span class="badge info">Readable Stream</span>
          </div>
          <p>Representa la solicitud enviada por el cliente hacia el servidor.</p>
          <ul class="def-list">
            <li><span class="def-term">req.method:</span> Cadena con el verbo HTTP en mayúsculas ('GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'). Consulta la semántica CRUD e idempotencia de cada verbo en <a href="#" @click.prevent="openModule('nodejs', 'apirest')" class="link-external">API REST →</a></li>
            <li><span class="def-term">req.url:</span> Ruta cruda solicitada por el cliente incluyendo la cadena de consulta (ej. <code>'/usuarios?rol=admin'</code>), sin protocolo ni dominio.</li>
            <li><span class="def-term">req.headers:</span> Objeto con las cabeceras recibidas:
              <ul class="def-list">
                <li><span class="def-term">'accept':</span> Tipos MIME que el cliente espera recibir.</li>
                <li><span class="def-term">'authorization':</span> Credenciales o tokens de autenticación (ej. Bearer JWT).</li>
                <li><span class="def-term">'content-type':</span> Formato del cuerpo enviado (ej. application/json).</li>
                <li><span class="def-term">'content-length':</span> Tamaño del cuerpo en bytes.</li>
                <li><span class="def-term">'host':</span> Dominio y puerto destino solicitados.</li>
                <li><span class="def-term">'user-agent':</span> Información de la aplicación o navegador cliente.</li>
              </ul>
            </li>
            <li><span class="def-term">req.httpVersion:</span> Versión del protocolo negociada (ej. '1.1').</li>
            <li><span class="def-term">req.socket:</span> Referencia al socket TCP subyacente (útil para leer req.socket.remoteAddress).</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Response (res)</h3>
            <span class="badge info">Writable Stream</span>
          </div>
          <p>Permite construir y transmitir gradualmente la respuesta hacia el cliente.</p>
          <ul class="def-list">
            <li><span class="def-term">res.statusCode:</span> Asigna el código numérico de estado HTTP antes de enviar cabeceras (por defecto 200).</li>
            <li><span class="def-term">res.setHeader(nombre, valor):</span> Define una cabecera individual (insensible a mayúsculas). Se puede leer con res.getHeader() o borrar con res.removeHeader() mientras res.headersSent sea false.</li>
            <li><span class="def-term">res.writeHead(statusCode, headers):</span> Escribe la línea de estado y las cabeceras de una sola vez preparándolas para su envío inmediato.</li>
            <li><span class="def-term">res.write(chunk):</span> Envía un fragmento del cuerpo sin cerrar la conexión (modo <em>streaming</em>).</li>
            <li><span class="def-term">res.end([datos]):</span> Envía el último bloque opcional de datos y <strong>finaliza obligatoriamente</strong> la respuesta. Si no se invoca, el cliente quedará esperando hasta agotar el tiempo límite.</li>
          </ul>
        </div>
      </div><br/><br/>
      <div class="card warning">
        <div class="card-header">
          <h3>¡Cuidado! Propiedades que NO existen en node:http nativo</h3>
          <span class="badge danger">Error Frecuente</span>
        </div>
        <p>Propiedades populares como <code>req.params</code>, <code>req.query</code>, <code>req.body</code> y <code>res.body</code> <strong>NO forman parte de Node.js nativo</strong> (evaluarlas retorna <code>undefined</code>). Son utilidades inyectadas por frameworks como <a href="#" @click.prevent="openModule('nodejs', 'express')" class="link-external">Express.js</a> o Fastify.</p>
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Necesidad</th>
                <th>En Express (Framework)</th>
                <th>Equivalente en <code>node:http</code> Nativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Query Strings (<code>?q=node</code>)</td>
                <td><code>req.query.q</code></td>
                <td><code>new URL(req.url, base).searchParams.get('q')</code></td>
              </tr>
              <tr>
                <td>Parámetros de Ruta (<code>/users/42</code>)</td>
                <td><code>req.params.id</code></td>
                <td>Evaluar <code>url.pathname</code> con <code>split('/')</code>, <code>RegExp</code> o <code>URLPattern</code></td>
              </tr>
              <tr>
                <td>Cuerpo recibido (POST/PUT)</td>
                <td><code>req.body</code> (con middleware)</td>
                <td>Consumir el stream <code>req</code> (<code>for await (const chunk of req)</code>)</td>
              </tr>
              <tr>
                <td>Enviar cuerpo de respuesta</td>
                <td><code>res.send()</code> / <code>res.json()</code></td>
                <td><code>res.write(chunk)</code> y <code>res.end(datos)</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Códigos de Estado HTTP</h2>
      <p class="section-desc">El código de estado (<code>res.statusCode</code>) comunica el resultado semántico de la petición. Elegir el código exacto facilita la depuración, el cacheo y el manejo de errores en el cliente.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>2xx — Éxito</h3>
            <span class="badge success">200–299</span>
          </div>
          <ul class="def-list">
            <li><span class="def-term">200 OK:</span> Petición procesada con éxito; incluye representación en el cuerpo.</li>
            <li><span class="def-term">201 Created:</span> Recurso nuevo creado exitosamente (típico en POST; suele acompañarse de la cabecera Location).</li>
            <li><span class="def-term">204 No Content:</span> Acción exitosa sin cuerpo en la respuesta (común en DELETE o PUT).</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>3xx — Redirección y Caché</h3>
            <span class="badge info">300–399</span>
          </div>
          <ul class="def-list">
            <li><span class="def-term">301 Moved Permanently:</span> El recurso cambió de URL definitivamente (cabecera Location). Los motores de búsqueda actualizan el enlace.</li>
            <li><span class="def-term">302 Found:</span> Redirección temporal hacia otra URI.</li>
            <li><span class="def-term">304 Not Modified:</span> El recurso no ha cambiado desde la última descarga (validado con ETag o If-Modified-Since); el cliente reutiliza su caché local.</li>
          </ul>
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>4xx — Errores del Cliente</h3>
            <span class="badge danger">400–499</span>
          </div>
          <ul class="def-list">
            <li><span class="def-term">400 Bad Request:</span> Sintaxis malformada (ej. JSON roto o parámetros inválidos).</li>
            <li><span class="def-term">401 Unauthorized:</span> Falta autenticación o el token es inválido/expirado.</li>
            <li><span class="def-term">403 Forbidden:</span> Autenticado, pero sin permisos suficientes para el recurso.</li>
            <li><span class="def-term">404 Not Found:</span> La ruta o el recurso solicitado no existe.</li>
            <li><span class="def-term">405 Method Not Allowed:</span> La ruta existe, pero no admite ese verbo HTTP (debe incluir cabecera Allow).</li>
            <li><span class="def-term">409 Conflict:</span> Conflicto con el estado actual del servidor (ej. correo ya registrado).</li>
            <li><span class="def-term">422 Unprocessable Content:</span> Sintaxis JSON correcta, pero falla las reglas de negocio o validación de campos.</li>
            <li><span class="def-term">429 Too Many Requests:</span> El cliente superó el límite de peticiones permitido (<em>Rate Limiting</em>).</li>
          </ul>
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>5xx — Errores del Servidor</h3>
            <span class="badge danger">500–599</span>
          </div>
          <ul class="def-list">
            <li><span class="def-term">500 Internal Server Error:</span> Fallo inesperado no controlado en el código del servidor.</li>
            <li><span class="def-term">503 Service Unavailable:</span> Servidor sobrecargado temporalmente o en mantenimiento.</li>
            <li><span class="def-term">504 Gateway Timeout:</span> Un proxy o puerta de enlace no recibió respuesta a tiempo del servidor interno.</li>
            <li><span class="def-term">Catálogo completo:</span> <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status" target="_blank" rel="noopener noreferrer" class="link-external">MDN HTTP Status</a> · <a href="https://http.cat/" target="_blank" rel="noopener noreferrer" class="link-external">HTTP Cat</a></li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Enrutamiento (Routing) Nativo Seguro</h2>
      <p class="section-desc">Comparar directamente <code>req.url === '/usuarios'</code> falla en cuanto el cliente envía parámetros de consulta como <code>/usuarios?rol=admin</code>. La forma correcta en Node.js moderno es parsear <code>req.url</code> con la clase estándar <code>URL</code>.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Enrutamiento con new URL() y searchParams</h3>
          <span class="badge success">Recomendado</span>
        </div>
        <CodeBlock language="javascript" code="const http = require('node:http');

const usuarios = [
  { id: 1, nombre: 'Diego', rol: 'admin' },
  { id: 2, nombre: 'Elena', rol: 'editor' },
];

const server = http.createServer((req, res) => {
  // Construir objeto URL separando pathname y searchParams de forma segura
  const baseURL = `http://${req.headers.host ?? 'localhost'}`;
  const { pathname, searchParams } = new URL(req.url ?? '/', baseURL);

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (pathname === '/' && req.method === 'GET') {
    res.statusCode = 200;
    return res.end(JSON.stringify({ mensaje: 'Bienvenido a la API nativa' }));
  }

  if (pathname === '/usuarios') {
    if (req.method === 'GET') {
      // Funciona tanto para /usuarios como para /usuarios?rol=admin
      const rol = searchParams.get('rol');
      const resultado = rol ? usuarios.filter((u) => u.rol === rol) : usuarios;

      res.statusCode = 200;
      return res.end(JSON.stringify(resultado));
    }

    // Si llaman con POST/DELETE a una ruta que solo acepta GET -> 405
    res.setHeader('Allow', 'GET');
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'Método no permitido' }));
  }

  // Ruta no encontrada (404)
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});" />
      </div><br><br>
      <div class="card warning">
        <div class="card-header">
          <h3>Aviso sobre Frameworks en Producción</h3>
        </div>
        <p>Comprender <code>node:http</code> es indispensable porque todos los frameworks web de Node.js se construyen sobre él. Sin embargo, en APIs de producción se emplean frameworks como <strong>Express.js</strong>, <strong>Fastify</strong> o <strong>Hono</strong>, que resuelven rutas dinámicas, middlewares, validación y parseo de payloads de forma declarativa y segura.</p>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Lectura del Body JSON y Respuestas en Streaming</h2>
      <p class="section-desc">Como <code>req</code> y <code>res</code> son streams, Node.js procesa los cuerpos fragmento a fragmento (<em>chunks</em>) sin bloquear el Event Loop ni obligarte a cargar archivos gigantes enteros en memoria RAM.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Leer el Body JSON en POST</h3>
            <span class="badge success">Patrón Esencial</span>
          </div>
          <p>En peticiones <code>POST</code>/<code>PUT</code>, debemos recolectar los fragmentos del stream <code>req</code>, limitar el tamaño máximo por seguridad y parsear el JSON controlando errores.</p>
          <CodeBlock language="javascript" code="const http = require('node:http');

const MAX_BYTES = 1024 * 1024; // Límite de 1 MB contra abusos de memoria

async function leerBodyJSON(req) {
  const chunks = [];
  let totalBytes = 0;

  for await (const chunk of req) {
    totalBytes += chunk.length;
    if (totalBytes > MAX_BYTES) {
      const err = new Error('Payload demasiado grande');
      err.statusCode = 413;
      throw err;
    }
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/libros' && req.method === 'POST') {
    // Verificar Content-Type en minúsculas
    const contentType = req.headers['content-type'] ?? '';
    if (!contentType.includes('application/json')) {
      res.writeHead(415, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: 'Se requiere application/json' }));
    }

    try {
      const datos = await leerBodyJSON(req);
      const respuesta = JSON.stringify({ creado: true, libro: datos });

      // Buffer.byteLength mide bytes UTF-8 reales (no caracteres como .length)
      res.writeHead(201, {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(respuesta, 'utf8'),
      });
      return res.end(respuesta);
    } catch (err) {
      const status = err.statusCode || 400;
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ error: 'JSON inválido o excede límite' }));
    }
  }

  res.writeHead(404).end();
});

server.listen(3000);" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Cabeceras y Streaming de Respuestas</h3>
            <span class="badge info">Rendimiento</span>
          </div>
          <p>Si no defines <code>Content-Length</code> y envías múltiples bloques con <code>res.write()</code>, Node activa automáticamente <code>Transfer-Encoding: chunked</code>. Para archivos grandes, conecta un stream de lectura con <code>pipeline</code>.</p>
          <CodeBlock language="javascript" code="const http = require('node:http');
const fs = require('node:fs');
const { pipeline } = require('node:stream/promises');

const server = http.createServer(async (req, res) => {
  // Gestión dinámica de cabeceras antes de enviarlas
  res.setHeader('X-Powered-By', 'Node-Nativo');
  console.log(res.getHeader('x-powered-by')); // 'Node-Nativo'
  res.removeHeader('X-Powered-By'); // Buena práctica no exponer tecnologías

  // Caso 1: Respuesta progresiva (chunked streaming)
  if (req.url === '/progreso') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('Procesando lote 1...\n');
    res.write('Procesando lote 2...\n');
    return res.end('¡Completado!\n');
  }

  // Caso 2: Servir archivo grande por stream sin saturar la RAM
  if (req.url === '/reporte.csv') {
    res.writeHead(200, { 'Content-Type': 'text/csv; charset=utf-8' });
    try {
      await pipeline(fs.createReadStream('./reporte.csv'), res);
    } catch (err) {
      console.error('Error en el stream:', err.message);
      if (!res.headersSent) {
        res.writeHead(500).end('Error al leer archivo');
      } else {
        res.destroy();
      }
    }
    return;
  }

  res.writeHead(404).end('No encontrado');
});

server.listen(3000);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Node.js como Cliente HTTP</h2>
      <p class="section-desc">Para realizar peticiones salientes hacia otras APIs o microservicios desde Node.js tienes dos opciones nativas sin instalar paquetes externos: la API estándar <code>fetch</code> (recomendada) y <code>http.request</code> / <code>https.request</code> (bajo nivel).</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>fetch Global + AbortSignal.timeout()</h3>
            <span class="badge success">Estándar Moderno</span>
          </div>
          <p>Node.js incluye <code>fetch</code> de forma global. Recuerda que <code>fetch</code> solo lanza excepción ante fallos de red o abortos; los estados <code>4xx</code>/<code>5xx</code> deben comprobarse con <code>res.ok</code>.</p>
          <CodeBlock language="javascript" code="async function consultarClima() {
  try {
    const res = await fetch('https://api.ejemplo.com/clima?ciudad=Bogota', {
      method: 'GET',
      headers: { Accept: 'application/json' },
      // Cancela automáticamente la petición si tarda más de 5 segundos
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
    }

    const datos = await res.json();
    console.log('Datos recibidos:', datos);
  } catch (err) {
    if (err.name === 'TimeoutError') {
      console.error('La API externa tardó demasiado en responder');
    } else {
      console.error('Fallo en la petición:', err.message);
    }
  }
}

// Enviar datos JSON con POST
async function crearTarea(titulo) {
  const res = await fetch('https://api.ejemplo.com/tareas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo }),
    signal: AbortSignal.timeout(5000),
  });
  return res.json();
}

consultarClima();" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>http.request / https.request</h3>
            <span class="badge info">API de Bajo Nivel</span>
          </div>
          <p>Útil cuando necesitas control directo sobre el socket TCP/TLS, configurar un <code>http.Agent</code> personalizado para <em>connection pooling</em>, inspección de certificados o túneles proxy.</p>
          <CodeBlock language="javascript" code="const https = require('node:https');

const opciones = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos/1',
  method: 'GET',
  headers: { Accept: 'application/json' },
  timeout: 5000,
};

const req = https.request(opciones, (res) => {
  const chunks = [];

  res.on('data', (chunk) => chunks.push(chunk));

  res.on('end', () => {
    const cuerpo = Buffer.concat(chunks).toString('utf8');
    console.log(`Estado: ${res.statusCode}`, JSON.parse(cuerpo));
  });
});

req.on('timeout', () => {
  req.destroy(new Error('Tiempo de espera agotado'));
});

req.on('error', (err) => {
  console.error('Error de conexión:', err.message);
});

// Obligatorio llamar a req.end() para disparar el envío de la solicitud
req.end();" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Eventos del Servidor, Cierre Ordenado y Timeouts</h2>
      <p class="section-desc">En producción, un servidor HTTP debe manejar errores de arranque (como puertos ocupados), cerrar conexiones limpiamente al desplegar una nueva versión y protegerse frente a clientes lentos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Eventos y Graceful Shutdown (server.close)</h3>
          </div>
          <p><code>http.Server</code> hereda de <code>EventEmitter</code>. Escuchar <code>error</code> permite detectar el fallo <code>EADDRINUSE</code>, y <code>server.close()</code> deja de aceptar nuevas conexiones esperando a que terminen las peticiones activas.</p>
          <CodeBlock language="javascript" code="const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end('Servidor activo');
});

server.on('listening', () => {
  console.log('Evento listening: puerto enlazado correctamente');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('El puerto 3000 ya está en uso por otro proceso.');
    process.exit(1);
  }
  console.error('Error inesperado del servidor:', err);
});

server.on('close', () => {
  console.log('Servidor HTTP cerrado por completo');
});

server.listen(3000);

// Apagado ordenado ante señales del sistema (Ctrl+C o Docker/Kubernetes)
function apagarServidor(senal) {
  console.log(`Recibida ${senal}. Cerrando servidor ordenadamente...`);
  server.close((err) => {
    if (err) {
      console.error('Error al cerrar:', err);
      process.exit(1);
    }
    process.exit(0);
  });
}

process.on('SIGINT', () => apagarServidor('SIGINT'));
process.on('SIGTERM', () => apagarServidor('SIGTERM'));" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Configuración de Timeouts</h3>
            <span class="badge success">Producción</span>
          </div>
          <p>Los tiempos límite protegen el servidor contra ataques <em>Slowloris</em> (clientes que envían datos gota a gota) y evitan errores <code>502 Bad Gateway</code> detrás de balanceadores como Nginx o AWS ALB.</p>
          <ul class="def-list">
            <li><span class="def-term">server.requestTimeout (300 000 ms / 5 min):</span> Tiempo máximo para recibir toda la petición (cabeceras + body). Si expira, responde <code>408 Request Timeout</code>.</li>
            <li><span class="def-term">server.headersTimeout (60 000 ms / 60 s):</span> Tiempo máximo esperando recibir por completo las cabeceras HTTP.</li>
            <li><span class="def-term">server.keepAliveTimeout (5 000 ms / 5 s):</span> Tiempo que un socket inactivo permanece abierto esperando nuevas peticiones reutilizando la conexión TCP.</li>
          </ul>
          <CodeBlock language="javascript" code="// Ejemplo recomendado detrás de un Reverse Proxy / Load Balancer (idle 60s):
// keepAliveTimeout debe ser mayor al timeout del balanceador,
// y headersTimeout siempre debe ser ligeramente mayor a keepAliveTimeout.
server.keepAliveTimeout = 65_000; // 65 segundos
server.headersTimeout = 66_000;   // 66 segundos (> keepAliveTimeout)
server.requestTimeout = 30_000;   // 30 segundos máximo por petición" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">HTTPS (TLS) y HTTP/2</h2>
      <p class="section-desc">Node.js ofrece soporte nativo para cifrado TLS mediante <code>node:https</code> y para la versión binaria multiplexada del protocolo mediante <code>node:http2</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Servidor Seguro con node:https</h3>
          </div>
          <p><code>https.createServer()</code> recibe los certificados TLS (<code>key</code> y <code>cert</code>) y expone exactamente la misma interfaz <code>(req, res)</code>. En despliegues en la nube, es habitual delegar el cifrado TLS a un <em>reverse proxy</em> (Nginx, Caddy, Cloudflare) que reenvía tráfico HTTP interno a Node.js.</p>
          <CodeBlock language="javascript" code="const https = require('node:https');
const fs = require('node:fs');

const opcionesTLS = {
  key: fs.readFileSync('./certs/privkey.pem'),
  cert: fs.readFileSync('./certs/fullchain.pem'),
};

const server = https.createServer(opcionesTLS, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Conexión cifrada con HTTPS/TLS');
});

server.listen(8443, () => {
  console.log('Servidor HTTPS en https://localhost:8443');
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Multiplexación con node:http2</h3>
          </div>
          <p><strong>HTTP/2</strong> es un protocolo binario que permite <strong>multiplexar</strong> múltiples peticiones y respuestas en paralelo sobre una única conexión TCP y comprime cabeceras (HPACK). Los navegadores exigen TLS para usar HTTP/2 (<code>h2</code>).</p>
          <CodeBlock language="javascript" code="const http2 = require('node:http2');
const fs = require('node:fs');

// allowHTTP1 permite atender también clientes HTTP/1.1 con (req, res)
const server = http2.createSecureServer(
  {
    key: fs.readFileSync('./certs/privkey.pem'),
    cert: fs.readFileSync('./certs/fullchain.pem'),
    allowHTTP1: true,
  },
  (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ protocolo: req.httpVersion })); // '2.0' o '1.1'
  }
);

server.listen(8443);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'apirest', text: 'API REST y Métodos HTTP' },
      { techId: 'nodejs', moduleId: 'express', text: 'Express.js Framework' },
      { techId: 'nodejs', moduleId: 'filesystem', text: 'File System y Streams' },
      { techId: 'nodejs', moduleId: 'process', text: 'Objeto Process y Señales' },
      { techId: 'nodejs', moduleId: 'envvars', text: 'Variables de Entorno' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
import { useEditorStore } from '@/stores/editor'
import { modules } from '@/constants/modules'

const store = useEditorStore()

const openModule = (techId: string, moduleId: string) => {
  const module = modules[techId]?.find((m) => m.id === moduleId)
  if (module) {
    store.addTab({
      id: `${techId}-${moduleId}`,
      title: module.name,
      route: `/${techId}/${moduleId}`,
      moduleId,
      techId,
    })
  }
}
</script>
