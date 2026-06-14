<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">DOM (Document Object Model)</h1>
      <p class="subtitle">Estructura de árbol que representa el documento HTML y permite su manipulación dinámica con JavaScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">¿Qué es el DOM?</h2>
      <p class="section-desc">El <strong>Document Object Model (DOM)</strong> es una API de programación para documentos HTML y XML. Cuando el navegador carga una página web, crea una representación gráfica de la estructura del documento como un <strong>árbol de nodos</strong>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Nodos del DOM</h3>
          </div>
          <p>Cada parte del documento HTML es un nodo en el árbol. Los tipos de nodos más importantes son:</p>
          <ul class="def-list">
            <li><span class="def-term">Document Node (9):</span> El punto de entrada al árbol del DOM (el objeto document).</li>
            <li><span class="def-term">Element Node (1):</span> Cualquier etiqueta HTML (por ejemplo, &lt;div&gt;, &lt;p&gt;, &lt;a&gt;).</li>
            <li><span class="def-term">Text Node (3):</span> El contenido de texto dentro de un elemento HTML.</li>
            <li><span class="def-term">Comment Node (8):</span> Los comentarios HTML (por ejemplo, &lt;!-- comentario --&gt;).</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Visualización del Árbol</h3>
          </div>
          <div class="dom-tree-visual">
            <div class="tree-node root">document</div>
            <div class="tree-line"></div>
            <div class="tree-node element">html</div>
            <div class="tree-branches">
              <div class="branch">
                <div class="tree-node element">head</div>
                <div class="tree-line"></div>
                <div class="tree-node element">title</div>
              </div>
              <div class="branch">
                <div class="tree-node element">body</div>
                <div class="tree-lines-multi"></div>
                <div class="sub-branches">
                  <div class="tree-node element">h1</div>
                  <div class="tree-node element">p</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Seleccionar Elementos del DOM</h2>
      <p class="section-desc">
        Para interactuar con un elemento, primero debemos "seleccionarlo". JavaScript ofrece métodos modernos y sumamente potentes.
      </p>

      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Métodos de Selección Recomendados</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">document.querySelector('selector')</span> Devuelve el <strong>primer</strong> elemento que coincida con el selector CSS (clases, IDs, etiquetas, combinadores).</li>
            <li><span class="def-term">document.querySelectorAll('selector')</span> Devuelve un objeto de tipo NodeList estático con <strong>todos</strong> los elementos que coincidan con el selector CSS.</li>
            <li><span class="def-term">document.getElementById('id')</span> Busca un elemento específico rápidamente por su atributo id.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="javascript" code="// Seleccionar por ID
const titulo = document.getElementById('main-title');

// Seleccionar por clase CSS (devuelve el primero)
const primerBoton = document.querySelector('.btn-primary');

// Seleccionar por tag y atributo
const inputEmail = document.querySelector('input[type=&quot;email&quot;]');

// Seleccionar todos los elementos con una clase
const items = document.querySelectorAll('.list-item');

// Iterar sobre un NodeList (querySelectorAll)
items.forEach(item => {
  console.log(item.textContent);
});

// Convertir NodeList a Array real si necesitas métodos como map o filter:
const itemsArray = Array.from(items);
// o usando spread operator:
const itemsArray2 = [...items];" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Modificar Contenido, Atributos y Estilos</h2>
      <p class="section-desc">Una vez seleccionado un elemento, podemos modificar sus textos, atributos HTML, clases CSS y estilos dinámicamente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Contenido</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">id:</span> Obtiene el atributo id de un elemento.</li>
            <li><span class="def-term">value:</span> Obtiene el valor de un campo de formulario (input, textarea, select).</li>
            <li><span class="def-term">textContent:</span> Obtiene o establece el texto plano. Es más seguro porque no interpreta el HTML, evitando ataques de inyección (XSS).</li>
            <li><span class="def-term">innerHTML:</span> Obtiene o establece el contenido HTML. Permite insertar etiquetas HTML, pero debe usarse con precaución.</li>
          </ul>
          <CodeBlock language="javascript" code="//Uso de ID
document.getElementById('mi-id');

//Uso de value
const miInput = document.getElementById('mi-input');
console.log(miInput.value);

// Uso de textContent (Seguro)
elemento.textContent = 'Hola <strong>Mundo</strong>';
// Resultado renderizado: Hola <strong>Mundo</strong>

