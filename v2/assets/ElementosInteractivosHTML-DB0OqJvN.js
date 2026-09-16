import{d as h,r as v,c as m,b as d,a as i,e as s,f as t,g as y,t as S,w as C,o as g,_ as w}from"./index-Cl7SRf-B.js";import{C as n}from"./CodeBlock-2kVtg3uu.js";import{R as M}from"./ReferenceSection-DOgwaU6M.js";const k={class:"module-content"},E={class:"topic-section"},A={class:"cards-grid"},q={class:"topic-section"},x={class:"cards-grid"},P={class:"card recommended"},I={class:"cards-grid"},T={class:"preview-container"},B={class:"preview-content demo-dialog-area"},D={class:"dialog-buttons"},N={key:0,class:"dialog-result"},L={class:"dialog-inner"},V={class:"dialog-actions"},j={method:"dialog"},H={class:"dialog-actions"},J={class:"topic-section"},O=h({__name:"ElementosInteractivosHTML",setup(R){const r=v(null),c=v(null),l=v("");function p(o){var a,e;l.value="",o==="simple"?(a=r.value)==null||a.show():(e=c.value)==null||e.showModal()}function b(o,a){var e;(e=r.value)==null||e.close(a),l.value=a}function u(o){setTimeout(()=>{l.value=o},50)}function f(o){const a=c.value;if(!a)return;const e=a.getBoundingClientRect();(o.clientX<e.left||o.clientX>e.right||o.clientY<e.top||o.clientY>e.bottom)&&(a.close("backdrop"),l.value="backdrop (clic fuera)")}return(o,a)=>(g(),m("div",k,[a[24]||(a[24]=d("div",{class:"header-section"},[d("h1",{class:"main-title html"},"Elementos Interactivos"),d("p",{class:"subtitle"},"Acordeones, modales y popovers nativos sin escribir JavaScript.")],-1)),d("section",E,[a[7]||(a[7]=i('<h2 class="section-title html" data-v-5c4d1d96>&lt;details&gt; y &lt;summary&gt;</h2><p class="section-desc" data-v-5c4d1d96>Permiten crear un widget de acordeón (colapsable) de forma completamente nativa. El elemento <code data-v-5c4d1d96>&lt;details&gt;</code> es el contenedor que puede abrirse o cerrarse, y <code data-v-5c4d1d96>&lt;summary&gt;</code> es el encabezado visible que actúa como disparador del clic.</p><div class="cards-grid" data-v-5c4d1d96><div class="card info" data-v-5c4d1d96><div class="card-header" data-v-5c4d1d96><h3 data-v-5c4d1d96>Atributos de &lt;details&gt;</h3></div><ul class="def-list" data-v-5c4d1d96><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>open</span>: Atributo booleano. Cuando está presente, el detalle se muestra expandido por defecto.</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>name</span>: Permite agrupar múltiples <code data-v-5c4d1d96>&lt;details&gt;</code> para que solo uno pueda estar abierto a la vez (comportamiento de acordeón exclusivo). Soporte en navegadores modernos.</li></ul></div><div class="card recommended" data-v-5c4d1d96><div class="card-header" data-v-5c4d1d96><h3 data-v-5c4d1d96>¿Cuándo usarlo?</h3><span class="badge success" data-v-5c4d1d96>Buenas prácticas</span></div><ul class="list" data-v-5c4d1d96><li data-v-5c4d1d96>Secciones de preguntas frecuentes (FAQ).</li><li data-v-5c4d1d96>Notas adicionales o información complementaria.</li><li data-v-5c4d1d96>Menús de navegación secundarios colapsables.</li><li data-v-5c4d1d96>Glosarios o definiciones expandibles.</li></ul></div></div><br data-v-5c4d1d96>',4)),d("div",A,[s(n,{language:"html",code:`<!-- Básico: cerrado por defecto -->
<details>
  <summary>¿Qué es HTML?</summary>
  <p>HTML es el lenguaje de marcado estándar para crear páginas web.</p>
</details>

<!-- Abierto por defecto con el atributo "open" -->
<details open>
  <summary>Ver más información</summary>
  <p>Este contenido es visible desde el inicio porque tiene el atributo open.</p>
</details>

<!-- Grupo exclusivo con "name" (solo uno abierto a la vez) -->
<details name="faq">
  <summary>Pregunta 1</summary>
  <p>Respuesta a la pregunta 1.</p>
</details>
<details name="faq">
  <summary>Pregunta 2</summary>
  <p>Respuesta a la pregunta 2.</p>
</details>`}),a[6]||(a[6]=i('<div class="card info" data-v-5c4d1d96><div class="card-header" data-v-5c4d1d96><h3 data-v-5c4d1d96>Demo en vivo</h3></div><div class="demo-details" data-v-5c4d1d96><details class="custom-details" data-v-5c4d1d96><summary class="custom-summary" data-v-5c4d1d96>¿Qué es HTML?</summary><div class="details-content" data-v-5c4d1d96><p data-v-5c4d1d96>HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el significado del contenido web.</p></div></details><details class="custom-details" open data-v-5c4d1d96><summary class="custom-summary" data-v-5c4d1d96>¿Para qué sirve CSS?</summary><div class="details-content" data-v-5c4d1d96><p data-v-5c4d1d96>CSS (Cascading Style Sheets) es el lenguaje que controla el estilo visual de las páginas: colores, fuentes, layouts, animaciones y más.</p></div></details><details class="custom-details" data-v-5c4d1d96><summary class="custom-summary" data-v-5c4d1d96>¿Qué hace JavaScript?</summary><div class="details-content" data-v-5c4d1d96><p data-v-5c4d1d96>JavaScript es el lenguaje de programación del navegador. Permite añadir interactividad dinámica a las páginas web.</p></div></details></div></div>',1))])]),a[25]||(a[25]=d("hr",{class:"divider"},null,-1)),d("section",q,[a[17]||(a[17]=d("h2",{class:"section-title html"},"<dialog>",-1)),a[18]||(a[18]=d("p",{class:"section-desc"},[t("El elemento "),d("code",null,"<dialog>"),t(" representa una ventana de diálogo o modal nativa del navegador. Elimina la necesidad de librerías externas para crear modales, maneja el foco del teclado automáticamente y el backdrop de forma nativa.")],-1)),d("div",x,[a[10]||(a[10]=i('<div class="card info" data-v-5c4d1d96><div class="card-header" data-v-5c4d1d96><h3 data-v-5c4d1d96>Métodos y Atributos</h3></div><ul class="def-list" data-v-5c4d1d96><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>open</span>: Atributo booleano que indica si el diálogo está visible. <strong data-v-5c4d1d96>No lo uses directamente</strong>, usa los métodos JS para controlarlo.</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>.show()</span>: Abre el diálogo como un elemento normal (sin backdrop ni bloqueo de foco).</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>.showModal()</span>: Abre el diálogo como un modal real. Bloquea el resto de la página, muestra un backdrop nativo y atrapa el foco del teclado.</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>.close()</span>: Cierra el diálogo. Puede recibir un valor <code data-v-5c4d1d96>returnValue</code> opcional.</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>returnValue</span>: Propiedad que guarda el valor con el que se cerró el diálogo (útil con formularios internos).</li></ul></div>',1)),d("div",P,[a[8]||(a[8]=d("div",{class:"card-header"},[d("h3",null,"Cerrar haciendo clic en el Backdrop"),d("span",{class:"badge success"},"Truco")],-1)),a[9]||(a[9]=d("p",null,[t("El elemento "),d("code",null,"<dialog>"),t(" no cierra automáticamente al hacer clic en el fondo. Para implementarlo, escucha el evento "),d("code",null,"click"),t(" en el dialog y compara si el clic ocurrió fuera del contenido.")],-1)),s(n,{language:"js",code:`dialog.addEventListener('click', (e) => {
  const rect = dialog.getBoundingClientRect()
  const isOutside = (
    e.clientX < rect.left || e.clientX > rect.right ||
    e.clientY < rect.top  || e.clientY > rect.bottom
  )
  if (isOutside) dialog.close()
})`})])]),a[19]||(a[19]=d("br",null,null,-1)),d("div",I,[s(n,{language:"html",code:`<!-- Estructura HTML del dialog -->
<dialog id="miModal">
  <h2>Título del Modal</h2>
  <p>Contenido del modal...</p>
  <form method="dialog">
    <!-- method="dialog" hace que el botón cierre el dialog automáticamente -->
    <button value="cancelar">Cancelar</button>
    <button value="confirmar">Confirmar</button>
  </form>
</dialog>

<!-- Botón para abrirlo -->
<button id="abrirModal">Abrir Modal</button>`}),s(n,{language:"js",code:`// Referenciamos los elementos
const dialog = document.getElementById('miModal')
const btnAbrir = document.getElementById('abrirModal')

// Abrimos como modal (recomendado)
btnAbrir.addEventListener('click', () => {
  dialog.showModal()
})

// Escuchamos cuando se cierra para saber el resultado
dialog.addEventListener('close', () => {
  console.log('Se cerró con:', dialog.returnValue)
  // returnValue será 'cancelar' o 'confirmar'
})`})]),a[20]||(a[20]=d("br",null,null,-1)),d("div",T,[a[16]||(a[16]=d("div",{class:"preview-header"},"Demo en vivo — <dialog>",-1)),d("div",B,[d("div",D,[d("button",{class:"btn-demo",onClick:a[0]||(a[0]=e=>p("simple"))},"Abrir Dialog (.show)"),d("button",{class:"btn-demo btn-primary",onClick:a[1]||(a[1]=e=>p("modal"))},"Abrir Modal (.showModal)")]),l.value?(g(),m("p",N,[a[11]||(a[11]=t("Resultado del cierre: ")),d("strong",null,S(l.value),1)])):y("",!0),d("dialog",{ref_key:"simpleDialog",ref:r,class:"custom-dialog"},[d("div",L,[a[12]||(a[12]=d("h3",null,"Dialog Simple (.show)",-1)),a[13]||(a[13]=d("p",null,"Este dialog se abre sin bloquear la página. Puedes interactuar con el contenido de atrás.",-1)),d("div",V,[d("button",{class:"btn-demo",onClick:a[2]||(a[2]=e=>b("simpleDialog","cerrado"))},"Cerrar")])])],512),d("dialog",{ref_key:"modalDialog",ref:c,class:"custom-dialog",onClick:f},[d("div",{class:"dialog-inner",onClick:a[5]||(a[5]=C(()=>{},["stop"]))},[a[14]||(a[14]=d("h3",null,"Modal Nativo (.showModal)",-1)),a[15]||(a[15]=d("p",null,[t("Este es un modal real. Bloquea la página, atrapa el foco del teclado y muestra un backdrop nativo. Presiona "),d("kbd",null,"Esc"),t(" para cerrar.")],-1)),d("form",j,[d("div",H,[d("button",{class:"btn-demo",value:"cancelar",onClick:a[3]||(a[3]=e=>u("cancelar"))},"Cancelar"),d("button",{class:"btn-demo btn-primary",value:"confirmar",onClick:a[4]||(a[4]=e=>u("confirmar"))},"Confirmar")])])])],512)])])]),a[26]||(a[26]=d("hr",{class:"divider"},null,-1)),d("section",J,[a[21]||(a[21]=i('<h2 class="section-title html" data-v-5c4d1d96>Popover API</h2><p class="section-desc" data-v-5c4d1d96>Introducida en 2023, la <strong data-v-5c4d1d96>Popover API</strong> es una forma nativa de crear tooltips, menús desplegables, notificaciones y paneles flotantes <strong data-v-5c4d1d96>sin ningún JavaScript</strong>. Solo necesitas dos atributos HTML. </p><div class="cards-grid" data-v-5c4d1d96><div class="card recommended" data-v-5c4d1d96><div class="card-header" data-v-5c4d1d96><h3 data-v-5c4d1d96>Atributos clave</h3><span class="badge success" data-v-5c4d1d96>Sin JS</span></div><ul class="def-list" data-v-5c4d1d96><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>popover</span>: Se coloca en el elemento flotante. Lo saca del flujo normal y lo posiciona en el top layer (sobre todo lo demás). Valores: <code data-v-5c4d1d96>auto</code> (cierra al hacer clic fuera) o <code data-v-5c4d1d96>manual</code> (solo cierra con JS).</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>popovertarget</span>: Se coloca en el botón/disparador. Su valor debe coincidir con el <code data-v-5c4d1d96>id</code> del elemento con <code data-v-5c4d1d96>popover</code>.</li><li data-v-5c4d1d96><span class="def-term" data-v-5c4d1d96>popovertargetaction</span>: Opcional. Controla la acción al hacer clic: <code data-v-5c4d1d96>toggle</code> (por defecto), <code data-v-5c4d1d96>show</code> o <code data-v-5c4d1d96>hide</code>.</li></ul></div><div class="card info" data-v-5c4d1d96><div class="card-header" data-v-5c4d1d96><h3 data-v-5c4d1d96>Ventajas sobre soluciones con JS</h3></div><ul class="list" data-v-5c4d1d96><li data-v-5c4d1d96>Se renderiza en el &quot;top layer&quot;: nunca queda tapado por otros elementos (no hay problemas de <code data-v-5c4d1d96>z-index</code>).</li><li data-v-5c4d1d96>El modo <code data-v-5c4d1d96>auto</code> cierra automáticamente al hacer clic fuera o presionar <kbd data-v-5c4d1d96>Esc</kbd>.</li><li data-v-5c4d1d96>Accesible por defecto: gestiona atributos ARIA automáticamente.</li><li data-v-5c4d1d96>Compatible con animaciones CSS con <code data-v-5c4d1d96>@starting-style</code>.</li></ul></div></div>',3)),s(n,{language:"html",code:`<!-- 1. El disparador: apunta al id del popover -->
<button popovertarget="mi-popover">
  Mostrar Popover
</button>

<!-- 2. El popover: necesita un id y el atributo popover -->
<div id="mi-popover" popover>
  <p>¡Soy un popover nativo!</p>
  <p>Se cierra al hacer clic fuera o presionar Esc.</p>
</div>

<!-- Variante: control manual con show/hide separados -->
<button popovertarget="info" popovertargetaction="show">Mostrar</button>
<button popovertarget="info" popovertargetaction="hide">Ocultar</button>
<div id="info" popover="manual">Contenido informativo</div>`}),s(n,{language:"css",code:`/* Estilizar el popover */
[popover] {
  padding: 1rem 1.5rem;
  border: 1px solid #444;
  border-radius: 8px;
  background: #1e1e1e;
  color: #e0e0e0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

/* Animación de entrada con @starting-style */
[popover] {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s, transform 0.2s, display 0.2s allow-discrete;
}

[popover]:not(:popover-open) {
  opacity: 0;
  transform: scale(0.95);
}

@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scale(0.95);
  }
}`}),a[22]||(a[22]=d("br",null,null,-1)),a[23]||(a[23]=d("div",{class:"preview-container"},[d("div",{class:"preview-header"},"Demo en vivo — Popover API (sin JavaScript)"),d("div",{class:"preview-content demo-popover-area"},[d("div",{class:"popover-demo-row"},[d("button",{popovertarget:"popover-basic",class:"btn-demo"},"Tooltip Simple"),d("div",{id:"popover-basic",popover:"",class:"custom-popover"},[d("p",null,"¡Soy un popover nativo! Haz clic fuera para cerrarme.")]),d("button",{popovertarget:"popover-menu",class:"btn-demo btn-primary"},"Menú Desplegable"),d("div",{id:"popover-menu",popover:"",class:"custom-popover popover-menu"},[d("ul",null,[d("li",null,"📁 Nuevo archivo"),d("li",null,"✏️ Editar"),d("li",null,"🗑️ Eliminar"),d("li",null,"⚙️ Configuración")])]),d("button",{popovertarget:"popover-manual",popovertargetaction:"show",class:"btn-demo"},"Mostrar"),d("button",{popovertarget:"popover-manual",popovertargetaction:"hide",class:"btn-demo"},"Ocultar"),d("div",{id:"popover-manual",popover:"manual",class:"custom-popover"},[d("p",null,'Popover manual: solo se cierra con el botón "Ocultar".')])])])],-1))]),a[27]||(a[27]=i('<hr class="divider" data-v-5c4d1d96><section class="topic-section" data-v-5c4d1d96><h2 class="section-title html" data-v-5c4d1d96>¿Cuándo usar cada uno?</h2><div class="preview-container" data-v-5c4d1d96><div class="preview-header" data-v-5c4d1d96>Tabla Comparativa</div><div class="preview-content" data-v-5c4d1d96><table class="compare-table" data-v-5c4d1d96><thead data-v-5c4d1d96><tr data-v-5c4d1d96><th data-v-5c4d1d96>Elemento</th><th data-v-5c4d1d96>Caso de uso ideal</th><th data-v-5c4d1d96>Bloquea página</th><th data-v-5c4d1d96>JS requerido</th></tr></thead><tbody data-v-5c4d1d96><tr data-v-5c4d1d96><td data-v-5c4d1d96><code data-v-5c4d1d96>&lt;details&gt;</code></td><td data-v-5c4d1d96>FAQs, acordeones, notas colapsables</td><td data-v-5c4d1d96>❌ No</td><td data-v-5c4d1d96>❌ No</td></tr><tr data-v-5c4d1d96><td data-v-5c4d1d96><code data-v-5c4d1d96>&lt;dialog&gt; .show()</code></td><td data-v-5c4d1d96>Paneles secundarios, tooltips complejos</td><td data-v-5c4d1d96>❌ No</td><td data-v-5c4d1d96>✅ Sí (mínimo)</td></tr><tr data-v-5c4d1d96><td data-v-5c4d1d96><code data-v-5c4d1d96>&lt;dialog&gt; .showModal()</code></td><td data-v-5c4d1d96>Confirmaciones, alertas, formularios modales</td><td data-v-5c4d1d96>✅ Sí</td><td data-v-5c4d1d96>✅ Sí (mínimo)</td></tr><tr data-v-5c4d1d96><td data-v-5c4d1d96><code data-v-5c4d1d96>popover</code> auto</td><td data-v-5c4d1d96>Tooltips, menús contextuales, notificaciones</td><td data-v-5c4d1d96>❌ No</td><td data-v-5c4d1d96>❌ No</td></tr><tr data-v-5c4d1d96><td data-v-5c4d1d96><code data-v-5c4d1d96>popover</code> manual</td><td data-v-5c4d1d96>Onboarding guiado, tutoriales paso a paso</td><td data-v-5c4d1d96>❌ No</td><td data-v-5c4d1d96>✅ Sí (para disparar)</td></tr></tbody></table></div></div></section><hr class="divider" data-v-5c4d1d96>',3)),s(M,{references:[{techId:"html",moduleId:"formularios",text:"Formularios HTML"},{techId:"html",moduleId:"enlaces",text:"Atributo target en enlaces"},{techId:"js",moduleId:"dom",text:"DOM: Manipulación de elementos"},{techId:"js",moduleId:"eventos",text:"Eventos JavaScript"}]})]))}}),Y=w(O,[["__scopeId","data-v-5c4d1d96"]]);export{Y as default};
