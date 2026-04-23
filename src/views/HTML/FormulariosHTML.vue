<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Formularios</h1>
      <p class="subtitle">Capturando datos del usuario de forma estructurada y accesible.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">Estructura Básica</h2>
      <p class="section-desc">Los formularios son la parte fundamental de las paginas web para que los usuarios puedan enviar información a los servidores.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Elementos Principales</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">&lt;form&gt;</span>: Es la etiqueta que envuelve todos los elementos del formulario.</li>
            <li><span class="def-term">&lt;label&gt;</span>: Sirve para escribir el nombre del campo a rellenar. Debe tener el atributo <code>for</code> al cual se le indica un id que lo que hará será emparejar el label con su input correspondiente.</li>
            <li><span class="def-term">&lt;input&gt;</span>: Sirve para crear un campo que permitirá al usuario interactuar. El único atributo obligatorio del input es <code>name</code>.</li>
            <li><span class="def-term">&lt;button&gt;</span>: Sirve para crear un botón que realizará una acción.</li>
            <li><span class="def-term">&lt;select&gt;</span>: Crea un campo que desplegará una lista de opciones cuando el usuario haga clic sobre él.</li>
            <li><span class="def-term">&lt;textarea&gt;</span>: Crea un campo de texto con varias líneas de alto, ideal para comentarios o descripciones largas.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Asociación Label-Input</h3>
          </div>
          <p>Usa el atributo <code>for</code> en el label que coincida con el <code>id</code> del input.</p>
          <CodeBlock language="html" code='<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="user_name">' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Tipos de Input</h2>
      <p class="section-desc">HTML5 introdujo múltiples tipos de <code>&lt;input&gt;</code> que mejoran la experiencia en dispositivos móviles y validación nativa.</p>
      <div class="cards-grid">
        <div class="preview-container">
          <div class="preview-header">Demo de Inputs</div>
          <div class="preview-content form-demo">
            <form @submit.prevent class="custom-form">
              <div class="form-group">
                <label for="demo-text">Texto (text):</label>
                <input type="text" id="demo-text" placeholder="Escribe algo...">
              </div>
              <div class="form-group">
                <label for="demo-password">Contraseña (password):</label>
                <input type="password" id="demo-password" placeholder="*******">
              </div>
              <div class="form-group">
                <label for="demo-email">Email (email):</label>
                <input type="email" id="demo-email" placeholder="correo@ejemplo.com">
              </div>
              <div class="form-group">
                <label for="demo-date">Fecha (date):</label>
                <input type="date" id="demo-date">
              </div>
              <div class="form-group">
                <label for="demo-time">Hora (time):</label>
                <input type="time" id="demo-time">
              </div>
              <div class="form-group">
                <label for="demo-datetime-local">Fecha y hora (datetime-local):</label>
                <input type="datetime-local" id="demo-datetime-local">
              </div>
              <div class="form-group">
                <label for="demo-month">Mes (month):</label>
                <input type="month" id="demo-month">
              </div>
              <div class="form-group">
                <label for="demo-week">Semana (week):</label>
                <input type="week" id="demo-week">
              </div>
              <div class="form-group">
                <label for="demo-search">Buscar (search):</label>
                <input type="search" id="demo-search">
              </div>
              <div class="form-group">
                <label for="demo-number">Número (number):</label>
                <input type="number" id="demo-number">
              </div>
              <div class="form-group">
                <label for="demo-range">Rango (range):</label>
                <input type="range" id="demo-range">
              </div>
              <div class="form-group">
                <label for="demo-tel">Teléfono (tel):</label>
                <input type="tel" id="demo-tel">
              </div>
              <div class="form-group">
                <label for="demo-url">URL (url):</label>
                <input type="url" id="demo-url">
              </div>
              <div class="form-group">
                <label for="demo-color">Color (color):</label>
                <input type="color" id="demo-color">
              </div>
              <div class="form-group inline">
                <input type="checkbox" id="demo-check">
                <label for="demo-check">Casilla de verificación (checkbox)</label>
              </div>
              <div class="form-group inline">
                <input type="radio" id="demo-radio" name="demo-radio">
                <label for="demo-radio">Botón de opción (radio)</label>
              </div>
            </form>
          </div>
        </div>
        <CodeBlock language="html" code='<input type="text" placeholder="Texto simple">
