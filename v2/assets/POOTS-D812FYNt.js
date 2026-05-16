import{C as t}from"./CodeBlock-cIFj2Ax-.js";import{R as o}from"./ReferenceSection-BTQsf0u_.js";import{d as a,c as r,b as s,e as n,f as i,o as l}from"./index-DkYEpUq_.js";const d={class:"module-content"},c={class:"topic-section"},p={class:"card info"},u={class:"topic-section"},m={class:"cards-grid"},f={class:"card info"},y={class:"card info"},v={class:"topic-section"},g={class:"cards-grid"},b={class:"card info"},T={class:"card recommended"},x={class:"topic-section"},C={class:"card info"},I={class:"topic-section"},P={class:"cards-grid"},A={class:"card info"},S={class:"card info"},j={class:"card info"},B={class:"topic-section"},D={class:"cards-grid"},E={class:"card info"},O={class:"card info"},L={class:"topic-section"},N={class:"card info"},q=a({__name:"POOTS",setup(k){return(z,e)=>(l(),r("div",d,[e[32]||(e[32]=s("div",{class:"header-section"},[s("h1",{class:"main-title typescript"},"Programación Orientada a Objetos"),s("p",{class:"subtitle"},"Clases, interfaces y herencia para construir arquitecturas sólidas y escalables.")],-1)),s("section",c,[e[2]||(e[2]=s("h2",{class:"section-title typescript"},"Clases",-1)),e[3]||(e[3]=s("p",{class:"section-desc"},"TypeScript añade tipos y modificadores a las clases de ES6, permitiendo una definición más rigurosa de los objetos.",-1)),s("div",p,[e[0]||(e[0]=s("div",{class:"card-header"},[s("h3",null,"Sintaxis y Propiedades de Parámetros")],-1)),e[1]||(e[1]=s("p",null,"Puedes declarar propiedades directamente en el constructor (Shorthand), ahorrando líneas de código.",-1)),n(t,{language:"typescript",code:`class Usuario {
  // Shorthand: declara y asigna automáticamente
  constructor(
    public nombre: string,
    private id: number,
    protected email: string
  ) {}

  presentar() {
    return \`Hola, soy \${this.nombre}\`;
  }
}`})])]),e[33]||(e[33]=s("hr",{class:"divider"},null,-1)),s("section",u,[e[8]||(e[8]=s("h2",{class:"section-title typescript"},"Modificadores de Acceso",-1)),s("div",m,[s("div",f,[e[4]||(e[4]=s("div",{class:"card-header"},[s("h3",null,"public / private")],-1)),e[5]||(e[5]=s("p",null,[s("code",null,"public"),i(" (por defecto) permite acceso total. "),s("code",null,"private"),i(" solo permite acceso dentro de la misma clase.")],-1)),n(t,{language:"typescript",code:"private clave: string; // Oculto fuera de la clase"})]),s("div",y,[e[6]||(e[6]=s("div",{class:"card-header"},[s("h3",null,"protected / readonly")],-1)),e[7]||(e[7]=s("p",null,[s("code",null,"protected"),i(" permite acceso en subclases. "),s("code",null,"readonly"),i(" impide la modificación tras la asignación inicial.")],-1)),n(t,{language:"typescript",code:"readonly version = '1.0'; // Inmutable"})])])]),e[34]||(e[34]=s("hr",{class:"divider"},null,-1)),s("section",v,[e[12]||(e[12]=s("h2",{class:"section-title typescript"},"Herencia y Clases Abstractas",-1)),e[13]||(e[13]=s("p",{class:"section-desc"},"Extiende funcionalidades de clases existentes o define moldes incompletos.",-1)),s("div",g,[s("div",b,[e[9]||(e[9]=s("div",{class:"card-header"},[s("h3",null,"extends")],-1)),n(t,{language:"typescript",code:`class Empleado extends Usuario {
  constructor(nombre: string, public sueldo: number) {
    super(nombre, Date.now(), ''); // Llama al padre
  }
}`})]),s("div",T,[e[10]||(e[10]=s("div",{class:"card-header"},[s("h3",null,"Abstract Classes"),s("span",{class:"badge success"},"Patrón")],-1)),e[11]||(e[11]=s("p",null,"No se pueden instanciar directamente; sirven como base para otras clases.",-1)),n(t,{language:"typescript",code:`abstract class Animal {
  abstract emitirSonido(): void; // Obligatorio en hijos
}`})])])]),e[35]||(e[35]=s("hr",{class:"divider"},null,-1)),s("section",x,[e[15]||(e[15]=s("h2",{class:"section-title typescript"},"Interfaces vs Clases",-1)),e[16]||(e[16]=s("p",{class:"section-desc"},'Las interfaces definen el "qué" (contrato), las clases definen el "cómo" (implementación).',-1)),s("div",C,[e[14]||(e[14]=s("div",{class:"card-header"},[s("h3",null,"implements")],-1)),n(t,{language:"typescript",code:`interface IProcesable {
  procesar(): boolean;
}

class Tarea implements IProcesable {
  procesar() { return true; }
}`})])]),s("section",I,[e[23]||(e[23]=s("h2",{class:"section-title typescript"},"Type Alias Avanzados",-1)),e[24]||(e[24]=s("p",{class:"section-desc"},"Características avanzadas de los Type Alias para construir tipos flexibles.",-1)),s("div",P,[s("div",A,[e[17]||(e[17]=s("div",{class:"card-header"},[s("h3",null,"Intersection Types")],-1)),e[18]||(e[18]=s("p",null,[i("Combina múltiples tipos en uno solo usando "),s("code",null,"&"),i(".")],-1)),n(t,{language:"typescript",code:`type Base = { id: number };
type Detalle = { nombre: string };
type Completo = Base & Detalle;

const obj: Completo = { id: 1, nombre: 'Ana' };`})]),s("div",S,[e[19]||(e[19]=s("div",{class:"card-header"},[s("h3",null,"Template Types & Type Indexing")],-1)),e[20]||(e[20]=s("p",null,[i("Usa "),s("i",null,"template literals"),i(" y accede a tipos mediante índices.")],-1)),n(t,{language:"typescript",code:`type Talla = 'S' | 'M' | 'L';
type Variante = \`Talla-\${Talla}\`; // 'Talla-S' | 'Talla-M' | 'Talla-L'

type API = { user: { id: number } };
type UserId = API['user']['id']; // number`})]),s("div",j,[e[21]||(e[21]=s("div",{class:"card-header"},[s("h3",null,"Type from value (typeof)")],-1)),e[22]||(e[22]=s("p",null,"Genera un tipo a partir de un valor u objeto existente.",-1)),n(t,{language:"typescript",code:`const config = { theme: 'dark', port: 3000 };
type Config = typeof config;`})])])]),e[36]||(e[36]=s("hr",{class:"divider"},null,-1)),s("section",B,[e[28]||(e[28]=s("h2",{class:"section-title typescript"},"Interfaces Avanzadas",-1)),e[29]||(e[29]=s("p",{class:"section-desc"},"Las interfaces soportan anidamiento, extensión y firmas de funciones.",-1)),s("div",D,[s("div",E,[e[25]||(e[25]=s("div",{class:"card-header"},[s("h3",null,"Interfaces Anidadas y Extends")],-1)),n(t,{language:"typescript",code:`interface Direccion {
  ciudad: string;
}
interface Persona extends Direccion {
  nombre: string;
  contacto?: string; // Propiedad opcional
}`})]),s("div",O,[e[26]||(e[26]=s("div",{class:"card-header"},[s("h3",null,"Firmas de Funciones")],-1)),e[27]||(e[27]=s("p",null,"Se pueden tipar las funciones dentro de la interfaz.",-1)),n(t,{language:"typescript",code:`interface Calculadora {
  (a: number, b: number): number; // Firma de función
  sumar: (a: number, b: number) => number; // Método
}`})])])]),e[37]||(e[37]=s("hr",{class:"divider"},null,-1)),s("section",L,[e[30]||(e[30]=s("h2",{class:"section-title typescript"},"Genéricos (Generics)",-1)),e[31]||(e[31]=s("p",{class:"section-desc"},"Permiten crear componentes y clases que funcionan con diferentes tipos dinámicos sin perder el tipado fuerte.",-1)),s("div",N,[n(t,{language:"typescript",code:`class Caja<T> {
  contenido: T;
  constructor(valor: T) {
    this.contenido = valor;
  }
  obtenerContenido(): T {
    return this.contenido;
  }
}

const cajaNumeros = new Caja<number>(100);
const cajaTextos = new Caja<string>('Hola');`})])]),e[38]||(e[38]=s("hr",{class:"divider"},null,-1)),n(o,{references:[{techId:"typescript",moduleId:"inferencia",text:"Inferencia de Tipos"},{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"enums",text:"Enums en TS"}]})]))}});export{q as default};
