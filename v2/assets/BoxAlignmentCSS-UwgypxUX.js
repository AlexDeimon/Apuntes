import{C as t}from"./CodeBlock-DbAkMvLy.js";import{R as n}from"./ReferenceSection-BG8J8qOZ.js";import{d as l,c as o,a as i,b as d,e as s,f as e,o as v,_ as c}from"./index-B8X3dxf3.js";const r={class:"module-content"},p={class:"topic-section"},m={class:"cards-grid"},f={class:"topic-section"},x={class:"cards-grid"},u={class:"topic-section"},g={class:"cards-grid"},b={class:"topic-section"},y={class:"cards-grid"},h={class:"topic-section"},j={class:"cards-grid"},w={class:"topic-section"},C={class:"cards-grid"},A={class:"topic-section"},E={class:"card recommended"},S={class:"topic-section"},V={class:"cards-grid"},B={class:"card info"},I={class:"card info"},P=l({__name:"BoxAlignmentCSS",setup(k){return(q,a)=>(v(),o("div",r,[a[27]||(a[27]=i('<div class="header-section" data-v-0504d848><h1 class="main-title css" data-v-0504d848>Alineación de Cajas</h1><p class="subtitle" data-v-0504d848>Dominando los ejes y la distribución del espacio.</p></div><section class="topic-section" data-v-0504d848><h2 class="section-title css" data-v-0504d848>Los dos ejes</h2><p class="section-desc" data-v-0504d848>CSS alinea los elementos basándose en dos dimensiones: el <strong data-v-0504d848>eje principal</strong> (inline) y el <strong data-v-0504d848>eje transversal</strong> (block).</p><div class="cards-grid" data-v-0504d848><div class="card info" data-v-0504d848><div class="card-header" data-v-0504d848><h3 data-v-0504d848>Eje Principal (Inline)</h3></div><p data-v-0504d848>Propiedades que comienzan con <code data-v-0504d848>justify-</code>. Controla la alineación horizontal por defecto.</p></div><div class="card info" data-v-0504d848><div class="card-header" data-v-0504d848><h3 data-v-0504d848>Eje Transversal (Block)</h3></div><p data-v-0504d848>Propiedades que comienzan con <code data-v-0504d848>align-</code>. Controla la alineación vertical por defecto.</p></div></div></section><hr class="divider" data-v-0504d848>',3)),d("section",p,[a[1]||(a[1]=d("h2",{class:"section-title css"},"justify-items",-1)),a[2]||(a[2]=d("p",{class:"section-desc"},"Alinea los elementos dentro de una línea en el eje principal.",-1)),d("div",m,[a[0]||(a[0]=i('<div class="card info" data-v-0504d848><div class="card-header" data-v-0504d848><h3 data-v-0504d848>Valores Comunes</h3></div><ul class="def-list" data-v-0504d848><li data-v-0504d848><span class="def-term" data-v-0504d848>start / flex-start:</span> Alinea al inicio. <div class="demo-box grid justify-item-start" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>end / flex-end:</span> Alinea al final. <div class="demo-box grid justify-item-end" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>center:</span> Centra los elementos. <div class="demo-box grid justify-item-center" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>stretch:</span> Estira los elementos para llenar el contenedor. <div class="demo-box grid justify-item-stretch" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li></ul></div>',1)),s(t,{language:"css",code:`.container1 {
  display: grid;
  justify-items: start;
}

.container2 {
  display: grid;
  justify-items: end;
}

.container3 {
  display: grid;
  justify-items: center;
}

.container4 {
  display: grid;
  justify-items: stretch;
}`})])]),a[28]||(a[28]=d("hr",{class:"divider"},null,-1)),d("section",f,[a[4]||(a[4]=d("h2",{class:"section-title css"},"justify-self",-1)),a[5]||(a[5]=d("p",{class:"section-desc"},"Es lo mismo que justify-items pero para un solo elemento. Se aplica al elemento hijo.",-1)),d("div",x,[a[3]||(a[3]=i('<div class="card info" data-v-0504d848><div class="card-header" data-v-0504d848><h3 data-v-0504d848>Valores Comunes</h3></div><ul class="def-list" data-v-0504d848><li data-v-0504d848><span class="def-term" data-v-0504d848>start:</span> Alinea al inicio.</li><li data-v-0504d848><span class="def-term" data-v-0504d848>end:</span> Alinea al final.</li><li data-v-0504d848><span class="def-term" data-v-0504d848>center:</span> Centra los elementos. <div class="demo-box grid" data-v-0504d848><div class="item justify-self-start" data-v-0504d848>box 1</div><div class="item justify-self-center" data-v-0504d848>box 2</div><div class="item justify-self-end" data-v-0504d848>box 3</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>stretch:</span> Estira los elementos para llenar el contenedor. <div class="demo-box grid" data-v-0504d848><div class="item justify-self-stretch" data-v-0504d848>box 4</div></div></li></ul></div>',1)),s(t,{language:"css",code:`.item1 {
  justify-self: start;
}

.item2 {
  justify-self: center;
}

.item3 {
  justify-self: end;
}

.item4 {
  justify-self: stretch;
}`})])]),a[29]||(a[29]=d("hr",{class:"divider"},null,-1)),d("section",u,[a[7]||(a[7]=d("h2",{class:"section-title css"},"justify-content",-1)),a[8]||(a[8]=d("p",{class:"section-desc"},"Distribuye el espacio extra a lo largo del eje principal.",-1)),d("div",g,[a[6]||(a[6]=i('<div class="card info" data-v-0504d848><h3 data-v-0504d848>Valores Comunes</h3><ul class="def-list" data-v-0504d848><li data-v-0504d848><span class="def-term" data-v-0504d848>flex-start / start:</span> Al principio. <div class="demo-box flex justify-content-start" data-v-0504d848><div class="item" data-v-0504d848>box 1</div><div class="item" data-v-0504d848>box 2</div><div class="item" data-v-0504d848>box 3</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>center:</span> Centrado. <div class="demo-box flex justify-content-center" data-v-0504d848><div class="item" data-v-0504d848>box 1</div><div class="item" data-v-0504d848>box 2</div><div class="item" data-v-0504d848>box 3</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>flex-end / end:</span> Al final. <div class="demo-box flex justify-content-end" data-v-0504d848><div class="item" data-v-0504d848>box 1</div><div class="item" data-v-0504d848>box 2</div><div class="item" data-v-0504d848>box 3</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>space-between:</span> Espacio entre elementos. <div class="demo-box flex justify-content-between" data-v-0504d848><div class="item" data-v-0504d848>box 1</div><div class="item" data-v-0504d848>box 2</div><div class="item" data-v-0504d848>box 3</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>space-around:</span> Espacio alrededor. <div class="demo-box flex justify-content-around" data-v-0504d848><div class="item" data-v-0504d848>box 1</div><div class="item" data-v-0504d848>box 2</div><div class="item" data-v-0504d848>box 3</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>space-evenly:</span> Espacio equitativo. <div class="demo-box flex justify-content-evenly" data-v-0504d848><div class="item" data-v-0504d848>box 1</div><div class="item" data-v-0504d848>box 2</div><div class="item" data-v-0504d848>box 3</div></div></li></ul></div>',1)),s(t,{language:"css",code:`.container1 {
  display: flex;
  justify-content: start;
}

.container2 {
  display: flex;
  justify-content: center;
}

.container3 {
  display: flex;
  justify-content: end;
}

.container4 {
  display: flex;
  justify-content: space-between;
}

.container5 {
  display: flex;
  justify-content: space-around;
}

.container6 {
  display: flex;
  justify-content: space-evenly;
}`})])]),a[30]||(a[30]=d("hr",{class:"divider"},null,-1)),d("section",b,[a[10]||(a[10]=d("h2",{class:"section-title css"},"align-items",-1)),a[11]||(a[11]=d("p",{class:"section-desc"},"Controla cómo se alinean los elementos dentro de una línea en el eje transversal.",-1)),d("div",y,[a[9]||(a[9]=i('<div class="card info" data-v-0504d848><h3 data-v-0504d848>Valores Comunes</h3><ul class="def-list" data-v-0504d848><li data-v-0504d848><span class="def-term" data-v-0504d848>start / flex-start:</span> Alineación superior. <div class="demo-box h-150 flex align-items-start" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>center:</span> Centrado vertical. <div class="demo-box h-150 flex align-items-center" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>end / flex-end:</span> Alineación inferior. <div class="demo-box h-150 flex align-items-end" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>stretch:</span> Estira los elementos para llenar el contenedor. <div class="demo-box h-150 flex align-items-stretch" data-v-0504d848><div class="item" data-v-0504d848>box</div></div></li></ul></div>',1)),s(t,{language:"css",code:`.container1 {
  display: flex;
  align-items: start;
  min-height: 150px;
}

.container2 {
  display: flex;
  align-items: center;
  min-height: 150px;
}

.container3 {
  display: flex;
  align-items: end;
  min-height: 150px;
}

.container4 {
  display: flex;
  align-items: stretch;
  min-height: 150px;
}`})])]),a[31]||(a[31]=d("hr",{class:"divider"},null,-1)),d("section",h,[a[13]||(a[13]=d("h2",{class:"section-title css"},"align-self",-1)),a[14]||(a[14]=d("p",{class:"section-desc"},[e("Permite anular la propiedad "),d("code",null,"align-items"),e(" para un elemento individual.")],-1)),d("div",j,[a[12]||(a[12]=i('<div class="card info" data-v-0504d848><h3 data-v-0504d848>Valores Comunes</h3><ul class="def-list" data-v-0504d848><li data-v-0504d848><span class="def-term" data-v-0504d848>start / flex-start:</span> Alineación superior.</li><li data-v-0504d848><span class="def-term" data-v-0504d848>center:</span> Centrado vertical.</li><li data-v-0504d848><span class="def-term" data-v-0504d848>end / flex-end:</span> Alineación inferior. <div class="demo-box flex h-150" data-v-0504d848><div class="item align-self-start" data-v-0504d848>start</div><div class="item align-self-center" data-v-0504d848>center</div><div class="item align-self-end" data-v-0504d848>end</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>stretch:</span> Estira los elementos para llenar el contenedor. <div class="demo-box align-items-stretch flex h-150" data-v-0504d848><div class="item" data-v-0504d848>stretch</div></div></li></ul></div>',1)),s(t,{language:"css",code:`.container {
  display: flex;
  align-items: center;
  height: 150px;
}

.item-1 { align-self: start; }
.item-2 { align-self: center; }
.item-3 { align-self: end; }
.item-4 { align-self: stretch; }`})])]),a[32]||(a[32]=d("hr",{class:"divider"},null,-1)),d("section",w,[a[16]||(a[16]=d("h2",{class:"section-title css"},"align-content",-1)),a[17]||(a[17]=d("p",{class:"section-desc"},[e("Alinea las líneas de contenido cuando hay varias filas (como en "),d("code",null,"flex-wrap: wrap"),e(").")],-1)),d("div",C,[a[15]||(a[15]=i('<div class="card info" data-v-0504d848><h3 data-v-0504d848>Valores Comunes</h3><ul class="def-list" data-v-0504d848><li data-v-0504d848><span class="def-term" data-v-0504d848>flex-start:</span> Líneas al principio. <div class="demo-box flex flex-wrap align-content-start h-300 gap-2" data-v-0504d848><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>center:</span> Líneas al centro. <div class="demo-box flex flex-wrap align-content-center h-300 gap-2" data-v-0504d848><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>end / flex-end:</span> Líneas al final. <div class="demo-box flex flex-wrap align-content-end h-300 gap-2" data-v-0504d848><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>space-between:</span> Espacio entre líneas. <div class="demo-box flex flex-wrap align-content-between h-300 gap-2" data-v-0504d848><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>space-around:</span> Espacio alrededor de las líneas. <div class="demo-box flex flex-wrap align-content-around h-300 gap-2" data-v-0504d848><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div></div></li><li data-v-0504d848><span class="def-term" data-v-0504d848>space-evenly:</span> Espacio uniforme entre líneas. <div class="demo-box flex flex-wrap align-content-evenly h-300 gap-2" data-v-0504d848><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div><div class="item flex-40" data-v-0504d848>box</div></div></li></ul></div>',1)),s(t,{language:"css",code:`.container1 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 300px;
}

.container2 {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 300px;
}

.container3 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  height: 300px;
}

.container4 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 300px;
}

.container5 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height: 300px;
}

.container6 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
  height: 300px;
}`})])]),a[33]||(a[33]=d("hr",{class:"divider"},null,-1)),d("section",A,[a[19]||(a[19]=d("h2",{class:"section-title css"},"Propiedad Gap",-1)),a[20]||(a[20]=d("p",{class:"section-desc"},"La forma moderna de añadir separación entre elementos sin usar márgenes laterales complicados. Funciona en Flexbox y Grid.",-1)),d("div",E,[a[18]||(a[18]=i('<div class="card-header" data-v-0504d848><h3 data-v-0504d848>Sintaxis Gap</h3><span class="badge success" data-v-0504d848>Moderno</span></div><div class="demo-box gap-demo" data-v-0504d848><div class="item" data-v-0504d848>Gap</div><div class="item" data-v-0504d848>de</div><div class="item" data-v-0504d848>20px</div></div>',2)),s(t,{language:"css",code:`.container {
  display: flex;
  gap: 20px; /* row-gap y column-gap */
}`})])]),a[34]||(a[34]=d("hr",{class:"divider"},null,-1)),d("section",S,[a[25]||(a[25]=d("h2",{class:"section-title css"},"Atajos (Shorthands)",-1)),a[26]||(a[26]=d("p",{class:"section-desc"},"Existen propiedades que combinan ambos ejes para un código más limpio.",-1)),d("div",V,[d("div",B,[a[21]||(a[21]=d("div",{class:"card-header"},[d("h3",null,"place-items")],-1)),a[22]||(a[22]=d("p",null,[e("Combina "),d("code",null,"align-items"),e(" y "),d("code",null,"justify-items"),e(".")],-1)),s(t,{language:"css",code:`.container {
  place-items: center;
}`})]),d("div",I,[a[23]||(a[23]=d("div",{class:"card-header"},[d("h3",null,"place-content")],-1)),a[24]||(a[24]=d("p",null,[e("Combina "),d("code",null,"align-content"),e(" y "),d("code",null,"justify-content"),e(".")],-1)),s(t,{language:"css",code:`.container {
  place-content: center center;
}`})])])]),s(n,{references:[{techId:"css",moduleId:"boxmodel",text:"Modelo de Caja"},{techId:"css",moduleId:"position",text:"Posicionamiento"}]})]))}}),z=c(P,[["__scopeId","data-v-0504d848"]]);export{z as default};