<input type="password" placeholder="Oculta caracteres">
<input type="email" placeholder="Valida formato de correo">
<input type="date" placeholder="Fecha">
<input type="time" placeholder="Hora">
<input type="datetime-local" placeholder="Fecha y hora">
<input type="month" placeholder="Mes">
<input type="week" placeholder="Semana">
<input type="search" placeholder="Buscar">
<input type="number" min="1" max="10" placeholder="Número">
<input type="range" min="1" max="10" placeholder="Rango">
<input type="tel" placeholder="Teléfono">
<input type="url" placeholder="URL">
<input type="color" placeholder="Color">
<input type="checkbox" checked placeholder="Checkbox">
<input type="radio" name="grupo" placeholder="Radio">' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Listas de Opciones</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Select (Desplegable)</h3>
          </div>
          <p>Crea una lista cerrada de opciones. Usa <code>&lt;optgroup&gt;</code> para categorizar.</p>
          <CodeBlock language="html" code='<select name="lenuajes" id="lenuajes">
  <option value="" disabled selected>Selecciona un lenguaje</option>
  <option value="js">JavaScript</option>
  ...
</select>

// Seleccionar varias opciones
<select name="lenuajes" id="lenuajes" multiple>
  <option value="" disabled selected>Selecciona un lenguaje</option>
  <option value="js">JavaScript</option>
  ...
</select>

// categorias
<select name="lenuajes" id="lenuajes">
  <option value="" disabled selected>Selecciona un lenguaje</option>
  <optgroup label="Frontend">
    <option value="js">JavaScript</option>
    ...
  </optgroup>
  ...
</select>' /><br>
<select name="lenuajes" id="lenuajes">
  <option value="" disabled selected>Selecciona un lenguaje</option>
  <option value="js">JavaScript</option>
  <option value="ts">TypeScript</option>
  <option value="py">Python</option>
  <option value="java">Java</option>
</select><br><br>
<select name="lenuajes" id="lenuajes" multiple>
  <option value="" disabled selected>Selecciona los lenguajes</option>
  <option value="js">JavaScript</option>
  <option value="ts">TypeScript</option>
  <option value="py">Python</option>
  <option value="java">Java</option>
</select><br><br>
<select name="lenuajes" id="lenuajes">
  <option value="" disabled selected>Selecciona un lenguaje</option>
  <optgroup label="Frontend">
    <option value="js">JavaScript</option>
    <option value="ts">TypeScript</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="py">Python</option>
    <option value="java">Java</option>
  </optgroup>
</select>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Datalist (Autocompletado)</h3>
          </div>
          <p>Combina un input de texto con sugerencias predefinidas mediante el atributo <code>list</code>.</p>
          <CodeBlock language="html" code='<input list="navegadores" id="browser">
<datalist id="navegadores">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>' />
<br><br>
<input type="text" list="lenguajes">
<datalist id="lenguajes">
  <option value="html"></option>
  <option value="css"></option>
  <option value="javascript"></option>
  <option value="boostrap"></option>
  <option value="Vue"></option>
  <option value="python"></option>
  <option value="java"></option>
  <option value="mysql"></option>
  <option value="postgresql"></option>
  <option value="mongo"></option>
