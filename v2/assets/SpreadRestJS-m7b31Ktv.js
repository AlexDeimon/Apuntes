import{C as n}from"./CodeBlock-BCu3rfa8.js";import{R as o}from"./ReferenceSection-D_wF__rA.js";import{d as r,c as t,a as i,b as e,e as a,o as d}from"./index-Ct8qiaRS.js";const l={class:"module-content"},c={class:"topic-section"},u={class:"cards-grid"},p={class:"card info"},m={class:"card info"},g={class:"card info"},v={class:"topic-section"},b={class:"cards-grid"},f={class:"card info"},j={class:"card info"},E=r({__name:"SpreadRestJS",setup(S){return(x,s)=>(d(),t("div",l,[s[14]||(s[14]=i('<div class="header-section"><h1 class="main-title js">Spread &amp; Rest</h1><p class="subtitle">Dominando la sintaxis de los tres puntos (...) para manipular datos con elegancia.</p></div><section class="topic-section"><h2 class="section-title js">¿Qué son?</h2><p class="section-desc">Aunque usan la misma sintaxis (<code>...</code>), su comportamiento depende de dónde se utilicen. El <strong>Spread</strong> expande elementos, mientras que el <strong>Rest</strong> los agrupa.</p></section><hr class="divider">',3)),e("section",c,[s[6]||(s[6]=e("h2",{class:"section-title js"},"1. Spread Operator (Expansión)",-1)),s[7]||(s[7]=e("p",{class:"section-desc"},"Se usa para expandir los elementos de un iterable (Array, Objeto, String).",-1)),e("div",u,[e("div",p,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"En Arrays")],-1)),s[1]||(s[1]=e("p",null,"Ideal para copiar o combinar arreglos sin mutar los originales.",-1)),a(n,{language:"javascript",code:`const a = [1, 2];
const b = [3, 4];

const combinado = [...a, ...b]; // [1, 2, 3, 4]
const copia = [...a]; // Clon real

// Se puede usar para agregar un array a otro array
copia.push(...b); // [1, 2, 3, 4]`})]),e("div",m,[s[2]||(s[2]=e("div",{class:"card-header"},[e("h3",null,"En Objetos")],-1)),s[3]||(s[3]=e("p",null,"Permite clonar objetos y sobrescribir propiedades de forma sencilla.",-1)),a(n,{language:"javascript",code:`const user = { name: 'Diego', age: 25 };
const update = { ...user, age: 26, city: 'CDMX' };

// { name: 'Diego', age: 26, city: 'CDMX' }`})]),e("div",g,[s[4]||(s[4]=e("div",{class:"card-header"},[e("h3",null,"En Funciones")],-1)),s[5]||(s[5]=e("p",null,"Pasa los elementos de un array como argumentos individuales.",-1)),a(n,{language:"javascript",code:`const precios = [10, 50, 20];
const max = Math.max(...precios); // 50`})])])]),s[15]||(s[15]=e("hr",{class:"divider"},null,-1)),e("section",v,[s[12]||(s[12]=e("h2",{class:"section-title js"},"2. Rest Operator (Agrupación)",-1)),s[13]||(s[13]=e("p",{class:"section-desc"},"Se usa para recolectar múltiples elementos en un solo lugar (variable o parámetro).",-1)),e("div",b,[e("div",f,[s[8]||(s[8]=e("div",{class:"card-header"},[e("h3",null,"Parámetros Rest")],-1)),s[9]||(s[9]=e("p",null,"Permite que una función reciba un número indefinido de argumentos como un array.",-1)),a(n,{language:"javascript",code:`function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

sumar(1, 2, 3, 4); // 10`})]),e("div",j,[s[10]||(s[10]=e("div",{class:"card-header"},[e("h3",null,"En Desestructuración")],-1)),s[11]||(s[11]=e("p",null,"Extrae ciertos valores y agrupa el sobrante en un nuevo contenedor.",-1)),a(n,{language:"javascript",code:`const [primero, ...elResto] = [1, 2, 3, 4];
// primero = 1, elResto = [2, 3, 4]

const { admin, ...userData } = { admin: true, id: 1, mail: 'a@b.com' };
// userData = { id: 1, mail: 'a@b.com' }`})])])]),s[16]||(s[16]=e("hr",{class:"divider"},null,-1)),a(o,{references:[{techId:"js",moduleId:"arrays",text:"Arrays en JS"},{techId:"js",moduleId:"fundamentos",text:"Fundamentos JS"}]})]))}});export{E as default};
