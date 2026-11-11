<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Async / Await</h1>
      <p class="subtitle">Escribe código asíncrono que se lee de arriba hacia abajo, sin cadenas de <code>.then()</code> y con <code>try/catch</code> de toda la vida.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">¿Qué son async y await?</h2>
      <p class="section-desc">Son palabras clave (ES2017) para trabajar con <a class="link" href="#" @click.prevent="openModule('js', 'promesas')">promesas</a> de una forma más sencilla. Seguimos usando promesas, pero abandonamos el encadenamiento de <code>.then()</code> a favor de un estilo secuencial más tradicional.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>async</h3>
          </div>
          <p>Marca una función como <strong>asíncrona</strong>. Lo que retorne se envuelve automáticamente en una promesa, y habilita el uso de <code>await</code> dentro de ella.</p>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>await</h3>
          </div>
          <p><strong>Pausa la función</strong> hasta que la promesa se resuelva y devuelve su valor. Si la promesa se rechaza, lanza una excepción en ese punto.</p>
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>Mismo resultado, dos estilos</h3>
        </div>
        <div class="compare-grid">
          <div>
            <div class="compare-label cl-old">Con .then()</div>
            <CodeBlock language="javascript" code="function cargarPerfil(id) {
  return obtenerUsuario(id)
    .then(usuario => {
      return obtenerPedidos(usuario.id)
        .then(pedidos => ({ usuario, pedidos }));
    })
    .catch(err => {
      console.error(err);
    });
}" />
          </div>
          <div>
            <div class="compare-label cl-new">Con async / await</div>
            <CodeBlock language="javascript" code="async function cargarPerfil(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const pedidos = await obtenerPedidos(usuario.id);
    return { usuario, pedidos };
  } catch (err) {
    console.error(err);
  }
}" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">La palabra clave async</h2>
      <p class="section-desc">Una función <code>async</code> <strong>siempre devuelve una promesa</strong>, sin importar lo que retornes dentro.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Siempre devuelve una promesa</h3>
          </div>
          <CodeBlock language="javascript" code="async function a() { return 42; }
// equivale a: return Promise.resolve(42)

async function b() { throw new Error('boom'); }
// equivale a: return Promise.reject(new Error('boom'))

async function c() { return fetch('/api'); }
// si retornas una promesa, se 'aplana' (no hay promesa de promesa)

a().then(v => console.log(v));        // 42
b().catch(e => console.log(e.message)); // boom

console.log(a() instanceof Promise);   // true" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Dónde se puede usar</h3>
          </div>
          <CodeBlock language="javascript" code="// Declaración
async function saludar() { /* ... */ }

// Expresión
const saludar2 = async function () { /* ... */ };

// Arrow function
const saludar3 = async () => { /* ... */ };

// Método de objeto
const api = {
  async obtener(id) { /* ... */ }
};

// Método de clase
class Servicio {
  async cargar() { /* ... */ }
  static async crear() { /* ... */ }
}

// IIFE asíncrona (útil fuera de módulos)
(async () => {
  const datos = await obtenerDatos();
  console.log(datos);
})();" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">La palabra clave await</h2>
      <p class="section-desc"><code>await</code> suspende la ejecución de la función <code>async</code> hasta que la promesa se resuelva; mientras tanto, el hilo principal queda libre para atender otras tareas (eventos, renderizado, otras promesas).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Qué hace por debajo</h3>
          </div>
          <p><code>await expr</code> es, en esencia, azúcar sintáctico sobre <code>.then()</code>: el resto de la función se convierte en el callback.</p>
          <CodeBlock language="javascript" code="async function ejemplo() {
  const a = await promesaA();   // pausa aquí
  const b = await promesaB(a);  // y luego aquí
  return a + b;
}

