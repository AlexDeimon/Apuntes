import{C as s}from"./CodeBlock-Jypgjs8g.js";import{R as o}from"./ReferenceSection-D0RBgOmj.js";import{d as l,c,b as e,a as t,e as d,f as n,o as i,_ as r}from"./index-CsKJ5h8g.js";const u={class:"module-content"},v={class:"topic-section"},p={class:"cards-grid"},b={class:"card info"},f={class:"card info"},m={class:"topic-section"},g={class:"cards-grid"},h={class:"card info"},x={class:"card info"},y={class:"card info"},k={class:"topic-section"},E={class:"cards-grid"},S={class:"card info"},P={class:"card info"},w={class:"card info"},q={class:"card info"},C={class:"card info"},I={class:"card info"},j={class:"cards-grid"},R={class:"card info"},D={class:"topic-section"},B={class:"cards-grid"},N={class:"topic-section"},V={class:"cards-grid"},z=l({__name:"PseudoCSS",setup(O){return(T,a)=>(i(),c("div",u,[a[36]||(a[36]=e("div",{class:"header-section"},[e("h1",{class:"main-title css"},"Pseudo-clases & Pseudo-elementos"),e("p",{class:"subtitle"},"Estilizando estados interactivos y partes específicas de un elemento sin modificar el HTML.")],-1)),e("section",v,[a[4]||(a[4]=e("h2",{class:"section-title css"},"Diferencia Principal",-1)),e("div",p,[e("div",b,[a[0]||(a[0]=e("div",{class:"card-header"},[e("h3",null,[n("Pseudo-clases ("),e("code",null,":"),n(")")])],-1)),a[1]||(a[1]=e("p",null,[n("Seleccionan elementos en un "),e("strong",null,"estado específico"),n(" (ej. cuando el ratón pasa por encima, si es el primer hijo, si un checkbox está marcado).")],-1)),d(s,{language:"css",code:`button:hover {
  background-color: #3498db;
}`})]),e("div",f,[a[2]||(a[2]=e("div",{class:"card-header"},[e("h3",null,[n("Pseudo-elementos ("),e("code",null,"::"),n(")")])],-1)),a[3]||(a[3]=e("p",null,[n("Permiten estilizar una "),e("strong",null,"parte específica"),n(" de un elemento (ej. la primera letra, o insertar contenido virtual antes/después del elemento).")],-1)),d(s,{language:"css",code:`p::first-letter {
  font-size: 2em;
  font-weight: bold;
}`})])])]),a[37]||(a[37]=e("hr",{class:"divider"},null,-1)),e("section",m,[a[11]||(a[11]=e("h2",{class:"section-title css"},"Pseudo-clases de Interacción",-1)),e("div",g,[e("div",h,[a[5]||(a[5]=e("div",{class:"card-header"},[e("h3",null,":hover")],-1)),a[6]||(a[6]=e("p",null,"Cuando el cursor está sobre el elemento.",-1)),d(s,{language:"css",code:`.btn:hover {
  background-color: var(--color-css);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}`})]),e("div",x,[a[7]||(a[7]=e("div",{class:"card-header"},[e("h3",null,":active")],-1)),a[8]||(a[8]=e("p",null,"En el momento exacto en que se hace clic (mientras se mantiene pulsado).",-1)),d(s,{language:"css",code:`.btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(52, 152, 219, 0.4);
}`})]),e("div",y,[a[9]||(a[9]=e("div",{class:"card-header"},[e("h3",null,":focus")],-1)),a[10]||(a[10]=e("p",null,"Cuando el elemento recibe el foco (ej. navegando con Tab o al hacer clic en un input).",-1)),d(s,{language:"css",code:`input:focus {
  outline: 3px solid rgba(52, 152, 219, 0.5);
  outline-offset: 2px;
}`})])]),a[12]||(a[12]=e("br",null,null,-1)),a[13]||(a[13]=e("br",null,null,-1)),a[14]||(a[14]=e("div",{class:"preview-container"},[e("div",{class:"preview-header"},"Demo Interactivo"),e("div",{class:"preview-content"},[e("button",{class:"demo-btn"},"Interactúa conmigo"),e("p",null,"Pasa el ratón (hover), haz clic mantenido (active) o navega con Tab (focus).")])],-1))]),a[38]||(a[38]=e("hr",{class:"divider"},null,-1)),e("section",k,[a[29]||(a[29]=e("h2",{class:"section-title css"},"Pseudo-clases de Enlaces y formularios",-1)),e("div",E,[e("div",S,[a[15]||(a[15]=e("div",{class:"card-header"},[e("h3",null,":link y :visited")],-1)),a[16]||(a[16]=e("p",null,"Distingue el estado de los hipervínculos.",-1)),d(s,{language:"css",code:`a:link { color: #ff00ff; }    /* No visitado */
a:visited { color: #dcdcdc; } /* Visitado */`})]),e("div",P,[a[17]||(a[17]=e("div",{class:"card-header"},[e("h3",null,":checked")],-1)),a[18]||(a[18]=e("p",null,[n("Para "),e("code",null,'<input type="checkbox">'),n(" o "),e("code",null,'<input type="radio">'),n(" cuando están seleccionados.")],-1)),d(s,{language:"css",code:`input:checked + label {
  font-weight: bold;
  color: #f8f8ff;
}`})]),e("div",w,[a[19]||(a[19]=e("div",{class:"card-header"},[e("h3",null,":enabled y :disabled")],-1)),a[20]||(a[20]=e("p",null,"Para controlar estados activos/inactivos de inputs.",-1)),d(s,{language:"css",code:`input:disabled {
  background-color: #daa520;
  cursor: not-allowed;
}

input:enabled {
  background-color: #ffd700;
}
`})]),e("div",q,[a[21]||(a[21]=e("div",{class:"card-header"},[e("h3",null,":read-only y :read-write")],-1)),a[22]||(a[22]=e("p",null,"Para controlar estados de solo lectura/escritura de inputs.",-1)),d(s,{language:"css",code:`input:read-only {
  background-color: #808080;
  cursor: not-allowed;
}

input:read-write {
  border: 3px solid #008000;
}`})]),e("div",C,[a[23]||(a[23]=e("div",{class:"card-header"},[e("h3",null,":required y :optional")],-1)),a[24]||(a[24]=e("p",null,"Para controlar estados de inputs requeridos/opcionales.",-1)),d(s,{language:"css",code:`input:required {
  border: 3px solid #adff2f;
}

input:optional {
  border: 3px solid #f0fff0;
}`})]),e("div",I,[a[25]||(a[25]=e("div",{class:"card-header"},[e("h3",null,":valid y :invalid")],-1)),a[26]||(a[26]=e("p",null,"Para controlar estados de inputs válidos/inválidos.",-1)),d(s,{language:"css",code:`input:invalid {
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
}`})]),e("div",j,[e("div",R,[a[27]||(a[27]=e("div",{class:"card-header"},[e("h3",null,":in-range y :out-of-range")],-1)),a[28]||(a[28]=e("p",null,"Para controlar estados de inputs dentro/fuera de rango.",-1)),d(s,{language:"css",code:`input:in-range {
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
`})])])]),a[30]||(a[30]=t('<br data-v-0c4bd01c><br data-v-0c4bd01c><div class="preview-container" data-v-0c4bd01c><div class="preview-content" data-v-0c4bd01c><div data-v-0c4bd01c><a href="https://alexdeimon.github.io/Apuntes/index.html" class="demo-link" data-v-0c4bd01c>Enlace no visitado</a><br data-v-0c4bd01c><br data-v-0c4bd01c><a href="https://google.com" class="demo-link" data-v-0c4bd01c>Enlace visitado</a></div><div data-v-0c4bd01c><input type="checkbox" id="checkbox" class="demo-checkbox" data-v-0c4bd01c> <label for="checkbox" data-v-0c4bd01c>Checkbox</label><br data-v-0c4bd01c><br data-v-0c4bd01c><input type="radio" id="radio" class="demo-radio" data-v-0c4bd01c> <label for="radio" data-v-0c4bd01c>Radio</label><br data-v-0c4bd01c></div><div data-v-0c4bd01c><input type="text" class="demo-input-enabled" placeholder="Habilitado" data-v-0c4bd01c><br data-v-0c4bd01c><input type="text" class="demo-input-disabled" placeholder="Deshabilitado" disabled data-v-0c4bd01c></div><div data-v-0c4bd01c><input type="text" class="demo-input-readonly" placeholder="De solo lectura" readonly data-v-0c4bd01c><br data-v-0c4bd01c><input type="text" class="demo-input-editable" placeholder="Editable" data-v-0c4bd01c></div><div data-v-0c4bd01c><input type="text" class="demo-input-required" placeholder="Requerido" required data-v-0c4bd01c><br data-v-0c4bd01c><input type="text" class="demo-input-optional" placeholder="Opcional" data-v-0c4bd01c></div><div data-v-0c4bd01c><input type="email" class="demo-input-valid" placeholder="Escribe tu email" data-v-0c4bd01c> <label data-v-0c4bd01c></label><br data-v-0c4bd01c><input type="number" class="demo-input-range" min="0" max="10" value="12" data-v-0c4bd01c> <label data-v-0c4bd01c></label></div></div></div>',3))]),e("section",D,[a[32]||(a[32]=t('<h2 class="section-title css" data-v-0c4bd01c>Pseudo-clases Estructurales</h2><div class="cards-grid" data-v-0c4bd01c><div class="card info" data-v-0c4bd01c><div class="card-header" data-v-0c4bd01c><h3 data-v-0c4bd01c>Estructura de elementos hijos</h3></div><ul class="def-list" data-v-0c4bd01c><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:first-child: </span>El primer elemento de su contenedor.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:last-child: </span>El último elemento de su contenedor.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:only-child: </span>Si es el único hijo.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:nth-child(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code data-v-0c4bd01c>odd</code>, <code data-v-0c4bd01c>even</code>).</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:nth-last-child(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code data-v-0c4bd01c>odd</code>, <code data-v-0c4bd01c>even</code>) desde el final.</li></ul></div><div class="card info" data-v-0c4bd01c><div class="card-header" data-v-0c4bd01c><h3 data-v-0c4bd01c>Estructura para elementos de su mismo tipo</h3></div><ul class="def-list" data-v-0c4bd01c><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:first-of-type: </span>El primer elemento de su mismo tipo dentro de su contenedor.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:last-of-type: </span>El último elemento de su mismo tipo dentro de su contenedor.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:nth-of-type(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code data-v-0c4bd01c>odd</code>, <code data-v-0c4bd01c>even</code>) de su mismo tipo dentro de su contenedor.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:nth-last-of-type(): </span>Selecciona según una fórmula matemática (an+b) o palabras clave (<code data-v-0c4bd01c>odd</code>, <code data-v-0c4bd01c>even</code>) desde el final de su mismo tipo dentro de su contenedor.</li></ul></div></div><br data-v-0c4bd01c><br data-v-0c4bd01c>',4)),e("div",B,[d(s,{language:"css",code:`/* primer hijo */
li:first-child { border-left: 4px solid #ff4747; }

/* ultimo hijo */
li:last-child { border-left: 4px solid #f0db4f; }

/* elementos pares */
li:nth-child(even) { background-color: rgba(255, 255, 255, 0.05); }

/* elementos impares */
li:nth-child(odd) { background-color: rgba(0, 0, 0, 0.2); }
`}),a[31]||(a[31]=e("div",{class:"preview-container"},[e("div",{class:"preview-content"},[e("ul",{class:"demo-list"},[e("li",null,"Elemento 1 (:first-child)"),e("li",null,"Elemento 2 (:nth-child(even))"),e("li",null,"Elemento 3 (:nth-child(odd))"),e("li",null,"Elemento 4 (:nth-child(even))"),e("li",null,"Elemento 5 (:last-child)")])])],-1))])]),a[39]||(a[39]=t('<hr class="divider" data-v-0c4bd01c><section class="topic-section" data-v-0c4bd01c><h2 class="section-title css" data-v-0c4bd01c>Otras pseudo-clases</h2><div class="cards-grid" data-v-0c4bd01c><div class="card warning" data-v-0c4bd01c><ul class="def-list" data-v-0c4bd01c><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:not(): </span>Representa elementos que no coinciden con una lista de selectores. Como evita que se seleccionen elementos específicos.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:default: </span>Representa cualquier elemento de formulario que sea el predeterminado entre un grupo de elementos relacionados. Este selector se puede usar en los elementos button, checkbox, radio y option.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:empty: </span>Representa elementos que no tienen hijos (ni siquiera texto o espacios en blanco) ni contenido CSS generado.</li><li data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>:target: </span>Se activa cuando el ID del elemento coincide con el hash de la URL.</li></ul></div></div></section><hr class="divider" data-v-0c4bd01c>',3)),e("section",N,[a[34]||(a[34]=e("h2",{class:"section-title css"},"Pseudo-elementos Destacados",-1)),a[35]||(a[35]=e("p",{class:"section-desc"},[n("Recuerda usar doble dos puntos ("),e("code",null,"::"),n(") aunque los navegadores modernos perdonen usar uno solo por retrocompatibilidad.")],-1)),e("div",V,[a[33]||(a[33]=t('<div class="card info" data-v-0c4bd01c><ul class="def-list" data-v-0c4bd01c><li id="after" data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>::after: </span>Inserta contenido virtual después del contenido real. <strong data-v-0c4bd01c>Obligatorio usar la propiedad <code data-v-0c4bd01c>content</code>.</strong></li><li id="before" data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>::before: </span>Inserta contenido virtual antes del contenido real. <strong data-v-0c4bd01c>Obligatorio usar la propiedad <code data-v-0c4bd01c>content</code>.</strong></li><li id="first-letter" data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>::first-letter: </span>Aplica estilos a la primera letra de un elemento.</li><li id="first-line" data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>::first-line: </span>Aplica estilos a la primera línea de texto de un elemento.</li><li id="marker" data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>::marker: </span>Se aplica a los marcadores de los elementos de lista ( bullets o números).</li><li id="selection" data-v-0c4bd01c><span class="def-term" data-v-0c4bd01c>::selection: </span>Selecciona el texto que ha sido resaltado por el usuario.</li></ul></div>',1)),d(s,{language:"css",code:`#before::before{
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
}`})])]),a[40]||(a[40]=e("hr",{class:"divider"},null,-1)),d(o,{references:[{techId:"css",moduleId:"fundamentos",text:"Selectores CSS Básicos"},{techId:"html",moduleId:"formularios",text:"Formularios (:focus, :invalid)"}]})]))}}),Y=r(z,[["__scopeId","data-v-0c4bd01c"]]);export{Y as default};
