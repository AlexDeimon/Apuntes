<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Eventos en JavaScript</h1>
      <p class="subtitle">Mecanismo que permite a JavaScript reaccionar ante las interacciones del usuario y los cambios en el documento.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">¿Qué es un Evento?</h2>
      <p class="section-desc">Un evento es cualquier cosa que puede suceder en el documento o en el navegador: el usuario hace clic en un botón, mueve el cursor, escribe en un campo, la página termina de cargar, etc. JavaScript puede <strong>escuchar</strong> estos eventos y ejecutar código en respuesta.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Tipos de Eventos Comunes</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Mouse:</span>click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup, mouseleave, mouseenter.</li>
            <li><span class="def-term">Teclado:</span>keydown, keyup, keypress (deprecado).</li>
            <li><span class="def-term">Formulario:</span> submit, change, input, focus, blur.</li>
            <li><span class="def-term">Ventana / Documento:</span> load, DOMContentLoaded, resize, scroll.</li>
            <li><span class="def-term">Táctil / Pointer:</span>touchstart, touchend, pointerdown, pointerup.</li>
            <li><span class="def-term">Portapapeles:</span>copy, cut, paste.</li>
            <li><span class="def-term">Drag & Drop:</span> dragstart, drag, drop, dragover.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>El Objeto Event</h3>
          </div>
          <p>Cuando un evento ocurre, el navegador crea automáticamente un <strong>objeto Event</strong> con información sobre el suceso y lo pasa como argumento al manejador. Sus propiedades más útiles son:</p>
          <ul class="def-list">
            <li><span class="def-term">event.target:</span> El elemento que disparó el evento.</li>
            <li><span class="def-term">event.currentTarget:</span> El elemento que tiene registrado el listener (relevante en bubbling).</li>
            <li><span class="def-term">event.type:</span> El nombre del evento (ej: <code>"click"</code>).</li>
            <li><span class="def-term">event.key:</span> La tecla presionada (para eventos de teclado).</li>
            <li><span class="def-term">event.clientX / event.clientY:</span> Coordenadas del cursor (para eventos de ratón).</li>
            <li><span class="def-term">event.preventDefault():</span> Cancela la acción predeterminada del navegador.</li>
            <li><span class="def-term">event.stopPropagation():</span> Detiene la propagación del evento.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">addEventListener (Método Recomendado)</h2>
      <p class="section-desc"><code>addEventListener</code> es la forma moderna y flexible de registrar eventos. Permite múltiples manejadores sobre el mismo elemento y ofrece opciones avanzadas de configuración.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis Básica</h3>
          </div>
          <CodeBlock language="javascript" code="// Sintaxis: element.addEventListener(evento, callback, opciones)
const boton = document.querySelector('#mi-boton');

boton.addEventListener('click', (event) => {
  console.log('¡Click!', event.target); // El botón
});

// Múltiples listeners sobre el mismo elemento y evento
boton.addEventListener('click', () => console.log('Segundo listener'));
boton.addEventListener('mouseover', () => console.log('Mouse encima'));

// Con función declarada (reutilizable)
function manejarClick(e) {
  console.log('Coordenadas:', e.clientX, e.clientY);
}
boton.addEventListener('click', manejarClick);" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Opciones Avanzadas (Tercer Argumento)</h3>
          </div>
          <CodeBlock language="javascript" code="// El tercer argumento es un objeto de opciones (o booleano legacy)
element.addEventListener('click', handler, {
  // once: true — El listener se elimina automáticamente tras la primera ejecución
  once: true,

  // passive: true — Mejora el rendimiento en eventos de scroll/touch.
  // Al usar passive, NO se puede llamar a event.preventDefault()
  passive: true,

  // capture: true — El listener se ejecuta en fase de captura (antes del bubbling)
  capture: false,
});

// Remover un listener (requiere referencia a la función)
element.removeEventListener('click', manejarClick);

