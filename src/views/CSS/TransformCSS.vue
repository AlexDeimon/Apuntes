<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Transform</h1>
      <p class="subtitle">Traslada, escala, rota y sesga elementos, también en 3D, sin alterar el flujo del documento.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">La propiedad transform</h2>
      <p class="section-desc"><code>transform</code> modifica el <strong>espacio de coordenadas</strong> del elemento: puede trasladarse, rotarse, escalarse o sesgarse según los valores indicados. Es un cambio puramente <strong>visual</strong>: el elemento sigue ocupando su espacio original en el layout y no empuja a sus vecinos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Cómo funciona</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Sin efecto en el flujo:</span> los demás elementos no se mueven. Lo que ves desplazado sigue &laquo;ocupando&raquo; su lugar original.</li>
            <li><span class="def-term">Varias funciones:</span> se escriben separadas por espacios y se aplican <strong>en orden</strong>.</li>
            <li><span class="def-term">Porcentajes:</span> en translate() se calculan sobre el <strong>tamaño del propio elemento</strong>, no del padre.</li>
            <li><span class="def-term">Solo algunos elementos:</span> display: inline (no reemplazado) y la mayoría de elementos de tabla internos no se transforman. Usa inline-block.</li>
            <li><span class="def-term">Rendimiento:</span> es de las pocas propiedades que el navegador anima directamente en la GPU, sin recalcular el layout.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="css" code="/* Una función */
.caja { transform: rotate(15deg); }

/* Varias funciones (se aplican en orden) */
.caja { transform: translate(40px, 10px) rotate(15deg) scale(1.2); }

/* Quitar la transformación */
.caja { transform: none; }

/* Punto de anclaje de la transformación */
.caja { transform-origin: top left; }" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Playground 2D</h2>
      <p class="section-desc">Combina las funciones y observa el resultado. El recuadro punteado muestra la <strong>posición original</strong>. También verás la <strong>matriz</strong> que el navegador calcula internamente.</p>
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
                <input v-model.number="t[s.key]" class="slider-input" type="range" :min="s.min" :max="s.max" :step="s.step" />
                <span class="slider-value">{{ t[s.key] }}{{ s.unit }}</span>
              </label>
            </div>
            <div class="origin-picker">
              <span class="slider-name">transform-origin</span>
              <div class="origin-grid">
                <button v-for="o in origins" :key="o.value" type="button" :class="['origin-cell', { active: origin === o.value }]" :title="o.value" @click="origin = o.value"></button>
              </div>
              <span class="slider-value origin-label">{{ origin }}</span>
            </div>
          </div>
        </div>
        <div class="playground-output">
          <div class="preview-container">
            <div class="preview-header">Resultado</div>
            <div class="preview-content tf-stage">
              <div class="tf-ghost"></div>
              <div ref="playEl" class="tf-box" :style="{ transform: transformString, transformOrigin: origin }">Caja</div>
            </div>
          </div>
          <CodeBlock language="css" :code="playgroundCode" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Funciones 2D</h2>
      <p class="section-desc">Las cuatro transformaciones básicas. En cada ejemplo, el recuadro punteado es la posición original.</p>
      <div v-for="g in groups" :key="g.id" class="group-block">
        <h3 class="group-title"><code>{{ g.title }}</code></h3>
        <p class="group-desc" v-html="g.desc"></p>
        <div class="cards-grid">
          <div class="preview-container">
            <div class="preview-header">{{ g.title }}</div>
            <div class="preview-content fn-grid">
              <figure v-for="it in g.items" :key="it.label" class="fn-cell">
                <div class="fn-stage">
                  <div class="fn-ghost"></div>
                  <div class="fn-box" :style="{ transform: it.value }"></div>
                </div>
                <figcaption><code>{{ it.label }}</code></figcaption>
              </figure>
            </div>
          </div>
          <div>
            <CodeBlock language="css" :code="g.code" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">transform-origin</h2>
      <p class="section-desc">Define el <strong>punto fijo</strong> alrededor del cual se rota, escala o sesga el elemento. Por defecto es <code>50% 50%</code> (el centro). Elige un punto y mueve el ángulo: el punto amarillo es el origen.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Origen de la rotación</div>
          <div class="preview-content stage-center">
            <div class="origin-demo">
              <div class="origin-wrap">
                <div class="origin-box" :style="{ transform: 'rotate(' + originAngle + 'deg)', transformOrigin: originDemo }"></div>
                <span class="origin-dot" :style="originDotStyle"></span>
              </div>
            </div>
            <div class="origin-controls">
              <div class="origin-grid">
                <button v-for="o in origins" :key="o.value" type="button" :class="['origin-cell', { active: originDemo === o.value }]" :title="o.value" @click="originDemo = o.value"></button>
              </div>
              <label class="slider-row angle-row">
                <span class="slider-name">ángulo</span>
                <input v-model.number="originAngle" class="slider-input" type="range" min="0" max="360" step="5" />
                <span class="slider-value">{{ originAngle }}deg</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" :code="originCode" />
          <CodeBlock language="css" code="/* Valores aceptados */
