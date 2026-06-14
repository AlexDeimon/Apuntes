import{C as o}from"./CodeBlock-BzZmbN9f.js";import{R as i}from"./ReferenceSection-syCf8rCD.js";import{d as r,c as a,b as e,e as n,f as t,o as d}from"./index-_FTtpg_U.js";const l={class:"module-content"},u={class:"topic-section"},p={class:"cards-grid"},c={class:"card recommended"},m={class:"card warning"},g={class:"topic-section"},b={class:"cards-grid"},v={class:"card info"},f={class:"card warning"},y={class:"topic-section"},T={class:"cards-grid"},S={class:"card info"},E={class:"card recommended"},q={class:"topic-section"},x={class:"cards-grid"},I={class:"card info"},C={class:"card warning"},k=r({__name:"InferenciaTS",setup(w){return(B,s)=>(d(),a("div",l,[s[22]||(s[22]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Inferencia de Tipos"),e("p",{class:"subtitle"},"TS sabe que tipo de dato es una variable sin que se lo digas")],-1)),e("section",u,[s[4]||(s[4]=e("h2",{class:"section-title typescript"},"¿Qué es la Inferencia?",-1)),s[5]||(s[5]=e("p",{class:"section-desc"},"TypeScript es lo suficientemente inteligente como para deducir (inferir) el tipo de dato de una variable basándose en su valor inicial. Esto significa que no siempre es necesario escribir el tipo explícitamente.",-1)),e("div",p,[e("div",c,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Inferencia Básica"),e("span",{class:"badge success"},"Automático")],-1)),s[1]||(s[1]=e("p",null,"Al asignar un valor, TS asume el tipo.",-1)),n(o,{language:"typescript",code:`// TypeScript infiere que es "string"
let mensaje = "Hola Mundo";

// Error: Type "number" is not assignable to type "string"
mensaje = 100;`})]),e("div",m,[s[2]||(s[2]=e("div",{class:"card-header"},[e("h3",null,"Sin Inferencia (Any)"),e("span",{class:"badge danger"},"Evitar")],-1)),s[3]||(s[3]=e("p",null,[t("Si declaras una variable sin asignar valor y sin tipo, TS asume "),e("code",null,"any"),t(" (evitar esto).")],-1)),n(o,{language:"typescript",code:`let variable; // Tipo: any
variable = "Texto";
variable = 10; // No hay error detectado`})])])]),s[23]||(s[23]=e("hr",{class:"divider"},null,-1)),e("section",g,[s[10]||(s[10]=e("h2",{class:"section-title typescript"},"Inferencia en Objetos",-1)),s[11]||(s[11]=e("p",{class:"section-desc"},"TypeScript analiza la estructura de los objetos que creas para proporcionar autocompletado y seguridad.",-1)),e("div",b,[e("div",v,[s[6]||(s[6]=e("h3",null,"Detección de Estructura",-1)),s[7]||(s[7]=e("p",null,"TS genera un tipo basado en las propiedades.",-1)),n(o,{language:"typescript",code:`const usuario = {
  nombre: "Diego",
  id: 1,
  habilitado: true
};

// TS sabe que usuario.nombre es string
// Metodos segun el tipo:
usuario.nombre.toUpperCase();`})]),e("div",f,[s[8]||(s[8]=e("div",{class:"card-header"},[e("h3",null,"Validación de Propiedades"),e("span",{class:"badge danger"},"Estricto")],-1)),s[9]||(s[9]=e("p",null,"No puedes acceder a propiedades que TS no infirió inicialmente.",-1)),n(o,{language:"typescript",code:`// Error: Property "edad" does not exist on type...
console.log(usuario.edad);`})])])]),s[24]||(s[24]=e("hr",{class:"divider"},null,-1)),e("section",y,[s[16]||(s[16]=e("h2",{class:"section-title typescript"},"Arrays y Contexto",-1)),e("div",T,[e("div",S,[s[12]||(s[12]=e("h3",null,"Best Common Type",-1)),s[13]||(s[13]=e("p",null,"En arrays con múltiples tipos, TS busca un tipo que abarque a todos.",-1)),n(o,{language:"typescript",code:`// Inferencia: (string | number)[]
const lista = [10, "veinte", 30];

lista.push("cuarenta"); // OK
lista.push(true); // Error`})]),e("div",E,[s[14]||(s[14]=e("div",{class:"card-header"},[e("h3",null,"Tipado Contextual")],-1)),s[15]||(s[15]=e("p",null,"TS infiere tipos basándose en el contexto, como en callbacks.",-1)),n(o,{language:"typescript",code:`window.onmousedown = function(mouseEvent) {
  // TS sabe que mouseEvent es MouseEvent
  // sin que lo escribamos explícitamente
  console.log(mouseEvent.button);
};`})])])]),s[25]||(s[25]=e("hr",{class:"divider"},null,-1)),e("section",q,[s[21]||(s[21]=e("h2",{class:"section-title typescript"},"Inferencia en Funciones",-1)),e("div",x,[e("div",I,[s[17]||(s[17]=e("h3",null,"Tipos de Retorno",-1)),s[18]||(s[18]=e("p",null,"TS infiere el tipo de retorno de una función basándose en lo que retorna.",-1)),n(o,{language:"typescript",code:`function sumar(a: number, b: number) {
  // TS infiere que retorna number
  return a + b;
}

// Error: Type "string" is not assignable to type "number"
let resultado: number = sumar(1, 2);`})]),e("div",C,[s[19]||(s[19]=e("div",{class:"card-header"},[e("h3",null,"Tipos de Parámetros"),e("span",{class:"badge danger"},"Estricto")],-1)),s[20]||(s[20]=e("p",null,"No puedes llamar a una función con parámetros que no coincidan con los tipos inferidos.",-1)),n(o,{language:"typescript",code:'// Error: Argument of type "string" is not assignable to parameter of type "number"'})])])]),n(i,{references:[{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JavaScript"}]})]))}});export{k as default};