// Conceptualmente:
function ejemplo2() {
  return promesaA().then(a =>
    promesaB(a).then(b => a + b)
  );
}" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Reglas importantes</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Solo en async:</span> await funciona dentro de una función async o en el nivel superior de un módulo ES.</li>
            <li><span class="def-term">No bloquea el hilo:</span> pausa <em>solo esa función</em>; el resto del programa sigue corriendo.</li>
            <li><span class="def-term">Acepta cualquier valor:</span> si no es una promesa, se resuelve en la siguiente microtarea.</li>
            <li><span class="def-term">Thenables:</span> cualquier objeto con método .then() puede esperarse.</li>
          </ul>
          <CodeBlock language="javascript" code="const x = await 5;            // 5 (valor normal)
const y = await Promise.resolve(7); // 7
const z = await { then(res) { res('thenable'); } }; // 'thenable'

function normal() {
  // const v = await algo();  // SyntaxError: await solo en async
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Demo 1: Saludar en 2 segundos</h2>
      <p class="section-desc">Observa el orden real de ejecución: la función <code>async</code> se pausa en el <code>await</code>, pero el código que la llamó <strong>continúa de inmediato</strong>.</p>
      <div class="cards-grid">
        <div class="card demo-card info">
          <div class="demo-row">
            <button class="run-btn" :disabled="saludoRunning" @click="ejecutarSaludo">
              {{ saludoRunning ? 'Esperando…' : '▶ Saludar en 2 segundos' }}
            </button>
            <span v-if="saludoRunning" class="spinner"></span>
          </div>
          <div v-if="saludoMensaje" class="greeting">{{ saludoMensaje }}</div>
          <div class="log-box">
            <div v-if="!saludoLog.length" class="log-empty">Pulsa el botón para ver el flujo de ejecución…</div>
            <div v-for="(l, i) in saludoLog" :key="i" class="log-line">{{ l }}</div>
          </div>
        </div>
        <div>
          <CodeBlock language="javascript" code="const sleep = ms => new Promise(r => setTimeout(r, ms));

async function saludar() {
  console.log('1. Antes del await');
  await sleep(2000);                    // se pausa 2 s
  console.log('3. Después del await');
  return '¡Hola desde async/await!';
}

async function main() {
  console.log('0. Llamando a saludar()');
  const promesa = saludar();
  console.log('2. La línea siguiente NO espera');
  const mensaje = await promesa;
  console.log('4. Resultado:', mensaje);
}

main();" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Manejo de errores</h2>
      <p class="section-desc">Un <code>await</code> sobre una promesa rechazada <strong>lanza una excepción</strong>, así que se captura con el clásico <code>try/catch/finally</code>.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>try / catch / finally</h3>
          </div>
          <CodeBlock language="javascript" code="async function cargarUsuario(id) {
  mostrarSpinner();
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

    // fetch NO rechaza con 404/500: revisa res.ok
    if (!res.ok) throw new Error('HTTP ' + res.status);

    return await res.json();
  } catch (error) {
    console.error('No se pudo cargar:', error.message);
    return null;
  } finally {
    ocultarSpinner(); // siempre se ejecuta
  }
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Alternativas al try/catch</h3>
          </div>
          <CodeBlock language="javascript" code="// 1. .catch() sobre la llamada
const datos = await obtenerDatos().catch(() => null);

// 2. Helper que devuelve [error, datos] (estilo Go)
async function to(promesa) {
  try {
    return [null, await promesa];
  } catch (err) {
    return [err, null];
  }
}

const [err, usuario] = await to(obtenerUsuario(1));
if (err) return console.error(err);
console.log(usuario);

