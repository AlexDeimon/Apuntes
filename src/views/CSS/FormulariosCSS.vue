<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Formularios en CSS</h1>
      <p class="subtitle">Tecnicas modernas para estilizar inputs, selects, textareas y controles de formulario.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Reset y Estilos Base</h2>
      <p class="section-desc">Los navegadores aplican estilos propios (<em>user-agent styles</em>) a los campos de formulario que difieren entre browsers. El primer paso es normalizar estos estilos antes de aplicar los propios.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header"><h3>Reset de Inputs</h3></div>
          <ul class="def-list">
            <li><span class="def-term">appearance: none:</span> Elimina el estilo nativo del navegador.</li>
            <li><span class="def-term">box-sizing: border-box:</span> Hace que el padding no desborde el ancho definido.</li>
            <li><span class="def-term">outline: none:</span> Elimina el outline de foco por defecto, siempre reemplazandolo con un estilo accesible propio.</li>
          </ul>
          <CodeBlock language="css" code="input,
textarea,
select,
button {
  /* Elimina apariencia nativa del browser */
  -webkit-appearance: none;
  appearance: none;

  /* El padding no desborda el ancho */
  box-sizing: border-box;

  /* Hereda la fuente del documento (por defecto no lo hace) */
  font-family: inherit;
  font-size: inherit;

  /* Sin margen extra del navegador */
  margin: 0;
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Impacto del Reset</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: resetDemo === 'native' }]" @click="resetDemo = 'native'">Sin reset</button>
              <button :class="['demo-btn', { active: resetDemo === 'reset' }]" @click="resetDemo = 'reset'">Con reset</button>
            </div>
            <div :class="['form-demo-box', { 'form-reset-applied': resetDemo === 'reset' }]">
              <div class="fdb-row">
                <label class="fdb-label">Nombre</label>
                <input type="text" class="fdb-input" placeholder="Tu nombre" />
              </div>
              <div class="fdb-row">
                <label class="fdb-label">Pais</label>
                <select class="fdb-input">
                  <option>Mexico</option>
                  <option>Colombia</option>
                  <option>Argentina</option>
                </select>
              </div>
              <div class="fdb-row">
                <button class="fdb-btn">Enviar</button>
              </div>
            </div>
            <p class="demo-note">{{ resetDemo === 'native' ? 'Estilos del navegador (varian por OS/browser)' : 'Con reset aplicado: fuente heredada, box-sizing normalizado' }}</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Estilizar Inputs y Textareas</h2>
      <p class="section-desc">Los campos de texto son los elementos mas estilizados de un formulario. Las propiedades de borde, fondo, padding y estados de foco son las mas importantes.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Propiedades Principales</h3></div>
          <CodeBlock language="css" code="input[type='text'],
