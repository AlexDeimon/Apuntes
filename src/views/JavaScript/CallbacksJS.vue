<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Callbacks</h1>
      <p class="subtitle">Funciones pasadas como argumentos a otras funciones, es el patron fundamental de la asincronía en JavaScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Que es un Callback?</h2>
      <p class="section-desc">Un <strong>callback</strong> es simplemente una funcion que se pasa como argumento a otra funcion, para ser invocada en un momento posterior. No hay nada especial en la sintaxis: cualquier funcion puede ser un callback.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Concepto Basico</h3></div>
          <p>Las funciones en JavaScript son <strong>ciudadanos de primera clase</strong>: se pueden asignar a variables, pasar como argumentos y retornar desde otras funciones. Un callback aprovecha exactamente esta caracteristica.</p>
          <CodeBlock language="javascript" code="// La funcion que RECIBE el callback
function procesarUsuario(nombre, callbackExito, callbackError) {
  if (!nombre) {
    callbackError('El nombre no puede estar vacio');
    return;
  }
  const resultado = { id: 1, nombre: nombre.trim().toUpperCase() };
  callbackExito(resultado); // Invocar el callback con el resultado
}

// Las funciones que SE PASAN como callbacks
function alExito(datos) {
  console.log('Usuario creado:', datos);
}

function alError(mensaje) {
  console.error('Error:', mensaje);
}

// Uso
procesarUsuario('Alex', alExito, alError);
// → Usuario creado: { id: 1, nombre: 'ALEX' }

procesarUsuario('', alExito, alError);
// → Error: El nombre no puede estar vacio

// Tambien se puede pasar una funcion anonima
procesarUsuario('Diego', (datos) => {
  console.log('OK!', datos.nombre);
}, console.error);" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Callbacks en la API del Navegador</h3></div>
          <p>Los callbacks son el patron fundamental de muchas APIs del navegador y de Node.js.</p>
          <CodeBlock language="javascript" code="// addEventListener — el callback se ejecuta al ocurrir el evento
document.querySelector('#btn').addEventListener('click', function(event) {
  console.log('Click en:', event.target);
});

// setTimeout — el callback se ejecuta despues del delay
setTimeout(() => {
  console.log('Se ejecuta tras 2 segundos');
}, 2000);

// Array.forEach — el callback se ejecuta por cada elemento
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, indice) => {
  console.log(indice + ': ' + numero);
});

// Array.filter — el callback determina si incluir el elemento
const pares = numeros.filter(n => n % 2 === 0);
// → [2, 4]

// Array.map — el callback transforma cada elemento
const dobles = numeros.map(n => n * 2);
// → [2, 4, 6, 8, 10]

// Array.sort — el callback define el criterio de orden
const personas = [{ nombre: 'Diego', edad: 25 }, { nombre: 'Alex', edad: 30 }];
personas.sort((a, b) => a.edad - b.edad);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Sincronos vs Asincronos</h2>
      <p class="section-desc">Hay dos tipos de callbacks: los <strong>sincronos</strong>, que se ejecutan inmediatamente en el flujo normal del codigo, y los <strong>asincronos</strong>, que se ejecutan en el futuro despues de una operacion que toma tiempo.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Callback Sincrono</h3></div>
          <p>El callback se invoca en el momento en que la funcion lo llama, bloqueando la ejecucion hasta que termine.</p>
          <CodeBlock language="javascript" code="// Sincrono: el callback se ejecuta AHORA
function ejecutarDosVeces(callback) {
  callback(); // Se ejecuta inmediatamente
  callback(); // Se ejecuta inmediatamente despues
}

ejecutarDosVeces(() => console.log('Hola!'));
// Hola!
// Hola!

console.log('Esto se ejecuta DESPUES de ejecutarDosVeces');
// Orden garantizado: Hola!, Hola!, Esto se ejecuta DESPUES