// 3. Capturar solo al final de una llamada compuesta
cargarTodo().catch(manejarError);" />
        </div>
      </div>
      <h3 class="section-title">Demo 2: Consultar datos de un usuario</h3>
      <div class="cards-grid">
        <div class="card demo-card info">
          <div class="demo-row">
            <label class="id-label">ID de usuario
              <input v-model.number="userId" type="number" min="1" class="id-input" :disabled="fState === 'loading'" />
            </label>
            <button class="run-btn" :disabled="fState === 'loading'" @click="consultarUsuario">
              {{ fState === 'loading' ? 'Consultando…' : '▶ Consultar' }}
            </button>
            <button class="seg-btn" :disabled="fState === 'loading'" @click="userId = 999; consultarUsuario()">Probar ID inexistente</button>
          </div>
          <div class="demo-status">
            <span class="status-label">Estado:</span>
            <span :class="['status-pill', 'pill-' + fState]">
              <span v-if="fState === 'loading'" class="spinner"></span>
              {{ fStateText }}
            </span>
          </div>
          <div v-if="fState === 'ok' && fData" class="user-card">
            <div class="user-avatar">{{ fData.name.charAt(0) }}</div>
            <div>
              <div class="user-name">{{ fData.name }}</div>
              <div class="user-line">✉ {{ fData.email }}</div>
              <div class="user-line">📍 {{ fData.city }} · 🏢 {{ fData.company }}</div>
            </div>
          </div>
          <div v-else-if="fState === 'error'" class="user-error">
            <strong>catch →</strong> {{ fError }}
          </div>
          <div v-else-if="fState === 'idle'" class="log-empty">Aún no se ha hecho ninguna consulta.</div>
        </div>
        <div>
          <CodeBlock language="javascript" code="async function consultarUsuario(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: usuario no encontrado`);
    }

    const usuario = await res.json();
    console.log(usuario.name, usuario.email);
  } catch (error) {
    // Errores de red y errores HTTP lanzados arriba
    console.error('Error:', error.message);
  }
}

consultarUsuario(1);    // ✔ datos del usuario
consultarUsuario(999);  // ✖ HTTP 404" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Secuencial vs Paralelo</h2>
      <p class="section-desc">El error de rendimiento más común: usar <code>await</code> uno tras otro con tareas <strong>independientes</strong>. Los tiempos se suman. Lanza las promesas a la vez y espera el conjunto con <code>Promise.all</code>.</p>
      <div class="card demo-card info">
        <div class="card-header">
          <h3>Demo 3: Línea de tiempo de ejecución</h3>
        </div>
        <div class="demo-row">
          <button class="run-btn" :disabled="running2" @click="runTimeline('seq')">▶ Secuencial (await uno a uno)</button>
          <button class="run-btn run-alt" :disabled="running2" @click="runTimeline('par')">▶ Paralelo (Promise.all)</button>
        </div>
        <div class="gantt">
          <div v-for="b in tasks" :key="b.name" class="gantt-row">
            <span class="gantt-name">{{ b.name }}<small>{{ b.ms }} ms</small></span>
            <div class="gantt-track">
              <div :class="['gantt-bar', b.color]" :style="barStyle(b)"></div>
            </div>
          </div>
          <div class="gantt-axis">
            <span>0</span><span>700</span><span>1400</span><span>2100</span><span>2800 ms</span>
          </div>
        </div>
        <div v-if="total2 !== null" :class="['timeline-result', mode === 'par' ? 'tr-ok' : 'tr-warn']">
          {{ mode === 'seq' ? 'Secuencial' : 'Paralelo' }}: <strong>{{ total2 }} ms</strong>
          <span v-if="mode === 'seq'"> (suma de todas: 800 + 1200 + 600)</span>
          <span v-else> (solo lo que tarda la más lenta: 1200)</span>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Secuencial (suma los tiempos)</h3>
          </div>
          <CodeBlock language="javascript" code="// ~ 800 + 1200 + 600 = 2600 ms
const usuario   = await obtenerUsuario();   // 800 ms
const pedidos   = await obtenerPedidos();   // 1200 ms
const productos = await obtenerProductos(); // 600 ms" />
          <p>Úsalo <strong>solo</strong> cuando cada paso necesita el resultado del anterior.</p>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Paralelo (gana la más lenta)</h3></div>
          <CodeBlock language="javascript" code="// ~ 1200 ms
