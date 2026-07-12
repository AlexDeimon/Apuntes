import{C as o}from"./CodeBlock-B1lVO3u7.js";import{R as k}from"./ReferenceSection-DGTUJ-TY.js";import{d as H,r as b,c,a as l,b as a,e as s,f as t,n as T,i as q,t as f,F as M,k as x,l as O,p as A,o as m,_ as N}from"./index-717QYeS5.js";const z={class:"module-content"},B={class:"topic-section"},P={class:"cards-grid"},R={class:"topic-section"},w={class:"cards-grid"},V={class:"card info"},F={class:"card recommended"},J={class:"topic-section"},$={class:"cards-grid"},U={class:"cards-grid"},X={class:"card recommended"},Q={class:"topic-section"},G={class:"cards-grid"},K={class:"topic-section"},W={class:"cards-grid"},Y={class:"topic-section"},Z={class:"cards-grid"},_={class:"card info"},ee={class:"card recommended"},ae={class:"cards-grid"},te={class:"card info"},ne={class:"card recommended"},se={class:"topic-section"},oe={class:"sandbox-container"},le={class:"sandbox-preview"},de={class:"sandbox-title"},ie={class:"sandbox-list"},re=["onClick"],be={class:"sandbox-terminal"},ce={class:"code-text"},me={key:0,class:"terminal-placeholder"},ue=H({__name:"DOMJS",setup(ve){const g=b("Mi Sandbox del DOM"),p=b(!1),C=b("rgba(255, 255, 255, 0.02)"),r=b([{id:1,text:"Item Original #1"},{id:2,text:"Item Original #2"}]),u=b([]),v=b(null),d=n=>{u.value.push(n),A(()=>{v.value&&(v.value.scrollTop=v.value.scrollHeight)})},E=()=>{u.value=[]},y=()=>{const n=["¡DOM Cambiado!","Aprendiendo DOM","JavaScript es genial","Modificación exitosa"],e=n[Math.floor(Math.random()*n.length)];g.value=e,d(`const title = document.querySelector('.sandbox-title');
title.textContent = "${e}";`)},S=()=>{p.value=!p.value,d(`const container = document.querySelector('.sandbox-render-area');
container.classList.toggle('highlighted-border');`)},L=()=>{const n=r.value.length?Math.max(...r.value.map(i=>i.id))+1:1,e=`Nuevo Item #${n}`;r.value.push({id:n,text:e}),d(`const newItem = document.createElement('li');
newItem.textContent = "${e}";
newItem.classList.add('sandbox-item');
document.querySelector('.sandbox-list').append(newItem);`)},h=()=>{if(r.value.length>0){const n=r.value.pop();d(`const items = document.querySelectorAll('.sandbox-item');
if (items.length > 0) {
  items[items.length - 1].remove();
} // Eliminado: "${n==null?void 0:n.text}"`)}else d("// No hay más items para eliminar.")},j=()=>{const n=["rgba(59, 130, 246, 0.1)","rgba(16, 185, 129, 0.1)","rgba(245, 158, 11, 0.1)","rgba(239, 68, 68, 0.1)","rgba(139, 92, 246, 0.1)","rgba(255, 255, 255, 0.02)"],e=n[Math.floor(Math.random()*n.length)];C.value=e,d(`const area = document.querySelector('.sandbox-render-area');
area.style.backgroundColor = "${e}";`)},D=n=>{d(`// Evento 'click' disparado en item. Target text: "${n}"
item.addEventListener('click', (e) => { console.log(e.target.textContent); });`)};return(n,e)=>(m(),c("div",z,[e[49]||(e[49]=l('<div class="header-section" data-v-fb16ab0b><h1 class="main-title js" data-v-fb16ab0b>DOM (Document Object Model)</h1><p class="subtitle" data-v-fb16ab0b>Estructura de árbol que representa el documento HTML y permite su manipulación dinámica con JavaScript.</p></div><section class="topic-section" data-v-fb16ab0b><h2 class="section-title js" data-v-fb16ab0b>¿Qué es el DOM?</h2><p class="section-desc" data-v-fb16ab0b>El <strong data-v-fb16ab0b>Document Object Model (DOM)</strong> es una API de programación para documentos HTML y XML. Cuando el navegador carga una página web, crea una representación gráfica de la estructura del documento como un <strong data-v-fb16ab0b>árbol de nodos</strong>.</p><div class="cards-grid" data-v-fb16ab0b><div class="card info" data-v-fb16ab0b><div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Nodos del DOM</h3></div><p data-v-fb16ab0b>Cada parte del documento HTML es un nodo en el árbol. Los tipos de nodos más importantes son:</p><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>Document Node (9):</span> El punto de entrada al árbol del DOM (el objeto document).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>Element Node (1):</span> Cualquier etiqueta HTML (por ejemplo, &lt;div&gt;, &lt;p&gt;, &lt;a&gt;).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>Text Node (3):</span> El contenido de texto dentro de un elemento HTML.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>Comment Node (8):</span> Los comentarios HTML (por ejemplo, &lt;!-- comentario --&gt;).</li></ul></div><div class="card recommended" data-v-fb16ab0b><div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Visualización del Árbol</h3></div><div class="dom-tree-visual" data-v-fb16ab0b><div class="tree-node root" data-v-fb16ab0b>document</div><div class="tree-line" data-v-fb16ab0b></div><div class="tree-node element" data-v-fb16ab0b>html</div><div class="tree-branches" data-v-fb16ab0b><div class="branch" data-v-fb16ab0b><div class="tree-node element" data-v-fb16ab0b>head</div><div class="tree-line" data-v-fb16ab0b></div><div class="tree-node element" data-v-fb16ab0b>title</div></div><div class="branch" data-v-fb16ab0b><div class="tree-node element" data-v-fb16ab0b>body</div><div class="tree-lines-multi" data-v-fb16ab0b></div><div class="sub-branches" data-v-fb16ab0b><div class="tree-node element" data-v-fb16ab0b>h1</div><div class="tree-node element" data-v-fb16ab0b>p</div></div></div></div></div></div></div></section><hr class="divider" data-v-fb16ab0b>',3)),a("section",B,[e[1]||(e[1]=a("h2",{class:"section-title js"},"Seleccionar Elementos del DOM",-1)),e[2]||(e[2]=a("p",{class:"section-desc"},' Para interactuar con un elemento, primero debemos "seleccionarlo". JavaScript ofrece métodos modernos y sumamente potentes. ',-1)),a("div",P,[e[0]||(e[0]=l('<div class="card info" data-v-fb16ab0b><div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Métodos de Selección Recomendados</h3></div><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>document.querySelector(&#39;selector&#39;)</span> Devuelve el <strong data-v-fb16ab0b>primer</strong> elemento que coincida con el selector CSS (clases, IDs, etiquetas, combinadores).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>document.querySelectorAll(&#39;selector&#39;)</span> Devuelve un objeto de tipo NodeList estático con <strong data-v-fb16ab0b>todos</strong> los elementos que coincidan con el selector CSS.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>document.getElementById(&#39;id&#39;)</span> Busca un elemento específico rápidamente por su atributo id.</li></ul></div>',1)),a("div",null,[s(o,{language:"javascript",code:`// Seleccionar por ID
const titulo = document.getElementById('main-title');

// Seleccionar por clase CSS (devuelve el primero)
const primerBoton = document.querySelector('.btn-primary');

// Seleccionar por tag y atributo
const inputEmail = document.querySelector('input[type="email"]');

// Seleccionar todos los elementos con una clase
const items = document.querySelectorAll('.list-item');

// Iterar sobre un NodeList (querySelectorAll)
items.forEach(item => {
  console.log(item.textContent);
});

// Convertir NodeList a Array real si necesitas métodos como map o filter:
const itemsArray = Array.from(items);
// o usando spread operator:
const itemsArray2 = [...items];`})])])]),e[50]||(e[50]=a("hr",{class:"divider"},null,-1)),a("section",R,[e[5]||(e[5]=a("h2",{class:"section-title js"},"Modificar Contenido, Atributos y Estilos",-1)),e[6]||(e[6]=a("p",{class:"section-desc"},"Una vez seleccionado un elemento, podemos modificar sus textos, atributos HTML, clases CSS y estilos dinámicamente.",-1)),a("div",w,[a("div",V,[e[3]||(e[3]=l('<div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Contenido</h3></div><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>id:</span> Obtiene el atributo id de un elemento.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>value:</span> Obtiene el valor de un campo de formulario (input, textarea, select).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>textContent:</span> Obtiene o establece el texto plano. Es más seguro porque no interpreta el HTML, evitando ataques de inyección (XSS).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>innerHTML:</span> Obtiene o establece el contenido HTML. Permite insertar etiquetas HTML, pero debe usarse con precaución.</li></ul>',2)),s(o,{language:"javascript",code:`//Uso de ID
document.getElementById('mi-id');

//Uso de value
const miInput = document.getElementById('mi-input');
console.log(miInput.value);

// Uso de textContent (Seguro)
elemento.textContent = 'Hola <strong>Mundo</strong>';
// Resultado renderizado: Hola <strong>Mundo</strong>

// Uso de innerHTML (Interpreta HTML)
elemento.innerHTML = 'Hola <strong>Mundo</strong>';
// Resultado renderizado: Hola Mundo (en negrita)`})]),a("div",F,[e[4]||(e[4]=l('<div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Clases y Atributos</h3></div><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>classList:</span> API para manejar clases CSS usando add(), remove(), toggle(), contains() y replace().</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>getAttribute / setAttribute:</span> Permite leer y escribir cualquier atributo HTML (como src, href, disabled).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>dataset:</span> Accede a atributos de datos personalizados (data-*).</li></ul>',2)),s(o,{language:"javascript",code:`// Clases
elemento.classList.add('activo');
elemento.classList.remove('oculto');
elemento.classList.toggle('resaltado'); // Si está la quita, si no la pone

// Atributos
imagen.setAttribute('src', 'logo.png');
const enlace = boton.getAttribute('href');

// Data attributes: <div data-user-id="42">
const userId = elemento.dataset.userId; // '42'`})])])]),e[51]||(e[51]=a("hr",{class:"divider"},null,-1)),a("section",J,[e[11]||(e[11]=a("h2",{class:"section-title js"},"Crear e Insertar Elementos",-1)),e[12]||(e[12]=a("p",{class:"section-desc"},"Podemos construir nuevos elementos en memoria utilizando Javascript e insertarlos en el documento de forma eficiente.",-1)),a("div",$,[e[7]||(e[7]=l('<div class="card info" data-v-fb16ab0b><div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Métodos Clásicos de Inserción</h3></div><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>createElement(&#39;tag&#39;)</span> Crea un elemento HTML en memoria.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>textContent</span> Establece el contenido textual de un elemento.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>innerHTML</span> Inserta contenido HTML en un elemento.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>appendChild(&#39;elemento&#39;)</span> Inserta uno o varios elementos al <strong data-v-fb16ab0b>final</strong> del contenedor.</li></ul></div>',1)),a("div",null,[s(o,{language:"javascript",code:`// Crear e insertar los elementos
const lista = document.getElementById('lista');
lista.innerHTML = '<ul> </ul>';
const nuevoItem = document.createElement('li');

//Modificar sus propiedades
nuevoItem.textContent = 'Nuevo elemento de lista';
nuevoItem.classList.add('item-estilizado');

//Insertar en el DOM
lista.append(nuevoItem);
`})])]),e[13]||(e[13]=a("br",null,null,-1)),e[14]||(e[14]=a("br",null,null,-1)),a("div",U,[e[8]||(e[8]=l('<div class="card recommended" data-v-fb16ab0b><div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Métodos Modernos de Inserción</h3></div><p data-v-fb16ab0b>Anteriormente se usaba casi en exclusiva <code data-v-fb16ab0b>appendChild</code>. Hoy contamos con métodos más limpios y potentes:</p><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>append()</span> Inserta uno o varios elementos (o texto) al <strong data-v-fb16ab0b>final</strong> del contenedor.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>prepend()</span> Inserta uno o varios elementos al <strong data-v-fb16ab0b>principio</strong> del contenedor.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>before() / after()</span> Inserta elementos antes o después del elemento seleccionado.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>remove()</span> Elimina el elemento del árbol DOM directamente.</li></ul></div>',1)),a("div",null,[s(o,{language:"javascript",code:`// 1. Crear el elemento
const nuevoItem = document.createElement('li');

// 2. Modificar sus propiedades
nuevoItem.textContent = 'Nuevo elemento de lista';
nuevoItem.classList.add('item-estilizado');

// 3. Insertar en el DOM
const lista = document.querySelector('.mi-lista');
lista.append(nuevoItem); // Se añade al final

// Insertar en posiciones avanzadas con insertAdjacentHTML
// (Ideal para templates de texto rápidos)
lista.insertAdjacentHTML('beforeend', '<li>Item rápido</li>');`})])]),e[15]||(e[15]=a("br",null,null,-1)),e[16]||(e[16]=a("br",null,null,-1)),a("div",X,[e[9]||(e[9]=a("div",{class:"card-header"},[a("h3",null,"Optimización de Rendimiento: DocumentFragment")],-1)),e[10]||(e[10]=a("p",null,[t("Modificar el DOM de forma reiterada (en un bucle) obliga al navegador a recalcular el diseño de la página continuamente (reflow/repaint). Para optimizar esto, agrupamos múltiples elementos en un "),a("code",null,"DocumentFragment"),t(" (un contenedor virtual en memoria) y lo insertamos una sola vez en el DOM real.")],-1)),s(o,{language:"javascript",code:`const fragmento = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const item = document.createElement('li');
  item.textContent = \`Elemento número \${i}\`;
  fragmento.appendChild(item); // Se añade al fragmento en memoria (rápido)
}

// Se inserta en el DOM real una sola vez
document.querySelector('#lista-grande').appendChild(fragmento);`})])]),e[52]||(e[52]=a("hr",{class:"divider"},null,-1)),a("section",Q,[e[18]||(e[18]=a("h2",{class:"section-title js"},"Recorrer elementos",-1)),a("div",G,[e[17]||(e[17]=l('<div class="card info" data-v-fb16ab0b><div class="card-header" data-v-fb16ab0b><h3 data-v-fb16ab0b>Traversing</h3></div><p data-v-fb16ab0b>Permite navegar entre nodos del árbol DOM utilizando propiedades específicas:</p><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>parentElement / parentNode:</span> Devuelve el nodo padre.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>children:</span> Colección de elementos hijos directos.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>firstElementChild / lastElementChild:</span> Primer y último hijo en formato elemento (ignora texto/comentarios).</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>nextElementSibling / previousElementSibling:</span> Siguiente y anterior elemento hermano.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>hasChildNodes():</span> Verifica si un elemento tiene hijos.</li></ul></div>',1)),a("div",null,[s(o,{language:"javascript",code:`const p1 = document.getElementById('p1');

// Padre
console.log(p1.parentElement.id); // 'contenedor'

// Hijos
console.log(p1.children);
console.log(p1.firstElementChild);
console.log(p1.lastElementChild);
console.log(p1.hasChildNodes());

// Hermanos
console.log(p1.nextElementSibling.id); // 'p2'
console.log(p1.previousElementSibling); // null`})])])]),e[53]||(e[53]=a("hr",{class:"divider"},null,-1)),a("section",K,[e[20]||(e[20]=a("h2",{class:"section-title js"},"Insertar, clonar y borrar elementos",-1)),a("div",W,[e[19]||(e[19]=l('<div class="card info" data-v-fb16ab0b><ul class="def-list" data-v-fb16ab0b><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>append()</span> Inserta uno o varios elementos (o texto) al <strong data-v-fb16ab0b>final</strong> del contenedor.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>prepend()</span> Inserta uno o varios elementos al <strong data-v-fb16ab0b>principio</strong> del contenedor.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>before() / after()</span> Inserta elementos antes o después del elemento seleccionado.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>remove()</span> Elimina el elemento del árbol DOM directamente.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>cloneNode()</span> Devuelve una copia de un nodo. Si se pasa el parámetro <code data-v-fb16ab0b>true</code>, clona todo el árbol de nodos hijos; si es <code data-v-fb16ab0b>false</code>, solo clona el nodo mismo.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>appendChild()</span> Inserta un elemento al final del contenedor.</li><li data-v-fb16ab0b><span class="def-term" data-v-fb16ab0b>replaceChild()</span> Reemplaza un nodo hijo por otro.</li></ul></div>',1)),a("div",null,[s(o,{language:"javascript",code:`const lista = document.querySelector('#mi-lista');

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
lista.appendChild(clon);`})])])]),e[54]||(e[54]=a("hr",{class:"divider"},null,-1)),a("section",Y,[e[29]||(e[29]=a("h2",{class:"section-title js"},"Eventos del DOM",-1)),e[30]||(e[30]=a("p",{class:"section-desc"},"Los eventos permiten responder a las interacciones del usuario (clicks, pulsaciones de teclas, scroll, envíos de formularios, etc.).",-1)),a("div",Z,[a("div",_,[e[21]||(e[21]=a("div",{class:"card-header"},[a("h3",null,"addEventListener")],-1)),e[22]||(e[22]=a("p",null,"Es el método recomendado para escuchar eventos. Permite registrar múltiples manejadores sobre un mismo elemento.",-1)),s(o,{language:"javascript",code:`const boton = document.querySelector('#btn-guardar');

// Registrar el listener
boton.addEventListener('click', (event) => {
  console.log('¡Botón clickeado!');
  // El objeto 'event' contiene detalles de la interacción
  console.log('Coordenada X del click:', event.clientX);
});`})]),a("div",ee,[e[23]||(e[23]=a("div",{class:"card-header"},[a("h3",null,"Control del Comportamiento por Defecto")],-1)),e[24]||(e[24]=a("p",null,[t("Ciertas etiquetas HTML tienen comportamientos integrados (enlaces que navegan, formularios que recargan la página). Podemos detener esto con "),a("code",null,"event.preventDefault()"),t(".")],-1)),s(o,{language:"javascript",code:`const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Realizar validaciones o envío asíncrono
  console.log('Formulario enviado de forma segura');
});`})])]),e[31]||(e[31]=a("br",null,null,-1)),e[32]||(e[32]=a("br",null,null,-1)),a("div",ae,[a("div",te,[e[25]||(e[25]=a("div",{class:"card-header"},[a("h3",null,"Propagación de Eventos: Bubbling (Burbujeo)")],-1)),e[26]||(e[26]=a("p",null,[t("Por defecto en el DOM, cuando un evento ocurre en un elemento hijo, este se propaga hacia arriba en la jerarquía (hacia los padres). Puedes detener esto llamando a "),a("code",null,"e.stopPropagation()"),t(".")],-1)),s(o,{language:"javascript",code:`// Si haces click en el botón, también se activaría el click del contenedor div
boton.addEventListener('click', (e) => {
  e.stopPropagation(); // Detiene el viaje del evento hacia arriba
  console.log('Click capturado solo en el botón');
});`})]),a("div",ne,[e[27]||(e[27]=a("div",{class:"card-header"},[a("h3",null,"Delegación de Eventos")],-1)),e[28]||(e[28]=a("p",null,"En lugar de añadir listeners a decenas de elementos individuales, añadimos un solo listener en su contenedor padre. Esto mejora sustancialmente el rendimiento y permite gestionar elementos dinámicos que se creen a futuro.",-1)),s(o,{language:"javascript",code:`// Delegación de eventos en un contenedor de lista
const lista = document.querySelector('.mi-lista');

lista.addEventListener('click', (e) => {
  // Comprobamos si el click fue en un elemento de tipo LI
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completado');
    console.log('Click en item:', e.target.textContent);
  }
});`})])])]),e[55]||(e[55]=a("hr",{class:"divider"},null,-1)),a("section",se,[e[47]||(e[47]=a("h2",{class:"section-title js"},"Sandbox Interactivo: Manipulación en Vivo",-1)),e[48]||(e[48]=a("p",{class:"section-desc"},"Experimenta en tiempo real cómo los métodos del DOM modifican la estructura, clases y estilos de una sección de la página.",-1)),a("div",oe,[a("div",{class:"sandbox-controls"},[a("div",{class:"control-group"},[e[35]||(e[35]=a("h4",null,"1. Modificar Contenido & Clases",-1)),a("div",{class:"btn-group-vertical"},[a("button",{class:"sandbox-btn",onClick:y},e[33]||(e[33]=[t("Cambiar Título ("),a("code",null,"textContent",-1),t(")")])),a("button",{class:"sandbox-btn",onClick:S},e[34]||(e[34]=[t("Alternar Destacado ("),a("code",null,"classList.toggle",-1),t(")")]))])]),a("div",{class:"control-group"},[e[38]||(e[38]=a("h4",null,"2. Agregar & Eliminar Elementos",-1)),a("div",{class:"btn-group-vertical"},[a("button",{class:"sandbox-btn success",onClick:L},e[36]||(e[36]=[t("Añadir Item ("),a("code",null,"createElement",-1),t(" & "),a("code",null,"append",-1),t(")")])),a("button",{class:"sandbox-btn danger",onClick:h},e[37]||(e[37]=[t("Eliminar Último Item ("),a("code",null,"remove()",-1),t(")")]))])]),a("div",{class:"control-group"},[e[40]||(e[40]=a("h4",null,"3. Estilos en Línea",-1)),a("div",{class:"btn-group-vertical"},[a("button",{class:"sandbox-btn",onClick:j},e[39]||(e[39]=[t("Cambiar Color de Fondo ("),a("code",null,"style.backgroundColor",-1),t(")")]))])])]),a("div",le,[e[43]||(e[43]=a("div",{class:"preview-header"},"El DOM en Vivo (Render)",-1)),a("div",{class:q(["sandbox-render-area",{"highlighted-border":p.value}]),style:T({backgroundColor:C.value})},[a("h3",de,f(g.value),1),e[42]||(e[42]=a("p",null,"Lista de Elementos:",-1)),a("ul",ie,[(m(!0),c(M,null,x(r.value,i=>(m(),c("li",{key:i.id,class:"sandbox-item",onClick:I=>D(i.text)},[t(f(i.text)+" ",1),e[41]||(e[41]=a("span",{class:"click-badge"},"¡Hazme click!",-1))],8,re))),128))])],6)])]),a("div",be,[a("div",{class:"terminal-header"},[e[44]||(e[44]=a("span",null,"Código DOM Ejecutado en Tiempo Real",-1)),a("button",{class:"clear-btn",onClick:E},"Limpiar Historial")]),a("div",{class:"terminal-body",ref_key:"terminalBody",ref:v},[(m(!0),c(M,null,x(u.value,(i,I)=>(m(),c("div",{key:I,class:"terminal-line"},[e[45]||(e[45]=a("span",{class:"prompt"},">",-1)),e[46]||(e[46]=t()),a("code",ce,f(i),1)]))),128)),u.value.length===0?(m(),c("div",me,"Haz clic en los botones de arriba para interactuar y ver el código JavaScript asociado aquí.")):O("",!0)],512)])]),e[56]||(e[56]=a("hr",{class:"divider"},null,-1)),s(k,{references:[{techId:"html",moduleId:"inicio",text:"Estructura básica HTML"},{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JavaScript"}]})]))}}),Ce=N(ue,[["__scopeId","data-v-fb16ab0b"]]);export{Ce as default};