// Uso de innerHTML (Interpreta HTML)
elemento.innerHTML = 'Hola <strong>Mundo</strong>';
// Resultado renderizado: Hola Mundo (en negrita)" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Clases y Atributos</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">classList:</span> API para manejar clases CSS usando add(), remove(), toggle(), contains() y replace().</li>
            <li><span class="def-term">getAttribute / setAttribute:</span> Permite leer y escribir cualquier atributo HTML (como src, href, disabled).</li>
            <li><span class="def-term">dataset:</span> Accede a atributos de datos personalizados (data-*).</li>
          </ul>
          <CodeBlock language="javascript" code="// Clases
elemento.classList.add('activo');
elemento.classList.remove('oculto');
elemento.classList.toggle('resaltado'); // Si está la quita, si no la pone

// Atributos
imagen.setAttribute('src', 'logo.png');
const enlace = boton.getAttribute('href');

// Data attributes: <div data-user-id=&quot;42&quot;>
const userId = elemento.dataset.userId; // '42'" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Crear e Insertar Elementos</h2>
      <p class="section-desc">Podemos construir nuevos elementos en memoria utilizando Javascript e insertarlos en el documento de forma eficiente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Métodos Clásicos de Inserción</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">createElement('tag')</span> Crea un elemento HTML en memoria.</li>
            <li><span class="def-term">textContent</span> Establece el contenido textual de un elemento.</li>
            <li><span class="def-term">innerHTML</span> Inserta contenido HTML en un elemento.</li>
            <li><span class="def-term">appendChild('elemento')</span> Inserta uno o varios elementos al <strong>final</strong> del contenedor.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="javascript" code="// Crear e insertar los elementos
const lista = document.getElementById('lista');
lista.innerHTML = '<ul> </ul>';
const nuevoItem = document.createElement('li');

//Modificar sus propiedades
nuevoItem.textContent = 'Nuevo elemento de lista';
nuevoItem.classList.add('item-estilizado');

//Insertar en el DOM
lista.append(nuevoItem);
" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Métodos Modernos de Inserción</h3>
          </div>
          <p>Anteriormente se usaba casi en exclusiva <code>appendChild</code>. Hoy contamos con métodos más limpios y potentes:</p>
          <ul class="def-list">
            <li><span class="def-term">append()</span> Inserta uno o varios elementos (o texto) al <strong>final</strong> del contenedor.</li>
            <li><span class="def-term">prepend()</span> Inserta uno o varios elementos al <strong>principio</strong> del contenedor.</li>
            <li><span class="def-term">before() / after()</span> Inserta elementos antes o después del elemento seleccionado.</li>
            <li><span class="def-term">remove()</span> Elimina el elemento del árbol DOM directamente.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="javascript" code="// 1. Crear el elemento
const nuevoItem = document.createElement('li');

// 2. Modificar sus propiedades
nuevoItem.textContent = 'Nuevo elemento de lista';
nuevoItem.classList.add('item-estilizado');

// 3. Insertar en el DOM
const lista = document.querySelector('.mi-lista');
lista.append(nuevoItem); // Se añade al final

// Insertar en posiciones avanzadas con insertAdjacentHTML
// (Ideal para templates de texto rápidos)
lista.insertAdjacentHTML('beforeend', '<li>Item rápido</li>');" />
        </div>
      </div>
      <br /><br />
      <div class="card recommended">
        <div class="card-header">
          <h3>Optimización de Rendimiento: DocumentFragment</h3>
        </div>
        <p>Modificar el DOM de forma reiterada (en un bucle) obliga al navegador a recalcular el diseño de la página continuamente (reflow/repaint). Para optimizar esto, agrupamos múltiples elementos en un <code>DocumentFragment</code> (un contenedor virtual en memoria) y lo insertamos una sola vez en el DOM real.</p>
        <CodeBlock language="javascript" code="const fragmento = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Elemento número ${i}`;
  fragmento.appendChild(item); // Se añade al fragmento en memoria (rápido)
}