const [usuario, pedidos, productos] = await Promise.all([
  obtenerUsuario(),
  obtenerPedidos(),
  obtenerProductos()
]);

// Variante: iniciar primero, esperar después
const pUsuario = obtenerUsuario();   // ya está corriendo
const pPedidos = obtenerPedidos();   // ya está corriendo
const usuario2 = await pUsuario;
const pedidos2 = await pPedidos;" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Bucles y await</h3>
          </div>
          <CodeBlock language="javascript" code="const ids = [1, 2, 3, 4];

// Secuencial: for...of (el orden importa)
for (const id of ids) {
  const u = await obtenerUsuario(id);
  console.log(u.name);
}

// Paralelo: map + Promise.all
const usuarios = await Promise.all(ids.map(id => obtenerUsuario(id)));

// forEach NO espera los await internos
ids.forEach(async (id) => {
  await obtenerUsuario(id);
});
console.log('Esto sale ANTES de que terminen');

// Secuencial con reduce (encadenar promesas)
await ids.reduce(
  (prev, id) => prev.then(() => obtenerUsuario(id)),
  Promise.resolve()
);" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Limitar la concurrencia</h3>.
          </div>
          <p>Lanzar 500 peticiones con <code>Promise.all</code> puede saturar el servidor. Procesa por lotes o con un pool de trabajadores.</p>
          <CodeBlock language="javascript" code="// Por lotes de N
async function enLotes(items, tam, fn) {
  const resultados = [];
  for (let i = 0; i < items.length; i += tam) {
    const lote = items.slice(i, i + tam);
    resultados.push(...await Promise.all(lote.map(fn)));
  }
  return resultados;
}

// Pool: máximo N tareas simultáneas
async function conLimite(items, limite, fn) {
  const resultados = [];
  let siguiente = 0;

  async function trabajador() {
    while (siguiente < items.length) {
      const i = siguiente++;
      resultados[i] = await fn(items[i]);
    }
  }

  await Promise.all(Array.from({ length: limite }, trabajador));
  return resultados;
}

await conLimite(urls, 3, url => fetch(url).then(r => r.json()));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">return vs return await</h2>
      <p class="section-desc">Dentro de un <code>try/catch</code>, retornar una promesa <strong>sin</strong> <code>await</code> hace que el rechazo escape del <code>catch</code>, porque la función ya terminó cuando la promesa falla.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>El catch no se ejecuta</h3>
          </div>
          <CodeBlock language="javascript" code="async function a() {
  try {
    return obtenerDatos();        // sin await
  } catch (e) {
    console.log('Nunca llega aquí');
    return null;
  }
}
// el rechazo se propaga al llamador" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Ahora sí se captura</h3>
          </div>
          <CodeBlock language="javascript" code="async function b() {
  try {
    return await obtenerDatos();  // con await
  } catch (e) {
    console.log('Capturado:', e.message);
    return null;
  }
}

// Fuera de un try/catch, 'return promesa' y
// 'return await promesa' son equivalentes." />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Iteración asíncrona</h2>
      <p class="section-desc">Cuando los datos llegan <strong>poco a poco</strong> (páginas de una API, streams, eventos), usa <code>for await...of</code> y los <strong>generadores asíncronos</strong>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>for await...of</h3>
          </div>
          <CodeBlock language="javascript" code="// Itera un array de promesas, esperando cada una en orden
const promesas = [obtener(1), obtener(2), obtener(3)];
for await (const resultado of promesas) {
  console.log(resultado);
}

// Leer una respuesta en streaming
const res = await fetch('/api/stream');
const decoder = new TextDecoder();
for await (const chunk of res.body) {
  console.log(decoder.decode(chunk, { stream: true }));
}

