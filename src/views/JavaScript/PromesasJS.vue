<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Promesas</h1>
      <p class="subtitle">Objetos que representan el resultado futuro de una operación asíncrona: la base de <code>async/await</code> y de casi toda la web moderna.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">¿Qué es una Promesa?</h2>
      <p class="section-desc">Una <strong>promesa</strong> es algo que en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas. En JavaScript se representa con un objeto <code>Promise</code> que siempre está en uno de tres estados.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Los 3 Estados</h3>
          </div>
          <div class="state-diagram">
            <div class="state-box st-pending">
              <span class="st-name">pending</span>
              <span class="st-desc">Estado inicial: ni cumplida ni rechazada.</span>
            </div>
            <div class="state-branches">
              <div class="state-arrow">resolve(valor) ↓</div>
              <div class="state-arrow">reject(error) ↓</div>
            </div>
            <div class="state-final">
              <div class="state-box st-fulfilled">
                <span class="st-name">fulfilled</span>
                <span class="st-desc">La operación se completó con éxito.</span>
              </div>
              <div class="state-box st-rejected">
                <span class="st-name">rejected</span>
                <span class="st-desc">La operación falló.</span>
              </div>
            </div>
          </div>
          <p>Una promesa es <strong>inmutable una vez resuelta</strong> (<em>settled</em>): no puede cambiar de estado ni de valor.</p>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Métodos de la Instancia</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">.then(onFulfilled):</span>Se ejecuta cuando la promesa se cumple. Devuelve una nueva promesa.</li>
            <li><span class="def-term">.catch(onRejected):</span>Se ejecuta cuando la promesa se rechaza (o si algo lanza un error en la cadena).</li>
            <li><span class="def-term">.then(ok, error):</span>Equivalente a los dos anteriores en una sola llamada.</li>
            <li><span class="def-term">.finally(onFinally):</span>Se ejecuta siempre, se cumpla o se rechace. No recibe argumentos.</li>
          </ul>
          <CodeBlock language="javascript" code="const promesa = new Promise((resolve, reject) => {
  // Aquí va la operación asíncrona
  const exito = true;

  if (exito) {
    resolve('¡Todo salió bien!');   // → fulfilled
  } else {
    reject(new Error('Algo falló')); // → rejected
  }
});

promesa
  .then(valor => console.log('Éxito:', valor))
  .catch(error => console.error('Error:', error.message))
  .finally(() => console.log('Fin (siempre se ejecuta)'));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Demo: Ciclo de Vida de una Promesa</h2>
      <p class="section-desc">Configura el resultado y el tiempo de espera, crea la promesa y observa cómo cambia de estado y en qué orden se ejecutan <code>.then</code>, <code>.catch</code> y <code>.finally</code>.</p>
      <div class="card recommended">
        <div class="demo-controls">
          <div class="control-group">
            <label class="control-label">Resultado</label>
            <div class="seg">
              <button :class="['seg-btn', { active: outcome === 'ok' }]" :disabled="running" @click="outcome = 'ok'">✔ Cumplir</button>
              <button :class="['seg-btn', { active: outcome === 'fail' }]" :disabled="running" @click="outcome = 'fail'">✖ Rechazar</button>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Espera: <strong>{{ delay }} ms</strong></label>
            <input type="range" min="200" max="3000" step="100" v-model.number="delay" :disabled="running" class="range" />
          </div>
          <button class="run-btn" :disabled="running" @click="crearPromesa">{{ running ? 'Esperando…' : '▶ Crear promesa' }}</button>
        </div>
        <div class="demo-status">
          <span class="status-label">Estado:</span>
          <span :class="['status-pill', 'pill-' + state]"><span v-if="state === 'pending'" class="spinner"></span>{{ stateText }}</span>
        </div>
        <div class="log-box">
          <div v-if="!logs.length" class="log-empty">Pulsa «Crear promesa» para ver el flujo de ejecución…</div>
          <div v-for="(l, i) in logs" :key="i" :class="['log-line', 'log-' + l.type]">
            <span class="log-time">{{ l.time }}</span>{{ l.text }}
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Encadenamiento (Chaining)</h2>
      <p class="section-desc">Cada <code>.then()</code> devuelve una <strong>nueva promesa</strong>. Lo que retornes dentro se pasa al siguiente eslabón; si retornas otra promesa, la cadena espera a que se resuelva. Así se evita el <em>callback hell</em>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Pasando valores por la cadena</h3>
          </div>
          <CodeBlock language="javascript" code="function esperar(ms, valor) {
  return new Promise(resolve => setTimeout(() => resolve(valor), ms));
}

