<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Modal</h1>
      <p class="subtitle">Cuadros de diálogo personalizados para notificaciones o contenido que se superponen al resto de la página.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estructura Básica</h2>
      <p class="section-desc">Los modales en Bootstrap están construidos con HTML, CSS y JavaScript. Se colocan sobre todo lo demás en el documento y eliminan el desplazamiento del <code>&lt;body&gt;</code> para que su contenido se desplace en su lugar.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Componentes de un Modal</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">.modal:</span> El contenedor principal oculto. Requiere un ID único.</li>
            <li><span class="def-term">.modal-dialog:</span> Controla el tamaño y la posición del modal.</li>
            <li><span class="def-term">.modal-content:</span> Contiene el fondo, el borde y el contenido interno.</li>
            <li><span class="def-term">.modal-header, .modal-body, .modal-footer:</span> Secciones para organizar el contenido (título, cuerpo principal, botones de acción).</li>
            <li><span class="def-term">data-bs-toggle="modal":</span> Atributo para inicializar el modal desde un botón sin usar JS manual.</li>
            <li><span class="def-term">data-bs-target="#id":</span> Indica qué modal debe abrir el botón.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Ejemplo de Código Base</h3>
          </div>
          <CodeBlock language="html" code='<!-- Botón para lanzar el modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Abrir Modal</button>
<!-- Estructura del Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Título del Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Aquí va el contenido principal del modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Ejemplos Interactivos</h2>
      <p class="section-desc">A continuación, puedes probar diferentes variaciones de modales proporcionadas por Bootstrap.</p>
      <div class="cards-grid">
        <div class="card info demo-card">
          <div class="card-header">
            <h3>Modal Básico</h3>
          </div>
          <p>Un modal estándar que se cierra al hacer clic fuera de él o en los botones de cerrar.</p>
          <button class="bs-btn bs-btn-primary" @click="openModal('basic')">Abrir Modal Básico</button>
          <CodeBlock language="html" code='<!-- Igual a la estructura básica mostrada arriba -->' />
        </div>
        <div class="card info demo-card">
          <div class="card-header">
            <h3>Fondo Estático (Static Backdrop)</h3>
          </div>
          <p>Agrega <code>data-bs-backdrop="static"</code> al modal para que no se cierre al hacer clic fuera de él.</p>
          <button class="bs-btn bs-btn-info" @click="openModal('static')">Abrir Modal Estático</button>
          <CodeBlock language="html" code='<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="staticBackdrop" ...>
  <!-- Contenido -->
</div>' />
        </div>
        <div class="card info demo-card">
          <div class="card-header">
            <h3>Contenido Desplazable</h3>
          </div>
          <p>Usa <code>.modal-dialog-scrollable</code> en el <code>.modal-dialog</code> para modales con mucho texto.</p>
          <button class="bs-btn bs-btn-warning" @click="openModal('scroll')">Abrir Modal Desplazable</button>
          <CodeBlock language="html" code='<div class="modal-dialog modal-dialog-scrollable">
  <!-- Contenido -->
</div>' />
        </div>
        <div class="card info demo-card">
          <div class="card-header">
            <h3>Centrado Verticalmente</h3>
          </div>
          <p>Usa <code>.modal-dialog-centered</code> en el <code>.modal-dialog</code> para centrar el modal en la pantalla.</p>
          <button class="bs-btn bs-btn-success" @click="openModal('centered')">Abrir Modal Centrado</button>
          <CodeBlock language="html" code='<div class="modal-dialog modal-dialog-centered">
  <!-- Contenido -->
</div>' />
        </div>
        <div class="card info demo-card">
          <div class="card-header">
            <h3>Tamaños (Sizes)</h3>
          </div>
          <p>Agrega modificadores como <code>.modal-sm</code>, <code>.modal-lg</code> o <code>.modal-xl</code> al <code>.modal-dialog</code>.</p>
          <div class="btn-group-custom">
            <button class="bs-btn bs-btn-secondary" @click="openModal('size-sm')">Small</button>
            <button class="bs-btn bs-btn-secondary" @click="openModal('size-lg')">Large</button>
            <button class="bs-btn bs-btn-secondary" @click="openModal('size-xl')">Extra Large</button>
          </div>
          <CodeBlock language="html" code='<div class="modal-dialog modal-sm">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-xl">...</div>' />
        </div>
      </div>
    </section>
    <Teleport to="body">
      <div v-if="currentModal" class="bs-modal-backdrop" @click="handleBackdropClick"></div>
      <div v-if="currentModal" class="bs-modal" :class="{ 'shake-animation': shakeModal }" tabindex="-1" @click="handleModalWrapperClick">
        <div class="bs-modal-dialog" :class="dialogClasses">
          <div class="bs-modal-content">
            <div class="bs-modal-header">
              <h5 class="bs-modal-title">{{ modalTitle }}</h5>
              <button type="button" class="bs-btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="bs-modal-body">
              <template v-if="currentModal === 'scroll'">
                <p v-for="i in 15" :key="i">Este es un párrafo simulado para demostrar el desplazamiento (scroll) dentro del cuerpo del modal cuando el contenido es extenso. Párrafo número {{ i }}.</p>
              </template>
              <template v-else>
                <p>{{ modalBodyText }}</p>
              </template>
            </div>
            <div class="bs-modal-footer">
              <button type="button" class="bs-btn bs-btn-secondary" @click="closeModal">Cerrar</button>
              <button type="button" class="bs-btn bs-btn-primary">Entendido</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'botones', text: 'Botones de Bootstrap' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

