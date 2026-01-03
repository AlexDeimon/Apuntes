<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Fundamentos CSS</h1>
      <p class="subtitle">La base fundamental para dar estilo a la web</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Conectar HTML y CSS</h2>
      <p class="section-desc">Existen 4 formas de dar estilos a HTML mediante CSS. Es crucial entenderlas para elegir la mejor arquitectura.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>1. Etiqueta &lt;link&gt;</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>Se tiene un archivo CSS externo, usualmente en otra carpeta, el cual se vincula al HTML mediante la etiqueta <code>&lt;link&gt;</code>. Permite reutilizar estilos en múltiples archivos.</p>
          <CodeBlock language="html" code='<head>
  <link rel="stylesheet" href="estilos.css">
</head>' />
        </div>
        <div class="card">
          <div class="card-header">
            <h3>2. Etiqueta &lt;style&gt;</h3>
          </div>
          <p>Se escribe el código CSS directamente en el archivo HTML dentro de la etiqueta <code>&lt;style&gt;</code> en el <code>&lt;head&gt;</code>. Útil para estilos críticos o correos electrónicos.</p>
          <CodeBlock language="html" code='<head>
  <style>
    body {
      background-color: #f0f0f0;
    }
  </style>
</head>' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>3. CSS en línea</h3>
            <span class="badge danger">Mala Práctica</span>
          </div>
          <p>Se agrega el atributo <code>style</code> a cualquier etiqueta HTML. Difícil de mantener y tiene la especificidad más alta indeseada.</p>
          <CodeBlock language="html" code='<h1 style="color: red; font-size: 20px;">
  Título en rojo
</h1>' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>4. @import</h3>
            <span class="badge danger">Evitar</span>
          </div>
          <p>Importa un archivo CSS dentro de otro archivo CSS o etiqueta style. Puede afectar el rendimiento ya que bloquea el renderizado secuencialmente.</p>
          <CodeBlock language="css" code='@import url("otros-estilos.css");

