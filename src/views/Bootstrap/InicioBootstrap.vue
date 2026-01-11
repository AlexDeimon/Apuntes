<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Iniciando con Bootstrap</h1>
      <p class="subtitle">El framework CSS más popular para desarrollar sitios web rápidos y responsivos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">¿Qué es Bootstrap?</h2>
      <p class="section-desc">Bootstrap es un conjunto de herramientas de código abierto para desarrollo web. Originalmente creado en Twitter, permite construir sitios responsivos de forma rápida utilizando clases predefinidas.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Versión Actual (v5.3.x)</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>La versión 5 es la más moderna. A diferencia de la v4, <strong>ya no depende de jQuery</strong>, utiliza JavaScript vainilla para sus componentes interactivos y ofrece soporte nativo para modo oscuro.</p>
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Versiones Anteriores (v4.x)</h3>
            <span class="badge danger">Legacy</span>
          </div>
          <p>Versiones antiguas (como la que usaba jQuery) siguen siendo mantenidas pero no se recomiendan para proyectos nuevos.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Instalación</h2>
      <p class="section-desc">Hay varias formas de incluir Bootstrap en un proyecto. Aquí están las más comunes:</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>1. CDN (Enlaces)</h3>
            <span class="badge success">Rápido</span>
          </div>
          <p>Ideal para prototipos o proyectos simples sin herramientas de construcción. Copia y pega esto en tu HTML.</p>
          <div>
            <p><strong>CSS (en el <code>&lt;head&gt;</code>):</strong></p>
            <CodeBlock language="html" code='<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">' />
            <p style="margin-top: 1rem;"><strong>JS (antes de cerrar <code>&lt;body&gt;</code>):</strong></p>
            <CodeBlock language="html" code='<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>' />
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>2. Gestor de Paquetes (NPM)</h3>
            <span class="badge info">Profesional</span>
          </div>
          <p>Recomendado para aplicaciones grandes (Vue, React, Angular). Permite importar solo lo necesario.</p>
          <CodeBlock language="bash" code='npm install bootstrap' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Starter Template</h2>
      <p class="section-desc">Esta es la estructura básica de un archivo HTML listo para trabajar con Bootstrap 5 vía CDN.</p>
      <CodeBlock language="html" code='<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Demo Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container py-5">
      <h1>¡Hola, mundo!</h1>
      <button class="btn btn-primary">Botón de Bootstrap</button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>' />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Componentes JavaScript</h2>
      <p class="section-desc">Muchos componentes de Bootstrap (Dropdowns, Modales, Tooltips) necesitan JavaScript para funcionar.</p>
      <div class="info-box">
        <h4>¿Qué es Popper?</h4>
        <p>Es una librería de posicionamiento que Bootstrap usa para desplegables y tooltips. Al usar la versión <strong>bootstrap.bundle.min.js</strong> (como en el ejemplo de arriba), Popper ya viene incluido.</p>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
