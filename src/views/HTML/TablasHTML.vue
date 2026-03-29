<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Tablas</h1>
      <p class="subtitle">Estructurando datos bidimensionales de forma clara y accesible.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">Estructura Fundamental</h2>
      <p class="section-desc">Las tablas permiten organizar información en filas y columnas. Se definen con la etiqueta <code>&lt;table&gt;</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Componentes Base</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">&lt;tr&gt;</span>: Define una fila (Table Row).</li>
            <li><span class="def-term">&lt;th&gt;</span>: Define una celda de encabezado (Table Header).</li>
            <li><span class="def-term">&lt;td&gt;</span>: Define una celda de datos (Table Data).</li>
          </ul>
        </div>
        <CodeBlock language="html" code="<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Diego</td>
    <td>25</td>
  </tr>
</table>" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Organización Semántica</h2>
      <p class="section-desc">Para tablas complejas, es vital usar etiquetas que identifiquen las secciones de la tabla.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Secciones</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">&lt;thead&gt;</span>: Agrupa el contenido del encabezado.</li>
            <li><span class="def-term">&lt;tbody&gt;</span>: Agrupa el cuerpo de la tabla.</li>
            <li><span class="def-term">&lt;tfoot&gt;</span>: Agrupa el pie o resumen de la tabla.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Accesibilidad</h3>
            <span class="badge success">Tip</span>
          </div>
          <p>Usar estas etiquetas ayuda a los lectores de pantalla y permite que los encabezados se repitan en impresiones de varias páginas.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Combinación de Celdas</h2>
      <p class="section-desc">Podemos hacer que una celda ocupe varias filas o columnas usando atributos específicos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Colspan</h3>
          </div>
          <p>Expande una celda horizontalmente a través de varias columnas.</p>
          <CodeBlock language="html" code='<table>
  <tr>
    <td colspan="2">Celda Ancha</td>
  </tr>
</table>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Rowspan</h3>
          </div>
          <p>Expande una celda verticalmente a través de varias filas.</p>
          <CodeBlock language="html" code='<table>
  <tr>
    <td rowspan="2">Celda Alta</td>
  </tr>
</table>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Grupos de Columnas</h2>
      <p class="section-desc">La etiqueta <code>&lt;colgroup&gt;</code> permite aplicar estilos o atributos a columnas completas de forma eficiente.</p>
      <div class="cards-grid">
        <CodeBlock language="html" code="<table>
  <colgroup>
    <col span='1' style='background-color: blue'>
    <col span='2' style='background-color: yellow'>
  </colgroup>
  <!-- Contenido de la tabla -->
</table>" />
        <div class="preview-content">
          <table style="width: 100%; color: black;">
            <colgroup>
                <col span='1' style='background-color: var(--color-css)'>
                <col span='2' style='background-color: var(--color-js)'>
              </colgroup>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monitor 4K</td>
                <td>Hardware</td>
                <td>$350</td>
              </tr>
              <tr>
                <td>Teclado Mecánico</td>
                <td>Periférico</td>
                <td>$120</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">Total</td>
                <td>$470</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Demostración Visual</h2>
      <div class="cards-grid">
        <CodeBlock language="html" code="<table class='custom-table'>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Categoría</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monitor 4K</td>
      <td>Hardware</td>
      <td>$350</td>
    </tr>
    <tr>
      <td>Teclado Mecánico</td>
      <td>Periférico</td>
      <td>$120</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan='2'>Total</td>
      <td>$470</td>
    </tr>
  </tfoot>
</table>" />
        <CodeBlock language="css" code=".custom-table {
  width: 100%;
  border-collapse: collapse;
  color: #e0e0e0;
  background: #252526;
  border-radius: 8px;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-table thead {
  background-color: #ff4747;
  color: white;
}

.custom-table tfoot {
  background-color: #252526;
  font-weight: bold;
}

.custom-table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.custom-table td:first-child,
.custom-table th:first-child {
  padding-left: 20px;
}

.custom-table td:last-child,
.custom-table th:last-child {
  padding-right: 20px;
}
" />
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Tabla Completa Estructurada</div>
        <div class="preview-content">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monitor 4K</td>
                <td>Hardware</td>
                <td>$350</td>
              </tr>
              <tr>
                <td>Teclado Mecánico</td>
                <td>Periférico</td>
                <td>$120</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">Total</td>
                <td>$470</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--text-primary);
  background: var(--bg-card);
  border-radius: 8px;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-table thead {
  background-color: var(--color-html);
  color: white;
}

.custom-table tfoot {
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.05);
}

.custom-table tr:hover {
  background-color: rgba(255, 255, 255, 0.02);
}
</style>