esperar(500, 2)
  .then(n => n * 10)                 // 20 (valor normal)
  .then(n => esperar(500, n + 5))    // retorna otra promesa → espera
  .then(n => {
    console.log(n);                  // 25
    return n * 2;
  })
  .then(n => console.log(n))         // 50
  .catch(err => console.error(err))
  .finally(() => console.log('Listo'));" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Propagación de errores</h3>
          </div>
          <p>Un error (<code>throw</code> o promesa rechazada) salta todos los <code>.then</code> hasta el siguiente <code>.catch</code>. Después del <code>.catch</code>, la cadena <strong>se recupera</strong> y continúa.</p>
          <CodeBlock language="javascript" code="Promise.resolve(1)
  .then(n => {
    throw new Error('Falló el paso 2');
  })
  .then(n => console.log('No se ejecuta'))   // saltado
  .catch(err => {
    console.error(err.message);              // Falló el paso 2
    return 'valor de recuperación';          // la cadena continúa
  })
  .then(v => console.log(v))                 // valor de recuperación
  .finally(() => console.log('Siempre'));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Métodos Estáticos y Combinadores</h2>
      <p class="section-desc">Cuando trabajas con <strong>varias promesas a la vez</strong>, los combinadores deciden cuándo y cómo se resuelve el conjunto.</p>
      <div class="cards-grid">
        <div class="comb-card">
          <div class="comb-name">Promise.all</div>
          <div class="comb-desc">Espera a <strong>todas</strong>. Si una falla, rechaza inmediatamente.</div>
        </div>
        <div class="comb-card">
          <div class="comb-name">Promise.allSettled</div>
          <div class="comb-desc">Espera a todas y devuelve el estado de cada una. <strong>Nunca rechaza.</strong></div>
        </div>
      </div><br>
      <div class="cards-grid">
        <div class="comb-card">
          <div class="comb-name">Promise.race</div>
          <div class="comb-desc">Se resuelve/rechaza con la <strong>primera</strong> que termine (éxito o error).</div>
        </div>
        <div class="comb-card">
          <div class="comb-name">Promise.any</div>
          <div class="comb-desc">Se resuelve con la primera <strong>cumplida</strong>. Rechaza solo si todas fallan.</div>
        </div>
      </div><br><br>
      <div class="card recommended">
        <div class="card-header">
          <h3>Demo: Compara los combinadores</h3>
        </div>
        <p>Tres tareas simuladas: <span class="task t-a">A · 600 ms ✔</span> <span class="task t-b">B · 1000 ms ✖</span> <span class="task t-c">C · 1400 ms ✔</span></p>
        <div class="comb-buttons">
          <button v-for="m in metodos" :key="m" :class="['seg-btn', { active: metodoActivo === m }]" :disabled="combRunning" @click="ejecutarCombinador(m)">{{ m }}</button>
        </div>
        <div class="log-box small">
          <div v-if="!combResultado" class="log-empty">Elige un método para ejecutarlo…</div>
          <template v-else>
            <div class="log-line log-info"><span class="log-time">método</span>Promise.{{ combResultado.metodo }}([A, B, C])</div>
            <div class="log-line" :class="combResultado.ok ? 'log-ok' : 'log-error'">
              <span class="log-time">{{ combResultado.ok ? 'cumplida' : 'rechazada' }}</span>{{ combResultado.texto }}
            </div>
            <div class="log-line log-info"><span class="log-time">tiempo</span>{{ combResultado.ms }} ms</div>
          </template>
          <div v-if="combRunning" class="log-line log-info"><span class="log-time">…</span>Ejecutando tareas</div>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Código de los combinadores</h3>
          </div>
          <CodeBlock language="javascript" code="const a = fetch('/api/usuarios');
const b = fetch('/api/pedidos');
const c = fetch('/api/productos');