transform-origin: center;          /* 50% 50% (por defecto) */
transform-origin: top left;        /* esquina superior izquierda */
transform-origin: 100% 0;          /* esquina superior derecha */
transform-origin: 20px 40px;       /* medidas absolutas */
transform-origin: center bottom;   /* base del elemento */

/* En 3D admite un tercer valor (eje Z) */
transform-origin: 50% 50% -100px;" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">El orden importa</h2>
      <p class="section-desc">Cada función transforma el <strong>sistema de coordenadas</strong> del elemento. Si primero <code>rotate()</code> gira los ejes, el siguiente <code>translate()</code> se mueve a lo largo de los ejes ya girados. Cambiar el orden da resultados distintos.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">translateX(80px) rotate(45deg)</div>
          <div class="preview-content order-stage">
            <div class="order-ghost"></div>
            <div class="order-box ob-a">1º mover<br />2º girar</div>
          </div>
        </div>
        <div class="preview-container">
          <div class="preview-header">rotate(45deg) translateX(80px)</div>
          <div class="preview-content order-stage">
            <div class="order-ghost"></div>
            <div class="order-box ob-b">1º girar<br />2º mover</div>
          </div>
        </div>
      </div>
      <CodeBlock language="css" code="/* El elemento se mueve 80px a la derecha y luego gira sobre su centro */
.a { transform: translateX(80px) rotate(45deg); }

/* El elemento gira y luego se mueve 80px a lo largo del eje ya girado (diagonal) */
.b { transform: rotate(45deg) translateX(80px); }" />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Propiedades individuales: translate, rotate, scale</h2>
      <p class="section-desc">Los navegadores modernos permiten escribir cada transformación en su <strong>propia propiedad</strong>. Se pueden animar y cambiar de forma independiente sin reescribir toda la lista de <code>transform</code>.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Activa cada propiedad por separado</div>
          <div class="preview-content stage-center">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: indiv.t }]" @click="indiv.t = !indiv.t">translate</button>
              <button :class="['demo-btn', { active: indiv.r }]" @click="indiv.r = !indiv.r">rotate</button>
              <button :class="['demo-btn', { active: indiv.s }]" @click="indiv.s = !indiv.s">scale</button>
            </div>
            <div class="indiv-stage">
              <div :class="['indiv-box', { 'is-t': indiv.t, 'is-r': indiv.r, 'is-s': indiv.s }]">★</div>
            </div>
            <p class="demo-note">Cada una tiene su propia duración de transición.</p>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".caja {
  translate: 0 0;
  rotate: 0deg;
  scale: 1;
  transition: translate 0.4s, rotate 0.8s, scale 0.3s;
}

.caja.activa {
  translate: 60px 0;   /* x y */
  rotate: 90deg;
  scale: 1.4;          /* o: scale: 1.4 0.8 */
}

/* Rotar en 3D con un eje */
.caja { rotate: 1 1 0 45deg; }

