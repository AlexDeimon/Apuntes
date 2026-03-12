<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Objeto Process</h1>
      <p class="subtitle">Interacción con el entorno de ejecución y el sistema operativo.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es Process?</h2>
      <p class="section-desc"><code>process</code> es un objeto <strong>global</strong> de Node.js que proporciona información y control sobre el proceso actual de ejecución. Al ser global, no requiere ser importado con <code>require</code> o <code>import</code>.</p>
      <div class="info-box">
        <p>Es fundamental para leer variables de entorno, argumentos de la terminal y gestionar el ciclo de vida de la aplicación.</p>
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
          <p>Contiene las <strong>variables de entorno</strong> del usuario. Es esencial para manejar secretos (API Keys), puertos y bases de datos sin exponerlas en el código.</p>
          <CodeBlock language="javascript" code="const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.argv</h3>
          </div>
          <p>Un array que contiene los <strong>argumentos</strong> pasados por la línea de comandos al ejecutar el script.</p>
          <p>El primer elemento es el ejecutable de Node.js, el segundo elemento es el archivo JavaScript que se está ejecutando, y los elementos restantes son los argumentos pasados al script.</p>
          <CodeBlock language="javascript" code="console.log(process.argv);
// [ 'C:\Program Files\nodejs\node.exe', 'C:\Apuntes\src\views\Node\ProcessNode.vue']" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.platform</h3>
          </div>
          <p>Indica el sistema operativo en el que se está ejecutando Node.js (win32, linux, darwin).</p>
          <CodeBlock language="javascript" code="if (process.platform === 'win32') {
  console.log('Ejecutando en Windows');
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.pid</h3>
          </div>
          <p>Retorna el <strong>ID del proceso</strong> actual.</p>
          <CodeBlock language="javascript" code="console.log(process.pid);" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.version</h3>
          </div>
          <p>Retorna la <strong>versión de Node.js</strong> en uso.</p>
          <CodeBlock language="javascript" code="console.log(process.version);" />
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
          <p>Retorna el <strong>directorio de trabajo actual</strong> (Current Working Directory) desde donde se lanzó el proceso.</p>
          <CodeBlock language="javascript" code="console.log(process.cwd());
// /Users/diego/project" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>process.exit()</h3>
            <span class="badge danger">Uso Cuidado</span>
          </div>
          <p>Finaliza el proceso de Node.js de forma inmediata. Se puede pasar un código (0 para éxito, 1 para error).</p>
          <CodeBlock language="javascript" code="if (err) {
  process.exit(1);
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.memoryUsage()</h3>
          </div>
          <p>Retorna un objeto con el uso de memoria en bytes. Útil para optimización.</p>
          <CodeBlock language="javascript" code="console.log(process.memoryUsage());" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.uptime()</h3>
          </div>
          <p>Retorna el tiempo de actividad del proceso en segundos.</p>
          <CodeBlock language="javascript" code="console.log(process.uptime());" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.cpuUsage()</h3>
          </div>
          <p>Retorna el uso de CPU en ticks de CPU.</p>
          <CodeBlock language="javascript" code="console.log(process.cpuUsage());" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.stdin()</h3>
          </div>
          <p>Proporciona acceso al <strong>flujo de entrada estándar</strong> (STDIN) del proceso.</p>
          <CodeBlock language="javascript" code="process.stdin.on('data', (data) => {
  console.log(data.toString());
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>process.stdout()</h3>
          </div>
          <p>Proporciona acceso al <strong>flujo de salida estándar</strong> (STDOUT) del proceso.</p>
          <CodeBlock language="javascript" code="process.stdout.write('Hola, mundo!\n');" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>process.stderr()</h3>
          </div>
          <p>Proporciona acceso al <strong>flujo de salida de error</strong> (STDERR) del proceso.</p>
          <CodeBlock language="javascript" code="process.stderr.write('Error: algo salió mal\n');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Eventos del Proceso</h2>
      <p class="section-desc">Podemos escuchar eventos específicos para realizar limpieza o manejar errores inesperados.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>'exit'</h3>
          </div>
          <p>Se dispara cuando el proceso está a punto de terminar. Solo admite código sincrónico.</p>
          <CodeBlock language="javascript" code="process.on('exit', (code) => {
  console.log(`Cerrando con código: ${code}`);
});" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>'uncaughtException'</h3>
            <span class="badge danger">Global</span>
          </div>
          <p>Captura errores que no fueron manejados por un bloque try/catch. Evita que la app se caiga sin loguear.</p>
          <CodeBlock language="javascript" code="process.on('uncaughtException', (err) => {
  console.error('¡Ups! Algo falló:', err);
});" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>'warning'</h3>
          </div>
          <p>Se dispara cuando el proceso recibe una advertencia.</p>
          <CodeBlock language="javascript" code="process.on('warning', (warning) => {
  console.warn('¡Cuidado! Algo anda mal:', warning);
});" />
        </div>
         <div class="card info">
          <div class="card-header">
            <h3>'beforeExit'</h3>
          </div>
          <p>Se dispara cuando el proceso está a punto de terminar. Se ejecuta antes del evento 'exit'.</p>
          <CodeBlock language="javascript" code="process.on('beforeExit', (code) => {
  console.log(`Antes de cerrar con código: ${code}`);
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>'SIGINT'</h3>
          </div>
          <p>Se dispara cuando el proceso recibe una señal de interrupción (Ctrl+C).</p>
          <CodeBlock language="javascript" code="process.on('SIGINT', () => {
  console.log('Proceso interrumpido');
  process.exit(0);
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>'SIGTERM'</h3>
          </div>
          <p>Se dispara cuando el proceso recibe una señal de terminación.</p>
          <CodeBlock language="javascript" code="process.on('SIGTERM', () => {
  console.log('Proceso terminado');
  process.exit(0);
});" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
