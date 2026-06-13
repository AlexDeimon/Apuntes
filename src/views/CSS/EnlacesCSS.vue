<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Enlaces y Punteros</h1>
      <p class="subtitle">Estilización avanzada de hipervínculos, estados interactivos y cursores del ratón.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Estados de un Enlace (Pseudo-clases)</h2>
      <p class="section-desc">Los hipervínculos (<code>&lt;a&gt;</code>) son interactivos por naturaleza y pueden presentar diferentes estilos dependiendo de la interacción del usuario. Para estilizarlos de forma individual, usamos <strong>pseudo-clases</strong>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Orden "LoVe HAte"</h3>
          </div>
          <p>Al definir estilos para enlaces, el orden en tu CSS es <strong>estrictamente importante</strong> debido a la especificidad. Se debe seguir la regla mnemotécnica <strong>LVHA</strong>:</p>
          <ul class="def-list">
            <li><span class="def-term">:link</span> (L) - Enlaces normales (no visitados).</li>
            <li><span class="def-term">:visited</span> (V) - Enlaces que el usuario ya ha visitado.</li>
            <li><span class="def-term">:hover</span> (H) - Cuando el cursor está sobre el enlace.</li>
            <li><span class="def-term">:active</span> (A) - En el momento exacto en que se hace clic.</li>
          </ul>
          <div class="preview-container">
            <div class="preview-header">Demo Interactivo: Estados del Enlace</div>
            <div class="preview-content">
              <a href="javascript:void(0)" class="demo-link default">Enlace Interactivo (Pasa el cursor / Clica)</a>
            </div>
          </div>
        </div>
        <div>
          <CodeBlock language="css" code="/* 1. No visitado */
.demo-link.default {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s, transform 0.1s;
}

/* 2. Visitado */
.demo-link.default:visited {
  color: #8b5cf6;
}

/* 3. Mouse sobre el enlace */
.demo-link.default:hover {
  color: #60a5fa;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* 4. Clickeado */
.demo-link.default:active {
  color: #ef4444;
  transform: scale(0.95);
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Decoración de Texto (text-decoration)</h2>
      <p class="section-desc">Por defecto, los navegadores subrayan los enlaces. La propiedad <code>text-decoration</code> nos permite manipular estas líneas o eliminarlas.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Demo: text-decoration</div>
          <div class="preview-content">
            <div class="decoration-item">
              <span class="dec-none">text-decoration: none;</span>
              <small>Sin decoración (ideal para botones)</small>
            </div>
            <div class="decoration-item">
              <span class="dec-underline">text-decoration: underline;</span>
              <small>Subrayado (por defecto en enlaces)</small>
            </div>
            <div class="decoration-item">
              <span class="dec-overline">text-decoration: overline;</span>
              <small>Línea superior</small>
            </div>
            <div class="decoration-item">
              <span class="dec-line-through">text-decoration: line-through;</span>
              <small>Tachado</small>
            </div>
            <div class="decoration-item">
              <span class="dec-wavy">text-decoration: underline wavy red;</span>
              <small>Subrayado ondulado (y color)</small>
            </div>
          </div>
        </div>
        <CodeBlock language="css" code=".dec-none {
  text-decoration: none;
}

.dec-underline {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.dec-overline {
  text-decoration: overline;
}

.dec-line-through {
  text-decoration: line-through;
}

.dec-wavy {
  text-decoration: underline wavy #ef4444;
  text-underline-offset: 6px;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Cursores (cursor)</h2>
      <p class="section-desc">La propiedad <code>cursor</code> especifica el tipo de cursor del ratón que se muestra cuando el puntero está sobre un elemento. Es crucial para dar feedback al usuario sobre qué elementos son interactivos.</p>
      <div class="cards-grid">
        <div class="preview-container cursors-demo">
          <div class="preview-header">Demo: Cursores comunes</div>
          <div class="preview-content cursor-grid">
            <div class="cursor-box cursor-default">
              <code>default</code>
            </div>
            <div class="cursor-box cursor-pointer">
              <code>pointer</code>
            </div>
            <div class="cursor-box cursor-text">
              <code>text</code>
            </div>
            <div class="cursor-box cursor-move">
              <code>move</code>
            </div>
            <div class="cursor-box cursor-not-allowed">
              <code>not-allowed</code>
            </div>
            <div class="cursor-box cursor-help">
              <code>help</code>
            </div>
            <div class="cursor-box cursor-wait">
              <code>wait</code>
            </div>
            <div class="cursor-box cursor-crosshair">
              <code>crosshair</code>
            </div>
            <div class="cursor-box cursor-grab">
              <code>grab</code>
            </div>
            <div class="cursor-box cursor-grabbing">
              <code>grabbing</code>
            </div>
          </div>
        </div>
        <CodeBlock language="css" code=".cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.cursor-move {
  cursor: move;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-help {
  cursor: help;
}

.cursor-wait {
  cursor: wait;
}

.cursor-crosshair {
  cursor: crosshair;
}

.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Enlaces como Botones</h2>
      <p class="section-desc">Una práctica muy común es estilizar las etiquetas <code>&lt;a&gt;</code> para que parezcan botones. Esto se logra combinando <code>text-decoration: none</code>, padding, background-color y border-radius.</p>
      <div class="preview-container">
        <div class="preview-header">Demo: De enlace a botón</div>
        <div class="preview-content btn-demo-container">
          <a href="javascript:void(0)" class="btn-custom">Continuar leyendo ➔</a>
        </div>
      </div>
      <CodeBlock language="css" code=".btn-custom {
  /* Quitar estilos de enlace por defecto */
  text-decoration: none;

  /* Dar forma de botón */
  display: inline-block;
  padding: 10px 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  font-weight: 600;

  /* Transición suave para el hover */
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}" />
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'enlaces', text: 'Etiqueta HTML de Enlaces' },
      { techId: 'css', moduleId: 'pseudo', text: 'Pseudo-clases avanzadas' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.demo-link.default {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s, transform 0.1s;
}

.demo-link.default:visited {
  color: #8b5cf6;
}

.demo-link.default:hover {
  color: #60a5fa;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.demo-link.default:active {
  color: #ef4444;
  transform: scale(0.95);
}

.decoration-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.decoration-item span {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-primary);
}

.decoration-item small {
  color: var(--text-secondary);
  font-style: italic;
}

.dec-none { text-decoration: none; }
.dec-underline { text-decoration: underline; text-underline-offset: 4px;}
.dec-overline { text-decoration: overline; }
.dec-line-through { text-decoration: line-through; }
.dec-wavy { text-decoration: underline wavy #ef4444; text-underline-offset: 6px;}

.cursor-grid {
  display: grid;
  gap: 1rem;
}

.cursor-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: background-color 0.2s;
}

.cursor-box:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
}

.cursor-default { cursor: default; }
.cursor-pointer { cursor: pointer; }
.cursor-text { cursor: text; }
.cursor-move { cursor: move; }
.cursor-not-allowed { cursor: not-allowed; }
.cursor-help { cursor: help; }
.cursor-wait { cursor: wait; }
.cursor-crosshair { cursor: crosshair; }
.cursor-grab { cursor: grab; }
.cursor-grabbing { cursor: grabbing; }

.btn-demo-container {
  display: flex;
  justify-content: center;
}

.btn-custom {
  display: inline-block;
  padding: 12px 28px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(37, 99, 235, 0.3);
  color: #ffffff;
}

.btn-custom:active {
  transform: translateY(1px);
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
}
</style>