// Todas deben cumplirse (falla rápido)
const [usuarios, pedidos, productos] = await Promise.all([a, b, c]);

// Resultado individual de cada una, sin rechazar nunca
const resultados = await Promise.allSettled([a, b, c]);
resultados.forEach(r => {
  if (r.status === 'fulfilled') console.log('OK:', r.value);
  else console.log('Error:', r.reason);
});

// La más rápida gana (éxito o fallo)
const primera = await Promise.race([a, b, c]);

// La primera exitosa (ignora los fallos)
try {
  const primeraOk = await Promise.any([a, b, c]);
} catch (e) {
  console.log(e instanceof AggregateError); // true: todas fallaron
  console.log(e.errors);
}" />
        </div>

        <div class="card recommended">
          <div class="card-header">
            <h3>Atajos y novedades</h3>
          </div>
          <CodeBlock language="javascript" code="// Promesas ya resueltas / rechazadas
const ok  = Promise.resolve(42);
const bad = Promise.reject(new Error('boom'));

// Promise.withResolvers() — ES2024
// Evita el patrón 'let resolve; new Promise(r => resolve = r)'
const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => resolve('Listo desde fuera'), 1000);
console.log(await promise); // Listo desde fuera

// Promise.try() — ejecuta una función (sync o async)
// y siempre devuelve una promesa (soporte creciente)
Promise.try(() => JSON.parse(texto))
  .then(datos => console.log(datos))
  .catch(err => console.error('JSON inválido'));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">async / await</h2>
      <p class="section-desc">Una función <code>async</code> <strong>siempre devuelve una promesa</strong> y <code>await</code> pausa la función hasta que la promesa se resuelva, sin bloquear el hilo principal.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Manejo de errores con try/catch</h3>
          </div>
          <CodeBlock language="javascript" code="async function cargarUsuario(id) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

    // fetch NO rechaza con errores HTTP (404, 500): hay que revisarlo
    if (!respuesta.ok) {
      throw new Error('HTTP ' + respuesta.status);
    }

    const usuario = await respuesta.json();
    console.log(usuario.name, usuario.email);
    return usuario;
  } catch (error) {
    console.error('No se pudo cargar:', error.message);
  } finally {
    console.log('Petición finalizada');
  }
}

cargarUsuario(1);" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Secuencial vs Paralelo</h3>
            <span class="badge warning">Rendimiento</span>
          </div>
          <p>Hacer <code>await</code> uno tras otro suma los tiempos. Si las tareas son independientes, lánzalas a la vez.</p>
          <CodeBlock language="javascript" code="// Secuencial: tarda ~ 1s + 1s = 2s
const usuario = await obtenerUsuario();  // 1s
const pedidos = await obtenerPedidos();  // 1s
// Paralelo: tarda ~ 1s (la más lenta)
const [usuario2, pedidos2] = await Promise.all([
  obtenerUsuario(),
  obtenerPedidos()
]);

// Iterar con await en secuencia (cuando el orden importa)
for (const id of [1, 2, 3]) {
  const u = await obtenerUsuario(id);
  console.log(u);
}

// Iterar en paralelo
const usuarios = await Promise.all(
  [1, 2, 3].map(id => obtenerUsuario(id))
);" />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>Top-level await</h3>
        </div>
        <p>En módulos ES (<code>type=&quot;module&quot;</code> o archivos <code>.mjs</code>) puedes usar <code>await</code> fuera de una función.</p>
        <CodeBlock language="javascript" code="// main.mjs  (módulo ES)
const respuesta = await fetch('/api/config');
const config = await respuesta.json();

console.log('Configuración cargada:', config);" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Patrones Útiles</h2>
      <p class="section-desc">Recetas comunes que combinan promesas, timers y cancelación.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Promisificar: sleep y callbacks</h3>
          </div>
          <CodeBlock language="javascript" code="// sleep reutilizable
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function demo() {
  console.log('Inicio');
  await sleep(1000);
  console.log('Pasó 1 segundo');
}

// Convertir una función con callback en promesa
function leerConPromesa(ruta) {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, 'utf-8', (err, datos) => {
      if (err) reject(err);
      else resolve(datos);
    });
  });
}