body {
  font-family: sans-serif;
}' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Sintaxis CSS</h2>
      <p>La regla CSS se compone de un <strong>selector</strong> y un <strong>bloque de declaración</strong>.</p>
      <div class="syntax-visualization">
        <CodeBlock language="css" code='selector {
  propiedad: valor;
  propiedad: valor;
}' />
        <ul>
          <li><strong>Selector:</strong> Indica a qué elemento(s) HTML se aplicarán los estilos.</li>
          <li><strong>Propiedad:</strong> El aspecto que quieres cambiar (ej. color, font-size).</li>
          <li><strong>Valor:</strong> El ajuste específico para la propiedad (ej. red, 16px).</li>
        </ul>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">La Cascada en CSS</h2>
      <p>El algoritmo que usa el navegador para decidir qué estilos aplicar cuando hay conflictos. Se basa en 3 factores:</p>
      <div class="cascade-factors">
        <div class="factor">
          <h3>1. Importancia</h3>
          <p>Origen del estilo. Orden de menor a mayor:</p>
          <ol>
            <li>Navegador (User Agent)</li>
            <li>Usuario (Configuración browser)</li>
            <li>Autor (Desarrollador)</li>
            <li><code>!important</code> (Rompe la cascada, usar con precaución)</li>
          </ol>
        </div>
        <div class="factor">
          <h3>2. Especificidad</h3>
          <p>Calcula el "peso" de un selector. Cuanto más específico, gana.</p>
          <div class="specificity-table">
            <div class="spec-row">
              <span>Etiquetas / Pseudo-elementos</span>
              <span class="spec-val">0-0-1</span>
            </div>
            <div class="spec-row">
              <span>Clases / Atributos / Pseudo-clases</span>
              <span class="spec-val">0-1-0</span>
            </div>
            <div class="spec-row">
              <span>IDs</span>
              <span class="spec-val">1-0-0</span>
            </div>
            <div class="spec-row">
              <span>Estilos en línea (Inline)</span>
              <span class="spec-val">1-0-0-0</span>
            </div>
          </div>
          <a href="https://jonassebastianohlsson.com/specificity-graph/" target="_blank"
            class="link-external">Visualizador de Especificidad</a>
        </div>
        <div class="factor">
          <h3>3. Orden de Fuente</h3>
          <p>Si la importancia y especificidad son iguales, gana la regla que se declaró al final (más abajo en el código).</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Herencia</h2>
      <p>Algunas propiedades CSS (como color, font-family) se heredan de padres a hijos, mientras que otras (como border, margin) no.</p>
      <div class="keywords-grid">
        <div class="keyword-card">
          <h4>inherit</h4>
          <p>Fuerza a un elemento a heredar la propiedad de su padre, aunque normalmente no lo haría.</p>
          <CodeBlock language="css" code='a {
  color: inherit; /* Hereda el color del texto del padre */
  text-decoration: none;
}' />
        </div>
        <div class="keyword-card">
          <h4>initial</h4>
          <p>Resetea la propiedad a su valor inicial predeterminado por la especificación CSS.</p>
          <CodeBlock language="css" code='div {
  color: initial; /* Vuelve a negro (usualmente) */
}' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Normalización</h2>
      <p>Los navegadores tienen estilos por defecto inconsistentes. Usar un "Reset" o "Normalize" asegura que tu sitio
        se vea igual en todos lados.</p>
      <div class="info-box">
        <p><strong>Normalize.css</strong> es una alternativa moderna a los resets CSS tradicionales. Preserva valores
          útiles por defecto en lugar de eliminarlos todos.</p>
        <a href="https://necolas.github.io/normalize.css/" target="_blank" class="button-link">Descargar
          Normalize.css</a>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Selectores CSS</h2>
      <h3 class="subsection-title">Selectores Simples</h3>
      <div class="editors-comparison">
        <div class="editor-col">
          <p><strong>#id: </strong>Selecciona un elemento único por su atributo ID.</p>
          <CodeBlock language="css" code='#id {
  background-color: blue;
}' />
        </div>
        <div class="editor-col">
          <p><strong>.clase: </strong>Selecciona todos los elementos con esa clase.</p>
          <CodeBlock language="css" code='.clase {
  margin: 10px;
}' />
        </div>
        <div class="editor-col">
          <p><strong>elemento: </strong>Selecciona por etiqueta (ej. p, div, h1).</p>
          <CodeBlock language="css" code='h1 {
  margin-left: 10px;
}' />
        </div>
        <div class="editor-col">
          <p><strong>*: </strong>Selector universal (todo).</p>
          <CodeBlock language="css" code='* {
  text-align: center;
}' />
        </div>
      </div>
      <h3 class="subsection-title">Selectores de Atributos</h3>
      <div class="editors-comparison">
        <div class="editor-col">
          <p><strong>[atributo]: </strong>Selecciona por atributo.</p>
          <CodeBlock language="css" code='a[href] {
  color: blue;
}' />
        </div>
        <div class="editor-col">
          <p><strong>[atributo=valor]: </strong>Selecciona por atributo con valor exacto.</p>
          <CodeBlock language="css" code='a[href="https://google.com"] {
  color: red;
}' />
        </div>
        <div class="editor-col">
          <p><strong>[atributo^=valor]: </strong>Selecciona por atributo que comienza con valor.</p>
          <CodeBlock language="css" code='a[href^="https://google.com"] {
  color: green;
}' />
        </div>
        <div class="editor-col">
          <p><strong>[atributo$=valor]: </strong>Selecciona por atributo que termina con valor.</p>
          <CodeBlock language="css" code='a[href$="google.com"] {
  color: purple;
}' />
        </div>
        <div class="editor-col">
          <p><strong>[atributo*=valor]: </strong>Selecciona por atributo que contiene valor.</p>
          <CodeBlock language="css" code='a[href*="google"] {
  color: orange;
}' />
        </div>
        <div class="editor-col">
          <p><strong>[atributo|=valor]: </strong>Selecciona por atributo que contiene valor (espaciado).</p>
          <CodeBlock language="css" code='a[href~="google"] {
  color: pink;
}' />
        </div>
      </div>
      <h3 class="subsection-title">Selectores Compuestos y Combinadores</h3>
      <div class="editors-comparison">
        <div class="editor-col">
          <p><strong>Agrupación: </strong>Aplicar estilos a varios selectores.</p>
          <CodeBlock language="css" code='h1, h2, h3 {
  font-family: "Helvetica", sans-serif;
  color: #333;
}' />
        </div>
        <div class="editor-col">
          <p><strong>Descendiente (Espacio): </strong>Elemento dentro de otro (cualquier nivel).</p>
          <CodeBlock language="css" code='div p {
  /* Todos los <p> dentro de <div> */
  color: blue;
}' />
        </div>
        <div class="editor-col">
          <p><strong>Hijo Directo (>): </strong>Solo hijos directos (primer nivel).</p>
          <CodeBlock language="css" code='ul > li {
  /* Solo <li> que son hijos directos de <ul> */
  list-style: none;
}' />
        </div>
        <div class="editor-col">
          <p><strong>Combinador General (+): </strong>Elemento siguiente hermano.</p>
          <CodeBlock language="css" code='h1 + p {
  /* Solo el <p> que sigue inmediatamente a <h1> */
  color: green;
}' />
        </div>
        <div class="editor-col">
          <p><strong>Combinador General (~): </strong>Todos los elementos hermanos siguientes.</p>
          <CodeBlock language="css" code='h1 ~ p {
  /* Todos los <p> que siguen inmediatamente a <h1> */
  color: green;
}' />
        </div>
        <div class="editor-col">
          <p><strong>Sub clase: </strong>Selecciona un elemento de etiqueta con una clase definida.</p>
          <CodeBlock language="css" code='div.clase {
  margin: 10px;
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
.card.recommended {
  border-color: #42b883;
}

.card.warning {
  border-color: #e6a23c;
}

.cascade-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.factor {
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
}

.specificity-table {
  background: #2d2d2d;
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #3c3c3c;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-val {
  font-family: monospace;
  color: #9cdcfe;
  font-weight: bold;
}

.keywords-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .keywords-grid {
    grid-template-columns: 1fr;
  }
}

.keyword-card {
  background: #252526;
  padding: 1.5rem;
  border-radius: 8px;
}

.info-box {
  background: #1a2632;
  border-left: 4px solid #42b883;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
}

.editors-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