input[type='email'],
input[type='password'],
textarea {
  width: 100%;
  padding: 0.6rem 0.9rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: #111;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  /* Foco: siempre definir un estilo visible */
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  }

  /* Placeholder */
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }

  /* Textarea: controlar redimensionado */
  resize: vertical; /* solo vertical | none | both */
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Estilos de Input</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: inputStyle === 'outline' }]" @click="inputStyle = 'outline'">Outline</button>
              <button :class="['demo-btn', { active: inputStyle === 'filled' }]" @click="inputStyle = 'filled'">Filled</button>
              <button :class="['demo-btn', { active: inputStyle === 'underline' }]" @click="inputStyle = 'underline'">Underline</button>
              <button :class="['demo-btn', { active: inputStyle === 'floating' }]" @click="inputStyle = 'floating'">Floating Label</button>
            </div>
            <div class="input-demo-area">
              <div v-if="inputStyle === 'outline'" class="input-demo-group">
                <label class="inp-label">Email</label>
                <input type="email" class="inp inp-outline" placeholder="usuario@email.com" />
                <label class="inp-label mt">Mensaje</label>
                <textarea class="inp inp-outline" rows="3" placeholder="Escribe tu mensaje..."></textarea>
              </div>
              <div v-if="inputStyle === 'filled'" class="input-demo-group">
                <label class="inp-label">Email</label>
                <input type="email" class="inp inp-filled" placeholder="usuario@email.com" />
                <label class="inp-label mt">Mensaje</label>
                <textarea class="inp inp-filled" rows="3" placeholder="Escribe tu mensaje..."></textarea>
              </div>
              <div v-if="inputStyle === 'underline'" class="input-demo-group">
                <label class="inp-label">Email</label>
                <input type="email" class="inp inp-underline" placeholder="usuario@email.com" />
                <label class="inp-label mt">Mensaje</label>
                <textarea class="inp inp-underline" rows="3" placeholder="Escribe tu mensaje..."></textarea>
              </div>
              <div v-if="inputStyle === 'floating'" class="input-demo-group">
                <div class="float-group">
                  <input type="email" class="inp inp-outline float-input" placeholder=" " id="float-email" />
                  <label class="float-label" for="float-email">Email</label>
                </div>
                <div class="float-group mt">
                  <input type="text" class="inp inp-outline float-input" placeholder=" " id="float-name" />
                  <label class="float-label" for="float-name">Nombre completo</label>
                </div>
              </div>
            </div>
            <CodeBlock language="css" :code="inputStyleCode" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Estados y Pseudoclases de Formulario</h2>
      <p class="section-desc">CSS proporciona pseudoclases especificas para formularios que permiten estilizar campos segun su estado de validacion, interaccion y valor, sin necesidad de JavaScript.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Pseudoclases para Formularios</h3></div>
          <ul class="def-list">
            <li><span class="def-term">:focus:</span> El campo tiene el foco. Usar para resaltar el campo activo.</li>
            <li><span class="def-term">:focus-visible:</span> Como <code>:focus</code> pero solo cuando el foco es visible al teclado (no al click). Mejor para accesibilidad.</li>
            <li><span class="def-term">:valid / :invalid:</span> El campo supera o falla la validacion HTML5 (required, pattern, type, etc).</li>
            <li><span class="def-term">:required / :optional:</span> El campo tiene o no el atributo <code>required</code>.</li>
            <li><span class="def-term">:disabled / :enabled:</span> El campo esta deshabilitado o habilitado.</li>
            <li><span class="def-term">:read-only / :read-write:</span> El campo tiene <code>readonly</code> o es editable.</li>
            <li><span class="def-term">:checked:</span> Checkbox o radio seleccionado.</li>
            <li><span class="def-term">:placeholder-shown:</span> El placeholder es visible (el campo esta vacio). Clave para floating labels.</li>
            <li><span class="def-term">:user-valid / :user-invalid:</span> Como <code>:valid/:invalid</code> pero solo despues de que el usuario interactuo. Evita mostrar errores en campos intactos.</li>
          </ul>
          <CodeBlock language="css" code="/* Solo cuando el focus es por teclado */
input:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}

/* Validacion CSS pura — solo tras interaccion del usuario */
input:user-valid {
  border-color: #22c55e;
}

input:user-invalid {
  border-color: #ef4444;
}

/* Estilos segun estado del campo */
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f3f4f6;
}