// Node.js ya lo trae hecho
import { readFile } from 'node:fs/promises';
const texto = await readFile('datos.txt', 'utf-8');" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Timeout y cancelación</h3>
          </div>
          <CodeBlock language="javascript" code="// Cancelar un fetch si tarda más de 3 segundos
try {
  const res = await fetch('/api/lento', {
    signal: AbortSignal.timeout(3000)
  });
  console.log(await res.json());
} catch (e) {
  if (e.name === 'TimeoutError') console.log('Tardó demasiado');
}

// Cancelación manual con AbortController
const controller = new AbortController();
fetch('/api/datos', { signal: controller.signal })
  .catch(e => console.log(e.name)); // AbortError

controller.abort();

// Timeout genérico con Promise.race
const conTimeout = (promesa, ms) =>
  Promise.race([
    promesa,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms))
  ]);" />
        </div>
      </div><br><br>
      <div class="card recommended">
        <div class="card-header"><h3>Reintentos con espera (retry)</h3></div>
        <CodeBlock language="javascript" code="async function conReintentos(fn, intentos = 3, espera = 500) {
  for (let i = 1; i <= intentos; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === intentos) throw error;      // último intento: propagar
      console.log('Intento ' + i + ' falló, reintentando…');
      await sleep(espera * i);              // espera creciente
    }
  }
}

const datos = await conReintentos(() => fetch('/api/inestable').then(r => r.json()));" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Promesas y el Event Loop</h2>
      <p class="section-desc">Los callbacks de las promesas van a la cola de <strong>microtareas</strong>, que se vacía <strong>antes</strong> de la cola de macrotareas (<code>setTimeout</code>, eventos…). Por eso una promesa ya resuelta siempre le gana a un <code>setTimeout(…, 0)</code>.</p>
      <div class="card info">
        <CodeBlock language="javascript" code="console.log('1. Síncrono');

setTimeout(() => console.log('4. Macrotarea (setTimeout)'), 0);

Promise.resolve().then(() => console.log('3. Microtarea (promesa)'));

console.log('2. Síncrono');

// Orden de salida:
// 1. Síncrono
// 2. Síncrono
// 3. Microtarea (promesa)
// 4. Macrotarea (setTimeout)" />
        <div class="loop-visual">
          <div class="loop-step ls-sync">Código síncrono</div>
          <div class="loop-arrow">→</div>
          <div class="loop-step ls-micro">Microtareas<br /><small>promesas, queueMicrotask</small></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step ls-macro">Macrotareas<br /><small>setTimeout, eventos, I/O</small></div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Errores Comunes</h2>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Trampas frecuentes</h3>
          </div>
          <CodeBlock language="javascript" code="// 1. Olvidar el return dentro de .then
obtenerUsuario()
  .then(u => { obtenerPedidos(u.id); })   // no retorna → siguiente then recibe undefined
  .then(pedidos => console.log(pedidos)); // undefined

// Solución: Retornar la promesa
obtenerUsuario()
  .then(u => obtenerPedidos(u.id))
  .then(pedidos => console.log(pedidos));

// 2. forEach no espera los await
ids.forEach(async id => {
  await procesar(id);
});
console.log('Listo'); // se imprime ANTES de terminar

// Solución: for...of o Promise.all
await Promise.all(ids.map(id => procesar(id)));
console.log('Listo');

// 3. Anti-patrón: envolver una promesa en otra
function obtener() {
  return new Promise(resolve => {
    fetch('/api').then(r => resolve(r.json()));
  });
}
// Solución: Simplemente retornar la promesa existente
const obtener2 = () => fetch('/api').then(r => r.json());" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Rechazos sin manejar</h3>
          </div>
          <p>Una promesa rechazada sin <code>.catch</code> dispara <code>unhandledrejection</code>. En Node.js 15+ esto <strong>termina el proceso</strong>.</p>
          <CodeBlock language="javascript" code="// 1. Nadie captura el error
Promise.reject(new Error('Sin manejar'));

// Red de seguridad global (navegador)
window.addEventListener('unhandledrejection', event => {
  console.error('Rechazo sin manejar:', event.reason);
  event.preventDefault();
});

// Red de seguridad global (Node.js)
process.on('unhandledRejection', (reason) => {
  console.error('Rechazo sin manejar:', reason);
});

