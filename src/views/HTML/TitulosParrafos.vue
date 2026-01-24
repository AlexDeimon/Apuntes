<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Títulos y Párrafos</h1>
      <p class="subtitle">La estructura fundamental del contenido web</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title">Encabezados</h2>
      <p class="section-desc">HTML ofrece 6 niveles de títulos, desde <code>&lt;h1&gt;</code> hasta
        <code>&lt;h6&gt;</code>. Son fundamentales para la jerarquía del documento y el SEO.
      </p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>Jerarquía y Uso</h3>
          </div>
          <ul class="hierarchy-list">
            <li><strong class="tag">&lt;h1&gt;</strong>: Título principal (Solo uno por página).</li>
            <li><strong class="tag">&lt;h2&gt;</strong>: Títulos de secciones principales.</li>
            <li><strong class="tag">&lt;h3&gt;</strong>: Subtítulos dentro de las secciones.</li>
            <li><strong class="tag">&lt;h4&gt; - &lt;h6&gt;</strong>: Sub-niveles de menor importancia.</li>
          </ul>
        </div>
        <CodeBlock language="html" code='<h1>Título Principal</h1>
<h2>Sección Importante</h2>
<h3>Sub-sección</h3>
<h4>Título nivel 4</h4>
<h5>Título nivel 5</h5>
<h6>Título nivel 6</h6>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Párrafos</h2>
      <p class="section-desc">La etiqueta <code>&lt;p&gt;</code> define un párrafo. Los navegadores añaden
        automáticamente un margen antes y después de cada párrafo. Son elementos de bloque, lo que significa que siempre empiezan en una nueva línea y ocupan todo el ancho disponible.</p>
      <CodeBlock language="html" code='<p>Este es un párrafo de texto estándar.</p>
<p>Este es otro párrafo que aparecerá debajo del primero.</p>' />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Ejemplo</h2>
      <p class="section-desc">Estructura real de un artículo usando la jerarquía correcta.</p>
      <div class="preview-container">
        <div class="preview-header">Vista Previa</div>
        <div class="preview-content">
          <h1 class="preview-h1">Harry Potter</h1>
          <h2 class="preview-h2">Sinopsis</h2>
          <p>Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que
            se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione
            Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.</p>
          <p>El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien asesinó a los
            padres de Harry en su afán de conquistar el mundo mágico.</p>
          <h2 class="preview-h2">Novelas</h2>
          <h3 class="preview-h3">Harry Potter y la Piedra Filosofal</h3>
          <p>Harry Potter y la piedra filosofal (Harry Potter and the Philosopher's Stone) es el primer libro de la
            serie, fue publicado en Reino Unido el 26 de junio de 1997 y en español en marzo de 1999.</p>
          <p>Se trata de uno de los libros más vendidos de la historia, las estimaciones de sus ventas mundiales superan
            los 110 millones de copias.</p>
          <h4 class="preview-h4">Personajes Principales</h4>
          <p>Harry Potter, Ron Weasley & Hermione Granger</p>
        </div>
      </div>
      <div class="cards-grid">
        <div>
          <CodeBlock language="html" code='<h1>Harry Potter</h1>

<h2>Sinopsis</h2>
<p>Harry Potter es una serie de novelas fantásticas...</p>

<h2>Novelas</h2>
<h3>Harry Potter y la Piedra Filosofal</h3>
<p>Es el primer libro de la serie...</p>

<h4>Personajes Principales</h4>
<p>Harry Potter, Ron Weasley & Hermione Granger</p>' />
        </div>
        <div>
          <CodeBlock language="css" code='h1 {
  color: #fff;
  font-size: 2.5rem;
  margin-top: 0;
  border-bottom: 2px solid #ff4747;
  padding-bottom: 0.5rem;
}

h2 {
  color: #ff4747;
  font-size: 1.8rem;
  margin-top: 2rem;
}

h3 {
  color: #d35400;
  font-size: 1.4rem;
}

h4 {
  color: #d35400;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-top: 1.5rem;
}' />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'fundamentos', text: 'Fundamentos de CSS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.hierarchy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag {
  background: #2d2d2d;
  color: #ff4747;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9rem;
  min-width: 60px;
  text-align: center;
}

.preview-container {
  background: #2d2d2d;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.preview-header {
  background: #2d2d2d;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.preview-content {
  padding: 2rem;
  font-family: serif;
}

.preview-h1 {
  color: #fff;
  font-size: 2.5rem;
  margin-top: 0;
  border-bottom: 2px solid #ff4747;
  padding-bottom: 0.5rem;
}

.preview-h2 {
  color: #ff4747;
  font-size: 1.8rem;
  margin-top: 2rem;
}

.preview-h3 {
  color: #d35400;
  font-size: 1.4rem;
}

.preview-h4 {
  color: #d35400;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-top: 1.5rem;
}

.hierarchy-list li {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #3c3c3c;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hierarchy-list li:last-child {
  border-bottom: none;
}
</style>