// Se inserta en el DOM real una sola vez
document.querySelector('#lista-grande').appendChild(fragmento);" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Recorrer elementos</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Traversing</h3>
          </div>
          <p>Permite navegar entre nodos del árbol DOM utilizando propiedades específicas:</p>
          <ul class="def-list">
            <li><span class="def-term">parentElement / parentNode:</span> Devuelve el nodo padre.</li>
            <li><span class="def-term">children:</span> Colección de elementos hijos directos.</li>
            <li><span class="def-term">firstElementChild / lastElementChild:</span> Primer y último hijo en formato elemento (ignora texto/comentarios).</li>
            <li><span class="def-term">nextElementSibling / previousElementSibling:</span> Siguiente y anterior elemento hermano.</li>
            <li><span class="def-term">hasChildNodes():</span> Verifica si un elemento tiene hijos.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="javascript" code="const p1 = document.getElementById('p1');

// Padre
console.log(p1.parentElement.id); // 'contenedor'

// Hijos
console.log(p1.children);
console.log(p1.firstElementChild);
console.log(p1.lastElementChild);
console.log(p1.hasChildNodes());

// Hermanos
console.log(p1.nextElementSibling.id); // 'p2'
console.log(p1.previousElementSibling); // null" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Insertar, clonar y borrar elementos</h2>
      <div class="cards-grid">
        <div class="card info">
          <ul class="def-list">
            <li><span class="def-term">append()</span> Inserta uno o varios elementos (o texto) al <strong>final</strong> del contenedor.</li>
            <li><span class="def-term">prepend()</span> Inserta uno o varios elementos al <strong>principio</strong> del contenedor.</li>
            <li><span class="def-term">before() / after()</span> Inserta elementos antes o después del elemento seleccionado.</li>
            <li><span class="def-term">remove()</span> Elimina el elemento del árbol DOM directamente.</li>
            <li><span class="def-term">cloneNode()</span> Devuelve una copia de un nodo. Si se pasa el parámetro <code>true</code>, clona todo el árbol de nodos hijos; si es <code>false</code>, solo clona el nodo mismo.</li>
            <li><span class="def-term">appendChild()</span> Inserta un elemento al final del contenedor.</li>
            <li><span class="def-term">replaceChild()</span> Reemplaza un nodo hijo por otro.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="javascript" code="const lista = document.querySelector('#mi-lista');

// Insertar elementos
lista.append('Item 1', 'Item 2', 'Item 3');
lista.prepend('Item 0');

// Insertar antes/después
const primerItem = lista.firstElementChild;
lista.before('Item antes de la lista');
lista.after('Item después de la lista');

// Eliminar elementos
const segundoItem = lista.children[1];
segundoItem.remove();

// Clonar elementos
const clon = primerItem.cloneNode(true); // true para clonar hijos
lista.appendChild(clon);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Eventos del DOM</h2>
      <p class="section-desc">Los eventos permiten responder a las interacciones del usuario (clicks, pulsaciones de teclas, scroll, envíos de formularios, etc.).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>addEventListener</h3>
          </div>
          <p>Es el método recomendado para escuchar eventos. Permite registrar múltiples manejadores sobre un mismo elemento.</p>
          <CodeBlock language="javascript" code="const boton = document.querySelector('#btn-guardar');

// Registrar el listener
boton.addEventListener('click', (event) => {
  console.log('¡Botón clickeado!');
  // El objeto 'event' contiene detalles de la interacción
  console.log('Coordenada X del click:', event.clientX);
});" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Control del Comportamiento por Defecto</h3>
          </div>
          <p>Ciertas etiquetas HTML tienen comportamientos integrados (enlaces que navegan, formularios que recargan la página). Podemos detener esto con <code>event.preventDefault()</code>.</p>
          <CodeBlock language="javascript" code="const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Realizar validaciones o envío asíncrono
  console.log('Formulario enviado de forma segura');
});" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Propagación de Eventos: Bubbling (Burbujeo)</h3>
          </div>
          <p>Por defecto en el DOM, cuando un evento ocurre en un elemento hijo, este se propaga hacia arriba en la jerarquía (hacia los padres). Puedes detener esto llamando a <code>e.stopPropagation()</code>.</p>
          <CodeBlock language="javascript" code="// Si haces click en el botón, también se activaría el click del contenedor div
boton.addEventListener('click', (e) => {
  e.stopPropagation(); // Detiene el viaje del evento hacia arriba
  console.log('Click capturado solo en el botón');
});" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Delegación de Eventos</h3>
          </div>
          <p>En lugar de añadir listeners a decenas de elementos individuales, añadimos un solo listener en su contenedor padre. Esto mejora sustancialmente el rendimiento y permite gestionar elementos dinámicos que se creen a futuro.</p>
          <CodeBlock language="javascript" code="// Delegación de eventos en un contenedor de lista
