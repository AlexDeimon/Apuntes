<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Tablas en CSS</h1>
      <p class="subtitle">Propiedades para controlar bordes, espaciado, alineacion y el aspecto visual de las tablas HTML.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Bordes de Tabla</h2>
      <p class="section-desc">Las tablas tienen sus propias reglas para los bordes. Por defecto, los bordes de la tabla y de cada celda son independientes, generando un doble borde. La propiedad <code>border-collapse</code> controla este comportamiento.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>border-collapse</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">separate (por defecto):</span> Cada celda tiene su propio borde independiente. El espacio entre bordes se controla con <code>border-spacing</code>.</li>
            <li><span class="def-term">collapse:</span> Los bordes adyacentes se fusionan en uno solo. Es la opcion mas usada para tablas con aspecto limpio.</li>
          </ul>
          <CodeBlock language="css" code="/* Los bordes se fusionan en uno solo */
table {
  border-collapse: collapse;
}

/* Los bordes permanecen separados (por defecto) */
table {
  border-collapse: separate;
  border-spacing: 8px;
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: border-collapse</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: borderCollapse === 'collapse' }]" @click="borderCollapse = 'collapse'">collapse</button>
              <button :class="['demo-btn', { active: borderCollapse === 'separate' }]" @click="borderCollapse = 'separate'">separate</button>
            </div>
            <div class="demo-table-wrapper">
              <table class="demo-table" :style="{ borderCollapse: borderCollapse, borderSpacing: borderCollapse === 'separate' ? '6px' : '0' }">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Casa</th>
                    <th>Materia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Harry Potter</td>
                    <td>Gryffindor</td>
                    <td>Defensa</td>
                  </tr>
                  <tr>
                    <td>Hermione Granger</td>
                    <td>Gryffindor</td>
                    <td>Aritmancia</td>
                  </tr>
                  <tr>
                    <td>Draco Malfoy</td>
                    <td>Slytherin</td>
                    <td>Pociones</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CodeBlock language="css" :code="`table {\n  border-collapse: ${borderCollapse};\n${borderCollapse === 'separate' ? '  border-spacing: 6px;\n' : ''}}`" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Ancho y table-layout</h2>
      <p class="section-desc">El ancho de la tabla y la forma en que el navegador distribuye las columnas son ajustes importantes para controlar el layout.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>padding y width</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">width:</span> Controla el ancho de la tabla. Usar <code>100%</code> la hace responsiva al contenedor padre.</li>
            <li><span class="def-term">padding en td/th:</span> Espacio interno de las celdas. Las celdas no aceptan <code>margin</code>.</li>
            <li><span class="def-term">border-spacing:</span> Espacio entre celdas. Solo funciona con <code>border-collapse: separate</code>.</li>
          </ul>
          <CodeBlock language="css" code="table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>table-layout</h3>
          </div>
          <p>Controla como el navegador calcula el ancho de las columnas:</p>
          <ul class="def-list">
            <li><span class="def-term">auto (defecto):</span> El ancho se adapta al contenido. Puede ser lento en tablas grandes.</li>
            <li><span class="def-term">fixed:</span> El ancho se calcula a partir de la primera fila. Mas rapido. Ideal con <code>text-overflow: ellipsis</code>.</li>
          </ul>
          <CodeBlock language="css" code="table {
  table-layout: fixed;
  width: 100%;
}

th:nth-child(1) { width: 40%; }
th:nth-child(2) { width: 35%; }
th:nth-child(3) { width: 25%; }

td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Alineacion del Texto</h2>
      <p class="section-desc">La alineacion horizontal y vertical del contenido de las celdas se controla con las mismas propiedades que en cualquier elemento de bloque.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>text-align y vertical-align</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">text-align:</span> Alineacion horizontal (<code>left</code>, <code>center</code>, <code>right</code>). Por defecto <code>th</code> usa <code>center</code> y <code>td</code> usa <code>left</code>.</li>
            <li><span class="def-term">vertical-align:</span> Alineacion vertical (<code>top</code>, <code>middle</code>, <code>bottom</code>). Por defecto las celdas usan <code>middle</code>.</li>
          </ul>
          <CodeBlock language="css" code="th { text-align: left; }

td.numero { text-align: right; }

td { vertical-align: top; }