</datalist>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Otros elementos de formularios</h2>
      <div class="cards-grid">
        <div class="card info">
          <ul class="def-list">
            <li><span class="def-term">fieldset:</span> Agrupa campos relacionados dentro de un formulario</li>
            <li><span class="def-term">legend:</span> Añade un título o descripción al grupo de campos creado con fieldset</li>
            <li><span class="def-term">file:</span> Seleccionar archivos locales para subir al servidor</li>
            <li><span class="def-term">meter:</span> Representa un valor dentro de un rango conocido.</li>
            <li><span class="def-term">progress:</span> Indica el progreso de una tarea en curso.</li>
            <li><span class="def-term">textarea:</span> Permite escribir mensajes largos con saltos de línea.</li>
          </ul>
        </div>
        <CodeBlock language="html" code='<form>
  <fieldset>
    <legend>Otros elementos</legend>
    <input type="file"><br>
    <label for="fuel">Combustible</label>
    <meter id="fuel" min="0" max="100" value="60" low="30" high="75" optimum="50"></meter><br>
    <label for="task">Tarea 1</label>
    <progress id="task" max="100" value="30"></progress><br>
    <label for="message">Mensaje:</label><br>
    <textarea id="message" cols="30" rows="10"></textarea>
  </fieldset>
</form>' />
        <form>
          <fieldset>
            <legend>Otros elementos</legend>
            <input type="file"><br>
            <label for="fuel">Combustible</label>
            <meter id="fuel" min="0" max="100" value="60" low="30" high="75" optimum="50"></meter><br>
            <label for="task">Tarea 1</label>
            <progress id="task" max="100" value="30"></progress><br>
            <label for="message">Mensaje:</label><br>
            <textarea id="message" cols="30" rows="10"></textarea>
          </fieldset>
        </form>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title html">Atributos</h2>
      <div class="card recommended">
        <ul class="def-list">
          <li><span class="def-term">action:</span> Define la url donde se enviaran los datos.</li>
          <li><span class="def-term">method:</span> Define el método HTTP a utilizar para enviar los datos.</li>
          <li><span class="def-term">name:</span> Nombre del campo</li>
          <li><span class="def-term">target:</span> Especifica dónde mostrar la respuesta de la acción (url).</li>
          <li><span class="def-term">enctype:</span> Define el tipo de codificación que se utilizará para enviar los datos.</li>
          <li><span class="def-term">autocomplete:</span> Activa o desactiva el autocompletado.</li>
          <li><span class="def-term">novalidate:</span> Evita que el navegador valide el formulario.</li>
          <li><span class="def-term">value:</span> Valor inicial del campo</li>
          <li><span class="def-term">required:</span> Hace que el campo sea obligatorio antes de enviar.</li>
          <li><span class="def-term">disabled:</span> Deshabilita el campo (no se envía su valor).</li>
          <li><span class="def-term">readonly:</span> El usuario no puede modificarlo, pero sí se lee y se envía.</li>
          <li><span class="def-term">placeholder:</span> Texto de ayuda temporal.</li>
          <li><span class="def-term">size:</span> Tamaño del campo</li>
          <li><span class="def-term">min:</span> Valor minimo</li>
          <li><span class="def-term">max:</span> Valor maximo</li>
          <li><span class="def-term">minlength:</span> Longitud minima</li>
          <li><span class="def-term">maxlength:</span> Longitud maxima</li>
          <li><span class="def-term">selected:</span> Valor seleccionado por defecto</li>
          <li><span class="def-term">autofocus:</span> Auto enfoca el campo al cargar la página</li>
          <li><span class="def-term">multiple:</span> Permite seleccionar multiples opciones</li>
          <li><span class="def-term">spellcheck:</span> Activa o desactiva el corrector ortográfico</li>
          <li><span class="def-term">pattern:</span> Expresión regular para validar el formato.</li>

        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
.form-demo {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.custom-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.inline {
  flex-direction: row;
  align-items: center;
}

label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"],
input[type="week"],
input[type="search"],
input[type="number"],
input[type="tel"],
input[type="url"],
input[type="color"],
select,
textarea {
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.2);
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.3s;
}

select option:checked{
  background-color: var(--color-html);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-html);
}

textarea {
  resize: vertical;
}

input[type="checkbox"] {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  accent-color: var(--color-html);
}
</style>
