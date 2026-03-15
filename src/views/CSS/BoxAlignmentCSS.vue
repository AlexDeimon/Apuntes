<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Alineación de Cajas</h1>
      <p class="subtitle">Dominando los ejes y la distribución del espacio.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Los dos ejes</h2>
      <p class="section-desc">CSS alinea los elementos basándose en dos dimensiones: el <strong>eje principal</strong> (inline) y el <strong>eje transversal</strong> (block).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Eje Principal (Inline)</h3>
          </div>
          <p>Propiedades que comienzan con <code>justify-</code>. Controla la alineación horizontal por defecto.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Eje Transversal (Block)</h3>
          </div>
          <p>Propiedades que comienzan con <code>align-</code>. Controla la alineación vertical por defecto.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">justify-items</h2>
      <p class="section-desc">Alinea los elementos dentro de una línea en el eje principal.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Valores Comunes</h3>
          </div>
          <ul class="def-list">
            <li>
              <span class="def-term">start / flex-start:</span> Alinea al inicio.
              <div class="demo-box grid justify-item-start">
                <div class="item">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">end / flex-end:</span> Alinea al final.
              <div class="demo-box grid justify-item-end">
                <div class="item">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">center:</span> Centra los elementos.
              <div class="demo-box grid justify-item-center">
                <div class="item">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">stretch:</span> Estira los elementos para llenar el contenedor.
              <div class="demo-box grid justify-item-stretch">
                <div class="item">box</div>
              </div>
            </li>
          </ul>
        </div>
        <CodeBlock language="css" code=".container1 {
  display: grid;
  justify-items: start;
}

.container2 {
  display: grid;
  justify-items: end;
}

.container3 {
  display: grid;
  justify-items: center;
}

.container4 {
  display: grid;
  justify-items: stretch;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">justify-self</h2>
      <p class="section-desc">Es lo mismo que justify-items pero para un solo elemento. Se aplica al elemento hijo.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Valores Comunes</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">start:</span> Alinea al inicio.</li>
            <li><span class="def-term">end:</span> Alinea al final.</li>
            <li>
              <span class="def-term">center:</span> Centra los elementos.
              <div class="demo-box grid">
                <div class="item justify-self-start">box 1</div>
                <div class="item justify-self-center">box 2</div>
                <div class="item justify-self-end">box 3</div>
              </div>
            </li>
            <li>
              <span class="def-term">stretch:</span> Estira los elementos para llenar el contenedor.
              <div class="demo-box grid">
                <div class="item justify-self-stretch">box 4</div>
              </div>
            </li>
          </ul>
        </div>
        <CodeBlock language="css" code=".item1 {
  justify-self: start;
}

.item2 {
  justify-self: center;
}

.item3 {
  justify-self: end;
}

.item4 {
  justify-self: stretch;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">justify-content</h2>
      <p class="section-desc">Distribuye el espacio extra a lo largo del eje principal.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Valores Comunes</h3>
          <ul class="def-list">
            <li>
              <span class="def-term">flex-start / start:</span> Al principio.
              <div class="demo-box flex justify-content-start">
                <div class="item">box 1</div>
                <div class="item">box 2</div>
                <div class="item">box 3</div>
              </div>
            </li>
            <li>
              <span class="def-term">center:</span> Centrado.
              <div class="demo-box flex justify-content-center">
                <div class="item">box 1</div>
                <div class="item">box 2</div>
                <div class="item">box 3</div>
              </div>
            </li>
            <li>
              <span class="def-term">flex-end / end:</span> Al final.
              <div class="demo-box flex justify-content-end">
                <div class="item">box 1</div>
                <div class="item">box 2</div>
                <div class="item">box 3</div>
              </div>
            </li>
            <li>
              <span class="def-term">space-between:</span> Espacio entre elementos.
              <div class="demo-box flex justify-content-between">
                <div class="item">box 1</div>
                <div class="item">box 2</div>
                <div class="item">box 3</div>
              </div>
            </li>
            <li>
              <span class="def-term">space-around:</span> Espacio alrededor.
              <div class="demo-box flex justify-content-around">
                <div class="item">box 1</div>
                <div class="item">box 2</div>
                <div class="item">box 3</div>
              </div>
            </li>
            <li>
              <span class="def-term">space-evenly:</span> Espacio equitativo.
              <div class="demo-box flex justify-content-evenly">
                <div class="item">box 1</div>
                <div class="item">box 2</div>
                <div class="item">box 3</div>
              </div>
            </li>
          </ul>
        </div>
        <CodeBlock language="css" code=".container1 {
  display: flex;
  justify-content: start;
}