const lista = document.querySelector('.mi-lista');

lista.addEventListener('click', (e) => {
  // Comprobamos si el click fue en un elemento de tipo LI
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completado');
    console.log('Click en item:', e.target.textContent);
  }
});" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Sandbox Interactivo: Manipulación en Vivo</h2>
      <p class="section-desc">Experimenta en tiempo real cómo los métodos del DOM modifican la estructura, clases y estilos de una sección de la página.</p>
      <div class="sandbox-container">
        <div class="sandbox-controls">
          <div class="control-group">
            <h4>1. Modificar Contenido & Clases</h4>
            <div class="btn-group-vertical">
              <button class="sandbox-btn" @click="changeTitleText">Cambiar Título (<code>textContent</code>)</button>
              <button class="sandbox-btn" @click="toggleHighlightClass">Alternar Destacado (<code>classList.toggle</code>)</button>
            </div>
          </div>
          <div class="control-group">
            <h4>2. Agregar & Eliminar Elementos</h4>
            <div class="btn-group-vertical">
              <button class="sandbox-btn success" @click="addListItem">Añadir Item (<code>createElement</code> & <code>append</code>)</button>
              <button class="sandbox-btn danger" @click="removeListItem">Eliminar Último Item (<code>remove()</code>)</button>
            </div>
          </div>
          <div class="control-group">
            <h4>3. Estilos en Línea</h4>
            <div class="btn-group-vertical">
              <button class="sandbox-btn" @click="changeColor">Cambiar Color de Fondo (<code>style.backgroundColor</code>)</button>
            </div>
          </div>
        </div>
        <div class="sandbox-preview">
          <div class="preview-header">El DOM en Vivo (Render)</div>
          <div class="sandbox-render-area" :class="{ 'highlighted-border': isHighlighted }" :style="{ backgroundColor: currentBgColor }">
            <h3 class="sandbox-title">{{ sandboxTitle }}</h3>
            <p>Lista de Elementos:</p>
            <ul class="sandbox-list">
              <li v-for="item in listItems" :key="item.id" class="sandbox-item" @click="trackClick(item.text)">{{ item.text }} <span class="click-badge">¡Hazme click!</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sandbox-terminal">
        <div class="terminal-header">
          <span>Código DOM Ejecutado en Tiempo Real</span>
          <button class="clear-btn" @click="clearLogs">Limpiar Historial</button>
        </div>
        <div class="terminal-body" ref="terminalBody">
          <div v-for="(log, idx) in executedLogs" :key="idx" class="terminal-line">
            <span class="prompt">></span> <code class="code-text">{{ log }}</code>
          </div>
          <div v-if="executedLogs.length === 0" class="terminal-placeholder">Haz clic en los botones de arriba para interactuar y ver el código JavaScript asociado aquí.</div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'inicio', text: 'Estructura básica HTML' },
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JavaScript' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const sandboxTitle = ref('Mi Sandbox del DOM')
const isHighlighted = ref(false)
const currentBgColor = ref('rgba(255, 255, 255, 0.02)')
const listItems = ref([
  { id: 1, text: 'Item Original #1' },
  { id: 2, text: 'Item Original #2' },
])
const executedLogs = ref<string[]>([])
const terminalBody = ref<HTMLElement | null>(null)

const addLog = (logText: string) => {
  executedLogs.value.push(logText)
  nextTick(() => {
    if (terminalBody.value) {
      terminalBody.value.scrollTop = terminalBody.value.scrollHeight
    }
  })
}

const clearLogs = () => {
  executedLogs.value = []
}

const changeTitleText = () => {
  const titles = ['¡DOM Cambiado!', 'Aprendiendo DOM', 'JavaScript es genial', 'Modificación exitosa']
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]
  sandboxTitle.value = randomTitle
  addLog(`const title = document.querySelector('.sandbox-title');\ntitle.textContent = "${randomTitle}";`)
}
const toggleHighlightClass = () => {
  isHighlighted.value = !isHighlighted.value
  addLog(`const container = document.querySelector('.sandbox-render-area');\ncontainer.classList.toggle('highlighted-border');`)
}

const addListItem = () => {
  const newId = listItems.value.length ? Math.max(...listItems.value.map(i => i.id)) + 1 : 1
  const newItemText = `Nuevo Item #${newId}`
  listItems.value.push({ id: newId, text: newItemText })
  addLog(`const newItem = document.createElement('li');\nnewItem.textContent = "${newItemText}";\nnewItem.classList.add('sandbox-item');\ndocument.querySelector('.sandbox-list').append(newItem);`)
}

