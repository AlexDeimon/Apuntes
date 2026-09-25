<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Progress</h1>
      <p class="subtitle">Barras de progreso personalizadas con soporte para etiquetas de texto, colores, animaciones y barras apiladas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estructura Basica</h2>
      <p class="section-desc">Las barras de progreso se construyen con <strong>dos elementos</strong>: el contenedor <code>.progress</code> y la barra interna <code>.progress-bar</code>. No usan el elemento HTML nativo <code>&lt;progress&gt;</code>, lo que permite apilarlas y animarlas libremente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Atributos Requeridos</h3></div>
          <ul class="def-list">
            <li><span class="def-term">.progress:</span> Contenedor principal. Define la "pista" gris de fondo. Se le puede agregar un style="height: Xpx" para cambiar el alto.</li>
            <li><span class="def-term">.progress-bar:</span> La barra de color interior. El ancho se controla con style="width: X%" o con utilidades de ancho de Bootstrap.</li>
            <li><span class="def-term">role="progressbar":</span> Indica al lector de pantalla que es una barra de progreso.</li>
            <li><span class="def-term">aria-valuenow:</span> Valor actual de la barra.</li>
            <li><span class="def-term">aria-valuemin / aria-valuemax:</span> Valor minimo y maximo (normalmente 0 y 100).</li>
            <li><span class="def-term">aria-label:</span> Descripcion textual para accesibilidad.</li>
          </ul>
          <CodeBlock language="html" code='<!-- Estructura minima de una barra de progreso -->
<div class="progress" role="progressbar"
     aria-label="Progreso del proyecto"
     aria-valuenow="75"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>

<!-- Sin valor visible: solo barra de fondo -->
<div class="progress" role="progressbar"
     aria-label="Descarga"
     aria-valuenow="0"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Demo: Progreso Basico</h3></div>
          <div class="bs-demo-area">
            <p class="bs-demo-label">0%</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar" style="width: 0%"></div>
            </div>
            <p class="bs-demo-label mt">25%</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar" style="width: 25%"></div>
            </div>
            <p class="bs-demo-label mt">50%</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar" style="width: 50%"></div>
            </div>
            <p class="bs-demo-label mt">75%</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar" style="width: 75%"></div>
            </div>
            <p class="bs-demo-label mt">100%</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar" style="width: 100%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Etiquetas y Colores</h2>
      <p class="section-desc">Se puede mostrar el porcentaje directamente sobre la barra agregando texto dentro de <code>.progress-bar</code>. Los colores se cambian con las clases de utilidad de Bootstrap.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Etiqueta de Texto</h3></div>
          <CodeBlock language="html" code='<!-- Con etiqueta de porcentaje -->
<div class="progress" role="progressbar"
     aria-label="Progreso"
     aria-valuenow="65"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="progress-bar" style="width: 65%">65%</div>
</div>

<!-- Colores de contexto -->
<div class="progress" ...>
  <div class="progress-bar bg-success" style="width: 80%">Completado</div>
</div>

<div class="progress" ...>
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>

<div class="progress" ...>
  <div class="progress-bar bg-warning" style="width: 35%"></div>
</div>

<div class="progress" ...>
  <div class="progress-bar bg-danger" style="width: 20%"></div>
</div>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Demo: Colores y Etiquetas</h3></div>
          <div class="bs-demo-area">
            <p class="bs-demo-label">Default (con etiqueta)</p>
            <div class="bs-progress bs-progress-lg" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar" style="width: 65%">65%</div>
            </div>
            <p class="bs-demo-label mt">bg-success</p>
            <div class="bs-progress bs-progress-lg" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-success" style="width: 80%"></div>
            </div>
            <p class="bs-demo-label mt">bg-info</p>
            <div class="bs-progress bs-progress-lg" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-info" style="width: 50%"></div>
            </div>
            <p class="bs-demo-label mt">bg-warning</p>
            <div class="bs-progress bs-progress-lg" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-warning" style="width: 35%"></div>
            </div>
            <p class="bs-demo-label mt">bg-danger</p>
            <div class="bs-progress bs-progress-lg" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-danger" style="width: 20%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Barras Apiladas</h2>
      <p class="section-desc">Bootstrap 5.3 introduce el componente <code>.progress-stacked</code> como contenedor para apilar multiples barras de progreso dentro del mismo track, creando barras segmentadas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Sintaxis Apilada (BS 5.3)</h3></div>
          <ul class="def-list">
            <li><span class="def-term">.progress-stacked:</span> Contenedor externo que agrupa multiples barras. Nuevo en Bootstrap 5.3.</li>
            <li><span class="def-term">Multiples .progress:</span> Dentro del stacked, cada segmento es su propio .progress con su .progress-bar.</li>
            <li><span class="def-term">Suma total:</span> Los anchos de todas las barras deben sumar 100% (o menos si el total no llega al maximo).</li>
          </ul>
          <CodeBlock language="html" code='<!-- Barras apiladas — Bootstrap 5.3+ -->