/* Ventaja: con 'transform' habría que reescribir las tres
   funciones para cambiar solo una */" /><br><br>
          <div class="card info">
            <p>Orden fijo de aplicación: <code>translate</code> → <code>rotate</code> → <code>scale</code> → <code>transform</code>, sin importar el orden en que las escribas.</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Transformaciones 3D</h2>
      <p class="section-desc">Para dar profundidad se añade una <strong>perspectiva</strong> al contenedor y se rota sobre los ejes <code>X</code>, <code>Y</code> y <code>Z</code>. Cuanto menor sea el valor de <code>perspective</code>, más exagerado es el efecto.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Controles 3D</div>
          <div class="preview-content">
            <div class="slider-list">
              <label v-for="s in sliders3d" :key="s.key" class="slider-row">
                <span class="slider-name">{{ s.label }}</span>
                <input v-model.number="r3[s.key]" class="slider-input" type="range" :min="s.min" :max="s.max" :step="s.step" :disabled="s.key === 'persp' && !usePersp" />
                <span class="slider-value">{{ s.key === 'persp' && !usePersp ? 'none' : r3[s.key] + s.unit }}</span>
              </label>
              <label class="check-row">
                <input v-model="usePersp" type="checkbox" />
                <span>Activar perspective</span>
              </label>
            </div><br>
            <div class="btn-toggle-group">
              <button class="demo-btn" @click="reset3d">Reset</button>
            </div>
          </div>
        </div>
        <div class="playground-output">
          <div class="preview-container">
            <div class="preview-header">Resultado</div>
            <div class="preview-content scene3d" :style="{ perspective: usePersp ? r3.persp + 'px' : 'none' }">
              <div class="card3d" :style="{ transform: transform3d }">
                <strong>3D</strong>
                <small>rotateX · rotateY · rotateZ</small>
              </div>
            </div>
          </div>
          <CodeBlock language="css" :code="code3d" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Funciones 3D</h3>
          </div>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Función</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="f in fn3d" :key="f.name">
                  <td><code>{{ f.name }}</code></td>
                  <td>{{ f.desc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Propiedades relacionadas</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">perspective:</span> en el <strong>padre</strong>; define la distancia de la cámara a todos sus hijos.</li>
            <li><span class="def-term">perspective-origin:</span> punto de vista (por defecto el centro).</li>
            <li><span class="def-term">perspective():</span> función dentro de transform; afecta solo a ese elemento.</li>
            <li><span class="def-term">transform-style:</span> preserve-3d mantiene el 3D de los hijos; con flat (por defecto) se aplanan.</li>
            <li><span class="def-term">backface-visibility:</span> hidden oculta la cara trasera cuando el elemento queda de espaldas.</li>
          </ul>
        </div>
      </div>
      <h3 class="subsection-title">Cubo 3D con preserve-3d</h3>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Cubo</div>
          <div class="preview-content">
            <div class="cube-scene">
              <div class="cube" :class="{ spin: cubeSpin }" :style="cubeSpin ? {} : { transform: 'rotateX(' + cube.x + 'deg) rotateY(' + cube.y + 'deg)' }">
                <div class="face f1">1</div>
                <div class="face f2">2</div>
                <div class="face f3">3</div>
                <div class="face f4">4</div>
                <div class="face f5">5</div>
                <div class="face f6">6</div>
              </div>
            </div>
            <div class="slider-list">
              <label class="slider-row">
                <span class="slider-name">rotateX</span>
                <input v-model.number="cube.x" class="slider-input" type="range" min="-180" max="180" step="5" :disabled="cubeSpin" />
                <span class="slider-value">{{ cube.x }}deg</span>
              </label>
              <label class="slider-row">
                <span class="slider-name">rotateY</span>
                <input v-model.number="cube.y" class="slider-input" type="range" min="-180" max="180" step="5" :disabled="cubeSpin" />
                <span class="slider-value">{{ cube.y }}deg</span>
              </label>
              <label class="check-row">
                <input v-model="cubeSpin" type="checkbox" />
                <span>Rotación automática (animation)</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".escena { perspective: 600px; }

.cubo {
  position: relative;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;      /* clave para el 3D */
}

.cara {
  position: absolute;
  inset: 0;
}

/* Cada cara se gira y se aleja del centro la mitad del lado */
.f1 { transform: rotateY(0deg)   translateZ(60px); }
.f2 { transform: rotateY(90deg)  translateZ(60px); }
.f3 { transform: rotateY(180deg) translateZ(60px); }
.f4 { transform: rotateY(-90deg) translateZ(60px); }
.f5 { transform: rotateX(90deg)  translateZ(60px); }
.f6 { transform: rotateX(-90deg) translateZ(60px); }

/* Animación continua */
@keyframes girar {
  from { transform: rotateX(-20deg) rotateY(0deg); }
  to   { transform: rotateX(-20deg) rotateY(360deg); }
}
.cubo.spin { animation: girar 8s linear infinite; }" />
        </div>
      </div>
      <h3 class="subsection-title">Tarjeta que se voltea (backface-visibility)</h3>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Pasa el mouse o enfoca con Tab</div>
          <div class="preview-content stage-center">
            <div class="flip-card" tabindex="0">
              <div class="flip-inner">
                <div class="flip-face flip-front">
                  <strong>Frente</strong>
                  <small>Hover para voltear</small>
                </div>
                <div class="flip-face flip-back">
                  <strong>Reverso</strong>
                  <small>backface-visibility: hidden</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".flip-card {
  width: 220px;
  height: 140px;
  perspective: 800px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s;
}

.flip-card:hover .flip-inner,
.flip-card:focus-visible .flip-inner {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;       /* oculta la cara de espaldas */
}

.flip-back { transform: rotateY(180deg); }" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">matrix() y matrix3d()</h2>
      <p class="section-desc">Todas las funciones anteriores se reducen a una <strong>matriz</strong>. <code>matrix(a, b, c, d, tx, ty)</code> es la forma compacta de una transformación 2D. Rara vez se escribe a mano, pero es lo que devuelve <code>getComputedStyle()</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Equivalencias</h3>
          </div>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Parámetro</th>
                  <th>Controla</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>a</code></td><td>Escala en X (<code>scaleX</code>)</td></tr>
                <tr><td><code>b</code></td><td>Sesgo vertical (<code>skewY</code>) / seno de la rotación</td></tr>
                <tr><td><code>c</code></td><td>Sesgo horizontal (<code>skewX</code>) / -seno de la rotación</td></tr>
                <tr><td><code>d</code></td><td>Escala en Y (<code>scaleY</code>)</td></tr>
                <tr><td><code>tx</code>, <code>ty</code></td><td>Traslación en X e Y (<code>translate</code>)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code="/* Equivalencias de matrix(a, b, c, d, tx, ty) */
transform: matrix(1, 0, 0, 1, 50, 20);   /* translate(50px, 20px) */
transform: matrix(1.5, 0, 0, 1.5, 0, 0); /* scale(1.5) */
transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0); /* rotate(30deg) */

