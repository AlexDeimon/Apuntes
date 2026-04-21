import{C as d}from"./CodeBlock-DwwTn8f3.js";import{d as l,c as n,b as a,a as e,f as o,e as s,o as i,_ as r}from"./index-CO3Qg19_.js";const c={class:"module-content"},v={class:"topic-section"},u={class:"cards-grid"},p={class:"topic-section"},b={class:"cards-grid"},m={class:"card info"},h={class:"card info"},g={class:"topic-section"},f={class:"cards-grid"},y={class:"topic-section"},T={class:"cards-grid"},w=l({__name:"TablasHTML",setup(C){return(x,t)=>(i(),n("div",c,[t[14]||(t[14]=a("div",{class:"header-section"},[a("h1",{class:"main-title html"},"Tablas"),a("p",{class:"subtitle"},"Estructurando datos bidimensionales de forma clara y accesible.")],-1)),a("section",v,[t[1]||(t[1]=a("h2",{class:"section-title html"},"Estructura Fundamental",-1)),t[2]||(t[2]=a("p",{class:"section-desc"},[o("Las tablas permiten organizar información en filas y columnas. Se definen con la etiqueta "),a("code",null,"<table>"),o(".")],-1)),a("div",u,[t[0]||(t[0]=e('<div class="card info" data-v-1973873d><div class="card-header" data-v-1973873d><h3 data-v-1973873d>Componentes Base</h3></div><ul class="def-list" data-v-1973873d><li data-v-1973873d><span class="def-term" data-v-1973873d>&lt;tr&gt;</span>: Define una fila (Table Row).</li><li data-v-1973873d><span class="def-term" data-v-1973873d>&lt;th&gt;</span>: Define una celda de encabezado (Table Header).</li><li data-v-1973873d><span class="def-term" data-v-1973873d>&lt;td&gt;</span>: Define una celda de datos (Table Data).</li></ul></div>',1)),s(d,{language:"html",code:`<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Diego</td>
    <td>25</td>
  </tr>
</table>`})])]),t[15]||(t[15]=e('<hr class="divider" data-v-1973873d><section class="topic-section" data-v-1973873d><h2 class="section-title html" data-v-1973873d>Organización Semántica</h2><p class="section-desc" data-v-1973873d>Para tablas complejas, es vital usar etiquetas que identifiquen las secciones de la tabla.</p><div class="cards-grid" data-v-1973873d><div class="card info" data-v-1973873d><div class="card-header" data-v-1973873d><h3 data-v-1973873d>Secciones</h3></div><ul class="def-list" data-v-1973873d><li data-v-1973873d><span class="def-term" data-v-1973873d>&lt;thead&gt;</span>: Agrupa el contenido del encabezado.</li><li data-v-1973873d><span class="def-term" data-v-1973873d>&lt;tbody&gt;</span>: Agrupa el cuerpo de la tabla.</li><li data-v-1973873d><span class="def-term" data-v-1973873d>&lt;tfoot&gt;</span>: Agrupa el pie o resumen de la tabla.</li></ul></div><div class="card recommended" data-v-1973873d><div class="card-header" data-v-1973873d><h3 data-v-1973873d>Accesibilidad</h3><span class="badge success" data-v-1973873d>Tip</span></div><p data-v-1973873d>Usar estas etiquetas ayuda a los lectores de pantalla y permite que los encabezados se repitan en impresiones de varias páginas.</p></div></div></section><hr class="divider" data-v-1973873d>',3)),a("section",p,[t[7]||(t[7]=a("h2",{class:"section-title html"},"Combinación de Celdas",-1)),t[8]||(t[8]=a("p",{class:"section-desc"},"Podemos hacer que una celda ocupe varias filas o columnas usando atributos específicos.",-1)),a("div",b,[a("div",m,[t[3]||(t[3]=a("div",{class:"card-header"},[a("h3",null,"Colspan")],-1)),t[4]||(t[4]=a("p",null,"Expande una celda horizontalmente a través de varias columnas.",-1)),s(d,{language:"html",code:`<table>
  <tr>
    <td colspan="2">Celda Ancha</td>
  </tr>
</table>`})]),a("div",h,[t[5]||(t[5]=a("div",{class:"card-header"},[a("h3",null,"Rowspan")],-1)),t[6]||(t[6]=a("p",null,"Expande una celda verticalmente a través de varias filas.",-1)),s(d,{language:"html",code:`<table>
  <tr>
    <td rowspan="2">Celda Alta</td>
  </tr>
</table>`})])])]),t[16]||(t[16]=a("hr",{class:"divider"},null,-1)),a("section",g,[t[10]||(t[10]=a("h2",{class:"section-title html"},"Grupos de Columnas",-1)),t[11]||(t[11]=a("p",{class:"section-desc"},[o("La etiqueta "),a("code",null,"<colgroup>"),o(" permite aplicar estilos o atributos a columnas completas de forma eficiente.")],-1)),a("div",f,[s(d,{language:"html",code:`<table>
  <colgroup>
    <col span='1' style='background-color: blue'>
    <col span='2' style='background-color: yellow'>
  </colgroup>
  <!-- Contenido de la tabla -->
</table>`}),t[9]||(t[9]=e('<div class="preview-content" data-v-1973873d><table style="width:100%;color:black;" data-v-1973873d><colgroup data-v-1973873d><col span="1" style="background-color:var(--color-css);" data-v-1973873d><col span="2" style="background-color:var(--color-js);" data-v-1973873d></colgroup><thead data-v-1973873d><tr data-v-1973873d><th data-v-1973873d>Producto</th><th data-v-1973873d>Categoría</th><th data-v-1973873d>Precio</th></tr></thead><tbody data-v-1973873d><tr data-v-1973873d><td data-v-1973873d>Monitor 4K</td><td data-v-1973873d>Hardware</td><td data-v-1973873d>$350</td></tr><tr data-v-1973873d><td data-v-1973873d>Teclado Mecánico</td><td data-v-1973873d>Periférico</td><td data-v-1973873d>$120</td></tr></tbody><tfoot data-v-1973873d><tr data-v-1973873d><td colspan="2" data-v-1973873d>Total</td><td data-v-1973873d>$470</td></tr></tfoot></table></div>',1))])]),t[17]||(t[17]=a("hr",{class:"divider"},null,-1)),a("section",y,[t[12]||(t[12]=a("h2",{class:"section-title html"},"Demostración Visual",-1)),a("div",T,[s(d,{language:"html",code:`<table class='custom-table'>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Categoría</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monitor 4K</td>
      <td>Hardware</td>
      <td>$350</td>
    </tr>
    <tr>
      <td>Teclado Mecánico</td>
      <td>Periférico</td>
      <td>$120</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan='2'>Total</td>
      <td>$470</td>
    </tr>
  </tfoot>
</table>`}),s(d,{language:"css",code:`.custom-table {
  width: 100%;
  border-collapse: collapse;
  color: #e0e0e0;
  background: #252526;
  border-radius: 8px;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-table thead {
  background-color: #ff4747;
  color: white;
}

.custom-table tfoot {
  background-color: #252526;
  font-weight: bold;
}

.custom-table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.custom-table td:first-child,
.custom-table th:first-child {
  padding-left: 20px;
}

.custom-table td:last-child,
.custom-table th:last-child {
  padding-right: 20px;
}
`})]),t[13]||(t[13]=e('<br data-v-1973873d><br data-v-1973873d><div class="preview-container" data-v-1973873d><div class="preview-header" data-v-1973873d>Tabla Completa Estructurada</div><div class="preview-content" data-v-1973873d><table class="custom-table" data-v-1973873d><thead data-v-1973873d><tr data-v-1973873d><th data-v-1973873d>Producto</th><th data-v-1973873d>Categoría</th><th data-v-1973873d>Precio</th></tr></thead><tbody data-v-1973873d><tr data-v-1973873d><td data-v-1973873d>Monitor 4K</td><td data-v-1973873d>Hardware</td><td data-v-1973873d>$350</td></tr><tr data-v-1973873d><td data-v-1973873d>Teclado Mecánico</td><td data-v-1973873d>Periférico</td><td data-v-1973873d>$120</td></tr></tbody><tfoot data-v-1973873d><tr data-v-1973873d><td colspan="2" data-v-1973873d>Total</td><td data-v-1973873d>$470</td></tr></tfoot></table></div></div>',3))])]))}}),$=r(w,[["__scopeId","data-v-1973873d"]]);export{$ as default};
