<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Formularios Bootstrap</h1>
      <p class="subtitle">Controles de formulario consistentes y adaptables con estilos, tamaños y layouts integrados.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Controles de Formulario (.form-control)</h2>
      <p class="section-desc">La clase fundamental para los campos de texto es <code>.form-control</code>. Bootstrap la aplica a elementos como <code>&lt;input&gt;</code> y <code>&lt;textarea&gt;</code> para darles un ancho del 100%, bordes consistentes, efectos de foco y transiciones.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Campos de Entrada Básicos</h3>
          </div>
          <p>Para estructurarlos adecuadamente, se suele colocar la etiqueta <code>&lt;label&gt;</code> con la clase <code>.form-label</code> y el control de formulario debajo.</p>
          <CodeBlock language="html" code='<div class="mb-3">
  <label for="exampleInput" class="form-label">Correo electrónico</label>
  <input type="email" class="form-control" id="exampleInput" placeholder="nombre@correo.com">
  <div class="form-text">Nunca compartiremos tu información con nadie.</div>
</div>

<div class="mb-3">
  <label for="exampleTextarea" class="form-label">Comentarios</label>
  <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
</div>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Form Controls y Tamaños</div>
          <div class="preview-content">
            <div class="mb-3">
              <label class="form-label">Campo Grande (<code>.form-control-lg</code>)</label>
              <input type="text" class="form-control form-control-lg" placeholder="Ej: .form-control-lg" />
            </div>
            <div class="mb-3">
              <label class="form-label">Campo Normal</label>
              <input type="text" class="form-control" placeholder="Campo estándar" />
            </div>
            <div class="mb-3">
              <label class="form-label">Campo Pequeño (<code>.form-control-sm</code>)</label>
              <input type="text" class="form-control form-control-sm" placeholder="Ej: .form-control-sm" />
            </div>
            <div class="mb-3">
              <label class="form-label">Estado Deshabilitado (<code>disabled</code>)</label>
              <input type="text" class="form-control" placeholder="No puedes escribir aquí" disabled />
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Selectores, Checks y Switches</h2>
      <p class="section-desc">Bootstrap proporciona estilos personalizados para los menús desplegables de opción única o múltiple (<code>.form-select</code>), casillas de verificación (<code>.form-check</code>), botones de radio y switches deslizantes.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Estructura HTML</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">.form-select:</span> Aplica a etiquetas &lt;select&gt; para estilizar la flecha y el borde.</li>
            <li><span class="def-term">.form-check:</span> Contenedor para casillas o radios. Los inputs llevan .form-check-input y los labels .form-check-label.</li>
            <li><span class="def-term">.form-switch:</span> Añadido a un .form-check para transformar el checkbox en un interruptor deslizable moderno.</li>
          </ul>
          <CodeBlock language="html" code='<!-- Select -->
<select class="form-select">
  <option selected>Elige un país...</option>
  <option value="1">España</option>
  <option value="2">México</option>
</select>

<!-- Checkbox -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1">
  <label class="form-check-label" for="check1">Recordarme</label>
</div>

<!-- Switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1">
  <label class="form-check-label" for="switch1">Activar Modo Oscuro</label>