/* Leer la matriz calculada con JavaScript */
const el = document.querySelector('.caja');
const matriz = getComputedStyle(el).transform;
console.log(matriz); // matrix(0.866, 0.5, -0.5, 0.866, 0, 0)

/* DOMMatrix permite manipularla */
const m = new DOMMatrix(matriz);
console.log(m.a, m.b, m.e, m.f);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Casos de uso reales</h2>
      <p class="section-desc">Patrones de interfaz muy habituales construidos con <code>transform</code>.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Tarjeta que se eleva (hover)</div>
          <div class="preview-content stage-center">
            <div class="lift-card" tabindex="0">
              <strong>Plan Pro</strong>
              <span>Pasa el mouse</span>
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".tarjeta {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.tarjeta:hover,
.tarjeta:focus-visible {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 16px 30px rgb(0 0 0 / 0.35);
}" />
        </div>
      </div><br>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Centrado absoluto</div>
          <div class="preview-content">
            <div class="center-demo">
              <div class="center-item">translate(-50%, -50%)</div>
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".contenedor { position: relative; }

.elemento {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* se desplaza la mitad de SU tamaño */
}

/* Alternativa moderna */
.contenedor { display: grid; place-items: center; }" />
        </div>
      </div><br>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Zoom de imagen (hover)</div>
          <div class="preview-content stage-center">
            <div class="zoom-frame">
              <img class="zoom-img" src="@/assets/images/portada.webp" alt="Imagen con zoom al pasar el mouse" />
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".marco { overflow: hidden; border-radius: 12px; }

.marco img {
  display: block;
  width: 100%;
  transition: transform 0.5s ease;
}

.marco:hover img { transform: scale(1.15); }" />
        </div>
      </div><br>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Spinner de carga</div>
          <div class="preview-content stage-center">
            <div class="spinner-ring" role="status" aria-label="Cargando"></div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgb(255 255 255 / 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: girar 0.9s linear infinite;
}

@keyframes girar {
  to { transform: rotate(360deg); }
}" />
        </div>
      </div><br>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Menú hamburguesa → X (clic)</div>
          <div class="preview-content stage-center">
            <button type="button" class="burger" :class="{ open: burgerOpen }" :aria-expanded="burgerOpen" aria-label="Menú" @click="burgerOpen = !burgerOpen">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code=".burger { display: flex; flex-direction: column; gap: 5px; }

.bar {
  width: 26px;
  height: 3px;
  background: #fff;
  transition: transform 0.3s, opacity 0.3s;
}

/* gap 5px + altura 3px = 8px entre centros */
.burger.open .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger.open .bar:nth-child(2) { opacity: 0; }
.burger.open .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Animación, rendimiento y accesibilidad</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Animar con transform</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p><code>transform</code> y <code>opacity</code> se animan en el <strong>compositor</strong> (GPU) sin reflow ni repaint. Prefiérelas frente a <code>top</code>, <code>left</code>, <code>width</code> o <code>margin</code>.</p>
          <CodeBlock language="css" code="/* Error: Provoca reflow en cada fotograma */
.caja { transition: left 0.3s; }
.caja:hover { left: 100px; }

/* Correcto: Solo composición */
.caja { transition: transform 0.3s; }
.caja:hover { transform: translateX(100px); }

