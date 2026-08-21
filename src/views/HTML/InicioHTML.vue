<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Introducción a HTML</h1>
      <p class="subtitle">El lenguaje de marcado estándar para la Web</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">¿Qué es HTML?</h2>
      <p class="section-desc"><strong>HTML</strong> no es un lenguaje de programación, sino un lenguaje de marcado que define la estructura del contenido de una página web.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Estructura (Esqueleto)</h3>
          </div>
          <p>HTML consiste en una serie de elementos usados para encerrar, o envolver, diferentes partes del contenido para que se vean o se comporten de una determinada manera.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>DOM</h3>
          </div>
          <p>El navegador lee el HTML y crea un Modelo de Objetos del Documento (DOM), una estructura de árbol que representa la página.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Estructura Básica de un Documento</h2>
      <p class="section-desc">Todo archivo HTML5 válido debe seguir la siguiente estructura mínima.</p>
      <div class="card info">
        <div class="card-header">
          <h3>index.html</h3>
        </div>
        <div>
          <ul class="def-list">
            <li><strong class="def-term">&lt;!DOCTYPE html&gt;</strong>: Informa al navegador que es un documento HTML5 moderno.</li>
            <li><strong class="def-term">&lt;html&gt;</strong>: El elemento raíz que envuelve todo el contenido.</li>
            <li><strong class="def-term">&lt;head&gt;</strong>: Contenedor de "metadatos" (cosas que no se ven en la página: título, estilos, scripts).</li>
            <li><strong class="def-term">&lt;body&gt;</strong>: Contiene todo el contenido visible para el usuario (texto, imágenes, videos).</li>
            <li><strong class="def-term">&lt;!-- comentario --&gt;</strong>: Se utiliza para agregar comentarios al código HTML. No se muestra en la página.</li>
          </ul>
        </div>
        <CodeBlock language="html" code='<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi Primera Página</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <p>Este es el contenido visible.</p>
  </body>
  <!-- Este es un comentario -->
</html>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Etiquetas y Atributos</h2>
      <p class="section-desc">HTML utiliza etiquetas para crear elementos. La mayoría tiene una etiqueta de apertura y una de cierre.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Anatomía de un Elemento</h3>
          <p>Un elemento se compone principalmente de:</p>
          <ul class="def-list">
            <li><strong class="def-term">Etiqueta de apertura</strong>: <code>&lt;p&gt;</code></li>
            <li><strong class="def-term">Atributo</strong>: <code>class="texto-rojo"</code> (Información extra)</li>
            <li><strong class="def-term">Contenido</strong>: "Hola Mundo"</li>
            <li><strong class="def-term">Etiqueta de cierre</strong>: <code>&lt;/p&gt;</code></li>
          </ul>
          <CodeBlock language="html" code='<p class="texto-rojo">Hola Mundo</p>' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Elementos Vacíos</h3>
            <span class="badge danger">Sin Cierre</span>
          </div>
          <p>Algunos elementos no pueden tener contenido y no llevan etiqueta de cierre (ej. imágenes, saltos de línea).</p>
          <CodeBlock language="html" code='<img src="foto.jpg" alt="Foto">
<br>
<hr>
<input type="text">' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Atributos globales</h3>
          </div>
          <p>Todos los elementos HTML pueden tener atributos globales. Algunos de los más comunes son:</p>
          <ul class="def-list">
            <li><strong class="def-term">class</strong>: Clase CSS.</li>
            <li><strong class="def-term">id</strong>: Identificador único.</li>
            <li><strong class="def-term">style</strong>: Estilos CSS en línea.</li>
            <li><strong class="def-term">title</strong>: Título del elemento.</li>
            <li><strong class="def-term">hidden</strong>: Oculta el elemento.</li>
            <li><strong class="def-term">tabindex</strong>: Orden de tabulación.</li>
            <li><strong class="def-term">data-*</strong>: Datos personalizados. Se usan para guardar datos que no se ven en la página, pero se pueden usar con JavaScript</li>
          </ul>
          <CodeBlock language="html" code='<div class="info-box" id="box1" style="color: red;" data-role="info" title="Informacion">Info</div>' />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
