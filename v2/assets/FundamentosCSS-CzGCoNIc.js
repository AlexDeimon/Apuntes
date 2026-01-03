import{C as o}from"./CodeBlock-D77Q1wnc.js";import{d as t,c as i,b as e,a as n,f as l,e as a,o as d,_ as r}from"./index-XAEnFjQJ.js";const c={class:"module-content"},u={class:"topic-section"},p={class:"cards-grid"},v={class:"card recommended"},g={class:"card"},f={class:"card warning"},m={class:"card warning"},S={class:"topic-section"},b={class:"syntax-visualization"},q={class:"topic-section"},h={class:"keywords-grid"},C={class:"keyword-card"},y={class:"keyword-card"},x={class:"topic-section"},k={class:"editors-comparison"},E={class:"editor-col"},z={class:"editor-col"},j={class:"editor-col"},w={class:"editor-col"},T={class:"editors-comparison"},H={class:"editor-col"},L={class:"editor-col"},N={class:"editor-col"},A={class:"editor-col"},D={class:"editor-col"},I={class:"editor-col"},M={class:"editors-comparison"},P={class:"editor-col"},V={class:"editor-col"},F={class:"editor-col"},B={class:"editor-col"},R={class:"editor-col"},O={class:"editor-col"},U=t({__name:"FundamentosCSS",setup(G){return($,s)=>(d(),i("div",c,[s[39]||(s[39]=e("div",{class:"header-section"},[e("h1",{class:"main-title css"},"Fundamentos CSS"),e("p",{class:"subtitle"},"La base fundamental para dar estilo a la web")],-1)),e("section",u,[s[8]||(s[8]=e("h2",{class:"section-title css"},"Conectar HTML y CSS",-1)),s[9]||(s[9]=e("p",{class:"section-desc"},"Existen 4 formas de dar estilos a HTML mediante CSS. Es crucial entenderlas para elegir la mejor arquitectura.",-1)),e("div",p,[e("div",v,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"1. Etiqueta <link>"),e("span",{class:"badge success"},"Recomendado")],-1)),s[1]||(s[1]=e("p",null,[a("Se tiene un archivo CSS externo, usualmente en otra carpeta, el cual se vincula al HTML mediante la etiqueta "),e("code",null,"<link>"),a(". Permite reutilizar estilos en múltiples archivos.")],-1)),l(o,{language:"html",code:`<head>
  <link rel="stylesheet" href="estilos.css">
</head>`})]),e("div",g,[s[2]||(s[2]=e("div",{class:"card-header"},[e("h3",null,"2. Etiqueta <style>")],-1)),s[3]||(s[3]=e("p",null,[a("Se escribe el código CSS directamente en el archivo HTML dentro de la etiqueta "),e("code",null,"<style>"),a(" en el "),e("code",null,"<head>"),a(". Útil para estilos críticos o correos electrónicos.")],-1)),l(o,{language:"html",code:`<head>
  <style>
    body {
      background-color: #f0f0f0;
    }
  </style>
</head>`})]),e("div",f,[s[4]||(s[4]=e("div",{class:"card-header"},[e("h3",null,"3. CSS en línea"),e("span",{class:"badge danger"},"Mala Práctica")],-1)),s[5]||(s[5]=e("p",null,[a("Se agrega el atributo "),e("code",null,"style"),a(" a cualquier etiqueta HTML. Difícil de mantener y tiene la especificidad más alta indeseada.")],-1)),l(o,{language:"html",code:`<h1 style="color: red; font-size: 20px;">
  Título en rojo
</h1>`})]),e("div",m,[s[6]||(s[6]=e("div",{class:"card-header"},[e("h3",null,"4. @import"),e("span",{class:"badge danger"},"Evitar")],-1)),s[7]||(s[7]=e("p",null,"Importa un archivo CSS dentro de otro archivo CSS o etiqueta style. Puede afectar el rendimiento ya que bloquea el renderizado secuencialmente.",-1)),l(o,{language:"css",code:`@import url("otros-estilos.css");

body {
  font-family: sans-serif;
}`})])])]),s[40]||(s[40]=e("hr",{class:"divider"},null,-1)),e("section",S,[s[11]||(s[11]=e("h2",{class:"section-title css"},"Sintaxis CSS",-1)),s[12]||(s[12]=e("p",null,[a("La regla CSS se compone de un "),e("strong",null,"selector"),a(" y un "),e("strong",null,"bloque de declaración"),a(".")],-1)),e("div",b,[l(o,{language:"css",code:`selector {
  propiedad: valor;
  propiedad: valor;
}`}),s[10]||(s[10]=e("ul",null,[e("li",null,[e("strong",null,"Selector:"),a(" Indica a qué elemento(s) HTML se aplicarán los estilos.")]),e("li",null,[e("strong",null,"Propiedad:"),a(" El aspecto que quieres cambiar (ej. color, font-size).")]),e("li",null,[e("strong",null,"Valor:"),a(" El ajuste específico para la propiedad (ej. red, 16px).")])],-1))])]),s[41]||(s[41]=n('<hr class="divider" data-v-a1d62f55><section class="topic-section" data-v-a1d62f55><h2 class="section-title css" data-v-a1d62f55>La Cascada en CSS</h2><p data-v-a1d62f55>El algoritmo que usa el navegador para decidir qué estilos aplicar cuando hay conflictos. Se basa en 3 factores:</p><div class="cascade-factors" data-v-a1d62f55><div class="factor" data-v-a1d62f55><h3 data-v-a1d62f55>1. Importancia</h3><p data-v-a1d62f55>Origen del estilo. Orden de menor a mayor:</p><ol data-v-a1d62f55><li data-v-a1d62f55>Navegador (User Agent)</li><li data-v-a1d62f55>Usuario (Configuración browser)</li><li data-v-a1d62f55>Autor (Desarrollador)</li><li data-v-a1d62f55><code data-v-a1d62f55>!important</code> (Rompe la cascada, usar con precaución)</li></ol></div><div class="factor" data-v-a1d62f55><h3 data-v-a1d62f55>2. Especificidad</h3><p data-v-a1d62f55>Calcula el &quot;peso&quot; de un selector. Cuanto más específico, gana.</p><div class="specificity-table" data-v-a1d62f55><div class="spec-row" data-v-a1d62f55><span data-v-a1d62f55>Etiquetas / Pseudo-elementos</span><span class="spec-val" data-v-a1d62f55>0-0-1</span></div><div class="spec-row" data-v-a1d62f55><span data-v-a1d62f55>Clases / Atributos / Pseudo-clases</span><span class="spec-val" data-v-a1d62f55>0-1-0</span></div><div class="spec-row" data-v-a1d62f55><span data-v-a1d62f55>IDs</span><span class="spec-val" data-v-a1d62f55>1-0-0</span></div><div class="spec-row" data-v-a1d62f55><span data-v-a1d62f55>Estilos en línea (Inline)</span><span class="spec-val" data-v-a1d62f55>1-0-0-0</span></div></div><a href="https://jonassebastianohlsson.com/specificity-graph/" target="_blank" class="link-external" data-v-a1d62f55>Visualizador de Especificidad</a></div><div class="factor" data-v-a1d62f55><h3 data-v-a1d62f55>3. Orden de Fuente</h3><p data-v-a1d62f55>Si la importancia y especificidad son iguales, gana la regla que se declaró al final (más abajo en el código).</p></div></div></section><hr class="divider" data-v-a1d62f55>',3)),e("section",q,[s[17]||(s[17]=e("h2",{class:"section-title css"},"Herencia",-1)),s[18]||(s[18]=e("p",null,"Algunas propiedades CSS (como color, font-family) se heredan de padres a hijos, mientras que otras (como border, margin) no.",-1)),e("div",h,[e("div",C,[s[13]||(s[13]=e("h4",null,"inherit",-1)),s[14]||(s[14]=e("p",null,"Fuerza a un elemento a heredar la propiedad de su padre, aunque normalmente no lo haría.",-1)),l(o,{language:"css",code:`a {
  color: inherit; /* Hereda el color del texto del padre */
  text-decoration: none;
}`})]),e("div",y,[s[15]||(s[15]=e("h4",null,"initial",-1)),s[16]||(s[16]=e("p",null,"Resetea la propiedad a su valor inicial predeterminado por la especificación CSS.",-1)),l(o,{language:"css",code:`div {
  color: initial; /* Vuelve a negro (usualmente) */
}`})])])]),s[42]||(s[42]=n('<hr class="divider" data-v-a1d62f55><section class="topic-section" data-v-a1d62f55><h2 class="section-title css" data-v-a1d62f55>Normalización</h2><p data-v-a1d62f55>Los navegadores tienen estilos por defecto inconsistentes. Usar un &quot;Reset&quot; o &quot;Normalize&quot; asegura que tu sitio se vea igual en todos lados.</p><div class="info-box" data-v-a1d62f55><p data-v-a1d62f55><strong data-v-a1d62f55>Normalize.css</strong> es una alternativa moderna a los resets CSS tradicionales. Preserva valores útiles por defecto en lugar de eliminarlos todos.</p><a href="https://necolas.github.io/normalize.css/" target="_blank" class="button-link" data-v-a1d62f55>Descargar Normalize.css</a></div></section><hr class="divider" data-v-a1d62f55>',3)),e("section",x,[s[35]||(s[35]=e("h2",{class:"section-title css"},"Selectores CSS",-1)),s[36]||(s[36]=e("h3",{class:"subsection-title"},"Selectores Simples",-1)),e("div",k,[e("div",E,[s[19]||(s[19]=e("p",null,[e("strong",null,"#id: "),a("Selecciona un elemento único por su atributo ID.")],-1)),l(o,{language:"css",code:`#id {
  background-color: blue;
}`})]),e("div",z,[s[20]||(s[20]=e("p",null,[e("strong",null,".clase: "),a("Selecciona todos los elementos con esa clase.")],-1)),l(o,{language:"css",code:`.clase {
  margin: 10px;
}`})]),e("div",j,[s[21]||(s[21]=e("p",null,[e("strong",null,"elemento: "),a("Selecciona por etiqueta (ej. p, div, h1).")],-1)),l(o,{language:"css",code:`h1 {
  margin-left: 10px;
}`})]),e("div",w,[s[22]||(s[22]=e("p",null,[e("strong",null,"*: "),a("Selector universal (todo).")],-1)),l(o,{language:"css",code:`* {
  text-align: center;
}`})])]),s[37]||(s[37]=e("h3",{class:"subsection-title"},"Selectores de Atributos",-1)),e("div",T,[e("div",H,[s[23]||(s[23]=e("p",null,[e("strong",null,"[atributo]: "),a("Selecciona por atributo.")],-1)),l(o,{language:"css",code:`a[href] {
  color: blue;
}`})]),e("div",L,[s[24]||(s[24]=e("p",null,[e("strong",null,"[atributo=valor]: "),a("Selecciona por atributo con valor exacto.")],-1)),l(o,{language:"css",code:`a[href="https://google.com"] {
  color: red;
}`})]),e("div",N,[s[25]||(s[25]=e("p",null,[e("strong",null,"[atributo^=valor]: "),a("Selecciona por atributo que comienza con valor.")],-1)),l(o,{language:"css",code:`a[href^="https://google.com"] {
  color: green;
}`})]),e("div",A,[s[26]||(s[26]=e("p",null,[e("strong",null,"[atributo$=valor]: "),a("Selecciona por atributo que termina con valor.")],-1)),l(o,{language:"css",code:`a[href$="google.com"] {
  color: purple;
}`})]),e("div",D,[s[27]||(s[27]=e("p",null,[e("strong",null,"[atributo*=valor]: "),a("Selecciona por atributo que contiene valor.")],-1)),l(o,{language:"css",code:`a[href*="google"] {
  color: orange;
}`})]),e("div",I,[s[28]||(s[28]=e("p",null,[e("strong",null,"[atributo|=valor]: "),a("Selecciona por atributo que contiene valor (espaciado).")],-1)),l(o,{language:"css",code:`a[href~="google"] {
  color: pink;
}`})])]),s[38]||(s[38]=e("h3",{class:"subsection-title"},"Selectores Compuestos y Combinadores",-1)),e("div",M,[e("div",P,[s[29]||(s[29]=e("p",null,[e("strong",null,"Agrupación: "),a("Aplicar estilos a varios selectores.")],-1)),l(o,{language:"css",code:`h1, h2, h3 {
  font-family: "Helvetica", sans-serif;
  color: #333;
}`})]),e("div",V,[s[30]||(s[30]=e("p",null,[e("strong",null,"Descendiente (Espacio): "),a("Elemento dentro de otro (cualquier nivel).")],-1)),l(o,{language:"css",code:`div p {
  /* Todos los <p> dentro de <div> */
  color: blue;
}`})]),e("div",F,[s[31]||(s[31]=e("p",null,[e("strong",null,"Hijo Directo (>): "),a("Solo hijos directos (primer nivel).")],-1)),l(o,{language:"css",code:`ul > li {
  /* Solo <li> que son hijos directos de <ul> */
  list-style: none;
}`})]),e("div",B,[s[32]||(s[32]=e("p",null,[e("strong",null,"Combinador General (+): "),a("Elemento siguiente hermano.")],-1)),l(o,{language:"css",code:`h1 + p {
  /* Solo el <p> que sigue inmediatamente a <h1> */
  color: green;
}`})]),e("div",R,[s[33]||(s[33]=e("p",null,[e("strong",null,"Combinador General (~): "),a("Todos los elementos hermanos siguientes.")],-1)),l(o,{language:"css",code:`h1 ~ p {
  /* Todos los <p> que siguen inmediatamente a <h1> */
  color: green;
}`})]),e("div",O,[s[34]||(s[34]=e("p",null,[e("strong",null,"Sub clase: "),a("Selecciona un elemento de etiqueta con una clase definida.")],-1)),l(o,{language:"css",code:`div.clase {
  margin: 10px;
}`})])])])]))}}),Q=r(U,[["__scopeId","data-v-a1d62f55"]]);export{Q as default};
