<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Objeto Process</h1>
      <p class="subtitle">Interacción con el entorno de ejecución, el sistema operativo y el ciclo de vida de la aplicación.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es Process?</h2>
      <p class="section-desc"><code>process</code> es un objeto <strong>global</strong> de Node.js que proporciona información y control sobre el proceso actual de ejecución. Al ser global, no requiere ser importado, aunque también puedes hacerlo de forma explícita con el prefijo <code>node:</code>.</p>
      <CodeBlock language="javascript" code="// Global: disponible sin importar nada
console.log(process.pid);

// Importación explícita (opcional, útil para claridad y en ESM)
import process from 'node:process';
// CommonJS: const process = require('node:process');" />
      <div class="info-box">
        <p>Es fundamental para leer argumentos de la terminal, consultar el entorno de ejecución, gestionar el ciclo de vida de la aplicación (señales, cierre, errores) y comunicarte con la entrada/salida estándar.</p>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Propiedades Útiles</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>process.env</h3>
            <span class="badge success">Crítico</span>
          </div>
          <p>Objeto con las <strong>variables de entorno</strong> del proceso. Todos sus valores son <strong>strings</strong>. Se usa para configurar puertos, claves y conexiones sin escribirlas en el código.</p>
          <CodeBlock language="javascript" code="const PORT = Number(process.env.PORT) || 3000;
const DB_URL = process.env.DATABASE_URL;" />
          <p>Para archivos <code>.env</code>, valores por defecto, validación y seguridad, consulta el módulo <a href="#" @click.prevent="openModule('nodejs', 'envvars')" class="link-external">Variables de Entorno →</a></p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.argv</h3>
          </div>
          <p>Un array con los <strong>argumentos</strong> pasados por la línea de comandos al ejecutar el script.</p>
          <p>El primer elemento es la ruta del ejecutable de Node.js, el segundo es la ruta del archivo JavaScript que se está ejecutando, y los elementos restantes son los argumentos pasados al script. Por eso se suele usar <code>process.argv.slice(2)</code> para obtener solo los argumentos del usuario.</p>
          <CodeBlock language="bash" code="node app.js --nombre=Diego --modo=dev" />
          <CodeBlock language="javascript" code="// app.js
console.log(process.argv);
// [
//   '/usr/local/bin/node',      // ejecutable de Node.js
//   '/home/diego/app.js',       // script en ejecución
//   '--nombre=Diego',
//   '--modo=dev'
// ]

const args = process.argv.slice(2);
console.log(args); // [ '--nombre=Diego', '--modo=dev' ]" />
          <p>Para analizar flags y opciones sin parsear a mano, Node incluye <code>util.parseArgs</code>:</p>
          <CodeBlock language="javascript" code="import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    nombre: { type: 'string' },
    modo: { type: 'string', default: 'prod' },
    verbose: { type: 'boolean', short: 'v' },
  },
});

console.log(values); // { nombre: 'Diego', modo: 'dev' }" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>process.platform y process.arch</h3>
          </div>
          <p><code>platform</code> indica el sistema operativo (<code>'win32'</code>, <code>'linux'</code>, <code>'darwin'</code>) y <code>arch</code> la arquitectura del procesador (<code>'x64'</code>, <code>'arm64'</code>…). Nota: en Windows siempre es <code>'win32'</code>, incluso en sistemas de 64 bits.</p>
          <CodeBlock language="javascript" code="if (process.platform === 'win32') {
  console.log('Ejecutando en Windows');
}

console.log(process.arch); // 'x64'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.pid</h3>
          </div>
          <p>Retorna el <strong>ID del proceso</strong> actual en el sistema operativo.</p>
          <CodeBlock language="javascript" code="console.log(process.pid);" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>process.version y process.versions</h3>
          </div>
          <p><code>version</code> retorna la <strong>versión de Node.js</strong> en uso. <code>versions</code> es un objeto con la versión de Node y de sus dependencias internas (V8, libuv, OpenSSL…).</p>
          <CodeBlock language="javascript" code="console.log(process.version);  // 'v24.x.x'
console.log(process.versions.v8); // versión del motor V8" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.title</h3>
          </div>
          <p>Nombre con el que el proceso aparece en el administrador de tareas o en <code>ps</code>. Se puede leer y modificar.</p>
          <CodeBlock language="javascript" code="process.title = 'mi-api-usuarios';