</div>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo Interactiva: Selección y Estados</div>
          <div class="preview-content">
            <div class="mb-3">
              <label class="form-label">Selector de País (<code>.form-select</code>)</label>
              <select class="form-select" v-model="selectedCountry">
                <option value="">Selecciona una opción...</option>
                <option value="México">México</option>
                <option value="España">España</option>
                <option value="Colombia">Colombia</option>
                <option value="Argentina">Argentina</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Preferencias (<code>.form-check</code>)</label>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="demoCheck" v-model="acceptTerms" />
                <label class="form-check-label" for="demoCheck">Acepto los términos y condiciones</label>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Tipo de Cuenta (Radios)</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="accountType" id="radio1" value="Personal" v-model="accountType" />
                <label class="form-check-label" for="radio1">Personal</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="accountType" id="radio2" value="Negocios" v-model="accountType" />
                <label class="form-check-label" for="radio2">Negocios</label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="demoSwitch" v-model="notificationsEnabled" />
                <label class="form-check-label" for="demoSwitch">Recibir notificaciones por correo</label>
              </div>
            </div>
            <div class="summary-box" v-if="selectedCountry || acceptTerms || accountType || notificationsEnabled">
              <h5>Resumen:</h5>
              <p v-if="selectedCountry">📍 País: <strong>{{ selectedCountry }}</strong></p>
              <p>📄 Términos: <strong>{{ acceptTerms ? 'Aceptados' : 'No aceptados' }}</strong></p>
              <p v-if="accountType">👤 Cuenta: <strong>{{ accountType }}</strong></p>
              <p>🔔 Notificaciones: <strong>{{ notificationsEnabled ? 'Sí' : 'No' }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Etiquetas Flotantes (Floating Labels)</h2>
      <p class="section-desc">Crea campos donde las etiquetas flotan elegantemente hacia la parte superior cuando se hace clic o se introduce contenido en el campo. Se definen envolviendo el input en un contenedor con la clase .form-floating.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Reglas de Uso</h3>
          </div>
          <p>Para que funcione correctamente, el elemento <code>&lt;input&gt;</code> debe colocarse <strong>antes</strong> de la etiqueta <code>&lt;label&gt;</code> y debe tener un atributo <code>placeholder</code> (aunque este último no sea visible).</p>
          <CodeBlock language="html" code='<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="nombre@correo.com">
  <label for="floatingInput">Correo electrónico</label>
</div>

<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
  <label for="floatingPassword">Contraseña</label>
</div>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Floating Labels</div>
          <div class="preview-content">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com" v-model="floatEmailVal" />
              <label for="floatEmail">Correo electrónico</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatPassword" placeholder="Password" v-model="floatPasswordVal" />
              <label for="floatPassword">Contraseña</label>
            </div>
            <div class="form-floating">
              <select class="form-select" id="floatSelect" v-model="floatSelectVal">
                <option value="1">Soporte Técnico</option>
                <option value="2">Ventas</option>
                <option value="3">Otro</option>
              </select>
              <label for="floatSelect">Departamento de Contacto</label>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Validación del Lado del Cliente</h2>
      <p class="section-desc">Bootstrap aplica estilos para estados válidos (<code>.is-valid</code>) e inválidos (<code>.is-invalid</code>), mostrando u ocultando mensajes dinámicos con <code>.invalid-feedback</code> y <code>.valid-feedback</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis y Clases</h3>
          </div>
          <p>Al enviar un formulario, puedes añadir la clase <code>.was-validated</code> al elemento <code>&lt;form&gt;</code>. Esto activará de forma automática los estilos de validación del navegador (como campos requeridos vacíos).</p>
          <CodeBlock language="html" code='<form class="needs-validation was-validated" novalidate>
  <div class="mb-3">
    <label for="valName" class="form-label">Nombre</label>
    <input type="text" class="form-control is-invalid" id="valName" required>
    <div class="invalid-feedback">
      Por favor introduce tu nombre.
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Enviar</button>
</form>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Simulador: Validación de Formulario</div>
          <div class="preview-content">
            <form @submit.prevent="handleSubmit" :class="['validation-form-demo', { 'was-validated': wasSubmitted }]" novalidate>
              <div class="mb-3">
                <label for="valUser" class="form-label">Nombre de Usuario</label>
                <input type="text" :class="['form-control', { 'is-invalid': wasSubmitted && !validateUser(userVal) }]" id="valUser" placeholder="Ej: alexdeimon" v-model="userVal" required />
                <div class="invalid-feedback">El usuario debe tener al menos 4 caracteres.</div>
                <div class="valid-feedback" v-if="wasSubmitted && validateUser(userVal)">¡Usuario válido!</div>
              </div>
              <div class="mb-3">
                <label for="valEmail" class="form-label">Correo Electrónico</label>
                <input type="email" :class="['form-control', { 'is-invalid': wasSubmitted && !validateEmail(emailVal) }]" id="valEmail" placeholder="correo@ejemplo.com" v-model="emailVal" required />
                <div class="invalid-feedback">Introduce una dirección de correo válida.</div>
                <div class="valid-feedback" v-if="wasSubmitted && validateEmail(emailVal)">¡Correo correcto!</div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input :class="['form-check-input', { 'is-invalid': wasSubmitted && !acceptTermsVal }]" type="checkbox" id="valCheck" v-model="acceptTermsVal" required />
                  <label class="form-check-label" for="valCheck">Acepto los términos de servicio</label>
                  <div class="invalid-feedback">Debes aceptar para continuar.</div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Enviar Formulario</button>
            </form>
            <div v-if="formSuccessMessage" class="success-alert">{{ formSuccessMessage }}</div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'botones', text: 'Botones en Bootstrap' },
      { techId: 'bootstrap', moduleId: 'dropdown', text: 'Dropdowns en Bootstrap' },
      { techId: 'html', moduleId: 'formularios', text: 'Formularios en HTML5' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const selectedCountry = ref('')
const acceptTerms = ref(false)
const accountType = ref('')
const notificationsEnabled = ref(false)
const floatEmailVal = ref('')
const floatPasswordVal = ref('')
const floatSelectVal = ref('1')
const userVal = ref('')
const emailVal = ref('')
const acceptTermsVal = ref(false)
const wasSubmitted = ref(false)
const formSuccessMessage = ref('')

const validateUser = (user: string) => {
  return user.trim().length >= 4
}

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = () => {
  wasSubmitted.value = true
  if (validateUser(userVal.value) && validateEmail(emailVal.value) && acceptTermsVal.value) {
    formSuccessMessage.value = '🎉 ¡Formulario enviado con éxito y validado!'
    setTimeout(() => {
      formSuccessMessage.value = ''
      userVal.value = ''
      emailVal.value = ''
      acceptTermsVal.value = false
      wasSubmitted.value = false
    }, 4000)
  } else {
    formSuccessMessage.value = ''
  }
}
</script>
<style scoped>
.mb-3 {
  margin-bottom: 1rem;
}

.form-label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-control {
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #f8f9fa;
  background-color: rgba(255, 255, 255, 0.05);
  background-clip: padding-box;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  color: #fff;
}

.form-control:disabled {
  background-color: rgba(255, 255, 255, 0.02);
  color: var(--text-secondary);
  border-color: rgba(255, 255, 255, 0.05);
  cursor: not-allowed;
  opacity: 0.6;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.form-select {
  display: block;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #f8f9fa;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-select option {
  background-color: #1e1e2e;
  color: #fff;
}

.form-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0;
  vertical-align: top;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  appearance: none;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-check-input[type="radio"] {
  border-radius: 50%;
}

.form-check-input:active {
  filter: brightness(90%);
}

.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.form-check-input[type="checkbox"]:checked::after {
  content: "✓";
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
}

.form-check-input[type="radio"]:checked::after {
  content: "";
  width: 0.5em;
  height: 0.5em;
  background-color: #fff;
  border-radius: 50%;
}

.form-check-label {
  color: var(--text-primary);
  font-size: 0.95rem;
  cursor: pointer;
}

.form-switch {
  padding-left: 0.5rem;
}

.form-switch .form-check-input {
  width: 2em;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
  background-position: left center;
  display: inline-block;
  position: relative;
}

.form-switch .form-check-input::after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(1em - 4px);
  height: calc(1em - 4px);
  background-color: var(--text-secondary);
  border-radius: 50%;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

.form-switch .form-check-input:checked::after {
  transform: translateX(1.05em);
  background-color: #fff;
}

.form-floating {
  position: relative;
}

.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}

.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  text-align: start;
  pointer-events: none;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  color: var(--text-secondary);
}

.form-floating > .form-control::placeholder {
  color: transparent;
}

.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.summary-box {
  margin-top: 1.2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.summary-box h5 {
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
}

.summary-box p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.validation-form-demo {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #198754;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}

.is-invalid:focus,
.was-validated :invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.is-invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-feedback {
  display: block;
}

.is-valid,
.was-validated :valid {
  border-color: #198754;
}

.is-valid:focus,
.was-validated :valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.is-valid ~ .valid-feedback,
.was-validated :valid ~ .valid-feedback {
  display: block;
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
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.success-alert {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(25, 135, 84, 0.15);
  border: 1px solid #198754;
  color: #198754;
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
