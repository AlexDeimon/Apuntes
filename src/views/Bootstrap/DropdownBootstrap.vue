<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Dropdowns</h1>
      <p class="subtitle">Menús desplegables contextuales para mostrar listas de enlaces y acciones.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">¿Qué es un Dropdown?</h2>
      <p class="section-desc">Los <strong>Dropdowns</strong> son superposiciones contextuales que permiten mostrar listas de enlaces, acciones o contenido. En Bootstrap 5, se posicionan dinámicamente gracias a la librería externa <strong>Popper.js</strong>.</p>
      <div class="info-box">
        <strong>Nota importante:</strong> A partir de Bootstrap 5, los atributos de datos cambian su nomenclatura al prefijo <code>data-bs-*</code>. Por tanto, se utiliza <code>data-bs-toggle="dropdown"</code> en lugar del clásico <code>data-toggle="dropdown"</code> de Bootstrap 4.
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Dropdown Básico</h2>
      <p class="section-desc">Un dropdown básico consiste en un contenedor padre con la clase <code>.dropdown</code>, un botón disparador con las clases <code>.btn</code>, <code>.dropdown-toggle</code> y el atributo <code>data-bs-toggle="dropdown"</code>, y finalmente la lista con la clase <code>.dropdown-menu</code>.</p>
      <div class="cards-grid">
        <CodeBlock language="html" code='<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Lenguajes de Programación
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">JavaScript</a></li>
    <li><a class="dropdown-item" href="#">TypeScript</a></li>
    <li><a class="dropdown-item" href="#">Python</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Ver Todos</a></li>
  </ul>
</div>' />
        <div class="preview-container">
          <div class="preview-header">Demo: Dropdown Estándar</div>
          <div class="preview-content">
            <div class="dropdown-wrapper" v-click-outside="() => closeDropdown('basic')">
              <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown('basic')">Lenguajes de Programación</button>
              <ul :class="['custom-dropdown-menu', { show: openDropdowns.basic }]">
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('basic', 'JavaScript')">JavaScript</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('basic', 'TypeScript')">TypeScript</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('basic', 'Python')">Python</a></li>
              </ul>
            </div>
            <span v-if="selectedOptions.basic" class="selection-badge">Seleccionado: {{ selectedOptions.basic }}</span>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <!-- Botón Dividido (Split Button) -->
    <section class="topic-section">
      <h2 class="section-title bootstrap">Botones Divididos (Split)</h2>
      <p class="section-desc">Puedes crear un dropdown donde el botón de acción principal y el disparador del menú estén separados utilizando la clase <code>.btn-group</code> en combinación con un botón disparador específico con la clase <code>.dropdown-toggle-split</code>.</p>
      <div class="cards-grid">
        <CodeBlock language="html" code='<div class="btn-group">
  <button type="button" class="btn btn-primary">Acción Principal</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"></button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Opción 1</a></li>
    <li><a class="dropdown-item" href="#">Opción 2</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Configuración</a></li>
  </ul>
</div>' />
        <div class="preview-container">
          <div class="preview-header">Demo: Split Dropdown</div>
          <div class="preview-content">
            <div class="btn-group-custom" v-click-outside="() => closeDropdown('split')">
              <button class="btn btn-primary" type="button" @click="triggerAction('Acción Principal Ejecutada')">Acción Principal</button>
              <button class="btn btn-primary dropdown-toggle dropdown-toggle-split" type="button" @click="toggleDropdown('split')"></button>
              <ul :class="['custom-dropdown-menu', { show: openDropdowns.split }]">
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('split', 'Opción 1')">Opción 1</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('split', 'Opción 2')">Opción 2</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('split', 'Configuración')">Configuración</a></li>
              </ul>
            </div>
            <span v-if="selectedOptions.split" class="selection-badge">Seleccionado: {{ selectedOptions.split }}</span>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Dropdown Oscuro</h2>
      <p class="section-desc">En Bootstrap 5, puedes cambiar fácilmente el estilo de la lista desplegable agregando la clase <code>.dropdown-menu-dark</code> al elemento <code>.dropdown-menu</code>.</p>
      <div class="cards-grid">
        <CodeBlock language="html" code='<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Tema Oscuro</button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#">Perfil</a></li>
    <li><a class="dropdown-item" href="#">Ajustes</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
  </ul>