/* Avisar al navegador (úsalo con moderación) */
.caja-animada { will-change: transform; }" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Respeta prefers-reduced-motion</h3>
            <span class="badge danger">A11y</span>
          </div>
          <p>El movimiento intenso puede causar mareo a algunas personas. Desactiva o reduce las animaciones si el usuario lo pide en su sistema.</p>
          <CodeBlock language="css" code="@media (prefers-reduced-motion: reduce) {
  .caja,
  .tarjeta,
  .spinner {
    animation: none;
    transition: none;
  }
}" />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>Efectos secundarios a tener en cuenta</h3>
        </div>
        <ul class="def-list">
          <li><span class="def-term">Contexto de apilamiento:</span> cualquier transform distinto de none crea uno nuevo, lo que puede alterar el orden de z-index.</li>
          <li><span class="def-term">Bloque contenedor:</span> los descendientes con position: fixed pasan a posicionarse respecto al elemento transformado, no al viewport.</li>
          <li><span class="def-term">Desbordamiento:</span> el área transformada puede generar scroll, aunque el layout no cambie.</li>
          <li><span class="def-term">Texto borroso:</span> valores fraccionarios (por ejemplo translate(-50%, -50%) sobre tamaños impares) pueden dejar el texto o los bordes difuminados.</li>
          <li><span class="def-term">Clics y foco:</span> el área sensible sigue a la forma visual transformada; el elemento sigue ocupando su espacio original.</li>
        </ul>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Resumen de funciones</h2>
      <div class="card info">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th>Función</th>
                <th>Parámetros</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in summary" :key="f.name">
                <td><code>{{ f.name }}</code></td>
                <td>{{ f.params }}</td>
                <td><code>{{ f.example }}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'position', text: 'Posicionamiento' },
      { techId: 'css', moduleId: 'visual', text: 'Efectos Visuales' },
      { techId: 'css', moduleId: 'clippath', text: 'Clip-path' },
      { techId: 'css', moduleId: 'filtros', text: 'Filtros' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

type TKey = 'tx' | 'ty' | 'scale' | 'rotate' | 'skx' | 'sky'

const defaults: Record<TKey, number> = { tx: 0, ty: 0, scale: 1, rotate: 0, skx: 0, sky: 0 }
const t = reactive<Record<TKey, number>>({ ...defaults })

const sliders: { key: TKey; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: 'tx', label: 'translateX', min: -100, max: 100, step: 5, unit: 'px' },
  { key: 'ty', label: 'translateY', min: -80, max: 80, step: 5, unit: 'px' },
  { key: 'scale', label: 'scale', min: 0.3, max: 2, step: 0.1, unit: '' },
  { key: 'rotate', label: 'rotate', min: -180, max: 180, step: 5, unit: 'deg' },
  { key: 'skx', label: 'skewX', min: -60, max: 60, step: 5, unit: 'deg' },
  { key: 'sky', label: 'skewY', min: -60, max: 60, step: 5, unit: 'deg' },
]

const origins = [
  { value: 'top left' }, { value: 'top' }, { value: 'top right' },
  { value: 'left' }, { value: 'center' }, { value: 'right' },
  { value: 'bottom left' }, { value: 'bottom' }, { value: 'bottom right' },
]

const origin = ref('center')

const transformString = computed(() => {
  const parts: string[] = []
  if (t.tx !== 0 || t.ty !== 0) parts.push(`translate(${t.tx}px, ${t.ty}px)`)
  if (t.scale !== 1) parts.push(`scale(${t.scale})`)
  if (t.rotate !== 0) parts.push(`rotate(${t.rotate}deg)`)
  if (t.skx !== 0) parts.push(`skewX(${t.skx}deg)`)
  if (t.sky !== 0) parts.push(`skewY(${t.sky}deg)`)
  return parts.length ? parts.join(' ') : 'none'
})

const playgroundCode = computed(() => {
  const lines = [`.caja {`, `  transform: ${transformString.value};`]
  if (origin.value !== 'center') lines.push(`  transform-origin: ${origin.value};`)
  lines.push('}')
  return lines.join('\n')
})

const presets: { name: string; values: Partial<Record<TKey, number>> }[] = [
  { name: 'Reset', values: {} },
  { name: 'Inclinada', values: { rotate: -15, scale: 1.2 } },
  { name: 'Cursiva', values: { skx: -20 } },
  { name: 'Volcada', values: { rotate: 180, tx: 40 } },
  { name: 'Romboide', values: { skx: 30, sky: 10, scale: 0.9 } },
]

function applyPreset(values: Partial<Record<TKey, number>>) {
  Object.assign(t, defaults, values)
  origin.value = 'center'
}

interface FnItem { label: string; value: string }
interface FnGroup { id: string; title: string; desc: string; items: FnItem[]; code: string }

