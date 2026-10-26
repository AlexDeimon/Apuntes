<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Filtros en CSS</h1>
      <p class="subtitle">Efectos gráficos como desenfoque, cambio de color, sombras y glassmorphism aplicados directamente desde CSS.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">La propiedad filter</h2>
      <p class="section-desc">La propiedad <code>filter</code> aplica efectos gráficos (desenfoque, brillo, cambio de color...) al <strong>renderizado</strong> de un elemento antes de mostrarlo. Se usa comúnmente en imágenes, fondos, iconos y bordes. Afecta al elemento completo, incluidos sus hijos y su texto.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Sintaxis</h3></div>
          <ul class="def-list">
            <li><span class="def-term">none:</span> Valor por defecto, sin filtro.</li>
            <li><span class="def-term">función():</span> Una o varias funciones separadas por espacios.</li>
            <li><span class="def-term">url():</span> Referencia a un filtro SVG (<code>&lt;filter id="..."&gt;</code>).</li>
          </ul>
          <p>Si alguna función tiene un valor no válido, <strong>toda la declaración</strong> se ignora y se comporta como <code>none</code>. Las funciones con porcentaje aceptan también decimales: <code>50%</code> equivale a <code>0.5</code>.</p>
        </div>
        <div>
          <CodeBlock language="css" code="/* Una función */
img { filter: grayscale(100%); }

/* Varias funciones (se aplican en orden) */
img { filter: contrast(120%) saturate(1.4) blur(1px); }