console.log(process.title);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Entrada y Salida Estándar (Streams)</h2>
      <p class="section-desc"><code>process.stdin</code>, <code>process.stdout</code> y <code>process.stderr</code> son <strong>propiedades</strong> que exponen los flujos estándar del proceso como <strong>streams</strong>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>process.stdin</h3>
          </div>
          <p>Flujo de <strong>entrada estándar</strong> (STDIN): lo que el usuario escribe en la terminal o lo que otro programa envía por una tubería (<em>pipe</em>).</p>
          <CodeBlock language="javascript" code="process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log('Recibido:', data.trim());
});

// Útil para detectar si hay una persona en la terminal:
console.log(process.stdin.isTTY); // true en terminal, undefined con pipe" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.stdout</h3>
            <span class="badge info">Writable</span>
          </div>
          <p>Flujo de <strong>salida estándar</strong> (STDOUT). Es lo que usa <code>console.log</code> internamente, pero sin añadir salto de línea automático.</p>
          <CodeBlock language="javascript" code="process.stdout.write('Hola, mundo!\n');" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>process.stderr</h3>
            <span class="badge danger">Errores</span>
          </div>
          <p>Flujo de <strong>salida de error</strong> (STDERR). Separa los mensajes de error de la salida normal, lo que permite redirigirlos por separado (<code>node app.js 2> errores.log</code>).</p>
          <CodeBlock language="javascript" code="process.stderr.write('Error: algo salió mal\n');
// Equivalente de más alto nivel:
console.error('Error: algo salió mal');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Métodos Frecuentes</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>process.cwd()</h3>
          </div>
          <p>Retorna el <strong>directorio de trabajo actual</strong> (Current Working Directory) desde donde se lanzó el proceso. No es necesariamente la carpeta donde vive el script.</p>
          <CodeBlock language="javascript" code="console.log(process.cwd());
// /Users/diego/project" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>process.exit() y process.exitCode</h3>
            <span class="badge danger">Uso Cuidado</span>
          </div>
          <p><code>process.exit(code)</code> finaliza el proceso de Node.js <strong>de forma inmediata</strong>: puede cortar escrituras pendientes y operaciones asíncronas. Por convención, <code>0</code> significa éxito y cualquier otro valor (normalmente <code>1</code>) indica error.</p>
          <p>Siempre que sea posible, es preferible asignar <code>process.exitCode</code> y dejar que el programa termine por sí solo cuando no quede trabajo pendiente.</p>
          <CodeBlock language="javascript" code="// Salida inmediata (puede perder trabajo pendiente)
if (!process.env.API_KEY) {
  console.error('Falta API_KEY');
  process.exit(1);
}

// Recomendado: marcar el código y dejar terminar con normalidad
process.exitCode = 1;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.memoryUsage()</h3>
          </div>
          <p>Retorna un objeto con el uso de memoria en <strong>bytes</strong>. Sus campos principales son <code>rss</code> (memoria total residente), <code>heapTotal</code> y <code>heapUsed</code> (heap de V8), <code>external</code> y <code>arrayBuffers</code>.</p>
          <CodeBlock language="javascript" code="const { rss, heapUsed } = process.memoryUsage();
console.log(`RSS: ${(rss / 1024 / 1024).toFixed(1)} MB`);
console.log(`Heap usado: ${(heapUsed / 1024 / 1024).toFixed(1)} MB`);

// Versión rápida que solo devuelve el RSS:
console.log(process.memoryUsage.rss());" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.uptime()</h3>
          </div>
          <p>Retorna el tiempo que lleva activo el proceso, en <strong>segundos</strong> (con decimales).</p>
          <CodeBlock language="javascript" code="console.log(process.uptime()); // 12.345" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.cpuUsage()</h3>
          </div>
          <p>Retorna el uso de CPU del proceso como <code>{ user, system }</code>, expresado en <strong>microsegundos</strong> (1 000 000 µs = 1 s). <code>user</code> es el tiempo ejecutando tu código y <code>system</code> el tiempo en llamadas al sistema operativo.</p>
          <CodeBlock language="javascript" code="const inicio = process.cpuUsage();
// ... trabajo intensivo ...
const uso = process.cpuUsage(inicio); // diferencia desde 'inicio'
console.log(`CPU usuario: ${uso.user / 1000} ms`);
console.log(`CPU sistema: ${uso.system / 1000} ms`);" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.hrtime.bigint()</h3>
            <span class="badge info">Alta precisión</span>
          </div>
          <p>Reloj monotónico de alta resolución, en <strong>nanosegundos</strong> (<code>BigInt</code>). Es la forma correcta de medir el tiempo de ejecución, porque no se ve afectado por cambios en la hora del sistema.</p>
          <CodeBlock language="javascript" code="const t0 = process.hrtime.bigint();