// 2. try/catch no captura errores de promesas sin await
try {
  fetch('/api/falla');            // sin await: el error escapa
} catch (e) { /* nunca entra */ }

// Solución: Con await sí
try {
  await fetch('/api/falla');
} catch (e) {
  console.error('Capturado:', e);
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'callbacks', text: 'Callbacks' },
      { techId: 'js', moduleId: 'objetosNativos', text: 'Objetos Nativos y Timers' },
      { techId: 'js', moduleId: 'eventos', text: 'Eventos del DOM' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

type PromiseState = 'idle' | 'pending' | 'fulfilled' | 'rejected'
interface LogEntry { time: string; text: string; type: 'info' | 'ok' | 'error' }

const outcome = ref<'ok' | 'fail'>('ok')
const delay = ref(1500)
const state = ref<PromiseState>('idle')
const running = ref(false)
const logs = ref<LogEntry[]>([])

const stateText = computed(() => ({
  idle: 'sin crear',
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
}[state.value]))

function log(text: string, type: LogEntry['type'] = 'info', inicio = 0) {
  logs.value.push({ time: `+${Date.now() - inicio} ms`, text, type })
}

function crearPromesa() {
  const inicio = Date.now()
  const resultado = outcome.value
  const espera = delay.value

  logs.value = []
  state.value = 'pending'
  running.value = true
  log('new Promise(...) creada → pending', 'info', inicio)

  const promesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (resultado === 'ok') resolve('Datos del usuario')
      else reject(new Error('Fallo de red'))
    }, espera)
  })

  promesa
    .then(valor => {
      state.value = 'fulfilled'
      log(`.then → recibió "${valor}"`, 'ok', inicio)
      return valor.length
    })
    .then(longitud => {
      log(`.then (encadenado) → longitud = ${longitud}`, 'ok', inicio)
    })
    .catch((error: Error) => {
      state.value = 'rejected'
      log(`.catch → ${error.message}`, 'error', inicio)
    })
    .finally(() => {
      log('.finally → se ejecuta siempre', 'info', inicio)
      running.value = false
    })
}

type Metodo = 'all' | 'allSettled' | 'race' | 'any'
const metodos: Metodo[] = ['all', 'allSettled', 'race', 'any']
const metodoActivo = ref<Metodo | null>(null)
const combRunning = ref(false)
const combResultado = ref<{ metodo: Metodo; ok: boolean; texto: string; ms: number } | null>(null)

function tarea(nombre: string, ms: number, exito: boolean) {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => (exito ? resolve(nombre) : reject(new Error('Falló ' + nombre))), ms)
  })
}

async function ejecutarCombinador(metodo: Metodo) {
  metodoActivo.value = metodo
  combRunning.value = true
  combResultado.value = null
  const inicio = Date.now()
  const tareas = () => [tarea('A', 600, true), tarea('B', 1000, false), tarea('C', 1400, true)]

  let ok = true
  let texto = ''
  try {
    if (metodo === 'all') {
      texto = JSON.stringify(await Promise.all(tareas()))
    } else if (metodo === 'allSettled') {
      const r = await Promise.allSettled(tareas())
      texto = r.map(x => (x.status === 'fulfilled' ? `✔ ${x.value}` : `✖ ${(x.reason as Error).message}`)).join('  |  ')
    } else if (metodo === 'race') {
      texto = 'Ganó: ' + (await Promise.race(tareas()))
    } else {
      const promiseAny = (Promise as unknown as { any: (t: Promise<string>[]) => Promise<string> }).any
      texto = 'Primera cumplida: ' + (await promiseAny.call(Promise, tareas()))
    }
  } catch (e) {
    ok = false
    texto = (e as Error).message
  }

  combResultado.value = { metodo, ok, texto, ms: Date.now() - inicio }
  combRunning.value = false
}
</script>
<style scoped>
.state-diagram {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: stretch;
}

.state-box {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  border: 1px solid;
  flex: 1;
}

.st-name { font-family: monospace; font-weight: 700; font-size: 0.9rem; }
.st-desc { font-size: 0.78rem; color: var(--text-secondary); }