// Otro ejemplo sincrono: Array.map
const cuadrados = [1, 2, 3].map(n => {
  console.log('Procesando:', n); // Se imprime en orden
  return n * n;
});
// Procesando: 1
// Procesando: 2
// Procesando: 3" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Callback Asincrono</h3></div>
          <p>El callback se invoca en el futuro, cuando una operacion termina. El codigo sigue ejecutandose mientras tanto.</p>
          <CodeBlock language="javascript" code="// Asincrono: el callback se ejecuta EN EL FUTURO
console.log('1. Inicio');

setTimeout(() => {
  console.log('3. Callback del timeout (despues de 1s)');
}, 1000);

console.log('2. Despues de setTimeout');

// Orden de ejecucion:
// 1. Inicio
// 2. Despues de setTimeout
// 3. Callback del timeout (despues de 1s)

// Simulacion de llamada HTTP (patron clasico de Node.js)
function obtenerUsuario(id, callback) {
  console.log('Solicitando usuario...');

  // Simula una operacion asincrona (base de datos, HTTP, etc.)
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID invalido'), null);
    } else {
      callback(null, { id, nombre: 'Alex', rol: 'admin' });
    }
  }, 500);
}

console.log('Antes de obtenerUsuario');

obtenerUsuario(1, (error, usuario) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Usuario:', usuario);
  }
});

console.log('Despues de obtenerUsuario (no espera el resultado)');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Patron Error-First</h2>
      <p class="section-desc">El patron <strong>Error-First</strong> es el estandar de facto para callbacks asincronos. El primer argumento del callback siempre es el error (<code>null</code> si no hay error) y el segundo es el resultado.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Convencion Error-First</h3></div>
          <CodeBlock language="javascript" code="// Regla: callback(error, resultado)
// Si hay error: callback(new Error('mensaje'), null)
// Si hay exito: callback(null, datos)

function leerArchivo(ruta, callback) {
  // Simulacion de lectura de archivo
  setTimeout(() => {
    if (!ruta.endsWith('.txt')) {
      callback(new Error('Solo se permiten archivos .txt'), null);
      return;
    }
    callback(null, 'Contenido del archivo: Lorem ipsum...');
  }, 300);
}

// Uso correcto del patron error-first
leerArchivo('datos.txt', (error, contenido) => {
  if (error) {
    console.error('Fallo:', error.message);
    return; // Siempre hacer return para evitar continuar
  }
  console.log('Exito:', contenido);
});

// Con archivo invalido
leerArchivo('imagen.png', (error, contenido) => {
  if (error) {
    console.error('Fallo:', error.message);
    // → Fallo: Solo se permiten archivos .txt
    return;
  }
  console.log(contenido); // No llega aqui
});" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Composicion de Operaciones Asincronas</h3></div>
          <p>Ejemplo real: obtener un usuario, luego sus pedidos, luego el detalle de un pedido.</p>
          <CodeBlock language="javascript" code="// Funciones que siguen el patron error-first
function obtenerUsuario(id, cb) {
  setTimeout(() => cb(null, { id, nombre: 'Alex' }), 100);
}

function obtenerPedidos(userId, cb) {
  setTimeout(() => cb(null, [{ pedidoId: 'P001', total: 150 }]), 100);
}

function obtenerDetalle(pedidoId, cb) {
  setTimeout(() => cb(null, { pedidoId, items: ['Laptop', 'Mouse'] }), 100);
}

// Encadenar operaciones asincronas con callbacks
obtenerUsuario(1, (err, usuario) => {
  if (err) return console.error(err);
  console.log('Usuario:', usuario.nombre);

  obtenerPedidos(usuario.id, (err, pedidos) => {
    if (err) return console.error(err);
    console.log('Pedidos:', pedidos.length);

    const primerPedido = pedidos[0];
    obtenerDetalle(primerPedido.pedidoId, (err, detalle) => {
      if (err) return console.error(err);
      console.log('Items:', detalle.items);
      // Aqui empieza el Callback Hell...
    });
  });
});" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Callback Hell (Pyramid of Doom)</h2>
      <p class="section-desc">Cuando se encadenan multiples operaciones asincronas con callbacks, el codigo se anida profundamente formando la <strong>piramide de la muerte</strong>. Esto lo hace dificil de leer, mantener y manejar errores.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header"><h3>El Problema: Codigo Ilegible</h3></div>
          <CodeBlock language="javascript" code="// Ejemplo de Callback Hell — evitar este patron