.container2 {
  display: flex;
  justify-content: center;
}

.container3 {
  display: flex;
  justify-content: end;
}

.container4 {
  display: flex;
  justify-content: space-between;
}

.container5 {
  display: flex;
  justify-content: space-around;
}

.container6 {
  display: flex;
  justify-content: space-evenly;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">align-items</h2>
      <p class="section-desc">Controla cómo se alinean los elementos dentro de una línea en el eje transversal.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Valores Comunes</h3>
          <ul class="def-list">
            <li>
              <span class="def-term">start / flex-start:</span> Alineación superior.
              <div class="demo-box h-150 flex align-items-start">
                <div class="item">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">center:</span> Centrado vertical.
              <div class="demo-box h-150 flex align-items-center">
                <div class="item">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">end / flex-end:</span> Alineación inferior.
              <div class="demo-box h-150 flex align-items-end">
                <div class="item">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">stretch:</span> Estira los elementos para llenar el contenedor.
              <div class="demo-box h-150 flex align-items-stretch">
                <div class="item">box</div>
              </div>
            </li>
          </ul>
        </div>
        <CodeBlock language="css" code=".container1 {
  display: flex;
  align-items: start;
  min-height: 150px;
}

.container2 {
  display: flex;
  align-items: center;
  min-height: 150px;
}

.container3 {
  display: flex;
  align-items: end;
  min-height: 150px;
}

.container4 {
  display: flex;
  align-items: stretch;
  min-height: 150px;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">align-self</h2>
      <p class="section-desc">Permite anular la propiedad <code>align-items</code> para un elemento individual.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Valores Comunes</h3>
          <ul class="def-list">
            <li><span class="def-term">start / flex-start:</span> Alineación superior.</li>
            <li><span class="def-term">center:</span> Centrado vertical.</li>
            <li>
              <span class="def-term">end / flex-end:</span> Alineación inferior.
              <div class="demo-box flex h-150">
                <div class="item align-self-start">start</div>
                <div class="item align-self-center">center</div>
                <div class="item align-self-end">end</div>
              </div>
            </li>
            <li>
              <span class="def-term">stretch:</span> Estira los elementos para llenar el contenedor.
              <div class="demo-box align-items-stretch flex h-150">
                <div class="item">stretch</div>
              </div>
            </li>
          </ul>
        </div>
        <CodeBlock language="css" code=".container {
  display: flex;
  align-items: center;
  height: 150px;
}

.item-1 { align-self: start; }
.item-2 { align-self: center; }
.item-3 { align-self: end; }
.item-4 { align-self: stretch; }" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">align-content</h2>
      <p class="section-desc">Alinea las líneas de contenido cuando hay varias filas (como en <code>flex-wrap: wrap</code>).</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Valores Comunes</h3>
          <ul class="def-list">
            <li>
              <span class="def-term">flex-start:</span> Líneas al principio.
              <div class="demo-box flex flex-wrap align-content-start h-300 gap-2">
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">center:</span> Líneas al centro.
              <div class="demo-box flex flex-wrap align-content-center h-300 gap-2">
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">end / flex-end:</span> Líneas al final.
              <div class="demo-box flex flex-wrap align-content-end h-300 gap-2">
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">space-between:</span> Espacio entre líneas.
              <div class="demo-box flex flex-wrap align-content-between h-300 gap-2">
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">space-around:</span> Espacio alrededor de las líneas.
              <div class="demo-box flex flex-wrap align-content-around h-300 gap-2">
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
              </div>
            </li>
            <li>
              <span class="def-term">space-evenly:</span> Espacio uniforme entre líneas.
              <div class="demo-box flex flex-wrap align-content-evenly h-300 gap-2">
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
                <div class="item flex-40">box</div>
              </div>
            </li>
          </ul>
        </div>
        <CodeBlock language="css" code=".container1 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 300px;
}