/* Centrar la tabla en la pagina */
table { margin: 0 auto; }" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: text-align y vertical-align en celdas</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="v in (['left', 'center', 'right'] as const)" :key="v" :class="['demo-btn', { active: textAlign === v }]" @click="textAlign = v">{{ v }}</button>
            </div>
            <div class="btn-toggle-group">
              <button v-for="v in ['top', 'middle', 'bottom']" :key="v" :class="['demo-btn', { active: verticalAlign === v }]" @click="verticalAlign = v">{{ v }}</button>
            </div>
            <div class="demo-table-wrapper">
              <table class="demo-table styled-table">
                <thead>
                  <tr><th>Hechizo</th><th>Descripcion</th><th>Nivel</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td :style="{ textAlign, verticalAlign }">Alohomora</td>
                    <td :style="{ textAlign, verticalAlign, height: '70px' }">Abre cerraduras comunes que no hayan sido selladas con magia mas fuerte.</td>
                    <td :style="{ textAlign, verticalAlign }">Basico</td>
                  </tr>
                  <tr>
                    <td :style="{ textAlign, verticalAlign }">Expecto Patronum</td>
                    <td :style="{ textAlign, verticalAlign, height: '70px' }">Crea un Patronus para repeler Dementores. Requiere pensar en el recuerdo mas feliz del mago.</td>
                    <td :style="{ textAlign, verticalAlign }">Avanzado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CodeBlock language="css" :code="`td {\n  vertical-align: ${verticalAlign};\n  text-align: ${textAlign};\n}`" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Diseno Visual Moderno</h2>
      <p class="section-desc">Combinar propiedades CSS permite crear tablas con aspecto profesional: filas alternadas con <code>:nth-child</code>, efectos hover y sombras.</p>
      <div class="cards-grid">
        <CodeBlock language="css" code="table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

thead tr {
  background: linear-gradient(135deg, #1e1e3a, #16213e);
}

th {
  padding: 0.85rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #a5b4fc;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  border-bottom: 2px solid rgba(99, 102, 241, 0.3);
}

tbody tr:nth-child(odd)  { background: rgba(15, 15, 30, 0.6); }

tbody tr:nth-child(even) { background: rgba(22, 33, 62, 0.5); }

tbody tr { transition: background-color 0.15s ease; }

tbody tr:hover { background: rgba(99, 102, 241, 0.1); }

td {
  padding: 0.75rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

table td:nth-child(1) {
  font-family: monospace;
  font-size: 0.8rem;
  color: #6ee7b7;
  white-space: nowrap;
}

table tr:first-child td:nth-child(2) {
  text-align: center;
  color: #fcd34d;
  font-weight: 500;
}" />
        <div class="preview-container">
          <div class="preview-header">Resultado Visual</div>
          <div class="preview-content">
            <div class="demo-table-wrapper">
              <table class="demo-table premium-table">
                <caption class="table-caption">Horario &mdash; Colegio Hogwarts</caption>
                <thead>
                  <tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miercoles</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:00-9:00</td>
                    <td colspan="3">Desayuno</td>
                  </tr>
                  <tr><td>9:00-10:00</td><td>Transformacion</td><td>Pociones</td><td>Defensa</td></tr>
                  <tr><td>10:00-11:00</td><td>Astronomia</td><td>Herbologia</td><td>Encantamientos</td></tr>
                  <tr><td>11:00-12:00</td><td>Pociones</td><td>Defensa</td><td>Adivinacion</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">caption y colgroup</h2>
      <p class="section-desc">Dos elementos HTML con propiedades CSS especificas: <code>caption</code> para el titulo y <code>colgroup</code> para aplicar estilos a columnas completas de forma semantica.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>caption-side</h3>
          </div>
          <p>El elemento <code>caption</code> es el titulo accesible de la tabla. Su posicion se controla con <code>caption-side</code>.</p>
          <CodeBlock language="css" code="caption {
  caption-side: top;    /* Por defecto: arriba */
  caption-side: bottom; /* Abajo de la tabla */
  text-align: center;
  font-style: italic;
  color: #888;
  padding: 0.5rem 0;
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Estilos por columna con colgroup</h3>
          </div>
          <p><code>colgroup</code> aplica estilos a columnas enteras. Solo admite: <code>background-color</code>, <code>border</code>, <code>visibility</code> y <code>width</code>.</p>
          <CodeBlock language="html" code='<table>
  <colgroup>
    <col style="width: 120px; background-color: rgba(99,102,241,0.08);">
    <col span="2">
  </colgroup>
  <thead>
    <tr>
      <th>Hora</th>
      <th>Materia</th>
      <th>Aula</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00</td>
      <td>Pociones</td>
      <td>Mazmorras</td>
    </tr>
  </tbody>
</table>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Tablas Responsivas</h2>
      <p class="section-desc">Las tablas son dificiles de mostrar en pantallas pequenas. Estas dos estrategias son las mas usadas en proyectos modernos.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Estrategia 1: Scroll Horizontal</h3>
          </div>
          <p>Envolver la tabla en un contenedor con <code>overflow-x: auto</code>.</p>
          <CodeBlock language="css" code=".table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-wrapper table {
  min-width: 600px;
}" />
          <CodeBlock language="html" code='<div class="table-wrapper">
  <table>...</table>
</div>' />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Estrategia 2: Tabla Apilada (data-label)</h3></div>
          <p>En pantallas pequenas, columnas se convierten en filas apiladas con <code>display: block</code> y el atributo <code>data-label</code> con <code>::before</code>.</p>
          <CodeBlock language="css" code="@media (max-width: 600px) {
  thead { display: none; }

  tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #a5b4fc;
    margin-right: 1rem;
  }
}" />
          <CodeBlock language="html" code='<tr>
  <td data-label="Nombre">Harry Potter</td>
  <td data-label="Casa">Gryffindor</td>
  <td data-label="Materia">Defensa</td>