<div class="progress-stacked">
  <div class="progress" role="progressbar"
       aria-label="Completado"
       aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
       style="width: 40%">
    <div class="progress-bar bg-success">40%</div>
  </div>
  <div class="progress" role="progressbar"
       aria-label="En progreso"
       aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"
       style="width: 35%">
    <div class="progress-bar bg-warning">35%</div>
  </div>
  <div class="progress" role="progressbar"
       aria-label="Pendiente"
       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
       style="width: 25%">
    <div class="progress-bar bg-danger">25%</div>
  </div>
</div>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Demo: Barras Apiladas</h3></div>
          <div class="bs-demo-area">
            <p class="bs-demo-label">Distribucion de Tareas</p>
            <div class="bs-progress-stacked">
              <div class="bs-progress-segment" style="width: 40%">
                <div class="bs-progress-bar bs-progress-lg bs-bg-success">40% Listo</div>
              </div>
              <div class="bs-progress-segment" style="width: 35%">
                <div class="bs-progress-bar bs-progress-lg bs-bg-warning">35% WIP</div>
              </div>
              <div class="bs-progress-segment" style="width: 25%">
                <div class="bs-progress-bar bs-progress-lg bs-bg-danger">25% Pendiente</div>
              </div>
            </div>
            <p class="bs-demo-label mt">Distribución de Presupuesto</p>
            <div class="bs-progress-stacked">
              <div class="bs-progress-segment" style="width: 55%">
                <div class="bs-progress-bar bs-progress-lg bs-bg-primary">55% Marketing</div>
              </div>
              <div class="bs-progress-segment" style="width: 25%">
                <div class="bs-progress-bar bs-progress-lg bs-bg-info">25% Desarrollo</div>
              </div>
              <div class="bs-progress-segment" style="width: 20%">
                <div class="bs-progress-bar bs-progress-lg" style="background:#6f42c1">20% Ops</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Striped y Animacion</h2>
      <p class="section-desc">Bootstrap incluye variantes con patron de rayas y animacion de movimiento, utiles para indicar que un proceso esta en curso.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Clases de Variantes</h3></div>
          <ul class="def-list">
            <li><span class="def-term">.progress-bar-striped:</span> Agrega un patron de rayas diagonales sobre la barra usando un gradiente CSS.</li>
            <li><span class="def-term">.progress-bar-animated:</span> Anima las rayas para dar efecto de movimiento. Requiere .progress-bar-striped.</li>
          </ul>
          <CodeBlock language="html" code='<!-- Barra con rayas -->
<div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 75%"></div>
</div>

<!-- Barra animada (requiere striped) -->
<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"></div>
</div>

<!-- Combinacion: color + striped + animated -->
<div class="progress" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success progress-bar-striped progress-bar-animated"
       style="width: 45%">
  </div>
</div>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Demo: Variantes Visuales</h3></div>
          <div class="bs-demo-area">
            <p class="bs-demo-label">progress-bar-striped</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-striped" style="width: 75%"></div>
            </div>
            <p class="bs-demo-label mt">progress-bar-animated (bg-primary)</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-striped bs-animated" style="width: 60%"></div>
            </div>
            <p class="bs-demo-label mt">bg-success + striped + animated</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-success bs-striped bs-animated" style="width: 45%"></div>
            </div>
            <p class="bs-demo-label mt">bg-warning + striped + animated</p>
            <div class="bs-progress" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-warning bs-striped bs-animated" style="width: 85%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Alto Personalizado</h2>
      <p class="section-desc">El alto de la barra se controla directamente en el contenedor <code>.progress</code> via la propiedad CSS <code>height</code>. La barra interna se adapta automaticamente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Controlar la Altura</h3></div>
          <CodeBlock language="html" code='<!-- Muy delgada (1px) -->
<div class="progress" style="height: 1px" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%"></div>
</div>

<!-- Altura por defecto (~16px) -->
<div class="progress" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%"></div>
</div>

<!-- Grande (30px) — permite mostrar texto -->
<div class="progress" style="height: 30px" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%; font-size: 1rem; line-height: 30px">
    60% Completado
  </div>
