<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Bloque vs Línea</h1>
      <p class="subtitle">Entendiendo cómo se comportan los elementos en el flujo del documento.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">Elementos en Bloque (Block)</h2>
      <p class="section-desc">Estos elementos siempre comienzan en una nueva línea y ocupan todo el ancho disponible del contenedor padre. No permiten que otros elementos se ubiquen a sus lados.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Características</h3>
          </div>
          <ul class="list">
            <li>Ocupan el 100% del ancho disponible.</li>
            <li>Generan un salto de línea antes y después.</li>
            <li>Pueden contener elementos en bloque y en línea.</li>
            <li>Permiten definir <code>width</code>, <code>height</code>, <code>margin</code> y <code>padding</code>.</li>
          </ul>
          <h3>Ejemplos Comunes</h3>
          <ul class="def-list">
            <li><span class="def-term">&lt;h1&gt;-&lt;h6&gt;: </span>Títulos de diferentes niveles.</li>
            <li><span class="def-term">&lt;p&gt;: </span>Párrafos de texto.</li>
            <li><span class="def-term">&lt;header&gt;: </span>Contenedor de información del encabezado.</li>
            <li><span class="def-term">&lt;main&gt;: </span>Contenedor de contenido principal.</li>
            <li><span class="def-term">&lt;section&gt;: </span>Contenedor de contenido relacionado.</li>
            <li><span class="def-term">&lt;article&gt;: </span>Contenedor de contenido independiente.</li>
            <li><span class="def-term">&lt;aside&gt;: </span>Contenedor de contenido relacionado pero no principal.</li>
            <li><span class="def-term">&lt;address&gt;: </span>Contenedor de información de contacto.</li>
            <li><span class="def-term">&lt;footer&gt;: </span>Contenedor de información del pie de página.</li>
            <li><span class="def-term">&lt;div&gt;: </span>Contenedor genérico de bloque.</li>
            <li><span class="def-term">Listas: </span>Elementos: &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;.</li>
            <li><span class="def-term">Tablas: </span>Elementos: &lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, &lt;caption&gt;, &lt;colgroup&gt;, &lt;col&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;.</li>
            <li><span class="def-term">Formularios: </span>Elementos: &lt;form&gt;, &lt;fieldset&gt;, &lt;legend&gt;.</li>
            <li><span class="def-term">Figuras: </span>Elementos: &lt;figure&gt;, &lt;figcaption&gt;.</li>
          </ul>
          <h3>Otros elementos:</h3>
          <ul class="def-list">
            <li><span class="def-term">&lt;blockquote&gt;: </span>Se utiliza para marcar las citas a otros autores o documentos. Se puede incluir el atributo cite para poner un enlace al documento original o fuente.</li>
            <li><span class="def-term">&lt;pre&gt;: </span>Se utiliza para marcar el texto preformateado.</li>
            <li><span class="def-term">&lt;hr&gt;: </span>Línea horizontal.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Elementos en Línea (Inline)</h2>
      <p class="section-desc">Estos elementos solo ocupan el ancho necesario para contener su contenido y no generan saltos de línea. Se sitúan uno al lado del otro.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Características</h3>
          </div>
          <ul class="list">
            <li>Solo ocupan el ancho de su contenido.</li>
            <li>No generan saltos de línea.</li>
            <li>Solo deben contener otros elementos en línea o texto.</li>
            <li><strong>No</strong> respetan <code>width</code>, <code>height</code> ni <code>margin-top/bottom</code>.</li>
          </ul>
          <h3>Ejemplos Comunes</h3>
          <ul class="def-list">
            <li><span class="def-term">&lt;a&gt;: </span>Enlace.</li>
            <li><span class="def-term">Formularios: </span>Elementos: &lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;, &lt;label&gt;.</li>
            <li><span class="def-term">Contenido embebido: </span>Elementos: &lt;img&gt;, &lt;audio&gt;, &lt;video&gt;, &lt;iframe&gt;, &lt;canvas&gt;, &lt;svg&gt;.</li>
            <li><span class="def-term">&lt;span&gt;: </span>Contenedor genérico de línea.</li>
          </ul>
          <h3>Otros elementos:</h3>
          <ul class="def-list">
            <li><span class="def-term">&lt;strong&gt;: </span><strong>Texto importante</strong>.</li>
            <li><span class="def-term">&lt;em&gt;: </span><em>Texto enfatizado</em>.</li>
            <li><span class="def-term">&lt;mark&gt;: </span><mark>Texto marcado</mark>.</li>
            <li><span class="def-term">&lt;small&gt;: </span><small>Texto pequeño</small>.</li>
            <li><span class="def-term">&lt;del&gt;: </span><del>Texto tachado</del>.</li>
            <li><span class="def-term">&lt;ins&gt;: </span><ins>Texto subrayado</ins>.</li>
            <li><span class="def-term">&lt;sub&gt;: </span>Subíndice. H<sub>2</sub>O</li>
            <li><span class="def-term">&lt;sup&gt;: </span>Superíndice. 2<sup>2</sup> = 4</li>
            <li><span class="def-term">&lt;b&gt;: </span><strong>Texto en negrita</strong>.</li>
            <li><span class="def-term">&lt;i&gt;: </span><em>Texto en cursiva</em>.</li>
            <li><span class="def-term">&lt;u&gt;: </span><u>Texto subrayado</u>.</li>
            <li><span class="def-term">&lt;s&gt;: </span><del>Texto tachado</del>.</li>
            <li><span class="def-term">&lt;q&gt;: </span><q>Cita corta</q>.</li>
            <li><span class="def-term">&lt;cite&gt;: </span><cite>Título de una obra</cite>.</li>
            <li><span class="def-term">&lt;dfn&gt;: </span><dfn>Término definido</dfn>.</li>
            <li><span class="def-term">&lt;abbr&gt;: </span><abbr>Abreviatura</abbr>.</li>
            <li><span class="def-term">&lt;time&gt;: </span><time>Fecha y hora</time>.</li>
            <li><span class="def-term">&lt;code&gt;: </span><code>Código</code>.</li>
            <li><span class="def-term">&lt;var&gt;: </span><var>Variable</var>.</li>
            <li><span class="def-term">&lt;samp&gt;: </span><samp>Salida de programa</samp>.</li>
            <li><span class="def-term">&lt;kbd&gt;: </span><kbd>Entrada de teclado</kbd>.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Comparativa Visual</h2>
      <p class="section-desc">Aquí puedes observar cómo los elementos de bloque se apilan verticalmente, mientras que los de línea fluyen horizontalmente.</p>
      <div class="preview-container">
        <div class="preview-header">Vista Previa de Comportamiento</div>
        <div class="demo-wrapper">
          <div class="demo-group">
            <span class="demo-label">Block Elements (&lt;div&gt;)</span>
            <div class="demo-block">Bloque 1</div>
            <div class="demo-block">Bloque 2</div>
            <div class="demo-block">Bloque 3</div>
          </div>
          <div class="demo-group">
            <span class="demo-label">Inline Elements (&lt;span&gt;)</span>
            <div class="demo-inline-container">
              <span class="demo-inline">Línea 1</span>
              <span class="demo-inline">Línea 2</span>
              <span class="demo-inline">Línea 3</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-grid">
        <CodeBlock language="html" code='<!-- Comportamiento de Bloque -->
