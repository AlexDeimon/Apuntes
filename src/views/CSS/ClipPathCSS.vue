<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Clip-path</h1>
      <p class="subtitle">Recorta cualquier elemento con formas geométricas: círculos, polígonos, rutas SVG y más, sin editar imágenes.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">La propiedad clip-path</h2>
      <p class="section-desc"><code>clip-path</code> crea una <strong>región de recorte</strong> que define qué parte del elemento se muestra. Lo que queda <strong>dentro</strong> de la región es visible; lo que queda <strong>fuera</strong> se oculta (incluyendo fondo, bordes, sombras y contenido).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis</h3>
          </div>
          <p>Acepta una <strong>forma básica</strong>, una <strong>referencia SVG</strong> o una <strong>caja de referencia</strong> (<em>geometry-box</em>) que indica sobre qué área se calculan los porcentajes.</p>
          <ul class="def-list">
            <li><span class="def-term">&lt;basic-shape&gt;:</span> inset(), circle(), ellipse(), polygon(), path()...</li>
            <li><span class="def-term">&lt;geometry-box&gt;:</span> border-box, padding-box, content-box, margin-box.</li>
            <li><span class="def-term">url():</span> referencia a un <code>&lt;clipPath&gt;</code> de SVG.</li>
            <li><span class="def-term">none:</span> sin recorte (valor por defecto).</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="css" code="/* Forma básica */
.avatar { clip-path: circle(50%); }

/* Forma + caja de referencia */
.card { clip-path: inset(0 round 16px) padding-box; }

/* Solo caja de referencia */
.contenido { clip-path: content-box; }