/* Filtro SVG */
img { filter: url(#mi-filtro); }

/* Quitar filtros */
img { filter: none; }" />
        </div>
      </div>
      <br/><br/>
      <div class="card info">
        <div class="card-header"><h3>Funciones disponibles</h3></div>
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Función</th>
                <th>Valores</th>
                <th>Sin efecto</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fn in filterTable" :key="fn.name">
                <td><code>{{ fn.name }}</code></td>
                <td>{{ fn.values }}</td>
                <td><code>{{ fn.neutral }}</code></td>
                <td>{{ fn.desc }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Playground de Filtros</h2>
      <p class="section-desc">Ajusta cada función y observa el resultado en tiempo real. El CSS generado solo incluye las funciones que modificaste.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Controles</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="p in presets" :key="p.name" class="demo-btn" @click="applyPreset(p.values)">{{ p.name }}</button>
            </div>
            <div class="slider-list">
              <label v-for="s in sliders" :key="s.key" class="slider-row">
                <span class="slider-name">{{ s.label }}</span>
                <input v-model.number="filters[s.key]" class="slider-input" type="range" :min="s.min" :max="s.max" :step="s.step" />
                <span class="slider-value">{{ filters[s.key] }}{{ s.unit }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="playground-output">
          <div class="preview-container">
            <div class="preview-header">Resultado</div>
            <div class="preview-content playground-stage">
              <img class="playground-img" :style="{ filter: filterString }" src="@/assets/images/portada.webp" alt="Imagen con filtros aplicados" />
            </div>
          </div>
          <CodeBlock language="css" :code="`.imagen {\n  filter: ${filterString};\n}`" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Cada función en acción</h2>
      <p class="section-desc">Comparativa de todas las funciones aplicadas a la misma imagen.</p>
      <div class="preview-container">
        <div class="preview-header">Galería de filtros</div>
        <div class="preview-content filter-gallery">
          <figure v-for="g in gallery" :key="g.cls" class="gallery-item">
            <img :class="['gallery-img', g.cls]" src="@/assets/images/portada.webp" :alt="`Filtro ${g.code}`" />
            <figcaption><code>{{ g.code }}</code></figcaption>
          </figure>
        </div>
      </div>
      <CodeBlock language="css" code=".original    { filter: none; }
.blur        { filter: blur(3px); }
.brightness  { filter: brightness(160%); }
.contrast    { filter: contrast(200%); }
.grayscale   { filter: grayscale(100%); }
.hue-rotate  { filter: hue-rotate(180deg); }
.invert      { filter: invert(100%); }
.opacity     { filter: opacity(40%); }
.saturate    { filter: saturate(300%); }
.sepia       { filter: sepia(100%); }
.drop-shadow { filter: drop-shadow(6px 6px 4px rgb(0 0 0 / 0.7)); }" />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">drop-shadow() vs box-shadow</h2>
      <p class="section-desc"><code>box-shadow</code> dibuja la sombra siguiendo la <strong>caja rectangular</strong> del elemento. <code>drop-shadow()</code> sigue la <strong>forma real</strong> del contenido, respetando transparencias de PNG/SVG, <code>clip-path</code> y pseudo-elementos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Diferencias clave</h3></div>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>box-shadow</th>
                  <th>drop-shadow()</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Forma</td>
                  <td class="text-danger">Caja rectangular</td>
                  <td class="text-success">Contorno real (alpha)</td>
                </tr>
                <tr>
                  <td>spread</td>
                  <td class="text-success">Sí</td>
                  <td class="text-danger">No</td>
                </tr>
                <tr>
                  <td>inset</td>
                  <td class="text-success">Sí</td>
                  <td class="text-danger">No</td>
                </tr>
                <tr>
                  <td>Múltiples sombras</td>
                  <td>Separadas por coma</td>
                  <td>Encadenando funciones</td>
                </tr>
                <tr>
                  <td>Rendimiento</td>
                  <td class="text-success">Más ligero</td>
                  <td>Más costoso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".box-shadow {
  box-shadow: 8px 8px 6px rgb(0 0 0 / 0.6);
}

.drop-shadow {
  /* offset-x | offset-y | blur | color */
  filter: drop-shadow(8px 8px 6px rgb(0 0 0 / 0.6));
}

/* Varias sombras encadenadas */
.neon {
  filter: drop-shadow(0 0 4px #22d3ee)
          drop-shadow(0 0 12px #6366f1);
}" />
          <br />
          <div class="preview-container">
            <div class="preview-header">Demo: icono SVG transparente</div>
            <div class="preview-content shadow-demo">
              <figure class="shadow-item">
                <img class="shadow-icon sh-box" src="/Apuntes/v2/icons/css.svg" alt="Icono con box-shadow" />
                <figcaption>box-shadow</figcaption>
              </figure>
              <figure class="shadow-item">
                <img class="shadow-icon sh-drop" src="/Apuntes/v2/icons/css.svg" alt="Icono con drop-shadow" />
                <figcaption>drop-shadow()</figcaption>
              </figure>
              <figure class="shadow-item">
                <img class="shadow-icon sh-neon" src="/Apuntes/v2/icons/css.svg" alt="Icono con sombra neón" />
                <figcaption>neón</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Combinar filtros: el orden importa</h2>
      <p class="section-desc">Las funciones se aplican <strong>de izquierda a derecha</strong>: cada una recibe el resultado de la anterior. Cambiar el orden puede producir resultados totalmente distintos.</p>
      <div class="cards-grid">
        <div>
          <CodeBlock language="css" code="/* Primero sepia, luego rota el tono → color */
.orden-a {
  filter: sepia(100%) hue-rotate(160deg) saturate(250%);
}

/* Primero rota y satura, luego sepia → todo marrón */
.orden-b {
  filter: hue-rotate(160deg) saturate(250%) sepia(100%);
}" />
          <div class="card warning order-note">
            <div class="card-header"><h3>Truco: colorear iconos</h3></div>
            <p>Combinando <code>invert</code>, <code>sepia</code>, <code>saturate</code> y <code>hue-rotate</code> se puede teñir un icono negro de cualquier color sin editar el archivo. Hoy en día, para iconos SVG monocromáticos es preferible <code>mask-image</code> + <code>background-color</code>.</p>
          </div>
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: mismo filtro, distinto orden</div>
          <div class="preview-content order-demo">
            <figure class="gallery-item">
              <img class="gallery-img order-a" src="@/assets/images/portada.webp" alt="Orden A" />
              <figcaption><code>sepia → hue-rotate</code></figcaption>
            </figure>
            <figure class="gallery-item">
              <img class="gallery-img order-b" src="@/assets/images/portada.webp" alt="Orden B" />
              <figcaption><code>hue-rotate → sepia</code></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Transiciones y animaciones</h2>
      <p class="section-desc"><code>filter</code> es animable. Para que la transición sea fluida, ambos estados deben tener <strong>las mismas funciones en el mismo orden</strong>; si no, el navegador salta sin interpolar.</p>
      <div class="cards-grid">
        <div>
          <CodeBlock language="css" code=".card img {
  filter: grayscale(100%) brightness(80%);
  transition: filter 0.4s ease;
}

.card:hover img {
  filter: grayscale(0%) brightness(100%);
}

/* Animación continua */
@keyframes arcoiris {
  to { filter: hue-rotate(360deg); }
}

.logo {
  animation: arcoiris 4s linear infinite;
}

/* Respetar a usuarios sensibles al movimiento */
@media (prefers-reduced-motion: reduce) {
  .logo { animation: none; }
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: pasa el cursor sobre las imágenes</div>
          <div class="preview-content hover-demo">
            <figure class="hover-card hover-gray">
              <img src="@/assets/images/portada.webp" alt="Grayscale a color" />
              <figcaption>Gris → Color</figcaption>
            </figure>
            <figure class="hover-card hover-blur">
              <img src="@/assets/images/portada.webp" alt="Blur a nitido" />
              <figcaption>Blur → Nítido</figcaption>
            </figure>
            <figure class="hover-card hover-dim">
              <img src="@/assets/images/portada.webp" alt="Brillo" />
              <figcaption>Oscuro → Brillo</figcaption>
            </figure>
            <figure class="hover-card rainbow">
              <img src="@/assets/images/portada.webp" alt="Animacion hue-rotate" />
              <figcaption>hue-rotate animado</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">backdrop-filter</h2>
      <p class="section-desc">Mientras <code>filter</code> afecta al propio elemento, <code>backdrop-filter</code> aplica el efecto a <strong>lo que hay detrás</strong> de él. Es la base del efecto <em>glassmorphism</em>. Requiere que el elemento tenga un fondo (semi)transparente. Disponible en todos los navegadores modernos (Safari sin prefijo desde la v18).</p>
      <div class="cards-grid">
        <div>
          <CodeBlock language="css" code=".glass {
  background: rgb(255 255 255 / 0.12);
  border: 1px solid rgb(255 255 255 / 0.25);
  border-radius: 16px;
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%); /* Safari antiguo */
}

/* Fallback si no hay soporte */
@supports not (backdrop-filter: blur(1px)) {
  .glass { background: rgb(30 30 40 / 0.9); }
}" />
          <div class="card info order-note">
            <div class="card-header"><h3>Usos típicos</h3></div>
            <ul class="list">
              <li>Navbars fijas que desenfocan el contenido al hacer scroll.</li>
              <li>Modales y overlays con el fondo desenfocado.</li>
              <li>Tarjetas tipo cristal sobre fondos con imagen o gradiente.</li>
            </ul>
          </div>
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: glassmorphism</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="b in backdropOptions" :key="b.cls" :class="['demo-btn', { active: backdrop === b.cls }]" @click="backdrop = b.cls">{{ b.label }}</button>
            </div>
            <div class="glass-stage">
              <div class="blob blob-1"></div>
              <div class="blob blob-2"></div>
              <div class="blob blob-3"></div>
              <div :class="['glass-card', backdrop]">
                <span class="glass-title">Glass Card</span>
                <code class="glass-code">backdrop-filter: {{ currentBackdrop }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Filtros SVG con url()</h2>
      <p class="section-desc">Cuando las funciones predefinidas no alcanzan, <code>url()</code> permite referenciar un <code>&lt;filter&gt;</code> SVG con primitivas como <code>feColorMatrix</code>, <code>feTurbulence</code> o <code>feDisplacementMap</code>. Puede estar en el mismo HTML o en un archivo externo (<code>url(filtros.svg#duotono)</code>).</p>
      <div class="cards-grid">
        <div>
          <CodeBlock language="html" code='<svg width="0" height="0" aria-hidden="true">
  <!-- Duotono: mapea luces/sombras a 2 colores -->
  <filter id="duotono">
    <feColorMatrix type="matrix" values="
      0.6 0.3 0.1 0 0
      0.6 0.3 0.1 0 0
      0.6 0.3 0.1 0 0
      0   0   0   1 0" />
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.15 0.95" />
      <feFuncG type="table" tableValues="0.05 0.4" />
      <feFuncB type="table" tableValues="0.45 0.6" />
    </feComponentTransfer>
  </filter>

  <!-- Distorsión tipo agua -->
  <filter id="ondas">
    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" />
    <feDisplacementMap in="SourceGraphic" scale="25" />
  </filter>
</svg>' />
          <br />
          <CodeBlock language="css" code=".duotono { filter: url(#duotono); }
.ondas   { filter: url(#ondas); }

/* Se puede combinar con funciones CSS */
.mixto { filter: url(#ondas) contrast(130%); }" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: filtros SVG personalizados</div>
          <div class="preview-content svg-demo">
            <svg class="svg-defs" width="0" height="0" aria-hidden="true">
              <filter id="flt-duotono" color-interpolation-filters="sRGB">
                <feColorMatrix type="matrix" values="0.6 0.3 0.1 0 0  0.6 0.3 0.1 0 0  0.6 0.3 0.1 0 0  0 0 0 1 0" />
                <feComponentTransfer>
                  <feFuncR type="table" tableValues="0.15 0.95" />
                  <feFuncG type="table" tableValues="0.05 0.4" />
                  <feFuncB type="table" tableValues="0.45 0.6" />
                </feComponentTransfer>
              </filter>
              <filter id="flt-ondas">
                <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="ruido" />
                <feDisplacementMap in="SourceGraphic" in2="ruido" scale="25" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="flt-posterize" color-interpolation-filters="sRGB">
                <feComponentTransfer>
                  <feFuncR type="discrete" tableValues="0 0.33 0.66 1" />
                  <feFuncG type="discrete" tableValues="0 0.33 0.66 1" />
                  <feFuncB type="discrete" tableValues="0 0.33 0.66 1" />
                </feComponentTransfer>
              </filter>
            </svg>
            <figure class="gallery-item">
              <img class="gallery-img" src="@/assets/images/portada.webp" alt="Original" />
              <figcaption><code>original</code></figcaption>
            </figure>
            <figure class="gallery-item">
              <img class="gallery-img svg-duotono" src="@/assets/images/portada.webp" alt="Duotono" />
              <figcaption><code>url(#duotono)</code></figcaption>
            </figure>
            <figure class="gallery-item">
              <img class="gallery-img svg-ondas" src="@/assets/images/portada.webp" alt="Ondas" />
              <figcaption><code>url(#ondas)</code></figcaption>
            </figure>
            <figure class="gallery-item">
              <img class="gallery-img svg-posterize" src="@/assets/images/portada.webp" alt="Posterizado" />
              <figcaption><code>url(#posterizar)</code></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Modos de fusión (blend modes)</h2>
      <p class="section-desc">Complemento natural de los filtros: definen cómo se <strong>mezclan los colores</strong> de un elemento con lo que tiene debajo, igual que las capas de Photoshop o Figma.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Propiedades</h3></div>
          <ul class="def-list">
            <li><span class="def-term">mix-blend-mode:</span> Mezcla el elemento con el contenido que hay detrás.</li>
            <li><span class="def-term">background-blend-mode:</span> Mezcla las capas de <code>background</code> de un mismo elemento entre sí.</li>
            <li><span class="def-term">isolation: isolate:</span> Crea un nuevo contexto para que la mezcla no se extienda fuera del contenedor.</li>
          </ul>
          <CodeBlock language="css" code="/* Capa de color sobre una imagen */
.overlay {
  background: linear-gradient(135deg, #ec4899, #6366f1);
  mix-blend-mode: overlay;
}

/* Imagen + color en el mismo elemento */
.hero {
  background: url(foto.webp) center / cover, #0ea5e9;
  background-blend-mode: multiply;
}

/* Texto que se invierte sobre cualquier fondo */
.titulo { color: white; mix-blend-mode: difference; }" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: mix-blend-mode</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="m in blendModes" :key="m" :class="['demo-btn', { active: blendMode === m }]" @click="blendMode = m">{{ m }}</button>
            </div>
            <div class="blend-stage">
              <img class="blend-img" src="@/assets/images/portada.webp" alt="Imagen base" />
              <div :class="['blend-layer', `blend-${blendMode}`]"></div>
              <span class="blend-text">mix-blend-mode</span>
            </div>
            <p class="demo-note">Capa de gradiente con <code>mix-blend-mode: {{ blendMode }}</code></p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Rendimiento, accesibilidad y efectos secundarios</h2>
      <p class="section-desc">Los filtros son potentes pero tienen un coste de renderizado y algunos efectos colaterales que conviene conocer.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header"><h3>Efectos secundarios</h3></div>
          <ul class="list">
            <li>Cualquier <code>filter</code> o <code>backdrop-filter</code> distinto de <code>none</code> crea un nuevo <strong>stacking context</strong> (afecta a <code>z-index</code>).</li>
            <li>También crea un <strong>containing block</strong>: los hijos con <code>position: fixed</code> pasan a posicionarse respecto al elemento filtrado y no respecto al viewport.</li>
            <li><code>blur()</code> extiende el desenfoque fuera de los bordes; usa <code>overflow: hidden</code> en el contenedor para recortarlo.</li>
            <li><code>filter: opacity()</code> equivale a <code>opacity</code>, pero esta última suele estar mejor optimizada.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Buenas prácticas</h3></div>
          <ul class="list">
            <li><code>blur()</code> y <code>backdrop-filter</code> con radios grandes son costosos: evita aplicarlos sobre áreas enormes o muchas capas.</li>
            <li>Para animaciones usa <code>will-change: filter</code> solo cuando sea necesario.</li>
            <li>Asegura <strong>contraste suficiente</strong> en texto sobre fondos de cristal (WCAG 4.5:1).</li>
            <li>Respeta <code>prefers-reduced-motion</code> y <code>prefers-reduced-transparency</code>.</li>
            <li>No uses filtros para transmitir información importante: algunos usuarios usan modos de alto contraste.</li>
          </ul>
        </div>
      </div>
      <br />
      <CodeBlock language="css" code="/* Problema: el modal fixed queda atrapado dentro de .contenedor */
.contenedor { filter: blur(0); }
.contenedor .modal { position: fixed; inset: 0; } /* ¡relativo a .contenedor! */

/* Desactivar transparencias si el usuario lo prefiere */
@media (prefers-reduced-transparency: reduce) {
  .glass {
    backdrop-filter: none;
    background: rgb(20 20 30);
  }
}

/* Modo oscuro rápido (útil para iframes/mapas, no como sistema de temas) */
.mapa-oscuro {
  filter: invert(90%) hue-rotate(180deg);
}" />
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'visual', text: 'Efectos Visuales' },
      { techId: 'css', moduleId: 'background', text: 'Background' },
      { techId: 'css', moduleId: 'pseudo', text: 'Pseudo Clases & Elementos' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const filterTable = [
  { name: 'blur()', values: 'longitud (px, rem)', neutral: '0', desc: 'Desenfoque gaussiano. El valor es el radio de mezcla de píxeles.' },
  { name: 'brightness()', values: '% o número', neutral: '100%', desc: 'Brillo. 0% = negro, >100% = más brillante.' },
  { name: 'contrast()', values: '% o número', neutral: '100%', desc: 'Contraste. 0% = gris uniforme, >100% = más contraste.' },
  { name: 'drop-shadow()', values: 'x y blur color', neutral: '—', desc: 'Sombra que sigue el contorno real del contenido.' },
  { name: 'grayscale()', values: '0% – 100%', neutral: '0%', desc: 'Escala de grises. 100% = completamente gris.' },
  { name: 'hue-rotate()', values: 'ángulo (deg, turn)', neutral: '0deg', desc: 'Rota el tono en la rueda de color.' },
  { name: 'invert()', values: '0% – 100%', neutral: '0%', desc: 'Invierte los colores. 100% = negativo.' },
  { name: 'opacity()', values: '0% – 100%', neutral: '100%', desc: 'Transparencia. 0% = invisible.' },
  { name: 'saturate()', values: '% o número', neutral: '100%', desc: 'Saturación. 0% = sin color, >100% = sobresaturado.' },
  { name: 'sepia()', values: '0% – 100%', neutral: '0%', desc: 'Tono sepia envejecido.' },
  { name: 'url()', values: 'referencia SVG', neutral: '—', desc: 'Aplica un <filter> SVG personalizado.' },
]

type FilterKey = 'blur' | 'brightness' | 'contrast' | 'grayscale' | 'hueRotate' | 'invert' | 'opacity' | 'saturate' | 'sepia'

const defaults: Record<FilterKey, number> = {
  blur: 0, brightness: 100, contrast: 100, grayscale: 0, hueRotate: 0, invert: 0, opacity: 100, saturate: 100, sepia: 0,
}

const filters = reactive<Record<FilterKey, number>>({ ...defaults })

const sliders: { key: FilterKey; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: 'blur', label: 'blur', min: 0, max: 10, step: 0.5, unit: 'px' },
  { key: 'brightness', label: 'brightness', min: 0, max: 200, step: 5, unit: '%' },
  { key: 'contrast', label: 'contrast', min: 0, max: 200, step: 5, unit: '%' },
  { key: 'grayscale', label: 'grayscale', min: 0, max: 100, step: 5, unit: '%' },
  { key: 'hueRotate', label: 'hue-rotate', min: 0, max: 360, step: 5, unit: 'deg' },
  { key: 'invert', label: 'invert', min: 0, max: 100, step: 5, unit: '%' },
  { key: 'opacity', label: 'opacity', min: 0, max: 100, step: 5, unit: '%' },
  { key: 'saturate', label: 'saturate', min: 0, max: 300, step: 10, unit: '%' },
  { key: 'sepia', label: 'sepia', min: 0, max: 100, step: 5, unit: '%' },
]

const filterString = computed(() => {
  const parts = sliders
    .filter(s => filters[s.key] !== defaults[s.key])
    .map(s => `${s.label}(${filters[s.key]}${s.unit})`)
  return parts.length ? parts.join(' ') : 'none'
})

const presets: { name: string; values: Partial<Record<FilterKey, number>> }[] = [
  { name: 'Reset', values: {} },
  { name: 'Vintage', values: { sepia: 60, contrast: 110, brightness: 95, saturate: 80 } },
  { name: 'B&N dramático', values: { grayscale: 100, contrast: 160, brightness: 90 } },
  { name: 'Frío', values: { hueRotate: 190, saturate: 130, brightness: 105 } },
  { name: 'Vivo', values: { saturate: 220, contrast: 120 } },
  { name: 'Negativo', values: { invert: 100 } },
]

function applyPreset(values: Partial<Record<FilterKey, number>>) {
  Object.assign(filters, defaults, values)
}

const gallery = [
  { cls: 'f-none', code: 'none' },
  { cls: 'f-blur', code: 'blur(3px)' },
  { cls: 'f-brightness', code: 'brightness(160%)' },
  { cls: 'f-contrast', code: 'contrast(200%)' },
  { cls: 'f-grayscale', code: 'grayscale(100%)' },
  { cls: 'f-hue', code: 'hue-rotate(180deg)' },
  { cls: 'f-invert', code: 'invert(100%)' },
  { cls: 'f-opacity', code: 'opacity(40%)' },
  { cls: 'f-saturate', code: 'saturate(300%)' },
  { cls: 'f-sepia', code: 'sepia(100%)' },
  { cls: 'f-shadow', code: 'drop-shadow(...)' },
]

const backdropOptions = [
  { cls: 'bd-none', label: 'none', value: 'none' },
  { cls: 'bd-blur', label: 'blur', value: 'blur(12px)' },
  { cls: 'bd-glass', label: 'blur + saturate', value: 'blur(12px) saturate(180%)' },
  { cls: 'bd-gray', label: 'grayscale', value: 'grayscale(100%)' },
  { cls: 'bd-invert', label: 'invert', value: 'invert(100%)' },
]
const backdrop = ref('bd-glass')
const currentBackdrop = computed(() => backdropOptions.find(b => b.cls === backdrop.value)?.value ?? 'none')

const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']
const blendMode = ref('overlay')
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

.demo-note {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: center;
}

.order-note {
  margin-top: 1.2rem;
}

.slider-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.slider-row {
  display: grid;
  grid-template-columns: 95px 1fr 65px;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.85rem;
}

.slider-name {
  font-family: monospace;
  color: var(--text-primary);
}

.slider-value {
  font-family: monospace;
  color: var(--color-css);
  text-align: right;
}

.slider-input {
  width: 100%;
  accent-color: var(--color-css);
  cursor: pointer;
}

.playground-output {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.playground-stage {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.playground-img {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 10px;
  transition: filter 0.15s;
}

.filter-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

.gallery-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.gallery-item figcaption {
  font-size: 0.75rem;
  text-align: center;
}

.gallery-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
}

.f-blur { filter: blur(3px); }
.f-brightness { filter: brightness(160%); }
.f-contrast { filter: contrast(200%); }
.f-grayscale { filter: grayscale(100%); }
.f-hue { filter: hue-rotate(180deg); }
.f-invert { filter: invert(100%); }
.f-opacity { filter: opacity(40%); }
.f-saturate { filter: saturate(300%); }
.f-sepia { filter: sepia(100%); }
.f-shadow { filter: drop-shadow(6px 6px 4px rgb(0 0 0 / 0.7)); }

.shadow-demo {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
}

.shadow-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  font-family: monospace;
}

.shadow-icon {
  width: 80px;
  height: 80px;
}

.sh-box { box-shadow: 8px 8px 6px rgb(0 0 0 / 0.6); }
.sh-drop { filter: drop-shadow(8px 8px 6px rgb(0 0 0 / 0.6)); }
.sh-neon { filter: drop-shadow(0 0 4px #22d3ee) drop-shadow(0 0 12px #6366f1); }

.order-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.order-a { filter: sepia(100%) hue-rotate(160deg) saturate(250%); }
.order-b { filter: hue-rotate(160deg) saturate(250%) sepia(100%); }

.hover-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.hover-card {
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.hover-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: filter 0.4s ease, transform 0.4s ease;
}

.hover-card figcaption {
  position: absolute;
  bottom: 0;
  inset-inline: 0;
  padding: 0.35rem;
  font-size: 0.75rem;
  text-align: center;
  color: #fff;
  background: rgb(0 0 0 / 0.55);
}

.hover-gray img { filter: grayscale(100%); }
.hover-gray:hover img { filter: grayscale(0%); }

.hover-blur img { filter: blur(4px); transform: scale(1.05); }
.hover-blur:hover img { filter: blur(0); transform: scale(1); }

.hover-dim img { filter: brightness(45%); }
.hover-dim:hover img { filter: brightness(110%); }

.rainbow img { animation: arcoiris 4s linear infinite; }

@keyframes arcoiris {
  to { filter: hue-rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .rainbow img { animation: none; }
}

.glass-stage {
  position: relative;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a, #1e1b4b);
  display: flex;
  align-items: center;
  justify-content: center;
}

.blob {
  position: absolute;
  border-radius: 50%;
}

.blob-1 {
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #ec4899, #f97316);
  top: 20px;
  left: 15%;
  animation: flotar 6s ease-in-out infinite;
}

.blob-2 {
  width: 110px;
  height: 110px;
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  bottom: 15px;
  right: 15%;
  animation: flotar 7s ease-in-out infinite reverse;
}

.blob-3 {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #a3e635, #10b981);
  top: 30px;
  right: 30%;
  animation: flotar 5s ease-in-out infinite;
}

@keyframes flotar {
  50% { transform: translate(15px, -15px); }
}

@media (prefers-reduced-motion: reduce) {
  .blob { animation: none; }
}

.glass-card {
  position: relative;
  width: 70%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-radius: 16px;
  background: rgb(255 255 255 / 0.12);
  border: 1px solid rgb(255 255 255 / 0.25);
  box-shadow: 0 8px 32px rgb(0 0 0 / 0.3);
  color: #fff;
}

.glass-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.glass-code {
  font-size: 0.75rem;
  color: #e0e7ff;
  background: transparent;
}

.bd-none { backdrop-filter: none; }
.bd-blur { -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); }
.bd-glass { -webkit-backdrop-filter: blur(12px) saturate(180%); backdrop-filter: blur(12px) saturate(180%); }
.bd-gray { -webkit-backdrop-filter: grayscale(100%); backdrop-filter: grayscale(100%); }
.bd-invert { -webkit-backdrop-filter: invert(100%); backdrop-filter: invert(100%); }

.svg-defs {
  position: absolute;
  width: 0;
  height: 0;
}

.svg-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.svg-duotono { filter: url(#flt-duotono); }
.svg-ondas { filter: url(#flt-ondas); }
.svg-posterize { filter: url(#flt-posterize); }

.blend-stage {
  position: relative;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  isolation: isolate;
}

.blend-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blend-layer {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #ec4899, #6366f1 50%, #22d3ee);
}

.blend-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  mix-blend-mode: difference;
}

.blend-normal { mix-blend-mode: normal; opacity: 0.6; }
.blend-multiply { mix-blend-mode: multiply; }
.blend-screen { mix-blend-mode: screen; }
.blend-overlay { mix-blend-mode: overlay; }
.blend-darken { mix-blend-mode: darken; }
.blend-lighten { mix-blend-mode: lighten; }
.blend-color-dodge { mix-blend-mode: color-dodge; }
.blend-color-burn { mix-blend-mode: color-burn; }
.blend-hard-light { mix-blend-mode: hard-light; }
.blend-soft-light { mix-blend-mode: soft-light; }
.blend-difference { mix-blend-mode: difference; }
.blend-exclusion { mix-blend-mode: exclusion; }
.blend-hue { mix-blend-mode: hue; }
.blend-saturation { mix-blend-mode: saturation; }
.blend-color { mix-blend-mode: color; }
.blend-luminosity { mix-blend-mode: luminosity; }

@media (max-width: 600px) {
  .order-demo,
  .hover-demo,
  .svg-demo {
    grid-template-columns: 1fr;
  }

  .slider-row {
    grid-template-columns: 80px 1fr 55px;
  }
}
</style>
