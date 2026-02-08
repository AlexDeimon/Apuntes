<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Secciones de Contenido</h1>
      <p class="subtitle">Organizando la estructura semántica de la web</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">HTML Semántico</h2>
      <p class="section-desc">HTML5 introdujo etiquetas con significado semántico para definir las diferentes partes de una página web, en lugar de usar solo <code>&lt;div&gt;</code> genéricos.</p>
    </section>
    <section class="topic-section">
      <h2 class="section-title html">Estructura Principal</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>&lt;header&gt;</h3>
            <span class="badge info">Cabecera</span>
          </div>
          <p>Representa la cabecera de la página o de una sección. Suele contener el logo, título principal y navegación.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>&lt;main&gt;</h3>
            <span class="badge info">Único</span>
          </div>
          <p>Contiene el contenido principal y único del documento. <strong>Solo debe haber uno por página</strong>.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>&lt;footer&gt;</h3>
            <span class="badge info">Pie</span>
          </div>
          <p>El pie de página. Suele contener copyright, enlaces legales y datos de contacto.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>&lt;nav&gt;</h3>
            <span class="badge info">Navegación</span>
          </div>
          <p>Sección destinada a enlaces de navegación (menú principal, índice, etc).</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Agrupación de Contenido</h2>
      <p class="section-desc">Cómo organizar el contenido dentro del <code>&lt;main&gt;</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>&lt;article&gt;</h3>
            <span class="badge info">Independiente</span>
          </div>
          <p>Contenido que tiene sentido por sí mismo y podría distribuirse independientemente (ej: una noticia, un post de blog, un tweet).</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>&lt;section&gt;</h3>
            <span class="badge info">Relacionado</span>
          </div>
          <p>Un contenedor genérico para agrupar contenido temáticamente relacionado. Idealmente debe tener un título (h2-h6).</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>&lt;aside&gt;</h3>
            <span class="badge info">Lateral</span>
          </div>
          <p>Contenido relacionado indirectamente con el principal (barras laterales, publicidad, "ver también").</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Ejemplo Visual</h2>
      <p class="section-desc">Representación visual de cómo se estructuran estas etiquetas.</p>
      <div class="preview-container">
        <div class="preview-header">Vista Previa (Layout Semántico)</div>
        <div class="layout-demo">
          <header class="demo-header">
            <span class="tag">&lt;header&gt;</span>
            <h1>Logo / Título</h1>
            <nav class="demo-nav"><span class="tag">&lt;nav&gt;</span>Inicio | Noticias | Contacto</nav>
          </header>
          <div class="demo-body">
            <main class="demo-main">
              <span class="tag">&lt;main&gt;</span>
              <section class="demo-section">
                <span class="tag">&lt;section&gt;</span>
                <h2>Noticias Nacionales</h2>
                <article class="demo-article">
                  <span class="tag">&lt;article&gt;</span>
                  <h3>Noticia 1</h3>
                  <p>Descripción de la noticia 1...</p>
                </article>
                <article class="demo-article">
                  <span class="tag">&lt;article&gt;</span>
                  <h3>Noticia 2</h3>
                  <p>Descripción de la noticia 2...</p>
                </article>
              </section>
              <section class="demo-section">
                <span class="tag">&lt;section&gt;</span>
                <h2>Noticias Internacionales</h2>
                <article class="demo-article">
                  <span class="tag">&lt;article&gt;</span>
                  <h3>Noticia 3</h3>
                  <p>Descripción de la noticia 3...</p>
                </article>
                <article class="demo-article">
                  <span class="tag">&lt;article&gt;</span>
                  <h3>Noticia 4</h3>
                  <p>Descripción de la noticia 4...</p>
                </article>
              </section>
            </main>
            <aside class="demo-aside">
              <span class="tag">&lt;aside&gt;</span>
              <h3>Publicidad</h3>
              <p>Descripción de la publicidad...</p>
            </aside>
          </div>
          <footer class="demo-footer">
            <span class="tag">&lt;footer&gt;</span>
            <p>Descripción del pie de página...</p>
          </footer>
        </div>
      </div>
      <div class="cards-grid">
        <div>
        <CodeBlock language="html" code='<body>
  <header>
    <nav>Links de navegación...</nav>
    <h1>Noticias Internacionales</h1>
  </header>

  <div class="container">
    <main>
      <section>
        <h2>Noticias Nacionales</h2>

        <article>
          <h3>Noticia 1</h3>
          <p>Descripción de la noticia 1...</p>
        </article>

        <article>
          <h3>Noticia 2</h3>
          <p>Descripción de la noticia 2...</p>
        </article>
      </section>
      <section>
        <h2>Noticias Internacionales</h2>

        <article>
          <h3>Noticia 3</h3>
          <p>Descripción de la noticia 3...</p>
        </article>

        <article>
          <h3>Noticia 4</h3>
          <p>Descripción de la noticia 4...</p>
        </article>
      </section>
    </main>

    <aside>
      <h3>Publicidad</h3>
      <p>Descripción de la publicidad...</p>
    </aside>
  </div>

  <footer>
    <p>Descripción del pie de página...</p>
  </footer>
</body>' />
        </div>
        <div>
          <CodeBlock language="css" code='header,
footer,
main,
section,
aside,
article,
nav {
  position: relative;
  padding: 25px 15px 15px;
  border-radius: 4px;
  border: 2px dashed #444;
}

header {
  background: #2a2a35;
  border-color: #555;
}

nav {
  background: #1f2633;
  margin-bottom: 10px;
  border-color: #448cff;
}

body {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

main {
  flex: 2;
  background: #252526;
  border-color: #42b883;
  min-width: 250px;
}

section {
  background: #252526;
  border-color: #4279b8;
  min-width: 250px;
}

aside {
  flex: 1;
  background: #2a2a2a;
  border-color: #e6a23c;
  min-width: 150px;
}

article {
  background: #1e1e1e;
  margin-top: 10px;
  border-color: #ff4747;
  padding: 30px 10px 10px;
}

footer {
  background: #2a2a35;
  border-color: #555;
  text-align: center;
}' />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
.layout-demo {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: sans-serif;
}

.tag {
  background: #ff4747;
  color: white;
  font-size: 0.7rem;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: monospace;
  position: absolute;
  top: 5px;
  left: 5px;
  opacity: 0.9;
}

.demo-header,
.demo-footer,
.demo-main,
.demo-section,
.demo-aside,
.demo-article,
.demo-nav {
  position: relative;
  padding: 25px 15px 15px;
  border-radius: 4px;
  border: 2px dashed #444;
}

.demo-header {
  background: #2a2a35;
  border-color: #555;
}

.demo-nav {
  background: #1f2633;
  margin-bottom: 10px;
  border-color: #448cff;
}

.demo-body {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.demo-main {
  flex: 2;
  background: #252526;
  border-color: #42b883;
  min-width: 250px;
}

.demo-section {
  background: #252526;
  border-color: #4279b8;
  min-width: 250px;
}

.demo-aside {
  flex: 1;
  background: #2a2a2a;
  border-color: #e6a23c;
  min-width: 150px;
}

.demo-article {
  background: #1e1e1e;
  margin-top: 10px;
  border-color: #ff4747;
  padding: 30px 10px 10px;
}

.demo-footer {
  background: #2a2a35;
  border-color: #555;
  text-align: center;
}
</style>