// Node.js: leer un archivo línea por línea
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const rl = createInterface({ input: createReadStream('log.txt') });
for await (const linea of rl) {
  console.log(linea);
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Generadores asíncronos</h3>
          </div>
          <p>Combinan <code>async</code> y <code>function*</code>: producen valores con <code>yield</code> mientras esperan operaciones asíncronas. Ideales para <strong>paginación</strong>.</p>
          <CodeBlock language="javascript" code="async function* paginas(url) {
  let pagina = 1;
  while (true) {
    const res = await fetch(`${url}?page=${pagina}`);
    const datos = await res.json();
    if (datos.length === 0) return;   // fin
    yield datos;
    pagina++;
  }
}

for await (const lote of paginas('/api/productos')) {
  console.log('Página con', lote.length, 'productos');
}

// Array.fromAsync (ES2024): recoger todo en un array
const todos = await Array.fromAsync(paginas('/api/productos'));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Top-level await y Node.js</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Top-level await</h3>
          </div>
          <p>En módulos ES puedes usar <code>await</code> directamente, sin envolverlo en una función <code>async</code>.</p>
          <CodeBlock language="javascript" code="// config.mjs  (módulo ES; también válido en el navegador con type module)
const res = await fetch('/api/config');
export const config = await res.json();

// Otro módulo que lo importe esperará a que termine:
// import { config } from './config.mjs';

// En CommonJS (require) NO está disponible:
// usa una IIFE async en su lugar." />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>APIs asíncronas en Node.js</h3>
          </div>
          <CodeBlock language="javascript" code="// fs con promesas (en vez de callbacks)
import { readFile, writeFile } from 'node:fs/promises';

const texto = await readFile('datos.txt', 'utf-8');
await writeFile('copia.txt', texto);

// sleep nativo, sin crear la promesa a mano
import { setTimeout as sleep } from 'node:timers/promises';
await sleep(1000);

// Convertir una API de callbacks a promesas
import { promisify } from 'node:util';
import { exec } from 'node:child_process';

const execAsync = promisify(exec);
const { stdout } = await execAsync('node --version');
console.log(stdout);" />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>async en TypeScript</h3>
        </div>
        <p>Una función <code>async</code> siempre devuelve <code>Promise&lt;T&gt;</code>. Anota el tipo de lo que resuelve la promesa, no la promesa en sí.</p>
        <CodeBlock language="typescript" code="interface Usuario {
  id: number;
  name: string;
  email: string;
}

async function obtenerUsuario(id: number): Promise<Usuario> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<Usuario>;
}

// Awaited<T> extrae el tipo resuelto de una promesa
type Resultado = Awaited<ReturnType<typeof obtenerUsuario>>; // Usuario" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">await y el Event Loop</h2>
      <p class="section-desc">Lo que viene después de un <code>await</code> se ejecuta como <strong>microtarea</strong>, por lo que corre antes que cualquier <code>setTimeout</code>, incluso con 0 ms.</p>
      <div class="card info">
        <CodeBlock language="javascript" code="async function prueba() {
  console.log('2. Dentro de prueba (síncrono hasta el primer await)');
  await null;
  console.log('4. Continúa tras el await (microtarea)');
}

console.log('1. Inicio');
setTimeout(() => console.log('5. setTimeout (macrotarea)'), 0);
prueba();
console.log('3. Fin del script');

// Orden: 1, 2, 3, 4, 5" />
        <div class="loop-visual">
          <div class="loop-step ls-sync">Código síncrono<br><small>hasta el primer await</small></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step ls-micro">Microtareas<br><small>continuación tras await</small></div>
          <div class="loop-arrow">→</div>
          <div class="loop-step ls-macro">Macrotareas<br><small>setTimeout, eventos, I/O</small></div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Errores comunes</h2>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Olvidos y trampas</h3>
          </div>
          <CodeBlock language="javascript" code="// Error 1. Olvidar el await: obtienes una Promise, no el dato