</div>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Demo: Alturas</h3></div>
          <div class="bs-demo-area">
            <p class="bs-demo-label">1px</p>
            <div class="bs-progress bs-progress-1px" role="progressbar">
              <div class="bs-progress-bar" style="width: 60%"></div>
            </div>
            <p class="bs-demo-label mt">4px</p>
            <div class="bs-progress bs-progress-4px" role="progressbar">
              <div class="bs-progress-bar bs-bg-success" style="width: 70%"></div>
            </div>
            <p class="bs-demo-label mt">10px (default)</p>
            <div class="bs-progress" role="progressbar">
              <div class="bs-progress-bar bs-bg-info" style="width: 55%"></div>
            </div>
            <p class="bs-demo-label mt">24px</p>
            <div class="bs-progress bs-progress-24px" role="progressbar">
              <div class="bs-progress-bar bs-bg-warning" style="width: 80%">80%</div>
            </div>
            <p class="bs-demo-label mt">36px</p>
            <div class="bs-progress bs-progress-36px" role="progressbar">
              <div class="bs-progress-bar bs-bg-primary" style="width: 45%">45% Completado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Uso Dinamico con JavaScript</h2>
      <p class="section-desc">En proyectos reales la barra de progreso se actualiza dinamicamente desde JavaScript para reflejar el avance de una operacion (subida de archivo, carga de datos, etc.).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Actualizar con JS</h3></div>
          <CodeBlock language="javascript" code="// Funcion para actualizar una barra de progreso
function setProgress(barElement, percent) {
  const clamped = Math.min(100, Math.max(0, percent));
  barElement.style.width = clamped + '%';
  barElement.setAttribute('aria-valuenow', clamped);

  // Actualizar texto si existe
  if (barElement.textContent !== '') {
    barElement.textContent = clamped + '%';
  }
}

// Uso
const bar = document.querySelector('.progress-bar');
setProgress(bar, 75);

// Simulacion de descarga con setInterval
let progress = 0;
const interval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress >= 100) {
    progress = 100;
    clearInterval(interval);
    bar.textContent = '¡Completo!';
  }
  setProgress(bar, Math.round(progress));
}, 300);" />
          <CodeBlock language="javascript" code="// Con fetch: mostrar progreso de descarga
