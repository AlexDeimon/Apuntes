<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Objetos Nativos &amp; Timers</h1>
      <p class="subtitle">El navegador expone objetos globales que permiten interactuar con la ventana, la URL, el historial, el dispositivo y el tiempo.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">El Objeto window</h2>
      <p class="section-desc"><code>window</code> es el objeto global del navegador. Todas las variables globales, funciones y APIs del navegador son propiedades suyas. Al ser global, se puede omitir <code>window.</code> al acceder a sus miembros.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Dialogos del Navegador</h3></div>
          <p>Tres metodos clasicos para mostrar informacion o pedir confirmacion al usuario. Se usan con moderacion en aplicaciones modernas ya que bloquean el hilo principal.</p>
          <CodeBlock language="javascript" code="// Muestra un mensaje. El usuario solo puede cerrar.
window.alert('Operacion completada!');
alert('Equivalente, window es implicito');

// Solicita texto al usuario. Devuelve string o null (si cancela).
const nombre = window.prompt('Como te llamas?', 'Alex');
if (nombre !== null) {
  console.log(`Hola, ${nombre}!`);
}

// Solicita confirmacion. Devuelve true (Aceptar) o false (Cancelar).
const confirmado = window.confirm('Estas seguro de eliminar esto?');
if (confirmado) {
  eliminarElemento();
}" />
          <div class="sandbox-area">
            <h5>Prueba los dialogos:</h5>
            <div class="sandbox-btns">
              <button class="sandbox-btn btn-alert" @click="demoAlert">alert()</button>
              <button class="sandbox-btn btn-prompt" @click="demoPrompt">prompt()</button>
              <button class="sandbox-btn btn-confirm" @click="demoConfirm">confirm()</button>
            </div>
            <div v-if="dialogResult" class="dialog-result">
              <span class="result-label">Resultado:</span>
              <span class="result-value">{{ dialogResult }}</span>
            </div>
          </div>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Propiedades de Dimensiones</h3></div>
          <p>Propiedades de <code>window</code> para obtener el tamano de la ventana y el desplazamiento del scroll:</p>
          <CodeBlock language="javascript" code="// Dimensiones del viewport (area visible del navegador)
console.log(window.innerWidth);   // Ancho en px
console.log(window.innerHeight);  // Alto en px

// Dimensiones incluyendo barras de herramientas del navegador
console.log(window.outerWidth);
console.log(window.outerHeight);

// Posicion actual del scroll
console.log(window.scrollX);  // Desplazamiento horizontal
console.log(window.scrollY);  // Desplazamiento vertical

