<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Fundamentos CSS</h1>
      <p class="subtitle">La base fundamental para dar estilo a la web</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title">Conectar HTML y CSS</h2>
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
      <h2 class="section-title">Sintaxis CSS</h2>
      <p class="section-desc">La regla CSS se compone de un <strong>selector</strong> y un <strong>bloque de declaración</strong>.</p>
      <div class="card">
        <ul class="def-list">
          <li><span class="def-term">Selector:</span> Indica a qué elemento(s) HTML se aplicarán los estilos.</li>
          <li><span class="def-term">Propiedad:</span> El aspecto que quieres cambiar (ej. color, font-size).</li>
          <li><span class="def-term">Valor:</span> El ajuste específico para la propiedad (ej. red, 16px).</li>
        </ul>
        <div class="syntax-visualization">
          <CodeBlock language="css" code='selector {
  propiedad: valor;
  propiedad: valor;
}' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">La Cascada en CSS</h2>
      <p class="section-desc">El algoritmo que usa el navegador para decidir qué estilos aplicar cuando hay conflictos. Se basa en 3 factores:</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>1. Importancia</h3>
          </div>
          <p>Origen del estilo. Orden de menor a mayor:</p>
          <ol class="list">
            <li>Navegador (User Agent)</li>
            <li>Usuario (Configuración browser)</li>
            <li>Autor (Desarrollador)</li>
            <li><code>!important</code> (Rompe la cascada, usar con precaución)</li>
          </ol>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>2. Especificidad</h3>
          </div>
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
        <div class="card">
          <div class="card-header">
            <h3>3. Orden de Fuente</h3>
          </div>
          <p>El orden tiene que ver directamente con las manera de conexión entre el documento HTML y el CSS:</p>
          <ol class="list">
            <li>Estilos en línea (Inline)</li>
            <li>Estilos internos (style)</li>
            <li>Estilos externos (link)</li>
          </ol>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Herencia</h2>
      <p class="section-desc">Algunas propiedades CSS (como color, font-family) se heredan de padres a hijos (elementos que contienen a otros elementos), mientras que otras (como border, margin) no.</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>inherit</h3>
          </div>
          <p>Fuerza a un elemento a heredar la propiedad de su padre, aunque normalmente no lo haría.</p>
          <CodeBlock language="css" code='/* .padre tiene color: #42b883 */
.link-heredado {
  color: inherit; /* Hereda el verde */
  text-decoration: none;
}' />
          <div class="demo-box inherit-demo">
            <div>Padre (color verde)</div>
            <a href="#" class="demo-link-inherit">Link (inherit)</a>
            <a href="#" class="demo-link-normal">Link (normal)</a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>initial</h3>
          </div>
          <p>Resetea la propiedad a su valor inicial predeterminado por la especificación CSS.</p>
          <CodeBlock language="css" code='/* .padre tiene color: #e6a23c */
