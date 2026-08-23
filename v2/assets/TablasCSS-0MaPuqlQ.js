import{C as d}from"./CodeBlock-Bz09fMKf.js";import{R as y}from"./ReferenceSection-BVvaRklu.js";import{d as x,r as p,c as u,b as e,e as l,f as t,i as c,n as r,a as v,F as f,k as g,t as m,o as b,_ as w}from"./index-Bv0jxDU6.js";const C={class:"module-content"},A={class:"topic-section"},k={class:"cards-grid"},S={class:"card info"},E={class:"preview-container"},P={class:"preview-content"},L={class:"btn-toggle-group"},D={class:"demo-table-wrapper"},H={class:"topic-section"},T={class:"cards-grid"},M={class:"card info"},z={class:"card recommended"},q={class:"topic-section"},I={class:"cards-grid"},$={class:"card info"},N={class:"preview-container"},B={class:"preview-content"},V={class:"btn-toggle-group"},R=["onClick"],G={class:"btn-toggle-group"},j=["onClick"],F={class:"demo-table-wrapper"},U={class:"demo-table styled-table"},J={class:"topic-section"},K={class:"cards-grid"},O={class:"topic-section"},Q={class:"cards-grid"},W={class:"card info"},X={class:"card recommended"},Y={class:"topic-section"},Z={class:"cards-grid"},_={class:"card recommended"},ee={class:"card recommended"},ae=x({__name:"TablasCSS",setup(te){const i=p("collapse"),o=p("middle"),s=p("left");return(le,a)=>(b(),u("div",C,[a[34]||(a[34]=e("div",{class:"header-section"},[e("h1",{class:"main-title css"},"Tablas en CSS"),e("p",{class:"subtitle"},"Propiedades para controlar bordes, espaciado, alineacion y el aspecto visual de las tablas HTML.")],-1)),e("section",A,[a[6]||(a[6]=e("h2",{class:"section-title css"},"Bordes de Tabla",-1)),a[7]||(a[7]=e("p",{class:"section-desc"},[t("Las tablas tienen sus propias reglas para los bordes. Por defecto, los bordes de la tabla y de cada celda son independientes, generando un doble borde. La propiedad "),e("code",null,"border-collapse"),t(" controla este comportamiento.")],-1)),e("div",k,[e("div",S,[a[2]||(a[2]=e("div",{class:"card-header"},[e("h3",null,"border-collapse")],-1)),a[3]||(a[3]=e("ul",{class:"def-list"},[e("li",null,[e("span",{class:"def-term"},"separate (por defecto):"),t(" Cada celda tiene su propio borde independiente. El espacio entre bordes se controla con "),e("code",null,"border-spacing"),t(".")]),e("li",null,[e("span",{class:"def-term"},"collapse:"),t(" Los bordes adyacentes se fusionan en uno solo. Es la opcion mas usada para tablas con aspecto limpio.")])],-1)),l(d,{language:"css",code:`/* Los bordes se fusionan en uno solo */
table {
  border-collapse: collapse;
}

/* Los bordes permanecen separados (por defecto) */
table {
  border-collapse: separate;
  border-spacing: 8px;
}`})]),e("div",E,[a[5]||(a[5]=e("div",{class:"preview-header"},"Demo: border-collapse",-1)),e("div",P,[e("div",L,[e("button",{class:c(["demo-btn",{active:i.value==="collapse"}]),onClick:a[0]||(a[0]=n=>i.value="collapse")},"collapse",2),e("button",{class:c(["demo-btn",{active:i.value==="separate"}]),onClick:a[1]||(a[1]=n=>i.value="separate")},"separate",2)]),e("div",D,[e("table",{class:"demo-table",style:r({borderCollapse:i.value,borderSpacing:i.value==="separate"?"6px":"0"})},a[4]||(a[4]=[e("thead",null,[e("tr",null,[e("th",null,"Nombre"),e("th",null,"Casa"),e("th",null,"Materia")])],-1),e("tbody",null,[e("tr",null,[e("td",null,"Harry Potter"),e("td",null,"Gryffindor"),e("td",null,"Defensa")]),e("tr",null,[e("td",null,"Hermione Granger"),e("td",null,"Gryffindor"),e("td",null,"Aritmancia")]),e("tr",null,[e("td",null,"Draco Malfoy"),e("td",null,"Slytherin"),e("td",null,"Pociones")])],-1)]),4)]),l(d,{language:"css",code:`table {
  border-collapse: ${i.value};
${i.value==="separate"?`  border-spacing: 6px;
`:""}}`},null,8,["code"])])])])]),a[35]||(a[35]=e("hr",{class:"divider"},null,-1)),e("section",H,[a[12]||(a[12]=e("h2",{class:"section-title css"},"Ancho y table-layout",-1)),a[13]||(a[13]=e("p",{class:"section-desc"},"El ancho de la tabla y la forma en que el navegador distribuye las columnas son ajustes importantes para controlar el layout.",-1)),e("div",T,[e("div",M,[a[8]||(a[8]=v('<div class="card-header" data-v-8d3054f1><h3 data-v-8d3054f1>padding y width</h3></div><ul class="def-list" data-v-8d3054f1><li data-v-8d3054f1><span class="def-term" data-v-8d3054f1>width:</span> Controla el ancho de la tabla. Usar <code data-v-8d3054f1>100%</code> la hace responsiva al contenedor padre.</li><li data-v-8d3054f1><span class="def-term" data-v-8d3054f1>padding en td/th:</span> Espacio interno de las celdas. Las celdas no aceptan <code data-v-8d3054f1>margin</code>.</li><li data-v-8d3054f1><span class="def-term" data-v-8d3054f1>border-spacing:</span> Espacio entre celdas. Solo funciona con <code data-v-8d3054f1>border-collapse: separate</code>.</li></ul>',2)),l(d,{language:"css",code:`table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
}`})]),e("div",z,[a[9]||(a[9]=e("div",{class:"card-header"},[e("h3",null,"table-layout")],-1)),a[10]||(a[10]=e("p",null,"Controla como el navegador calcula el ancho de las columnas:",-1)),a[11]||(a[11]=e("ul",{class:"def-list"},[e("li",null,[e("span",{class:"def-term"},"auto (defecto):"),t(" El ancho se adapta al contenido. Puede ser lento en tablas grandes.")]),e("li",null,[e("span",{class:"def-term"},"fixed:"),t(" El ancho se calcula a partir de la primera fila. Mas rapido. Ideal con "),e("code",null,"text-overflow: ellipsis"),t(".")])],-1)),l(d,{language:"css",code:`table {
  table-layout: fixed;
  width: 100%;
}

th:nth-child(1) { width: 40%; }
th:nth-child(2) { width: 35%; }
th:nth-child(3) { width: 25%; }

td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}`})])])]),a[36]||(a[36]=e("hr",{class:"divider"},null,-1)),e("section",q,[a[17]||(a[17]=e("h2",{class:"section-title css"},"Alineacion del Texto",-1)),a[18]||(a[18]=e("p",{class:"section-desc"},"La alineacion horizontal y vertical del contenido de las celdas se controla con las mismas propiedades que en cualquier elemento de bloque.",-1)),e("div",I,[e("div",$,[a[14]||(a[14]=v('<div class="card-header" data-v-8d3054f1><h3 data-v-8d3054f1>text-align y vertical-align</h3></div><ul class="def-list" data-v-8d3054f1><li data-v-8d3054f1><span class="def-term" data-v-8d3054f1>text-align:</span> Alineacion horizontal (<code data-v-8d3054f1>left</code>, <code data-v-8d3054f1>center</code>, <code data-v-8d3054f1>right</code>). Por defecto <code data-v-8d3054f1>th</code> usa <code data-v-8d3054f1>center</code> y <code data-v-8d3054f1>td</code> usa <code data-v-8d3054f1>left</code>.</li><li data-v-8d3054f1><span class="def-term" data-v-8d3054f1>vertical-align:</span> Alineacion vertical (<code data-v-8d3054f1>top</code>, <code data-v-8d3054f1>middle</code>, <code data-v-8d3054f1>bottom</code>). Por defecto las celdas usan <code data-v-8d3054f1>middle</code>.</li></ul>',2)),l(d,{language:"css",code:`th { text-align: left; }

td.numero { text-align: right; }

td { vertical-align: top; }

/* Centrar la tabla en la pagina */
table { margin: 0 auto; }`})]),e("div",N,[a[16]||(a[16]=e("div",{class:"preview-header"},"Demo: text-align y vertical-align en celdas",-1)),e("div",B,[e("div",V,[(b(),u(f,null,g(["left","center","right"],n=>e("button",{key:n,class:c(["demo-btn",{active:s.value===n}]),onClick:h=>s.value=n},m(n),11,R)),64))]),e("div",G,[(b(),u(f,null,g(["top","middle","bottom"],n=>e("button",{key:n,class:c(["demo-btn",{active:o.value===n}]),onClick:h=>o.value=n},m(n),11,j)),64))]),e("div",F,[e("table",U,[a[15]||(a[15]=e("thead",null,[e("tr",null,[e("th",null,"Hechizo"),e("th",null,"Descripcion"),e("th",null,"Nivel")])],-1)),e("tbody",null,[e("tr",null,[e("td",{style:r({textAlign:s.value,verticalAlign:o.value})},"Alohomora",4),e("td",{style:r({textAlign:s.value,verticalAlign:o.value,height:"70px"})},"Abre cerraduras comunes que no hayan sido selladas con magia mas fuerte.",4),e("td",{style:r({textAlign:s.value,verticalAlign:o.value})},"Basico",4)]),e("tr",null,[e("td",{style:r({textAlign:s.value,verticalAlign:o.value})},"Expecto Patronum",4),e("td",{style:r({textAlign:s.value,verticalAlign:o.value,height:"70px"})},"Crea un Patronus para repeler Dementores. Requiere pensar en el recuerdo mas feliz del mago.",4),e("td",{style:r({textAlign:s.value,verticalAlign:o.value})},"Avanzado",4)])])])]),l(d,{language:"css",code:`td {
  vertical-align: ${o.value};
  text-align: ${s.value};
}`},null,8,["code"])])])])]),a[37]||(a[37]=e("hr",{class:"divider"},null,-1)),e("section",J,[a[20]||(a[20]=e("h2",{class:"section-title css"},"Diseno Visual Moderno",-1)),a[21]||(a[21]=e("p",{class:"section-desc"},[t("Combinar propiedades CSS permite crear tablas con aspecto profesional: filas alternadas con "),e("code",null,":nth-child"),t(", efectos hover y sombras.")],-1)),e("div",K,[l(d,{language:"css",code:`table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

thead tr {
  background: linear-gradient(135deg, #1e1e3a, #16213e);
}

th {
  padding: 0.85rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #a5b4fc;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  border-bottom: 2px solid rgba(99, 102, 241, 0.3);
}

tbody tr:nth-child(odd)  { background: rgba(15, 15, 30, 0.6); }

tbody tr:nth-child(even) { background: rgba(22, 33, 62, 0.5); }

tbody tr { transition: background-color 0.15s ease; }

tbody tr:hover { background: rgba(99, 102, 241, 0.1); }

td {
  padding: 0.75rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

table td:nth-child(1) {
  font-family: monospace;
  font-size: 0.8rem;
  color: #6ee7b7;
  white-space: nowrap;
}

table tr:first-child td:nth-child(2) {
  text-align: center;
  color: #fcd34d;
  font-weight: 500;
}`}),a[19]||(a[19]=v('<div class="preview-container" data-v-8d3054f1><div class="preview-header" data-v-8d3054f1>Resultado Visual</div><div class="preview-content" data-v-8d3054f1><div class="demo-table-wrapper" data-v-8d3054f1><table class="demo-table premium-table" data-v-8d3054f1><caption class="table-caption" data-v-8d3054f1>Horario — Colegio Hogwarts</caption><thead data-v-8d3054f1><tr data-v-8d3054f1><th data-v-8d3054f1>Hora</th><th data-v-8d3054f1>Lunes</th><th data-v-8d3054f1>Martes</th><th data-v-8d3054f1>Miercoles</th></tr></thead><tbody data-v-8d3054f1><tr data-v-8d3054f1><td data-v-8d3054f1>8:00-9:00</td><td colspan="3" data-v-8d3054f1>Desayuno</td></tr><tr data-v-8d3054f1><td data-v-8d3054f1>9:00-10:00</td><td data-v-8d3054f1>Transformacion</td><td data-v-8d3054f1>Pociones</td><td data-v-8d3054f1>Defensa</td></tr><tr data-v-8d3054f1><td data-v-8d3054f1>10:00-11:00</td><td data-v-8d3054f1>Astronomia</td><td data-v-8d3054f1>Herbologia</td><td data-v-8d3054f1>Encantamientos</td></tr><tr data-v-8d3054f1><td data-v-8d3054f1>11:00-12:00</td><td data-v-8d3054f1>Pociones</td><td data-v-8d3054f1>Defensa</td><td data-v-8d3054f1>Adivinacion</td></tr></tbody></table></div></div></div>',1))])]),a[38]||(a[38]=e("hr",{class:"divider"},null,-1)),e("section",O,[a[26]||(a[26]=e("h2",{class:"section-title css"},"caption y colgroup",-1)),a[27]||(a[27]=e("p",{class:"section-desc"},[t("Dos elementos HTML con propiedades CSS especificas: "),e("code",null,"caption"),t(" para el titulo y "),e("code",null,"colgroup"),t(" para aplicar estilos a columnas completas de forma semantica.")],-1)),e("div",Q,[e("div",W,[a[22]||(a[22]=e("div",{class:"card-header"},[e("h3",null,"caption-side")],-1)),a[23]||(a[23]=e("p",null,[t("El elemento "),e("code",null,"caption"),t(" es el titulo accesible de la tabla. Su posicion se controla con "),e("code",null,"caption-side"),t(".")],-1)),l(d,{language:"css",code:`caption {
  caption-side: top;    /* Por defecto: arriba */
  caption-side: bottom; /* Abajo de la tabla */
  text-align: center;
  font-style: italic;
  color: #888;
  padding: 0.5rem 0;
}`})]),e("div",X,[a[24]||(a[24]=e("div",{class:"card-header"},[e("h3",null,"Estilos por columna con colgroup")],-1)),a[25]||(a[25]=e("p",null,[e("code",null,"colgroup"),t(" aplica estilos a columnas enteras. Solo admite: "),e("code",null,"background-color"),t(", "),e("code",null,"border"),t(", "),e("code",null,"visibility"),t(" y "),e("code",null,"width"),t(".")],-1)),l(d,{language:"html",code:`<table>
  <colgroup>
    <col style="width: 120px; background-color: rgba(99,102,241,0.08);">
    <col span="2">
  </colgroup>
  <thead>
    <tr>
      <th>Hora</th>
      <th>Materia</th>
      <th>Aula</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9:00</td>
      <td>Pociones</td>
      <td>Mazmorras</td>
    </tr>
  </tbody>
</table>`})])])]),a[39]||(a[39]=e("hr",{class:"divider"},null,-1)),e("section",Y,[a[32]||(a[32]=e("h2",{class:"section-title css"},"Tablas Responsivas",-1)),a[33]||(a[33]=e("p",{class:"section-desc"},"Las tablas son dificiles de mostrar en pantallas pequenas. Estas dos estrategias son las mas usadas en proyectos modernos.",-1)),e("div",Z,[e("div",_,[a[28]||(a[28]=e("div",{class:"card-header"},[e("h3",null,"Estrategia 1: Scroll Horizontal")],-1)),a[29]||(a[29]=e("p",null,[t("Envolver la tabla en un contenedor con "),e("code",null,"overflow-x: auto"),t(".")],-1)),l(d,{language:"css",code:`.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-wrapper table {
  min-width: 600px;
}`}),l(d,{language:"html",code:`<div class="table-wrapper">
  <table>...</table>
</div>`})]),e("div",ee,[a[30]||(a[30]=e("div",{class:"card-header"},[e("h3",null,"Estrategia 2: Tabla Apilada (data-label)")],-1)),a[31]||(a[31]=e("p",null,[t("En pantallas pequenas, columnas se convierten en filas apiladas con "),e("code",null,"display: block"),t(" y el atributo "),e("code",null,"data-label"),t(" con "),e("code",null,"::before"),t(".")],-1)),l(d,{language:"css",code:`@media (max-width: 600px) {
  thead { display: none; }

  tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #a5b4fc;
    margin-right: 1rem;
  }
}`}),l(d,{language:"html",code:`<tr>
  <td data-label="Nombre">Harry Potter</td>
  <td data-label="Casa">Gryffindor</td>
  <td data-label="Materia">Defensa</td>
</tr>`})])])]),a[40]||(a[40]=e("hr",{class:"divider"},null,-1)),l(y,{references:[{techId:"html",moduleId:"tablas",text:"Tablas en HTML"},{techId:"css",moduleId:"pseudo",text:"Pseudo Clases & Pseudo Elementos"},{techId:"css",moduleId:"listas",text:"Listas en CSS"}]})]))}}),se=w(ae,[["__scopeId","data-v-8d3054f1"]]);export{se as default};
