<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Elementos Interactivos</h1>
      <p class="subtitle">Acordeones, modales y popovers nativos sin escribir JavaScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">&lt;details&gt; y &lt;summary&gt;</h2>
      <p class="section-desc">Permiten crear un widget de acordeón (colapsable) de forma completamente nativa. El elemento <code>&lt;details&gt;</code> es el contenedor que puede abrirse o cerrarse, y <code>&lt;summary&gt;</code> es el encabezado visible que actúa como disparador del clic.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Atributos de &lt;details&gt;</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">open</span>: Atributo booleano. Cuando está presente, el detalle se muestra expandido por defecto.</li>
            <li><span class="def-term">name</span>: Permite agrupar múltiples <code>&lt;details&gt;</code> para que solo uno pueda estar abierto a la vez (comportamiento de acordeón exclusivo). Soporte en navegadores modernos.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>¿Cuándo usarlo?</h3>
            <span class="badge success">Buenas prácticas</span>
          </div>
          <ul class="list">
            <li>Secciones de preguntas frecuentes (FAQ).</li>
            <li>Notas adicionales o información complementaria.</li>
            <li>Menús de navegación secundarios colapsables.</li>
            <li>Glosarios o definiciones expandibles.</li>
          </ul>
        </div>
      </div><br>
      <div class="cards-grid">
        <CodeBlock language="html" code='<!-- Básico: cerrado por defecto -->
<details>
  <summary>¿Qué es HTML?</summary>
  <p>HTML es el lenguaje de marcado estándar para crear páginas web.</p>
</details>

<!-- Abierto por defecto con el atributo "open" -->
<details open>
  <summary>Ver más información</summary>
  <p>Este contenido es visible desde el inicio porque tiene el atributo open.</p>
</details>

<!-- Grupo exclusivo con "name" (solo uno abierto a la vez) -->
<details name="faq">
  <summary>Pregunta 1</summary>
  <p>Respuesta a la pregunta 1.</p>
</details>
<details name="faq">
  <summary>Pregunta 2</summary>
  <p>Respuesta a la pregunta 2.</p>
</details>' />
        <div class="card info">
          <div class="card-header">
            <h3>Demo en vivo</h3>
          </div>
          <div class="demo-details">
            <details class="custom-details">
              <summary class="custom-summary">¿Qué es HTML?</summary>
              <div class="details-content">
                <p>HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el significado del contenido web.</p>
              </div>
            </details>
            <details class="custom-details" open>
              <summary class="custom-summary">¿Para qué sirve CSS?</summary>
              <div class="details-content">
                <p>CSS (Cascading Style Sheets) es el lenguaje que controla el estilo visual de las páginas: colores, fuentes, layouts, animaciones y más.</p>
              </div>
            </details>
            <details class="custom-details">
              <summary class="custom-summary">¿Qué hace JavaScript?</summary>
              <div class="details-content">
                <p>JavaScript es el lenguaje de programación del navegador. Permite añadir interactividad dinámica a las páginas web.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">&lt;dialog&gt;</h2>
      <p class="section-desc">El elemento <code>&lt;dialog&gt;</code> representa una ventana de diálogo o modal nativa del navegador. Elimina la necesidad de librerías externas para crear modales, maneja el foco del teclado automáticamente y el backdrop de forma nativa.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Métodos y Atributos</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">open</span>: Atributo booleano que indica si el diálogo está visible. <strong>No lo uses directamente</strong>, usa los métodos JS para controlarlo.</li>
            <li><span class="def-term">.show()</span>: Abre el diálogo como un elemento normal (sin backdrop ni bloqueo de foco).</li>
            <li><span class="def-term">.showModal()</span>: Abre el diálogo como un modal real. Bloquea el resto de la página, muestra un backdrop nativo y atrapa el foco del teclado.</li>
            <li><span class="def-term">.close()</span>: Cierra el diálogo. Puede recibir un valor <code>returnValue</code> opcional.</li>
            <li><span class="def-term">returnValue</span>: Propiedad que guarda el valor con el que se cerró el diálogo (útil con formularios internos).</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Cerrar haciendo clic en el Backdrop</h3>
            <span class="badge success">Truco</span>
          </div>
          <p>El elemento <code>&lt;dialog&gt;</code> no cierra automáticamente al hacer clic en el fondo. Para implementarlo, escucha el evento <code>click</code> en el dialog y compara si el clic ocurrió fuera del contenido.</p>
          <CodeBlock language="js" code="dialog.addEventListener('click', (e) => {
  const rect = dialog.getBoundingClientRect()
  const isOutside = (
    e.clientX < rect.left || e.clientX > rect.right ||
    e.clientY < rect.top  || e.clientY > rect.bottom
  )
  if (isOutside) dialog.close()
})" />
        </div>
      </div><br>
      <div class="cards-grid">
        <CodeBlock language="html" code='<!-- Estructura HTML del dialog -->