.container2 {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 300px;
}

.container3 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  height: 300px;
}

.container4 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 300px;
}

.container5 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height: 300px;
}

.container6 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  height: 300px;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Propiedad Gap</h2>
      <p class="section-desc">La forma moderna de añadir separación entre elementos sin usar márgenes laterales complicados. Funciona en Flexbox y Grid.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Sintaxis Gap</h3>
          <span class="badge success">Moderno</span>
        </div>
        <div class="demo-box gap-demo">
          <div class="item">Gap</div>
          <div class="item">de</div>
          <div class="item">20px</div>
        </div>
        <CodeBlock language="css" code=".container {
  display: flex;
  gap: 20px; /* row-gap y column-gap */
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Atajos (Shorthands)</h2>
      <p class="section-desc">Existen propiedades que combinan ambos ejes para un código más limpio.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>place-items</h3>
          </div>
          <p>Combina <code>align-items</code> y <code>justify-items</code>.</p>
          <CodeBlock language="css" code=".container {
  place-items: center;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>place-content</h3>
          </div>
          <p>Combina <code>align-content</code> y <code>justify-content</code>.</p>
          <CodeBlock language="css" code=".container {
  place-content: center center;
}" />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'boxmodel', text: 'Modelo de Caja' },
      { techId: 'css', moduleId: 'position', text: 'Posicionamiento' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.h-150 {
  min-height: 150px;
}

.h-300 {
  min-height: 300px;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.justify-self-start {
  justify-self: start;
}

.justify-self-end {
  justify-self: end;
}

.justify-self-center {
  justify-self: center;
}

.justify-self-stretch {
  justify-self: stretch;
}

.justify-item-start {
  display: grid;
  justify-items: start;
}

.justify-item-end {
  display: grid;
  justify-items: end;
}

.justify-item-center {
  display: grid;
  justify-items: center;
}

.justify-item-stretch {
  display: grid;
  justify-items: stretch;
}

.justify-content-start {
  justify-content: flex-start;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-around {
  justify-content: space-around;
}

.justify-content-evenly {
  justify-content: space-evenly;
}

.align-items-start {
  align-items: flex-start;
}

.align-items-center {
  align-items: center;
}

.align-items-end {
  align-items: flex-end;
}

.align-items-stretch {
  align-items: stretch;
}

.align-self-start {
  align-self: flex-start;
}

.align-self-center {
  align-self: center;
}

.align-self-end {
  align-self: flex-end;
}

.flex-wrap {
  flex-wrap: wrap;
}

.align-content-start {
  align-content: flex-start;
}

.align-content-center {
  align-content: center;
}

.align-content-end {
  align-content: flex-end;
}

.align-content-between {
  align-content: space-between;
}

.align-content-around {
  align-content: space-around;
}

.align-content-evenly {
  align-content: space-evenly;
}

.gap-2 {
  gap: 10px;
}

.gap-demo {
  display: flex;
  gap: 20px;
  background: #1a1a1a;
  padding: 1rem;
  border-radius: 4px;
}

.item {
  background: var(--color-css);
  color: #1a1a1a;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 181, 253, 0.3);
}

.flex-40 {
  flex: 0 0 40%;
}

.align-items-stretch .item {
  height: 150px;
}
</style>