input:read-only {
  background: #f9fafb;
  border-style: dashed;
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Estados de Validacion</div>
          <div class="preview-content">
            <p class="demo-note">Interactua con los campos para ver los estados CSS en accion.</p>
            <div class="validation-demo">
              <div class="vd-row">
                <label class="inp-label">Email <span class="req-mark">*</span></label>
                <input type="email" class="inp inp-outline inp-validate" placeholder="usuario@email.com" required />
                <span class="vd-hint">Debe ser un email valido</span>
              </div>
              <div class="vd-row">
                <label class="inp-label">URL del sitio</label>
                <input type="url" class="inp inp-outline inp-validate" placeholder="https://ejemplo.com" />
                <span class="vd-hint">Debe comenzar con https://</span>
              </div>
              <div class="vd-row">
                <label class="inp-label">Campo deshabilitado</label>
                <input type="text" class="inp inp-outline" value="No editable" disabled />
              </div>
              <div class="vd-row">
                <label class="inp-label">Solo lectura</label>
                <input type="text" class="inp inp-outline" value="Solo lectura" readonly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Estilizar Select</h2>
      <p class="section-desc">El elemento <code>&lt;select&gt;</code> es uno de los mas dificiles de estilizar porque la lista desplegable (<em>dropdown</em>) la controla el sistema operativo. Con <code>appearance: none</code> se puede tomar control total del elemento trigger.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Select Personalizado</h3></div>
          <CodeBlock language="css" code="select {
  /* Elimina la flecha nativa del browser */
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  padding: 0.6rem 2.5rem 0.6rem 0.9rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background-color: #fff;
  color: #111;
  font-size: 1rem;
  cursor: pointer;

  /* Flecha personalizada via background-image (SVG inline) */
  background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns%3D'http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E&quot;);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Select Nativo vs Personalizado</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: selectDemo === 'native' }]" @click="selectDemo = 'native'">Nativo</button>
              <button :class="['demo-btn', { active: selectDemo === 'custom' }]" @click="selectDemo = 'custom'">Personalizado</button>
            </div>
            <div class="select-demo-wrap">
              <select v-if="selectDemo === 'native'" class="select-native">
                <option value="">-- Selecciona una opcion --</option>
                <option>Diseño Web</option>
                <option>Desarrollo Frontend</option>
                <option>Desarrollo Backend</option>
                <option>DevOps</option>
              </select>
              <div v-if="selectDemo === 'custom'" class="select-custom-wrap">
                <select class="select-custom">
                  <option value="">-- Selecciona una opcion --</option>
                  <option>Diseño Web</option>
                  <option>Desarrollo Frontend</option>
                  <option>Desarrollo Backend</option>
                  <option>DevOps</option>
                </select>
              </div>
            </div>
            <CodeBlock language="css" :code="selectDemo === 'custom' ? selectCustomCode : '/* Sin estilos — apariencia del sistema operativo */'" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Checkbox y Radio Personalizados</h2>
      <p class="section-desc">Los checkboxes y radios son los controles mas complejos de estilizar. La tecnica moderna usa <code>appearance: none</code> y <code>::before</code>/<code>::after</code> para construir el control completamente en CSS.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Tecnica con appearance: none</h3></div>
          <CodeBlock language="css" code="/* Checkbox personalizado */
input[type='checkbox'] {
  -webkit-appearance: none;
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.15s;
  position: relative;

  /* El checkmark via clip-path o background-image */
  &:checked {
    background: #4f46e5;
    border-color: #4f46e5;
  }

  &:checked::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 0px;
    width: 5px;
    height: 9px;
    border: 2px solid white;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
}

/* Radio personalizado */
input[type='radio'] {
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  background: white;

  &:checked {
    border-color: #4f46e5;
    background: radial-gradient(circle, #4f46e5 45%, white 50%);
  }
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Controles Personalizados</div>
          <div class="preview-content">
            <div class="controls-demo">
              <p class="demo-section-label">Checkboxes</p>
              <label class="custom-control-label">
                <input type="checkbox" class="custom-checkbox" checked />
                <span>Opcion seleccionada</span>
              </label>
              <label class="custom-control-label">
                <input type="checkbox" class="custom-checkbox" />
                <span>Opcion sin seleccionar</span>
              </label>
              <label class="custom-control-label">
                <input type="checkbox" class="custom-checkbox" disabled />
                <span class="ctrl-disabled">Deshabilitado</span>
              </label>
              <p class="demo-section-label mt">Radio Buttons</p>
              <label class="custom-control-label">
                <input type="radio" class="custom-radio" name="demoRadio" checked />
                <span>Opcion A</span>
              </label>
              <label class="custom-control-label">
                <input type="radio" class="custom-radio" name="demoRadio" />
                <span>Opcion B</span>
              </label>
              <label class="custom-control-label">
                <input type="radio" class="custom-radio" name="demoRadio" />
                <span>Opcion C</span>
              </label>
              <p class="demo-section-label mt">Toggle Switch</p>
              <label class="toggle-label">
                <input type="checkbox" class="toggle-input" checked />
                <span class="toggle-track">
                  <span class="toggle-thumb"></span>
                </span>
                <span>Notificaciones activas</span>
              </label>
              <label class="toggle-label">
                <input type="checkbox" class="toggle-input" />
                <span class="toggle-track">
                  <span class="toggle-thumb"></span>
                </span>
                <span>Modo oscuro</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Formulario Completo Estilizado</h2>
      <p class="section-desc">Un ejemplo real combinando todas las tecnicas: layout con <code>grid</code>, inputs con estados de foco y validacion, select personalizado, checkbox y boton de submit.</p>
      <div class="card info">
        <div class="card-header"><h3>Layout del Formulario</h3></div>
        <ul class="def-list">
          <li><span class="def-term">fieldset / legend:</span> Agrupa campos relacionados semanticamente. El <code>legend</code> sirve como titulo del grupo.</li>
          <li><span class="def-term">label + input:</span> Siempre asociar cada label con su input via <code>for</code>/<code>id</code> o envolviendolo.</li>
          <li><span class="def-term">gap en grid/flex:</span> Usar <code>gap</code> para el espaciado entre campos en lugar de margins.</li>
        </ul>
        <CodeBlock language="css" code="form {
  display: grid;
  gap: 1.5rem;
}

/* Layout de dos columnas */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Grupo label + input */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

/* Fieldset moderno */
fieldset {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.2rem;
}

legend {
  padding: 0 0.5rem;
  font-weight: 600;
  color: #4f46e5;
}" />
      </div><br><br>
      <div class="preview-container preview-wide">
        <div class="preview-header">Demo: Formulario de Registro</div>
        <div class="preview-content">
          <form class="demo-form" @submit.prevent>
            <div class="demo-form-row">
              <div class="demo-form-group">
                <label class="df-label" for="df-nombre">Nombre</label>
                <input type="text" id="df-nombre" class="df-input" placeholder="Alex" required />
              </div>
              <div class="demo-form-group">
                <label class="df-label" for="df-apellido">Apellido</label>
                <input type="text" id="df-apellido" class="df-input" placeholder="Deimon" required />
              </div>
            </div>
            <div class="demo-form-group">
              <label class="df-label" for="df-email">Email <span class="req-mark">*</span></label>
              <input type="email" id="df-email" class="df-input" placeholder="alex@email.com" required />
            </div>
            <div class="demo-form-group">
              <label class="df-label" for="df-rol">Rol</label>
              <div class="df-select-wrap">
                <select id="df-rol" class="df-select">
                  <option value="">-- Selecciona tu rol --</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>UX Designer</option>
                </select>
              </div>
            </div>
            <div class="demo-form-group">
              <label class="df-label" for="df-bio">Biografia</label>
              <textarea id="df-bio" class="df-input df-textarea" rows="3" placeholder="Cuéntanos sobre ti..."></textarea>
            </div>
            <label class="df-check-label">
              <input type="checkbox" class="df-checkbox" />
              <span>Acepto los terminos y condiciones</span>
            </label>
            <button type="submit" class="df-submit">Crear Cuenta</button>
          </form>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Botones de Formulario</h2>
      <p class="section-desc">Los botones <code>&lt;button&gt;</code> y <code>input[type=submit]</code> heredan muy pocos estilos. Es importante resetearlos y construir el estilo desde cero para consistencia entre navegadores.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Reset y Estilos de Boton</h3></div>
          <CodeBlock language="css" code="button,
input[type='submit'],
input[type='reset'] {
  /* Reset */
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;

  /* Estilos */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

/* Variantes */
.btn-primary {
  background: #4f46e5;
  color: white;
  &:hover  { background: #4338ca; }
  &:active { transform: scale(0.98); }
}

.btn-outline {
  background: transparent;
  border: 2px solid #4f46e5;
  color: #4f46e5;
  &:hover { background: #4f46e5; color: white; }
}

/* Estado de carga */
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}" />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Variantes de Boton</div>
          <div class="preview-content">
            <div class="btn-showcase">
              <button class="showcase-btn btn-primary-demo">Primary</button>
              <button class="showcase-btn btn-outline-demo">Outline</button>
              <button class="showcase-btn btn-ghost-demo">Ghost</button>
              <button class="showcase-btn btn-danger-demo">Danger</button>
              <button class="showcase-btn btn-success-demo">Success</button>
            </div>
            <div class="btn-showcase mt">
              <button class="showcase-btn btn-primary-demo btn-sm-demo">Small</button>
              <button class="showcase-btn btn-primary-demo">Medium</button>
              <button class="showcase-btn btn-primary-demo btn-lg-demo">Large</button>
            </div>
            <div class="btn-showcase mt">
              <button class="showcase-btn btn-primary-demo" disabled>Disabled</button>
              <button class="showcase-btn btn-loading-demo"><span class="btn-spinner"></span>Cargando...</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'pseudo', text: 'Pseudo Clases y Elementos' },
      { techId: 'css', moduleId: 'visual', text: 'Efectos Visuales' },
      { techId: 'html', moduleId: 'formularios', text: 'Formularios HTML' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const resetDemo = ref<'native' | 'reset'>('native')
const inputStyle = ref<'outline' | 'filled' | 'underline' | 'floating'>('outline')
const selectDemo = ref<'native' | 'custom'>('native')

const inputStyleCode = computed(() => {
  const codes: Record<string, string> = {
    outline: `input {
  padding: 0.6rem 0.9rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background: transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
}`,
    filled: `input {
  padding: 0.6rem 0.9rem;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 8px 8px 0 0;
  background: rgba(79, 70, 229, 0.08);
}

input:focus {
  border-bottom-color: #4f46e5;
  background: rgba(79, 70, 229, 0.12);
}`,
    underline: `input {
  padding: 0.6rem 0;
  border: none;
  border-bottom: 2px solid #e5e7eb;
  border-radius: 0;
  background: transparent;
}

input:focus {
  border-bottom-color: #4f46e5;
  outline: none;
}`,
    floating: `/* Floating label requiere :placeholder-shown */
.float-group {
  position: relative;
}

.float-input {
  padding: 1.2rem 0.9rem 0.4rem;
}

.float-label {
  position: absolute;
  top: 0.8rem;
  left: 0.9rem;
  transition: all 0.15s;
  pointer-events: none;
  color: #6b7280;
  font-size: 1rem;
}

/* Cuando tiene contenido o foco: sube el label */
.float-input:not(:placeholder-shown) ~ .float-label,
.float-input:focus ~ .float-label {
  top: 0.3rem;
  font-size: 0.72rem;
  color: #4f46e5;
}`,
  }
  return codes[inputStyle.value] ?? ''
})

const selectCustomCode = `select {
  -webkit-appearance: none;
  appearance: none;
  padding: 0.6rem 2.5rem 0.6rem 0.9rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;

  /* Flecha SVG personalizada */
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

select:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
}`
</script>
<style scoped>
.form-demo-box {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255,255,255,0.04);
  border-radius: 8px;
  margin-bottom: 0.8rem;
}

.fdb-row { display: flex; flex-direction: column; gap: 0.3rem; }
.fdb-label { font-size: 0.82rem; color: var(--text-secondary); }

.fdb-input {
  padding: 0.45rem 0.7rem;
  border-radius: 5px;
  font-size: 0.88rem;
}

.fdb-input {
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.05);
  color: var(--text-primary);
  font-family: inherit;
}

.form-reset-applied .fdb-input {
  box-sizing: border-box;
  font-family: inherit;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.08);
  color: var(--text-primary);
  outline: none;
}

.fdb-btn {
  padding: 0.45rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 0.88rem;
  background: rgba(79,70,229,0.3);
  color: #a5b4fc;
  font-family: inherit;
  width: fit-content;
}

.form-reset-applied .fdb-btn {
  font-family: inherit;
  font-size: inherit;
}

.input-demo-area {
  margin-bottom: 1rem;
}

.input-demo-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}

