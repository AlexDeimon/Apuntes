<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Box Model</h1>
      <p class="subtitle">El concepto fundamental del diseño en CSS</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">¿Qué es el Modelo de Caja?</h2>
      <p class="section-desc">En CSS, <strong>todo es una caja</strong>. Todos los elementos HTML son tratados como cajas rectangulares por el navegador. El "Modelo de Caja" describe cómo se calculan las dimensiones de estas cajas.</p>
      <div class="preview-container box-demo-container">
        <div class="preview-header">Representación Visual</div>
        <div class="box-model-visual">
          <div class="box-margin">
            <span class="label">Margin (Margen)</span>
            <div class="box-border">
              <span class="label">Border (Borde)</span>
              <div class="box-padding">
                <span class="label">Padding (Relleno)</span>
                <div class="box-content">
                  <span class="label">Content (Contenido)</span>
                  <p>Aquí va el texto, imágenes, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Las 4 Capas</h2>
      <p class="section-desc">El modelo de caja se compone de cuatro capas principales que rodean el contenido de un elemento. Las propiedades CSS que definen cada capa son las siguientes:</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>1. Content</h3>
            <span class="badge info">Interno</span>
          </div>
          <p>Es el contenido real del elemento (texto, imagen, video). Sus dimensiones se definen con <code>width</code> y <code>height</code>.</p>
          <p>Dichas propiedades no se aplican a los elementos en línea, ya que estos se adaptan siempre al contenido.</p>
          <CodeBlock language="css" code=" /* Elemento de bloque */
div {
  width: 100px;
  height: 100px;
}

/* Elemento en línea (width y height no hacen efecto) */
span {
  width: 100px;
  height: 100px;
}" />
          <p class="block-element">Elemento de bloque</p>
          <span class="inline-element">Elemento en línea</span>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>2. Padding</h3>
            <span class="badge info">Relleno</span>
          </div>
          <p>Espacio transparente alrededor del contenido, <strong>dentro</strong> del borde. Toma el color de fondo del elemento.</p>
          <CodeBlock language="css" code="/* por separado */
.box-internal-1 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}

/* shorthand */
.box-internal-2 {
  padding: 10px 20px 30px 40px; /* top, right, bottom, left */
}

.box-internal-3 {
  padding: 10px 20px 30px; /* top, right/left, bottom */
}

.box-internal-4 {
  padding: 10px 20px; /* top/bottom, right/left */
}

.box-external {
  padding: 20px; /* todos los lados */
}
" />
          <div class="demo-box">
            <div class="box-external">
              <div class="box-internal-1">box 1</div>
              <div class="box-internal-2">box 2</div>
              <div class="box-internal-3">box 3</div>
              <div class="box-internal-4">box 4</div>
            </div>
            <p class="text-muted">Pasa el mouse por encima de los cuadrados para ver los rellenos</p>
          </div>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>3. Border</h3>
            <span class="badge info">Límite</span>
          </div>
          <p>Línea que rodea el padding y el contenido. Está compuesta por 4 propiedades: <code>border-width</code>, <code>border-style</code>, <code>border-color</code> y <code>border-radius</code>.</p>
          <p>Las primeras tres son obligatorias para que el borde se muestre y se pueden definir por separado o de forma conjunta.</p>
          <p>La propiedad <code>border-radius</code> se utiliza para redondear las esquinas del borde.</p>
          <CodeBlock language="css" code="/* por separado */
.box-border-1 {
  border-width: 5px; /* todos los lados */
  border-style: solid dashed; /* top/bottom, right/left */
  border-color: #ffebcd #0000ff #8a2be2 #a52a2a; /* top, right/left, bottom */
  border-radius: 10px 20px 30px 40px; /* top, right, bottom, left */
}

/* de forma conjunta */
.box-border-2 {
  border: 5px solid #5f9ea0;
  border-radius: 20px;
}

/* por lados */
.box-border-3 {
  border-top: 5px solid #7fff00;
  border-right: 10px groove #d2691e;
  border-bottom: 15px ridge #ff7f50;
  border-left: 20px double #6495ed;
}" />
        <div class="demo-box">
          <div class="box box-border-1">box 1</div>
          <div class="box box-border-2">box 2</div>
          <div class="box box-border-3">box 3</div>
        </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>4. Margin</h3>
            <span class="badge info">Externo</span>
          </div>
          <p>Espacio transparente <strong>fuera</strong> del borde. Separa el elemento de sus vecinos. Los márgenes verticales pueden colapsar.</p>
          <p>Los elementos en línea no tienen margen vertical.</p>
          <p>Los márgenes verticales de dos elementos adyacentes se colapsan en uno solo.</p>
          <p>Los márgenes horizontales de dos elementos adyacentes no se colapsan.</p>
          <CodeBlock language="css" code="/* Colapso de márgenes */