autenticar(usuario, contrasena, (err, token) => {
  if (err) return manejarError(err);

  obtenerPerfil(token, (err, perfil) => {
    if (err) return manejarError(err);

    obtenerPermisos(perfil.id, (err, permisos) => {
      if (err) return manejarError(err);

      if (permisos.includes('admin')) {
        obtenerDashboard(perfil.id, (err, dashboard) => {
          if (err) return manejarError(err);

          renderizarUI(dashboard, (err, resultado) => {
            if (err) return manejarError(err);
            console.log('Listo:', resultado);
            // La 'piramide' sigue creciendo...
          });
        });
      }
    });
  });
});" />
          <div class="hell-pyramid">
            <div class="pyramid-level">autenticar( </div>
            <div class="pyramid-level pl-1">obtenerPerfil( </div>
            <div class="pyramid-level pl-2">obtenerPermisos( </div>
            <div class="pyramid-level pl-3">obtenerDashboard( </div>
            <div class="pyramid-level pl-4">renderizarUI( </div>
            <div class="pyramid-level pl-4">))</div>
            <div class="pyramid-level pl-3">))</div>
            <div class="pyramid-level pl-2">))</div>
            <div class="pyramid-level pl-1">))</div>
            <div class="pyramid-level">))</div>
          </div>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Soluciones al Callback Hell</h3></div>
          <p>Varias estrategias para evitar la piramide de la muerte:</p>
          <div class="solution-item">
            <div class="solution-badge sol-1">1</div>
            <div>
              <strong>Named Functions:</strong> Extraer los callbacks a funciones nombradas en lugar de funciones anonimas.
            </div>
          </div>
          <CodeBlock language="javascript" code="// En vez de anidar funciones anonimas...
// Definir funciones nombradas separadas
function manejarToken(err, token) {
  if (err) return manejarError(err);
  obtenerPerfil(token, manejarPerfil);
}

function manejarPerfil(err, perfil) {
  if (err) return manejarError(err);
  obtenerPermisos(perfil.id, manejarPermisos);
}

function manejarPermisos(err, permisos) {
  if (err) return manejarError(err);
  console.log('Permisos:', permisos);
}

// Uso limpio — una sola capa de anidacion
autenticar(usuario, contrasena, manejarToken);" />
          <div class="solution-item">
            <div class="solution-badge sol-2">2</div>
            <div>
              <strong>Promises:</strong> La solucion moderna. Convierte callbacks en una cadena <code>.then()</code> plana.
            </div>
          </div>
          <div class="solution-item">
            <div class="solution-badge sol-3">3</div>
            <div>
              <strong>Async/Await:</strong> Azucar sintactico sobre Promises que hace el codigo asincrono parecer sincrono.
            </div>
          </div>
          <CodeBlock language="javascript" code="// Con Promises (sin Callback Hell)
autenticar(usuario, contrasena)
  .then(token => obtenerPerfil(token))
  .then(perfil => obtenerPermisos(perfil.id))
  .then(permisos => console.log('Permisos:', permisos))
  .catch(err => manejarError(err));