.inp-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.inp-label.mt { margin-top: 0.75rem; }

.inp {
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 0.88rem;
  color: var(--text-primary);
  background: transparent;
  padding: 0.55rem 0.8rem;
  transition: all 0.2s;
}

.inp::placeholder { color: rgba(255,255,255,0.3); font-style: italic; }

.inp-outline {
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
}

.inp-outline:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
}

.inp-filled {
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 8px 8px 0 0;
  background: rgba(99,102,241,0.1);
}

.inp-filled:focus {
  outline: none;
  border-bottom-color: #6366f1;
  background: rgba(99,102,241,0.15);
}

.inp-underline {
  border: none;
  border-bottom: 2px solid rgba(255,255,255,0.2);
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
}

.inp-underline:focus {
  outline: none;
  border-bottom-color: #6366f1;
}

.float-group {
  position: relative;
}

.float-input {
  padding-top: 1.3rem;
  padding-bottom: 0.35rem;
}

.float-label {
  position: absolute;
  top: 0.9rem;
  left: 0.85rem;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.4);
  transition: all 0.15s ease;
  pointer-events: none;
}

.float-input:not(:placeholder-shown) ~ .float-label,
.float-input:focus ~ .float-label {
  top: 0.28rem;
  font-size: 0.68rem;
  color: #818cf8;
}