.margin-1 {
  margin-top: 20px;
  margin-right: 40px;
  margin-bottom: 60px;
}

.margin-2 {
  margin: 20px 40px 60px; /* el 20px del top se cancela ya que el margin-bottom del elemento anterior es 60px*/
}

.margin-3 {
  margin: 20px 40px; /* solo se aplica el 40px a los lados */
}

.margin-4 {
  margin: 10px 20px 30px; /* solo se aplica el 20px a los lados */
}

/* las margenes de los lados de los elementos 3 y 4 no se colapsan */
" />
          <div class="demo-box demo-box-margin">
            <div class="box margin-1">Elemento 1</div>
            <div class="box margin-2">Elemento 2</div>
            <br>
            <span class="margin-3">Elemento 3</span>
            <span class="margin-4">Elemento 4</span>
            <p class="text-muted">Pasa el mouse por encima de los elementos para ver las márgenes</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Propiedad Box-Sizing</h2>
      <p class="section-desc">Define cómo se calculan el ancho y alto total del elemento. Esto es crucial para un diseño predecible.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>content-box</h3>
            <span class="badge danger">Default</span>
          </div>
          <p>El <code>width</code> solo aplica al contenido. Si añades padding o borde, el tamaño total del elemento <strong>crece</strong>.</p>
          <CodeBlock language="css" code=".box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  /* Ancho real: 240px */
}" />
          <div class="math-box">Ancho Total = width + padding + border</div>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>border-box</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>El <code>width</code> incluye el contenido, el padding y el borde. El navegador reduce el espacio del contenido para ajustar todo al ancho especificado.</p>
          <CodeBlock language="css" code="* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;
  /* Ancho real: 200px */
}" />
          <div class="math-box success">Ancho Total = width (Fijo)</div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Propiedad: Display</h2>
      <p class="section-desc">Define cómo se comporta el elemento en el flujo de la página. Determina si es un elemento en bloque, en línea o en línea-block.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>none</h3>
          </div>
          <p>El elemento no se muestra en el flujo de la página. No ocupa espacio.</p>
          <CodeBlock language="css" code=".box {
  display: none;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>block</h3>
          </div>
          <p>El elemento se muestra como un bloque. Ocupa todo el ancho disponible. Aunque tengan un ancho declarado, el próximo elemento se mostrará en una nueva línea.</p>
          <CodeBlock language="css" code=".box {
  display: block;
}" />
          <p class="block-element">Elemento de bloque</p>
          <p class="block-element">Elemento de bloque</p>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>inline</h3>
          </div>
          <p>El elemento se muestra como un elemento en línea. Ocupa solo el ancho necesario. El próximo elemento se muestra en la misma línea si el espacio disponible lo permite.</p>
          <CodeBlock language="css" code=".box {
  display: inline;
}" />
          <span class="inline-element">Elemento en línea</span>
          <span class="inline-element">Elemento en línea</span>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>inline-block</h3>
          </div>
          <p>El elemento se muestra como un elemento en línea, ocupa solo el ancho necesario pero permite medidas y márgenes verticales.</p>
          <CodeBlock language="css" code=".box {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 20px;
}" />
          <div class="demo-box demo-box-margin">
            <span class="inline-block-element">Elemento inline-block</span>
            <span class="inline-block-element">Elemento inline-block</span>
            <p class="text-muted">Pasa el mouse por encima de los elementos para ver las márgenes</p>
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
.box-demo-container {
  padding: 0;
}

.box-model-visual {
  padding: 2rem;
  display: flex;
  justify-content: center;
  background: #1e1e1e;
  overflow-x: auto;
}

.box-margin {
  background-color: #f9cc9d;
  padding: 40px;
  position: relative;
  border: 2px dashed #e6a23c;
  color: #a85e0b;
}

.box-border {
  background-color: #fddc99;
  padding: 40px;
  border: 4px solid #333;
  position: relative;
  color: #8a6d3b;
}

.box-padding {
  background-color: #c3eec0;
  padding: 40px;
  position: relative;
  color: #3c763d;
}

.box-content {
  background-color: #9ec5fe;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  color: #31708f;
  font-weight: bold;
}

.label {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.8;
}

