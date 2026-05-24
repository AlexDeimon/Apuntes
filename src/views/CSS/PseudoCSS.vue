<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Pseudo-clases & Pseudo-elementos</h1>
      <p class="subtitle">Estilizando estados interactivos y partes específicas de un elemento sin modificar el HTML.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Diferencia Principal</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Pseudo-clases (<code>:</code>)</h3>
          </div>
          <p>Seleccionan elementos en un <strong>estado específico</strong> (ej. cuando el ratón pasa por encima, si es el primer hijo, si un checkbox está marcado).</p>
          <CodeBlock language="css" code="button:hover {
  background-color: #3498db;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Pseudo-elementos (<code>::</code>)</h3>
          </div>
          <p>Permiten estilizar una <strong>parte específica</strong> de un elemento (ej. la primera letra, o insertar contenido virtual antes/después del elemento).</p>
          <CodeBlock language="css" code="p::first-letter {
  font-size: 2em;
  font-weight: bold;
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Pseudo-clases de Interacción</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>:hover</h3></div>
          <p>Cuando el cursor está sobre el elemento.</p>
          <CodeBlock language="css" code=".btn:hover {
  background-color: var(--color-css);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>:active</h3></div>
          <p>En el momento exacto en que se hace clic (mientras se mantiene pulsado).</p>
          <CodeBlock language="css" code=".btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(52, 152, 219, 0.4);
}" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>:focus</h3></div>
          <p>Cuando el elemento recibe el foco (ej. navegando con Tab o al hacer clic en un input).</p>
          <CodeBlock language="css" code="input:focus {
  outline: 3px solid rgba(52, 152, 219, 0.5);
  outline-offset: 2px;
}" />
        </div>
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Demo Interactivo</div>
        <div class="preview-content">
          <button class="demo-btn">Interactúa conmigo</button>
          <p>Pasa el ratón (hover), haz clic mantenido (active) o navega con Tab (focus).</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Pseudo-clases de Enlaces y formularios</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>:link y :visited</h3>
          </div>
          <p>Distingue el estado de los hipervínculos.</p>
          <CodeBlock language="css" code="a:link { color: #ff00ff; }    /* No visitado */
a:visited { color: #dcdcdc; } /* Visitado */" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>:checked</h3>
          </div>
          <p>Para <code>&lt;input type="checkbox"&gt;</code> o <code>&lt;input type="radio"&gt;</code> cuando están seleccionados.</p>
          <CodeBlock language="css" code="input:checked + label {
  font-weight: bold;
  color: #f8f8ff;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>:enabled y :disabled</h3>
          </div>
          <p>Para controlar estados activos/inactivos de inputs.</p>
          <CodeBlock language="css" code="input:disabled {
  background-color: #daa520;
  cursor: not-allowed;
}

input:enabled {
  background-color: #ffd700;
}
" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>:read-only y :read-write</h3>
          </div>
          <p>Para controlar estados de solo lectura/escritura de inputs.</p>
          <CodeBlock language="css" code="input:read-only {
  background-color: #808080;
  cursor: not-allowed;
}

input:read-write {
  border: 3px solid #008000;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>:required y :optional</h3>
          </div>
          <p>Para controlar estados de inputs requeridos/opcionales.</p>
          <CodeBlock language="css" code="input:required {
  border: 3px solid #adff2f;
}

input:optional {
  border: 3px solid #f0fff0;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>:valid y :invalid</h3>
          </div>
          <p>Para controlar estados de inputs válidos/inválidos.</p>
          <CodeBlock language="css" code="input:invalid {
  border: 3px solid #ff0000;
}

input:valid {
  border: 3px solid #008000;
}

input:valid + label::after {
  content: 'email valido';
  color: #008000;
}

input:invalid + label::after {
  content: 'email invalido';
  color: #ff0000;
}" />
        </div>
        <div class="cards-grid">
          <div class="card info">
            <div class="card-header">
              <h3>:in-range y :out-of-range</h3>
            </div>
            <p>Para controlar estados de inputs dentro/fuera de rango.</p>
            <CodeBlock language="css" code="input:in-range {
  background-color: #008000;
}

input:out-of-range {
  background-color: #ff0000;
}

input:in-range + label::after {
  content: 'en rango';
  color: #008000;
}