</tr>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'tablas', text: 'Tablas en HTML' },
      { techId: 'css', moduleId: 'pseudo', text: 'Pseudo Clases & Pseudo Elementos' },
      { techId: 'css', moduleId: 'listas', text: 'Listas en CSS' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { CSSProperties } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const borderCollapse = ref<'collapse' | 'separate'>('collapse')
const verticalAlign = ref<CSSProperties['verticalAlign']>('middle')
const textAlign = ref<'left' | 'center' | 'right'>('left')
</script>
<style scoped>
.btn-toggle-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
}

.demo-btn {
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: monospace;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.demo-btn.active,
.demo-btn:hover {
  background-color: var(--color-css);
  border-color: var(--color-css);
  color: #fff;
}

.demo-table-wrapper {
  overflow-x: auto;
  border-radius: 10px;
  margin-bottom: 1.2rem;
}

.demo-table {
  width: 100%;
  font-size: 0.88rem;
}

.demo-table th,
.demo-table td {
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
}

.demo-table th {
  background: rgba(255, 255, 255, 0.06);
  font-weight: 600;
  color: var(--text-primary);
}

.demo-table td {
  color: var(--text-secondary);
}

.styled-table {
  border-collapse: collapse;
}

.styled-table th {
  background: rgba(99, 102, 241, 0.12);
  color: #a5b4fc;
  border-color: rgba(99, 102, 241, 0.2);
}

.premium-table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.premium-table thead tr {
  background: linear-gradient(135deg, #1e1e3a, #16213e);
}

.premium-table th {
  padding: 0.85rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #a5b4fc;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  border-bottom: 2px solid rgba(99, 102, 241, 0.3);
}

.premium-table tbody tr:nth-child(odd) {
  background: rgba(15, 15, 30, 0.6);
}

.premium-table tbody tr:nth-child(even) {
  background: rgba(22, 33, 62, 0.5);
}

.premium-table tbody tr {
  transition: background-color 0.15s ease;
}

.premium-table tbody tr:hover {
  background: rgba(99, 102, 241, 0.1);
}

.premium-table td {
  padding: 0.75rem 1rem;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: var(--text-secondary);
  font-size: 0.88rem;
}

.premium-table td:nth-child(1) {
  font-family: monospace;
  font-size: 0.8rem;
  color: #6ee7b7;
  white-space: nowrap;
}

.premium-table tr:first-child td:nth-child(2) {
  text-align: center;
  color: #fcd34d;
  font-weight: 500;
}

.table-caption {
  caption-side: bottom;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.78rem;
  padding-top: 0.6rem;
  font-style: italic;
}
</style>
