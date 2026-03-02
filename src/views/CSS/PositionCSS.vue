<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Posicionamiento</h1>
      <p class="subtitle">Controla la ubicación de los elementos en el flujo del documento.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Conceptos Clave</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Flujo de Renderizado</h3>
          </div>
          <p>Los elementos se dibujan de izquierda a derecha y de arriba abajo. El punto <code>(0,0)</code> es la esquina superior izquierda.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Espacio Reservado</h3>
          </div>
          <p>Es el lugar físico que ocupa un elemento en el layout. Algunos tipos de posicionamiento hacen que el elemento pierda este espacio.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Elemento posicionado</h3>
          </div>
          <p>Es un elemento al que se le ha aplicado una propiedad <code>position</code> distinta de <code>static</code>.</p>
        </div>
      </div>
      <br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Propiedades de posicionamiento</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Top: </span>El elemento se moverá desde la parte superior la distancia que se le haya indicado.</li>
            <li><span class="def-term">Right: </span>El elemento se moverá desde la parte derecha la distancia que se le haya indicado.</li>
            <li><span class="def-term">Bottom: </span>El elemento se moverá desde la parte inferior la distancia que se le haya indicado.</li>
            <li><span class="def-term">Left: </span>El elemento se moverá desde la parte izquierda la distancia que se le haya indicado.</li>
            <li><span class="def-term">Z-index: </span>Permite mover el elemento en el contexto de apilamiento (eje z). Es la propiedad que permite ordenar los elementos superpuestos para controlar cual se coloca por delante y cual por detrás.</li>
          </ul>
          <p><strong>Nota:</strong> Las propiedades <code>top</code>, <code>right</code>, <code>bottom</code> y <code>left</code> solo funcionan si el elemento está posicionado. Si se le declara la propiedad <code>top</code> y/o <code>left</code> las propiedades <code>right</code> y <code>bottom</code> se ignorarán.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Valores de Position</h2>
      <div class="card info">
        <div class="card-header">
          <h3>Static</h3>
        </div>
        <p>Es el valor por defecto. El elemento sigue el flujo normal y <strong>no está posicionado</strong>. Las propiedades <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> y <code>z-index</code> no tienen efecto.</p>
        <CodeBlock language="css" code="position: static;" />
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Relative</h3>
          </div>
          <p>El elemento se posiciona relativo a su ubicación original. <strong>Conserva su espacio reservado</strong> original en el flujo.</p>
          <CodeBlock language="css" code=".box-relative {
  position: relative;
  top: 20px;
  left: 20px;
}" />
          <br/>
          <div class="preview-container">
            <div class="preview-header">Ejemplo: Relative (top: 20px, left: 20px)</div>
            <div class="demo-box positioning-demo">
              <div class="box box-static">Static</div>
              <div class="box box-relative">Relative</div>
              <div class="box box-static">Static</div>
            </div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Absolute</h3>
          </div>
          <p>El elemento se posiciona relativo a su <strong>ancestro posicionado más cercano</strong>. Si no hay ninguno, usa el <code>html</code>. <strong>Pierde su espacio reservado</strong>.</p>
          <CodeBlock language="css" code=".container { position: relative; }
