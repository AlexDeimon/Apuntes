<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Metadatos e iconos</h1>
      <p class="subtitle">Información extra que describe tu página web y el icono que se muestra en la pestaña del navegador.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title">¿Qué es la etiqueta meta?</h2>
      <p class="section-desc">La etiqueta <code>&lt;meta&gt;</code> es una etiqueta HTML que se utiliza para proporcionar metadatos (datos sobre datos) sobre la página HTML. Estos metadatos se utilizan para describir el contenido de la página y proporcionar información adicional a los navegadores, motores de búsqueda y otros agentes de usuario. La etiqueta <code>&lt;meta&gt;</code> se coloca en el encabezado <code>&lt;head&gt;</code> de la página HTML.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Ejemplos de etiquetas meta y sus atributos</h3>
         </div>
         <ul class="def-list">
          <li><span class="def-term">&lt;title&gt;&lt;/title&gt;</span>: Especifica el título de la página.</li>
          <li><span class="def-term">&lt;meta charset="UTF-8"&gt;</span>: Especifica la codificación de caracteres de la página.</li>
          <li><span class="def-term">&lt;meta name="description" content="Descripción de la página"&gt;</span>: Proporciona una descripción de la página.</li>
          <li><span class="def-term">&lt;meta name="keywords" content="palabras clave"&gt;</span>: Proporciona palabras clave relevantes para la página.</li>
          <li><span class="def-term">&lt;meta name="author" content="Autor de la página"&gt;</span>: Especifica el autor de la página.</li>
          <li><span class="def-term">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</span>: Especifica la configuración de la vista móvil de la página.</li>
          <li><span class="def-term">&lt;meta name="theme-color" content="#000000"&gt;</span>: Especifica Color en formato hexadecimal de la barra de navegación del navegador.</li>
         </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Otras etiquetas importantes de configuración</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">&lt;link&gt;</span>: Especifica la relación entre el documento actual y un recurso externo, usualemte son archivos CSS y favicons.</li>
            <li><span class="def-term">&lt;script&gt;</span>: Especifica recursos de JavaScript, usualmente utilizados para agregar funcionalidades interactivas a la página web.</li>
            <li><span class="def-term">&lt;style&gt;</span>: Especifica estilos CSS internos, usualmente utilizados para agregar estilos a la página web.</li>
            <li><span class="def-term">&lt;html lang="es"&gt;</span>: Especifica el idioma de la página.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Ejemplo</h2>
      <p class="section-desc">Ejemplo completo de cómo se ven todas las etiquetas meta en el encabezado de una página HTML.</p>
      <CodeBlock language="html" code='<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página</title>
    <meta name="description" content="Descripción de la página">
    <meta name="keywords" content="palabras clave">
    <meta name="author" content="Autor de la página">
    <meta name="theme-color" content="#000000">
    <link rel="icon" href="favicon.ico">
    <style>
        body {
            background-color: #000;
        }
    </style>
</head>
<body>
    <h1>Contenido de la página</h1>
</body>
</html>' />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Iconos</h2>
      <p class="section-desc">Los iconos son imágenes pequeñas que se utilizan para representar visualmente información o acciones. En HTML, los iconos se utilizan para representar enlaces, botones, imágenes y otros elementos. Los iconos se pueden utilizar en una variedad de formatos, incluyendo PNG, SVG, JPG y GIF.</p>
      <ul>
        <li><a class="link-external" href="https://fontawesome.com/v5.15/icons?d=gallery&p=2">Font Awesome</a></li>
        <li><a class="link-external" href="https://www.iconfinder.com/">Iconfinder</a></li>
        <li><a class="link-external" href="https://www.flaticon.com/">Flaticon</a></li>
        <li><a class="link-external" href="https://thenounproject.com/">The Noun Project</a></li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