const usuario = obtenerUsuario(1);
console.log(usuario.name);   // undefined (usuario es una Promise)

// Solución
const usuario2 = await obtenerUsuario(1);

// Error 2. await dentro de un callback que no es async
datos.map(d => await procesar(d));   // SyntaxError

// Solución
await Promise.all(datos.map(async d => await procesar(d)));

// Error 3. Condición con una promesa (siempre es truthy)
if (esAdmin(usuario)) { /* siempre entra */ }

// Solución
if (await esAdmin(usuario)) { /* ... */ }" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Errores que se escapan</h3>
          </div>
          <CodeBlock language="javascript" code="// Error: Llamar a una async sin await ni catch:
// el rechazo queda sin manejar (unhandled rejection)
async function guardar() { throw new Error('fallo'); }
guardar();

// Solución: Maneja siempre el resultado
guardar().catch(console.error);

// Solución: Event handlers async: el navegador ignora la promesa
button.addEventListener('click', async () => {
  await guardar();   // si falla, nadie lo captura
});

// Otra solución: try/catch dentro del handler
button.addEventListener('click', async () => {
  try {
    await guardar();
  } catch (e) {
    mostrarError(e);
  }
});" />
        </div>
      </div><br><br>
      <div class="card recommended">
        <div class="card-header">
          <h3>Buenas prácticas</h3>
        </div>
        <ul class="def-list">
          <li><span class="def-term">Independiente = paralelo:</span> si dos tareas no dependen entre sí, usa Promise.all en lugar de dos await seguidos.</li>
          <li><span class="def-term">Maneja los errores:</span> cada cadena de awaits debe terminar en un try/catch o un .catch().</li>
          <li><span class="def-term">Revisa res.ok:</span> fetch solo rechaza en errores de red, no en 404 o 500.</li>
          <li><span class="def-term">Evita await innecesarios:</span> no esperes dentro de un bucle si no necesitas el orden.</li>
          <li><span class="def-term">Cancela lo que puedas:</span> usa AbortController / AbortSignal.timeout() para peticiones lentas.</li>
          <li><span class="def-term">Una función async = una promesa:</span> el llamador debe esperar el resultado con await o .then().</li>
        </ul>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'promesas', text: 'Promesas' },
      { techId: 'js', moduleId: 'callbacks', text: 'Callbacks' },
      { techId: 'js', moduleId: 'objetosNativos', text: 'Objetos Nativos y Timers' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, onBeforeUnmount } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
import { modules } from '@/constants/modules'
import { useEditorStore } from '@/stores/editor'

const store = useEditorStore()

const openModule = (techId: string, moduleId: string) => {
  const module = modules[techId]?.find((m) => m.id === moduleId)
  if (module) {
    store.addTab({
      id: `${techId}-${moduleId}`,
      title: module.name,
      route: `/${techId}/${moduleId}`,
      moduleId,
      techId,
    })
  }
}

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

const saludoRunning = ref(false)
const saludoMensaje = ref('')
const saludoLog = ref<string[]>([])

async function ejecutarSaludo() {
  saludoRunning.value = true
  saludoMensaje.value = ''
  saludoLog.value = []
  const t0 = Date.now()
  const push = (msg: string) => saludoLog.value.push(`[+${Date.now() - t0} ms] ${msg}`)

  async function saludar() {
    push('1. Antes del await (dentro de saludar)')
    await sleep(2000)
    push('3. Después del await: la función continúa')
    return '¡Hola desde async/await!'
  }

  push('0. Llamando a saludar()')
  const promesa = saludar()
  push('2. La línea siguiente NO espera: el código principal sigue')
  const mensaje = await promesa
  saludoMensaje.value = mensaje
  push(`4. Resultado recibido: "${mensaje}"`)
  saludoRunning.value = false
}

type FetchState = 'idle' | 'loading' | 'ok' | 'error'
interface UserData { name: string; email: string; city: string; company: string }