/* Referencia a un clipPath SVG */
.corazon { clip-path: url(#mi-clip); }

/* Quitar el recorte */
.normal { clip-path: none; }" />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>Valores disponibles</h3>
        </div>
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="v in valuesTable" :key="v.value">
                <td>{{ v.type }}</td>
                <td><code>{{ v.value }}</code></td>
                <td>{{ v.desc }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Galería de formas básicas</h2>
      <p class="section-desc">Cada caja es el mismo elemento (140 × 140 px) con un <code>clip-path</code> distinto.</p>
      <div class="preview-container">
        <div class="preview-header">Formas básicas</div>
        <div class="preview-content shape-gallery">
          <figure v-for="s in shapeGallery" :key="s.label" class="shape-item">
            <div class="shape-box" :style="{ clipPath: s.value }"></div>
            <figcaption>
              <strong>{{ s.label }}</strong>
              <code>{{ s.value }}</code>
            </figcaption>
          </figure>
        </div>
      </div>
      <CodeBlock language="css" code=".none     { clip-path: none; }
.inset    { clip-path: inset(10% 15% round 20px); }
.circle   { clip-path: circle(50%); }
.circle-2 { clip-path: circle(40% at 30% 40%); }
.ellipse  { clip-path: ellipse(50% 35%); }
.polygon  { clip-path: polygon(50% 0, 100% 100%, 0 100%); }
.path     { clip-path: path('M70 130 C20 90 10 50 35 30 C55 15 70 30 70 40 C70 30 85 15 105 30 C130 50 120 90 70 130Z'); }
.xywh     { clip-path: xywh(10% 10% 80% 80% round 16px); }
.rect     { clip-path: rect(10% 90% 90% 10% round 16px); }" />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Playground: inset, circle y ellipse</h2>
      <p class="section-desc">Elige una forma y mueve los controles. Los porcentajes se calculan respecto a la caja de referencia del elemento.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Controles</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="s in shapeTypes" :key="s" :class="['demo-btn', { active: basicShape === s }]" @click="basicShape = s">{{ s }}()</button>
            </div>
            <div class="slider-list">
              <label v-for="s in currentSliders" :key="s.key" class="slider-row">
                <span class="slider-name">{{ s.label }}</span>
                <input v-model.number="basic[s.key]" class="slider-input" type="range" min="0" :max="s.max" step="1" />
                <span class="slider-value">{{ basic[s.key] }}{{ s.unit }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="playground-output">
          <div class="preview-container">
            <div class="preview-header">Resultado</div>
            <div class="preview-content stage-center">
              <div class="clip-target" :style="{ clipPath: basicShapeString }"></div>
            </div>
          </div>
          <CodeBlock language="css" :code="basicShapeCode" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Editor de polygon()</h2>
      <p class="section-desc"><code>polygon()</code> es la forma más flexible: una lista de vértices <code>x y</code> unidos en orden. <strong>Arrastra los puntos</strong> para moldear tu figura, carga un preset o agrega y quita vértices.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Editor visual</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="p in polygonPresets" :key="p.name" :class="['demo-btn', { active: presetActive === p.name }]" @click="loadPreset(p)">{{ p.name }}</button>
            </div>
            <div ref="stage" class="poly-stage" @pointermove="onMove" @pointerup="endDrag" @pointercancel="endDrag">
              <div class="poly-shape" :style="{ clipPath: polygonString }"></div>
              <svg class="poly-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon :points="points.map(p => p[0] + ',' + p[1]).join(' ')" />
              </svg>
              <button v-for="(p, i) in points" :key="i" type="button" :class="['poly-handle', { selected: selectedIndex === i }]" :style="{ left: p[0] + '%', top: p[1] + '%' }" :aria-label="'Vértice ' + (i + 1)" @pointerdown.prevent="startDrag(i, $event)">
                <span>{{ i + 1 }}</span>
              </button>
            </div>
            <div class="btn-toggle-group mt-sm">
              <button class="demo-btn" @click="addPoint">+ Vértice</button>
              <button class="demo-btn" :disabled="points.length <= 3" @click="removePoint">− Vértice</button>
              <span class="poly-count">{{ points.length }} vértices</span>
            </div>
          </div>
        </div>
        <div class="playground-output">
          <div class="preview-container">
            <div class="preview-header">Resultado</div>
            <div class="preview-content stage-center">
              <div class="clip-target" :style="{ clipPath: polygonString }"></div>
            </div>
          </div>
          <CodeBlock language="css" :code="polygonCode" />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header"><h3>Tips para polygon()</h3></div>
        <ul class="def-list">
          <li><span class="def-term">Orden:</span> los vértices se unen en el orden escrito y el último se conecta con el primero automáticamente.</li>
          <li><span class="def-term">Unidades mixtas:</span> puedes combinar <code>%</code>, <code>px</code> y <code>calc()</code>, por ejemplo <code>calc(100% - 20px)</code>.</li>
          <li><span class="def-term">fill-rule:</span> <code>nonzero</code> (por defecto) o <code>evenodd</code> definen qué zonas cuentan como &laquo;dentro&raquo; cuando el trazo se cruza.</li>
          <li><span class="def-term">Herramienta:</span> <a href="https://bennettfeely.com/clippy/" target="_blank" rel="noopener">Clippy</a> genera polígonos visualmente.</li>
        </ul>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Caja de referencia (geometry-box)</h2>
      <p class="section-desc">Define sobre <strong>qué área</strong> se resuelven los porcentajes de la forma. Si se usa sola, la propia caja es la región de recorte. Por defecto se usa <code>border-box</code>.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Elige la caja</div>
          <div class="preview-content stage-center">
            <div class="btn-toggle-group">
              <button v-for="b in geometryBoxes" :key="b" :class="['demo-btn', { active: geoBox === b }]" @click="geoBox = b">{{ b }}</button>
            </div>
            <div class="geo-wrapper">
              <div class="geo-box" :style="{ clipPath: geoBox }">
                <span>Contenido</span>
              </div>
            </div>
            <p class="demo-note">Borde (14px) + padding (24px) + margin (18px, zona punteada).</p>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code="/* La región de recorte ES la caja indicada */
.elemento { clip-path: border-box; }   /* incluye el borde */
.elemento { clip-path: padding-box; }  /* sin borde */
.elemento { clip-path: content-box; }  /* solo el contenido */
.elemento { clip-path: margin-box; }   /* incluye el margen */

/* La caja cambia a qué se refieren los porcentajes */
.elemento { clip-path: circle(50%) content-box; }
.elemento { clip-path: inset(0 round 12px) padding-box; }" />
          <div class="card info mt-sm">
            <p><code>margin-box</code> permite que el elemento muestre su margen; por eso las sombras y bordes que sobresalen siguen visibles si no los recortas con otra caja.</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Transiciones y animaciones</h2>
      <p class="section-desc"><code>clip-path</code> es animable. Para interpolar dos <code>polygon()</code> deben tener <strong>el mismo número de vértices</strong>. Para <code>circle()</code>, <code>ellipse()</code> e <code>inset()</code> basta con usar la misma función.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Revelar color al pasar el mouse</div>
          <div class="preview-content stage-center">
            <div class="reveal-box">
              <img class="reveal-base" src="@/assets/images/portada.webp" alt="Imagen en escala de grises" />
              <img class="reveal-top" src="@/assets/images/portada.webp" alt="" />
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".reveal-box { position: relative; }

.reveal-base { filter: grayscale(100%); }

.reveal-top {
  position: absolute;
  inset: 0;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.6s ease;
}

.reveal-box:hover .reveal-top {
  clip-path: circle(75% at 50% 50%);
}" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Morphing: rombo ↔ cuadrado</div>
          <div class="preview-content stage-center">
            <div class="morph-shape" tabindex="0">Hover</div>
            <p class="demo-note">Ambos polígonos tienen 4 vértices.</p>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".morph {
  /* rombo */
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: clip-path 0.5s ease;
}

.morph:hover {
  /* cuadrado (mismos 4 vértices) */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Spotlight que sigue al cursor</div>
          <div class="preview-content stage-center">
            <div class="spot-box" @pointermove="onSpot" @pointerleave="spotActive = false" @pointerenter="spotActive = true">
              <img class="reveal-base" src="@/assets/images/portada.webp" alt="Imagen oscurecida" />
              <img
                class="spot-top"
                :style="{ clipPath: spotActive ? 'circle(70px at ' + spotX + 'px ' + spotY + 'px)' : 'circle(0px at ' + spotX + 'px ' + spotY + 'px)' }"
                src="@/assets/images/portada.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="javascript" code="const box = document.querySelector('.spot-box');
const top = box.querySelector('.spot-top');

box.addEventListener('pointermove', (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  top.style.clipPath = `circle(70px at ${x}px ${y}px)`;
});

box.addEventListener('pointerleave', () => {
  top.style.clipPath = 'circle(0px)';
});" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Recortes con SVG: url(#id)</h2>
      <p class="section-desc">Para formas complejas (curvas, varias figuras, texto) define un <code>&lt;clipPath&gt;</code> en SVG y referéncialo con <code>url()</code>. Con <code>clipPathUnits=&quot;objectBoundingBox&quot;</code> las coordenadas van de 0 a 1, y la forma <strong>escala con el elemento</strong>.</p>
      <svg width="0" height="0" class="svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="clip-corazon-demo" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.92 C0.08,0.6 -0.02,0.32 0.2,0.14 C0.36,0.02 0.5,0.14 0.5,0.24 C0.5,0.14 0.64,0.02 0.8,0.14 C1.02,0.32 0.92,0.6 0.5,0.92Z" />
          </clipPath>
        </defs>
      </svg>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Imagen recortada con un clipPath SVG</div>
          <div class="preview-content avatar-row">
            <img class="svg-clip svg-clip-sm" src="@/assets/images/portada.webp" alt="Imagen en forma de corazón pequeña" />
            <img class="svg-clip svg-clip-lg" src="@/assets/images/portada.webp" alt="Imagen en forma de corazón grande" />
          </div>
        </div>
        <div>
          <CodeBlock language="html" code='<svg width="0" height="0" aria-hidden="true">
  <defs>
    <clipPath id="clip-corazon" clipPathUnits="objectBoundingBox">
      <path d="M0.5,0.92 C0.08,0.6 -0.02,0.32 0.2,0.14
               C0.36,0.02 0.5,0.14 0.5,0.24
               C0.5,0.14 0.64,0.02 0.8,0.14
               C1.02,0.32 0.92,0.6 0.5,0.92Z" />
    </clipPath>
  </defs>
</svg>

<img class="corazon" src="foto.jpg" alt="Foto" />' />
          <CodeBlock language="css" code=".corazon { clip-path: url(#clip-corazon); }" />
        </div>
      </div><br><br>
      <div class="card warning">
        <div class="card-header"><h3>path() vs url() vs shape()</h3></div>
        <ul class="def-list">
          <li><span class="def-term">path():</span> usa coordenadas en <strong>px fijos</strong>: no escala con el elemento. Útil solo si el tamaño es constante.</li>
          <li><span class="def-term">url(#id):</span> escala con objectBoundingBox, pero requiere el SVG en el DOM.</li>
          <li><span class="def-term">shape():</span> función CSS nueva con comandos como line, curve y arc que acepta % y calc(); es la alternativa responsive a path() (soporte reciente, verifica en caniuse).</li>
        </ul>
        <CodeBlock language="css" code="/* shape(): ruta CSS responsive (navegadores recientes) */
.triangulo {
  clip-path: shape(
    from 50% 0%,
    line to 100% 100%,
    line to 0% 100%,
    close
  );
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Sombras y bordes con clip-path</h2>
      <p class="section-desc">El recorte también elimina <code>box-shadow</code>, <code>border</code> y <code>outline</code> que queden fuera de la región. Para conservar una sombra, aplícala con <code>filter: drop-shadow()</code> en un <strong>contenedor padre</strong>.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">box-shadow vs drop-shadow en el padre</div>
          <div class="preview-content shadow-demo">
            <figure class="shadow-item">
              <div class="shadow-shape sh-box"></div>
              <figcaption>box-shadow<br /><span class="text-danger">se recorta</span></figcaption>
            </figure>
            <figure class="shadow-item">
              <div class="shadow-parent">
                <div class="shadow-shape"></div>
              </div>
              <figcaption>drop-shadow (padre)<br /><span class="text-success">visible</span></figcaption>
            </figure>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code="/* La sombra se recorta junto con el elemento */
.forma {
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  box-shadow: 8px 8px 12px rgb(0 0 0 / 0.6);
}

/* La sombra se aplica al contenedor, fuera del recorte */
.contenedor {
  filter: drop-shadow(8px 8px 8px rgb(0 0 0 / 0.6));
}
.contenedor .forma {
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'filtros', text: 'Filtros (drop-shadow, backdrop-filter)' },
      { techId: 'css', moduleId: 'visual', text: 'Efectos Visuales' },
      { techId: 'css', moduleId: 'background', text: 'Background' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const valuesTable = [
  { type: '—', value: 'none', desc: 'No se crea ninguna ruta de recorte.' },
  { type: 'clip-source', value: 'url(#id)', desc: 'Referencia a un elemento SVG <clipPath>.' },
  { type: 'basic-shape', value: 'inset()', desc: 'Rectángulo definido por sus márgenes internos; admite round para esquinas redondeadas.' },
  { type: 'basic-shape', value: 'circle()', desc: 'Círculo definido por un radio y una posición (at).' },
  { type: 'basic-shape', value: 'ellipse()', desc: 'Elipse definida por dos radios y una posición.' },
  { type: 'basic-shape', value: 'polygon()', desc: 'Polígono con regla de relleno (nonzero/evenodd) y lista de vértices.' },
  { type: 'basic-shape', value: 'path()', desc: 'Ruta SVG en píxeles fijos, con regla de relleno opcional.' },
  { type: 'basic-shape', value: 'rect() / xywh()', desc: 'Rectángulos con esquinas redondeadas: por bordes (rect) o por posición y tamaño (xywh).' },
  { type: 'basic-shape', value: 'shape()', desc: 'Ruta con comandos CSS (line, curve, arc) que admite porcentajes y calc(). Soporte reciente.' },
  { type: 'geometry-box', value: 'border-box | padding-box | content-box | margin-box', desc: 'Caja de referencia para la forma o región de recorte por sí sola.' },
]

const shapeGallery = [
  { label: 'none', value: 'none' },
  { label: 'inset', value: 'inset(10% 15% round 20px)' },
  { label: 'circle', value: 'circle(50%)' },
  { label: 'circle at', value: 'circle(40% at 30% 40%)' },
  { label: 'ellipse', value: 'ellipse(50% 35%)' },
  { label: 'polygon', value: 'polygon(50% 0, 100% 100%, 0 100%)' },
  { label: 'path', value: "path('M70 130 C20 90 10 50 35 30 C55 15 70 30 70 40 C70 30 85 15 105 30 C130 50 120 90 70 130Z')" },
  { label: 'xywh', value: 'xywh(10% 10% 80% 80% round 16px)' },
  { label: 'rect', value: 'rect(10% 90% 90% 10% round 16px)' },
]

type BasicShape = 'inset' | 'circle' | 'ellipse'
const shapeTypes: BasicShape[] = ['circle', 'ellipse', 'inset']
const basicShape = ref<BasicShape>('circle')

const basic = reactive<Record<string, number>>({
  r: 50, cx: 50, cy: 50,
  rx: 50, ry: 35,
  t: 10, rt: 10, b: 10, l: 10, round: 20,
})

interface SliderDef { key: string; label: string; max: number; unit: string }

const sliderDefs: Record<BasicShape, SliderDef[]> = {
  circle: [
    { key: 'r', label: 'radio', max: 71, unit: '%' },
    { key: 'cx', label: 'at x', max: 100, unit: '%' },
    { key: 'cy', label: 'at y', max: 100, unit: '%' },
  ],
  ellipse: [
    { key: 'rx', label: 'radio x', max: 100, unit: '%' },
    { key: 'ry', label: 'radio y', max: 100, unit: '%' },
    { key: 'cx', label: 'at x', max: 100, unit: '%' },
    { key: 'cy', label: 'at y', max: 100, unit: '%' },
  ],
  inset: [
    { key: 't', label: 'top', max: 50, unit: '%' },
    { key: 'rt', label: 'right', max: 50, unit: '%' },
    { key: 'b', label: 'bottom', max: 50, unit: '%' },
    { key: 'l', label: 'left', max: 50, unit: '%' },
    { key: 'round', label: 'round', max: 50, unit: '%' },
  ],
}

const currentSliders = computed(() => sliderDefs[basicShape.value])

const basicShapeString = computed(() => {
  const p = basic
  if (basicShape.value === 'circle') return `circle(${p.r}% at ${p.cx}% ${p.cy}%)`
  if (basicShape.value === 'ellipse') return `ellipse(${p.rx}% ${p.ry}% at ${p.cx}% ${p.cy}%)`
  return `inset(${p.t}% ${p.rt}% ${p.b}% ${p.l}% round ${p.round}%)`
})

const basicShapeCode = computed(() => `.forma {\n  clip-path: ${basicShapeString.value};\n}`)

type Point = [number, number]
interface PolyPreset { name: string; points: Point[] }

const polygonPresets: PolyPreset[] = [
  { name: 'Triángulo', points: [[50, 0], [100, 100], [0, 100]] },
  { name: 'Rombo', points: [[50, 0], [100, 50], [50, 100], [0, 50]] },
  { name: 'Pentágono', points: [[50, 0], [100, 38], [82, 100], [18, 100], [0, 38]] },
  { name: 'Hexágono', points: [[25, 5], [75, 5], [100, 50], [75, 95], [25, 95], [0, 50]] },
  { name: 'Octágono', points: [[30, 0], [70, 0], [100, 30], [100, 70], [70, 100], [30, 100], [0, 70], [0, 30]] },
  { name: 'Estrella', points: [[50, 0], [61, 35], [98, 35], [68, 57], [79, 91], [50, 70], [21, 91], [32, 57], [2, 35], [39, 35]] },
  { name: 'Flecha', points: [[0, 20], [60, 20], [60, 0], [100, 50], [60, 100], [60, 80], [0, 80]] },
  { name: 'Cruz', points: [[35, 0], [65, 0], [65, 35], [100, 35], [100, 65], [65, 65], [65, 100], [35, 100], [35, 65], [0, 65], [0, 35], [35, 35]] },
  { name: 'Mensaje', points: [[0, 0], [100, 0], [100, 75], [75, 75], [50, 100], [25, 75], [0, 75]] },
]

const clonePoints = (pts: Point[]): Point[] => pts.map(p => [p[0], p[1]] as Point)

const points = ref<Point[]>(clonePoints(polygonPresets[3]!.points))
const presetActive = ref<string | null>('Hexágono')
const selectedIndex = ref<number | null>(null)
const dragIndex = ref<number | null>(null)
const stage = ref<HTMLElement | null>(null)

const clamp = (n: number) => Math.min(100, Math.max(0, n))

function loadPreset(p: PolyPreset) {
  points.value = clonePoints(p.points)
  presetActive.value = p.name
  selectedIndex.value = null
}

function startDrag(i: number, e: PointerEvent) {
  dragIndex.value = i
  selectedIndex.value = i
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}

function onMove(e: PointerEvent) {
  if (dragIndex.value === null || !stage.value) return
  const rect = stage.value.getBoundingClientRect()
  const x = clamp(Math.round(((e.clientX - rect.left) / rect.width) * 100))
  const y = clamp(Math.round(((e.clientY - rect.top) / rect.height) * 100))
  points.value[dragIndex.value] = [x, y]
  presetActive.value = null
}

function endDrag() {
  dragIndex.value = null
}

function addPoint() {
  const pts = points.value
  let longest = 0
  let maxLen = -1
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length]!
    const len = Math.hypot(q[0] - p[0], q[1] - p[1])
    if (len > maxLen) {
      maxLen = len
      longest = i
    }
  })
  const a = pts[longest]!
  const b = pts[(longest + 1) % pts.length]!
  pts.splice(longest + 1, 0, [Math.round((a[0] + b[0]) / 2), Math.round((a[1] + b[1]) / 2)])
  selectedIndex.value = null
  presetActive.value = null
}

function removePoint() {
  if (points.value.length <= 3) return
  const idx = selectedIndex.value ?? points.value.length - 1
  points.value.splice(idx, 1)
  selectedIndex.value = null
  presetActive.value = null
}

const fmt = (p: Point) => `${p[0]}% ${p[1]}%`

const polygonString = computed(() => `polygon(${points.value.map(fmt).join(', ')})`)

const polygonCode = computed(
  () => `.forma {\n  clip-path: polygon(\n${points.value.map(p => '    ' + fmt(p)).join(',\n')}\n  );\n}`,
)

const geometryBoxes = ['border-box', 'padding-box', 'content-box', 'margin-box']
const geoBox = ref('border-box')

const spotX = ref(0)
const spotY = ref(0)
const spotActive = ref(false)

function onSpot(e: PointerEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  spotX.value = Math.round(e.clientX - rect.left)
  spotY.value = Math.round(e.clientY - rect.top)
}
</script>
<style scoped>
.mt-sm { margin-top: 1rem; }

.btn-toggle-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  align-items: center;
}

.btn-toggle-group.mt-sm { margin-bottom: 0; }

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
.demo-btn:hover:not(:disabled) {
  background-color: var(--color-css);
  border-color: var(--color-css);
  color: #fff;
}

.demo-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.demo-note {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: center;
}

.stage-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider-list { display: flex; flex-direction: column; gap: 0.7rem; }

.slider-row {
  display: grid;
  grid-template-columns: 85px 1fr 55px;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.85rem;
}

.slider-name { font-family: monospace; color: var(--text-primary); }
.slider-value { font-family: monospace; color: var(--color-css); text-align: right; }
.slider-input { width: 100%; accent-color: var(--color-css); cursor: pointer; }

.playground-output { display: flex; flex-direction: column; gap: 1rem; }

.shape-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 1.5rem 1rem;
  justify-items: center;
}

.shape-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  max-width: 190px;
}

.shape-item figcaption {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.8rem;
  text-align: center;
}

.shape-item figcaption code {
  font-size: 0.68rem;
  color: var(--text-secondary);
  word-break: break-all;
  max-height: 3.2em;
  overflow: hidden;
}

.shape-box,
.clip-target {
  background: linear-gradient(135deg, var(--color-css), #a855f7);
}

.shape-box { width: 140px; height: 140px; }

.clip-target {
  width: 240px;
  max-width: 100%;
  aspect-ratio: 1;
  transition: clip-path 0.15s;
}

.poly-stage {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1;
  margin: 0 auto;
  background:
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 10% 10%,
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 10% 10%,
    rgba(0,0,0,0.25);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  touch-action: none;
  user-select: none;
}

.poly-shape {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.55), rgba(168,85,247,0.55));
}

