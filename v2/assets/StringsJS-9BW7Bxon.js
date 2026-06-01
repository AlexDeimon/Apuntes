import{C as o}from"./CodeBlock-D-0uVHKu.js";import{d as l,c as a,a as i,b as n,e as t,f as e,o as r}from"./index-CXyusEr8.js";const d={class:"module-content"},c={class:"topic-section"},u={class:"cards-grid"},p={class:"card info"},g={class:"card recommended"},v={class:"topic-section"},m={class:"card info"},f={class:"topic-section"},S={class:"cards-grid"},j={class:"card"},b={class:"card"},H={class:"card"},x={class:"card"},C={class:"card"},M={class:"card"},J={class:"card"},y={class:"card"},E=l({__name:"StringsJS",setup(q){return(z,s)=>(r(),a("div",d,[s[26]||(s[26]=i('<div class="header-section"><h1 class="main-title js">Strings</h1><p class="subtitle">Manipulación y propiedades de cadenas de texto</p></div><section class="topic-section"><h2 class="section-title js">Introducción</h2><p class="section-desc">Un <strong>String</strong> (cadena de caracteres) es una secuencia de caracteres usada para representar texto. En JavaScript, los strings son inmutables, lo que significa que una vez creados, no pueden ser modificados. Los métodos que &quot;modifican&quot; un string en realidad devuelven uno nuevo.</p></section>',2)),n("section",c,[s[4]||(s[4]=n("h2",{class:"section-title js"},"Creación de Strings",-1)),n("div",u,[n("div",p,[s[0]||(s[0]=n("h3",null,"Comillas Simples y Dobles",-1)),s[1]||(s[1]=n("p",null,"Son funcionalmente idénticas en JS.",-1)),t(o,{language:"javascript",code:`const str1 = 'Hola Mundo';
const str2 = "Hola Mundo";`})]),n("div",g,[s[2]||(s[2]=n("div",{class:"card-header"},[n("h3",null,"Template Strings"),n("span",{class:"badge success"},"Moderno")],-1)),s[3]||(s[3]=n("p",null,[e("Usan comillas invertidas ("),n("code",null,"`"),e("). Permiten interpolación de variables y múltiples líneas. Se usa el simbolo "),n("code",null,"$"),e(" junto con "),n("code",null,"{}"),e(" para insertar variables.")],-1)),t(o,{language:"javascript",code:"const nombre = 'Alex';\nconst saludo = `Hola ${nombre},\nbienvenido.`;"})])])]),s[27]||(s[27]=n("hr",{class:"divider"},null,-1)),n("section",v,[s[7]||(s[7]=n("h2",{class:"section-title js"},"Propiedades",-1)),n("div",m,[s[5]||(s[5]=n("h3",null,".length",-1)),s[6]||(s[6]=n("p",null,"Devuelve la longitud de la cadena (número de caracteres).",-1)),t(o,{language:"javascript",code:`const texto = 'JavaScript';
console.log(texto.length); // 10`})])]),s[28]||(s[28]=n("hr",{class:"divider"},null,-1)),n("section",f,[s[24]||(s[24]=n("h2",{class:"section-title js"},"Métodos Comunes",-1)),s[25]||(s[25]=n("p",{class:"section-desc"},[e("JavaScript ofrece muchos métodos integrados para trabajar con texto. "),n("strong",null,"Recuerda: ninguno modifica la cadena original.")],-1)),n("div",S,[n("div",j,[s[8]||(s[8]=n("h3",null,"Transformación",-1)),s[9]||(s[9]=n("p",null,"Cambiar mayúsculas y minúsculas.",-1)),t(o,{language:"javascript",code:`const str = 'Hola';
console.log(str.toUpperCase()); // 'HOLA'
console.log(str.toLowerCase()); // 'hola'`})]),n("div",b,[s[10]||(s[10]=n("h3",null,"Búsqueda",-1)),s[11]||(s[11]=n("p",null,"Encontrar subcadenas.",-1)),t(o,{language:"javascript",code:`const frase = 'Hola Mundo';
console.log(frase.includes('Mundo')); // true
console.log(frase.indexOf('a')); // 3
console.log(frase.startsWith('H')); // true
console.log(frase.endsWith('o')); // true`})]),n("div",H,[s[12]||(s[12]=n("h3",null,"Extracción",-1)),s[13]||(s[13]=n("p",null,"Obtener partes de una cadena.",-1)),t(o,{language:"javascript",code:`const txt = 'JavaScript';
// substring(inicio, fin)
console.log(txt.substring(0, 4)); // 'Java'
console.log(txt.substring(4));    // 'Script'
// slice(inicio, fin)
console.log(txt.slice(-6)); // 'Script'
console.log(txt.slice(4, 10)); // 'Script'`})]),n("div",x,[s[14]||(s[14]=n("h3",null,"Reemplazo y Limpieza",-1)),s[15]||(s[15]=n("p",null,"Modificar y limpiar contenido.",-1)),t(o,{language:"javascript",code:`const sucio = '  Hola  ';
console.log(sucio.trim()); // 'Hola'

const err = 'JavaScrip';
console.log(err.replace('p', 'pt'));
// 'JavaScript'`})]),n("div",C,[s[16]||(s[16]=n("h3",null,"Dividir",-1)),s[17]||(s[17]=n("p",null,"Convierte un string en un array.",-1)),t(o,{language:"javascript",code:`const csv = 'rojo,verde,azul';
const colores = csv.split(',');
// ['rojo', 'verde', 'azul']

const str = 'Hola';
const arr = str.split('');
// ['H', 'o', 'l', 'a']`})]),n("div",M,[s[18]||(s[18]=n("h3",null,"Repetir",-1)),s[19]||(s[19]=n("p",null,"Repite un string un número de veces.",-1)),t(o,{language:"javascript",code:`const str = 'Hola';
console.log(str.repeat(3)); // 'HolaHolaHola'`})]),n("div",J,[s[20]||(s[20]=n("h3",null,"Rellenar",-1)),s[21]||(s[21]=n("p",null,"Rellena un string con caracteres hasta alcanzar una longitud determinada.",-1)),t(o,{language:"javascript",code:`const str = '5';
console.log(str.padStart(3, '0')); // '005'
console.log(str.padEnd(3, '0')); // '500'`})]),n("div",y,[s[22]||(s[22]=n("h3",null,"Concatenación",-1)),s[23]||(s[23]=n("p",null,"Une dos o más strings.",-1)),t(o,{language:"javascript",code:`const str1 = 'Hola';
const str2 = 'Mundo';
console.log(str1 + str2); // 'HolaMundo'
console.log(str1.concat(str2)); // 'HolaMundo'`})])])])]))}});export{E as default};