.validation-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.vd-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.vd-hint {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.35);
  margin-top: 0.1rem;
}

.req-mark { color: #f87171; }

.inp-validate:user-valid {
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34,197,94,0.15);
}

.inp-validate:user-invalid {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239,68,68,0.15);
}

.inp:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  background: rgba(255,255,255,0.02);
}

.inp:read-only {
  border-style: dashed;
  opacity: 0.65;
}

.select-demo-wrap {
  margin-bottom: 1rem;
}

.select-native,
.select-custom {
  width: 100%;
  padding: 0.6rem 0.9rem;
  font-family: inherit;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
}

.select-native {
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.06);
  color: var(--text-primary);
}

.select-custom-wrap {
  position: relative;
}

.select-custom-wrap::after {
  content: '';
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #818cf8;
  pointer-events: none;
}

.select-custom {
  -webkit-appearance: none;
  appearance: none;
  background: rgba(99,102,241,0.08);
  border: 2px solid rgba(99,102,241,0.3);
  color: var(--text-primary);
  padding-right: 2.5rem;
}

.select-custom:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
}

.controls-demo {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.demo-section-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  margin-bottom: 0.2rem;
}

.demo-section-label.mt { margin-top: 0.6rem; }

.custom-control-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.88rem;
  color: var(--text-primary);
  user-select: none;
}