</div>' />
      <div class="preview-container">
        <div class="preview-header">Demo: Dropdown con Menú Oscuro</div>
        <div class="preview-content">
          <div class="dropdown-wrapper" v-click-outside="() => closeDropdown('dark')">
            <button class="btn btn-secondary dropdown-toggle" type="button" @click="toggleDropdown('dark')">Tema Oscuro</button>
            <ul :class="['custom-dropdown-menu', 'dark', { show: openDropdowns.dark }]">
              <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('dark', 'Perfil')">Perfil</a></li>
              <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('dark', 'Ajustes')">Ajustes</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('dark', 'Cerrar Sesión')">Cerrar Sesión</a></li>
            </ul>
          </div>
          <span v-if="selectedOptions.dark" class="selection-badge secondary">Seleccionado: {{ selectedOptions.dark }}</span>
        </div>
      </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Direcciones de Despliegue</h2>
      <p class="section-desc">Por defecto, el menú se despliega hacia abajo. Sin embargo, puedes alterar la dirección utilizando variantes de clase en el contenedor padre:</p>
      <ul class="def-list">
        <li><span class="def-term">.dropup</span>: Despliega hacia arriba.</li>
        <li><span class="def-term">.dropend</span>: Despliega hacia la derecha (en lenguajes LTR).</li>
        <li><span class="def-term">.dropstart</span>: Despliega hacia la izquierda (en lenguajes LTR).</li>
      </ul>
      <div class="cards-grid">
        <CodeBlock language="html" code='<!-- Hacia arriba -->
<div class="dropup">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropup</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Hacia la derecha -->
<div class="dropend">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropend</button>
  <ul class="dropdown-menu">...</ul>
</div>

<!-- Hacia la izquierda -->
<div class="dropstart">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropstart</button>
  <ul class="dropdown-menu">...</ul>
</div>' />
        <div class="preview-container">
          <div class="preview-header">Demo: Direcciones de Despliegue</div>
          <div class="preview-content">
            <div class="dropdown-wrapper dropup" v-click-outside="() => closeDropdown('dropup')">
              <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown('dropup')">Dropup</button>
              <ul :class="['custom-dropdown-menu', { show: openDropdowns.dropup }]">
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('directions', 'Dropup Opción')">Opción de arriba</a></li>
              </ul>
            </div>
            <div class="dropdown-wrapper dropend" v-click-outside="() => closeDropdown('dropend')">
              <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown('dropend')">Dropend</button>
              <ul :class="['custom-dropdown-menu', { show: openDropdowns.dropend }]">
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('directions', 'Dropend Opción')">Opción derecha</a></li>
              </ul>
            </div>
            <div class="dropdown-wrapper dropstart" v-click-outside="() => closeDropdown('dropstart')">
              <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown('dropstart')">Dropstart</button>
              <ul :class="['custom-dropdown-menu', { show: openDropdowns.dropstart }]">
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('directions', 'Dropstart Opción')">Opción izquierda</a></li>
              </ul>
            </div>
          </div>
          <span v-if="selectedOptions.directions" class="selection-badge primary">Selección Direcciones: {{ selectedOptions.directions }}</span>
        </div>
      </div>
    </section>
    <hr class="divider" />

    <!-- Alineación (Menu Alignment) -->
    <section class="topic-section">
      <h2 class="section-title bootstrap">Alineación del Menú</h2>
      <p class="section-desc">Para alinear el menú desplegable hacia el lado derecho del botón disparador, puedes agregar la clase <code>.dropdown-menu-end</code> a la lista desplegable.</p>
      <div class="cards-grid">
        <CodeBlock language="html" code='<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Menú Alineado a la Derecha
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Acción 1</a></li>
    <li><a class="dropdown-item" href="#">Acción 2</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Acción Alineada</a></li>
  </ul>