const groups: FnGroup[] = [
  {
    id: 'translate',
    title: 'translate()',
    desc: 'Desplaza el elemento en el plano. Acepta longitudes o porcentajes (relativos al <strong>propio elemento</strong>). Existen <code>translateX()</code> y <code>translateY()</code> para un solo eje.',
    items: [
      { label: 'translate(40px, 15px)', value: 'translate(40px, 15px)' },
      { label: 'translateX(30%)', value: 'translateX(30%)' },
      { label: 'translateY(-20px)', value: 'translateY(-20px)' },
    ],
    code: '.a { transform: translate(40px, 15px); }  /* x, y */\n.b { transform: translateX(30%); }        /* 30% de su propio ancho */\n.c { transform: translateY(-20px); }      /* valores negativos: arriba */\n\n/* Si omites y, vale 0 */\n.d { transform: translate(40px); }',
  },
  {
    id: 'scale',
    title: 'scale()',
    desc: 'Cambia el tamaño. <code>1</code> es el tamaño original: mayor que 1 agranda, entre 0 y 1 reduce y los negativos reflejan el elemento como un espejo.',
    items: [
      { label: 'scale(1.3)', value: 'scale(1.3)' },
      { label: 'scaleX(1.5)', value: 'scaleX(1.5)' },
      { label: 'scaleY(0.6)', value: 'scaleY(0.6)' },
      { label: 'scaleX(-1)', value: 'scaleX(-1)' },
    ],
    code: '.a { transform: scale(1.3); }       /* 130% en ambos ejes */\n.b { transform: scaleX(1.5); }      /* solo el ancho */\n.c { transform: scaleY(0.6); }      /* solo el alto, 60% */\n.d { transform: scale(0.93, 0.97); }/* x, y distintos */\n\n/* Reflejar (efecto espejo) */\n.espejo { transform: scaleX(-1); }',
  },
  {
    id: 'rotate',
    title: 'rotate()',
    desc: 'Gira el elemento sobre su <code>transform-origin</code>. Valores positivos giran en <strong>sentido horario</strong>. Unidades: <code>deg</code>, <code>grad</code>, <code>rad</code> y <code>turn</code>.',
    items: [
      { label: 'rotate(15deg)', value: 'rotate(15deg)' },
      { label: 'rotate(-30deg)', value: 'rotate(-30deg)' },
      { label: 'rotate(0.25turn)', value: 'rotate(0.25turn)' },
      { label: 'rotate(180deg)', value: 'rotate(180deg)' },
    ],
    code: '.a { transform: rotate(15deg); }     /* horario */\n.b { transform: rotate(-30deg); }    /* antihorario */\n.c { transform: rotate(0.25turn); }  /* 90deg */\n.d { transform: rotate(3.14rad); }   /* ~180deg */',
  },
  {
    id: 'skew',
    title: 'skew()',
    desc: 'Sesga (inclina) el elemento a lo largo del eje X, del Y o de ambos, según los ángulos indicados. Muy usado para efectos de paralelogramo y cursiva artificial.',
    items: [
      { label: 'skew(10deg, 5deg)', value: 'skew(10deg, 5deg)' },
      { label: 'skewX(25deg)', value: 'skewX(25deg)' },
      { label: 'skewY(15deg)', value: 'skewY(15deg)' },
    ],
    code: '.a { transform: skew(10deg, 5deg); }  /* x, y */\n.b { transform: skewX(25deg); }       /* inclina horizontalmente */\n.c { transform: skewY(15deg); }       /* inclina verticalmente */\n\n/* Truco: botón paralelogramo sin deformar el texto */\n.btn { transform: skewX(-15deg); }\n.btn span { display: inline-block; transform: skewX(15deg); }',
  },
]

const originDemo = ref('top left')
const originAngle = ref(35)

const originPositions: Record<string, [number, number]> = {
  'top left': [0, 0], 'top': [50, 0], 'top right': [100, 0],
  'left': [0, 50], 'center': [50, 50], 'right': [100, 50],
  'bottom left': [0, 100], 'bottom': [50, 100], 'bottom right': [100, 100],
}

const originDotStyle = computed(() => {
  const [x, y] = originPositions[originDemo.value] ?? [50, 50]
  return { left: `${x}%`, top: `${y}%` }
})

const originCode = computed(
  () => `.caja {\n  transform-origin: ${originDemo.value};\n  transform: rotate(${originAngle.value}deg);\n}`,
)

const indiv = reactive({ t: false, r: false, s: false })

type RKey = 'rx' | 'ry' | 'rz' | 'tz' | 'persp'
const r3Defaults: Record<RKey, number> = { rx: 25, ry: -35, rz: 0, tz: 0, persp: 600 }
const r3 = reactive<Record<RKey, number>>({ ...r3Defaults })
const usePersp = ref(true)

const sliders3d: { key: RKey; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: 'rx', label: 'rotateX', min: -180, max: 180, step: 5, unit: 'deg' },
  { key: 'ry', label: 'rotateY', min: -180, max: 180, step: 5, unit: 'deg' },
  { key: 'rz', label: 'rotateZ', min: -180, max: 180, step: 5, unit: 'deg' },
  { key: 'tz', label: 'translateZ', min: -200, max: 200, step: 10, unit: 'px' },
  { key: 'persp', label: 'perspective', min: 100, max: 1500, step: 50, unit: 'px' },
]

const transform3d = computed(
  () => `translateZ(${r3.tz}px) rotateX(${r3.rx}deg) rotateY(${r3.ry}deg) rotateZ(${r3.rz}deg)`,
)

const code3d = computed(
  () =>
    `.escena {\n  perspective: ${usePersp.value ? r3.persp + 'px' : 'none'};\n}\n\n.carta {\n  transform:\n    translateZ(${r3.tz}px)\n    rotateX(${r3.rx}deg)\n    rotateY(${r3.ry}deg)\n    rotateZ(${r3.rz}deg);\n}`,
)

function reset3d() {
  Object.assign(r3, r3Defaults)
  usePersp.value = true
}