input:out-of-range + label::after {
  content: 'fuera de rango';
  color: #ff0000;
}
" />
          </div>
        </div>
      </div><br><br>
      <div class="preview-container">
        <div class="preview-content">
          <div>
            <a href="https://alexdeimon.github.io/Apuntes/index.html" class="demo-link">Enlace no visitado</a><br><br>
            <a href="https://google.com" class="demo-link">Enlace visitado</a>
          </div>
          <div>
            <input type="checkbox" id="checkbox" class="demo-checkbox"> <label for="checkbox">Checkbox</label><br><br>
            <input type="radio" id="radio" class="demo-radio"> <label for="radio">Radio</label><br>
          </div>
          <div>
            <input type="text" class="demo-input-enabled" placeholder="Habilitado"><br>
            <input type="text" class="demo-input-disabled" placeholder="Deshabilitado" disabled>
          </div>
          <div>
            <input type="text" class="demo-input-readonly" placeholder="De solo lectura" readonly><br>
            <input type="text" class="demo-input-editable" placeholder="Editable">
          </div>
          <div>
            <input type="text" class="demo-input-required" placeholder="Requerido" required><br>
            <input type="text" class="demo-input-optional" placeholder="Opcional">
          </div>
          <div>
            <input type="email" class="demo-input-valid" placeholder="Escribe tu email"> <label></label><br>
            <input type="number" class="demo-input-range" min="0" max="10" value="12"> <label></label>
          </div>
        </div>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title css">Pseudo-clases Estructurales</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Estructura de elementos hijos</h3></div>
          <ul class="def-list">
            <li><span class="def-term">:first-child: </span>El primer elemento de su contenedor.</li>
            <li><span class="def-term">:last-child: </span>El último elemento de su contenedor.</li>
            <li><span class="def-term">:only-child: </span>Si es el único hijo.</li>
            <li><span class="def-term">:nth-child(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code>odd</code>, <code>even</code>).</li>
            <li><span class="def-term">:nth-last-child(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code>odd</code>, <code>even</code>) desde el final.</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Estructura para elementos de su mismo tipo</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">:first-of-type: </span>El primer elemento de su mismo tipo dentro de su contenedor.</li>
            <li><span class="def-term">:last-of-type: </span>El último elemento de su mismo tipo dentro de su contenedor.</li>
            <li><span class="def-term">:nth-of-type(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code>odd</code>, <code>even</code>) de su mismo tipo dentro de su contenedor.</li>
            <li><span class="def-term">:nth-last-of-type(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code>odd</code>, <code>even</code>) desde el final de su mismo tipo dentro de su contenedor.</li>
          </ul>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <CodeBlock language="css" code="/* primer hijo */
li:first-child { border-left: 4px solid #ff4747; }

/* ultimo hijo */
li:last-child { border-left: 4px solid #f0db4f; }

/* elementos pares */
li:nth-child(even) { background-color: rgba(255, 255, 255, 0.05); }

/* elementos impares */
li:nth-child(odd) { background-color: rgba(0, 0, 0, 0.2); }
" />
        <div class="preview-container">
          <div class="preview-content">
            <ul class="demo-list">
              <li>Elemento 1 (:first-child)</li>
              <li>Elemento 2 (:nth-child(even))</li>
              <li>Elemento 3 (:nth-child(odd))</li>
              <li>Elemento 4 (:nth-child(even))</li>
              <li>Elemento 5 (:last-child)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Otras pseudo-clases</h2>
      <div class="cards-grid">
        <div class="card warning">
          <ul class="def-list">
            <li><span class="def-term">:not(): </span>Representa elementos que no coinciden con una lista de selectores. Como evita que se seleccionen elementos específicos.</li>
            <li><span class="def-term">:default: </span>Representa cualquier elemento de formulario que sea el predeterminado entre un grupo de elementos relacionados. Este selector se puede usar en los elementos button, checkbox, radio y option.</li>
            <li><span class="def-term">:empty: </span>Representa elementos que no tienen hijos (ni siquiera texto o espacios en blanco) ni contenido CSS generado.</li>
            <li><span class="def-term">:target: </span>Se activa cuando el ID del elemento coincide con el hash de la URL.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Pseudo-elementos Destacados</h2>
      <p class="section-desc">Recuerda usar doble dos puntos (<code>::</code>) aunque los navegadores modernos perdonen usar uno solo por retrocompatibilidad.</p>
      <div class="cards-grid">
        <div class="card info">
          <ul class="def-list">
            <li id="after"><span class="def-term">::after: </span>Inserta contenido virtual después del contenido real. <strong>Obligatorio usar la propiedad <code>content</code>.</strong></li>
            <li id="before"><span class="def-term">::before: </span>Inserta contenido virtual antes del contenido real. <strong>Obligatorio usar la propiedad <code>content</code>.</strong></li>
            <li id="first-letter"><span class="def-term">::first-letter: </span>Aplica estilos a la primera letra de un elemento.</li>
            <li id="first-line"><span class="def-term">::first-line: </span>Aplica estilos a la primera línea de texto de un elemento.</li>
            <li id="marker"><span class="def-term">::marker: </span>Se aplica a los marcadores de los elementos de lista ( bullets o números).</li>
            <li id="selection"><span class="def-term">::selection: </span>Selecciona el texto que ha sido resaltado por el usuario.</li>
          </ul>
        </div>
        <CodeBlock language="css" code="#before::before{
  content: '<--- soy un elemento before ---> ';
  color: #ff69b4;
}

#after::after{
  content: ' <-- soy un elemento after--->';
  color: #cd5c5c;
}