// Los arrow functions anónimos no se pueden remover
// Esto no funciona:
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => console.log('hola'));
btn.removeEventListener('click', () => console.log('hola')); // diferente referencia" />
        </div>
      </div>
      <div class="event-sandbox">
        <div class="sandbox-header">
          <h4>Sandbox Interactivo</h4>
          <button class="clear-log-btn" @click="clearLog">Limpiar Log</button>
        </div>
        <div class="sandbox-body">
          <div class="sandbox-controls">
            <h5>Área de Prueba — Interactúa con los elementos:</h5>
            <div class="test-elements">
              <button class="test-btn" @click="logEvent('click', 'botón')" @dblclick="logEvent('dblclick', 'botón')" @mouseover="logEvent('mouseover', 'botón')" @mouseout="logEvent('mouseout', 'botón')"> Haz click / doble click </button>
              <input class="test-input" type="text" placeholder="Escribe aquí (keydown)..." @keydown="logEvent('keydown', `tecla '${($event as KeyboardEvent).key}'`)" @focus="logEvent('focus', 'input')" @blur="logEvent('blur', 'input')" />
              <div class="test-hover-area" @mousemove="logMouseMove($event as MouseEvent)"> Mueve el mouse aquí (mousemove) <span v-if="mousePos.x">X: {{ mousePos.x }}, Y: {{ mousePos.y }}</span> </div>
            </div>
          </div>
          <div class="event-log">
            <h5>Registro de Eventos:</h5>
            <div class="log-container" ref="logContainer">
              <div v-if="eventLog.length === 0" class="log-placeholder"> Los eventos que dispares aparecerán aquí... </div>
              <div v-for="entry in eventLog" :key="entry.id" class="log-entry" :class="entry.type">
                <span class="log-badge">{{ entry.event }}</span>
                <span class="log-detail">en {{ entry.element }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Propagación de Eventos</h2>
      <p class="section-desc">Cuando ocurre un evento en un elemento del DOM, este no se queda allí. Viaja a través del árbol DOM en tres fases: <strong>captura</strong>, <strong>target</strong> y <strong>burbujeo (bubbling)</strong>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Las 3 Fases de un Evento</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">1. Captura (capture):</span> El evento desciende desde <code>document</code> hasta el elemento objetivo. Los listeners en fase de captura se ejecutan primero (usar <code>{ capture: true }</code>).</li>
            <li><span class="def-term">2. Target:</span> El evento llega al elemento que lo originó (<code>event.target</code>).</li>
            <li><span class="def-term">3. Burbujeo (bubbling):</span> El evento sube de vuelta desde el elemento objetivo hasta <code>document</code>. Es la fase por defecto para los listeners.</li>
          </ul>
          <CodeBlock language="javascript" code="document.querySelector('#padre').addEventListener('click', () => {
  console.log('1: Padre (bubbling)'); // Se ejecuta cuando el click burbujea
});

document.querySelector('#hijo').addEventListener('click', (e) => {
  console.log('2: Hijo (target)'); // El que originó el evento
  // Detener que el evento siga subiendo:
  e.stopPropagation();
});

// Con capture: true, el padre se ejecuta primero
document.querySelector('#padre').addEventListener('click', () => {
  console.log('Padre en CAPTURA — se ejecuta antes');
}, { capture: true });" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Delegación de Eventos</h3>
          </div>
          <p>La delegación de eventos es un patrón que aprovecha el burbujeo: en lugar de poner listeners en cada elemento hijo, se pone <strong>uno solo en el padre</strong>. Es más eficiente y funciona incluso con elementos creados dinámicamente.</p>
          <CodeBlock language="javascript" code="// Ineficiente: un listener por cada item
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', handler);
});

// Delegación: un solo listener en el contenedor padre
const lista = document.querySelector('#mi-lista');

lista.addEventListener('click', (e) => {
  // Filtramos para asegurar que el click fue en un .item
  const item = e.target.closest('.item');
  if (!item) return;

  item.classList.toggle('completado');
  console.log('Item clickeado:', item.dataset.id);
});

// Funciona incluso con items añadidos dinámicamente después
const nuevoItem = document.createElement('li');
nuevoItem.classList.add('item');
nuevoItem.dataset.id = '999';
lista.append(nuevoItem); // Este item también responde al click" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Comportamiento Por Defecto y preventDefault</h2>
      <p class="section-desc">El navegador tiene comportamientos predeterminados para muchos eventos: los enlaces navegan, los formularios se envían y recargan la página, el botón derecho abre el menú contextual, etc. Podemos cancelarlos con <code>event.preventDefault()</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Casos de Uso Frecuentes</h3>
          </div>
          <CodeBlock language="javascript" code="// 1. Prevenir el reenvío de formularios (para manejarlos con JS/fetch)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Sin esto, la página se recargaría
  const data = new FormData(form);
  // fetch('/api/guardar', { method: 'POST', body: data });
});