<dialog id="miModal">
  <h2>Título del Modal</h2>
  <p>Contenido del modal...</p>
  <form method="dialog">
    <!-- method="dialog" hace que el botón cierre el dialog automáticamente -->
    <button value="cancelar">Cancelar</button>
    <button value="confirmar">Confirmar</button>
  </form>
</dialog>

<!-- Botón para abrirlo -->
<button id="abrirModal">Abrir Modal</button>' />
        <CodeBlock language="js" code="// Referenciamos los elementos
const dialog = document.getElementById('miModal')
const btnAbrir = document.getElementById('abrirModal')

// Abrimos como modal (recomendado)
btnAbrir.addEventListener('click', () => {
  dialog.showModal()
})

// Escuchamos cuando se cierra para saber el resultado
dialog.addEventListener('close', () => {
  console.log('Se cerró con:', dialog.returnValue)
  // returnValue será 'cancelar' o 'confirmar'
})" />
      </div><br>
      <div class="preview-container">
        <div class="preview-header">Demo en vivo — &lt;dialog&gt;</div>
        <div class="preview-content demo-dialog-area">
          <div class="dialog-buttons">
            <button class="btn-demo" @click="openDialog('simple')">Abrir Dialog (.show)</button>
            <button class="btn-demo btn-primary" @click="openDialog('modal')">Abrir Modal (.showModal)</button>
          </div>
          <p class="dialog-result" v-if="dialogResult">Resultado del cierre: <strong>{{ dialogResult }}</strong></p>
          <dialog ref="simpleDialog" class="custom-dialog">
            <div class="dialog-inner">
              <h3>Dialog Simple (.show)</h3>
              <p>Este dialog se abre sin bloquear la página. Puedes interactuar con el contenido de atrás.</p>
              <div class="dialog-actions">
                <button class="btn-demo" @click="closeDialog('simpleDialog', 'cerrado')">Cerrar</button>
              </div>
            </div>
          </dialog>
          <dialog ref="modalDialog" class="custom-dialog" @click="closeOnBackdrop">
            <div class="dialog-inner" @click.stop>
              <h3>Modal Nativo (.showModal)</h3>
              <p>Este es un modal real. Bloquea la página, atrapa el foco del teclado y muestra un backdrop nativo. Presiona <kbd>Esc</kbd> para cerrar.</p>
              <form method="dialog">
                <div class="dialog-actions">
                  <button class="btn-demo" value="cancelar" @click="captureReturn('cancelar')">Cancelar</button>
                  <button class="btn-demo btn-primary" value="confirmar" @click="captureReturn('confirmar')">Confirmar</button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Popover API</h2>
      <p class="section-desc">Introducida en 2023, la <strong>Popover API</strong> es una forma nativa de crear tooltips, menús desplegables, notificaciones y paneles flotantes <strong>sin ningún JavaScript</strong>. Solo necesitas dos atributos HTML.
      </p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Atributos clave</h3>
            <span class="badge success">Sin JS</span>
          </div>
          <ul class="def-list">
            <li><span class="def-term">popover</span>: Se coloca en el elemento flotante. Lo saca del flujo normal y lo posiciona en el top layer (sobre todo lo demás). Valores: <code>auto</code> (cierra al hacer clic fuera) o <code>manual</code> (solo cierra con JS).</li>
            <li><span class="def-term">popovertarget</span>: Se coloca en el botón/disparador. Su valor debe coincidir con el <code>id</code> del elemento con <code>popover</code>.</li>
            <li><span class="def-term">popovertargetaction</span>: Opcional. Controla la acción al hacer clic: <code>toggle</code> (por defecto), <code>show</code> o <code>hide</code>.</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Ventajas sobre soluciones con JS</h3>
          </div>
          <ul class="list">
            <li>Se renderiza en el "top layer": nunca queda tapado por otros elementos (no hay problemas de <code>z-index</code>).</li>
            <li>El modo <code>auto</code> cierra automáticamente al hacer clic fuera o presionar <kbd>Esc</kbd>.</li>
            <li>Accesible por defecto: gestiona atributos ARIA automáticamente.</li>
            <li>Compatible con animaciones CSS con <code>@starting-style</code>.</li>
          </ul>
        </div>
      </div>
      <CodeBlock language="html" code='<!-- 1. El disparador: apunta al id del popover -->
