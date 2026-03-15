import{C as s}from"./CodeBlock-BN6MCOzy.js";import{d,c as t,a as l,b as n,e as a,f as o,o as i,_ as r}from"./index-CfnIEtSZ.js";const p={class:"module-content"},b={class:"topic-section"},m={class:"cards-grid"},c={class:"card info"},v={class:"card info"},u={class:"cards-grid"},x={class:"card info"},g={class:"card info"},f={class:"topic-section"},E={class:"cards-grid"},y={class:"card warning"},q={class:"card recommended"},w={class:"topic-section"},k={class:"cards-grid"},C={class:"card info"},S={class:"card info"},j={class:"cards-grid"},B={class:"card info"},L={class:"card info"},M=d({__name:"BoxModelCSS",setup(h){return(P,e)=>(i(),t("div",p,[e[45]||(e[45]=l('<div class="header-section" data-v-e47b30b6><h1 class="main-title css" data-v-e47b30b6>Box Model</h1><p class="subtitle" data-v-e47b30b6>El concepto fundamental del diseño en CSS</p></div><section class="topic-section" data-v-e47b30b6><h2 class="section-title css" data-v-e47b30b6>¿Qué es el Modelo de Caja?</h2><p class="section-desc" data-v-e47b30b6>En CSS, <strong data-v-e47b30b6>todo es una caja</strong>. Todos los elementos HTML son tratados como cajas rectangulares por el navegador. El &quot;Modelo de Caja&quot; describe cómo se calculan las dimensiones de estas cajas.</p><div class="preview-container box-demo-container" data-v-e47b30b6><div class="preview-header" data-v-e47b30b6>Representación Visual</div><div class="box-model-visual" data-v-e47b30b6><div class="box-margin" data-v-e47b30b6><span class="label" data-v-e47b30b6>Margin (Margen)</span><div class="box-border" data-v-e47b30b6><span class="label" data-v-e47b30b6>Border (Borde)</span><div class="box-padding" data-v-e47b30b6><span class="label" data-v-e47b30b6>Padding (Relleno)</span><div class="box-content" data-v-e47b30b6><span class="label" data-v-e47b30b6>Content (Contenido)</span><p data-v-e47b30b6>Aquí va el texto, imágenes, etc.</p></div></div></div></div></div></div></section><hr class="divider" data-v-e47b30b6>',3)),n("section",b,[e[16]||(e[16]=n("h2",{class:"section-title css"},"Las 4 Capas",-1)),e[17]||(e[17]=n("p",{class:"section-desc"},"El modelo de caja se compone de cuatro capas principales que rodean el contenido de un elemento. Las propiedades CSS que definen cada capa son las siguientes:",-1)),n("div",m,[n("div",c,[e[0]||(e[0]=n("div",{class:"card-header"},[n("h3",null,"1. Content"),n("span",{class:"badge info"},"Interno")],-1)),e[1]||(e[1]=n("p",null,[o("Es el contenido real del elemento (texto, imagen, video). Sus dimensiones se definen con "),n("code",null,"width"),o(" y "),n("code",null,"height"),o(".")],-1)),e[2]||(e[2]=n("p",null,"Dichas propiedades no se aplican a los elementos en línea, ya que estos se adaptan siempre al contenido.",-1)),a(s,{language:"css",code:` /* Elemento de bloque */
div {
  width: 100px;
  height: 100px;
}

/* Elemento en línea (width y height no hacen efecto) */
span {
  width: 100px;
  height: 100px;
}`}),e[3]||(e[3]=n("p",{class:"block-element"},"Elemento de bloque",-1)),e[4]||(e[4]=n("span",{class:"inline-element"},"Elemento en línea",-1))]),n("div",v,[e[5]||(e[5]=n("div",{class:"card-header"},[n("h3",null,"2. Padding"),n("span",{class:"badge info"},"Relleno")],-1)),e[6]||(e[6]=n("p",null,[o("Espacio transparente alrededor del contenido, "),n("strong",null,"dentro"),o(" del borde. Toma el color de fondo del elemento.")],-1)),a(s,{language:"css",code:`/* por separado */
.box-internal-1 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}

/* shorthand */
.box-internal-2 {
  padding: 10px 20px 30px 40px; /* top, right, bottom, left */
}

.box-internal-3 {
  padding: 10px 20px 30px; /* top, right/left, bottom */
}

.box-internal-4 {
  padding: 10px 20px; /* top/bottom, right/left */
}

.box-external {
  padding: 20px; /* todos los lados */
}
`}),e[7]||(e[7]=l('<div class="demo-box" data-v-e47b30b6><div class="box-external" data-v-e47b30b6><div class="box-internal-1" data-v-e47b30b6>box 1</div><div class="box-internal-2" data-v-e47b30b6>box 2</div><div class="box-internal-3" data-v-e47b30b6>box 3</div><div class="box-internal-4" data-v-e47b30b6>box 4</div></div><p class="text-muted" data-v-e47b30b6>Pasa el mouse por encima de los cuadrados para ver los rellenos</p></div>',1))])]),e[18]||(e[18]=n("br",null,null,-1)),e[19]||(e[19]=n("br",null,null,-1)),n("div",u,[n("div",x,[e[8]||(e[8]=l('<div class="card-header" data-v-e47b30b6><h3 data-v-e47b30b6>3. Border</h3><span class="badge info" data-v-e47b30b6>Límite</span></div><p data-v-e47b30b6>Línea que rodea el padding y el contenido. Está compuesta por 4 propiedades: <code data-v-e47b30b6>border-width</code>, <code data-v-e47b30b6>border-style</code>, <code data-v-e47b30b6>border-color</code> y <code data-v-e47b30b6>border-radius</code>.</p><p data-v-e47b30b6>Las primeras tres son obligatorias para que el borde se muestre y se pueden definir por separado o de forma conjunta.</p><p data-v-e47b30b6>La propiedad <code data-v-e47b30b6>border-radius</code> se utiliza para redondear las esquinas del borde.</p>',4)),a(s,{language:"css",code:`/* por separado */
.box-border-1 {
  border-width: 5px; /* todos los lados */
  border-style: solid dashed; /* top/bottom, right/left */
  border-color: #ffebcd #0000ff #8a2be2 #a52a2a; /* top, right/left, bottom */
  border-radius: 10px 20px 30px 40px; /* top, right, bottom, left */
}

/* de forma conjunta */
.box-border-2 {
  border: 5px solid #5f9ea0;
  border-radius: 20px;
}

/* por lados */
.box-border-3 {
  border-top: 5px solid #7fff00;
  border-right: 10px groove #d2691e;
  border-bottom: 15px ridge #ff7f50;
  border-left: 20px double #6495ed;
}`}),e[9]||(e[9]=n("div",{class:"demo-box"},[n("div",{class:"box box-border-1"},"box 1"),n("div",{class:"box box-border-2"},"box 2"),n("div",{class:"box box-border-3"},"box 3")],-1))]),n("div",g,[e[10]||(e[10]=n("div",{class:"card-header"},[n("h3",null,"4. Margin"),n("span",{class:"badge info"},"Externo")],-1)),e[11]||(e[11]=n("p",null,[o("Espacio transparente "),n("strong",null,"fuera"),o(" del borde. Separa el elemento de sus vecinos. Los márgenes verticales pueden colapsar.")],-1)),e[12]||(e[12]=n("p",null,"Los elementos en línea no tienen margen vertical.",-1)),e[13]||(e[13]=n("p",null,"Los márgenes verticales de dos elementos adyacentes se colapsan en uno solo.",-1)),e[14]||(e[14]=n("p",null,"Los márgenes horizontales de dos elementos adyacentes no se colapsan.",-1)),a(s,{language:"css",code:`/* Colapso de márgenes */
.margin-1 {
  margin-top: 20px;
  margin-right: 40px;
  margin-bottom: 60px;
}

.margin-2 {
  margin: 20px 40px 60px; /* el 20px del top se cancela ya que el margin-bottom del elemento anterior es 60px*/
}

.margin-3 {
  margin: 20px 40px; /* solo se aplica el 40px a los lados */
}

.margin-4 {
  margin: 10px 20px 30px; /* solo se aplica el 20px a los lados */
}

/* las margenes de los lados de los elementos 3 y 4 no se colapsan */
`}),e[15]||(e[15]=l('<div class="demo-box demo-box-margin" data-v-e47b30b6><div class="box margin-1" data-v-e47b30b6>Elemento 1</div><div class="box margin-2" data-v-e47b30b6>Elemento 2</div><br data-v-e47b30b6><span class="margin-3" data-v-e47b30b6>Elemento 3</span><span class="margin-4" data-v-e47b30b6>Elemento 4</span><p class="text-muted" data-v-e47b30b6>Pasa el mouse por encima de los elementos para ver las márgenes</p></div>',1))])])]),e[46]||(e[46]=n("hr",{class:"divider"},null,-1)),n("section",f,[e[26]||(e[26]=n("h2",{class:"section-title css"},"Propiedad Box-Sizing",-1)),e[27]||(e[27]=n("p",{class:"section-desc"},"Define cómo se calculan el ancho y alto total del elemento. Esto es crucial para un diseño predecible.",-1)),n("div",E,[n("div",y,[e[20]||(e[20]=n("div",{class:"card-header"},[n("h3",null,"content-box"),n("span",{class:"badge danger"},"Default")],-1)),e[21]||(e[21]=n("p",null,[o("El "),n("code",null,"width"),o(" solo aplica al contenido. Si añades padding o borde, el tamaño total del elemento "),n("strong",null,"crece"),o(".")],-1)),a(s,{language:"css",code:`.box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  /* Ancho real: 240px */
}`}),e[22]||(e[22]=n("div",{class:"math-box"},"Ancho Total = width + padding + border",-1))]),n("div",q,[e[23]||(e[23]=n("div",{class:"card-header"},[n("h3",null,"border-box"),n("span",{class:"badge success"},"Recomendado")],-1)),e[24]||(e[24]=n("p",null,[o("El "),n("code",null,"width"),o(" incluye el contenido, el padding y el borde. El navegador reduce el espacio del contenido para ajustar todo al ancho especificado.")],-1)),a(s,{language:"css",code:`* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;
  /* Ancho real: 200px */
}`}),e[25]||(e[25]=n("div",{class:"math-box success"},"Ancho Total = width (Fijo)",-1))])])]),e[47]||(e[47]=n("hr",{class:"divider"},null,-1)),n("section",w,[e[41]||(e[41]=n("h2",{class:"section-title css"},"Propiedad: Display",-1)),e[42]||(e[42]=n("p",{class:"section-desc"},"Define cómo se comporta el elemento en el flujo de la página. Determina si es un elemento en bloque, en línea o en línea-block.",-1)),n("div",k,[n("div",C,[e[28]||(e[28]=n("div",{class:"card-header"},[n("h3",null,"none")],-1)),e[29]||(e[29]=n("p",null,"El elemento no se muestra en el flujo de la página. No ocupa espacio.",-1)),a(s,{language:"css",code:`.box {
  display: none;
}`})]),n("div",S,[e[30]||(e[30]=n("div",{class:"card-header"},[n("h3",null,"block")],-1)),e[31]||(e[31]=n("p",null,"El elemento se muestra como un bloque. Ocupa todo el ancho disponible. Aunque tengan un ancho declarado, el próximo elemento se mostrará en una nueva línea.",-1)),a(s,{language:"css",code:`.box {
  display: block;
}`}),e[32]||(e[32]=n("p",{class:"block-element"},"Elemento de bloque",-1)),e[33]||(e[33]=n("p",{class:"block-element"},"Elemento de bloque",-1))])]),e[43]||(e[43]=n("br",null,null,-1)),e[44]||(e[44]=n("br",null,null,-1)),n("div",j,[n("div",B,[e[34]||(e[34]=n("div",{class:"card-header"},[n("h3",null,"inline")],-1)),e[35]||(e[35]=n("p",null,"El elemento se muestra como un elemento en línea. Ocupa solo el ancho necesario. El próximo elemento se muestra en la misma línea si el espacio disponible lo permite.",-1)),a(s,{language:"css",code:`.box {
  display: inline;
}`}),e[36]||(e[36]=n("span",{class:"inline-element"},"Elemento en línea",-1)),e[37]||(e[37]=n("span",{class:"inline-element"},"Elemento en línea",-1))]),n("div",L,[e[38]||(e[38]=n("div",{class:"card-header"},[n("h3",null,"inline-block")],-1)),e[39]||(e[39]=n("p",null,"El elemento se muestra como un elemento en línea, ocupa solo el ancho necesario pero permite medidas y márgenes verticales.",-1)),a(s,{language:"css",code:`.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 20px;
}`}),e[40]||(e[40]=n("div",{class:"demo-box demo-box-margin"},[n("span",{class:"inline-block-element"},"Elemento inline-block"),n("span",{class:"inline-block-element"},"Elemento inline-block"),n("p",{class:"text-muted"},"Pasa el mouse por encima de los elementos para ver las márgenes")],-1))])])])]))}}),T=r(M,[["__scopeId","data-v-e47b30b6"]]);export{T as default};
