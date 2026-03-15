<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">List Group</h1>
      <p class="subtitle">Componente flexible para mostrar series de contenido de forma organizada.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estructura Básica</h2>
      <p class="section-desc">El grupo de listas más básico es una lista desordenada con elementos de lista y las clases adecuadas.</p>
      <div class="cards-grid">
        <ul class="list-group">
          <li class="list-group-item">Item 1</li>
          <li class="list-group-item">Item 2</li>
          <li class="list-group-item">Item 3</li>
        </ul>
        <CodeBlock language="html" code='<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
</ul>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estados: Activo y Deshabilitado</h2>
      <p class="section-desc">Usa <code>.active</code> para indicar la selección actual y <code>.disabled</code> para que parezca deshabilitado.</p>
      <div class="cards-grid">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">Item Activo</li>
          <li class="list-group-item">Item 2</li>
          <li class="list-group-item disabled" aria-disabled="true">Item Deshabilitado</li>
        </ul>
        <CodeBlock language="html" code='<ul class="list-group">
  <li class="list-group-item active">Item Activo</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item disabled">Item Deshabilitado</li>
</ul>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Enlaces y Botones</h2>
      <p class="section-desc">Usa <code>&lt;a&gt;</code> o <code>&lt;button&gt;</code> para crear elementos interactivos con efectos de hover usando <code>.list-group-item-action</code>.</p>
      <div class="cards-grid">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action active">El botón actual</button>
          <button type="button" class="list-group-item list-group-item-action">Un segundo botón</button>
          <button type="button" class="list-group-item list-group-item-action">Un tercer botón</button>
        </div>
        <CodeBlock language="html" code='<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active">El botón actual</button>
  <button type="button" class="list-group-item list-group-item-action">Un segundo botón</button>
  <button type="button" class="list-group-item list-group-item-action">Un tercer botón</button>
</div>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Variantes Contextuales</h2>
      <p class="section-desc">Aplica colores temáticos a los elementos de la lista.</p>
      <div class="cards-grid">
        <ul class="list-group">
          <li class="list-group-item list-group-item-primary">Elemento de lista primary simple</li>
          <li class="list-group-item list-group-item-success">Elemento de lista success simple</li>
          <li class="list-group-item list-group-item-danger">Elemento de lista danger simple</li>
          <li class="list-group-item list-group-item-warning">Elemento de lista warning simple</li>
        </ul>
        <CodeBlock language="html" code='<li class="list-group-item list-group-item-primary">...</li>
<li class="list-group-item list-group-item-success">...</li>
<li class="list-group-item list-group-item-danger">...</li>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">List Group Flush</h2>
      <p class="section-desc">Añade <code>.list-group-flush</code> para eliminar algunos bordes y esquinas redondeadas para que el grupo se integre mejor en contenedores (como tarjetas).</p>
      <div class="cards-grid">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Un item</li>
          <li class="list-group-item">Un segundo item</li>
          <li class="list-group-item">Un tercer item</li>
        </ul>
        <CodeBlock language="html" code='<ul class="list-group list-group-flush">
  <li class="list-group-item">Un item</li>
  <li class="list-group-item">Un segundo item</li>
  <li class="list-group-item">Un tercer item</li>
</ul>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Contenido Personalizado</h2>
      <p class="section-desc">Puedes añadir casi cualquier HTML dentro de los items usando utilidades de Flexbox.</p>
      <div class="cards-grid">
        <div class="list-group">
          <button class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5>Encabezado del elemento de lista</h5>
              <small>hace 3 días</small>
            </div>
            <p>Contenido de marcador de posición en un grupo de listas.</p>
            <small>Y algo de letra pequeña.</small>
          </button>
          <button class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5>Segundo elemento de lista</h5>
              <small class="text-muted">La semana pasada</small>
            </div>
            <p>Otro ejemplo de contenido personalizado.</p>
            <small class="text-muted">Más metadatos aquí.</small>
          </button>
        </div>
        <CodeBlock language="html" code='<button class="list-group-item list-group-item-action active">
  <div class="d-flex w-100 justify-content-between">
    <h5>Encabezado</h5>
    <small>Fecha</small>
  </div>
  <p>Contenido...</p>
</button>' />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
:deep(.list-group) {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.375rem;
}

:deep(.list-group-item) {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

:deep(.list-group-item:first-child) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

:deep(.list-group-item:last-child) {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

:deep(.list-group-item.active) {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

:deep(.list-group-item.disabled) {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}

:deep(.list-group-item-action) {
  width: 100%;
  color: #495057;
  text-align: inherit;
  cursor: pointer;
}

:deep(.list-group-item-action:hover) {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

:deep(.list-group-flush .list-group-item) {
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0;
}

:deep(.list-group-flush:first-child .list-group-item:first-child) {
  border-top-width: 0;
}

:deep(.list-group-flush:last-child .list-group-item:last-child) {
  border-bottom-width: 0;
}

:deep(.list-group-item-primary) {
  color: #052c65;
  background-color: #cfe2ff;
}

:deep(.list-group-item-success) {
  color: #0a3622;
  background-color: #d1e7dd;
}

:deep(.list-group-item-danger) {
  color: #58151c;
  background-color: #f8d7da;
}

:deep(.list-group-item-warning) {
  color: #664d03;
  background-color: #fff3cd;
}
</style>