#first-letter::first-letter{
  color: #fffff0;
}

#first-line::first-line{
  color: #f0e68c;
}

#marker::marker{
  color: #e6e6fa;
  content: '➤';
}

#selection::selection{
  background-color: #fff0f5;
  color: #000;
}" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'fundamentos', text: 'Selectores CSS Básicos' },
      { techId: 'html', moduleId: 'formularios', text: 'Formularios (:focus, :invalid)' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.preview-content{
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.preview-content p {
  margin-bottom: 0;
}

.demo-btn {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.demo-btn:hover {
  background-color: var(--color-css);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

.demo-btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(52, 152, 219, 0.4);
}

.demo-btn:focus {
  outline: 3px solid rgba(52, 152, 219, 0.5);
  outline-offset: 2px;
}

.demo-link:link { color: #ff00ff; }
.demo-link:visited { color: #dcdcdc; }

.demo-checkbox:checked + label,
.demo-radio:checked + label {
  font-weight: bold;
  color: #f8f8ff;
}

.demo-input-disabled:disabled {
  background-color: #daa520;
  cursor: not-allowed;
}

.demo-input-enabled:enabled {
  background-color: #ffd700;
}

.demo-input-readonly:read-only {
  border: 3px solid #808080;
  cursor: not-allowed;
}

.demo-input-editable:read-write {
  border: 3px solid #008000;
}

.demo-input-required:required {
  border: 3px solid #adff2f;
}

.demo-input-optional:optional {
  border: 3px solid #f0fff0;
}

.demo-input-valid:valid {
  border: 3px solid #008000;
}

.demo-input-valid:invalid {
  border: 3px solid #ff0000;
}

.demo-input-valid:valid + label::after {
  content: 'email valido';
  color: #008000;
}

.demo-input-valid:invalid + label::after {
  content: 'email invalido';
  color: #ff0000;
}

.demo-input-range:in-range {
  background-color: #008000;
}

.demo-input-range:out-of-range {
  background-color: #ff0000;
}

.demo-input-range:in-range + label::after {
  content: 'en rango';
  color: #008000;
}

.demo-input-range:out-of-range + label::after {
  content: 'fuera de rango';
  color: #ff0000;
}

.demo-list {
  width: 100%;
  list-style: none;
  padding: 0;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.demo-list li {
  padding: 10px 15px;
  color: var(--text-primary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.demo-list li:last-child {
  border-bottom: none;
}

.demo-list li:first-child {
  border-left: 4px solid var(--color-html);
}

.demo-list li:last-child {
  border-left: 4px solid var(--color-js);
}

.demo-list li:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

.demo-list li:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.2);
}

#before::before{
  content: '<--- soy un elemento before ---> ';
  color: #ff69b4;
}

#after::after{
  content: ' <-- soy un elemento after--->';
  color: #cd5c5c;
}

#first-letter::first-letter{
  color: #fffff0;
}

#first-line::first-line{
  color: #f0e68c;
}

#marker::marker{
  color: #e6e6fa;
  content: '➤';
}

#selection::selection{
  background-color: #fff0f5;
  color: #000;
}
</style>
