<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Medidas en CSS</h1>
      <p class="subtitle">Unidades absolutas, relativas y el viewport.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Medidas Absolutas</h2>
      <p class="section-desc">Estas medidas <strong>no cambian</strong> y mantienen su tamaño independientemente del dispositivo o configuración del usuario.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Píxeles (px)</h3>
            <span class="badge success">Más usada</span>
          </div>
          <p>Aunque técnicamente es relativa a la pantalla (1/96 de pulgada), en la práctica se considera absoluta. Es la base de muchas otras medidas.</p>
          <CodeBlock language="css" code=".px-box { width: 200px; }" />
          <div class="demo-box">
            <div class="px-box">200px</div>
          </div>
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Otras Unidades</h3>
            <span class="badge danger">Poco Comunes</span>
          </div>
          <ul class="def-list">
            <li><span class="def-term">cm</span>: Centímetros (1cm = 96px/2.54)</li>
            <li><span class="def-term">mm</span>: Milímetros (1mm = 1/10 de cm)</li>
            <li><span class="def-term">Q</span>: Cuartos de milímetro (1Q = 1/40 de cm)</li>
            <li><span class="def-term">pc</span>: Picas (1/6 de pulgada)</li>
            <li><span class="def-term">in</span>: Pulgadas (1in = 2.54cm = 96px)</li>
            <li><span class="def-term">pt</span>: Puntos (1/72 de pulgada)</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Medidas Relativas</h2>
      <p class="section-desc">Dependen siempre de un contexto (padre, raíz, viewport). Son esenciales para el <strong>Responsive Design</strong>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>REM</h3>
            <span class="badge info">Usada en font-size</span>
          </div>
          <p>Relativo siempre al tamaño de fuente del elemento raíz (<code>&lt;html&gt;</code>). Por defecto, 1rem = 16px. Es más predecible que EM.</p>
          <CodeBlock language="css" code="html { font-size: 16px; }
.box {
  font-size: 1.5rem; /* 1.5 * 16 = 24px */
  padding: 1rem;
}" />
          <div class="demo-box">
            <div class="rem-box">Texto en 1.5rem</div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>EM</h3>
            <span class="badge info">Usada en font-size</span>
          </div>
          <p>Relativo al tamaño de fuente del <strong>elemento padre</strong>.</p>
          <CodeBlock language="css" code=".padre { font-size: 20px; }
.hijo { font-size: 1.5em; /* 1.5 * 20 = 30px */ }" />
          <div class="demo-box">
            <div class="em-parent">
              Padre (20px)
              <div class="em-child">Hijo (1.5em)</div>
            </div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Porcentaje (%)</h3>
            <span class="badge info">Usada en width y height</span>
          </div>
          <p>Relativo al tamaño del ancho o alto del <strong>contenedor padre</strong>.</p>
          <CodeBlock language="css" code=".padre {
  width: 100%;
  border: 1px dashed #666;
}
.hijo {
  width: 50%;
  background: #42b883;
}" />
          <div class="demo-box">
            <div class="percent-parent">
              <div class="percent-child">50% Ancho</div>
            </div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Auto</h3>
            <span class="badge info">Usada en width y height</span>
          </div>
          <p>El navegador calcula el tamaño automáticamente según el espacio disponible.</p>
          <CodeBlock language="css" code=".box { width: auto; }" />
          <div class="demo-box">
            <div class="auto-box">Width: Auto (ocupa todo)</div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Unidades del Viewport</h2>
      <p class="section-desc">Relativas al tamaño visible de la ventana del navegador.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Viewport Width (vw)</h3>
          <p>1vw = 1% del ancho de la ventana.</p>
          <CodeBlock language="css" code=".width-demo { width: 50vw; }" />
          <div class="demo-box">
            <div class="vw-box" style="width: 50%;">50% del contenedor (simulando 50vw)</div>
          </div>
        </div>
        <div class="card info">
          <h3>Viewport Height (vh)</h3>
          <p>1vh = 1% del alto de la ventana.</p>
          <CodeBlock language="css" code=".full-screen { height: 100vh; }" />
        </div>
        <div class="card info">
          <h3>vmin y vmax</h3>
          <ul class="def-list">
            <li><span class="def-term">vmin</span>: El valor más pequeño entre ancho y alto.</li>
            <li><span class="def-term">vmax</span>: El valor más grande.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Limitadores de Dimensiones</h2>
      <p class="section-desc">Propiedades para controlar los límites de tamaño de un elemento.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Min / Max Width</h3>
          <p>Define topes mínimos y máximos para el ancho.</p>
          <CodeBlock language="css" code=".container {
  width: 100%;
  max-width: 300px;
  min-width: 150px;
}" />
          <div class="demo-box">
            <div class="limit-box">Max 300px / Min 150px</div>
            <p class="text-muted">(Intenta redimensionar la ventana)</p>
          </div>
        </div>
        <div class="card info">
          <h3>Min / Max Height</h3>
          <p>Define topes para la altura.</p>
          <CodeBlock language="css" code=".banner {
  min-height: 400px; /* Asegura altura mínima */
  height: 50vh;      /* Altura ideal */
}" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
.px-box {
  width: 200px;
  background-color: #2b5581;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}

.rem-box {
  font-size: 1.5rem;
  background-color: #1e1e1e;
  border: 1px solid #42b883;
  color: #42b883;
  padding: 1rem;
  display: inline-block;
  border-radius: 4px;
}

.em-parent {
  font-size: 20px;
  padding: 10px;
  border: 1px solid #666;
  border-radius: 4px;
}

.em-child {
  font-size: 1.5em;
  margin-top: 10px;
  color: #e6a23c;
  border: 1px dashed #e6a23c;
  padding: 5px;
}

.percent-parent {
  width: 100%;
  border: 1px dashed #666;
  padding: 5px;
  border-radius: 4px;
  box-sizing: border-box;
}

.percent-child {
  width: 50%;
  background-color: #42b883;
  color: #1e1e1e;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
}

.auto-box {
  width: auto;
  background-color: #8a2be2;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}

.vw-box {
  background-color: #3178c6;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}

.limit-box {
  width: 100%;
  max-width: 300px;
  min-width: 150px;
  background-color: #d4c03d;
  color: #1e1e1e;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  border-radius: 4px;
}
</style>