// Scroll programatico
window.scrollTo({ top: 0, behavior: 'smooth' });       // Al inicio
window.scrollBy({ top: 300, behavior: 'smooth' });     // Desplazar 300px
window.scrollTo({ top: document.body.scrollHeight });  // Al final" />

          <div class="live-info-grid">
            <div class="live-info-item">
              <span class="live-label">innerWidth</span>
              <span class="live-value">{{ windowWidth }}px</span>
            </div>
            <div class="live-info-item">
              <span class="live-label">innerHeight</span>
              <span class="live-value">{{ windowHeight }}px</span>
            </div>
            <div class="live-info-item">
              <span class="live-label">scrollY</span>
              <span class="live-value">{{ scrollY }}px</span>
            </div>
            <div class="live-info-item">
              <span class="live-label">devicePixelRatio</span>
              <span class="live-value">{{ pixelRatio }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">window.location</h2>
      <p class="section-desc">El objeto <code>location</code> representa la URL actual del documento. Permite leerla, analizarla en partes y navegar programaticamente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Propiedades de location</h3></div>
          <CodeBlock language="javascript" code="// URL completa: https://app.com:8080/ruta?q=valor#seccion
location.href     // 'https://app.com:8080/ruta?q=valor#seccion'
location.protocol // 'https:'
location.host     // 'app.com:8080'
location.hostname // 'app.com'
location.port     // '8080'
location.pathname // '/ruta'
location.search   // '?q=valor'
location.hash     // '#seccion'
location.origin   // 'https://app.com:8080'" />
          <div class="live-info-grid">
            <div class="live-info-item">
              <span class="live-label">href</span>
              <span class="live-value url-value">{{ locationHref }}</span>
            </div>
            <div class="live-info-item">
              <span class="live-label">pathname</span>
              <span class="live-value">{{ locationPathname }}</span>
            </div>
            <div class="live-info-item">
              <span class="live-label">protocol</span>
              <span class="live-value">{{ locationProtocol }}</span>
            </div>
            <div class="live-info-item">
              <span class="live-label">hostname</span>
              <span class="live-value">{{ locationHostname }}</span>
            </div>
          </div>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Metodos de location</h3></div>
          <CodeBlock language="javascript" code="// Navegar a una nueva URL (agrega entrada al historial)
location.assign('https://nueva-url.com');

// Reemplazar la URL actual (NO agrega entrada al historial)
// El usuario no puede volver atras con el boton Back
location.replace('https://nueva-url.com');

// Recargar la pagina actual
location.reload();

// Navegar cambiando la propiedad href (igual que assign)
location.href = 'https://nueva-url.com';

// Modificar solo el hash (no recarga la pagina)
location.hash = '#seccion-contacto';

// Leer parametros de busqueda modernamente
const params = new URLSearchParams(location.search);
const query = params.get('q');         // null si no existe
const page  = params.get('page') ?? '1'; // con valor por defecto
console.log(query, page);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">window.history</h2>
      <p class="section-desc">El objeto <code>history</code> da acceso al historial de sesion del navegador. Es la base de la navegacion programatica en SPAs (Single Page Applications) como Vue o React.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Metodos Clasicos</h3></div>
          <CodeBlock language="javascript" code="// Equivalente al boton Atras del navegador
history.back();

// Equivalente al boton Adelante del navegador
history.forward();

// Navegar N pasos en el historial
history.go(-1);  // Una pagina atras (igual que back())
history.go(1);   // Una pagina adelante (igual que forward())
history.go(-3);  // Tres paginas atras

// Cantidad de entradas en el historial de esta sesion
console.log(history.length);" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>History API Moderna (pushState / replaceState)</h3></div>
          <p>Permite cambiar la URL sin recargar la pagina. Es la base de los routers de frameworks modernos.</p>
          <CodeBlock language="javascript" code="// pushState: Agrega una nueva entrada al historial
// history.pushState(state, title, url)
history.pushState({ pagina: 2 }, '', '/productos?pagina=2');
// La URL cambia, pero el servidor NO recibe ninguna peticion

// replaceState: Modifica la entrada actual (sin agregar al historial)
history.replaceState({ filtro: 'ropa' }, '', '/tienda?cat=ropa');

// Detectar cuando el usuario navega con Atras / Adelante
window.addEventListener('popstate', (event) => {
  console.log('Navegacion detectada:', event.state);
  // event.state contiene el objeto pasado a pushState/replaceState
  // aqui actualizarias la UI segun el estado
});

// Ejemplo real en una SPA:
function navegarA(ruta, estado = {}) {
  history.pushState(estado, '', ruta);
  renderizarPagina(ruta); // Funcion propia que actualiza el DOM
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">window.navigator</h2>
      <p class="section-desc">El objeto <code>navigator</code> provee informacion sobre el estado e identidad del navegador y del dispositivo del usuario.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Propiedades de navigator</h3></div>
          <CodeBlock language="javascript" code="// Informacion del navegador (puede ser falseada por el usuario)
navigator.userAgent    // Cadena completa del user agent
navigator.language     // Idioma preferido del usuario: 'es-MX', 'en-US'
navigator.languages    // ['es-MX', 'en', 'fr'] — lista de idiomas
navigator.onLine       // true/false — si tiene conexion a internet
navigator.cookieEnabled // true/false — si las cookies estan habilitadas
navigator.hardwareConcurrency // Numero de nucleos logicos de la CPU
navigator.maxTouchPoints      // Numero de puntos de toque (0 si no es tactil)" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>APIs de navigator (Modernas)</h3></div>
          <CodeBlock language="javascript" code="// Geolocalizacion — solicita permiso al usuario
navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(pos.coords.latitude, pos.coords.longitude);
  },
  (error) => console.error('Permiso denegado', error)
);

// Copiar texto al portapapeles (requiere HTTPS)
await navigator.clipboard.writeText('Texto copiado!');
const texto = await navigator.clipboard.readText();

// Compartir contenido (Web Share API — moviles)
await navigator.share({
  title: 'Mi app',
  text: 'Mira este articulo increible!',
  url: 'https://mi-app.com/articulo/1',
});