.ctrl-disabled { opacity: 0.45; }

.custom-checkbox {
  -webkit-appearance: none;
  appearance: none;
  width: 1.15rem;
  height: 1.15rem;
  border: 2px solid rgba(255,255,255,0.25);
  border-radius: 4px;
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: all 0.15s;
}

.custom-checkbox:checked {
  background: #6366f1;
  border-color: #6366f1;
}

.custom-checkbox:checked::after {
  content: '';
  position: absolute;
  left: 3px;
  top: 0px;
  width: 5px;
  height: 9px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

.custom-checkbox:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.custom-radio {
  -webkit-appearance: none;
  appearance: none;
  width: 1.15rem;
  height: 1.15rem;
  border: 2px solid rgba(255,255,255,0.25);
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s;
}

.custom-radio:checked {
  border-color: #6366f1;
  background: radial-gradient(circle, #6366f1 40%, rgba(99,102,241,0.1) 45%);
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  user-select: none;
  font-size: 0.88rem;
  color: var(--text-primary);
}

.toggle-input { display: none; }

.toggle-track {
  width: 2.6rem;
  height: 1.35rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.15);
  position: relative;
  transition: background-color 0.2s;
  flex-shrink: 0;
}

.toggle-thumb {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: left 0.2s, background-color 0.2s;
}

.toggle-input:checked + .toggle-track {
  background: rgba(99,102,241,0.5);
  border-color: rgba(99,102,241,0.6);
}

.toggle-input:checked + .toggle-track .toggle-thumb {
  left: calc(100% - 1.05rem);
  background: #6366f1;
  box-shadow: 0 0 6px rgba(99,102,241,0.5);
}

.preview-wide { grid-column: 1 / -1; }

.demo-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

@media (max-width: 500px) { .demo-form-row { grid-template-columns: 1fr; } }

.demo-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.df-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.df-input {
  padding: 0.55rem 0.8rem;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.88rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  width: 100%;
}

.df-input::placeholder { color: rgba(255,255,255,0.25); }

.df-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
}