.box-absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}" />
          <br/>
          <div class="preview-container">
            <div class="preview-header">Ejemplo: Absolute dentro de un contenedor relativo</div>
            <div class="demo-box positioning-demo relative-container">
              <span class="container-label">Contenedor Relative</span>
              <div class="box box-static">Static</div>
              <div class="box box-absolute">Absolute</div>
              <div class="box box-static">Static (toma el lugar del absolute)</div>
            </div>
          </div>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Fixed</h3>
          </div>
          <p>El elemento se posiciona relativo a la <strong>ventana del navegador (viewport)</strong>. Se mantiene en el mismo lugar incluso al hacer scroll. Pierde su espacio reservado.</p>
          <CodeBlock language="css" code=".header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #00b5fd;
}" />
          <br/>
          <div class="preview-container">
            <div class="preview-header">Ejemplo: Fixed</div>
            <div class="fixed-scroll-demo">
              <div class="fixed-item">Header</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere illum laborum eligendi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga non sunt ipsum? Maiores voluptatem assumenda cum beatae, eos dignissimos sapiente minus eligendi mollitia iusto perferendis laborum error qui magnam.</p>
            </div>
          </div>
          <br/>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Sticky</h3>
          </div>
          <p>Es un híbrido entre <code>relative</code> y <code>fixed</code>. El elemento se comporta como relative hasta que alcanza un punto de umbral determinado (ej: <code>top: 0</code>) al hacer scroll, momento en el cual se queda fijo.</p>
          <CodeBlock language="css" code=".sticky-header {
  position: sticky;
  top: 0;
  background-color: #00b5fd;
}" />
          <br/>
          <div class="preview-container">
            <div class="preview-header">Ejemplo: Sticky</div>
            <div class="fixed-scroll-demo">
              <img src="/Apuntes/v2/icons/css.svg" alt="css">
              <div class="fixed-item">Header</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere illum laborum eligendi.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga non sunt ipsum? Maiores voluptatem assumenda cum beatae, eos dignissimos sapiente minus eligendi mollitia iusto perferendis laborum error qui magnam.</p>
            </div>
          </div>
          <br/>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Z-Index y Stacking Context</h2>
      <p class="section-desc">Controla qué elementos aparecen "encima" de otros cuando se superponen. Solo funciona en elementos posicionados.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Stacking Order</h3>
          </div>
          <p>El orden de apilamiento es el siguiente:</p>
          <ol class="list">
            <li>Elementos posicionados con <code>z-index > 0</code>.</li>
            <li>Elementos posicionados sin <code>z-index</code> declarado.</li>
            <li>Elementos no posicionados (flujo normal).</li>
            <li>Elementos con <code>z-index</code> negativo.</li>
          </ol>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Z-index</h3>
          </div>
          <ul class="list">
            <li>Sin z-index es el orden del html el que prevalece.</li>
            <li>Con z-index el numero mayor es el que prevalece.</li>
            <li>Se recomienda usar z-index con valores altos no consecutivos para evitar conflictos.</li>
            <li><strong>Un elemento padre jamas se colocará por delante del hijo, pero si es posible poner al hijo detrás del padre con valores de z-index negativos y es importante que el padre no tenga z-index.</strong></li>
          </ul>
        </div>
      </div><br>
      <div class="cards-grid">
        <CodeBlock language="html" code="<div class='box-father'>
  Elemento padre
  <div class='box-son-1'>Elemento hijo sin z-index</div>
  <div class='box-son-2'>Elemento hijo z-index: 10</div>
</div>" />
        <CodeBlock language="css" code=".box-father {
  position: relative;
  width: 200px;
  height: 200px;
  background: rgba(51, 51, 51, 0.2);
  border: 2px solid #333;
  color: #fff;
}

.box-son-1 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background: rgba(255, 71, 71, 0.2);
  border: 2px solid #ff4747;
  color: #ff4747;
}

.box-son-2 {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 100px;
  z-index: 10;
  background: rgba(0, 181, 253, 0.2);
  border: 2px solid #00b5fd;
  color: #00b5fd;
} " />
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Ejemplo: Z-index</div>
        <div class="demo-box">
          <div class="box-father">
            Elemento padre
            <div class="box-son-1">Elemento hijo sin z-index</div>
            <div class="box-son-2">Elemento hijo z-index: 10</div>
          </div>
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'boxmodel', text: 'Modelo de Caja' },
      { techId: 'css', moduleId: 'fundamentos', text: 'Fundamentos CSS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.positioning-demo {
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 4px;
  min-height: 150px;
}

.relative-container {
  position: relative;
  border: 2px dashed #444;
}

.container-label {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 0.7rem;
  color: #666;
}

.box {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
}

.box-static {
  background: #333;
  color: #888;
  border: 1px solid #444;
}

.box-relative {
  background: rgba(0, 181, 253, 0.2);
  border: 2px solid var(--color-css);
  color: var(--color-css);
  position: relative;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.box-absolute {
  background: rgba(255, 71, 71, 0.2);
  border: 2px solid #ff4747;
  color: #ff4747;
  position: absolute;
  top: 10px;
  right: 10px;
}

.fixed-scroll-demo {
  height: 150px;
  overflow-y: scroll;
  padding: 0;
}

.fixed-item {
  position: sticky;
  top: 0;
  background: var(--color-css);
  color: #1a1a1a;
  padding: 10px;
  font-weight: bold;
  text-align: center;
}

.scroll-content {
  padding: 1rem;
  color: #666;
  line-height: 2;
}

.box-father {
  position: relative;
  width: 200px;
  height: 200px;
  background: rgba(51, 51, 51, 0.2);
  border: 2px solid #333;
  color: #fff;
}

.box-son-1 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background: rgba(255, 71, 71, 0.2);
  border: 2px solid #ff4747;
  color: #ff4747;
}

.box-son-2 {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 100px;
  z-index: 10;
  background: rgba(0, 181, 253, 0.2);
  border: 2px solid var(--color-css);
  color: var(--color-css);
} 
</style>
