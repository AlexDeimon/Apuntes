<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Botones</h1>
      <p class="subtitle">Componentes interactivos para acciones y navegación.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estilos Base</h2>
      <p class="section-desc">Bootstrap incluye varios estilos de botones predefinidos, cada uno con un propósito semántico propio. Se requiere siempre la clase base <code>.btn</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Variantes Sólidas</h3>
          </div>
          <p>Usa clases como <code>.btn-primary</code>, <code>.btn-secondary</code>, etc.</p>
          <CodeBlock language="html" code='<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>' />
          <div class="demo-box">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
            <button type="button" class="btn btn-link">Link</button>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Variantes Outline</h3>
          </div>
          <p>Para un diseño más ligero, usa <code>.btn-outline-*</code> para botones sin fondo sólido inicial.</p>
          <CodeBlock language="html" code='<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>' />
          <div class="demo-box">
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Tamaños y Etiquetas</h2>
      <p class="section-desc">Puedes ajustar el tamaño de los botones o usar diferentes etiquetas HTML según el contexto.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Tamaños</h3>
          </div>
          <p>Usa <code>.btn-lg</code> para botones grandes o <code>.btn-sm</code> para pequeños.</p>
          <CodeBlock language="html" code='<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>' />
          <div class="demo-box">
            <button type="button" class="btn btn-primary btn-lg">Large button</button>
            <button type="button" class="btn btn-primary">Normal</button>
            <button type="button" class="btn btn-primary btn-sm">Small button</button>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Etiquetas Compatibles</h3>
          </div>
          <p>Las clases de <code>.btn</code> están diseñadas para usarse con <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> e <code>&lt;input&gt;</code>.</p>
          <CodeBlock language="html" code='<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">' />
          <div class="demo-box">
            <a class="btn btn-primary" href="javascript:void(0)" role="button">Link</a>
            <button class="btn btn-primary" type="button">Button Tag</button>
            <input class="btn btn-primary" type="button" value="Input Tag">
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Botones "Block" (Ancho Completo)</h2>
      <p class="section-desc">En Bootstrap 5, los botones de bloque se crean con utilidades de red o displays en el contenedor padre, reemplazando la antigua clase <code>.btn-block</code>.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Ejemplo con d-grid</h3>
          <span class="badge success">Moderno</span>
        </div>
        <CodeBlock language="html" code='<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button 1</button>
  <button class="btn btn-primary" type="button">Button 2</button>
</div>' />
        <div class="demo-box">
          <div class="d-grid-block">
            <button class="btn btn-primary" type="button">Full Width Button 1</button>
            <button class="btn btn-secondary" type="button">Full Width Button 2</button>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Grupos de Botones</h2>
      <p class="section-desc">Agrupa una serie de botones en una sola línea o columna con <code>.btn-group</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Grupo Horizontal</h3>
          </div>
          <CodeBlock language="html" code='<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>' />
          <div class="demo-box">
            <div class="btn-group">
              <button type="button" class="btn btn-primary">Left</button>
              <button type="button" class="btn btn-primary">Middle</button>
              <button type="button" class="btn btn-primary">Right</button>
            </div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Grupo Vertical</h3>
          </div>
          <CodeBlock language="html" code='<div class="btn-group-vertical" role="group">
  <button type="button" class="btn btn-dark">Top</button>
  <button type="button" class="btn btn-dark">Middle</button>
  <button type="button" class="btn btn-dark">Bottom</button>
</div>' />
          <div class="demo-box">
            <div class="btn-group-vertical">
              <button type="button" class="btn btn-dark">Top</button>
              <button type="button" class="btn btn-dark">Middle</button>
              <button type="button" class="btn btn-dark">Bottom</button>
            </div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Barra de Herramientas</h3>
          </div>
          <p>Combina múltiples grupos con <code>.btn-toolbar</code>.</p>
          <CodeBlock language="html" code='<div class="btn-toolbar" role="toolbar">
  <div class="btn-group me-2" role="group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-info">3</button>
  </div>
</div>' />
          <div class="demo-box">
            <div class="btn-toolbar">
              <div class="btn-group me-2">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-info">3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estados: Activo y Desactivado</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Desactivado</h3>
          </div>
          <p>Añade el atributo <code>disabled</code> a los elementos <code>&lt;button&gt;</code>.</p>
          <CodeBlock language="html" code='<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>' />
          <div class="demo-box">
            <button type="button" class="btn btn-primary" disabled>Primary disabled</button>
            <button type="button" class="btn btn-secondary" disabled>Small disabled</button>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Activo</h3>
          </div>
          <p>Usa la clase <code>.active</code> para forzar un estado presionado/activo.</p>
          <CodeBlock language="html" code='<button type="button" class="btn btn-primary active">Active primary</button>
<button type="button" class="btn btn-secondary active">Active button</button>' />
          <div class="demo-box">
            <button type="button" class="btn btn-primary active">Primary active</button>
            <button type="button" class="btn btn-secondary active">Secondary active</button>
          </div>
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'inicio', text: 'Iniciando con Bootstrap' },
      { techId: 'html', moduleId: 'bloqueLinea', text: 'Bloque vs Línea (HTML)' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>

<style scoped>
.demo-box {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
}

.btn {
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
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-success {
  background-color: #198754;
  border-color: #198754;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #000;
}

.btn-info {
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  color: #000;
}

.btn-light {
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  color: #000;
}

.btn-dark {
  background-color: #212529;
  border-color: #212529;
}

.btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}

.d-grid {
  display: grid;
}

.d-grid-block {
  display: grid;
  width: 100%;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn:hover {
  background-color: rgba(255,255,255,0.1);
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.btn-secondary:hover {
  background-color: #5c636a;
  border-color: #565e64;
}

.btn-success:hover {
  background-color: #157347;
  border-color: #146c43;
}

.btn-danger:hover {
  background-color: #bb2d3b;
  border-color: #b02a37;
}

.btn-warning:hover {
  background-color: #ffca2c;
  border-color: #ffc720;
}

.btn-info:hover {
  background-color: #31d2f2;
  border-color: #25cff2;
}

.btn-light:hover {
  background-color: #f9fafb;
  border-color: #f9fafb;
}

.btn-dark:hover {
  background-color: #1c1f23;
  border-color: #1a1e21;
}

.btn-link:hover {
  color: #0a58ca;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #0d6efd;
  color: #fff;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: #fff;
}

.btn-outline-success:hover {
  background-color: #198754;
  color: #fff;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: #fff;
}

.btn-group-vertical > .btn {
  width: 100%;
}

.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -1px;
}

.btn-group > .btn:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group-vertical > .btn:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: -1px;
}

.btn-group-vertical > .btn:not(:last-child) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