.block-element {
  display: block;
  width: 100px;
  height: 100px;
  background-color: #f0f8ff;
  color: #000;
}

.inline-element {
  display: inline;
  width: 100px;
  height: 100px;
  margin-right: 10px;
  background-color: #faebd7;
  color: #000;
}

.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 20px solid #1a1a1a;
  background-color: #00ffff;
  color: #000;
}

.box-external {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #7fffd4;
  color: #000;
}

.box-internal-1 {
  border-top: 10px solid #f0ffff;
  border-right: 20px solid #f0ffff;
  border-bottom: 30px solid #f0ffff;
  border-left: 40px solid #f0ffff;
  background-color: #f0ffff;
}

.box-internal-2 {
  border-top: 10px solid #f0ffff;
  border-right: 20px solid #f0ffff;
  border-bottom: 30px solid #f0ffff;
  border-left: 40px solid #f0ffff;
  background-color: #f0ffff;
}

.box-internal-3 {
  border-top: 10px solid #f0ffff;
  border-right: 20px solid #f0ffff;
  border-bottom: 30px solid #f0ffff;
  border-left: 20px solid #f0ffff;
  background-color: #f0ffff;
}

.box-internal-4 {
  border-top: 10px solid #f0ffff;
  border-right: 20px solid #f0ffff;
  border-bottom: 10px solid #f0ffff;
  border-left: 20px solid #f0ffff;
  background-color: #f0ffff;
}

.demo-box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
}

.demo-box-margin {
  display: block;
}

.box {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #000;
}

.box-border-1 {
  border-width: 5px;
  border-style: solid dashed;
  border-color: #0000ff #8a2be2 #a52a2a;
  border-radius: 10px 20px 30px 40px;
  background-color: #f5f5dc;
}

.box-border-2 {
  border: 5px dotted #5f9ea0;
  border-radius: 20px;
  background-color: #f5f5dc;
}

.box-border-3 {
  border-top: 5px solid #7fff00;
  border-right: 10px groove #d2691e;
  border-bottom: 15px ridge #ff7f50;
  border-left: 20px double #6495ed;
  background-color: #f5f5dc;
}

.margin-1 {
  background-color: #fff8dc;
  border-top: 20px solid #1a1a1a;
  border-left: 40px solid #1a1a1a;
  border-bottom: 60px solid #1a1a1a;
}

.margin-2 {
  background-color: #fff8dc;
  border-left: 40px solid #1a1a1a;
  border-bottom: 60px solid #1a1a1a;
}

.margin-3 {
  background-color: #dc143c;
  border-left: 40px solid #1a1a1a;
  border-right: 40px solid #1a1a1a;
  color: #000;
}

.margin-4 {
  background-color: #dc143c;
  border-left: 20px solid #1a1a1a;
  border-right: 20px solid #1a1a1a;
  color: #000;
}

.math-box {
  background: #ffffff1a;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  margin: 10px 0;
  font-family: monospace;
  text-align: center;
  border: 1px dashed #666;
}

.math-box.success {
  box-sizing: border-box;
  border-color: #42b883;
  color: #42b883;
}

.inline-block-element:hover {
  border: 20px solid #00008b;
}

.box-internal-1:hover {
  border-top: 10px solid #008b8b;
  border-right: 20px solid #008b8b;
  border-bottom: 30px solid #008b8b;
  border-left: 40px solid #008b8b;
}

.box-internal-2:hover {
  border-top: 10px solid #008b8b;
  border-right: 20px solid #008b8b;
  border-bottom: 30px solid #008b8b;
  border-left: 40px solid #008b8b;
}

.box-internal-3:hover {
  border-top: 10px solid #008b8b;
  border-right: 20px solid #008b8b;
  border-bottom: 30px solid #008b8b;
  border-left: 20px solid #008b8b;
}

.box-internal-4:hover {
  border-top: 10px solid #008b8b;
  border-right: 20px solid #008b8b;
  border-bottom: 10px solid #008b8b;
  border-left: 20px solid #008b8b;
}

.margin-1:hover {
  border-top: 20px solid #b8860b;
  border-left: 40px solid #b8860b;
  border-bottom: 60px solid #b8860b;
}

.margin-2:hover {
  border-left: 40px solid #b8860b;
  border-bottom: 60px solid #b8860b;
}

.margin-3:hover {
  border-left: 40px solid #a9a9a9;
  border-right: 40px solid #a9a9a9;
}

.margin-4:hover {
  border-left: 20px solid #a9a9a9;
  border-right: 20px solid #a9a9a9;
}
</style>