<button popovertarget="mi-popover">
  Mostrar Popover
</button>

<!-- 2. El popover: necesita un id y el atributo popover -->
<div id="mi-popover" popover>
  <p>¡Soy un popover nativo!</p>
  <p>Se cierra al hacer clic fuera o presionar Esc.</p>
</div>

<!-- Variante: control manual con show/hide separados -->
<button popovertarget="info" popovertargetaction="show">Mostrar</button>
<button popovertarget="info" popovertargetaction="hide">Ocultar</button>
<div id="info" popover="manual">Contenido informativo</div>' />
      <CodeBlock language="css" code='/* Estilizar el popover */
[popover] {
  padding: 1rem 1.5rem;
  border: 1px solid #444;
  border-radius: 8px;
  background: #1e1e1e;
  color: #e0e0e0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

/* Animación de entrada con @starting-style */
[popover] {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s, transform 0.2s, display 0.2s allow-discrete;
}

[popover]:not(:popover-open) {
  opacity: 0;
  transform: scale(0.95);
}

@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scale(0.95);
  }
}' /><br>
      <div class="preview-container">
        <div class="preview-header">Demo en vivo — Popover API (sin JavaScript)</div>
        <div class="preview-content demo-popover-area">
          <div class="popover-demo-row">
            <button popovertarget="popover-basic" class="btn-demo">Tooltip Simple</button>
            <div id="popover-basic" popover class="custom-popover">
              <p>¡Soy un popover nativo! Haz clic fuera para cerrarme.</p>
            </div>
            <button popovertarget="popover-menu" class="btn-demo btn-primary">Menú Desplegable</button>
            <div id="popover-menu" popover class="custom-popover popover-menu">
              <ul>
                <li>📁 Nuevo archivo</li>
                <li>✏️ Editar</li>
                <li>🗑️ Eliminar</li>
                <li>⚙️ Configuración</li>
              </ul>
            </div>
            <button popovertarget="popover-manual" popovertargetaction="show" class="btn-demo">Mostrar</button>
            <button popovertarget="popover-manual" popovertargetaction="hide" class="btn-demo">Ocultar</button>
            <div id="popover-manual" popover="manual" class="custom-popover">
              <p>Popover manual: solo se cierra con el botón "Ocultar".</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">¿Cuándo usar cada uno?</h2>
      <div class="preview-container">
        <div class="preview-header">Tabla Comparativa</div>
        <div class="preview-content">
          <table class="compare-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Caso de uso ideal</th>
                <th>Bloquea página</th>
                <th>JS requerido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>&lt;details&gt;</code></td>
                <td>FAQs, acordeones, notas colapsables</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><code>&lt;dialog&gt; .show()</code></td>
                <td>Paneles secundarios, tooltips complejos</td>
                <td>❌ No</td>
                <td>✅ Sí (mínimo)</td>
              </tr>
              <tr>
                <td><code>&lt;dialog&gt; .showModal()</code></td>
                <td>Confirmaciones, alertas, formularios modales</td>
                <td>✅ Sí</td>
                <td>✅ Sí (mínimo)</td>
              </tr>
              <tr>
                <td><code>popover</code> auto</td>
                <td>Tooltips, menús contextuales, notificaciones</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td><code>popover</code> manual</td>
                <td>Onboarding guiado, tutoriales paso a paso</td>
                <td>❌ No</td>
                <td>✅ Sí (para disparar)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'formularios', text: 'Formularios HTML' },
      { techId: 'html', moduleId: 'enlaces', text: 'Atributo target en enlaces' },
      { techId: 'js', moduleId: 'dom', text: 'DOM: Manipulación de elementos' },
      { techId: 'js', moduleId: 'eventos', text: 'Eventos JavaScript' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const simpleDialog = ref<HTMLDialogElement | null>(null)
const modalDialog = ref<HTMLDialogElement | null>(null)
const dialogResult = ref<string>('')

function openDialog(type: 'simple' | 'modal') {
  dialogResult.value = ''
  if (type === 'simple') {
    simpleDialog.value?.show()
  } else {
    modalDialog.value?.showModal()
  }
}

function closeDialog(refName: 'simpleDialog' | 'modalDialog', value: string) {
  if (refName === 'simpleDialog') {
    simpleDialog.value?.close(value)
  } else {
    modalDialog.value?.close(value)
  }
  dialogResult.value = value
}

function captureReturn(value: string) {
  setTimeout(() => {
    dialogResult.value = value
  }, 50)
}

function closeOnBackdrop(e: MouseEvent) {
  const dialog = modalDialog.value
  if (!dialog) return
  const rect = dialog.getBoundingClientRect()
  const isOutside =
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  if (isOutside) {
    dialog.close('backdrop')
    dialogResult.value = 'backdrop (clic fuera)'
  }
}
</script>
<style scoped>
.demo-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.custom-details {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 0.2s;
}

.custom-details[open] {
  border-color: var(--color-html);
}

.custom-summary {
  padding: 0.85rem 1.1rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  user-select: none;
  transition: background-color 0.2s, color 0.2s;
}

.custom-summary::-webkit-details-marker {
  display: none;
}

.custom-summary::before {
  content: '▶';
  font-size: 0.65rem;
  color: var(--color-html);
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.custom-details[open] .custom-summary::before {
  transform: rotate(90deg);
}

.custom-summary:hover {
  background: rgba(255, 71, 71, 0.08);
  color: var(--color-html);
}

.details-content {
  padding: 0.75rem 1.1rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.details-content p {
  margin: 0;
}

.demo-dialog-area {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
}

.dialog-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.dialog-result {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  border-left: 3px solid var(--color-html);
  margin: 0;
}

.btn-demo {
  padding: 0.55rem 1.2rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.07);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 500;
  transition: background-color 0.2s, border-color 0.2s, transform 0.1s;
}

.btn-demo:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.35);
}