</div>' />
        <div class="preview-container">
          <div class="preview-header">Demo: Alineación Derecha (.dropdown-menu-end)</div>
          <div class="preview-content">
            <div class="dropdown-wrapper" v-click-outside="() => closeDropdown('alignEnd')">
              <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown('alignEnd')">Menú Alineado a la Derecha</button>
              <ul :class="['custom-dropdown-menu', 'dropdown-menu-end', { show: openDropdowns.alignEnd }]">
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('alignEnd', 'Acción 1')">Acción 1</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('alignEnd', 'Acción 2')">Acción 2</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="javascript:void(0)" @click="selectOption('alignEnd', 'Acción 3')">Acción Alineada</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'botones', text: 'Botones en Bootstrap' },
      { techId: 'bootstrap', moduleId: 'collapse', text: 'Collapse en Bootstrap' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { reactive, type DirectiveBinding } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

interface ClickOutsideElement extends HTMLElement {
  clickOutsideEvent?: (event: Event) => void
}

const vClickOutside = {
  mounted(el: ClickOutsideElement, binding: DirectiveBinding) {
    el.clickOutsideEvent = (event: Event) => {
      if (el && event.target && !(el === event.target || el.contains(event.target as Node))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: ClickOutsideElement) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  }
}

const openDropdowns = reactive({
  basic: false,
  split: false,
  dark: false,
  dropup: false,
  dropend: false,
  dropstart: false,
  alignEnd: false
})

const selectedOptions = reactive({
  basic: '',
  split: '',
  dark: '',
  directions: '',
  alignEnd: ''
})

const toggleDropdown = (key: keyof typeof openDropdowns) => {
  const currentState = openDropdowns[key]
  Object.keys(openDropdowns).forEach((k) => {
    openDropdowns[k as keyof typeof openDropdowns] = false
  })
  openDropdowns[key] = !currentState
}

const closeDropdown = (key: keyof typeof openDropdowns) => {
  openDropdowns[key] = false
}

const selectOption = (dropdownKey: string, option: string) => {
  if (dropdownKey === 'directions') {
    selectedOptions.directions = option
  } else {
    selectedOptions[dropdownKey as keyof typeof selectedOptions] = option
  }
  Object.keys(openDropdowns).forEach((k) => {
    openDropdowns[k as keyof typeof openDropdowns] = false
  })
}

const triggerAction = (msg: string) => {
  alert(msg)
}
</script>
<style scoped>
.preview-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-around;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5c636a;
  border-color: #565e64;
}

.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.btn-group-custom {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group-custom .btn:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group-custom .btn:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle-split::after {
  margin-left: 0;
}

.dropup .dropdown-toggle::after {
  border-top: 0;
  border-bottom: 0.3em solid;
}

.dropend .dropdown-toggle::after {
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropstart .dropdown-toggle::after {
  display: none;
}

.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.custom-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  width: max-content;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.375rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.custom-dropdown-menu.show {
  display: block;
}

.custom-dropdown-menu.dark {
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
  color: #dee2e6;
}

.custom-dropdown-menu.dark .dropdown-item {
  color: #dee2e6;
}

.custom-dropdown-menu.dark .dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.custom-dropdown-menu.dark .dropdown-divider {
  border-top: 1px solid rgba(0, 0, 0, 0.175);
}

.dropup .custom-dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 0.125rem;
}

.dropend .custom-dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: 0.125rem;
}

.dropstart .custom-dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-right: 0.125rem;
}

.custom-dropdown-menu.dropdown-menu-end {
  right: 0;
  left: auto;
}

.dropdown-item {
  display: block;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: background-color 0.15s;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #1e2125;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #dee2e6;
}

.selection-badge {
  padding: 0.4rem 0.8rem;
  background-color: rgba(13, 110, 253, 0.15);
  color: #0d6efd;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.selection-badge.secondary {
  background-color: rgba(108, 117, 125, 0.15);
  color: #6c757d;
}
</style>
