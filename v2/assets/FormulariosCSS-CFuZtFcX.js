import{d as g,r as b,h,c,b as e,e as n,f as o,a as t,j as d,t as w,g as v,w as x,o as p,_ as k}from"./index-CbnFgOaN.js";import{C as l}from"./CodeBlock-Da25pLxT.js";import{R as y}from"./ReferenceSection-BK_PKAW_.js";const C={class:"module-content"},E={class:"topic-section"},S={class:"cards-grid"},z={class:"card recommended"},D={class:"preview-container"},F={class:"preview-content"},R={class:"btn-toggle-group"},q={class:"demo-note"},B={class:"topic-section"},L={class:"cards-grid"},P={class:"card info"},j={class:"preview-container"},I={class:"preview-content"},N={class:"btn-toggle-group"},V={class:"input-demo-area"},M={key:0,class:"input-demo-group"},O={key:1,class:"input-demo-group"},T={key:2,class:"input-demo-group"},$={key:3,class:"input-demo-group"},A={class:"topic-section"},U={class:"cards-grid"},G={class:"card info"},H={class:"topic-section"},W={class:"cards-grid"},J={class:"card info"},X={class:"preview-container"},K={class:"preview-content"},Q={class:"btn-toggle-group"},Y={class:"select-demo-wrap"},Z={key:0,class:"select-native"},_={key:1,class:"select-custom-wrap"},ee={class:"topic-section"},ae={class:"cards-grid"},oe={class:"card info"},se={class:"topic-section"},ne={class:"card info"},te={class:"preview-container preview-wide"},de={class:"preview-content"},le={class:"topic-section"},ie={class:"cards-grid"},re={class:"card info"},ce=`select {
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
}`,pe=g({__name:"FormulariosCSS",setup(ue){const u=b("native"),s=b("outline"),i=b("native"),m=h(()=>({outline:`input {
  padding: 0.6rem 0.9rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background: transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
}`,filled:`input {
  padding: 0.6rem 0.9rem;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 8px 8px 0 0;
  background: rgba(79, 70, 229, 0.08);
}

input:focus {
  border-bottom-color: #4f46e5;
  background: rgba(79, 70, 229, 0.12);
}`,underline:`input {
  padding: 0.6rem 0;
  border: none;
  border-bottom: 2px solid #e5e7eb;
  border-radius: 0;
  background: transparent;
}

input:focus {
  border-bottom-color: #4f46e5;
  outline: none;
}`,floating:`/* Floating label requiere :placeholder-shown */
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
}`})[s.value]??"");return(f,a)=>(p(),c("div",C,[a[47]||(a[47]=e("div",{class:"header-section"},[e("h1",{class:"main-title css"},"Formularios en CSS"),e("p",{class:"subtitle"},"Tecnicas modernas para estilizar inputs, selects, textareas y controles de formulario.")],-1)),e("section",E,[a[12]||(a[12]=e("h2",{class:"section-title css"},"Reset y Estilos Base",-1)),a[13]||(a[13]=e("p",{class:"section-desc"},[o("Los navegadores aplican estilos propios ("),e("em",null,"user-agent styles"),o(") a los campos de formulario que difieren entre browsers. El primer paso es normalizar estos estilos antes de aplicar los propios.")],-1)),e("div",S,[e("div",z,[a[9]||(a[9]=t('<div class="card-header" data-v-2cd26991><h3 data-v-2cd26991>Reset de Inputs</h3></div><ul class="def-list" data-v-2cd26991><li data-v-2cd26991><span class="def-term" data-v-2cd26991>appearance: none:</span> Elimina el estilo nativo del navegador.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>box-sizing: border-box:</span> Hace que el padding no desborde el ancho definido.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>outline: none:</span> Elimina el outline de foco por defecto, siempre reemplazandolo con un estilo accesible propio.</li></ul>',2)),n(l,{language:"css",code:`input,
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
}`})]),e("div",D,[a[11]||(a[11]=e("div",{class:"preview-header"},"Demo: Impacto del Reset",-1)),e("div",F,[e("div",R,[e("button",{class:d(["demo-btn",{active:u.value==="native"}]),onClick:a[0]||(a[0]=r=>u.value="native")},"Sin reset",2),e("button",{class:d(["demo-btn",{active:u.value==="reset"}]),onClick:a[1]||(a[1]=r=>u.value="reset")},"Con reset",2)]),e("div",{class:d(["form-demo-box",{"form-reset-applied":u.value==="reset"}])},a[10]||(a[10]=[t('<div class="fdb-row" data-v-2cd26991><label class="fdb-label" data-v-2cd26991>Nombre</label><input type="text" class="fdb-input" placeholder="Tu nombre" data-v-2cd26991></div><div class="fdb-row" data-v-2cd26991><label class="fdb-label" data-v-2cd26991>Pais</label><select class="fdb-input" data-v-2cd26991><option data-v-2cd26991>Mexico</option><option data-v-2cd26991>Colombia</option><option data-v-2cd26991>Argentina</option></select></div><div class="fdb-row" data-v-2cd26991><button class="fdb-btn" data-v-2cd26991>Enviar</button></div>',3)]),2),e("p",q,w(u.value==="native"?"Estilos del navegador (varian por OS/browser)":"Con reset aplicado: fuente heredada, box-sizing normalizado"),1)])])])]),a[48]||(a[48]=e("hr",{class:"divider"},null,-1)),e("section",B,[a[20]||(a[20]=e("h2",{class:"section-title css"},"Estilizar Inputs y Textareas",-1)),a[21]||(a[21]=e("p",{class:"section-desc"},"Los campos de texto son los elementos mas estilizados de un formulario. Las propiedades de borde, fondo, padding y estados de foco son las mas importantes.",-1)),e("div",L,[e("div",P,[a[14]||(a[14]=e("div",{class:"card-header"},[e("h3",null,"Propiedades Principales")],-1)),n(l,{language:"css",code:`input[type='text'],
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
}`})]),e("div",j,[a[19]||(a[19]=e("div",{class:"preview-header"},"Demo: Estilos de Input",-1)),e("div",I,[e("div",N,[e("button",{class:d(["demo-btn",{active:s.value==="outline"}]),onClick:a[2]||(a[2]=r=>s.value="outline")},"Outline",2),e("button",{class:d(["demo-btn",{active:s.value==="filled"}]),onClick:a[3]||(a[3]=r=>s.value="filled")},"Filled",2),e("button",{class:d(["demo-btn",{active:s.value==="underline"}]),onClick:a[4]||(a[4]=r=>s.value="underline")},"Underline",2),e("button",{class:d(["demo-btn",{active:s.value==="floating"}]),onClick:a[5]||(a[5]=r=>s.value="floating")},"Floating Label",2)]),e("div",V,[s.value==="outline"?(p(),c("div",M,a[15]||(a[15]=[e("label",{class:"inp-label"},"Email",-1),e("input",{type:"email",class:"inp inp-outline",placeholder:"usuario@email.com"},null,-1),e("label",{class:"inp-label mt"},"Mensaje",-1),e("textarea",{class:"inp inp-outline",rows:"3",placeholder:"Escribe tu mensaje..."},null,-1)]))):v("",!0),s.value==="filled"?(p(),c("div",O,a[16]||(a[16]=[e("label",{class:"inp-label"},"Email",-1),e("input",{type:"email",class:"inp inp-filled",placeholder:"usuario@email.com"},null,-1),e("label",{class:"inp-label mt"},"Mensaje",-1),e("textarea",{class:"inp inp-filled",rows:"3",placeholder:"Escribe tu mensaje..."},null,-1)]))):v("",!0),s.value==="underline"?(p(),c("div",T,a[17]||(a[17]=[e("label",{class:"inp-label"},"Email",-1),e("input",{type:"email",class:"inp inp-underline",placeholder:"usuario@email.com"},null,-1),e("label",{class:"inp-label mt"},"Mensaje",-1),e("textarea",{class:"inp inp-underline",rows:"3",placeholder:"Escribe tu mensaje..."},null,-1)]))):v("",!0),s.value==="floating"?(p(),c("div",$,a[18]||(a[18]=[t('<div class="float-group" data-v-2cd26991><input type="email" class="inp inp-outline float-input" placeholder=" " id="float-email" data-v-2cd26991><label class="float-label" for="float-email" data-v-2cd26991>Email</label></div><div class="float-group mt" data-v-2cd26991><input type="text" class="inp inp-outline float-input" placeholder=" " id="float-name" data-v-2cd26991><label class="float-label" for="float-name" data-v-2cd26991>Nombre completo</label></div>',2)]))):v("",!0)]),n(l,{language:"css",code:m.value},null,8,["code"])])])])]),a[49]||(a[49]=e("hr",{class:"divider"},null,-1)),e("section",A,[a[24]||(a[24]=e("h2",{class:"section-title css"},"Estados y Pseudoclases de Formulario",-1)),a[25]||(a[25]=e("p",{class:"section-desc"},"CSS proporciona pseudoclases especificas para formularios que permiten estilizar campos segun su estado de validacion, interaccion y valor, sin necesidad de JavaScript.",-1)),e("div",U,[e("div",G,[a[22]||(a[22]=t('<div class="card-header" data-v-2cd26991><h3 data-v-2cd26991>Pseudoclases para Formularios</h3></div><ul class="def-list" data-v-2cd26991><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:focus:</span> El campo tiene el foco. Usar para resaltar el campo activo.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:focus-visible:</span> Como <code data-v-2cd26991>:focus</code> pero solo cuando el foco es visible al teclado (no al click). Mejor para accesibilidad.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:valid / :invalid:</span> El campo supera o falla la validacion HTML5 (required, pattern, type, etc).</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:required / :optional:</span> El campo tiene o no el atributo <code data-v-2cd26991>required</code>.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:disabled / :enabled:</span> El campo esta deshabilitado o habilitado.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:read-only / :read-write:</span> El campo tiene <code data-v-2cd26991>readonly</code> o es editable.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:checked:</span> Checkbox o radio seleccionado.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:placeholder-shown:</span> El placeholder es visible (el campo esta vacio). Clave para floating labels.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>:user-valid / :user-invalid:</span> Como <code data-v-2cd26991>:valid/:invalid</code> pero solo despues de que el usuario interactuo. Evita mostrar errores en campos intactos.</li></ul>',2)),n(l,{language:"css",code:`/* Solo cuando el focus es por teclado */
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
}`})]),a[23]||(a[23]=t('<div class="preview-container" data-v-2cd26991><div class="preview-header" data-v-2cd26991>Demo: Estados de Validacion</div><div class="preview-content" data-v-2cd26991><p class="demo-note" data-v-2cd26991>Interactua con los campos para ver los estados CSS en accion.</p><div class="validation-demo" data-v-2cd26991><div class="vd-row" data-v-2cd26991><label class="inp-label" data-v-2cd26991>Email <span class="req-mark" data-v-2cd26991>*</span></label><input type="email" class="inp inp-outline inp-validate" placeholder="usuario@email.com" required data-v-2cd26991><span class="vd-hint" data-v-2cd26991>Debe ser un email valido</span></div><div class="vd-row" data-v-2cd26991><label class="inp-label" data-v-2cd26991>URL del sitio</label><input type="url" class="inp inp-outline inp-validate" placeholder="https://ejemplo.com" data-v-2cd26991><span class="vd-hint" data-v-2cd26991>Debe comenzar con https://</span></div><div class="vd-row" data-v-2cd26991><label class="inp-label" data-v-2cd26991>Campo deshabilitado</label><input type="text" class="inp inp-outline" value="No editable" disabled data-v-2cd26991></div><div class="vd-row" data-v-2cd26991><label class="inp-label" data-v-2cd26991>Solo lectura</label><input type="text" class="inp inp-outline" value="Solo lectura" readonly data-v-2cd26991></div></div></div></div>',1))])]),a[50]||(a[50]=e("hr",{class:"divider"},null,-1)),e("section",H,[a[30]||(a[30]=e("h2",{class:"section-title css"},"Estilizar Select",-1)),a[31]||(a[31]=e("p",{class:"section-desc"},[o("El elemento "),e("code",null,"<select>"),o(" es uno de los mas dificiles de estilizar porque la lista desplegable ("),e("em",null,"dropdown"),o(") la controla el sistema operativo. Con "),e("code",null,"appearance: none"),o(" se puede tomar control total del elemento trigger.")],-1)),e("div",W,[e("div",J,[a[26]||(a[26]=e("div",{class:"card-header"},[e("h3",null,"Select Personalizado")],-1)),n(l,{language:"css",code:`select {
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns%3D'http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

select:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
}`})]),e("div",X,[a[29]||(a[29]=e("div",{class:"preview-header"},"Demo: Select Nativo vs Personalizado",-1)),e("div",K,[e("div",Q,[e("button",{class:d(["demo-btn",{active:i.value==="native"}]),onClick:a[6]||(a[6]=r=>i.value="native")},"Nativo",2),e("button",{class:d(["demo-btn",{active:i.value==="custom"}]),onClick:a[7]||(a[7]=r=>i.value="custom")},"Personalizado",2)]),e("div",Y,[i.value==="native"?(p(),c("select",Z,a[27]||(a[27]=[e("option",{value:""},"-- Selecciona una opcion --",-1),e("option",null,"Diseño Web",-1),e("option",null,"Desarrollo Frontend",-1),e("option",null,"Desarrollo Backend",-1),e("option",null,"DevOps",-1)]))):v("",!0),i.value==="custom"?(p(),c("div",_,a[28]||(a[28]=[e("select",{class:"select-custom"},[e("option",{value:""},"-- Selecciona una opcion --"),e("option",null,"Diseño Web"),e("option",null,"Desarrollo Frontend"),e("option",null,"Desarrollo Backend"),e("option",null,"DevOps")],-1)]))):v("",!0)]),n(l,{language:"css",code:i.value==="custom"?ce:"/* Sin estilos — apariencia del sistema operativo */"},null,8,["code"])])])])]),a[51]||(a[51]=e("hr",{class:"divider"},null,-1)),e("section",ee,[a[34]||(a[34]=e("h2",{class:"section-title css"},"Checkbox y Radio Personalizados",-1)),a[35]||(a[35]=e("p",{class:"section-desc"},[o("Los checkboxes y radios son los controles mas complejos de estilizar. La tecnica moderna usa "),e("code",null,"appearance: none"),o(" y "),e("code",null,"::before"),o("/"),e("code",null,"::after"),o(" para construir el control completamente en CSS.")],-1)),e("div",ae,[e("div",oe,[a[32]||(a[32]=e("div",{class:"card-header"},[e("h3",null,"Tecnica con appearance: none")],-1)),n(l,{language:"css",code:`/* Checkbox personalizado */
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
}`})]),a[33]||(a[33]=t('<div class="preview-container" data-v-2cd26991><div class="preview-header" data-v-2cd26991>Demo: Controles Personalizados</div><div class="preview-content" data-v-2cd26991><div class="controls-demo" data-v-2cd26991><p class="demo-section-label" data-v-2cd26991>Checkboxes</p><label class="custom-control-label" data-v-2cd26991><input type="checkbox" class="custom-checkbox" checked data-v-2cd26991><span data-v-2cd26991>Opcion seleccionada</span></label><label class="custom-control-label" data-v-2cd26991><input type="checkbox" class="custom-checkbox" data-v-2cd26991><span data-v-2cd26991>Opcion sin seleccionar</span></label><label class="custom-control-label" data-v-2cd26991><input type="checkbox" class="custom-checkbox" disabled data-v-2cd26991><span class="ctrl-disabled" data-v-2cd26991>Deshabilitado</span></label><p class="demo-section-label mt" data-v-2cd26991>Radio Buttons</p><label class="custom-control-label" data-v-2cd26991><input type="radio" class="custom-radio" name="demoRadio" checked data-v-2cd26991><span data-v-2cd26991>Opcion A</span></label><label class="custom-control-label" data-v-2cd26991><input type="radio" class="custom-radio" name="demoRadio" data-v-2cd26991><span data-v-2cd26991>Opcion B</span></label><label class="custom-control-label" data-v-2cd26991><input type="radio" class="custom-radio" name="demoRadio" data-v-2cd26991><span data-v-2cd26991>Opcion C</span></label><p class="demo-section-label mt" data-v-2cd26991>Toggle Switch</p><label class="toggle-label" data-v-2cd26991><input type="checkbox" class="toggle-input" checked data-v-2cd26991><span class="toggle-track" data-v-2cd26991><span class="toggle-thumb" data-v-2cd26991></span></span><span data-v-2cd26991>Notificaciones activas</span></label><label class="toggle-label" data-v-2cd26991><input type="checkbox" class="toggle-input" data-v-2cd26991><span class="toggle-track" data-v-2cd26991><span class="toggle-thumb" data-v-2cd26991></span></span><span data-v-2cd26991>Modo oscuro</span></label></div></div></div>',1))])]),a[52]||(a[52]=e("hr",{class:"divider"},null,-1)),e("section",se,[a[39]||(a[39]=e("h2",{class:"section-title css"},"Formulario Completo Estilizado",-1)),a[40]||(a[40]=e("p",{class:"section-desc"},[o("Un ejemplo real combinando todas las tecnicas: layout con "),e("code",null,"grid"),o(", inputs con estados de foco y validacion, select personalizado, checkbox y boton de submit.")],-1)),e("div",ne,[a[36]||(a[36]=t('<div class="card-header" data-v-2cd26991><h3 data-v-2cd26991>Layout del Formulario</h3></div><ul class="def-list" data-v-2cd26991><li data-v-2cd26991><span class="def-term" data-v-2cd26991>fieldset / legend:</span> Agrupa campos relacionados semanticamente. El <code data-v-2cd26991>legend</code> sirve como titulo del grupo.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>label + input:</span> Siempre asociar cada label con su input via <code data-v-2cd26991>for</code>/<code data-v-2cd26991>id</code> o envolviendolo.</li><li data-v-2cd26991><span class="def-term" data-v-2cd26991>gap en grid/flex:</span> Usar <code data-v-2cd26991>gap</code> para el espaciado entre campos en lugar de margins.</li></ul>',2)),n(l,{language:"css",code:`form {
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
}`})]),a[41]||(a[41]=e("br",null,null,-1)),a[42]||(a[42]=e("br",null,null,-1)),e("div",te,[a[38]||(a[38]=e("div",{class:"preview-header"},"Demo: Formulario de Registro",-1)),e("div",de,[e("form",{class:"demo-form",onSubmit:a[8]||(a[8]=x(()=>{},["prevent"]))},a[37]||(a[37]=[t('<div class="demo-form-row" data-v-2cd26991><div class="demo-form-group" data-v-2cd26991><label class="df-label" for="df-nombre" data-v-2cd26991>Nombre</label><input type="text" id="df-nombre" class="df-input" placeholder="Alex" required data-v-2cd26991></div><div class="demo-form-group" data-v-2cd26991><label class="df-label" for="df-apellido" data-v-2cd26991>Apellido</label><input type="text" id="df-apellido" class="df-input" placeholder="Deimon" required data-v-2cd26991></div></div><div class="demo-form-group" data-v-2cd26991><label class="df-label" for="df-email" data-v-2cd26991>Email <span class="req-mark" data-v-2cd26991>*</span></label><input type="email" id="df-email" class="df-input" placeholder="alex@email.com" required data-v-2cd26991></div><div class="demo-form-group" data-v-2cd26991><label class="df-label" for="df-rol" data-v-2cd26991>Rol</label><div class="df-select-wrap" data-v-2cd26991><select id="df-rol" class="df-select" data-v-2cd26991><option value="" data-v-2cd26991>-- Selecciona tu rol --</option><option data-v-2cd26991>Frontend Developer</option><option data-v-2cd26991>Backend Developer</option><option data-v-2cd26991>Full Stack Developer</option><option data-v-2cd26991>UX Designer</option></select></div></div><div class="demo-form-group" data-v-2cd26991><label class="df-label" for="df-bio" data-v-2cd26991>Biografia</label><textarea id="df-bio" class="df-input df-textarea" rows="3" placeholder="Cuéntanos sobre ti..." data-v-2cd26991></textarea></div><label class="df-check-label" data-v-2cd26991><input type="checkbox" class="df-checkbox" data-v-2cd26991><span data-v-2cd26991>Acepto los terminos y condiciones</span></label><button type="submit" class="df-submit" data-v-2cd26991>Crear Cuenta</button>',6)]),32)])])]),a[53]||(a[53]=e("hr",{class:"divider"},null,-1)),e("section",le,[a[45]||(a[45]=e("h2",{class:"section-title css"},"Botones de Formulario",-1)),a[46]||(a[46]=e("p",{class:"section-desc"},[o("Los botones "),e("code",null,"<button>"),o(" y "),e("code",null,"input[type=submit]"),o(" heredan muy pocos estilos. Es importante resetearlos y construir el estilo desde cero para consistencia entre navegadores.")],-1)),e("div",ie,[e("div",re,[a[43]||(a[43]=e("div",{class:"card-header"},[e("h3",null,"Reset y Estilos de Boton")],-1)),n(l,{language:"css",code:`button,
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
}`})]),a[44]||(a[44]=t('<div class="preview-container" data-v-2cd26991><div class="preview-header" data-v-2cd26991>Demo: Variantes de Boton</div><div class="preview-content" data-v-2cd26991><div class="btn-showcase" data-v-2cd26991><button class="showcase-btn btn-primary-demo" data-v-2cd26991>Primary</button><button class="showcase-btn btn-outline-demo" data-v-2cd26991>Outline</button><button class="showcase-btn btn-ghost-demo" data-v-2cd26991>Ghost</button><button class="showcase-btn btn-danger-demo" data-v-2cd26991>Danger</button><button class="showcase-btn btn-success-demo" data-v-2cd26991>Success</button></div><div class="btn-showcase mt" data-v-2cd26991><button class="showcase-btn btn-primary-demo btn-sm-demo" data-v-2cd26991>Small</button><button class="showcase-btn btn-primary-demo" data-v-2cd26991>Medium</button><button class="showcase-btn btn-primary-demo btn-lg-demo" data-v-2cd26991>Large</button></div><div class="btn-showcase mt" data-v-2cd26991><button class="showcase-btn btn-primary-demo" disabled data-v-2cd26991>Disabled</button><button class="showcase-btn btn-loading-demo" data-v-2cd26991><span class="btn-spinner" data-v-2cd26991></span>Cargando...</button></div></div></div>',1))])]),a[54]||(a[54]=e("hr",{class:"divider"},null,-1)),n(y,{references:[{techId:"css",moduleId:"pseudo",text:"Pseudo Clases y Elementos"},{techId:"css",moduleId:"visual",text:"Efectos Visuales"},{techId:"html",moduleId:"formularios",text:"Formularios HTML"}]})]))}}),fe=k(pe,[["__scopeId","data-v-2cd26991"]]);export{fe as default};
