<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">¿Qué es Node.js?</h1>
      <p class="subtitle">Entorno de ejecución de JavaScript para el lado del servidor.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">Definición y características</h2>
      <p class="section-desc">Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Permite ejecutar JavaScript fuera del navegador, principalmente para construir aplicaciones de servidor rápidas y escalables.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Servidor HTTP</h3>
          </div>
          <p>Node.js permite crear servidores HTTP para manejar peticiones y respuestas. Esto es útil para construir aplicaciones web y APIs.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Entrada/salida asincrona</h3>
          </div>
          <p>Puede manejar múltiples solicitudes de entrada/salida simultáneamente sin bloquear el hilo principal de ejecución. Esto es fundamental para aplicaciones web que necesitan manejar muchas conexiones concurrentes.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Single Threaded</h3>
          </div>
          <p>Aunque funciona en un solo hilo, puede manejar miles de conexiones simultáneas gracias a su Event Loop.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Instalación y Herramientas</h2>
      <p class="section-desc">Hay varias formas de instalar Node.js, se puede descargar el instalador oficial o usar un manejador de versiones.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Descarga Directa</h3>
          <p>Visita el sitio oficial y descarga la versión <strong>LTS</strong> (Long Term Support) para mayor estabilidad.</p>
          <a href="https://nodejs.org/en" target="_blank" class="button-link">Sitio Oficial</a>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>NVM (Manejador de Versiones)</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>Permite tener múltiples versiones de Node.js instaladas y cambiar entre ellas fácilmente.</p>
          <CodeBlock language="bash" code="nvm install node # Instala la última versión
nvm use 20.0.0 # Cambia a una versión específica" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>NPM (Node Package Manager)</h3>
            <span class="badge info">Standard</span>
          </div>
          <p>Es el gestor de paquetes por defecto de Node.js, permitiendo instalar y compartir bibliotecas de código.</p>
          <CodeBlock language="bash" code="npm install <package-name> # Instala una dependencia" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Módulos en Node.js</h2>
      <p class="section-desc">Node.js utiliza un sistema de módulos para separar el código en bloques reutilizables.</p>
      <p class="section-desc">Un módulo contiene funciones, objetos, variables donde se indica cuales serán exportados para ser utilizados por otros programas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>CommonJS (CJS)</h3>
            <span class="badge info">Tradicional</span>
          </div>
          <p>Es el sistema de módulos original de Node.js. Utiliza <code>require()</code> y <code>module.exports</code>.</p>
          <ul class="def-list">
            <li><span class="def-term">require():</span> Función para cargar y utilizar las funcionalidades exportadas por un módulo, ya sea nativos, creados por el usuario y módulos instalados desde npm.</li>
            <li><span class="def-term">module.exports:</span> Objeto para determinar qué se exporta desde un archivo de módulo cuando se requiere en otro archivo.</li>
          </ul>
          <CodeBlock language="javascript" code="// math.js
function sumar(a, b) {
  return a + b;
}
module.exports = sumar;

// app.js
const sumar = require('./math');
console.log(sumar(2, 3));" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>ES Modules (ESM)</h3>
            <span class="badge success">Moderno</span>
          </div>
          <p>El estándar oficial de JavaScript. Utiliza <code>import</code> y <code>export</code>.</p>
          <ul class="def-list">
            <li><span class="def-term">export:</span> Mediante la palabra clave export se crea lo que se llama un módulo de exportación que contiene datos. Estos datos pueden ser variables, funciones, clases u objetos más complejos.</li>
            <li><span class="def-term">import:</span> Con la palabra clave import se pueden leer dichos módulos exportados desde otros archivos y utilizar sus elementos en el código del archivo actual.</li>
          </ul>
          <CodeBlock language="javascript" code="// math.js
export function sumar(a, b) {
  return a + b;
}

// app.js
import { sumar } from './math.js';
console.log(sumar(2, 3));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Primer Servidor</h2>
      <p class="section-desc">Ejemplo básico de un servidor HTTP usando el módulo nativo de Node.js.</p>
      <div class="card">
        <CodeBlock language="javascript" code="const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo desde Node.js');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/');
});" />
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JavaScript' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
