import{C as t}from"./CodeBlock-Bz09fMKf.js";import{R as a}from"./ReferenceSection-BVvaRklu.js";import{d as o,c as r,b as e,e as n,f as i,o as l}from"./index-Bv0jxDU6.js";const d={class:"module-content"},c={class:"topic-section"},p={class:"card info"},u={class:"topic-section"},m={class:"cards-grid"},f={class:"card info"},y={class:"card info"},v={class:"topic-section"},g={class:"cards-grid"},b={class:"card info"},T={class:"card recommended"},I={class:"topic-section"},x={class:"card info"},C={class:"topic-section"},S={class:"cards-grid"},A={class:"card info"},P={class:"card info"},B={class:"card info"},D={class:"topic-section"},E={class:"cards-grid"},O={class:"card info"},j={class:"card info"},U=o({__name:"POOTS",setup(L){return(k,s)=>(l(),r("div",d,[s[30]||(s[30]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Programación Orientada a Objetos"),e("p",{class:"subtitle"},"Clases, interfaces y herencia para construir arquitecturas sólidas y escalables.")],-1)),e("section",c,[s[2]||(s[2]=e("h2",{class:"section-title typescript"},"Clases",-1)),s[3]||(s[3]=e("p",{class:"section-desc"},"TypeScript añade tipos y modificadores a las clases de ES6, permitiendo una definición más rigurosa de los objetos.",-1)),e("div",p,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis y Propiedades de Parámetros")],-1)),s[1]||(s[1]=e("p",null,"Puedes declarar propiedades directamente en el constructor (Shorthand), ahorrando líneas de código.",-1)),n(t,{language:"typescript",code:`class Usuario {
  // Shorthand: declara y asigna automáticamente
  constructor(
    public nombre: string,
    private id: number,
    protected email: string
  ) {}

  presentar() {
    return \`Hola, soy \${this.nombre}\`;
  }
}`})])]),s[31]||(s[31]=e("hr",{class:"divider"},null,-1)),e("section",u,[s[8]||(s[8]=e("h2",{class:"section-title typescript"},"Modificadores de Acceso",-1)),e("div",m,[e("div",f,[s[4]||(s[4]=e("div",{class:"card-header"},[e("h3",null,"public / private")],-1)),s[5]||(s[5]=e("p",null,[e("code",null,"public"),i(" (por defecto) permite acceso total. "),e("code",null,"private"),i(" solo permite acceso dentro de la misma clase.")],-1)),n(t,{language:"typescript",code:"private clave: string; // Oculto fuera de la clase"})]),e("div",y,[s[6]||(s[6]=e("div",{class:"card-header"},[e("h3",null,"protected / readonly")],-1)),s[7]||(s[7]=e("p",null,[e("code",null,"protected"),i(" permite acceso en subclases. "),e("code",null,"readonly"),i(" impide la modificación tras la asignación inicial.")],-1)),n(t,{language:"typescript",code:"readonly version = '1.0'; // Inmutable"})])])]),s[32]||(s[32]=e("hr",{class:"divider"},null,-1)),e("section",v,[s[12]||(s[12]=e("h2",{class:"section-title typescript"},"Herencia y Clases Abstractas",-1)),s[13]||(s[13]=e("p",{class:"section-desc"},"Extiende funcionalidades de clases existentes o define moldes incompletos.",-1)),e("div",g,[e("div",b,[s[9]||(s[9]=e("div",{class:"card-header"},[e("h3",null,"extends")],-1)),n(t,{language:"typescript",code:`class Empleado extends Usuario {
  constructor(nombre: string, public sueldo: number) {
    super(nombre, Date.now(), ''); // Llama al padre
  }
}`})]),e("div",T,[s[10]||(s[10]=e("div",{class:"card-header"},[e("h3",null,"Abstract Classes"),e("span",{class:"badge success"},"Patrón")],-1)),s[11]||(s[11]=e("p",null,"No se pueden instanciar directamente; sirven como base para otras clases.",-1)),n(t,{language:"typescript",code:`abstract class Animal {
  abstract emitirSonido(): void; // Obligatorio en hijos
}`})])])]),s[33]||(s[33]=e("hr",{class:"divider"},null,-1)),e("section",I,[s[15]||(s[15]=e("h2",{class:"section-title typescript"},"Interfaces vs Clases",-1)),s[16]||(s[16]=e("p",{class:"section-desc"},'Las interfaces definen el "qué" (contrato), las clases definen el "cómo" (implementación).',-1)),e("div",x,[s[14]||(s[14]=e("div",{class:"card-header"},[e("h3",null,"implements")],-1)),n(t,{language:"typescript",code:`interface IProcesable {
  procesar(): boolean;
}

class Tarea implements IProcesable {
  procesar() { return true; }
}`})])]),e("section",C,[s[23]||(s[23]=e("h2",{class:"section-title typescript"},"Type Alias Avanzados",-1)),s[24]||(s[24]=e("p",{class:"section-desc"},"Características avanzadas de los Type Alias para construir tipos flexibles.",-1)),e("div",S,[e("div",A,[s[17]||(s[17]=e("div",{class:"card-header"},[e("h3",null,"Intersection Types")],-1)),s[18]||(s[18]=e("p",null,[i("Combina múltiples tipos en uno solo usando "),e("code",null,"&"),i(".")],-1)),n(t,{language:"typescript",code:`type Base = { id: number };
type Detalle = { nombre: string };
type Completo = Base & Detalle;

const obj: Completo = { id: 1, nombre: 'Ana' };`})]),e("div",P,[s[19]||(s[19]=e("div",{class:"card-header"},[e("h3",null,"Template Types & Type Indexing")],-1)),s[20]||(s[20]=e("p",null,[i("Usa "),e("i",null,"template literals"),i(" y accede a tipos mediante índices.")],-1)),n(t,{language:"typescript",code:`type Talla = 'S' | 'M' | 'L';
type Variante = \`Talla-\${Talla}\`; // 'Talla-S' | 'Talla-M' | 'Talla-L'

type API = { user: { id: number } };
type UserId = API['user']['id']; // number`})]),e("div",B,[s[21]||(s[21]=e("div",{class:"card-header"},[e("h3",null,"Type from value (typeof)")],-1)),s[22]||(s[22]=e("p",null,"Genera un tipo a partir de un valor u objeto existente.",-1)),n(t,{language:"typescript",code:`const config = { theme: 'dark', port: 3000 };
type Config = typeof config;`})])])]),s[34]||(s[34]=e("hr",{class:"divider"},null,-1)),e("section",D,[s[28]||(s[28]=e("h2",{class:"section-title typescript"},"Interfaces Avanzadas",-1)),s[29]||(s[29]=e("p",{class:"section-desc"},"Las interfaces soportan anidamiento, extensión y firmas de funciones.",-1)),e("div",E,[e("div",O,[s[25]||(s[25]=e("div",{class:"card-header"},[e("h3",null,"Interfaces Anidadas y Extends")],-1)),n(t,{language:"typescript",code:`interface Direccion {
  ciudad: string;
}
interface Persona extends Direccion {
  nombre: string;
  contacto?: string; // Propiedad opcional
}`})]),e("div",j,[s[26]||(s[26]=e("div",{class:"card-header"},[e("h3",null,"Firmas de Funciones")],-1)),s[27]||(s[27]=e("p",null,"Se pueden tipar las funciones dentro de la interfaz.",-1)),n(t,{language:"typescript",code:`interface Calculadora {
  (a: number, b: number): number; // Firma de función
  sumar: (a: number, b: number) => number; // Método
}`})])])]),s[35]||(s[35]=e("hr",{class:"divider"},null,-1)),n(a,{references:[{techId:"typescript",moduleId:"inferencia",text:"Inferencia de Tipos"},{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"enums",text:"Enums en TS"},{techId:"typescript",moduleId:"genericos",text:"Genéricos en TS"}]})]))}});export{U as default};