.poly-outline {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.poly-outline polygon {
  fill: none;
  stroke: #fff;
  stroke-width: 0.6;
  stroke-dasharray: 2 1.5;
  vector-effect: non-scaling-stroke;
}

.poly-handle {
  position: absolute;
  width: 22px;
  height: 22px;
  padding: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid #fff;
  background: var(--color-css);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  touch-action: none;
}

.poly-handle:active { cursor: grabbing; }
.poly-handle.selected { background: #fbbf24; color: #1a1a1a; box-shadow: 0 0 0 4px rgba(251,191,36,0.3); }

.poly-count { font-size: 0.8rem; color: var(--text-secondary); margin-left: auto; font-family: monospace; }

.geo-wrapper {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}

.geo-box {
  margin: 18px;
  padding: 24px;
  border: 14px dashed rgba(251,191,36,0.8);
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  outline: 1px dotted rgba(255,255,255,0.35);
  outline-offset: 18px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  min-width: 170px;
  transition: clip-path 0.3s;
}

.reveal-box,
.spot-box {
  position: relative;
  width: 100%;
  max-width: 340px;
  border-radius: 8px;
  overflow: hidden;
  line-height: 0;
}

.spot-box { cursor: crosshair; touch-action: none; }

.reveal-base {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  filter: grayscale(100%);
}

.spot-box .reveal-base { filter: grayscale(100%) brightness(0.45); }

.reveal-top,
.spot-top {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reveal-top {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.6s ease;
}

.reveal-box:hover .reveal-top { clip-path: circle(75% at 50% 50%); }

.spot-top { clip-path: circle(0px at 0 0); transition: clip-path 0.12s ease-out; }

.morph-shape {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: clip-path 0.5s ease;
  cursor: pointer;
  outline: none;
}

.morph-shape:hover,
.morph-shape:focus-visible {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.svg-defs { position: absolute; width: 0; height: 0; overflow: hidden; }

.svg-clip {
  object-fit: cover;
  clip-path: url(#clip-corazon-demo);
}

.svg-clip-sm { width: 110px; aspect-ratio: 1; }
.svg-clip-lg { width: 220px; aspect-ratio: 1; }

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
  text-align: center;
}

.shadow-shape {
  width: 110px;
  height: 110px;
  background: linear-gradient(135deg, #fbbf24, #f97316);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.sh-box { box-shadow: 8px 8px 12px rgb(0 0 0 / 0.7); }

.shadow-parent { filter: drop-shadow(8px 8px 8px rgb(0 0 0 / 0.7)); }

@media (max-width: 600px) {
  .slider-row { grid-template-columns: 70px 1fr 50px; }
}
</style>
