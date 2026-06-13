import{C as o}from"./CodeBlock-u67px4Mj.js";import{R as t}from"./ReferenceSection-Bb6N1q3Z.js";import{d as c,c as r,b as a,e as s,f as d,a as n,o as i,_ as l}from"./index-DU1ObqqD.js";const v={class:"module-content"},u={class:"topic-section"},f={class:"cards-grid"},p={class:"topic-section"},m={class:"cards-grid"},b={class:"topic-section"},x={class:"cards-grid"},g={class:"topic-section"},h=c({__name:"EnlacesCSS",setup(w){return(E,e)=>(i(),r("div",v,[e[10]||(e[10]=a("div",{class:"header-section"},[a("h1",{class:"main-title css"},"Enlaces y Punteros"),a("p",{class:"subtitle"},"Estilización avanzada de hipervínculos, estados interactivos y cursores del ratón.")],-1)),a("section",u,[e[1]||(e[1]=a("h2",{class:"section-title css"},"Estados de un Enlace (Pseudo-clases)",-1)),e[2]||(e[2]=a("p",{class:"section-desc"},[d("Los hipervínculos ("),a("code",null,"<a>"),d(") son interactivos por naturaleza y pueden presentar diferentes estilos dependiendo de la interacción del usuario. Para estilizarlos de forma individual, usamos "),a("strong",null,"pseudo-clases"),d(".")],-1)),a("div",f,[e[0]||(e[0]=n('<div class="card info" data-v-310c55df><div class="card-header" data-v-310c55df><h3 data-v-310c55df>Orden &quot;LoVe HAte&quot;</h3></div><p data-v-310c55df>Al definir estilos para enlaces, el orden en tu CSS es <strong data-v-310c55df>estrictamente importante</strong> debido a la especificidad. Se debe seguir la regla mnemotécnica <strong data-v-310c55df>LVHA</strong>:</p><ul class="def-list" data-v-310c55df><li data-v-310c55df><span class="def-term" data-v-310c55df>:link</span> (L) - Enlaces normales (no visitados).</li><li data-v-310c55df><span class="def-term" data-v-310c55df>:visited</span> (V) - Enlaces que el usuario ya ha visitado.</li><li data-v-310c55df><span class="def-term" data-v-310c55df>:hover</span> (H) - Cuando el cursor está sobre el enlace.</li><li data-v-310c55df><span class="def-term" data-v-310c55df>:active</span> (A) - En el momento exacto en que se hace clic.</li></ul><div class="preview-container" data-v-310c55df><div class="preview-header" data-v-310c55df>Demo Interactivo: Estados del Enlace</div><div class="preview-content" data-v-310c55df><a href="javascript:void(0)" class="demo-link default" data-v-310c55df>Enlace Interactivo (Pasa el cursor / Clica)</a></div></div></div>',1)),a("div",null,[s(o,{language:"css",code:`/* 1. No visitado */
.demo-link.default {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s, transform 0.1s;
}

/* 2. Visitado */
.demo-link.default:visited {
  color: #8b5cf6;
}

/* 3. Mouse sobre el enlace */
.demo-link.default:hover {
  color: #60a5fa;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* 4. Clickeado */
.demo-link.default:active {
  color: #ef4444;
  transform: scale(0.95);
}`})])])]),e[11]||(e[11]=a("hr",{class:"divider"},null,-1)),a("section",p,[e[4]||(e[4]=a("h2",{class:"section-title css"},"Decoración de Texto (text-decoration)",-1)),e[5]||(e[5]=a("p",{class:"section-desc"},[d("Por defecto, los navegadores subrayan los enlaces. La propiedad "),a("code",null,"text-decoration"),d(" nos permite manipular estas líneas o eliminarlas.")],-1)),a("div",m,[e[3]||(e[3]=n('<div class="preview-container" data-v-310c55df><div class="preview-header" data-v-310c55df>Demo: text-decoration</div><div class="preview-content" data-v-310c55df><div class="decoration-item" data-v-310c55df><span class="dec-none" data-v-310c55df>text-decoration: none;</span><small data-v-310c55df>Sin decoración (ideal para botones)</small></div><div class="decoration-item" data-v-310c55df><span class="dec-underline" data-v-310c55df>text-decoration: underline;</span><small data-v-310c55df>Subrayado (por defecto en enlaces)</small></div><div class="decoration-item" data-v-310c55df><span class="dec-overline" data-v-310c55df>text-decoration: overline;</span><small data-v-310c55df>Línea superior</small></div><div class="decoration-item" data-v-310c55df><span class="dec-line-through" data-v-310c55df>text-decoration: line-through;</span><small data-v-310c55df>Tachado</small></div><div class="decoration-item" data-v-310c55df><span class="dec-wavy" data-v-310c55df>text-decoration: underline wavy red;</span><small data-v-310c55df>Subrayado ondulado (y color)</small></div></div></div>',1)),s(o,{language:"css",code:`.dec-none {
  text-decoration: none;
}

.dec-underline {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.dec-overline {
  text-decoration: overline;
}

.dec-line-through {
  text-decoration: line-through;
}

.dec-wavy {
  text-decoration: underline wavy #ef4444;
  text-underline-offset: 6px;
}`})])]),e[12]||(e[12]=a("hr",{class:"divider"},null,-1)),a("section",b,[e[7]||(e[7]=a("h2",{class:"section-title css"},"Cursores (cursor)",-1)),e[8]||(e[8]=a("p",{class:"section-desc"},[d("La propiedad "),a("code",null,"cursor"),d(" especifica el tipo de cursor del ratón que se muestra cuando el puntero está sobre un elemento. Es crucial para dar feedback al usuario sobre qué elementos son interactivos.")],-1)),a("div",x,[e[6]||(e[6]=n('<div class="preview-container cursors-demo" data-v-310c55df><div class="preview-header" data-v-310c55df>Demo: Cursores comunes</div><div class="preview-content cursor-grid" data-v-310c55df><div class="cursor-box cursor-default" data-v-310c55df><code data-v-310c55df>default</code></div><div class="cursor-box cursor-pointer" data-v-310c55df><code data-v-310c55df>pointer</code></div><div class="cursor-box cursor-text" data-v-310c55df><code data-v-310c55df>text</code></div><div class="cursor-box cursor-move" data-v-310c55df><code data-v-310c55df>move</code></div><div class="cursor-box cursor-not-allowed" data-v-310c55df><code data-v-310c55df>not-allowed</code></div><div class="cursor-box cursor-help" data-v-310c55df><code data-v-310c55df>help</code></div><div class="cursor-box cursor-wait" data-v-310c55df><code data-v-310c55df>wait</code></div><div class="cursor-box cursor-crosshair" data-v-310c55df><code data-v-310c55df>crosshair</code></div><div class="cursor-box cursor-grab" data-v-310c55df><code data-v-310c55df>grab</code></div><div class="cursor-box cursor-grabbing" data-v-310c55df><code data-v-310c55df>grabbing</code></div></div></div>',1)),s(o,{language:"css",code:`.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-text {
  cursor: text;
}

.cursor-move {
  cursor: move;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.cursor-help {
  cursor: help;
}

.cursor-wait {
  cursor: wait;
}

.cursor-crosshair {
  cursor: crosshair;
}

.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}`})])]),e[13]||(e[13]=a("hr",{class:"divider"},null,-1)),a("section",g,[e[9]||(e[9]=n('<h2 class="section-title css" data-v-310c55df>Enlaces como Botones</h2><p class="section-desc" data-v-310c55df>Una práctica muy común es estilizar las etiquetas <code data-v-310c55df>&lt;a&gt;</code> para que parezcan botones. Esto se logra combinando <code data-v-310c55df>text-decoration: none</code>, padding, background-color y border-radius.</p><div class="preview-container" data-v-310c55df><div class="preview-header" data-v-310c55df>Demo: De enlace a botón</div><div class="preview-content btn-demo-container" data-v-310c55df><a href="javascript:void(0)" class="btn-custom" data-v-310c55df>Continuar leyendo ➔</a></div></div>',3)),s(o,{language:"css",code:`.btn-custom {
  /* Quitar estilos de enlace por defecto */
  text-decoration: none;

  /* Dar forma de botón */
  display: inline-block;
  padding: 10px 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  font-weight: 600;

  /* Transición suave para el hover */
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}`})]),e[14]||(e[14]=a("hr",{class:"divider"},null,-1)),s(t,{references:[{techId:"html",moduleId:"enlaces",text:"Etiqueta HTML de Enlaces"},{techId:"css",moduleId:"pseudo",text:"Pseudo-clases avanzadas"}]})]))}}),S=l(h,[["__scopeId","data-v-310c55df"]]);export{S as default};
