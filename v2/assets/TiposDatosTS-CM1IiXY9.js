import{C as o}from"./CodeBlock-Dn5fWvHm.js";import{R as t}from"./ReferenceSection-DI4COFKZ.js";import{d as r,c as a,a as l,b as n,e as s,f as i,o as d}from"./index-B_9b5es9.js";const p={class:"module-content"},u={class:"topic-section"},c={class:"cards-grid"},m={class:"card info"},g={class:"card info"},v={class:"topic-section"},f={class:"cards-grid"},y={class:"card warning"},b={class:"card recommended"},T={class:"card info"},S={class:"topic-section"},E={class:"cards-grid"},q={class:"card info"},A={class:"card info"},x={class:"card info"},D={class:"card info"},C={class:"card info"},j={class:"card info"},N={class:"card info"},P={class:"topic-section"},w={class:"cards-grid"},L={class:"card info"},B={class:"card info"},J=r({__name:"TiposDatosTS",setup(k){return(I,e)=>(d(),a("div",p,[e[33]||(e[33]=l('<div class="header-section"><h1 class="main-title typescript">Tipos de Datos</h1><p class="subtitle">La base de la seguridad y el tipado estático en TypeScript.</p></div><section class="topic-section"><h2 class="section-title typescript">Tipado Estático</h2><p class="section-desc">A diferencia de JavaScript, que es de tipado dinámico, TypeScript permite definir tipos de forma estática. Esto significa que podemos especificar qué tipo de datos debe contener una variable, permitiendo detectar errores durante el desarrollo y no en tiempo de ejecución.</p></section>',2)),n("section",u,[e[4]||(e[4]=n("h2",{class:"section-title typescript"},"Tipos Primitivos",-1)),e[5]||(e[5]=n("p",{class:"section-desc"},"TypeScript soporta todos los tipos primitivos de JavaScript.",-1)),n("div",c,[n("div",m,[e[0]||(e[0]=n("h3",null,"string, number, boolean",-1)),e[1]||(e[1]=n("p",null,"Los tipos básicos para texto, números (incluyendo decimales) y valores lógicos.",-1)),s(o,{language:"typescript",code:`let nombre: string = "Diego";
let edad: number = 25;
let esEstudiante: boolean = true;`})]),n("div",g,[e[2]||(e[2]=n("h3",null,"null & undefined",-1)),e[3]||(e[3]=n("p",null,"Representan la ausencia de valor. En TS son tipos por derecho propio.",-1)),s(o,{language:"typescript",code:`let vacio: null = null;
let indefinido: undefined = undefined;`})])])]),n("section",v,[e[12]||(e[12]=n("h2",{class:"section-title typescript"},"Tipos Especiales",-1)),n("div",f,[n("div",y,[e[6]||(e[6]=n("div",{class:"card-header"},[n("h3",null,"any"),n("span",{class:"badge danger"},"Evitar")],-1)),e[7]||(e[7]=n("p",null,"Desactiva la comprobación de tipos. Permite asignar cualquier valor. Úsalo solo como último recurso.",-1)),s(o,{language:"typescript",code:`let algo: any = "Texto";
algo = 10; // No hay error`})]),n("div",b,[e[8]||(e[8]=n("div",{class:"card-header"},[n("h3",null,"unknown"),n("span",{class:"badge success"},"Seguro")],-1)),e[9]||(e[9]=n("p",null,[i("Similar a "),n("code",null,"any"),i(", pero más seguro. No puedes realizar operaciones sobre una variable "),n("code",null,"unknown"),i(" sin antes verificar su tipo.")],-1)),s(o,{language:"typescript",code:`let valor: unknown = "Hola";
// valor.toUpperCase(); // Error!
if (typeof valor === "string") {
  valor.toUpperCase(); // OK!
}`})]),n("div",T,[e[10]||(e[10]=n("h3",null,"void & never",-1)),e[11]||(e[11]=n("p",null,[n("code",null,"void"),i(" indica que una función no retorna nada. "),n("code",null,"never"),i(" indica valores que nunca ocurrirán (ej: funciones que lanzan errores).")],-1)),s(o,{language:"typescript",code:`function log(): void { console.log('Hi'); }

function error(): never {
  throw new Error('Error fatal');
}`})])])]),n("section",S,[e[27]||(e[27]=n("h2",{class:"section-title typescript"},"Tipos Complejos",-1)),n("div",E,[n("div",q,[e[13]||(e[13]=n("h3",null,"Interfaces",-1)),e[14]||(e[14]=n("p",null,[i("Se definen mediante la palabra reservada "),n("code",null,"interface"),i(" seguida del nombre de la interfaz y llaves {} los cuales contienen las propiedades y sus tipos.")],-1)),s(o,{language:"typescript",code:`interface Persona {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
};`})]),n("div",A,[e[15]||(e[15]=n("h3",null,"Type Aliases",-1)),e[16]||(e[16]=n("p",null,[i("Similar a las interfaces, se definen mediante la palabra reservada "),n("code",null,"type"),i(" seguida del nombre del type alias y llaves {}. La diferencia es que los type aliases pueden ser usados para definir tipos de datos primitivos, mientras que las interfaces solo pueden ser usadas para definir tipos de datos complejos.")],-1)),s(o,{language:"typescript",code:`type Persona = {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Ana",
  edad: 28,
};`})]),n("div",x,[e[17]||(e[17]=n("h3",null,"Objetos",-1)),e[18]||(e[18]=n("p",null,"Se definen mediante llaves {} conteniendo los nombres de las propiedades y sus tipos de datos esperados.",-1)),s(o,{language:"typescript",code:`let persona1: {
  nombre: string;
  edad: number
} = {
  nombre: "Luis",
  edad: 22,
};`})]),n("div",D,[e[19]||(e[19]=n("h3",null,"Arrays",-1)),e[20]||(e[20]=n("p",null,"Se definen mediante el nombre del array seguido de corchetes [].",-1)),s(o,{language:"typescript",code:`let lista: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];`})]),n("div",C,[e[21]||(e[21]=n("h3",null,"Enums",-1)),e[22]||(e[22]=n("p",null,"Permiten definir un conjunto de constantes con nombre.",-1)),s(o,{language:"typescript",code:`enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
  Derecha
}

let miDireccion: Direccion = Direccion.Arriba;`})]),n("div",j,[e[23]||(e[23]=n("h3",null,"Tuplas",-1)),e[24]||(e[24]=n("p",null,"Permiten expresar un array con un número fijo de elementos cuyos tipos son conocidos.",-1)),s(o,{language:"typescript",code:`let persona: [string, number];
persona = ["Diego", 25];
// persona = [25, "Diego"]; // Error!`})]),n("div",N,[e[25]||(e[25]=n("h3",null,"Union Types",-1)),e[26]||(e[26]=n("p",null,"Permiten que una variable pueda ser de más de un tipo.",-1)),s(o,{language:"typescript",code:`let id: string | number;
id = 10;
id = "ABC";`})])])]),e[34]||(e[34]=n("hr",{class:"divider"},null,-1)),n("section",P,[e[32]||(e[32]=n("h2",{class:"section-title typescript"},"Aserciones y Narrowing",-1)),n("div",w,[n("div",L,[e[28]||(e[28]=n("h3",null,"Type Assertions (as)",-1)),e[29]||(e[29]=n("p",null,[i('Cuando tú sabes más sobre el tipo de un valor que TypeScript, puedes "forzar" el tipo. Aunque existe una sintaxis alternativa con '),n("code",null,"<Tipo>"),i(", el estándar de la industria es usar "),n("code",null,"as Tipo"),i(" porque la primera es incompatible con TSX/React.")],-1)),s(o,{language:"typescript",code:`// canvas es un HTMLElement por defecto
const canvas = document.getElementById("main") as HTMLCanvasElement;

// Sintaxis antigua (No usar en proyectos con React/TSX):
// const canvas = <HTMLCanvasElement>document.getElementById("main");`})]),n("div",B,[e[30]||(e[30]=n("h3",null,"Narrowing",-1)),e[31]||(e[31]=n("p",null,"Técnica para reducir un tipo amplio a uno más específico mediante validaciones.",-1)),s(o,{language:"typescript",code:`function split(val: string | number) {
  if (typeof val === "string") {
    return val.split(""); // TS sabe que es string
  }
  return val.toFixed(2); // TS sabe que es number
}`})])])]),s(t,{references:[{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JavaScript"}]})]))}});export{J as default};