// ... operación a medir ...
const t1 = process.hrtime.bigint();
console.log(`Duración: ${Number(t1 - t0) / 1e6} ms`);" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.nextTick()</h3>
          </div>
          <p>Encola un callback para ejecutarlo <strong>justo después de la operación actual</strong>, antes de continuar con el Event Loop (incluso antes que las promesas ya resueltas). Úsalo con moderación: abusar de él puede bloquear la fase de I/O.</p>
          <CodeBlock language="javascript" code="console.log('1. Sincrónico');
process.nextTick(() => console.log('3. nextTick'));
Promise.resolve().then(() => console.log('4. Promesa'));
setTimeout(() => console.log('5. Timeout'), 0);
console.log('2. Sincrónico');" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.kill(pid, señal)</h3>
          </div>
          <p>Envía una señal a un proceso por su PID. Si no se indica la señal, se usa <code>'SIGTERM'</code>. Con <code>process.pid</code> puedes enviártela a ti mismo.</p>
          <CodeBlock language="javascript" code="// Pedir a otro proceso que termine ordenadamente
process.kill(12345, 'SIGTERM');

// Comprobar si un proceso existe (señal 0 no mata nada)
try {
  process.kill(12345, 0);
  console.log('El proceso existe');
} catch {
  console.log('El proceso no existe');
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.loadEnvFile()</h3>
            <span class="badge info">Node 20.12+ / 21.7+</span>
          </div>
          <p>Carga un archivo <code>.env</code> en <code>process.env</code> sin dependencias externas (por defecto lee <code>./.env</code>).</p>
          <CodeBlock language="javascript" code="process.loadEnvFile();            // ./.env
process.loadEnvFile('.env.local');  // ruta personalizada" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Eventos del Proceso</h2>
      <p class="section-desc">Podemos escuchar eventos del ciclo de vida del proceso para hacer limpieza, registrar fallos o apagar la aplicación de forma ordenada.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>'exit'</h3>
          </div>
          <p>Se dispara cuando el proceso <strong>va a terminar</strong>, ya sea por <code>process.exit()</code> o porque el Event Loop quedó vacío. El Event Loop ya no seguirá procesando trabajo, por lo que el listener solo admite <strong>código síncrono</strong>.</p>
          <CodeBlock language="javascript" code="process.on('exit', (code) => {
  console.log(`Cerrando con código: ${code}`);
  // Aquí NO funcionan setTimeout, promesas ni I/O asíncrono
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>'beforeExit'</h3>
          </div>
          <p>Se dispara cuando el Event Loop <strong>se queda vacío</strong> y no hay más trabajo pendiente. A diferencia de <code>'exit'</code>, aquí <strong>sí puedes agendar trabajo asíncrono</strong> y el proceso seguirá vivo. <strong>No se emite</strong> con <code>process.exit()</code> ni ante excepciones no capturadas.</p>
          <CodeBlock language="javascript" code="let reintentos = 0;

process.on('beforeExit', (code) => {
  console.log(`Event Loop vacío (código ${code})`);
  if (reintentos++ < 1) {
    setTimeout(() => console.log('Trabajo extra agendado'), 100);
  }
});" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>'uncaughtException'</h3>
            <span class="badge danger">Último recurso</span>
          </div>
          <p>Se dispara con errores que <strong>no fueron capturados</strong> por ningún <code>try/catch</code>. Tras una de estas excepciones el estado de la aplicación es incierto, y la documentación de Node indica que <strong>no es seguro seguir funcionando con normalidad</strong>. El patrón correcto es registrar el error, liberar lo imprescindible y <strong>terminar el proceso</strong> (idealmente para que un gestor como PM2, Docker o Kubernetes lo reinicie).</p>
          <CodeBlock language="javascript" code="process.on('uncaughtException', (err, origen) => {
  console.error('Excepción no capturada:', err, 'Origen:', origen);
  // No continuar: salir con código de error
  process.exit(1);
});" />
          <p>Evita usarlo para &quot;mantener viva&quot; la aplicación ignorando el error: oculta fallos y deja datos o conexiones en estados inconsistentes.</p>
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>'unhandledRejection'</h3>
            <span class="badge danger">Crítico</span>
          </div>
          <p>Se dispara cuando una <strong>promesa es rechazada</strong> y nadie la manejó con <code>.catch()</code> o <code>try/catch</code>. Desde Node 15, por defecto una promesa rechazada sin manejar <strong>termina el proceso</strong> con error. Escucharlo sirve para registrar el fallo, no para ignorarlo.</p>
          <CodeBlock language="javascript" code="process.on('unhandledRejection', (razon, promesa) => {
  console.error('Promesa rechazada sin manejar:', razon);
  process.exit(1);
});

