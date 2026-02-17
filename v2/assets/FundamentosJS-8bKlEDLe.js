import{C as s}from"./CodeBlock-rxYbrMsD.js";import{d as o,c as i,b as e,e as n,f as l,a as r,o as d}from"./index-CZrZ7ln7.js";const t={class:"module-content"},c={class:"topic-section"},u={class:"cards-grid"},p={class:"card recommended"},m={class:"card warning"},v={class:"topic-section"},g={class:"cards-grid"},b={class:"card"},f={class:"card"},j={class:"topic-section"},y={class:"cards-grid"},S={class:"card"},q={class:"card recommended"},C={class:"card warning"},E={class:"cards-grid"},J={class:"card"},L={class:"card"},N={class:"topic-section"},x={class:"cards-grid"},D={class:"card"},z={class:"topic-section"},A={class:"cards-grid"},O={class:"card"},T={class:"card"},V={class:"card"},B={class:"card"},H={class:"card"},R=o({__name:"FundamentosJS",setup(M){return(F,a)=>(d(),i("div",t,[a[45]||(a[45]=e("div",{class:"header-section"},[e("h1",{class:"main-title js"},"Fundamentos JavaScript"),e("p",{class:"subtitle"},"La base de la interactividad en la web")],-1)),e("section",c,[a[4]||(a[4]=e("h2",{class:"section-title"},"Conectar HTML y JavaScript",-1)),a[5]||(a[5]=e("p",{class:"section-desc"}," Existen principalmente dos formas de vincular JavaScript a un documento HTML. La ubicación del script es crucial para el rendimiento de carga.",-1)),e("div",u,[e("div",p,[a[0]||(a[0]=e("div",{class:"card-header"},[e("h3",null,"Script Externo"),e("span",{class:"badge success"},"Recomendado")],-1)),a[1]||(a[1]=e("p",null,[l("Se vincula un archivo "),e("code",null,".js"),l(" separado. Es la mejor práctica para mantener el código organizado y reutilizable. Se recomienda ubicarlo al final del "),e("code",null,"<body>"),l(" para no bloquear la carga visual.")],-1)),n(s,{language:"html",code:`<body>
  <!-- Contenido de la página -->

  <script src="app.js"><\/script>
</body>`})]),e("div",m,[a[2]||(a[2]=e("div",{class:"card-header"},[e("h3",null,"Script Interno"),e("span",{class:"badge danger"},"No Recomendado")],-1)),a[3]||(a[3]=e("p",null,[l("El código se escribe directamente dentro de una etiqueta "),e("code",null,"<script>"),l(" en el HTML. Dificulta el mantenimiento y la cache del navegador.")],-1)),n(s,{language:"html",code:`<script>
  console.log("Hola Mundo");
<\/script>`})])])]),a[46]||(a[46]=e("hr",{class:"divider"},null,-1)),e("section",v,[a[10]||(a[10]=e("h2",{class:"section-title"},"Sintaxis Básica",-1)),a[11]||(a[11]=e("p",{class:"section-desc"},"Reglas fundamentales para escribir código JavaScript correctamente.",-1)),e("div",g,[e("div",b,[a[6]||(a[6]=e("h3",null,"Case Sensitive",-1)),a[7]||(a[7]=e("p",null,[l("JavaScript distingue mayúsculas de minúsculas. "),e("code",null,"miVariable"),l(" no es lo mismo que "),e("code",null,"mivariable"),l(".")],-1)),n(s,{language:"javascript",code:`let nombre = "Alex";
let Nombre = "Diego";

console.log(nombre); // Alex
console.log(Nombre); // Diego`})]),e("div",f,[a[8]||(a[8]=e("h3",null,"Comentarios",-1)),a[9]||(a[9]=e("p",null,"Es vital documentar el código. JS ignora estas líneas al ejecutarse.",-1)),n(s,{language:"javascript",code:`// Comentario de una línea

/*
  Comentario de
  múltiples líneas
*/`})])]),a[12]||(a[12]=e("p",{class:"section-desc"},"Las sentencias finalizan con ; No es obligatorio pero es recomendable.",-1))]),a[47]||(a[47]=e("hr",{class:"divider"},null,-1)),e("section",j,[a[23]||(a[23]=e("h2",{class:"section-title"},"Variables, Constantes y Scope",-1)),a[24]||(a[24]=e("p",{class:"section-desc"},[l("Una variable es un espacio reservado en memoria para almacenar un dato que podrá cambiar durante la ejecución del programa. En JavaScript moderno (ES6+), utilizamos "),e("code",null,"let"),l(" para declarar variables. Evita usar "),e("code",null,"var"),l(" ya que es una forma antigua de declarar variables.")],-1)),a[25]||(a[25]=e("p",{class:"section-desc"},"Las variables se pueden declarar, inicializar y modificar.",-1)),a[26]||(a[26]=e("p",{class:"section-desc"},[l("Una constante es un espacio reservado en memoria para almacenar un dato que no cambiará durante la ejecución del programa. Se declaran con la palabra reservada "),e("code",null,"const"),l(". Estas solo admiten la declaración e inicialización en la misma sentencia.")],-1)),e("div",y,[e("div",S,[a[13]||(a[13]=e("div",{class:"card-header"},[e("h3",null,"let")],-1)),a[14]||(a[14]=e("p",null,"Declara una variable reasignable con scope local. Úsala cuando sepas que el valor cambiará.",-1)),n(s,{language:"javascript",code:`let contador = 0;
contador = 1; // Correcto`})]),e("div",q,[a[15]||(a[15]=e("div",{class:"card-header"},[e("h3",null,"const"),e("span",{class:"badge success"},"Más usado")],-1)),a[16]||(a[16]=e("p",null,"Declara una constante de solo lectura. Debe inicializarse al declarar. Es la opción por defecto más segura.",-1)),n(s,{language:"javascript",code:`const PI = 3.1416;
PI = 3.15; // Error!`})]),e("div",C,[a[17]||(a[17]=e("div",{class:"card-header"},[e("h3",null,"var"),e("span",{class:"badge danger"},"Evitar")],-1)),a[18]||(a[18]=e("p",null,"Forma antigua de declarar variables. Tiene alcance global y permite hoisting, lo que causa errores sutiles.",-1)),n(s,{language:"javascript",code:'var nombre = "Juan";'})])]),a[27]||(a[27]=e("p",{class:"section-desc"},"El scope define el alcance de una variable. En JavaScript, existen dos tipos de scope: global y local.",-1)),e("div",E,[e("div",J,[a[19]||(a[19]=e("div",{class:"card-header"},[e("h3",null,"Scope Global")],-1)),a[20]||(a[20]=e("p",null,"Las variables declaradas fuera de cualquier bloque de código son globales y son accesibles desde cualquier parte del programa.",-1)),n(s,{language:"javascript",code:`var nombre = "Juan";
console.log(nombre); // Juan`})]),e("div",L,[a[21]||(a[21]=e("div",{class:"card-header"},[e("h3",null,"Scope Local")],-1)),a[22]||(a[22]=e("p",null,"Las variables declaradas dentro de un bloque de código son locales y solo son accesibles dentro de ese bloque.",-1)),n(s,{language:"javascript",code:`function miFuncion() {
  var nombre = "Juan";
  console.log(nombre); // Juan
}
console.log(nombre); // Error!`})])])]),a[48]||(a[48]=e("hr",{class:"divider"},null,-1)),e("section",N,[a[31]||(a[31]=e("h2",{class:"section-title"},"Tipos de Datos",-1)),a[32]||(a[32]=e("p",{class:"section-desc"},"JavaScript es un lenguaje de tipado dinámico. Los datos se dividen en Primitivos y Compuestos.",-1)),e("div",x,[a[30]||(a[30]=r('<div class="card"><h3>Primitivos</h3><ul class="def-list"><li><span class="def-term">string</span>: Texto (&quot;Hola&quot;)</li><li><span class="def-term">number</span>: Números (10, 3.5)</li><li><span class="def-term">boolean</span>: Lógica (true, false)</li><li><span class="def-term">undefined</span>: Valor no asignado</li><li><span class="def-term">null</span>: Ausencia intencional de valor</li><li><span class="def-term">symbol</span>: Identificador único</li></ul></div><div class="card"><h3>Compuestos (Objetos)</h3><ul class="def-list"><li><span class="def-term">Object</span>: Colección clave-valor</li><li><span class="def-term">Array</span>: Lista ordenada</li><li><span class="def-term">Function</span>: Bloque ejecutable</li></ul></div>',2)),e("div",D,[a[28]||(a[28]=e("div",{class:"card-header"},[e("h3",null,"Operador typeof")],-1)),a[29]||(a[29]=e("p",null,"Devuelve una cadena indicando el tipo del operando.",-1)),n(s,{language:"javascript",code:`typeof "Hola"    // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof {}        // "object"
typeof []        // "object"
typeof null      // "object"`})])])]),a[49]||(a[49]=e("hr",{class:"divider"},null,-1)),e("section",z,[a[43]||(a[43]=e("h2",{class:"section-title"},"Operadores",-1)),a[44]||(a[44]=e("p",{class:"section-desc"},"Símbolos que permiten realizar operaciones con valores.",-1)),e("div",A,[e("div",O,[a[33]||(a[33]=e("h3",null,"Aritméticos",-1)),a[34]||(a[34]=e("p",null,"Operaciones matemáticas básicas.",-1)),n(s,{language:"javascript",code:`let numero = 10;
numero + 5; // 15
numero - 3; // 7
numero * 2; // 20
numero / 4; // 2.5
numero % 3; // 1
numero ** 2; // 100`})]),e("div",T,[a[35]||(a[35]=e("h3",null,"Incremento/Decremento",-1)),a[36]||(a[36]=e("p",null,"Modifican el valor de una variable.",-1)),n(s,{language:"javascript",code:`let numero = 10;
numero++ // 11
numero-- // 10
++numero // 11
--numero // 10`})]),e("div",V,[a[37]||(a[37]=e("h3",null,"Asignación",-1)),a[38]||(a[38]=e("p",null,"Asignan valor a una variable, posiblemente realizando una operación.",-1)),n(s,{language:"javascript",code:`let numero = 10;
numero += 5; // 15
numero -= 3; // 7
numero *= 2; // 20
numero /= 4; // 2.5
numero %= 3; // 1
numero **= 2; // 100`})]),e("div",B,[a[39]||(a[39]=e("h3",null,"Comparación",-1)),a[40]||(a[40]=e("p",null,"Comparan dos valores y devuelven un booleano.",-1)),n(s,{language:"javascript",code:`let a = 2, b = 2, c = 3, d = "2";
a == b; // true
a === b; // true
a == c; // false
a === c; // false
a != b; // false
a !== b; // false
a != c; // true
a !== c; // true
a > c; // false
a < c; // true
a >= c; // false
a <= c; // true
a >= d; // true
a <= d; // true`})]),e("div",H,[a[41]||(a[41]=e("h3",null,"Lógicos",-1)),a[42]||(a[42]=e("p",null,"Combinan condiciones booleanas.",-1)),n(s,{language:"javascript",code:`&&  AND (Y)
||  OR (O)
!   NOT (Negación)

let a = true, b = false;
a && b; // false
a || b; // true
!a; // false`})])])])]))}});export{R as default};