.btn-demo:active {
  transform: scale(0.97);
}

.btn-primary {
  background: rgba(255, 71, 71, 0.2);
  border-color: var(--color-html);
  color: var(--color-html);
}

.btn-primary:hover {
  background: rgba(255, 71, 71, 0.35);
}

.custom-dialog {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: var(--bg-card, #1e1e1e);
  color: var(--text-primary);
  padding: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  min-width: 320px;
  max-width: 90vw;
}

.custom-dialog::backdrop {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
}

.dialog-inner {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dialog-inner h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--color-html);
}

.dialog-inner p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.6;
}

.dialog-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.demo-popover-area {
  min-height: 80px;
}

.popover-demo-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.custom-popover {
  padding: 1rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  background: var(--bg-card, #1e1e1e);
  color: var(--text-primary);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  max-width: 280px;
}

.custom-popover p {
  margin: 0;
  color: var(--text-secondary);
}

.popover-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.popover-menu li {
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.15s;
}

.popover-menu li:hover {
  background: rgba(255, 71, 71, 0.12);
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.compare-table th,
.compare-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.compare-table thead tr {
  background: rgba(255, 71, 71, 0.15);
}

.compare-table thead th {
  color: var(--color-html);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.compare-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.compare-table td code {
  font-size: 0.82rem;
}

kbd {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.82rem;
  font-family: monospace;
}
</style>