<div>Bloque 1</div>
<div>Bloque 2</div>
<div>Bloque 3</div>

<!-- Comportamiento de Línea -->
<span>Línea 1</span>
<span>Línea 2</span>
<span>Línea 3</span>' />
        <CodeBlock language="css" code='/* Comportamiento de Bloque */
.demo-block {
  background: rgba(255, 71, 71, 0.15);
  border: 1px solid #ff4747;
  padding: 12px;
  color: #ff4747;
  text-align: center;
  border-radius: 6px;
  font-weight: 500;
  transition: transform 0.2s;
}

/* Comportamiento de Línea */
.demo-inline {
  background: rgba(68, 140, 255, 0.15);
  border: 1px solid #448cff;
  padding: 6px 16px;
  color: #448cff;
  border-radius: 6px;
  display: inline;
  font-weight: 500;
  transition: transform 0.2s;
}' />
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'secciones', text: 'Secciones de Contenido' },
      { techId: 'css', moduleId: 'boxmodel', text: 'Modelo de Caja (CSS)' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>

<style scoped>
.demo-wrapper {
  padding: 2rem;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.demo-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-label {
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-bottom: 5px;
}

.demo-block {
  background: rgba(255, 71, 71, 0.15);
  border: 1px solid #ff4747;
  padding: 12px;
  color: #ff4747;
  text-align: center;
  border-radius: 6px;
  font-weight: 500;
  transition: transform 0.2s;
}

.demo-inline-container {
  display: block;
}

.demo-inline {
  background: rgba(68, 140, 255, 0.15);
  border: 1px solid #448cff;
  padding: 6px 16px;
  color: #448cff;
  border-radius: 6px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  transition: transform 0.2s;
}

.demo-block:hover {
  transform: scale(1.01);
  background: rgba(255, 71, 71, 0.25);
}

.demo-inline:hover {
  transform: translateY(-2px);
  background: rgba(68, 140, 255, 0.25);
}
</style>