const fn3d = [
  { name: 'rotateX(a)', desc: 'Gira alrededor del eje horizontal: inclina hacia adelante o atrás.' },
  { name: 'rotateY(a)', desc: 'Gira alrededor del eje vertical: como una puerta o una página.' },
  { name: 'rotateZ(a)', desc: 'Gira sobre el eje de profundidad (equivale a rotate()).' },
  { name: 'rotate3d(x, y, z, a)', desc: 'Rotación sobre un eje arbitrario definido por un vector.' },
  { name: 'translateZ(d)', desc: 'Acerca o aleja el elemento de la cámara (necesita perspective).' },
  { name: 'translate3d(x, y, z)', desc: 'Traslación en los tres ejes a la vez.' },
  { name: 'scaleZ(s) / scale3d()', desc: 'Escala en profundidad (solo visible con hijos 3D).' },
  { name: 'perspective(d)', desc: 'Aplica perspectiva solo a este elemento; debe ir primero.' },
  { name: 'matrix3d(...)', desc: 'Matriz 4×4 con 16 valores; la forma general de cualquier 3D.' },
]

const cube = reactive({ x: -20, y: 35 })
const cubeSpin = ref(false)

const burgerOpen = ref(false)

const summary = [
  { name: 'translate(x, y)', params: 'longitud o %', example: 'translate(20px, -10px)' },
  { name: 'translateX() / translateY()', params: 'longitud o %', example: 'translateX(50%)' },
  { name: 'scale(x, y)', params: 'número (1 = original)', example: 'scale(1.2, 0.8)' },
  { name: 'scaleX() / scaleY()', params: 'número', example: 'scaleY(0.5)' },
  { name: 'rotate(a)', params: 'ángulo (deg, rad, turn)', example: 'rotate(45deg)' },
  { name: 'skew(x, y)', params: 'ángulos', example: 'skew(10deg, 5deg)' },
  { name: 'skewX() / skewY()', params: 'ángulo', example: 'skewX(-15deg)' },
  { name: 'matrix(a, b, c, d, tx, ty)', params: '6 números', example: 'matrix(1, 0, 0, 1, 30, 0)' },
  { name: 'perspective(d)', params: 'longitud', example: 'perspective(500px)' },
  { name: 'rotateX/Y/Z(), translateZ()', params: 'ángulo / longitud', example: 'rotateY(60deg)' },
]
</script>
<style scoped>
.subsection-title {
  margin: 1.8rem 0 0.9rem;
  font-size: 1.05rem;
  color: var(--text-primary);
}

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

.stage-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.playground-output { display: flex; flex-direction: column; gap: 1rem; }

.slider-list { display: flex; flex-direction: column; gap: 0.7rem; }

.slider-row {
  display: grid;
  grid-template-columns: 95px 1fr 65px;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.85rem;
}

.slider-name { font-family: monospace; color: var(--text-primary); font-size: 0.85rem; }
.slider-value { font-family: monospace; color: var(--color-css); text-align: right; font-size: 0.85rem; }
.slider-input { width: 100%; accent-color: var(--color-css); cursor: pointer; }
.slider-input:disabled { opacity: 0.4; cursor: not-allowed; }

.check-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  cursor: pointer;
}

.check-row input { accent-color: var(--color-css); }

.origin-picker {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.origin-grid {
  display: grid;
  grid-template-columns: repeat(3, 22px);
  grid-template-rows: repeat(3, 22px);
  gap: 4px;
}

.origin-cell {
  padding: 0;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background: var(--bg-primary);
  cursor: pointer;
  transition: all 0.15s;
}

.origin-cell:hover { border-color: var(--color-css); }
.origin-cell.active { background: var(--color-css); border-color: var(--color-css); }

.origin-label { text-align: left; }

.tf-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 280px;
  overflow: hidden;
}

.tf-ghost,
.tf-box {
  grid-area: 1 / 1;
  width: 100px;
  height: 100px;
}

.tf-ghost {
  border: 2px dashed rgba(255,255,255,0.3);
  border-radius: 10px;
}

.tf-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  color: #fff;
  font-weight: 700;
  opacity: 0.9;
}

.matrix-box {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
}

.group-block { margin-top: 1.8rem; }
.group-title { margin: 0 0 0.4rem; font-size: 1.1rem; color: var(--text-primary); }
.group-desc { margin: 0 0 0.9rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

.fn-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.2rem;
}

.fn-cell {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.fn-cell figcaption { font-size: 0.72rem; text-align: center; }

.fn-stage {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 130px;
}

.fn-ghost,
.fn-box {
  grid-area: 1 / 1;
  width: 60px;
  height: 60px;
}

.fn-ghost { border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; }

.fn-box {
  border-radius: 8px;
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  opacity: 0.85;
  position: relative;
}

.fn-box::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fbbf24;
}

.origin-demo {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 240px;
  overflow: hidden;
}

.origin-wrap {
  position: relative;
  width: 110px;
  height: 110px;
  border: 2px dashed rgba(255,255,255,0.3);
  border-radius: 8px;
}

.origin-box {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  opacity: 0.8;
}