type ModalType = 'basic' | 'static' | 'scroll' | 'centered' | 'size-sm' | 'size-lg' | 'size-xl' | null
const currentModal = ref<ModalType>(null)
const shakeModal = ref(false)
const openModal = (type: ModalType) => {
  currentModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  currentModal.value = null
  shakeModal.value = false
  document.body.style.overflow = ''
}

const handleBackdropClick = () => {
  if (currentModal.value === 'static') {
    shakeModal.value = true
    setTimeout(() => { shakeModal.value = false }, 300)
  } else {
    closeModal()
  }
}

const handleModalWrapperClick = (e: MouseEvent) => {
  if ((e.target as HTMLElement).classList.contains('bs-modal')) {
    handleBackdropClick()
  }
}

const modalTitle = computed(() => {
  switch (currentModal.value) {
    case 'basic': return 'Modal Básico'
    case 'static': return 'Modal Estático'
    case 'scroll': return 'Modal Desplazable'
    case 'centered': return 'Modal Centrado'
    case 'size-sm': return 'Modal Pequeño (sm)'
    case 'size-lg': return 'Modal Grande (lg)'
    case 'size-xl': return 'Modal Extra Grande (xl)'
    default: return 'Modal'
  }
})

const modalBodyText = computed(() => {
  switch (currentModal.value) {
    case 'static': return 'Este modal no se cerrará si haces clic fuera de él. Pruébalo haciendo clic en el fondo gris.'
    case 'centered': return 'Este modal está centrado verticalmente en la pantalla gracias a la clase .modal-dialog-centered.'
    case 'size-sm': return 'Este es un modal pequeño, útil para advertencias cortas.'
    case 'size-lg': return 'Este es un modal grande, proporciona más espacio horizontal.'
    case 'size-xl': return 'Este es un modal extra grande, ideal para mostrar formularios complejos o tablas de datos.'
    default: return 'Aquí puedes agregar cualquier contenido HTML, texto o componentes que necesites mostrar.'
  }
})

const dialogClasses = computed(() => {
  return {
    'bs-modal-dialog-centered': currentModal.value === 'centered',
    'bs-modal-dialog-scrollable': currentModal.value === 'scroll',
    'bs-modal-sm': currentModal.value === 'size-sm',
    'bs-modal-lg': currentModal.value === 'size-lg',
    'bs-modal-xl': currentModal.value === 'size-xl'
  }
})
</script>

<style scoped>
.demo-card {
  margin-bottom: 1.5rem;
}
.demo-card p {
  margin-bottom: 1rem;
}

.bs-btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1rem;
}

.bs-btn-primary { background-color: #0d6efd; border-color: #0d6efd; }
.bs-btn-primary:hover { background-color: #0b5ed7; border-color: #0a58ca; }
.bs-btn-secondary { background-color: #6c757d; border-color: #6c757d; }
.bs-btn-secondary:hover { background-color: #5c636a; border-color: #565e64; }
.bs-btn-info { background-color: #0dcaf0; border-color: #0dcaf0; color: #000; }
.bs-btn-info:hover { background-color: #31d2f2; border-color: #25cff2; }
.bs-btn-warning { background-color: #ffc107; border-color: #ffc107; color: #000; }
.bs-btn-warning:hover { background-color: #ffca2c; border-color: #ffc720; }
.bs-btn-success { background-color: #198754; border-color: #198754; }
.bs-btn-success:hover { background-color: #157347; border-color: #146c43; }

.btn-group-custom {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

:global(.bs-modal-backdrop) {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

:global(.bs-modal) {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

:global(.bs-modal-dialog) {
  position: relative;
  width: auto;
  margin: 1.75rem auto;
  pointer-events: none;
  max-width: 500px;
}

:global(.bs-modal-sm) { max-width: 300px; }
:global(.bs-modal-lg) { max-width: 800px; }
:global(.bs-modal-xl) { max-width: 1140px; }

:global(.bs-modal-dialog-centered) {
  display: flex;
  align-items: center;
  min-height: calc(100% - 3.5rem);
}

:global(.bs-modal-dialog-scrollable) {
  height: calc(100% - 3.5rem);
}

:global(.bs-modal-dialog-scrollable .bs-modal-content) {
  max-height: 100%;
  overflow: hidden;
}

:global(.bs-modal-dialog-scrollable .bs-modal-body) {
  overflow-y: auto;
}

:global(.bs-modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  outline: 0;
  color: #212529;
}

:global(.bs-modal-header) {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
}

:global(.bs-modal-title) {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0;
}

:global(.bs-btn-close) {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: 0.5;
  cursor: pointer;
}

:global(.bs-btn-close:hover) {
  opacity: 0.75;
}

:global(.bs-modal-body) {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

:global(.bs-modal-footer) {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.5rem - 1px);
  border-bottom-left-radius: calc(0.5rem - 1px);
}

:global(.bs-modal-footer > *) {
  margin: 0.25rem;
}

:global(.shake-animation .bs-modal-dialog) {
  animation: shake 0.3s;
}

@keyframes shake {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}
</style>