// 2. Prevenir que un enlace navegue
const link = document.querySelector('a.modal-trigger');
link.addEventListener('click', (e) => {
  e.preventDefault(); // Sin esto, el navegador iría a href
  abrirModal();
});

// 3. Prevenir el menú contextual (botón derecho)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  mostrarMenuPersonalizado(e.clientX, e.clientY);
});

// 4. Bloquear pegar contenido en un campo
input.addEventListener('paste', (e) => {
  e.preventDefault();
  console.log('¡Pegar no está permitido aquí!');
});" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Eventos Modernos y Patrones Avanzados</h2>
      <p class="section-desc">Más allá de los clásicos, JavaScript moderno ofrece eventos especializados y patrones para casos de uso más complejos y con mejor rendimiento.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>IntersectionObserver: Lazy Loading y Animaciones en Scroll</h3>
          </div>
          <p>No es un evento tradicional, pero es el <strong>patrón moderno</strong> para detectar cuándo un elemento entra o sale del viewport, reemplazando al costoso listener en el evento <code>scroll</code>.</p>
          <CodeBlock language="javascript" code="const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // El elemento es visible en el viewport
      entry.target.classList.add('animate-fade-in');
      // Carga una imagen de forma lazy
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(entry.target); // Dejar de observar
    }
  });
}, {
  threshold: 0.1,   // 10% del elemento debe ser visible para disparar
  rootMargin: '50px' // Adelantarse 50px antes de que entre al viewport
});

// Observar todos los elementos que queremos animar
document.querySelectorAll('.lazy-img').forEach(img => {
  observer.observe(img);
});" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>CustomEvent: Eventos Personalizados</h3>
          </div>
          <p>Puedes crear y disparar tus propios eventos para comunicar partes de tu aplicación de forma desacoplada, siguiendo el patrón de publicador/suscriptor.</p>
          <CodeBlock language="javascript" code="// 1. Crear el evento personalizado
const eventoCompra = new CustomEvent('compra-realizada', {
  // bubbles: true — el evento subirá en el DOM
  bubbles: true,
  // detail — datos personalizados que acompañan al evento
  detail: {
    producto: 'Laptop',
    precio: 1200,
    usuario: 'Alex',
  }
});

// 2. Escuchar el evento en cualquier ancestro del DOM
document.addEventListener('compra-realizada', (e) => {
  console.log('¡Compra recibida!');
  console.log(e.detail.producto); // 'Laptop'
  actualizarCarrito(e.detail);
});

// 3. Disparar el evento desde cualquier elemento
const botonComprar = document.querySelector('#btn-comprar');
botonComprar.dispatchEvent(eventoCompra);" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>AbortController: Eliminar Listeners sin Referencia</h3>
          </div>
          <p>A partir de ES2020+, puedes usar un <code>AbortController</code> para eliminar múltiples listeners de forma sencilla, sin necesidad de guardar referencias a cada función.</p>
          <CodeBlock language="javascript" code="const controller = new AbortController();
const { signal } = controller;

// Los listeners reciben signal como opción
document.addEventListener('click', handler1, { signal });
document.addEventListener('keydown', handler2, { signal });
window.addEventListener('resize', handler3, { signal });

// Eliminar TODOS los listeners de una sola vez
controller.abort(); // handler1, handler2 y handler3 son removidos

// Útil cuando el usuario navega a otra sección o cierra un componente" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Throttle y Debounce</h3>
          </div>
          <p>Algunos eventos como <code>scroll</code>, <code>resize</code> o <code>input</code> disparan decenas de veces por segundo. Las técnicas de <strong>throttle</strong> y <strong>debounce</strong> optimizan esto:</p>
          <CodeBlock language="javascript" code="// Debounce: Espera N ms de inactividad antes de ejecutar
// Ideal para búsquedas en tiempo real
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const buscarApi = debounce((termino) => {
  fetch(`/api/buscar?q=${termino}`).then(/* ... */);
}, 500);

