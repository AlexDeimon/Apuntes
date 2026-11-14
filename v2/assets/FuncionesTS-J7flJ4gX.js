import{C as s}from"./CodeBlock-CvGzwvz0.js";import{R as a}from"./ReferenceSection-BEF4KlHN.js";import{d as i,c as t,b as n,e as r,f as o,a as l,o as d}from"./index-BiVGtinp.js";const u={class:"module-content"},c={class:"topic-section"},p={class:"cards-grid"},m={class:"card info"},g={class:"card recommended"},b={class:"topic-section"},f={class:"cards-grid"},v={class:"card info"},y={class:"card info"},x={class:"cards-grid"},S={class:"card info"},F={class:"card warning"},T={class:"topic-section"},q={class:"cards-grid"},E={class:"card info"},D={class:"card recommended"},O={class:"topic-section"},j={class:"cards-grid"},A={class:"card info"},C={class:"card info"},I={class:"topic-section"},P={class:"card info"},R={class:"topic-section"},$={class:"cards-grid"},N={class:"card info"},w={class:"card warning"},B={class:"cards-grid"},k={class:"card info"},K={class:"card recommended"},V={class:"card recommended"},h=i({__name:"FuncionesTS",setup(J){return(L,e)=>(d(),t("div",u,[e[42]||(e[42]=n("div",{class:"header-section"},[n("h1",{class:"main-title typescript"},"Funciones"),n("p",{class:"subtitle"},"Añadiendo tipado fuerte a la lógica de negocio.")],-1)),n("section",c,[e[3]||(e[3]=n("h2",{class:"section-title typescript"},"Tipado de Parámetros y Retorno",-1)),e[4]||(e[4]=n("p",{class:"section-desc"},"En TypeScript, podemos especificar el tipo de cada parámetro y el tipo de dato que la función devolverá después de su ejecución.",-1)),n("div",p,[n("div",m,[e[0]||(e[0]=n("div",{class:"card-header"},[n("h3",null,"Sintaxis Estándar")],-1)),r(s,{language:"typescript",code:"function saludar(nombre: string): string {\n  return `Hola ${nombre}`;\n}"})]),n("div",g,[e[1]||(e[1]=n("div",{class:"card-header"},[n("h3",null,"Inferencia de Retorno")],-1)),e[2]||(e[2]=n("p",null,[o("TS a menudo puede adivinar qué devuelve una función basándose en la sentencia "),n("code",null,"return"),o(".")],-1)),r(s,{language:"typescript",code:`// Forma 1: Explicita
function sumar(a: number, b: number): number {
  return a + b;
}

// Forma 2: Implicita
function sumar(a: number, b: number) {
  return a + b; // TS infiere que retorna un number
}`})])])]),e[43]||(e[43]=n("hr",{class:"divider"},null,-1)),n("section",b,[e[12]||(e[12]=n("h2",{class:"section-title typescript"},"Parámetros Opcionales y por Defecto",-1)),n("div",f,[n("div",v,[e[5]||(e[5]=n("div",{class:"card-header"},[n("h3",null,"Opcionales (?)")],-1)),e[6]||(e[6]=n("p",null,[o("Usa "),n("code",null,"?"),o(" para marcar parámetros que no siempre se enviarán.")],-1)),r(s,{language:"typescript",code:`function log(msg: string, user?: string) {
  console.log(msg, user || "Anónimo");
}`})]),n("div",y,[e[7]||(e[7]=n("div",{class:"card-header"},[n("h3",null,"Por Defecto")],-1)),e[8]||(e[8]=n("p",null,"Asigna un valor inicial. TS inferirá el tipo automáticamente.",-1)),r(s,{language:"typescript",code:`function f(x = 10) {
  // x es inferido como number
}`})])]),e[13]||(e[13]=n("br",null,null,-1)),e[14]||(e[14]=n("br",null,null,-1)),n("div",x,[n("div",S,[e[9]||(e[9]=n("div",{class:"card-header"},[n("h3",null,"Rest Parameters")],-1)),e[10]||(e[10]=n("p",null,"Para recibir un número indefinido de argumentos como un array.",-1)),r(s,{language:"typescript",code:`function total(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}`})]),n("div",F,[e[11]||(e[11]=l('<div class="card-header"><h3>Any (Implícito)</h3></div><p>Si no se le asigna el tipo de dato explícitamente, TypeScript intentará asignarle <code>any</code>. Sin embargo, bajo el modo estricto actual (<code>strict: true</code> o <code>noImplicitAny: true</code>), esto <strong>lanzará un error de compilación</strong> indicando que el parámetro tiene un tipo <code>any</code> implícito.</p>',2)),r(s,{language:"typescript",code:`function saludar(nombre) { // Error: Parameter 'nombre' implicitly has an 'any' type.
  console.log(\`Hola \${nombre}\`);
}

saludar(123);`})])])]),e[44]||(e[44]=n("hr",{class:"divider"},null,-1)),n("section",T,[e[19]||(e[19]=n("h2",{class:"section-title typescript"},"Objetos y Callbacks",-1)),n("div",q,[n("div",E,[e[15]||(e[15]=n("div",{class:"card-header"},[n("h3",null,"Objetos como Parámetros")],-1)),e[16]||(e[16]=n("p",null,"Podemos tipar el objeto directamente o usar desestructuración.",-1)),r(s,{language:"typescript",code:`// Any implícito
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
saludar4({ nombre: 'Diego', edad: 26 }) // Correcto`})]),n("div",D,[e[17]||(e[17]=n("div",{class:"card-header"},[n("h3",null,"Typing Callbacks")],-1)),e[18]||(e[18]=n("p",null,"Define la firma de la función que se recibe como argumento.",-1)),r(s,{language:"typescript",code:`// tipado incorrecto:
function procesar(fn: Function) { // Function es el equivalente a Any
  fn(42);
}

// tipado correcto:
function procesar(fn: (n: number) => number) { // se tipean los parámetros y el retorno
  fn(42);
}`})])])]),e[45]||(e[45]=n("hr",{class:"divider"},null,-1)),n("section",O,[e[22]||(e[22]=n("h2",{class:"section-title typescript"},"Funciones Flecha (Arrow)",-1)),e[23]||(e[23]=n("p",{class:"section-desc"},"Existen dos formas principales de tipar las arrow functions de manera explícita.",-1)),n("div",j,[n("div",A,[e[20]||(e[20]=n("div",{class:"card-header"},[n("h3",null,"Forma 1: En línea")],-1)),r(s,{language:"typescript",code:"const sumar = (a: number, b: number): number => a + b;"})]),n("div",C,[e[21]||(e[21]=n("div",{class:"card-header"},[n("h3",null,"Forma 2: Tipo de variables")],-1)),r(s,{language:"typescript",code:"const sumar: (a: number, b: number) => number = (a, b) => a + b;"})])])]),e[46]||(e[46]=n("hr",{class:"divider"},null,-1)),n("section",I,[e[24]||(e[24]=n("h2",{class:"section-title typescript"},"Inferencia Contextual",-1)),e[25]||(e[25]=n("p",{class:"section-desc"},"TypeScript es inteligente: si una función aparece en un lugar donde TS sabe qué tipo de función debería ser, tipará los parámetros automáticamente.",-1)),n("div",P,[r(s,{language:"typescript",code:`const lenguajes = ["Python", "JavaScript", "TypeScript"];

// TS sabe que "s" es un string porque viene de un array de strings
lenguajes.forEach((s) => {
  console.log(s.toUpperCase());
});`})])]),e[47]||(e[47]=n("hr",{class:"divider"},null,-1)),n("section",R,[e[36]||(e[36]=n("h2",{class:"section-title typescript"},"Sobrecarga de Funciones (Overloads)",-1)),e[37]||(e[37]=n("p",{class:"section-desc"},[o("Algunas funciones pueden llamarse con distintas combinaciones de argumentos y devolver un tipo diferente según cada caso. La sobrecarga permite declarar "),n("strong",null,"varias firmas"),o(" para una misma función, seguidas de una única implementación.")],-1)),n("div",$,[n("div",N,[e[26]||(e[26]=n("div",{class:"card-header"},[n("h3",null,"Sintaxis")],-1)),e[27]||(e[27]=n("p",null,[o("Se escriben primero las "),n("strong",null,"firmas de sobrecarga"),o(" (sin cuerpo) y al final la "),n("strong",null,"firma de implementación"),o(", que debe ser compatible con todas las anteriores.")],-1)),r(s,{language:"typescript",code:`// Firmas de sobrecarga (visibles para quien llama la función)
function convertir(valor: string): number;
function convertir(valor: number): string;

// Firma de implementación (NO es visible desde afuera)
function convertir(valor: string | number): number | string {
  if (typeof valor === "string") {
    return parseInt(valor, 10);
  }
  return valor.toString();
}

const a = convertir("42"); // Tipo: number
const b = convertir(42);   // Tipo: string
// convertir(true);        // Error: ninguna sobrecarga coincide`})]),n("div",w,[e[28]||(e[28]=n("div",{class:"card-header"},[n("h3",null,"La implementación no cuenta")],-1)),e[29]||(e[29]=n("p",null,"Solo las firmas de sobrecarga se pueden usar al llamar la función. La firma de implementación queda oculta, por eso debe ser más general que todas las demás.",-1)),r(s,{language:"typescript",code:`function f(x: string): void;
function f(x: number): void;
function f(x: string | number) {}

f("hola"); // OK
f(10);     // OK
// f(Math.random() > 0.5 ? "a" : 1);
// Error: la union string | number no coincide con ninguna
// sobrecarga individual (aunque la implementacion si la acepte)`})])]),e[38]||(e[38]=n("br",null,null,-1)),e[39]||(e[39]=n("br",null,null,-1)),n("div",B,[n("div",k,[e[30]||(e[30]=n("div",{class:"card-header"},[n("h3",null,"Distinto número de parámetros")],-1)),e[31]||(e[31]=n("p",null,"Un caso típico: la cantidad de argumentos determina cómo se interpretan.",-1)),r(s,{language:"typescript",code:`function crearFecha(timestamp: number): Date;
function crearFecha(anio: number, mes: number, dia: number): Date;
function crearFecha(a: number, m?: number, d?: number): Date {
  if (m !== undefined && d !== undefined) {
    return new Date(a, m, d);
  }
  return new Date(a);
}

crearFecha(1700000000000); // OK
crearFecha(2025, 0, 15);   // OK
// crearFecha(2025, 0);    // Error: no existe sobrecarga con 2 argumentos`})]),n("div",K,[e[32]||(e[32]=n("div",{class:"card-header"},[n("h3",null,"Orden de las sobrecargas"),n("span",{class:"badge success"},"Buena práctica")],-1)),e[33]||(e[33]=n("p",null,[o("TS evalúa las sobrecargas "),n("strong",null,"de arriba hacia abajo"),o(" y usa la primera que coincide. Coloca las firmas más específicas primero y las más generales al final.")],-1)),r(s,{language:"typescript",code:`function procesar(x: "texto"): string;
function procesar(x: string): number;
function procesar(x: string): string | number {
  return x === "texto" ? "literal" : x.length;
}

procesar("texto"); // string (primera sobrecarga)
procesar("otro");  // number (segunda sobrecarga)`})])]),e[40]||(e[40]=n("br",null,null,-1)),e[41]||(e[41]=n("br",null,null,-1)),n("div",V,[e[34]||(e[34]=n("div",{class:"card-header"},[n("h3",null,"¿Sobrecarga o unión / opcionales?"),n("span",{class:"badge success"},"Recomendación")],-1)),e[35]||(e[35]=n("p",null,[o("Si las firmas solo difieren en un parámetro opcional o en un tipo que se puede expresar con una unión, "),n("strong",null,"prefiere esas alternativas"),o(": son más simples y permiten pasar valores de tipo unión. Reserva la sobrecarga para cuando el "),n("strong",null,"tipo de retorno depende del tipo de los argumentos"),o(".")],-1)),r(s,{language:"typescript",code:`// Innecesaria: se resuelve con una union
function largo(x: string): number;
function largo(x: any[]): number;
function largo(x: string | any[]) { return x.length; }

// Mejor:
function largo2(x: string | any[]): number {
  return x.length;
}`})])]),r(a,{references:[{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JS"}]})]))}});export{h as default};