const userId = ref(1)
const fState = ref<FetchState>('idle')
const fData = ref<UserData | null>(null)
const fError = ref('')

const fStateText = computed(() => ({
  idle: 'sin consultar',
  loading: 'cargando…',
  ok: 'éxito',
  error: 'error',
}[fState.value]))

async function consultarUsuario() {
  fState.value = 'loading'
  fData.value = null
  fError.value = ''
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}: usuario no encontrado`)
    const u = (await res.json()) as {
      name: string
      email: string
      address?: { city?: string }
      company?: { name?: string }
    }
    fData.value = {
      name: u.name,
      email: u.email,
      city: u.address?.city ?? '—',
      company: u.company?.name ?? '—',
    }
    fState.value = 'ok'
  } catch (e) {
    fError.value = (e as Error).message
    fState.value = 'error'
  }
}

interface Task { name: string; ms: number; color: string; start: number | null; end: number | null }

const tasks = reactive<Task[]>([
  { name: 'Usuario', ms: 800, color: 'bar-a', start: null, end: null },
  { name: 'Pedidos', ms: 1200, color: 'bar-b', start: null, end: null },
  { name: 'Productos', ms: 600, color: 'bar-c', start: null, end: null },
])

const SCALE = 2800
const now = ref(0)
const mode = ref<'seq' | 'par' | null>(null)
const running2 = ref(false)
const total2 = ref<number | null>(null)
let ticker: number | undefined

function barStyle(b: Task) {
  if (b.start === null) return { left: '0%', width: '0%' }
  const end = b.end ?? now.value
  return {
    left: `${(b.start / SCALE) * 100}%`,
    width: `${Math.max(((end - b.start) / SCALE) * 100, 0.5)}%`,
  }
}

async function runTimeline(m: 'seq' | 'par') {
  tasks.forEach(t => { t.start = null; t.end = null })
  mode.value = m
  total2.value = null
  running2.value = true
  now.value = 0

  const t0 = performance.now()
  ticker = window.setInterval(() => { now.value = performance.now() - t0 }, 40)

  const exec = async (t: Task) => {
    t.start = Math.round(performance.now() - t0)
    await sleep(t.ms)
    t.end = Math.round(performance.now() - t0)
  }

  if (m === 'seq') {
    for (const t of tasks) await exec(t)
  } else {
    await Promise.all(tasks.map(t => exec(t)))
  }

  total2.value = Math.round(performance.now() - t0)
  window.clearInterval(ticker)
  running2.value = false
}

onBeforeUnmount(() => window.clearInterval(ticker))
</script>
<style scoped>
.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.compare-label {
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.7rem;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.8rem;
  font-weight: 700;
}

.cl-old { background: rgba(248,113,113,0.15); color: #f87171; }
.cl-new { background: rgba(52,211,153,0.15); color: #34d399; }

.demo-card { display: flex; flex-direction: column; gap: 0.9rem; }

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  align-items: flex-end;
}

.run-btn {
  padding: 0.55rem 1.2rem;
  border-radius: 8px;
  border: none;
  background: #fbbf24;
  color: #1a1a1a;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.2s;
}

.run-btn.run-alt { background: #34d399; }
.run-btn:hover:not(:disabled) { transform: translateY(-1px); }
.run-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.seg-btn {
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.04);
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}

.seg-btn:hover:not(:disabled) { border-color: rgba(251,191,36,0.5); color: var(--text-primary); }
.seg-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.id-label {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.id-input {
  width: 100px;
  padding: 0.45rem 0.6rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(0,0,0,0.25);
  color: var(--text-primary);
  font-family: monospace;
}

.greeting {
  padding: 0.7rem 1rem;
  border-radius: 8px;
  background: rgba(52,211,153,0.1);
  border: 1px solid rgba(52,211,153,0.3);
  color: #34d399;
  font-weight: 700;
}

.log-box {
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  font-family: monospace;
  font-size: 0.8rem;
  min-height: 7rem;
}

.log-empty { color: var(--text-secondary); opacity: 0.7; font-size: 0.85rem; }
.log-line { line-height: 1.8; color: #93c5fd; word-break: break-word; }

.spinner {
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  border: 2px solid rgba(251,191,36,0.3);
  border-top-color: #fbbf24;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.demo-status { display: flex; align-items: center; gap: 0.6rem; }
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
}

.pill-idle { color: var(--text-secondary); border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); }
.pill-loading { color: #fbbf24; border-color: rgba(251,191,36,0.4); background: rgba(251,191,36,0.1); }
.pill-ok { color: #34d399; border-color: rgba(52,211,153,0.4); background: rgba(52,211,153,0.1); }
.pill-error { color: #f87171; border-color: rgba(248,113,113,0.4); background: rgba(248,113,113,0.1); }

.user-card {
  display: flex;
  gap: 0.9rem;
  align-items: center;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  background: rgba(52,211,153,0.07);
  border: 1px solid rgba(52,211,153,0.25);
}

.user-avatar {
  flex-shrink: 0;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fbbf24, #f97316);
  color: #1a1a1a;
  font-weight: 800;
  font-size: 1.2rem;
}

.user-name { font-weight: 700; color: var(--text-primary); margin-bottom: 0.15rem; }
.user-line { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; }

.user-error {
  padding: 0.8rem 1rem;
  border-radius: 10px;
  background: rgba(248,113,113,0.08);
  border: 1px solid rgba(248,113,113,0.3);
  color: #f87171;
  font-family: monospace;
  font-size: 0.85rem;
}

.gantt {
  padding: 1rem;
  border-radius: 10px;
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.08);
}

.gantt-row {
  display: grid;
  grid-template-columns: 110px 1fr;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
}

.gantt-name {
  display: flex;
  flex-direction: column;
  font-family: monospace;
  font-size: 0.82rem;
  color: var(--text-primary);
}

.gantt-name small { color: var(--text-secondary); font-size: 0.7rem; }

.gantt-track {
  position: relative;
  height: 1.5rem;
  border-radius: 6px;
  background: rgba(255,255,255,0.04);
  overflow: hidden;
}

.gantt-bar {
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 6px;
  min-width: 0;
}

.bar-a { background: linear-gradient(90deg, #6366f1, #818cf8); }
.bar-b { background: linear-gradient(90deg, #f97316, #fbbf24); }
.bar-c { background: linear-gradient(90deg, #14b8a6, #34d399); }

.gantt-axis {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-left: calc(110px + 0.8rem);
  font-family: monospace;
  font-size: 0.7rem;
  color: var(--text-secondary);
}

.gantt-axis span:nth-child(n+2) { text-align: center; }
.gantt-axis span:last-child { text-align: right; }

.timeline-result {
  padding: 0.7rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  border: 1px solid;
}

.tr-warn { background: rgba(248,113,113,0.08); border-color: rgba(248,113,113,0.3); color: #fca5a5; }
.tr-ok { background: rgba(52,211,153,0.08); border-color: rgba(52,211,153,0.3); color: #6ee7b7; }

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

.ls-sync { background: rgba(99,102,241,0.08); border-color: rgba(99,102,241,0.35); color: #818cf8; }
.ls-micro { background: rgba(52,211,153,0.08); border-color: rgba(52,211,153,0.35); color: #34d399; }
.ls-macro { background: rgba(251,191,36,0.08); border-color: rgba(251,191,36,0.35); color: #fbbf24; }

.loop-arrow { align-self: center; color: var(--text-secondary); font-size: 1.2rem; }

@media (max-width: 600px) {
  .gantt-row { grid-template-columns: 80px 1fr; }
  .gantt-axis { margin-left: calc(80px + 0.8rem); }
}
</style>
