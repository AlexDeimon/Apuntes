<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Variables de Entorno</h1>
      <p class="subtitle">Configuración dinámica y segura para diferentes entornos de ejecución.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué son?</h2>
      <p class="section-desc">Son valores externos a la aplicación que permiten configurar su comportamiento sin modificar el código fuente. Se usan para datos sensibles (keys api, passwords) o variables que cambian según el entorno (producción vs desarrollo).</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Acceso Nativo</h3>
          </div>
          <p>En Node.js, todas las variables de entorno están disponibles en el objeto global <code>process.env</code>.</p>
          <CodeBlock language="javascript" code="// Acceder al puerto definido externamente
const port = process.env.PORT || 3000;
console.log(`Iniciando en el puerto: ${port}`);" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>NODE_ENV</h3>
          </div>
          <p>Es la variable estándar para identificar el entorno. Valores comunes: <code>development</code>, <code>production</code>, <code>test</code>.</p>
          <CodeBlock language="javascript" code='if (process.env.NODE_ENV === "production") {
  console.log("Corriendo en modo producción");
}' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Gestión con Archivos .env</h2>
      <p class="section-desc">Para desarrollo local, solemos guardar las variables en un archivo de texto llamado <code>.env</code>.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Estructura del archivo .env</h3>
        </div>
        <CodeBlock language="bash" code="PORT=8080
API_KEY=xyz123_abc456
DB_HOST=localhost" />
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Opción 1: Dotenv (Classic)</h3>
            <span class="badge info">Paquete NPM</span>
          </div>
          <p>La forma tradicional usando una dependencia externa.</p>
          <CodeBlock language="javascript" code="import 'dotenv/config';
// O bien:
require('dotenv').config();" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Opción 2: Nativa (Modern)</h3>
            <span class="badge success">Node 20.6+</span>
          </div>
          <p>Node ahora puede leer archivos <code>.env</code> sin paquetes externos usando una flag al ejecutar.</p>
          <CodeBlock language="bash" code="node --env-file=.env app.js" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Seguridad y Buenas Prácticas</h2>
      <div class="card warning">
        <div class="card-header">
          <h3>¡No subas tus secretos!</h3>
          <span class="badge danger">CRÍTICO</span>
        </div>
        <p>El archivo <code>.env</code> <strong>NUNCA</strong> debe subirse a repositorios públicos como GitHub. Asegúrate de añadirlo a tu <code>.gitignore</code>.</p>
        <CodeBlock language="bash" code="# .gitignore
.env
node_modules/" />
      </div>
      <p>Es recomendable crear un archivo <code>.env.example</code> con las claves pero sin los valores reales para que otros desarrolladores sepan qué variables necesita el proyecto.</p>
    </section>
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'process', text: 'Objeto Process' },
      { techId: 'nodejs', moduleId: 'npm', text: 'Gestión con NPM' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
