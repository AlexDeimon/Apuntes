import{d as m,u as v,c as f,b as s,a,e as r,f as n,w as c,p as g,o as T}from"./index-CKI4t8CI.js";import{C as o}from"./CodeBlock-DwQdIeou.js";import{R as h}from"./ReferenceSection-CmY74Yhj.js";const b={class:"module-content"},y={class:"topic-section"},S={class:"card recommended"},q={class:"topic-section"},E={class:"cards-grid"},P={class:"card info"},x={class:"def-list"},C={class:"card warning"},j={class:"topic-section"},w={class:"card recommended"},N={class:"topic-section"},R={class:"cards-grid"},k={class:"card recommended"},H={class:"card info"},O={class:"topic-section"},A={class:"cards-grid"},L={class:"card recommended"},B={class:"card info"},I={class:"topic-section"},M={class:"cards-grid"},U={class:"card info"},J={class:"card recommended"},F={class:"topic-section"},G={class:"cards-grid"},D={class:"card info"},z={class:"card info"},K=m({__name:"HTTPNode",setup($){const p=v(),d=(t,e)=>{var l;const i=(l=g[t])==null?void 0:l.find(u=>u.id===e);i&&p.addTab({id:`${t}-${e}`,title:i.name,route:`/${t}/${e}`,moduleId:e,techId:t})};return(t,e)=>(T(),f("div",b,[e[57]||(e[57]=s("div",{class:"header-section"},[s("h1",{class:"main-title node"},"Módulo HTTP"),s("p",{class:"subtitle"},"Creación de servidores, consumo como cliente y manejo nativo del protocolo HTTP en Node.js.")],-1)),s("section",y,[e[4]||(e[4]=s("h2",{class:"section-title node"},"¿Qué es el módulo HTTP?",-1)),e[5]||(e[5]=s("p",{class:"section-desc"},[s("code",null,"node:http"),n(" es uno de los módulos centrales de Node.js. Permite construir "),s("strong",null,"servidores web"),n(" capaces de procesar peticiones y transmitir respuestas mediante streams, así como actuar como "),s("strong",null,"cliente HTTP"),n(" de bajo nivel (complementado hoy en día por la API global "),s("code",null,"fetch"),n(").")],-1)),s("div",S,[e[2]||(e[2]=s("div",{class:"card-header"},[s("h3",null,"Creando un Servidor Básico"),s("span",{class:"badge success"},"Nativo")],-1)),e[3]||(e[3]=s("p",null,[n("El método "),s("code",null,"http.createServer()"),n(" recibe un "),s("em",null,"request listener"),n(" que se ejecuta en cada petición entrante y retorna una instancia de "),s("code",null,"http.Server"),n(".")],-1)),r(o,{language:"javascript",code:`// CommonJS: const http = require('node:http');
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
  console.log(\`Servidor escuchando en http://localhost:\${PORT}/\`);
});`})])]),e[58]||(e[58]=s("hr",{class:"divider"},null,-1)),s("section",q,[e[28]||(e[28]=a('<h2 class="section-title node">Anatomía de una Transacción HTTP</h2><p class="section-desc">En <code>node:http</code>, cada conexión entrega dos objetos basados en <strong>Streams</strong>: la petición entrante (<code>req</code>, instancia de <code>http.IncomingMessage</code> / <code>Readable</code>) y la respuesta saliente (<code>res</code>, instancia de <code>http.ServerResponse</code> / <code>Writable</code>).</p>',2)),s("div",E,[s("div",P,[e[9]||(e[9]=s("div",{class:"card-header"},[s("h3",null,"Request (req)"),s("span",{class:"badge info"},"Readable Stream")],-1)),e[10]||(e[10]=s("p",null,"Representa la solicitud enviada por el cliente hacia el servidor.",-1)),s("ul",x,[s("li",null,[e[6]||(e[6]=s("span",{class:"def-term"},"req.method:",-1)),e[7]||(e[7]=n(" Cadena con el verbo HTTP en mayúsculas ('GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'). Consulta la semántica CRUD e idempotencia de cada verbo en ")),s("a",{href:"#",onClick:e[0]||(e[0]=c(i=>d("nodejs","apirest"),["prevent"])),class:"link-external"},"API REST →")]),e[8]||(e[8]=a('<li><span class="def-term">req.url:</span> Ruta cruda solicitada por el cliente incluyendo la cadena de consulta (ej. <code>&#39;/usuarios?rol=admin&#39;</code>), sin protocolo ni dominio.</li><li><span class="def-term">req.headers:</span> Objeto con las cabeceras recibidas: <ul class="def-list"><li><span class="def-term">&#39;accept&#39;:</span> Tipos MIME que el cliente espera recibir.</li><li><span class="def-term">&#39;authorization&#39;:</span> Credenciales o tokens de autenticación (ej. Bearer JWT).</li><li><span class="def-term">&#39;content-type&#39;:</span> Formato del cuerpo enviado (ej. application/json).</li><li><span class="def-term">&#39;content-length&#39;:</span> Tamaño del cuerpo en bytes.</li><li><span class="def-term">&#39;host&#39;:</span> Dominio y puerto destino solicitados.</li><li><span class="def-term">&#39;user-agent&#39;:</span> Información de la aplicación o navegador cliente.</li></ul></li><li><span class="def-term">req.httpVersion:</span> Versión del protocolo negociada (ej. &#39;1.1&#39;).</li><li><span class="def-term">req.socket:</span> Referencia al socket TCP subyacente (útil para leer req.socket.remoteAddress).</li>',4))])]),e[11]||(e[11]=a('<div class="card info"><div class="card-header"><h3>Response (res)</h3><span class="badge info">Writable Stream</span></div><p>Permite construir y transmitir gradualmente la respuesta hacia el cliente.</p><ul class="def-list"><li><span class="def-term">res.statusCode:</span> Asigna el código numérico de estado HTTP antes de enviar cabeceras (por defecto 200).</li><li><span class="def-term">res.setHeader(nombre, valor):</span> Define una cabecera individual (insensible a mayúsculas). Se puede leer con res.getHeader() o borrar con res.removeHeader() mientras res.headersSent sea false.</li><li><span class="def-term">res.writeHead(statusCode, headers):</span> Escribe la línea de estado y las cabeceras de una sola vez preparándolas para su envío inmediato.</li><li><span class="def-term">res.write(chunk):</span> Envía un fragmento del cuerpo sin cerrar la conexión (modo <em>streaming</em>).</li><li><span class="def-term">res.end([datos]):</span> Envía el último bloque opcional de datos y <strong>finaliza obligatoriamente</strong> la respuesta. Si no se invoca, el cliente quedará esperando hasta agotar el tiempo límite.</li></ul></div>',1))]),e[29]||(e[29]=s("br",null,null,-1)),e[30]||(e[30]=s("br",null,null,-1)),s("div",C,[e[26]||(e[26]=s("div",{class:"card-header"},[s("h3",null,"¡Cuidado! Propiedades que NO existen en node:http nativo"),s("span",{class:"badge danger"},"Error Frecuente")],-1)),s("p",null,[e[12]||(e[12]=n("Propiedades populares como ")),e[13]||(e[13]=s("code",null,"req.params",-1)),e[14]||(e[14]=n(", ")),e[15]||(e[15]=s("code",null,"req.query",-1)),e[16]||(e[16]=n(", ")),e[17]||(e[17]=s("code",null,"req.body",-1)),e[18]||(e[18]=n(" y ")),e[19]||(e[19]=s("code",null,"res.body",-1)),e[20]||(e[20]=n()),e[21]||(e[21]=s("strong",null,"NO forman parte de Node.js nativo",-1)),e[22]||(e[22]=n(" (evaluarlas retorna ")),e[23]||(e[23]=s("code",null,"undefined",-1)),e[24]||(e[24]=n("). Son utilidades inyectadas por frameworks como ")),s("a",{href:"#",onClick:e[1]||(e[1]=c(i=>d("nodejs","express"),["prevent"])),class:"link-external"},"Express.js"),e[25]||(e[25]=n(" o Fastify."))]),e[27]||(e[27]=a('<div class="table-responsive"><table class="custom-table"><thead><tr><th>Necesidad</th><th>En Express (Framework)</th><th>Equivalente en <code>node:http</code> Nativo</th></tr></thead><tbody><tr><td>Query Strings (<code>?q=node</code>)</td><td><code>req.query.q</code></td><td><code>new URL(req.url, base).searchParams.get(&#39;q&#39;)</code></td></tr><tr><td>Parámetros de Ruta (<code>/users/42</code>)</td><td><code>req.params.id</code></td><td>Evaluar <code>url.pathname</code> con <code>split(&#39;/&#39;)</code>, <code>RegExp</code> o <code>URLPattern</code></td></tr><tr><td>Cuerpo recibido (POST/PUT)</td><td><code>req.body</code> (con middleware)</td><td>Consumir el stream <code>req</code> (<code>for await (const chunk of req)</code>)</td></tr><tr><td>Enviar cuerpo de respuesta</td><td><code>res.send()</code> / <code>res.json()</code></td><td><code>res.write(chunk)</code> y <code>res.end(datos)</code></td></tr></tbody></table></div>',1))])]),e[59]||(e[59]=a('<hr class="divider"><section class="topic-section"><h2 class="section-title node">Códigos de Estado HTTP</h2><p class="section-desc">El código de estado (<code>res.statusCode</code>) comunica el resultado semántico de la petición. Elegir el código exacto facilita la depuración, el cacheo y el manejo de errores en el cliente.</p><div class="cards-grid"><div class="card recommended"><div class="card-header"><h3>2xx — Éxito</h3><span class="badge success">200–299</span></div><ul class="def-list"><li><span class="def-term">200 OK:</span> Petición procesada con éxito; incluye representación en el cuerpo.</li><li><span class="def-term">201 Created:</span> Recurso nuevo creado exitosamente (típico en POST; suele acompañarse de la cabecera Location).</li><li><span class="def-term">204 No Content:</span> Acción exitosa sin cuerpo en la respuesta (común en DELETE o PUT).</li></ul></div><div class="card info"><div class="card-header"><h3>3xx — Redirección y Caché</h3><span class="badge info">300–399</span></div><ul class="def-list"><li><span class="def-term">301 Moved Permanently:</span> El recurso cambió de URL definitivamente (cabecera Location). Los motores de búsqueda actualizan el enlace.</li><li><span class="def-term">302 Found:</span> Redirección temporal hacia otra URI.</li><li><span class="def-term">304 Not Modified:</span> El recurso no ha cambiado desde la última descarga (validado con ETag o If-Modified-Since); el cliente reutiliza su caché local.</li></ul></div><div class="card warning"><div class="card-header"><h3>4xx — Errores del Cliente</h3><span class="badge danger">400–499</span></div><ul class="def-list"><li><span class="def-term">400 Bad Request:</span> Sintaxis malformada (ej. JSON roto o parámetros inválidos).</li><li><span class="def-term">401 Unauthorized:</span> Falta autenticación o el token es inválido/expirado.</li><li><span class="def-term">403 Forbidden:</span> Autenticado, pero sin permisos suficientes para el recurso.</li><li><span class="def-term">404 Not Found:</span> La ruta o el recurso solicitado no existe.</li><li><span class="def-term">405 Method Not Allowed:</span> La ruta existe, pero no admite ese verbo HTTP (debe incluir cabecera Allow).</li><li><span class="def-term">409 Conflict:</span> Conflicto con el estado actual del servidor (ej. correo ya registrado).</li><li><span class="def-term">422 Unprocessable Content:</span> Sintaxis JSON correcta, pero falla las reglas de negocio o validación de campos.</li><li><span class="def-term">429 Too Many Requests:</span> El cliente superó el límite de peticiones permitido (<em>Rate Limiting</em>).</li></ul></div><div class="card warning"><div class="card-header"><h3>5xx — Errores del Servidor</h3><span class="badge danger">500–599</span></div><ul class="def-list"><li><span class="def-term">500 Internal Server Error:</span> Fallo inesperado no controlado en el código del servidor.</li><li><span class="def-term">503 Service Unavailable:</span> Servidor sobrecargado temporalmente o en mantenimiento.</li><li><span class="def-term">504 Gateway Timeout:</span> Un proxy o puerta de enlace no recibió respuesta a tiempo del servidor interno.</li><li><span class="def-term">Catálogo completo:</span> <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status" target="_blank" rel="noopener noreferrer" class="link-external">MDN HTTP Status</a> · <a href="https://http.cat/" target="_blank" rel="noopener noreferrer" class="link-external">HTTP Cat</a></li></ul></div></div></section><hr class="divider">',3)),s("section",j,[e[32]||(e[32]=s("h2",{class:"section-title node"},"Enrutamiento (Routing) Nativo Seguro",-1)),e[33]||(e[33]=s("p",{class:"section-desc"},[n("Comparar directamente "),s("code",null,"req.url === '/usuarios'"),n(" falla en cuanto el cliente envía parámetros de consulta como "),s("code",null,"/usuarios?rol=admin"),n(". La forma correcta en Node.js moderno es parsear "),s("code",null,"req.url"),n(" con la clase estándar "),s("code",null,"URL"),n(".")],-1)),s("div",w,[e[31]||(e[31]=s("div",{class:"card-header"},[s("h3",null,"Enrutamiento con new URL() y searchParams"),s("span",{class:"badge success"},"Recomendado")],-1)),r(o,{language:"javascript",code:`const http = require('node:http');

const usuarios = [
  { id: 1, nombre: 'Diego', rol: 'admin' },
  { id: 2, nombre: 'Elena', rol: 'editor' },
];

const server = http.createServer((req, res) => {
  // Construir objeto URL separando pathname y searchParams de forma segura
  const baseURL = \`http://\${req.headers.host ?? 'localhost'}\`;
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
});`})]),e[34]||(e[34]=a('<br><br><div class="card warning"><div class="card-header"><h3>Aviso sobre Frameworks en Producción</h3></div><p>Comprender <code>node:http</code> es indispensable porque todos los frameworks web de Node.js se construyen sobre él. Sin embargo, en APIs de producción se emplean frameworks como <strong>Express.js</strong>, <strong>Fastify</strong> o <strong>Hono</strong>, que resuelven rutas dinámicas, middlewares, validación y parseo de payloads de forma declarativa y segura.</p></div>',3))]),e[60]||(e[60]=s("hr",{class:"divider"},null,-1)),s("section",N,[e[39]||(e[39]=s("h2",{class:"section-title node"},"Lectura del Body JSON y Respuestas en Streaming",-1)),e[40]||(e[40]=s("p",{class:"section-desc"},[n("Como "),s("code",null,"req"),n(" y "),s("code",null,"res"),n(" son streams, Node.js procesa los cuerpos fragmento a fragmento ("),s("em",null,"chunks"),n(") sin bloquear el Event Loop ni obligarte a cargar archivos gigantes enteros en memoria RAM.")],-1)),s("div",R,[s("div",k,[e[35]||(e[35]=s("div",{class:"card-header"},[s("h3",null,"Leer el Body JSON en POST"),s("span",{class:"badge success"},"Patrón Esencial")],-1)),e[36]||(e[36]=s("p",null,[n("En peticiones "),s("code",null,"POST"),n("/"),s("code",null,"PUT"),n(", debemos recolectar los fragmentos del stream "),s("code",null,"req"),n(", limitar el tamaño máximo por seguridad y parsear el JSON controlando errores.")],-1)),r(o,{language:"javascript",code:`const http = require('node:http');

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

server.listen(3000);`})]),s("div",H,[e[37]||(e[37]=s("div",{class:"card-header"},[s("h3",null,"Cabeceras y Streaming de Respuestas"),s("span",{class:"badge info"},"Rendimiento")],-1)),e[38]||(e[38]=s("p",null,[n("Si no defines "),s("code",null,"Content-Length"),n(" y envías múltiples bloques con "),s("code",null,"res.write()"),n(", Node activa automáticamente "),s("code",null,"Transfer-Encoding: chunked"),n(". Para archivos grandes, conecta un stream de lectura con "),s("code",null,"pipeline"),n(".")],-1)),r(o,{language:"javascript",code:`const http = require('node:http');
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
    res.write('Procesando lote 1...\\n');
    res.write('Procesando lote 2...\\n');
    return res.end('¡Completado!\\n');
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

server.listen(3000);`})])])]),e[61]||(e[61]=s("hr",{class:"divider"},null,-1)),s("section",O,[e[44]||(e[44]=s("h2",{class:"section-title node"},"Node.js como Cliente HTTP",-1)),e[45]||(e[45]=s("p",{class:"section-desc"},[n("Para realizar peticiones salientes hacia otras APIs o microservicios desde Node.js tienes dos opciones nativas sin instalar paquetes externos: la API estándar "),s("code",null,"fetch"),n(" (recomendada) y "),s("code",null,"http.request"),n(" / "),s("code",null,"https.request"),n(" (bajo nivel).")],-1)),s("div",A,[s("div",L,[e[41]||(e[41]=a('<div class="card-header"><h3>fetch Global + AbortSignal.timeout()</h3><span class="badge success">Estándar Moderno</span></div><p>Node.js incluye <code>fetch</code> de forma global. Recuerda que <code>fetch</code> solo lanza excepción ante fallos de red o abortos; los estados <code>4xx</code>/<code>5xx</code> deben comprobarse con <code>res.ok</code>.</p>',2)),r(o,{language:"javascript",code:`async function consultarClima() {
  try {
    const res = await fetch('https://api.ejemplo.com/clima?ciudad=Bogota', {
      method: 'GET',
      headers: { Accept: 'application/json' },
      // Cancela automáticamente la petición si tarda más de 5 segundos
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(\`Error HTTP: \${res.status} \${res.statusText}\`);
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

consultarClima();`})]),s("div",B,[e[42]||(e[42]=s("div",{class:"card-header"},[s("h3",null,"http.request / https.request"),s("span",{class:"badge info"},"API de Bajo Nivel")],-1)),e[43]||(e[43]=s("p",null,[n("Útil cuando necesitas control directo sobre el socket TCP/TLS, configurar un "),s("code",null,"http.Agent"),n(" personalizado para "),s("em",null,"connection pooling"),n(", inspección de certificados o túneles proxy.")],-1)),r(o,{language:"javascript",code:`const https = require('node:https');

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
    console.log(\`Estado: \${res.statusCode}\`, JSON.parse(cuerpo));
  });
});

req.on('timeout', () => {
  req.destroy(new Error('Tiempo de espera agotado'));
});

req.on('error', (err) => {
  console.error('Error de conexión:', err.message);
});

// Obligatorio llamar a req.end() para disparar el envío de la solicitud
req.end();`})])])]),e[62]||(e[62]=s("hr",{class:"divider"},null,-1)),s("section",I,[e[49]||(e[49]=s("h2",{class:"section-title node"},"Eventos del Servidor, Cierre Ordenado y Timeouts",-1)),e[50]||(e[50]=s("p",{class:"section-desc"},"En producción, un servidor HTTP debe manejar errores de arranque (como puertos ocupados), cerrar conexiones limpiamente al desplegar una nueva versión y protegerse frente a clientes lentos.",-1)),s("div",M,[s("div",U,[e[46]||(e[46]=s("div",{class:"card-header"},[s("h3",null,"Eventos y Graceful Shutdown (server.close)")],-1)),e[47]||(e[47]=s("p",null,[s("code",null,"http.Server"),n(" hereda de "),s("code",null,"EventEmitter"),n(". Escuchar "),s("code",null,"error"),n(" permite detectar el fallo "),s("code",null,"EADDRINUSE"),n(", y "),s("code",null,"server.close()"),n(" deja de aceptar nuevas conexiones esperando a que terminen las peticiones activas.")],-1)),r(o,{language:"javascript",code:`const http = require('node:http');

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
  console.log(\`Recibida \${senal}. Cerrando servidor ordenadamente...\`);
  server.close((err) => {
    if (err) {
      console.error('Error al cerrar:', err);
      process.exit(1);
    }
    process.exit(0);
  });
}

process.on('SIGINT', () => apagarServidor('SIGINT'));
process.on('SIGTERM', () => apagarServidor('SIGTERM'));`})]),s("div",J,[e[48]||(e[48]=a('<div class="card-header"><h3>Configuración de Timeouts</h3><span class="badge success">Producción</span></div><p>Los tiempos límite protegen el servidor contra ataques <em>Slowloris</em> (clientes que envían datos gota a gota) y evitan errores <code>502 Bad Gateway</code> detrás de balanceadores como Nginx o AWS ALB.</p><ul class="def-list"><li><span class="def-term">server.requestTimeout (300 000 ms / 5 min):</span> Tiempo máximo para recibir toda la petición (cabeceras + body). Si expira, responde <code>408 Request Timeout</code>.</li><li><span class="def-term">server.headersTimeout (60 000 ms / 60 s):</span> Tiempo máximo esperando recibir por completo las cabeceras HTTP.</li><li><span class="def-term">server.keepAliveTimeout (5 000 ms / 5 s):</span> Tiempo que un socket inactivo permanece abierto esperando nuevas peticiones reutilizando la conexión TCP.</li></ul>',3)),r(o,{language:"javascript",code:`// Ejemplo recomendado detrás de un Reverse Proxy / Load Balancer (idle 60s):
// keepAliveTimeout debe ser mayor al timeout del balanceador,
// y headersTimeout siempre debe ser ligeramente mayor a keepAliveTimeout.
server.keepAliveTimeout = 65_000; // 65 segundos
server.headersTimeout = 66_000;   // 66 segundos (> keepAliveTimeout)
server.requestTimeout = 30_000;   // 30 segundos máximo por petición`})])])]),e[63]||(e[63]=s("hr",{class:"divider"},null,-1)),s("section",F,[e[55]||(e[55]=s("h2",{class:"section-title node"},"HTTPS (TLS) y HTTP/2",-1)),e[56]||(e[56]=s("p",{class:"section-desc"},[n("Node.js ofrece soporte nativo para cifrado TLS mediante "),s("code",null,"node:https"),n(" y para la versión binaria multiplexada del protocolo mediante "),s("code",null,"node:http2"),n(".")],-1)),s("div",G,[s("div",D,[e[51]||(e[51]=s("div",{class:"card-header"},[s("h3",null,"Servidor Seguro con node:https")],-1)),e[52]||(e[52]=s("p",null,[s("code",null,"https.createServer()"),n(" recibe los certificados TLS ("),s("code",null,"key"),n(" y "),s("code",null,"cert"),n(") y expone exactamente la misma interfaz "),s("code",null,"(req, res)"),n(". En despliegues en la nube, es habitual delegar el cifrado TLS a un "),s("em",null,"reverse proxy"),n(" (Nginx, Caddy, Cloudflare) que reenvía tráfico HTTP interno a Node.js.")],-1)),r(o,{language:"javascript",code:`const https = require('node:https');
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
});`})]),s("div",z,[e[53]||(e[53]=s("div",{class:"card-header"},[s("h3",null,"Multiplexación con node:http2")],-1)),e[54]||(e[54]=s("p",null,[s("strong",null,"HTTP/2"),n(" es un protocolo binario que permite "),s("strong",null,"multiplexar"),n(" múltiples peticiones y respuestas en paralelo sobre una única conexión TCP y comprime cabeceras (HPACK). Los navegadores exigen TLS para usar HTTP/2 ("),s("code",null,"h2"),n(").")],-1)),r(o,{language:"javascript",code:`const http2 = require('node:http2');
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

server.listen(8443);`})])])]),e[64]||(e[64]=s("hr",{class:"divider"},null,-1)),r(h,{references:[{techId:"nodejs",moduleId:"apirest",text:"API REST y Métodos HTTP"},{techId:"nodejs",moduleId:"express",text:"Express.js Framework"},{techId:"nodejs",moduleId:"filesystem",text:"File System y Streams"},{techId:"nodejs",moduleId:"process",text:"Objeto Process y Señales"},{techId:"nodejs",moduleId:"envvars",text:"Variables de Entorno"}]})]))}});export{K as default};