const removeListItem = () => {
  if (listItems.value.length > 0) {
    const removed = listItems.value.pop()
    addLog(`const items = document.querySelectorAll('.sandbox-item');\nif (items.length > 0) {\n  items[items.length - 1].remove();\n} // Eliminado: "${removed?.text}"`)
  } else {
    addLog(`// No hay más items para eliminar.`)
  }
}

const changeColor = () => {
  const colors = [
    'rgba(59, 130, 246, 0.1)',
    'rgba(16, 185, 129, 0.1)',
    'rgba(245, 158, 11, 0.1)',
    'rgba(239, 68, 68, 0.1)',
    'rgba(139, 92, 246, 0.1)',
    'rgba(255, 255, 255, 0.02)'
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  currentBgColor.value = randomColor
  addLog(`const area = document.querySelector('.sandbox-render-area');\narea.style.backgroundColor = "${randomColor}";`)
}

const trackClick = (itemText: string) => {
  addLog(`// Evento 'click' disparado en item. Target text: "${itemText}"\nitem.addEventListener('click', (e) => { console.log(e.target.textContent); });`)
}
</script>

<style scoped>
.dom-tree-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  font-family: 'Courier New', Courier, monospace;
}

.tree-node {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  min-width: 100px;
}

.tree-node.root {
  background: #f59e0b;
  color: #000;
}

.tree-node.element {
  background: #3b82f6;
  color: #fff;
}

.tree-line {
  width: 2px;
  height: 20px;
  background: var(--border-color);
}

.tree-branches {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5px;
  border-top: 2px solid var(--border-color);
  padding-top: 15px;
  position: relative;
}

.branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.tree-lines-multi {
  width: 50%;
  height: 15px;
  border-top: 2px solid var(--border-color);
  border-left: 2px solid var(--border-color);
  border-right: 2px solid var(--border-color);
  margin-top: 5px;
}

.sub-branches {
  display: flex;
  justify-content: space-between;
  width: 120%;
  margin-top: 5px;
}

.sub-branches .tree-node {
  min-width: 60px;
}

.sandbox-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .sandbox-container {
    grid-template-columns: 1fr;
  }
}

.sandbox-controls {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.2rem;
}

.control-group h4 {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 0.6rem;
  border-left: 3px solid #3b82f6;
  padding-left: 8px;
}

.btn-group-vertical {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.sandbox-btn {
  background: rgba(255, 255, 255, 0.07);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 10px 14px;
  border-radius: 8px;
  text-align: left;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.sandbox-btn:hover {
  background: #3b82f6;
  color: #fff;
  border-color: #3b82f6;
  transform: translateX(4px);
}

.sandbox-btn.success:hover {
  background: #10b981;
  border-color: #10b981;
}

.sandbox-btn.danger:hover {
  background: #ef4444;
  border-color: #ef4444;
}

.sandbox-preview {
  display: flex;
  flex-direction: column;
}

.preview-header {
  background: #1e1e2e;
  border: 1px solid var(--border-color);
  border-bottom: none;
  padding: 8px 16px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
}

.sandbox-render-area {
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
}

.highlighted-border {
  border: 2px dashed #f59e0b;
  box-shadow: 0 0 15px rgba(245, 158, 11, 0.2);
}

.sandbox-title {
  margin: 0 0 10px 0;
  font-size: 1.6rem;
  font-weight: 700;
}

.sandbox-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sandbox-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.sandbox-item:hover {
  background: rgba(59, 130, 246, 0.15);
  border-color: #3b82f6;
}

.click-badge {
  font-size: 0.75rem;
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  padding: 2px 6px;
  border-radius: 4px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.sandbox-item:hover .click-badge {
  opacity: 1;
}

.sandbox-terminal {
  margin-top: 1.5rem;
  background: #11111b;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

.terminal-header {
  background: #181825;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.clear-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.terminal-body {
  padding: 1rem;
  height: 180px;
  overflow-y: auto;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 0.88rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terminal-line {
  white-space: pre-wrap;
  line-height: 1.4;
}

.prompt {
  color: #10b981;
  font-weight: bold;
  margin-right: 8px;
}

.code-text {
  color: #a6e3a1;
}

.terminal-placeholder {
  color: var(--text-secondary);
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
