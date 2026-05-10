<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Collapse & Acordeón</h1>
      <p class="subtitle">Componente para mostrar u ocultar contenido mediante animaciones fluidas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Collapse Básico</h2>
      <p class="section-desc">Utiliza botones o enlaces para alternar la visibilidad de otro elemento. Requiere el atributo <code>data-bs-toggle="collapse"</code> y un objetivo (<code>data-bs-target</code> o <code>href</code>).</p>
      <div class="preview-container">
        <div class="preview-header">Demo: Collapse Simple</div>
        <div class="preview-content">
          <button class="btn" type="button" @click="toggle('collapse1')">Mostrar / Ocultar Contenido</button><br><br>
          <div :class="['custom-collapse', { show: collapses.collapse1 }]">
            <div>Este es el contenido oculto. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
          </div>
        </div>
      </div>
      <CodeBlock language="html" code='<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#miCollapse">Botón Toggle</button>
<div class="collapse" id="miCollapse">
  <div>Contenido oculto que se desplegará.</div>
</div>' />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Múltiples Objetivos</h2>
      <p class="section-desc">Un solo botón puede controlar varios elementos collapse si usan una clase en común en el <code>data-bs-target</code>.</p>
      <div class="preview-container">
        <div class="preview-header">Demo: Múltiples Collapse</div>
        <div class="preview-content">
          <div class="d-flex" >
            <button class="btn" type="button" @click="toggle('multi1')">Toggle Primer Div</button>
            <button class="btn" type="button" @click="toggle('multi2')">Toggle Segundo Div</button>
            <button class="btn" type="button" @click="toggleBoth">Toggle Ambos</button>
          </div><br>
          <div class="row">
            <div class="col">
              <div :class="['custom-collapse', { show: collapses.multi1 }]">
                <div class="d-flex">Contenido del primer div colapsable.</div>
              </div>
            </div>
            <div class="col">
              <div :class="['custom-collapse', { show: collapses.multi2 }]">
                <div class="d-flex">Contenido del segundo div colapsable.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock language="html" code='<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target=".multi-collapse">Toggle Ambos</button>
<div class="collapse multi-collapse" id="multiCollapseExample1">...</div>
<div class="collapse multi-collapse" id="multiCollapseExample2">...</div>' />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Acordeón (Accordion)</h2>
      <p class="section-desc">Al añadir el atributo <code>data-bs-parent</code>, puedes vincular varios collapse para que se comporten como un acordeón (solo uno abierto a la vez).</p>
      <div class="preview-container">
        <div class="preview-header">Demo: Acordeón</div>
        <div class="preview-content">
          <div class="accordion-custom">
            <div class="accordion-item-custom">
              <button :class="['accordion-button-custom', { collapsed: accordionOpen !== 1 }]" @click="toggleAccordion(1)">Elemento de Acordeón #1</button>
              <div :class="['accordion-collapse-custom', { show: accordionOpen === 1 }]">
                <div>
                  <div class="accordion-body-custom">Este es el cuerpo del primer elemento. Se muestra por defecto si le pones la clase <code>show</code> al iniciar.</div>
                </div>
              </div>
            </div>
            <div class="accordion-item-custom">
              <button :class="['accordion-button-custom', { collapsed: accordionOpen !== 2 }]" @click="toggleAccordion(2)">Elemento de Acordeón #2</button>
              <div :class="['accordion-collapse-custom', { show: accordionOpen === 2 }]">
                <div>
                  <div class="accordion-body-custom">Este es el cuerpo del segundo elemento. Nota cómo se cierra el primero al abrir este.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock language="html" code='<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Item #1</button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">Contenido...</div>
    </div>
  </div>
</div>' />
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'botones', text: 'Botones en Bootstrap' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const collapses = reactive({
  collapse1: false,
  multi1: false,
  multi2: false
})

const toggle = (key: keyof typeof collapses) => {
  collapses[key] = !collapses[key]
}

const toggleBoth = () => {
  const newState = !(collapses.multi1 || collapses.multi2)
  collapses.multi1 = newState
  collapses.multi2 = newState
}
const accordionOpen = ref<number | null>(1)

const toggleAccordion = (id: number) => {
  accordionOpen.value = accordionOpen.value === id ? null : id
}
</script>
<style scoped>
.d-flex {
  display: flex;
  text-align: center;
  gap: 0.5rem;
  justify-content: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.col {
  flex: 1 0 0%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;
}

.btn:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.custom-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.custom-collapse > div {
  overflow: hidden;
}

.custom-collapse.show {
  grid-template-rows: 1fr;
}

.accordion-custom {
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  overflow: hidden;
}

.accordion-item-custom {
  background-color: var(--bg-card);
  border-bottom: 1px solid var(--border-color);
}

.accordion-item-custom:last-child {
  border-bottom: none;
}

.accordion-button-custom {
  width: 100%;
  text-align: left;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s, color 0.2s;
}

.accordion-button-custom:not(.collapsed) {
  color: #0d6efd;
  background-color: rgba(13, 110, 253, 0.1);
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
}

.accordion-button-custom::after {
  content: "▼";
  font-size: 0.8rem;
  transition: transform 0.2s ease-in-out;
}

.accordion-button-custom:not(.collapsed)::after {
  transform: rotate(-180deg);
}

.accordion-collapse-custom {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.accordion-collapse-custom > div {
  overflow: hidden;
}

.accordion-collapse-custom.show {
  grid-template-rows: 1fr;
}

.accordion-body-custom {
  padding: 1rem 1.25rem;
}
</style>
