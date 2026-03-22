import{C as o}from"./CodeBlock-CohLHs8t.js";import{R as t}from"./ReferenceSection-B7FK4dOh.js";import{d as i,c as a,b as e,e as s,f as r,o as d}from"./index-DI-Rm3vX.js";const l={class:"module-content"},u={class:"topic-section"},c={class:"cards-grid"},p={class:"card info"},m={class:"card recommended"},b={class:"topic-section"},g={class:"cards-grid"},f={class:"card info"},v={class:"card info"},y={class:"cards-grid"},S={class:"card info"},T={class:"card warning"},q={class:"topic-section"},x={class:"cards-grid"},A={class:"card info"},F={class:"card recommended"},E={class:"topic-section"},j={class:"cards-grid"},C={class:"card info"},$={class:"card info"},P={class:"topic-section"},D={class:"card info"},I=i({__name:"FuncionesTS",setup(R){return(N,n)=>(d(),a("div",l,[n[27]||(n[27]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Funciones"),e("p",{class:"subtitle"},"Añadiendo tipado fuerte a la lógica de negocio.")],-1)),e("section",u,[n[3]||(n[3]=e("h2",{class:"section-title typescript"},"Tipado de Parámetros y Retorno",-1)),n[4]||(n[4]=e("p",{class:"section-desc"},"En TypeScript, podemos especificar el tipo de cada parámetro y el tipo de dato que la función devolverá después de su ejecución.",-1)),e("div",c,[e("div",p,[n[0]||(n[0]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis Estándar")],-1)),s(o,{language:"typescript",code:"function saludar(nombre: string): string {\n  return `Hola ${nombre}`;\n}"})]),e("div",m,[n[1]||(n[1]=e("div",{class:"card-header"},[e("h3",null,"Inferencia de Retorno")],-1)),n[2]||(n[2]=e("p",null,[r("TS a menudo puede adivinar qué devuelve una función basándose en la sentencia "),e("code",null,"return"),r(".")],-1)),s(o,{language:"typescript",code:`// Forma 1: Explicita
function sumar(a: number, b: number): number {
  return a + b;
}

// Forma 2: Implicita
function sumar(a: number, b: number) {
  return a + b; // TS infiere que retorna un number
}`})])])]),n[28]||(n[28]=e("hr",{class:"divider"},null,-1)),e("section",b,[n[13]||(n[13]=e("h2",{class:"section-title typescript"},"Parámetros Opcionales y por Defecto",-1)),e("div",g,[e("div",f,[n[5]||(n[5]=e("div",{class:"card-header"},[e("h3",null,"Opcionales (?)")],-1)),n[6]||(n[6]=e("p",null,[r("Usa "),e("code",null,"?"),r(" para marcar parámetros que no siempre se enviarán.")],-1)),s(o,{language:"typescript",code:`function log(msg: string, user?: string) {
  console.log(msg, user || "Anónimo");
}`})]),e("div",v,[n[7]||(n[7]=e("div",{class:"card-header"},[e("h3",null,"Por Defecto")],-1)),n[8]||(n[8]=e("p",null,"Asigna un valor inicial. TS inferirá el tipo automáticamente.",-1)),s(o,{language:"typescript",code:`function f(x = 10) {
  // x es inferido como number
}`})])]),n[14]||(n[14]=e("br",null,null,-1)),n[15]||(n[15]=e("br",null,null,-1)),e("div",y,[e("div",S,[n[9]||(n[9]=e("div",{class:"card-header"},[e("h3",null,"Rest Parameters")],-1)),n[10]||(n[10]=e("p",null,"Para recibir un número indefinido de argumentos como un array.",-1)),s(o,{language:"typescript",code:`function total(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}`})]),e("div",T,[n[11]||(n[11]=e("div",{class:"card-header"},[e("h3",null,"Any")],-1)),n[12]||(n[12]=e("p",null,[r("Si no se le asigna el tipo de dato, implicitámente se le asignara un tipo "),e("code",null,"Any"),r(", por lo cual no podrá inferir posteriormente que tipo de dato es o son los parámetros.")],-1)),s(o,{language:"typescript",code:`function saludar(nombre) {
  console.log(\`Hola \${nombre}\`);
}

saludar(123); // Actualmente nombre es any, por lo que no inferirá que es un string`})])])]),n[29]||(n[29]=e("hr",{class:"divider"},null,-1)),e("section",q,[n[20]||(n[20]=e("h2",{class:"section-title typescript"},"Objetos y Callbacks",-1)),e("div",x,[e("div",A,[n[16]||(n[16]=e("div",{class:"card-header"},[e("h3",null,"Objetos como Parámetros")],-1)),n[17]||(n[17]=e("p",null,"Podemos tipar el objeto directamente o usar desestructuración.",-1)),s(o,{language:"typescript",code:`// Any implícito
function saludar({ nombre, edad }) {
  console.log(\`hola \${nombre} tienes \${edad} años\`)
}
// No infiere tipos, pueden enviarse datos incorrectos
saludar({ nombre: 26, edad: 'Diego' })

// Tipado incorrecto
function saludar2({ nombre: string, edad: number }) {
  // Aquí se están REENOMBRANDO las propiedades (sintaxis JS)
  // string y number ahora son alias para name y age
  console.log(\`hola \${nombre}\`) // Error: name no existe
}

// Tipado correcto:
// 1ra forma
function saludar3({ nombre, edad }: { nombre: string; edad: number }) {
  // Se tipea el objeto desestructurado
  console.log(\`hola \${nombre} tienes \${edad} años\`)
}
saludar3({ nombre: 'Diego', edad: 26 }) // Correcto

// 2da forma
function saludar4(persona: { nombre: string; edad: number }) {
  // Se tipea el objeto completo
  const { nombre, edad } = persona
  console.log(\`hola \${nombre} tienes \${edad} años\`)
}
saludar4({ nombre: 'Diego', edad: 26 }) // Correcto`})]),e("div",F,[n[18]||(n[18]=e("div",{class:"card-header"},[e("h3",null,"Typing Callbacks")],-1)),n[19]||(n[19]=e("p",null,"Define la firma de la función que se recibe como argumento.",-1)),s(o,{language:"typescript",code:`// tipado incorrecto:
function procesar(fn: Function) { // Function es el equivalente a Any
  fn(42);
}

// tipado correcto:
function procesar(fn: (n: number) => number) { // se tipean los parámetros y el retorno
  fn(42);
}`})])])]),n[30]||(n[30]=e("hr",{class:"divider"},null,-1)),e("section",E,[n[23]||(n[23]=e("h2",{class:"section-title typescript"},"Funciones Flecha (Arrow)",-1)),n[24]||(n[24]=e("p",{class:"section-desc"},"Existen dos formas principales de tipar las arrow functions de manera explícita.",-1)),e("div",j,[e("div",C,[n[21]||(n[21]=e("div",{class:"card-header"},[e("h3",null,"Forma 1: En línea")],-1)),s(o,{language:"typescript",code:"const sumar = (a: number, b: number): number => a + b;"})]),e("div",$,[n[22]||(n[22]=e("div",{class:"card-header"},[e("h3",null,"Forma 2: Tipo de variables")],-1)),s(o,{language:"typescript",code:"const sumar: (a: number, b: number) => number = (a, b) => a + b;"})])])]),n[31]||(n[31]=e("hr",{class:"divider"},null,-1)),e("section",P,[n[25]||(n[25]=e("h2",{class:"section-title typescript"},"Inferencia Contextual",-1)),n[26]||(n[26]=e("p",{class:"section-desc"},"TypeScript es inteligente: si una función aparece en un lugar donde TS sabe qué tipo de función debería ser, tipará los parámetros automáticamente.",-1)),e("div",D,[s(o,{language:"typescript",code:`const lenguajes = ["Python", "JavaScript", "TypeScript"];

// TS sabe que "s" es un string porque viene de un array de strings
lenguajes.forEach((s) => {
  console.log(s.toUpperCase());
});`})])]),s(t,{references:[{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JS"}]})]))}});export{I as default};