.df-textarea { resize: vertical; }

.df-select-wrap { position: relative; }

.df-select-wrap::after {
  content: '';
  position: absolute;
  right: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #818cf8;
  pointer-events: none;
}

.df-select {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.55rem 2.5rem 0.55rem 0.8rem;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.88rem;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.df-select:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
}

.df-check-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  cursor: pointer;
  user-select: none;
}

.df-checkbox {
  -webkit-appearance: none;
  appearance: none;
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 4px;
  background: rgba(255,255,255,0.04);
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: all 0.15s;
}

.df-checkbox:checked {
  background: #6366f1;
  border-color: #6366f1;
}

.df-checkbox:checked::after {
  content: '';
  position: absolute;
  left: 2px;
  top: 0px;
  width: 5px;
  height: 8px;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

.df-submit {
  align-self: flex-end;
  padding: 0.65rem 1.8rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 12px rgba(99,102,241,0.35);
}

.df-submit:hover {
  box-shadow: 0 4px 20px rgba(99,102,241,0.5);
  transform: translateY(-1px);
}

.df-submit:active { transform: scale(0.98); }

.btn-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.btn-showcase.mt { margin-top: 0.5rem; }

.showcase-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: none;
  border-radius: 7px;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary-demo { background: #6366f1; color: #fff; }
.btn-primary-demo:hover { background: #4f46e5; }

.btn-outline-demo { background: transparent; border: 2px solid #6366f1; color: #818cf8; }
.btn-outline-demo:hover { background: rgba(99,102,241,0.15); }

.btn-ghost-demo { background: rgba(255,255,255,0.06); color: var(--text-primary); }
.btn-ghost-demo:hover { background: rgba(255,255,255,0.12); }

.btn-danger-demo { background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); }
.btn-danger-demo:hover { background: rgba(239,68,68,0.25); }

.btn-success-demo { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
.btn-success-demo:hover { background: rgba(34,197,94,0.25); }

.btn-sm-demo { font-size: 0.78rem; padding: 0.35rem 0.8rem; }
.btn-lg-demo { font-size: 1rem; padding: 0.7rem 1.5rem; }

.showcase-btn:disabled { opacity: 0.45; cursor: not-allowed; }

.btn-loading-demo {
  background: rgba(99,102,241,0.2);
  color: #818cf8;
  border: 1px solid rgba(99,102,241,0.3);
  cursor: wait;
}

.btn-spinner {
  display: inline-block;
  width: 0.85rem;
  height: 0.85rem;
  border: 2px solid rgba(129,140,248,0.3);
  border-top-color: #818cf8;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.demo-note {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
  font-style: italic;
}
</style>