.texto-reset {
  color: initial; /* Vuelve al color original */
  border: 1px solid currentColor;
}' />
          <div class="demo-box initial-demo">
            <div>Padre (color naranja)</div>
            <div class="demo-initial-text">Texto Initial</div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Normalización</h2>
      <p class="section-desc">Los navegadores tienen estilos por defecto inconsistentes. Usar un "Reset" o "Normalize" asegura que tu sitio
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
      <h2 class="section-title">Selectores CSS</h2>
      <h3 class="subsection-title">Selectores Simples</h3>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>#id</h3>
          </div>
          <p>Selecciona un elemento único por su atributo ID.</p>
          <CodeBlock language="css" code='#boton-unico {
  background-color: #2b5581;
  color: white;
  padding: 5px 10px;
  border: none;
}' />
          <div class="demo-box">
            <button id="boton-unico">Soy Único</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>.clase</h3>
          </div>
          <p>Selecciona todos los elementos con esa clase.</p>
          <CodeBlock language="css" code='.tarjeta-demo {
  border-left: 4px solid #42b883;
  padding-left: 8px;
}' />
          <div class="demo-box">
            <div class="tarjeta-demo">Item 1</div>
            <div class="tarjeta-demo" style="margin-top:5px;">Item 2</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>elemento</h3>
          </div>
          <p>Selecciona por etiqueta (ej. small).</p>
          <CodeBlock language="css" code='small {
  color: #9cdcfe;
}' />
          <div class="demo-box">
            <small id="demo-small">Texto pequeño</small><br>
            <span>Texto normal</span>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>*</h3>
          </div>
          <p>Selector universal (todo).</p>
          <CodeBlock language="css" code='.contenedor * {
  border: 1px dashed #666;
}' />
          <div class="demo-box demo-universal">
            <p>Párrafo</p>
            <span>Span</span>
          </div>
        </div>
      </div>
      <h3 class="subsection-title">Selectores de Atributos</h3>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>[atributo]</h3>
          </div>
          <p>Selecciona si tiene el atributo.</p>
          <CodeBlock language="css" code='input[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}' />
          <div class="demo-box">
            <input type="text" disabled value="Deshabilitado" size="12">
            <input type="text" value="Habilitado" size="10">
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>[attr=valor]</h3>
          </div>
          <p>Valor exacto.</p>
          <CodeBlock language="css" code='input[type="checkbox"] {
  accent-color: #42b883;
}' />
          <div class="demo-box">
            <label><input type="checkbox" checked> Checkbox</label>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>[attr^=valor]</h3>
          </div>
          <p>Comienza con.</p>
          <CodeBlock language="css" code='a[href^="https"] {
  color: #42b883;
}' />
          <div class="demo-box">
            <a href="https://alexdeimon.github.io/Apuntes/index.html" target="_blank">Seguro (https)</a><br>
            <a href="http://alexdeimon.github.io/Apuntes/index.html" target="_blank">No seguro</a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>[attr$=valor]</h3>
          </div>
          <p>Termina con.</p>
          <CodeBlock language="css" code='a[href$=".png"] {
  color: #e6a23c;
}' />
          <div class="demo-box">
            <a href="https://raw.githubusercontent.com/AlexDeimon/Apuntes/refs/heads/version2/src/assets/images/DISANDEV.png">imagen.png</a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>[attr*=valor]</h3>
          </div>
          <p>Contiene.</p>
          <CodeBlock language="css" code='a[href*="google"] {
  text-decoration: underline wavy;
}' />
          <div class="demo-box">
            <a href="https://google.com">Ir a Google</a>
          </div>
        </div>
      </div>
      <h3 class="subsection-title">Selectores Compuestos y Combinadores</h3>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>Agrupación</h3>
          </div>
          <p>Varios selectores.</p>
          <CodeBlock language="css" code='.demo-g, .demo-em {
  color: #42b883;
}' />
          <div class="demo-box">
            <strong class="demo-g">Negrita</strong> y <em class="demo-em">Cursiva</em>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Descendiente</h3>
          </div>
          <p>(Espacio) Cualquier nivel.</p>
          <CodeBlock language="css" code='.caja p {
  color: #9cdcfe;
}' />
          <div class="demo-box caja">
            <p>Párrafo hijo</p>
            <div>
              <p>Párrafo nieto</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Hijo Directo (>): </h3>
          </div>
          <p>Solo primer nivel.</p>
          <CodeBlock language="css" code='.lista>li::marker {
  content: "➣ ";
  color: #d41414;
}' />
          <div class="demo-box">
            <ul class="lista">
              <li>Hijo directo</li>
              <ul>
                <li>Nieto (no afectado)</li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Ayacente (+): </h3>
          </div>
          <p>Siguiente hermano inmediato.</p>
          <CodeBlock language="css" code='h5 + p {
  color: #e6a23c;
}' />
          <div class="demo-box">
            <h5>Título 5</h5>
            <p>Afectado</p>
            <p>No afectado</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>General (~): </h3>
          </div>
          <p>Todos los hermanos siguientes.</p>
          <CodeBlock language="css" code='h5 ~ span {
  color: #42b883;
}' />
          <div class="demo-box">
            <h5>Título 5</h5>
            <span>Afectado</span><br>
            <span>Afectado también</span>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Sub clase: </h3>
          </div>
          <p>Etiqueta con clase específica.</p>
          <CodeBlock language="css" code='div.error {
  border-color: #f56c6c;
}' />
          <div class="demo-box">
            <div class="error" style="border: 1px solid #333; padding: 2px;">Error</div>
            <div style="border: 1px solid #333; padding: 2px; margin-top:2px;">Normal</div>
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
h5+p {
  color: #e6a23c;
  margin: 0;
}

h5~span {
  color: #42b883;
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

.spec-val {
  font-family: monospace;
  color: #9cdcfe;
  font-weight: bold;
}

.inherit-demo {
  color: #42b883;
}

.demo-link-inherit {
  color: inherit;
  margin-right: 10px;
  text-decoration: none;
}

.demo-link-normal {
  color: #9cdcfe;
}

.initial-demo {
  color: #e6a23c;
}

.demo-initial-text {
  color: initial;
  border: 1px solid currentColor;
  padding: 2px 5px;
  display: inline-block;
  margin-top: 5px;
}

.tarjeta-demo {
  border-left: 4px solid #42b883;
  padding-left: 8px;
  color: #ddd;
}

.demo-universal * {
  border: 1px dashed #666;
  padding: 2px;
}

.demo-g,
.demo-em {
  color: #42b883;
}

.caja p {
  color: #9cdcfe;
  margin: 0;
}

div.error {
  border-color: #f56c6c !important;
}

.lista>li::marker {
  color: #d41414;
  content: "➣ ";
}

.spec-row:last-child {
  border-bottom: none;
}

.demo-box a[href^="https"] {
  color: #42b883;
}

.demo-box a[href$=".png"] {
  color: #e6a23c;
}

.demo-box a[href*="google"] {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}

#boton-unico {
  background-color: #2b5581;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

#demo-small {
  color: #9cdcfe;
}
</style>
