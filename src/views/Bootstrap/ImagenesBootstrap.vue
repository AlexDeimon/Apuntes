<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Imágenes</h1>
      <p class="subtitle">Clases utilitarias para hacer imágenes responsivas y estilizarlas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Imágenes Responsivas</h2>
      <p class="section-desc">En Bootstrap 5, las imágenes se hacen responsivas con la clase <code>.img-fluid</code>. Esto aplica <code>max-width: 100%;</code> y <code>height: auto;</code> al elemento, permitiendo que escale con su contenedor padre sin desbordarse.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>.img-fluid</h3>
          </div>
          <p>Asegura que la imagen nunca sea más ancha que su contenedor.</p>
          <CodeBlock language="html" code='<img src="..." class="img-fluid" alt="Imagen responsiva">' />
          <div class="demo-box">
            <div>
              <img :src="demoImage" class="img-fluid" alt="Imagen responsive">
            </div>
            <small class="text-muted">Contenedor limitado a 300px</small>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estilos y Bordes</h2>
      <p class="section-desc">Clases rápidas para dar un aspecto pulido a las imágenes.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Thumbnail</h3>
          </div>
          <p><code>.img-thumbnail</code> añade un borde redondeado de 1px y un poco de relleno ,dando apariencia de fotografía impresa.</p>
          <CodeBlock language="html" code='<img src="..." class="img-thumbnail" alt="Miniatura">' />
          <div class="demo-box">
            <img :src="demoImage" class="img-thumbnail" alt="Thumbnail">
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Bordes Redondeados</h3>
          </div>
          <p>Utilidades genéricas de Bootstrap que funcionan en imágenes:</p>
          <ul class="def-list">
            <li><span class="def-term">.rounded</span>: Bordes ligeramente redondeados.</li>
            <li><span class="def-term">.rounded-circle</span>: Convierte una imagen cuadrada en un círculo perfecto.</li>
            <li><span class="def-term">.rounded-pill</span>: Bordes completamente redondeados en los lados.</li>
          </ul>
          <CodeBlock language="html" code='<img src="..." class="rounded" alt="...">
<img src="..." class="rounded-circle" alt="circle">
<img src="..." class="rounded-pill" alt="pill">' />
          <div class="demo-box d-flex text-center">
            <div>
              <img :src="demoImage" class="rounded img-box" alt="Rounded">
              <small class="d-block">.rounded</small>
            </div>
            <div>
              <img :src="demoImage" class="rounded-circle img-box" alt="Circle">
              <small class="d-block">.rounded-circle</small>
            </div>
            <div>
              <img :src="demoImage" class="rounded-pill img-box-2" alt="Pill">
              <small class="d-block">.rounded-pill</small>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Alineación</h2>
      <p class="section-desc">Cómo posicionar imágenes dentro de su contenedor.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Flotantes (Float)</h3>
          <p>Usa las utilidades de float para alinear a izquierda o derecha.</p>
          <CodeBlock language="html" code='<img src="..." class="float-start" alt="Alineada a la izquierda">
<img src="..." class="float-end" alt="Alineada a la derecha">' />
          <div class="demo-box">
            <img :src="demoImage" class="float-start img-box" alt="Start">
            <p>Texto que fluye alrededor de las imágenes flotantes. En este ejemplo se utiliza <code>float-start</code>.</p>
          </div>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Centrado (Bloque)</h3>
            <span class="badge success">Común</span>
          </div>
          <p>Las imágenes son elementos <code>inline</code> por defecto. Para centrarlas con márgenes automáticos, primero se deben convertir a bloque con la clase <code>.d-block</code> y luego aplicar los márgenes automáticos con la clase <code>.mx-auto</code>.</p>
          <CodeBlock language="html" code='<img src="..." class="d-block mx-auto" alt="Centrada">' />
        </div>
        <div class="card info">
          <h3>Centrado (Texto)</h3>
          <p>Alternativamente, se puede centrar la imagen alineando el texto del contenedor padre con la clase <code>.text-center</code>.</p>
          <CodeBlock language="html" code='<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Figures</h2>
      <p class="section-desc">Usa el componente <code>&lt;figure&gt;</code> para mostrar imágenes con pie de foto de forma semántica.</p>
      <CodeBlock language="html" code='<figure class="figure">
  <img src="..." class="figure-img img-fluid" alt="...">
  <figcaption class="figure-caption">Un pie de foto para la imagen anterior.</figcaption>
</figure>' />
      <div class="demo-box">
        <figure class="figure">
          <img :src="demoImage" class="figure-img img-fluid" style="width: 200px;" alt="...">
          <figcaption class="figure-caption">Imagen de demostración.</figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import demoImage from '@/assets/images/portada.webp'
</script>
<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.img-box{
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.img-box-2{
  width: 100px;
  object-fit: cover;
}

.rounded {
  border-radius: 0.375rem;
}

.rounded-circle {
  border-radius: 50%;
}

.rounded-pill {
  border-radius: 50rem;
}

.float-start {
  float: left;
}

.d-block {
  display: block;
}

.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.text-center {
  text-align: center;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #a0a0a0;
}

.demo-box div {
  width: 300px;
}
</style>