// Esto dispara el evento (falta el .catch):
Promise.reject(new Error('Fallo en la base de datos'));" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>'warning'</h3>
          </div>
          <p>Se dispara cuando Node emite una <strong>advertencia</strong> del proceso (APIs obsoletas, posibles fugas de memoria, etc.).</p>
          <CodeBlock language="javascript" code="process.on('warning', (warning) => {
  console.warn(`${warning.name}: ${warning.message}`);
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>'SIGINT'</h3>
          </div>
          <p>Se dispara cuando el proceso recibe una señal de interrupción (<strong>Ctrl+C</strong> en la terminal).</p>
          <CodeBlock language="javascript" code="process.on('SIGINT', () => {
  console.log('Proceso interrumpido (Ctrl+C)');
  process.exit(0);
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>'SIGTERM'</h3>
          </div>
          <p>Señal de <strong>terminación</strong> estándar: es la que envían Docker, Kubernetes, PM2 o <code>kill</code> cuando quieren detener tu aplicación de forma ordenada.</p>
          <CodeBlock language="javascript" code="process.on('SIGTERM', () => {
  console.log('Terminación solicitada');
  process.exit(0);
});" />
        </div>
      </div><br><br>
      <div class="card warning">
        <div class="card-header">
          <h3>Señales en Windows</h3>
          <span class="badge danger">Compatibilidad</span>
        </div>
        <p>El soporte de señales en Windows es limitado. <code>SIGINT</code> funciona (Ctrl+C) y existe <code>SIGBREAK</code> (Ctrl+Pausa/Interrumpir), pero <code>SIGTERM</code> <strong>no se emite</strong> en Windows (se puede registrar un listener, pero no se dispara), y enviar <code>SIGTERM</code> o <code>SIGKILL</code> con <code>process.kill()</code> termina el proceso incondicionalmente sin ejecutar tus handlers. Si tu aplicación se despliega en Linux (Docker, Kubernetes), el apagado ordenado con <code>SIGTERM</code> sí funciona con normalidad.</p>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Apagado Ordenado (Graceful Shutdown)</h2>
      <p class="section-desc">Combinando señales con <code>server.close()</code> se evita cortar peticiones en curso al detener o redesplegar el servidor: primero se deja de aceptar conexiones nuevas, se esperan las activas y solo entonces se termina el proceso.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Patrón de apagado ordenado</h3>
          <span class="badge success">Producción</span>
        </div>
        <CodeBlock language="javascript" code="import http from 'node:http';

const server = http.createServer((req, res) => {
  res.end('Servidor activo');
});

server.listen(3000);

let cerrando = false;

function apagar(senal) {
  if (cerrando) return; // evitar ejecutar el cierre dos veces
  cerrando = true;
  console.log(`Recibida ${senal}. Cerrando servidor...`);

  // 1. Dejar de aceptar nuevas conexiones y esperar las activas
  server.close((err) => {
    if (err) {
      console.error('Error al cerrar:', err);
      process.exitCode = 1;
    }
    // 2. Aquí cerrarías BD, colas, etc. y el proceso termina solo
    console.log('Servidor cerrado');
  });

  // 3. Red de seguridad: forzar salida si tarda demasiado
  setTimeout(() => {
    console.error('Cierre forzado por tiempo agotado');
    process.exit(1);
  }, 10_000).unref(); // unref: este timer no mantiene el proceso vivo
}

process.on('SIGINT', () => apagar('SIGINT'));
process.on('SIGTERM', () => apagar('SIGTERM'));" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'envvars', text: 'Variables de Entorno' },
      { techId: 'nodejs', moduleId: 'http', text: 'Módulo HTTP (servidores y server.close)' },
      { techId: 'nodejs', moduleId: 'npm', text: 'NPM y scripts de ejecución' }
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