// Con Async/Await (la forma mas moderna y legible)
async function iniciarSesion(usuario, contrasena) {
  try {
    const token      = await autenticar(usuario, contrasena);
    const perfil     = await obtenerPerfil(token);
    const permisos   = await obtenerPermisos(perfil.id);
    console.log('Permisos:', permisos);
  } catch (err) {
    manejarError(err);
  }
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Errores Comunes con Callbacks</h2>
      <p class="section-desc">Los callbacks tienen varias trampas clasicas que conviene conocer para evitar bugs dificiles de depurar.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header"><h3>Trampas Frecuentes</h3></div>
          <CodeBlock language="javascript" code="// Error 1: Llamar al callback dos veces
function procesarDatos(datos, callback) {
  if (!datos) {
    callback(new Error('Sin datos'));
    // Falta el return — el callback se llama dos veces!
  }
  callback(null, 'procesado'); // Tambien se ejecuta
}

// Correcto: return despues de llamar al callback de error
function procesarDatos(datos, callback) {
  if (!datos) {
    return callback(new Error('Sin datos'));
  }
  callback(null, 'procesado');
}

// Error 2: Olvidar manejar el error
leerArchivo('datos.json', (err, datos) => {
  // Si err existe y no se maneja, el codigo sigue
  const parsed = JSON.parse(datos); // Crashea si datos es null
  console.log(parsed);
});

// Correcto: siempre manejar el error primero
leerArchivo('datos.json', (err, datos) => {
  if (err) return console.error('Error:', err.message);
  const parsed = JSON.parse(datos);
  console.log(parsed);
});

// Error 3: Perder el contexto 'this'
const miObjeto = {
  nombre: 'Alex',
  saludar: function() {
    setTimeout(function() {
      console.log('Hola, soy', this.nombre); // undefined!
    }, 100);
  }
};

// Correcto: usar arrow function para preservar 'this'
const miObjeto2 = {
  nombre: 'Alex',
  saludar: function() {
    setTimeout(() => {
      console.log('Hola, soy', this.nombre); // 'Alex'
    }, 100);
  }
};" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Promisificar un Callback</h3></div>
          <p>Convierte una funcion basada en callbacks al patron de Promises para usarla con <code>async/await</code>.</p>
          <CodeBlock language="javascript" code="// Funcion original con callback
function obtenerDatosConCallback(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID invalido'), null);
    } else {
      callback(null, { id, nombre: 'Producto ' + id });
    }
  }, 500);
}