document.querySelector('#search').addEventListener('input', (e) => {
  buscarApi(e.target.value); // La API no se llama hasta 500ms después de parar
});

// Throttle: Ejecuta como máximo una vez cada N ms
// Ideal para scroll/resize
function throttle(fn, limit) {
  let enEspera = false;
  return (...args) => {
    if (!enEspera) {
      fn(...args);
      enEspera = true;
      setTimeout(() => { enEspera = false; }, limit);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scroll procesado (máx. 1 vez cada 200ms)');
}, 200));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'dom', text: 'DOM: Selección y Manipulación de Elementos' },
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JavaScript' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
interface LogEntry {
  id: number
  event: string
  element: string
  type: string
}

const eventLog = ref<LogEntry[]>([])
const mousePos = ref({ x: 0, y: 0 })
let logCounter = 0

const getEventType = (eventName: string): string => {
  if (['click', 'dblclick', 'mousedown', 'mouseup'].includes(eventName)) return 'mouse'
  if (['mouseover', 'mouseout', 'mousemove'].includes(eventName)) return 'hover'
  if (['keydown', 'keyup'].includes(eventName)) return 'keyboard'
  if (['focus', 'blur'].includes(eventName)) return 'focus'
  return 'other'
}

const logEvent = (eventName: string, element: string) => {
  eventLog.value.unshift({
    id: ++logCounter,
    event: eventName,
    element,
    type: getEventType(eventName),
  })

  if (eventLog.value.length > 30) {
    eventLog.value.pop()
  }
}

const logMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mousePos.value = {
    x: Math.round(e.clientX - rect.left),
    y: Math.round(e.clientY - rect.top),
  }
}

const clearLog = () => {
  eventLog.value = []
}
</script>
<style scoped>
.event-sandbox {
  margin-top: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
}

.sandbox-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  background: #181825;
  border-bottom: 1px solid var(--border-color);
}

.sandbox-header h4 {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.clear-log-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-log-btn:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
  color: #ef4444;
}

.sandbox-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

@media (max-width: 768px) {
  .sandbox-body {
    grid-template-columns: 1fr;
  }
}

.sandbox-controls {
  padding: 1.2rem;
  border-right: 1px solid var(--border-color);
}

.sandbox-controls h5,
.event-log h5 {
  margin: 0 0 1rem 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.test-elements {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.test-btn {
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
  color: #818cf8;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.test-btn:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(59, 130, 246, 0.25));
  border-color: #818cf8;
  color: #c7d2fe;
}

.test-btn:active {
  transform: scale(0.97);
}

.test-input {
  padding: 0.6rem 0.9rem;
  margin-bottom: 0;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: rgba(0, 0, 0, 0.15);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.9rem;
}

.test-input:focus {
  outline: none;
  border-color: #3b82f6;
}

.test-hover-area {
  padding: 1rem;
  background: rgba(16, 185, 129, 0.06);
  border: 1px dashed rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  color: #6ee7b7;
  font-size: 0.85rem;
  cursor: crosshair;
  text-align: center;
  user-select: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.test-hover-area span {
  font-size: 0.8rem;
  color: #34d399;
  font-family: monospace;
}

.event-log {
  padding: 1.2rem;
}

.log-container {
  height: 230px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.log-placeholder {
  color: var(--text-secondary);
  font-style: italic;
  font-size: 0.85rem;
  text-align: center;
  margin: auto;
}

.log-entry {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  border-left: 3px solid transparent;
  background: rgba(255, 255, 255, 0.02);
  animation: fadeInEntry 0.2s ease;
}

@keyframes fadeInEntry {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.log-entry.mouse {
  border-left-color: #3b82f6;
}

.log-entry.hover {
  border-left-color: #10b981;
}

.log-entry.keyboard {
  border-left-color: #f59e0b;
}

.log-entry.focus {
  border-left-color: #8b5cf6;
}

.log-badge {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-weight: 600;
  flex-shrink: 0;
}

.log-entry.hover .log-badge {
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
}

.log-entry.keyboard .log-badge {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
}

.log-entry.focus .log-badge {
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
}

.log-detail {
  color: var(--text-secondary);
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