// Detectar si la app esta instalada como PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  // Guarda el evento para mostrarlo cuando el usuario lo pida
  deferredPrompt = e;
});" />
        </div>
      </div>
      <div class="live-nav-info">
        <h4 class="live-title">Datos del navegador en tiempo real:</h4>
        <div class="nav-info-grid">
          <div class="nav-info-item">
            <span class="nav-label">language</span>
            <span class="nav-value">{{ navLanguage }}</span>
          </div>
          <div class="nav-info-item">
            <span class="nav-label">onLine</span>
            <span class="nav-value" :class="isOnline ? 'online' : 'offline'">{{ isOnline ? 'true' : 'false' }}</span>
          </div>
          <div class="nav-info-item">
            <span class="nav-label">cookieEnabled</span>
            <span class="nav-value">{{ cookieEnabled }}</span>
          </div>
          <div class="nav-info-item">
            <span class="nav-label">hardwareConcurrency</span>
            <span class="nav-value">{{ hardwareConcurrency }}</span>
          </div>
          <div class="nav-info-item">
            <span class="nav-label">maxTouchPoints</span>
            <span class="nav-value">{{ maxTouchPoints }}</span>
          </div>
          <div class="nav-info-item nav-item-wide">
            <span class="nav-label">userAgent</span>
            <span class="nav-value nav-ua">{{ userAgent }}</span>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Timers: setTimeout y setInterval</h2>
      <p class="section-desc">Los timers permiten ejecutar codigo de forma diferida o de manera repetida. Funcionan de forma asincrona: el codigo registrado se ejecuta en el futuro, despues de que el hilo principal haya procesado las tareas actuales.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>setTimeout — Ejecucion Diferida</h3></div>
          <p>Ejecuta una funcion <strong>una sola vez</strong> despues de un retardo especificado en milisegundos.</p>
          <CodeBlock language="javascript" code="// Sintaxis: setTimeout(callback, retardoMs, ...args)
const id = setTimeout(() => {
  console.log('Han pasado 2 segundos');
}, 2000);

// Cancelar antes de que se ejecute
clearTimeout(id);

// Pasar argumentos al callback
setTimeout((nombre, accion) => {
  console.log(`${nombre} ha realizado: ${accion}`);
}, 1000, 'Alex', 'guardar');

// setTimeout con 0ms: se ejecuta al final del event loop actual
// Util para diferir codigo sin bloquear el renderizado
setTimeout(() => {
  actualizarUI();
}, 0);" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>setInterval — Ejecucion Repetida</h3></div>
          <p>Ejecuta una funcion <strong>repetidamente</strong> cada N milisegundos, hasta que sea cancelada.</p>
          <CodeBlock language="javascript" code="// Sintaxis: setInterval(callback, intervaloMs, ...args)
let contador = 0;
const id = setInterval(() => {
  contador++;
  console.log(`Tick #${contador}`);

  // Siempre limpia el intervalo cuando ya no lo necesites
  if (contador >= 5) {
    clearInterval(id);
    console.log('Intervalo detenido');
  }
}, 1000);