.origin-dot {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fbbf24;
  border: 2px solid #1a1a1a;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 4px rgba(251,191,36,0.3);
  z-index: 2;
}

.origin-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 340px;
  margin-top: 0.5rem;
}

.angle-row { width: 100%; }

.order-stage {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 260px;
  padding-left: 40px;
  overflow: hidden;
}

.order-ghost,
.order-box {
  position: absolute;
  left: 40px;
  top: 50%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
}

.order-ghost { border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; }

.order-box {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  line-height: 1.3;
  color: #fff;
  border-radius: 8px;
  transform-origin: center;
}

.ob-a { background: linear-gradient(135deg, #6366f1, #818cf8); transform: translateX(80px) rotate(45deg); }
.ob-b { background: linear-gradient(135deg, #f97316, #fbbf24); transform: rotate(45deg) translateX(80px); }

.indiv-stage {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 170px;
  overflow: hidden;
}

.indiv-box {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  transition: translate 0.4s, rotate 0.8s, scale 0.3s;
}

.indiv-box.is-t { translate: 60px 0; }
.indiv-box.is-r { rotate: 90deg; }
.indiv-box.is-s { scale: 1.4; }

.scene3d {
  display: grid;
  place-items: center;
  min-height: 300px;
  overflow: hidden;
}

.card3d {
  width: 170px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  color: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.card3d strong { font-size: 1.8rem; }
.card3d small { font-size: 0.7rem; opacity: 0.9; }

.cube-scene {
  display: grid;
  place-items: center;
  height: 260px;
  perspective: 600px;
  margin-bottom: 1rem;
}

.cube {
  position: relative;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(35deg);
}

.cube.spin { animation: cube-spin 8s linear infinite; }

@keyframes cube-spin {
  from { transform: rotateX(-20deg) rotateY(0deg); }
  to { transform: rotateX(-20deg) rotateY(360deg); }
}

.face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.55);
}

.f1 { background: rgba(99,102,241,0.75); transform: rotateY(0deg) translateZ(60px); }
.f2 { background: rgba(168,85,247,0.75); transform: rotateY(90deg) translateZ(60px); }
.f3 { background: rgba(249,115,22,0.75); transform: rotateY(180deg) translateZ(60px); }
.f4 { background: rgba(20,184,166,0.75); transform: rotateY(-90deg) translateZ(60px); }
.f5 { background: rgba(236,72,153,0.75); transform: rotateX(90deg) translateZ(60px); }
.f6 { background: rgba(234,179,8,0.75); transform: rotateX(-90deg) translateZ(60px); }

.flip-card {
  width: 220px;
  height: 140px;
  perspective: 800px;
  outline: none;
  cursor: pointer;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s;
}

.flip-card:hover .flip-inner,
.flip-card:focus-visible .flip-inner { transform: rotateY(180deg); }

.flip-face {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border-radius: 12px;
  color: #fff;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-face strong { font-size: 1.2rem; }
.flip-face small { font-size: 0.72rem; opacity: 0.9; font-family: monospace; }

.flip-front { background: linear-gradient(135deg, var(--color-css), #a855f7); }
.flip-back { background: linear-gradient(135deg, #f97316, #fbbf24); color: #1a1a1a; transform: rotateY(180deg); }

.lift-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  padding: 1.6rem 2.2rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  border: 1px solid rgba(255,255,255,0.12);
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.lift-card span { font-size: 0.8rem; opacity: 0.8; }

.lift-card:hover,
.lift-card:focus-visible {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 16px 30px rgb(0 0 0 / 0.45);
}

.center-demo {
  position: relative;
  height: 200px;
  border: 1px dashed rgba(255,255,255,0.25);
  border-radius: 8px;
}

.center-item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--color-css), #a855f7);
  color: #fff;
  font-family: monospace;
  font-size: 0.82rem;
  white-space: nowrap;
}

.zoom-frame {
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  border-radius: 12px;
  line-height: 0;
}

.zoom-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.zoom-frame:hover .zoom-img { transform: scale(1.15); }

.spinner-ring {
  width: 48px;
  height: 48px;
  border: 5px solid rgb(255 255 255 / 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: ring-spin 0.9s linear infinite;
}

@keyframes ring-spin { to { transform: rotate(360deg); } }

.burger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.9rem;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background: var(--bg-primary);
  cursor: pointer;
}

.bar {
  display: block;
  width: 26px;
  height: 3px;
  border-radius: 2px;
  background: var(--text-primary);
  transition: transform 0.3s, opacity 0.3s;
}

.burger.open .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger.open .bar:nth-child(2) { opacity: 0; }
.burger.open .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

@media (prefers-reduced-motion: reduce) {
  .cube.spin,
  .spinner-ring { animation: none; }
  .flip-inner,
  .lift-card,
  .zoom-img,
  .indiv-box { transition: none; }
}

@media (max-width: 600px) {
  .slider-row { grid-template-columns: 80px 1fr 55px; }
}
</style>
