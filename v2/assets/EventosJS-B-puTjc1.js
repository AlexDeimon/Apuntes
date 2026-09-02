import{C as r}from"./CodeBlock-BwJOGh4v.js";import{R as k}from"./ReferenceSection-x4_mLSMB.js";import{d as h,r as m,c as i,a as p,b as n,e as s,f as a,l as g,t as v,F as j,k as L,i as q,o as c,_ as C}from"./index-dU_m1vnq.js";const S={class:"module-content"},D={class:"topic-section"},x={class:"cards-grid"},z={class:"card info"},M={class:"card recommended"},P={class:"event-sandbox"},w={class:"sandbox-body"},A={class:"sandbox-controls"},I={class:"test-elements"},T={key:0},O={class:"event-log"},F={class:"log-container",ref:"logContainer"},B={key:0,class:"log-placeholder"},J={class:"log-badge"},R={class:"log-detail"},$={class:"topic-section"},V={class:"cards-grid"},N={class:"card info"},X={class:"card recommended"},Y={class:"topic-section"},U={class:"cards-grid"},H={class:"card info"},K={class:"topic-section"},Q={class:"cards-grid"},G={class:"card info"},W={class:"card info"},Z={class:"cards-grid"},_={class:"card info"},ee={class:"card info"},ne=h({__name:"EventosJS",setup(ae){const d=m([]),u=m({x:0,y:0});let b=0;const f=o=>["click","dblclick","mousedown","mouseup"].includes(o)?"mouse":["mouseover","mouseout","mousemove"].includes(o)?"hover":["keydown","keyup"].includes(o)?"keyboard":["focus","blur"].includes(o)?"focus":"other",l=(o,e)=>{d.value.unshift({id:++b,event:o,element:e,type:f(o)}),d.value.length>30&&d.value.pop()},E=o=>{const e=o.currentTarget.getBoundingClientRect();u.value={x:Math.round(o.clientX-e.left),y:Math.round(o.clientY-e.top)}},y=()=>{d.value=[]};return(o,e)=>(c(),i("div",S,[e[35]||(e[35]=p('<div class="header-section" data-v-82a30874><h1 class="main-title js" data-v-82a30874>Eventos en JavaScript</h1><p class="subtitle" data-v-82a30874>Mecanismo que permite a JavaScript reaccionar ante las interacciones del usuario y los cambios en el documento.</p></div><section class="topic-section" data-v-82a30874><h2 class="section-title js" data-v-82a30874>¿Qué es un Evento?</h2><p class="section-desc" data-v-82a30874>Un evento es cualquier cosa que puede suceder en el documento o en el navegador: el usuario hace clic en un botón, mueve el cursor, escribe en un campo, la página termina de cargar, etc. JavaScript puede <strong data-v-82a30874>escuchar</strong> estos eventos y ejecutar código en respuesta.</p><div class="cards-grid" data-v-82a30874><div class="card info" data-v-82a30874><div class="card-header" data-v-82a30874><h3 data-v-82a30874>Tipos de Eventos Comunes</h3></div><ul class="def-list" data-v-82a30874><li data-v-82a30874><span class="def-term" data-v-82a30874>Mouse:</span>click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup, mouseleave, mouseenter.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>Teclado:</span>keydown, keyup, keypress (deprecado).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>Formulario:</span> submit, change, input, focus, blur.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>Ventana / Documento:</span> load, DOMContentLoaded, resize, scroll.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>Táctil / Pointer:</span>touchstart, touchend, pointerdown, pointerup.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>Portapapeles:</span>copy, cut, paste.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>Drag &amp; Drop:</span> dragstart, drag, drop, dragover.</li></ul></div><div class="card recommended" data-v-82a30874><div class="card-header" data-v-82a30874><h3 data-v-82a30874>El Objeto Event</h3></div><p data-v-82a30874>Cuando un evento ocurre, el navegador crea automáticamente un <strong data-v-82a30874>objeto Event</strong> con información sobre el suceso y lo pasa como argumento al manejador. Sus propiedades más útiles son:</p><ul class="def-list" data-v-82a30874><li data-v-82a30874><span class="def-term" data-v-82a30874>event.target:</span> El elemento que disparó el evento.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>event.currentTarget:</span> El elemento que tiene registrado el listener (relevante en bubbling).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>event.type:</span> El nombre del evento (ej: <code data-v-82a30874>&quot;click&quot;</code>).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>event.key:</span> La tecla presionada (para eventos de teclado).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>event.clientX / event.clientY:</span> Coordenadas del cursor (para eventos de ratón).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>event.preventDefault():</span> Cancela la acción predeterminada del navegador.</li><li data-v-82a30874><span class="def-term" data-v-82a30874>event.stopPropagation():</span> Detiene la propagación del evento.</li></ul></div></div></section><hr class="divider" data-v-82a30874>',3)),n("section",D,[e[14]||(e[14]=n("h2",{class:"section-title js"},"addEventListener (Método Recomendado)",-1)),e[15]||(e[15]=n("p",{class:"section-desc"},[n("code",null,"addEventListener"),a(" es la forma moderna y flexible de registrar eventos. Permite múltiples manejadores sobre el mismo elemento y ofrece opciones avanzadas de configuración.")],-1)),n("div",x,[n("div",z,[e[8]||(e[8]=n("div",{class:"card-header"},[n("h3",null,"Sintaxis Básica")],-1)),s(r,{language:"javascript",code:`// Sintaxis: element.addEventListener(evento, callback, opciones)
const boton = document.querySelector('#mi-boton');

boton.addEventListener('click', (event) => {
  console.log('¡Click!', event.target); // El botón
});

// Múltiples listeners sobre el mismo elemento y evento
boton.addEventListener('click', () => console.log('Segundo listener'));
boton.addEventListener('mouseover', () => console.log('Mouse encima'));

// Con función declarada (reutilizable)
function manejarClick(e) {
  console.log('Coordenadas:', e.clientX, e.clientY);
}
boton.addEventListener('click', manejarClick);`})]),n("div",M,[e[9]||(e[9]=n("div",{class:"card-header"},[n("h3",null,"Opciones Avanzadas (Tercer Argumento)")],-1)),s(r,{language:"javascript",code:`// El tercer argumento es un objeto de opciones (o booleano legacy)
element.addEventListener('click', handler, {
  // once: true — El listener se elimina automáticamente tras la primera ejecución
  once: true,

  // passive: true — Mejora el rendimiento en eventos de scroll/touch.
  // Al usar passive, NO se puede llamar a event.preventDefault()
  passive: true,

  // capture: true — El listener se ejecuta en fase de captura (antes del bubbling)
  capture: false,
});

// Remover un listener (requiere referencia a la función)
element.removeEventListener('click', manejarClick);

// Los arrow functions anónimos no se pueden remover
// Esto no funciona:
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => console.log('hola'));
btn.removeEventListener('click', () => console.log('hola')); // diferente referencia`})])]),n("div",P,[n("div",{class:"sandbox-header"},[e[10]||(e[10]=n("h4",null,"Sandbox Interactivo",-1)),n("button",{class:"clear-log-btn",onClick:y},"Limpiar Log")]),n("div",w,[n("div",A,[e[12]||(e[12]=n("h5",null,"Área de Prueba — Interactúa con los elementos:",-1)),n("div",I,[n("button",{class:"test-btn",onClick:e[0]||(e[0]=t=>l("click","botón")),onDblclick:e[1]||(e[1]=t=>l("dblclick","botón")),onMouseover:e[2]||(e[2]=t=>l("mouseover","botón")),onMouseout:e[3]||(e[3]=t=>l("mouseout","botón"))}," Haz click / doble click ",32),n("input",{class:"test-input",type:"text",placeholder:"Escribe aquí (keydown)...",onKeydown:e[4]||(e[4]=t=>l("keydown",`tecla '${t.key}'`)),onFocus:e[5]||(e[5]=t=>l("focus","input")),onBlur:e[6]||(e[6]=t=>l("blur","input"))},null,32),n("div",{class:"test-hover-area",onMousemove:e[7]||(e[7]=t=>E(t))},[e[11]||(e[11]=a(" Mueve el mouse aquí (mousemove) ")),u.value.x?(c(),i("span",T,"X: "+v(u.value.x)+", Y: "+v(u.value.y),1)):g("",!0)],32)])]),n("div",O,[e[13]||(e[13]=n("h5",null,"Registro de Eventos:",-1)),n("div",F,[d.value.length===0?(c(),i("div",B," Los eventos que dispares aparecerán aquí... ")):g("",!0),(c(!0),i(j,null,L(d.value,t=>(c(),i("div",{key:t.id,class:q(["log-entry",t.type])},[n("span",J,v(t.event),1),n("span",R,"en "+v(t.element),1)],2))),128))],512)])])])]),e[36]||(e[36]=n("hr",{class:"divider"},null,-1)),n("section",$,[e[19]||(e[19]=n("h2",{class:"section-title js"},"Propagación de Eventos",-1)),e[20]||(e[20]=n("p",{class:"section-desc"},[a("Cuando ocurre un evento en un elemento del DOM, este no se queda allí. Viaja a través del árbol DOM en tres fases: "),n("strong",null,"captura"),a(", "),n("strong",null,"target"),a(" y "),n("strong",null,"burbujeo (bubbling)"),a(".")],-1)),n("div",V,[n("div",N,[e[16]||(e[16]=p('<div class="card-header" data-v-82a30874><h3 data-v-82a30874>Las 3 Fases de un Evento</h3></div><ul class="def-list" data-v-82a30874><li data-v-82a30874><span class="def-term" data-v-82a30874>1. Captura (capture):</span> El evento desciende desde <code data-v-82a30874>document</code> hasta el elemento objetivo. Los listeners en fase de captura se ejecutan primero (usar <code data-v-82a30874>{ capture: true }</code>).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>2. Target:</span> El evento llega al elemento que lo originó (<code data-v-82a30874>event.target</code>).</li><li data-v-82a30874><span class="def-term" data-v-82a30874>3. Burbujeo (bubbling):</span> El evento sube de vuelta desde el elemento objetivo hasta <code data-v-82a30874>document</code>. Es la fase por defecto para los listeners.</li></ul>',2)),s(r,{language:"javascript",code:`document.querySelector('#padre').addEventListener('click', () => {
  console.log('1: Padre (bubbling)'); // Se ejecuta cuando el click burbujea
});

document.querySelector('#hijo').addEventListener('click', (e) => {
  console.log('2: Hijo (target)'); // El que originó el evento
  // Detener que el evento siga subiendo:
  e.stopPropagation();
});

// Con capture: true, el padre se ejecuta primero
document.querySelector('#padre').addEventListener('click', () => {
  console.log('Padre en CAPTURA — se ejecuta antes');
}, { capture: true });`})]),n("div",X,[e[17]||(e[17]=n("div",{class:"card-header"},[n("h3",null,"Delegación de Eventos")],-1)),e[18]||(e[18]=n("p",null,[a("La delegación de eventos es un patrón que aprovecha el burbujeo: en lugar de poner listeners en cada elemento hijo, se pone "),n("strong",null,"uno solo en el padre"),a(". Es más eficiente y funciona incluso con elementos creados dinámicamente.")],-1)),s(r,{language:"javascript",code:`// Ineficiente: un listener por cada item
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', handler);
});

// Delegación: un solo listener en el contenedor padre
const lista = document.querySelector('#mi-lista');

lista.addEventListener('click', (e) => {
  // Filtramos para asegurar que el click fue en un .item
  const item = e.target.closest('.item');
  if (!item) return;

  item.classList.toggle('completado');
  console.log('Item clickeado:', item.dataset.id);
});

// Funciona incluso con items añadidos dinámicamente después
const nuevoItem = document.createElement('li');
nuevoItem.classList.add('item');
nuevoItem.dataset.id = '999';
lista.append(nuevoItem); // Este item también responde al click`})])])]),e[37]||(e[37]=n("hr",{class:"divider"},null,-1)),n("section",Y,[e[22]||(e[22]=n("h2",{class:"section-title js"},"Comportamiento Por Defecto y preventDefault",-1)),e[23]||(e[23]=n("p",{class:"section-desc"},[a("El navegador tiene comportamientos predeterminados para muchos eventos: los enlaces navegan, los formularios se envían y recargan la página, el botón derecho abre el menú contextual, etc. Podemos cancelarlos con "),n("code",null,"event.preventDefault()"),a(".")],-1)),n("div",U,[n("div",H,[e[21]||(e[21]=n("div",{class:"card-header"},[n("h3",null,"Casos de Uso Frecuentes")],-1)),s(r,{language:"javascript",code:`// 1. Prevenir el reenvío de formularios (para manejarlos con JS/fetch)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Sin esto, la página se recargaría
  const data = new FormData(form);
  // fetch('/api/guardar', { method: 'POST', body: data });
});

// 2. Prevenir que un enlace navegue
const link = document.querySelector('a.modal-trigger');
link.addEventListener('click', (e) => {
  e.preventDefault(); // Sin esto, el navegador iría a href
  abrirModal();
});

// 3. Prevenir el menú contextual (botón derecho)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  mostrarMenuPersonalizado(e.clientX, e.clientY);
});

// 4. Bloquear pegar contenido en un campo
input.addEventListener('paste', (e) => {
  e.preventDefault();
  console.log('¡Pegar no está permitido aquí!');
});`})])])]),e[38]||(e[38]=n("hr",{class:"divider"},null,-1)),n("section",K,[e[31]||(e[31]=n("h2",{class:"section-title js"},"Eventos Modernos y Patrones Avanzados",-1)),e[32]||(e[32]=n("p",{class:"section-desc"},"Más allá de los clásicos, JavaScript moderno ofrece eventos especializados y patrones para casos de uso más complejos y con mejor rendimiento.",-1)),n("div",Q,[n("div",G,[e[24]||(e[24]=n("div",{class:"card-header"},[n("h3",null,"IntersectionObserver: Lazy Loading y Animaciones en Scroll")],-1)),e[25]||(e[25]=n("p",null,[a("No es un evento tradicional, pero es el "),n("strong",null,"patrón moderno"),a(" para detectar cuándo un elemento entra o sale del viewport, reemplazando al costoso listener en el evento "),n("code",null,"scroll"),a(".")],-1)),s(r,{language:"javascript",code:`const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // El elemento es visible en el viewport
      entry.target.classList.add('animate-fade-in');
      // Carga una imagen de forma lazy
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(entry.target); // Dejar de observar
    }
  });
}, {
  threshold: 0.1,   // 10% del elemento debe ser visible para disparar
  rootMargin: '50px' // Adelantarse 50px antes de que entre al viewport
});

// Observar todos los elementos que queremos animar
document.querySelectorAll('.lazy-img').forEach(img => {
  observer.observe(img);
});`})]),n("div",W,[e[26]||(e[26]=n("div",{class:"card-header"},[n("h3",null,"CustomEvent: Eventos Personalizados")],-1)),e[27]||(e[27]=n("p",null,"Puedes crear y disparar tus propios eventos para comunicar partes de tu aplicación de forma desacoplada, siguiendo el patrón de publicador/suscriptor.",-1)),s(r,{language:"javascript",code:`// 1. Crear el evento personalizado
const eventoCompra = new CustomEvent('compra-realizada', {
  // bubbles: true — el evento subirá en el DOM
  bubbles: true,
  // detail — datos personalizados que acompañan al evento
  detail: {
    producto: 'Laptop',
    precio: 1200,
    usuario: 'Alex',
  }
});

// 2. Escuchar el evento en cualquier ancestro del DOM
document.addEventListener('compra-realizada', (e) => {
  console.log('¡Compra recibida!');
  console.log(e.detail.producto); // 'Laptop'
  actualizarCarrito(e.detail);
});

// 3. Disparar el evento desde cualquier elemento
const botonComprar = document.querySelector('#btn-comprar');
botonComprar.dispatchEvent(eventoCompra);`})])]),e[33]||(e[33]=n("br",null,null,-1)),e[34]||(e[34]=n("br",null,null,-1)),n("div",Z,[n("div",_,[e[28]||(e[28]=n("div",{class:"card-header"},[n("h3",null,"AbortController: Eliminar Listeners sin Referencia")],-1)),e[29]||(e[29]=n("p",null,[a("A partir de ES2020+, puedes usar un "),n("code",null,"AbortController"),a(" para eliminar múltiples listeners de forma sencilla, sin necesidad de guardar referencias a cada función.")],-1)),s(r,{language:"javascript",code:`const controller = new AbortController();
const { signal } = controller;

// Los listeners reciben signal como opción
document.addEventListener('click', handler1, { signal });
document.addEventListener('keydown', handler2, { signal });
window.addEventListener('resize', handler3, { signal });

// Eliminar TODOS los listeners de una sola vez
controller.abort(); // handler1, handler2 y handler3 son removidos

// Útil cuando el usuario navega a otra sección o cierra un componente`})]),n("div",ee,[e[30]||(e[30]=p('<div class="card-header" data-v-82a30874><h3 data-v-82a30874>Throttle y Debounce</h3></div><p data-v-82a30874>Algunos eventos como <code data-v-82a30874>scroll</code>, <code data-v-82a30874>resize</code> o <code data-v-82a30874>input</code> disparan decenas de veces por segundo. Las técnicas de <strong data-v-82a30874>throttle</strong> y <strong data-v-82a30874>debounce</strong> optimizan esto:</p>',2)),s(r,{language:"javascript",code:`// Debounce: Espera N ms de inactividad antes de ejecutar
// Ideal para búsquedas en tiempo real
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const buscarApi = debounce((termino) => {
  fetch(\`/api/buscar?q=\${termino}\`).then(/* ... */);
}, 500);

document.querySelector('#search').addEventListener('input', (e) => {
  buscarApi(e.target.value); // La API no se llama hasta 500ms después de parar
});

// Throttle: Ejecuta como máximo una vez cada N ms
// Ideal para scroll/resize
function throttle(fn, limit) {
  let enEspera = false;
  return (...args) => {
    if (!enEspera) {
      fn(...args);
      enEspera = true;
      setTimeout(() => { enEspera = false; }, limit);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scroll procesado (máx. 1 vez cada 200ms)');
}, 200));`})])])]),e[39]||(e[39]=n("hr",{class:"divider"},null,-1)),s(k,{references:[{techId:"js",moduleId:"dom",text:"DOM: Selección y Manipulación de Elementos"},{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JavaScript"}]})]))}}),re=C(ne,[["__scopeId","data-v-82a30874"]]);export{re as default};