// Patron: intervalo recursivo con setTimeout
// Mas robusto que setInterval (evita solapamiento si el callback es lento)
function tick() {
  realizarTarea();
  setTimeout(tick, 1000); // El siguiente tick se programa DESPUES de terminar
}
setTimeout(tick, 1000);" />
        </div>
      </div>
      <div class="timer-sandbox">
        <div class="sandbox-header">
          <h4>Sandbox: Timers en Accion</h4>
        </div>
        <div class="timer-panels">
          <div class="timer-panel">
            <h5>setTimeout</h5>
            <p>Ejecuta el callback una vez despues del retardo.</p>
            <div class="timer-controls">
              <label class="timer-label">Retardo: <strong>{{ timeoutDelay }}ms</strong></label>
              <input type="range" v-model.number="timeoutDelay" min="500" max="5000" step="500" class="range-input" />
            </div>
            <button class="sandbox-btn btn-timer" @click="runTimeout" :disabled="timeoutRunning">{{ timeoutRunning ? `Esperando (${timeoutCountdown}s)...` : 'Ejecutar setTimeout' }}</button>
            <div v-if="timeoutMessage" class="timer-output">{{ timeoutMessage }}</div>
          </div>
          <div class="timer-panel">
            <h5>setInterval</h5>
            <p>El reloj se actualiza cada segundo usando setInterval.</p>
            <div class="clock-display">{{ clockTime }}</div>
            <div class="timer-controls">
              <button class="sandbox-btn btn-timer" @click="toggleClock">{{ clockRunning ? 'Detener reloj' : 'Iniciar reloj' }}</button>
              <span class="tick-count">Ticks: {{ tickCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">requestAnimationFrame</h2>
      <p class="section-desc"><code>requestAnimationFrame</code> (rAF) es el timer moderno para animaciones. A diferencia de <code>setInterval</code>, sincroniza la ejecucion con el ciclo de refresco del navegador (generalmente 60fps), resultando en animaciones mas suaves y eficientes en bateria.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Animacion con rAF</h3></div>
          <CodeBlock language="javascript" code="let posicion = 0;
let animId;

function animar(timestamp) {
  // timestamp: ms desde que empezo la pagina (DOMHighResTimeStamp)
  posicion += 2;
  elemento.style.transform = `translateX(${posicion}px)`;

  if (posicion < 300) {
    animId = requestAnimationFrame(animar); // Pedir el siguiente frame
  }
}

// Iniciar
animId = requestAnimationFrame(animar);

// Cancelar
cancelAnimationFrame(animId);

// Comparacion de rendimiento:
// setInterval(fn, 16)      — puede desincronizarse, consume CPU aunque la pestaña este oculta
// requestAnimationFrame()  — pausa automaticamente si la pestaña no es visible (ahorra bateria)" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>rAF con delta de tiempo</h3></div>
          <p>Usar la diferencia de tiempo entre frames garantiza animaciones a la misma velocidad independientemente del framerate del dispositivo.</p>
          <CodeBlock language="javascript" code="let ultimoTimestamp = null;
const VELOCIDAD = 100; // px por segundo

function animar(timestamp) {
  if (ultimoTimestamp === null) {
    ultimoTimestamp = timestamp;
  }

  const delta = (timestamp - ultimoTimestamp) / 1000; // segundos
  ultimoTimestamp = timestamp;

  // La posicion aumenta en VELOCIDAD px/s independientemente del fps
  posicion += VELOCIDAD * delta;
  elemento.style.transform = `translateX(${posicion}px)`;

  if (posicion < 500) {
    requestAnimationFrame(animar);
  }
}

requestAnimationFrame(animar);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'eventos', text: 'Eventos de JavaScript' },
      { techId: 'js', moduleId: 'dom', text: 'DOM: Seleccion y Manipulacion' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const windowWidth = ref(0)
const windowHeight = ref(0)
const scrollY = ref(0)
const pixelRatio = ref(1)

const locationHref = ref('')
const locationPathname = ref('')
const locationProtocol = ref('')
const locationHostname = ref('')

const navLanguage = ref('')
const isOnline = ref(true)
const cookieEnabled = ref(false)
const hardwareConcurrency = ref(0)
const maxTouchPoints = ref(0)
const userAgent = ref('')

const dialogResult = ref('')

const demoAlert = () => {
  window.alert('Esto es un alert() de window!')
  dialogResult.value = 'alert() ejecutado (sin valor de retorno)'
}

const demoPrompt = () => {
  const resultado = window.prompt('Escribe tu nombre:')
  if (resultado !== null) {
    dialogResult.value = `prompt() devolvio: "${resultado}"`
  } else {
    dialogResult.value = 'prompt() devolvio: null (cancelado)'
  }
}

const demoConfirm = () => {
  const resultado = window.confirm('Confirma la accion?')
  dialogResult.value = `confirm() devolvio: ${resultado}`
}

const timeoutDelay = ref(2000)
const timeoutRunning = ref(false)
const timeoutMessage = ref('')
const timeoutCountdown = ref(0)
let countdownInterval: ReturnType<typeof setInterval> | null = null

const runTimeout = () => {
  if (timeoutRunning.value) return
  timeoutRunning.value = true
  timeoutMessage.value = ''
  timeoutCountdown.value = Math.round(timeoutDelay.value / 1000)

  countdownInterval = setInterval(() => {
    timeoutCountdown.value = Math.max(0, timeoutCountdown.value - 1)
  }, 1000)

  setTimeout(() => {
    timeoutRunning.value = false
    timeoutMessage.value = `Callback ejecutado despues de ${timeoutDelay.value}ms`
    if (countdownInterval) clearInterval(countdownInterval)
  }, timeoutDelay.value)
}

const clockRunning = ref(false)
const clockTime = ref('--:--:--')
const tickCount = ref(0)
let clockInterval: ReturnType<typeof setInterval> | null = null

const updateClock = () => {
  const now = new Date()
  clockTime.value = now.toLocaleTimeString('es-MX', { hour12: false })
  tickCount.value++
}

const toggleClock = () => {
  if (clockRunning.value) {
    if (clockInterval) clearInterval(clockInterval)
    clockRunning.value = false
  } else {
    updateClock()
    clockInterval = setInterval(updateClock, 1000)
    clockRunning.value = true
  }
}

const onScroll = () => {
  scrollY.value = Math.round(window.scrollY)
}

const onResize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
  pixelRatio.value = window.devicePixelRatio
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll, { passive: true })

  locationHref.value = window.location.href
  locationPathname.value = window.location.pathname
  locationProtocol.value = window.location.protocol
  locationHostname.value = window.location.hostname

  navLanguage.value = navigator.language
  isOnline.value = navigator.onLine
  cookieEnabled.value = navigator.cookieEnabled
  hardwareConcurrency.value = navigator.hardwareConcurrency
  maxTouchPoints.value = navigator.maxTouchPoints
  userAgent.value = navigator.userAgent

  window.addEventListener('online', () => { isOnline.value = true })
  window.addEventListener('offline', () => { isOnline.value = false })
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onScroll)
  if (clockInterval) clearInterval(clockInterval)
  if (countdownInterval) clearInterval(countdownInterval)
})
</script>

