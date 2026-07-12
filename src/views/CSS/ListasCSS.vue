<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Listas en CSS</h1>
      <p class="subtitle">Estilización y personalización de marcadores de listas, posicionamiento de viñetas y contadores CSS dinámicos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Tipo de Marcador (list-style-type)</h2>
      <p class="section-desc">La propiedad <code>list-style-type</code> establece el tipo de marcador (viñeta o número) que se muestra antes del texto en cada elemento de la lista (<code>&lt;li&gt;</code>).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Valores Comunes de Marcador</h3>
          </div>
          <p>Las listas no ordenadas (<code>&lt;ul&gt;</code>) suelen usar marcadores geométricos, mientras que las ordenadas (<code>&lt;ol&gt;</code>) usan numeraciones alfanuméricas. También se admiten caracteres de texto personalizados.</p>
          <ul class="def-list">
            <li><span class="def-term">none:</span> Sin marcador (muy común para menús de navegación).</li>
            <li><span class="def-term">disc:</span> Círculo relleno (predeterminado para <code>&lt;ul&gt;</code>).</li>
            <li><span class="def-term">circle / square:</span> Círculo vacío o cuadrado relleno.</li>
            <li><span class="def-term">decimal:</span> Números decimales iniciando en 1.</li>
            <li><span class="def-term">decimal-leading-zero:</span> Números con cero inicial (01, 02, etc.).</li>
            <li><span class="def-term">lower-roman / upper-roman:</span> Números romanos en minúscula o mayúscula.</li>
            <li><span class="def-term">lower-alpha / upper-alpha:</span> Letras minúsculas o mayúsculas.</li>
            <li><span class="def-term">"texto":</span> Cualquier carácter o emoji personalizado (por ejemplo, <code>"👉"</code>).</li>
          </ul>
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo Interactiva: list-style-type</div>
          <div class="preview-content">
            <div class="control-select">
              <label>Elige un estilo de marcador:</label><br>
              <select class="form-select" v-model="selectedStyleType">
                <option value="disc">disc (Predeterminado)</option>
                <option value="circle">circle</option>
                <option value="square">square</option>
                <option value="decimal">decimal</option>
                <option value="decimal-leading-zero">decimal-leading-zero</option>
                <option value="lower-roman">lower-roman</option>
                <option value="upper-roman">upper-roman</option>
                <option value="lower-alpha">lower-alpha</option>
                <option value="upper-alpha">upper-alpha</option>
                <option value="'✨ '">Carácter personalizado: '✨'</option>
                <option value="'🚀 '">Emoji personalizado: '🚀'</option>
                <option value="none">none (Ninguno)</option>
              </select>
            </div>
            <div class="demo-list-wrapper">
              <ul :style="{ listStyleType: selectedStyleType }" class="list">
                <li>Primer elemento de la lista.</li>
                <li>Segundo elemento con contenido un poco más largo.</li>
                <li>Tercer elemento para completar el ejemplo.</li>
              </ul>
            </div>
            <CodeBlock language="css" :code="`ul {
  list-style-type: ${selectedStyleType};
}`" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Posicionamiento del Marcador (list-style-position)</h2>
      <p class="section-desc">La propiedad <code>list-style-position</code> especifica si la viñeta se coloca dentro o fuera del bloque de contenido del elemento de lista.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Diferencia entre Inside y Outside</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">outside:</span> El marcador se coloca fuera del elemento de lista. El texto se alinea verticalmente a la izquierda, dejando el marcador en el margen. (Es el valor predeterminado).</li>
            <li><span class="def-term">inside:</span> El marcador se integra dentro del bloque de texto, comportándose como si fuera la primera palabra del párrafo. Las líneas siguientes se ajustan debajo del marcador.</li>
          </ul>
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: list-style-position</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: selectedPosition === 'outside' }]" @click="selectedPosition = 'outside'">Outside (Fuera)</button>
              <button :class="['demo-btn', { active: selectedPosition === 'inside' }]" @click="selectedPosition = 'inside'">Inside (Dentro)</button>
            </div>
            <div class="demo-list-wrapper boundary-drawn">
              <ul :style="{ listStylePosition: selectedPosition}" class="list">
                <li>Elemento con marcador. Nota cómo si el texto de la línea se alarga mucho y da un salto, la alineación cambia según la propiedad seleccionada.</li>
                <li>Otro elemento para evidenciar el comportamiento de los bordes.</li>
              </ul>
            </div>
            <CodeBlock language="css" :code="`ul {\n  list-style-position: ${selectedPosition};\n}`" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Imagen de Marcador y Shorthand</h2>
      <p class="section-desc">Puedes sustituir las viñetas predeterminadas por una imagen externa o declarar todas las propiedades en una sola línea.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Imagen de Marcador (list-style-image)</h3>
          </div>
          <p>Permite enlazar una imagen SVG, PNG o GIF para usarla como viñeta.</p>
          <CodeBlock language="css" code="ul {
  /* Enlazar imagen */
  list-style-image: url('/icons/star.svg');
}" />
          <p>⚠️ <strong>Nota:</strong> <code>list-style-image</code> es difícil de controlar respecto a tamaño, posición y alineación con el texto. En la actualidad, suele preferirse el pseudo-elemento <code>::marker</code>.</p>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Taquigrafía (list-style Shorthand)</h3>
          </div>
          <p>Permite definir <code>list-style-type</code>, <code>list-style-position</code> y <code>list-style-image</code> en una sola declaración, en cualquier orden:</p>
          <CodeBlock language="css" code="ul {
  /* Tipo, posición y opcionalmente imagen */
  list-style: square inside;
}

ol {
  /* Solo tipo */
  list-style: lower-roman;
}

nav ul {
  /* Eliminar marcadores por completo */
  list-style: none;
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Estilos Modernos con ::marker</h2>
      <p class="section-desc">El pseudo-elemento <code>::marker</code> permite seleccionar y estilizar la viñeta o número de un elemento de lista de forma independiente del texto.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>¿Qué propiedades admite?</h3>
          </div>
          <p>Dado que el marcador se genera de forma especial, solo admite un conjunto limitado de propiedades CSS:</p>
          <ul class="def-list">
            <li><span class="def-term">color:</span> Cambia el color del marcador sin alterar el texto.</li>
            <li><span class="def-term">font-properties:</span> Modifica tamaño, peso y familia tipográfica (<code>font-size</code>, <code>font-weight</code>).</li>
            <li><span class="def-term">content:</span> Cambia el contenido dinámicamente por texto, números o emojis.</li>
            <li><span class="def-term">transition / animation:</span> Permite efectos interactivos.</li>
          </ul>
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo Interactiva: ::marker customizer</div>
          <div class="preview-content">
            <div>
              <div>
                <label>Color del Marcador: </label><br>
                <input type="color" v-model="markerColor" />
              </div>
              <div>
                <label>Tamaño del Marcador ({{ markerSize }}rem): </label><br>
                <input type="range" min="0.8" max="2.5" step="0.1" v-model="markerSize" />
              </div>
            </div>
            <div class="demo-list-wrapper">
              <ul class="custom-marker-list">
                <li :style="customMarkerStyle">Elemento con viñeta estilizada.</li>
                <li :style="customMarkerStyle">Fíjate que el texto permanece del color original.</li>
              </ul>
            </div>
            <CodeBlock language="css" :code="`li::marker {
  color: ${markerColor};
  font-size: ${markerSize}rem;
  content: '★ ';
}`" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Contadores CSS (Estructuras Complejas)</h2>
      <p class="section-desc">Los contadores CSS son variables numéricas cuyos valores pueden incrementarse mediante reglas CSS. Son ideales para enumerar capítulos, pasos complejos o listas anidadas personalizadas sin usar marcadores tradicionales.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Propiedades Clave</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">counter-reset:</span> Inicializa o restablece uno o más contadores (usualmente se decl
              ara en el elemento contenedor padre).</li>
            <li><span class="def-term">counter-increment:</span> Incrementa el valor del contador en cada coincidencia (se declara en el elemento a repetir).</li>
            <li><span class="def-term">counter():</span> Función utilizada en la propiedad <code>content</code> (junto con <code>::before</code> o <code>::marker</code>) para imprimir el valor.</li>
          </ul>
        </div>
        <div class="preview-container">
          <div class="preview-header">Ejemplo Visual: Lista de Pasos</div>
          <div class="preview-content">
            <div class="counter-steps-container">
              <div class="step-card">
                <span class="step-badge"></span>
                <div class="step-content">
                  <h4>Preparar Entorno</h4>
                  <p>Instala las dependencias y configura los archivos base.</p>
                </div>
              </div>
              <div class="step-card">
                <span class="step-badge"></span>
                <div class="step-content">
                  <h4>Escribir Código</h4>
                  <p>Implementa los controladores y componentes principales.</p>
                </div>
              </div>
              <div class="step-card">
                <span class="step-badge"></span>
                <div class="step-content">
                  <h4>Pruebas & Despliegue</h4>
                  <p>Ejecuta los tests unitarios y sube a producción.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card recommended" style="margin-top: 1.5rem;">
        <div class="card-header">
          <h3>Código CSS para Contadores</h3>
        </div>
        <p>A continuación se detalla cómo estructurar el código CSS para reproducir el comportamiento de contador de la demo anterior:</p>
        <CodeBlock language="css" code="/* 1. Inicializar el contador en el contenedor padre */
.counter-steps-container {
  counter-reset: paso-contador 0;
}

/* 2. Incrementar el contador en cada tarjeta de paso */
.step-card {
  counter-increment: paso-contador;
}

/* 3. Mostrar el valor del contador en un elemento generado */
.step-badge::before {
  content: 'Paso ' counter(paso-contador, decimal-leading-zero);
  font-weight: bold;
  color: #3b82f6;
}" />
      </div>
    </section>

    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'listas', text: 'Etiquetas de Listas en HTML' },
      { techId: 'css', moduleId: 'pseudo', text: 'Pseudo Clases & Pseudo Elementos' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

// --- States for list-style-type simulator ---
const selectedStyleType = ref('disc')

// --- States for list-style-position comparison ---
const selectedPosition = ref('outside')

// --- States for ::marker customizer ---
const markerColor = ref('#3b82f6')
const markerSize = ref(1.2)

const customMarkerStyle = computed(() => {
  return {
    '--marker-color': markerColor.value,
    '--marker-size': `${markerSize.value}rem`
  }
})
</script>

<style scoped>
.demo-list-wrapper {
  padding: 1.2rem;
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  margin-bottom: 1.2rem;
}

/* Position simulation style */
.btn-toggle-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.demo-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s;
}

.demo-btn.active, .demo-btn:hover {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.boundary-drawn li {
  border: 1px dashed rgba(59, 130, 246, 0.4);
  padding: 0.4rem;
  margin-bottom: 0.8rem;
  background-color: rgba(59, 130, 246, 0.05);
}

.custom-marker-list {
  padding-left: 2rem;
}

.custom-marker-list li {
  margin-bottom: 0.6rem;
}

.custom-marker-list li::marker {
  color: var(--marker-color);
  font-size: var(--marker-size);
  content: "★ ";
}

.counter-steps-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  counter-reset: paso-contador 0;
  width: 100%;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  counter-increment: paso-contador;
  position: relative;
}

.step-badge {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  background-color: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
}

.step-badge::before {
  content: "Paso " counter(paso-contador, decimal-leading-zero);
  font-weight: bold;
  color: #60a5fa;
}

.step-content h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.05rem;
  color: var(--text-primary);
}

.step-content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
