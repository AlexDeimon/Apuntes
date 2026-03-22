<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Listas en HTML</h1>
      <p class="subtitle">Organizando el contenido de forma jerárquica y secuencial.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">Tipos de Listas</h2>
      <p class="section-desc">HTML ofrece tres formas principales de agrupar elementos relacionados. Cada una tiene su propio significado semántico.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>No Ordenadas (&lt;ul&gt;)</h3>
          </div>
          <p>Para elementos donde el orden no altera el significado. Usa viñetas por defecto.</p>
          <CodeBlock language="html" code="<ul>
  <li>Elemento de lista</li>
  <li>Otro elemento de lista</li>
</ul>" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Ordenadas (&lt;ol&gt;)</h3>
          </div>
          <p>Para secuencias, pasos o rankings. Usa números o letras por defecto.</p>
          <CodeBlock language="html" code="<ol>
  <li>Primero</li>
  <li>Segundo</li>
</ol>" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>De Descripción (&lt;dl&gt;)</h3>
          </div>
          <p>Para pares de términos y definiciones (glosarios, metadatos).</p>
          <CodeBlock language="html" code="<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado</dd>
  <dt>CSS</dt>
  <dd>Hoja de estilos</dd>
  <dt>JS</dt>
  <dd>Lenguaje de programación</dd>
</dl>" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Atributos de Listas Ordenadas</h2>
      <p class="section-desc">Las listas <code>&lt;ol&gt;</code> permiten un control fino sobre su numeración.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Dirección, Inicio y Valor</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Dirección: </span>Usa <code>reversed</code> para contar hacia atrás</li>
            <li><span class="def-term">Inicio: </span>Usa <code>start</code> para definir el valor inicial</li>
            <li><span class="def-term">Valor: </span>Usa <code>value</code> para definir el valor de un elemento específico</li>
          </ul>
          <CodeBlock language="html" code='<ol reversed start="3" value="1, 2, 3">
  <li>Paso final</li>
  <li>Paso medio</li>
  <li>Paso inicial</li>
</ol>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Tipos de Marcador</h3>
          </div>
          <p>El atributo <code>type</code> permite cambiar entre números, letras o números romanos.</p>
          <CodeBlock language="html" code='<Ul type="A"> <!-- A, B, C... -->
<Ul type="i"> <!-- i, ii, iii... -->' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Listas Anidadas</h2>
      <p class="section-desc">Puedes insertar una lista dentro de otra para crear estructuras complejas como menús o índices.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Ejemplo de Estructura</h3>
          <span class="badge success">Estructura</span>
        </div>
        <CodeBlock language="html" code="<ol>
  <li>HTML
    <ul>
      <li>Estructuras.</li>
      <li>Sintaxis.</li>
      <li>Etiquetas.</li>
    </ul>
  </li>
  <li>CSS
    <ul>
      <li>Etiquetas.</li>
      <li>Sintaxis.</li>
      <li>Caracteristicas.</li>
    </ul>
  </li>
  <li>Javascript
    <ul>
      <li>Variables.</li>
      <li>Sintaxis.</li>
    </ul>
  </li>
</ol>" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Previsualización Visual</h2>
      <div class="preview-container">
        <div class="preview-header">Ejemplos Renderizados</div>
        <div class="preview-content">
          <div class="demo-group">
            <h4>Lista no ordenada</h4>
            <ul>
              <li>Elemento de lista</li>
              <li>Otro elemento</li>
            </ul>
          </div>
          <div class="demo-group">
            <h4>Lista ordenada (Reversed)</h4>
            <ol reversed start="3">
              <li>Paso final</li>
              <li>Paso medio</li>
              <li>Paso inicial</li>
            </ol>
          </div>
          <div class="demo-group">
            <h4>Lista de descripción</h4>
            <dl>
              <dt>HTML</dt>
              <dd>Lenguaje de marcado.</dd>
              <dt>CSS</dt>
              <dd>Hoja de estilos.</dd>
              <dt>JS</dt>
              <dd>Lenguaje de programación.</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
.demo-group h4 {
  margin-bottom: 0.5rem;
  color: var(--color-html);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

ul, ol {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.3rem;
}

dt {
  font-weight: bold;
  color: var(--color-html);
  margin-top: 0.5rem;
}

dd {
  margin-left: 1rem;
  font-style: italic;
  color: var(--text-secondary);
}
</style>