<style scoped>
.sandbox-area {
  margin-top: 1.2rem;
  padding: 1rem;
  background: rgba(0,0,0,0.15);
  border: 1px solid var(--border-color);
  border-radius: 10px;
}

.sandbox-area h5 {
  margin: 0 0 0.75rem 0;
  font-size: 0.82rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.sandbox-btns {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.sandbox-btn {
  padding: 0.45rem 1rem;
  border-radius: 7px;
  border: 1px solid transparent;
  font-size: 0.85rem;
  font-family: monospace;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
}

.btn-alert  { background: rgba(234,179,8,0.15); border-color: rgba(234,179,8,0.35); color: #fbbf24; }
.btn-alert:hover  { background: rgba(234,179,8,0.25); }
.btn-prompt { background: rgba(59,130,246,0.15); border-color: rgba(59,130,246,0.35); color: #60a5fa; }
.btn-prompt:hover { background: rgba(59,130,246,0.25); }
.btn-confirm { background: rgba(16,185,129,0.15); border-color: rgba(16,185,129,0.35); color: #34d399; }
.btn-confirm:hover { background: rgba(16,185,129,0.25); }
.btn-timer { background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.35); color: #818cf8; }
.btn-timer:hover:not(:disabled) { background: rgba(99,102,241,0.25); }
.btn-timer:disabled { opacity: 0.5; cursor: not-allowed; }

.dialog-result {
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(99,102,241,0.08);
  border-left: 3px solid #818cf8;
  border-radius: 0 6px 6px 0;
  font-size: 0.85rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.result-label { color: var(--text-secondary); flex-shrink: 0; }
.result-value { color: #c7d2fe; font-family: monospace; }

.live-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  margin-top: 1rem;
}

.live-info-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.6rem 0.8rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.live-label {
  font-size: 0.72rem;
  color: var(--text-secondary);
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.live-value {
  font-size: 0.9rem;
  color: #a5b4fc;
  font-family: monospace;
  font-weight: 600;
}

.url-value {
  font-size: 0.72rem;
  word-break: break-all;
}

.live-nav-info {
  margin-top: 1.5rem;
  padding: 1.2rem;
  background: rgba(0,0,0,0.12);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.live-title {
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.nav-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.6rem;
}

.nav-info-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.6rem 0.8rem;
  background: rgba(0,0,0,0.2);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.nav-item-wide {
  grid-column: 1 / -1;
}

.nav-label {
  font-size: 0.72rem;
  color: var(--text-secondary);
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.nav-value {
  font-size: 0.88rem;
  color: #6ee7b7;
  font-family: monospace;
  font-weight: 600;
}

.nav-ua {
  font-size: 0.72rem;
  word-break: break-word;
  white-space: normal;
  color: var(--text-secondary);
}

.online  { color: #34d399; }
.offline { color: #f87171; }

.timer-sandbox {
  margin-top: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.01);
}

.timer-sandbox .sandbox-header {
  padding: 0.75rem 1.2rem;
  background: #181825;
  border-bottom: 1px solid var(--border-color);
}

.timer-sandbox .sandbox-header h4 {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.timer-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

@media (max-width: 720px) {
  .timer-panels { grid-template-columns: 1fr; }
}

.timer-panel {
  padding: 1.2rem;
  border-right: 1px solid var(--border-color);
}

.timer-panel:last-child {
  border-right: none;
}

.timer-panel h5 {
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.timer-panel p {
  margin: 0 0 1rem 0;
  font-size: 0.83rem;
  color: var(--text-secondary);
}

.timer-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.timer-label {
  font-size: 0.83rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.range-input {
  flex: 1;
  accent-color: #818cf8;
  min-width: 80px;
}

.timer-output {
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: rgba(16,185,129,0.08);
  border-left: 3px solid #34d399;
  border-radius: 0 6px 6px 0;
  font-size: 0.83rem;
  color: #6ee7b7;
  font-family: monospace;
  animation: fadeIn 0.3s ease;
}

.clock-display {
  font-family: monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: #818cf8;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  text-shadow: 0 0 20px rgba(99,102,241,0.4);
}

.tick-count {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: monospace;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