async function descargarConProgreso(url, progressBar) {
  const response = await fetch(url);
  const total = parseInt(response.headers.get('Content-Length'), 10);
  let loaded = 0;

  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    loaded += value.length;
    const percent = Math.round((loaded / total) * 100);
    setProgress(progressBar, percent);
  }
}" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Demo: Simulacion Interactiva</h3></div>
          <div class="bs-demo-area">
            <div class="bs-progress bs-progress-lg" role="progressbar" :aria-valuenow="simProgress" aria-valuemin="0" aria-valuemax="100">
              <div class="bs-progress-bar bs-bg-primary bs-striped" :class="{ 'bs-animated': simRunning }" :style="{ width: simProgress + '%' }">{{ simProgress > 0 ? simProgress + '%' : '' }}</div>
            </div>
            <div class="sim-controls">
              <button class="sim-btn sim-btn-start" @click="startSim" :disabled="simRunning">{{ simProgress === 100 ? '&#8635; Reiniciar' : '&#9654; Iniciar' }}</button>
              <button class="sim-btn sim-btn-stop" @click="stopSim" :disabled="!simRunning">&#9646;&#9646; Pausar</button>
              <button class="sim-btn sim-btn-reset" @click="resetSim">&#9632; Reset</button>
              <span class="sim-status" :class="simStatusClass">{{ simStatusText }}</span>
            </div>
            <p class="bs-demo-label mt">Multiples Tareas</p>
            <div v-for="task in tasks" :key="task.id" class="task-row">
              <span class="task-name">{{ task.name }}</span>
              <div class="bs-progress task-bar" role="progressbar" :aria-valuenow="task.progress" aria-valuemin="0" aria-valuemax="100">
                <div class="bs-progress-bar" :class="task.colorClass" :style="{ width: task.progress + '%' }"></div>
              </div>
              <span class="task-pct">{{ task.progress }}%</span>
            </div>
            <button class="sim-btn sim-btn-start mt" @click="runTasks">Simular Tareas</button>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'navbar', text: 'Navbar' },
      { techId: 'bootstrap', moduleId: 'modal', text: 'Modal' },
      { techId: 'bootstrap', moduleId: 'collapse', text: 'Collapse' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const simProgress = ref(0)
const simRunning = ref(false)
let simInterval: ReturnType<typeof setInterval> | null = null

const simStatusText = computed(() => {
  if (simRunning.value) return 'Procesando...'
  if (simProgress.value === 100) return 'Completado!'
  if (simProgress.value > 0) return 'Pausado'
  return 'Listo para iniciar'
})

const simStatusClass = computed(() => ({
  'sim-status-running': simRunning.value,
  'sim-status-done': simProgress.value === 100 && !simRunning.value,
  'sim-status-paused': simProgress.value > 0 && simProgress.value < 100 && !simRunning.value,
}))

function startSim() {
  if (simProgress.value >= 100) {
    simProgress.value = 0
  }
  simRunning.value = true
  simInterval = setInterval(() => {
    simProgress.value = Math.min(100, simProgress.value + Math.floor(Math.random() * 8) + 2)
    if (simProgress.value >= 100) {
      simProgress.value = 100
      simRunning.value = false
      if (simInterval) clearInterval(simInterval)
    }
  }, 250)
}

function stopSim() {
  simRunning.value = false
  if (simInterval) clearInterval(simInterval)
}

function resetSim() {
  stopSim()
  simProgress.value = 0
}

interface Task {
  id: number
  name: string
  progress: number
  colorClass: string
}

const tasks = ref<Task[]>([
  { id: 1, name: 'Compilar assets', progress: 0, colorClass: 'bs-bg-primary' },
  { id: 2, name: 'Ejecutar tests', progress: 0, colorClass: 'bs-bg-success' },
  { id: 3, name: 'Subir a servidor', progress: 0, colorClass: 'bs-bg-warning' },
  { id: 4, name: 'Limpiar cache', progress: 0, colorClass: 'bs-bg-info' },
])

let taskIntervals: ReturnType<typeof setInterval>[] = []

function runTasks() {
  tasks.value.forEach(t => t.progress = 0)
  taskIntervals.forEach(i => clearInterval(i))
  taskIntervals = []

  tasks.value.forEach((task, i) => {
    const delay = i * 400
    setTimeout(() => {
      const iv = setInterval(() => {
        task.progress = Math.min(100, task.progress + Math.floor(Math.random() * 12) + 3)
        if (task.progress >= 100) {
          task.progress = 100
          clearInterval(iv)
        }
      }, 200)
      taskIntervals.push(iv)
    }, delay)
  })
}

onUnmounted(() => {
  if (simInterval) clearInterval(simInterval)
  taskIntervals.forEach(i => clearInterval(i))
})
</script>
<style scoped>
.bs-demo-label {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-bottom: 0.35rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.bs-demo-label.mt { margin-top: 1rem; }

.bs-progress {
  width: 100%;
  height: 10px;
  background: rgba(255,255,255,0.1);
  border-radius: 999px;
  overflow: hidden;
}

.bs-progress-1px { height: 1px; }
.bs-progress-4px  { height: 4px; }
.bs-progress-lg   { height: 20px; }
.bs-progress-24px { height: 24px; }
.bs-progress-36px { height: 36px; }

.bs-progress-bar {
  height: 100%;
  background: #0d6efd;
  border-radius: 999px;
  transition: width 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
}

.bs-bg-success { background: #198754; }
.bs-bg-info    { background: #0dcaf0; color: #000; }
.bs-bg-warning { background: #ffc107; color: #000; }
.bs-bg-danger  { background: #dc3545; }
.bs-bg-primary { background: #0d6efd; }

.bs-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255,255,255,0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,0.15) 50%,
    rgba(255,255,255,0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

.bs-animated {
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  from { background-position: 1rem 0; }
  to   { background-position: 0 0; }
}

.bs-progress-stacked {
  display: flex;
  width: 100%;
  height: 20px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255,255,255,0.08);
}

.bs-progress-segment {
  flex-shrink: 0;
  height: 100%;
}

.bs-progress-segment .bs-progress-bar {
  border-radius: 0;
  height: 100%;
}

.sim-controls {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.85rem;
}

.sim-btn {
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  border: none;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.sim-btn.mt { margin-top: 0.5rem; }

.sim-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.sim-btn-start { background: rgba(13,110,253,0.2); color: #6ea8fe; border: 1px solid rgba(13,110,253,0.3); }
.sim-btn-start:hover:not(:disabled) { background: rgba(13,110,253,0.35); }
.sim-btn-stop  { background: rgba(255,193,7,0.15); color: #ffc107; border: 1px solid rgba(255,193,7,0.3); }
.sim-btn-stop:hover:not(:disabled) { background: rgba(255,193,7,0.28); }
.sim-btn-reset { background: rgba(220,53,69,0.15); color: #f87171; border: 1px solid rgba(220,53,69,0.3); }
.sim-btn-reset:hover { background: rgba(220,53,69,0.28); }

.sim-status {
  font-size: 0.8rem;
  font-family: monospace;
  padding: 0.25rem 0.6rem;
  border-radius: 5px;
  background: rgba(255,255,255,0.05);
}

.sim-status-running { color: #6ea8fe; }
.sim-status-done    { color: #34d399; }
.sim-status-paused  { color: #fbbf24; }

.task-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}

.task-name {
  font-size: 0.8rem;
  color: var(--text-secondary);
  width: 130px;
  flex-shrink: 0;
}

.task-bar {
  flex: 1;
  height: 8px;
}

.task-pct {
  font-size: 0.75rem;
  color: var(--text-secondary);
  width: 36px;
  text-align: right;
  font-family: monospace;
  flex-shrink: 0;
}
</style>
