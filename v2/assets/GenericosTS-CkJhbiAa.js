import{C as t}from"./CodeBlock-B-SpWwSA.js";import{R as i}from"./ReferenceSection-1V-ePbHK.js";import{d as r,c as a,b as e,e as o,f as s,o as d}from"./index-CaUrYX4U.js";const l={class:"module-content"},c={class:"topic-section"},u={class:"cards-grid"},p={class:"card info"},g={class:"card recommended"},m={class:"topic-section"},f={class:"topic-section"},y={class:"cards-grid"},T={class:"card info"},b={class:"card info"},v={class:"topic-section"},x={class:"cards-grid"},C={class:"card warning"},j=r({__name:"GenericosTS",setup(L){return(G,n)=>(d(),a("div",l,[n[16]||(n[16]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Genéricos"),e("p",{class:"subtitle"},"Crea código reutilizable, flexible y con tipado fuerte mediante parámetros de tipo.")],-1)),e("section",c,[n[4]||(n[4]=e("h2",{class:"section-title typescript"},"¿Qué son los Genéricos?",-1)),n[5]||(n[5]=e("p",{class:"section-desc"},[s("Los genéricos permiten que las funciones, clases e interfaces trabajen con una variedad de tipos en lugar de uno solo, sin perder la seguridad del tipado estático (a diferencia de usar "),e("code",null,"any"),s('). Piensa en ellos como "variables de tipo" que pasamos como argumentos.')],-1)),e("div",u,[e("div",p,[n[0]||(n[0]=e("div",{class:"card-header"},[e("h3",null,"El problema: Duplicidad o pérdida de tipo")],-1)),n[1]||(n[1]=e("p",null,[s("Sin genéricos, o bien repetimos lógica para cada tipo de dato, o bien usamos "),e("code",null,"any"),s(" (perdiendo la seguridad de TypeScript).")],-1)),o(t,{language:"typescript",code:`// Sin seguridad de tipo:
function identityAny(arg: any): any {
  return arg;
}
const res = identityAny('hola'); // res es de tipo 'any'`})]),e("div",g,[n[2]||(n[2]=e("div",{class:"card-header"},[e("h3",null,"La solución: Parámetro de tipo <T>"),e("span",{class:"badge success"},"Seguro")],-1)),n[3]||(n[3]=e("p",null,[s("Usamos un marcador (usualmente "),e("code",null,"T"),s(" por "),e("i",null,"Type"),s(") para capturar el tipo provisto por el usuario en la llamada.")],-1)),o(t,{language:"typescript",code:`// Con seguridad de tipo:
function identity<T>(arg: T): T {
  return arg;
}
const res = identity<string>('hola'); // res es de tipo 'string'`})])])]),n[17]||(n[17]=e("hr",{class:"divider"},null,-1)),e("section",m,[n[6]||(n[6]=e("h2",{class:"section-title typescript"},"Funciones Genéricas",-1)),n[7]||(n[7]=e("p",{class:"section-desc"},"Podemos usar genéricos tanto en funciones estándar como en funciones flecha. TypeScript también puede inferir el tipo automáticamente basándose en los argumentos pasados.",-1)),o(t,{language:"typescript",code:`// Función estándar
function primeraPosicion<T>(arr: T[]): T {
  return arr[0];
}

// Función Flecha (Arrow Function)
const primeraPosicionArrow = <T>(arr: T[]): T => {
  return arr[0];
};

const primerNumero = primeraPosicion([10, 20, 30]); // Infiere number
const primerTexto = primeraPosicion(['a', 'b', 'c']); // Infiere string`})]),n[18]||(n[18]=e("hr",{class:"divider"},null,-1)),e("section",f,[n[10]||(n[10]=e("h2",{class:"section-title typescript"},"Interfaces y Clases Genéricas",-1)),n[11]||(n[11]=e("p",{class:"section-desc"},"Las interfaces y clases pueden parametrizarse con tipos para modelar estructuras de datos sumamente flexibles.",-1)),e("div",y,[e("div",T,[n[8]||(n[8]=e("div",{class:"card-header"},[e("h3",null,"Interfaces Genéricas")],-1)),o(t,{language:"typescript",code:`interface Respuesta<T> {
  exitoso: boolean;
  datos: T;
}

const respuestaUsuarios: Respuesta<{ nombre: string }[]> = {
  exitoso: true,
  datos: [{ nombre: 'Diego' }]
};`})]),e("div",b,[n[9]||(n[9]=e("div",{class:"card-header"},[e("h3",null,"Clases Genéricas")],-1)),o(t,{language:"typescript",code:`class Caja<T> {
  contenido: T;
  constructor(valor: T) {
    this.contenido = valor;
  }
  obtenerContenido(): T {
    return this.contenido;
  }
}

const cajaNumeros = new Caja<number>(100);
const cajaTextos = new Caja<string>('Hola');`})])])]),n[19]||(n[19]=e("hr",{class:"divider"},null,-1)),e("section",v,[n[14]||(n[14]=e("h2",{class:"section-title typescript"},"Restricciones de Genéricos",-1)),n[15]||(n[15]=e("p",{class:"section-desc"},[s("A veces no queremos admitir absolutamente cualquier tipo, sino restringir el genérico a tipos que cumplan con ciertas condiciones utilizando la palabra clave "),e("code",null,"extends"),s(".")],-1)),e("div",x,[e("div",C,[n[12]||(n[12]=e("div",{class:"card-header"},[e("h3",null,"Uso de extends"),e("span",{class:"badge danger"},"Restricción")],-1)),n[13]||(n[13]=e("p",null,"Forzamos a que el parámetro genérico tenga al menos las propiedades especificadas.",-1)),o(t,{language:"typescript",code:`interface ConLongitud {
  length: number;
}

function loguearLongitud<T extends ConLongitud>(arg: T): T {
  console.log(arg.length); // Seguro: 'length' está garantizado
  return arg;
}

loguearLongitud('Hola'); // OK: string tiene .length
loguearLongitud([1, 2, 3]); // OK: array tiene .length
// loguearLongitud(10); // Error: number no tiene .length`})])])]),n[20]||(n[20]=e("hr",{class:"divider"},null,-1)),o(i,{references:[{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"poo",text:"Programación Orientada a Objetos"}]})]))}});export{j as default};