// Promisificacion manual
function obtenerDatos(id) {
  return new Promise((resolve, reject) => {
    obtenerDatosConCallback(id, (error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

// Ahora se puede usar con async/await
async function cargarProducto(id) {
  try {
    const producto = await obtenerDatos(id);
    console.log('Producto:', producto);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Node.js tiene una utilidad para esto: util.promisify
const { promisify } = require('util');
const leerArchivoAsync = promisify(fs.readFile);

const contenido = await leerArchivoAsync('datos.txt', 'utf-8');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Cuando Usar Callbacks Hoy en Dia</h2>
      <p class="section-desc">En 2024+, <strong>Promises y async/await</strong> son la forma preferida de manejar asincronía. Sin embargo, los callbacks siguen siendo relevantes en ciertos contextos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Casos de Uso Validos</h3></div>
          <ul class="def-list">
            <li><span class="def-term">Event Listeners:</span>addEventListener, socket.on() — callbacks para eventos que pueden ocurrir multiples veces.</li>
            <li><span class="def-term">Metodos de Arrays:</span> .map(), .filter(), .reduce(), .forEach() — callbacks sincronos de iteracion.</li>
            <li><span class="def-term">Funciones de orden superior:</span> Funciones que reciben logica como parametro (patron Strategy, DI).</li>
            <li><span class="def-term">APIs de Node.js legadas:</span> El modulo fs, http etc. siguen usando callbacks (aunque tienen alternativas con Promises).</li>
            <li><span class="def-term">Librarias de terceros:</span> Algunas librerias antiguas todavia usan el patron error-first.</li>
          </ul>
          <CodeBlock language="javascript" code="// Callbacks apropiados en 2024
// 1. Eventos (pueden ocurrir N veces)
window.addEventListener('resize', (e) => {
  console.log('Nuevo tamaño:', window.innerWidth);
});

// 2. Metodos de arrays (sincronos, no hay alternativa mejor)
const adultos = usuarios.filter(u => u.edad >= 18);
const nombres = adultos.map(u => u.nombre);
const total   = precios.reduce((acc, p) => acc + p, 0);

// 3. Funcion de orden superior (patron strategy)
function ordenarPor(array, comparador) {
  return [...array].sort(comparador);
}

const porEdad  = ordenarPor(usuarios, (a, b) => a.edad - b.edad);
const porNombre = ordenarPor(usuarios, (a, b) => a.nombre.localeCompare(b.nombre));" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Evolucion: Callbacks → Promises → Async/Await</h3></div>
          <div class="evolution-timeline">
            <div class="evo-step">
              <div class="evo-badge evo-old">ES5</div>
              <div class="evo-content">
                <div class="evo-title">Callbacks</div>
                <div class="evo-desc">Unico mecanismo de asincronía. Callback hell inevitable en operaciones complejas.</div>
              </div>
            </div>
            <div class="evo-arrow">↓</div>
            <div class="evo-step">
              <div class="evo-badge evo-mid">ES6</div>
              <div class="evo-content">
                <div class="evo-title">Promises</div>
                <div class="evo-desc">Cadena <code>.then()/.catch()</code> plana. Elimina la piramide de callbacks anidados.</div>
              </div>
            </div>
            <div class="evo-arrow">↓</div>
            <div class="evo-step">
              <div class="evo-badge evo-new">ES2017+</div>
              <div class="evo-content">
                <div class="evo-title">Async / Await</div>
                <div class="evo-desc">Codigo asincrono que se lee como sincrono. El estandar actual para la mayoría de casos.</div>
              </div>
            </div>
          </div>
          <CodeBlock language="javascript" code="// Las tres formas de hacer lo mismo:
// Obtener usuario → obtener sus posts → mostrar

// 1. Callbacks (evitar para nuevas operaciones asincronas)
getUser(id, (err, user) => {
  if (err) return handleError(err);
  getPosts(user.id, (err, posts) => {
    if (err) return handleError(err);
    render({ user, posts });
  });
});

// 2. Promises
getUser(id)
  .then(user => getPosts(user.id).then(posts => ({ user, posts })))
  .then(({ user, posts }) => render({ user, posts }))
  .catch(handleError);

// 3. Async/Await (recomendado)
async function cargar(id) {
  const user  = await getUser(id);
  const posts = await getPosts(user.id);
  render({ user, posts });
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'eventos', text: 'Eventos del DOM' },
      { techId: 'js', moduleId: 'objetosNativos', text: 'Objetos Nativos y Timers' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.hell-pyramid {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(239,68,68,0.06);
  border: 1px solid rgba(239,68,68,0.15);
  border-radius: 8px;
  font-family: monospace;
  font-size: 0.8rem;
}

.pyramid-level {
  color: #fca5a5;
  line-height: 1.7;
  white-space: pre;
}

.pl-1 { padding-left: 1.5rem; }
.pl-2 { padding-left: 3rem; }
.pl-3 { padding-left: 4.5rem; }
.pl-4 { padding-left: 6rem; }

.solution-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  margin-bottom: 0.6rem;
  margin-top: 0.8rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.solution-badge {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.1rem;
}

.sol-1 { background: rgba(99,102,241,0.2); color: #818cf8; border: 1px solid rgba(99,102,241,0.3); }
.sol-2 { background: rgba(52,211,153,0.2); color: #34d399; border: 1px solid rgba(52,211,153,0.3); }
.sol-3 { background: rgba(251,191,36,0.2); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); }

.evolution-timeline {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.evo-step {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.8rem;
  border-radius: 8px;
  border: 1px solid;
  background: rgba(255,255,255,0.02);
}

.evo-step:nth-child(1) { border-color: rgba(248,113,113,0.2); background: rgba(248,113,113,0.04); }
.evo-step:nth-child(3) { border-color: rgba(251,191,36,0.2); background: rgba(251,191,36,0.04); }
.evo-step:nth-child(5) { border-color: rgba(52,211,153,0.2); background: rgba(52,211,153,0.04); }

.evo-badge {
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-size: 0.72rem;
  font-weight: 700;
  font-family: monospace;
  margin-top: 0.1rem;
}

.evo-old { background: rgba(248,113,113,0.2); color: #f87171; }
.evo-mid { background: rgba(251,191,36,0.2); color: #fbbf24; }
.evo-new { background: rgba(52,211,153,0.2); color: #34d399; }

.evo-content { flex: 1; min-width: 0; }

.evo-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.evo-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.evo-arrow {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  margin-left: 0.5rem;
}
</style>