.st-pending   { background: rgba(251,191,36,0.07); border-color: rgba(251,191,36,0.3); }
.st-pending .st-name { color: #fbbf24; }
.st-fulfilled { background: rgba(52,211,153,0.07); border-color: rgba(52,211,153,0.3); }
.st-fulfilled .st-name { color: #34d399; }
.st-rejected  { background: rgba(248,113,113,0.07); border-color: rgba(248,113,113,0.3); }
.st-rejected .st-name { color: #f87171; }

.state-branches {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
}

.state-arrow {
  font-family: monospace;
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-align: center;
  flex: 1;
}

.state-final { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.state-final .state-box { min-width: 140px; }

.demo-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.control-group { display: flex; flex-direction: column; gap: 0.4rem; min-width: 180px; }

.control-label { font-size: 0.8rem; color: var(--text-secondary); }
.control-label strong { color: var(--text-primary); }

.seg, .comb-buttons { display: flex; gap: 0.4rem; flex-wrap: wrap; }

.seg-btn {
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}

.seg-btn:hover:not(:disabled) { border-color: rgba(251,191,36,0.5); color: var(--text-primary); }
.seg-btn.active { background: rgba(251,191,36,0.15); border-color: rgba(251,191,36,0.5); color: #fbbf24; }
.seg-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.range { width: 100%; accent-color: #fbbf24; }

.run-btn {
  padding: 0.55rem 1.3rem;
  border-radius: 8px;
  border: none;
  background: #fbbf24;
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.2s;
}

.run-btn:hover:not(:disabled) { transform: translateY(-1px); }
.run-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.demo-status {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.status-label { font-size: 0.85rem; color: var(--text-secondary); }

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  font-family: monospace;
  font-size: 0.82rem;
  font-weight: 700;
  border: 1px solid;
  transition: all 0.3s;
}

.pill-idle      { color: var(--text-secondary); border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); }
.pill-pending   { color: #fbbf24; border-color: rgba(251,191,36,0.4); background: rgba(251,191,36,0.1); }
.pill-fulfilled { color: #34d399; border-color: rgba(52,211,153,0.4); background: rgba(52,211,153,0.1); }
.pill-rejected  { color: #f87171; border-color: rgba(248,113,113,0.4); background: rgba(248,113,113,0.1); }

.spinner {
  width: 0.8rem;
  height: 0.8rem;
  border: 2px solid rgba(251,191,36,0.3);
  border-top-color: #fbbf24;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.log-box {
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  font-family: monospace;
  font-size: 0.8rem;
  min-height: 7rem;
}

.log-box.small { min-height: 5rem; }

.log-empty { color: var(--text-secondary); opacity: 0.7; }

.log-line { line-height: 1.8; color: var(--text-secondary); word-break: break-word; }
.log-time {
  display: inline-block;
  min-width: 5.5rem;
  margin-right: 0.6rem;
  color: rgba(255,255,255,0.35);
}
.log-ok    { color: #34d399; }
.log-error { color: #f87171; }
.log-info  { color: #93c5fd; }

.comb-card {
  padding: 0.8rem 1rem;
  border-radius: 10px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-left: 3px solid #fbbf24;
}

.comb-name { font-family: monospace; font-weight: 700; color: #fbbf24; margin-bottom: 0.3rem; font-size: 0.9rem; }
.comb-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

.task {
  display: inline-block;
  padding: 0.1rem 0.55rem;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.78rem;
  margin-right: 0.3rem;
}
.t-a, .t-c { background: rgba(52,211,153,0.12); color: #34d399; }
.t-b { background: rgba(248,113,113,0.12); color: #f87171; }

.comb-buttons { margin: 0.8rem 0; }

.loop-visual {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.loop-step {
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: 1px solid;
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  min-width: 150px;
}

.loop-step small { font-weight: 400; color: var(--text-secondary); font-size: 0.72rem; }

.ls-sync  { background: rgba(99,102,241,0.08); border-color: rgba(99,102,241,0.35); color: #818cf8; }
.ls-micro { background: rgba(52,211,153,0.08); border-color: rgba(52,211,153,0.35); color: #34d399; }
.ls-macro { background: rgba(251,191,36,0.08); border-color: rgba(251,191,36,0.35); color: #fbbf24; }

.loop-arrow { align-self: center; color: var(--text-secondary); font-size: 1.2rem; }
</style>
