<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">NPM</h1>
      <p class="subtitle">Gestor de paquetes oficial para Node.js y el ecosistema JavaScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es NPM?</h2>
      <p class="section-desc"><strong>npm</strong> (Node Package Manager) es el registro de software más grande del mundo. Permite a los desarrolladores compartir y reutilizar código, además de gestionar las dependencias de sus proyectos de forma eficiente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Instalación</h3>
          </div>
          <p>NPM viene preinstalado con Node.js. Puedes verificar su versión en la terminal:</p>
          <CodeBlock language="bash" code="npm -v" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Registro Central</h3>
          </div>
          <p>Aloja millones de paquetes listos para usar en tus aplicaciones.</p>
          <a href="https://www.npmjs.com/" target="_blank" class="link-external">Explorar paquetes →</a>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Comandos Esenciales</h2>
      <p class="section-desc">NPM se maneja principalmente a través de la interfaz de línea de comandos (CLI).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>npm init</h3>
          </div>
          <p>Inicializa un nuevo proyecto creando el archivo <code>package.json</code>.</p>
          <CodeBlock language="bash" code="npm init # Paso a paso
npm init -y # Configuración rápida" />
        </div>

        <div class="card info">
          <div class="card-header">
            <h3>npm install</h3>
          </div>
          <p>Descarga un paquete a la carpeta <code>node_modules</code>.</p>
          <CodeBlock language="bash" code="npm i <paquete> # Alias corto de install
npm i <paquete> -D # Como dependencia de desarrollo" />
        </div>

        <div class="card recommended">
          <div class="card-header">
            <h3>npx</h3>
            <span class="badge success">Moderno</span>
          </div>
          <p>Ejecuta paquetes sin necesidad de instalarlos globalmente.</p>
          <CodeBlock language="bash" code="npx create-vite@latest" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">El archivo package.json</h2>
      <p class="section-desc">Es el manifiesto del proyecto, donde se definen metadatos, dependencias y scripts.</p>
      <div class="card info">
        <div class="card-header">
          <h3>Estructura Ejemplo</h3>
        </div>
        <CodeBlock language="json" code='{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Scripts Personalizados</h2>
      <p class="section-desc">Automatiza tareas comunes como iniciar el servidor, correr tests o compilar el código.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Ejecución de Scripts</h3>
          </div>
          <p>Usa <code>npm run</code> seguido del nombre del script definido en el <code>package.json</code>.</p>
          <CodeBlock language="bash" code="npm run dev
npm start # Shorthand especial para 'start'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Scripts de Entorno</h3>
          </div>
          <p>Puedes pasar variables de entorno directamente en el script.</p>
          <CodeBlock language="json" code='"scripts": {
  "prod": "NODE_ENV=production node app.js"
}' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Nodemon</h3>
          </div>
          <p>Es una herramienta que permite reiniciar el servidor automáticamente cuando detecta cambios en el código.</p>
          <CodeBlock language="bash" code="npm i nodemon -D" />
          <CodeBlock language="json" code='"scripts": {
  "dev": "nodemon index.js"
}' />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'inicio', text: '¿Qué es Node.js?' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
