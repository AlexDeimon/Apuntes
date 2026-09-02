import{C as t}from"./CodeBlock-BwJOGh4v.js";import{R as i}from"./ReferenceSection-x4_mLSMB.js";import{d as a,c as d,b as e,e as s,f as n,a as r,o as l}from"./index-dU_m1vnq.js";const p={class:"module-content"},c={class:"topic-section"},u={class:"cards-grid"},m={class:"card info"},y={class:"card info"},v={class:"topic-section"},g={class:"cards-grid"},b={class:"card info"},T={class:"card info"},f={class:"topic-section"},x={class:"cards-grid"},E={class:"card info"},S={class:"card recommended"},C={class:"topic-section"},P={class:"cards-grid"},k={class:"card info"},U={class:"card info"},M={class:"topic-section"},R={class:"cards-grid"},L={class:"card info"},z={class:"card info"},K={class:"card info"},A={class:"topic-section"},j={class:"card recommended"},V=a({__name:"TiposAvanzadosTS",setup(I){return(N,o)=>(l(),d("div",p,[o[30]||(o[30]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Tipos Avanzados"),e("p",{class:"subtitle"},"Crea tipos nuevos a partir de otros tipos existentes usando el sistema de tipos como un lenguaje propio.")],-1)),e("section",c,[o[3]||(o[3]=e("h2",{class:"section-title typescript"},"El operador keyof",-1)),o[4]||(o[4]=e("p",{class:"section-desc"},[n("El operador "),e("code",null,"keyof"),n(" toma un tipo objeto y produce una unión de tipo string o numérico con las claves de ese objeto. Es la base de muchos tipos avanzados.")],-1)),e("div",u,[e("div",m,[o[0]||(o[0]=e("div",{class:"card-header"},[e("h3",null,"keyof básico")],-1)),s(t,{language:"typescript",code:`interface Punto {
  x: number;
  y: number;
}

// 'x' | 'y'
type ClavePunto = keyof Punto;

const clave: ClavePunto = 'x'; // OK
// const clave2: ClavePunto = 'z'; // Error`})]),e("div",y,[o[1]||(o[1]=e("div",{class:"card-header"},[e("h3",null,"Función de acceso seguro con keyof")],-1)),o[2]||(o[2]=e("p",null,[n("Combinar "),e("code",null,"keyof"),n(" con genéricos es uno de los patrones más usados para acceder a propiedades de forma type-safe.")],-1)),s(t,{language:"typescript",code:`function obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] {
  return obj[clave];
}

const usuario = { nombre: 'Alex', edad: 25 };

const nombre = obtenerPropiedad(usuario, 'nombre'); // tipo: string
const edad = obtenerPropiedad(usuario, 'edad');     // tipo: number
// obtenerPropiedad(usuario, 'email'); // Error: 'email' no existe`})])])]),o[31]||(o[31]=e("hr",{class:"divider"},null,-1)),e("section",v,[o[8]||(o[8]=e("h2",{class:"section-title typescript"},"Tipos Indexados",-1)),o[9]||(o[9]=e("p",{class:"section-desc"},[n("Puedes usar la sintaxis de corchetes "),e("code",null,'Tipo["propiedad"]'),n(" para acceder al tipo de una propiedad específica dentro de otro tipo, igual que accederías a un valor en JavaScript.")],-1)),e("div",g,[e("div",b,[o[5]||(o[5]=e("div",{class:"card-header"},[e("h3",null,"Acceso por índice")],-1)),s(t,{language:"typescript",code:`interface Persona {
  nombre: string;
  edad: number;
  activo: boolean;
}

type TipoNombre = Persona['nombre']; // string
type TiposBasicos = Persona['nombre' | 'edad']; // string | number`})]),e("div",T,[o[6]||(o[6]=e("div",{class:"card-header"},[e("h3",null,"Acceso a arrays con number")],-1)),o[7]||(o[7]=e("p",null,[n("Usar "),e("code",null,"number"),n(" como índice sobre un tipo array extrae el tipo de sus elementos.")],-1)),s(t,{language:"typescript",code:`const ROLES = ['admin', 'usuario', 'invitado'];

// Extrae el tipo de los elementos del array: 'admin' | 'usuario' | 'invitado'
type Rol = typeof ROLES[number];`})])])]),o[32]||(o[32]=e("hr",{class:"divider"},null,-1)),e("section",f,[o[13]||(o[13]=e("h2",{class:"section-title typescript"},"Tipos Condicionales",-1)),o[14]||(o[14]=e("p",{class:"section-desc"},[n("Los tipos condicionales funcionan como el operador ternario de JavaScript, pero a nivel de tipos. La sintaxis es: "),e("code",null,"T extends U ? TipoSiVerdadero : TipoSiFalso"),n(". Permiten crear tipos que dependen de otros tipos.")],-1)),e("div",x,[e("div",E,[o[10]||(o[10]=e("div",{class:"card-header"},[e("h3",null,"Ternario de tipos básico")],-1)),s(t,{language:"typescript",code:`// Si T se puede asignar a string, el resultado es string, sino number
type EsString<T> = T extends string ? 'sí' : 'no';

type A = EsString<string>;  // 'sí'
type B = EsString<number>;  // 'no'
type C = EsString<boolean>; // 'no'`})]),e("div",S,[o[11]||(o[11]=e("div",{class:"card-header"},[e("h3",null,"infer — Extraer un tipo interno"),e("span",{class:"badge success"},"Avanzado")],-1)),o[12]||(o[12]=e("p",null,[n("La palabra clave "),e("code",null,"infer"),n(" dentro de un tipo condicional permite capturar un sub-tipo para reutilizarlo. Es la base de tipos como "),e("code",null,"ReturnType"),n(".")],-1)),s(t,{language:"typescript",code:`// Extrae el tipo de retorno de cualquier función
type MiReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function crearUsuario() {
  return { id: 1, nombre: 'Alex' };
}

// { id: number; nombre: string }
type TipoUsuario = MiReturnType<typeof crearUsuario>;`})])])]),o[33]||(o[33]=e("hr",{class:"divider"},null,-1)),e("section",C,[o[17]||(o[17]=e("h2",{class:"section-title typescript"},"Mapped Types",-1)),o[18]||(o[18]=e("p",{class:"section-desc"},[n("Los Mapped Types construyen un nuevo tipo iterando sobre las claves de otro tipo, similar a un "),e("code",null,".map()"),n(" de arrays pero para tipos. Son la base de todos los Utility Types como "),e("code",null,"Partial"),n(", "),e("code",null,"Readonly"),n(" o "),e("code",null,"Record"),n(".")],-1)),e("div",P,[e("div",k,[o[15]||(o[15]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis básica")],-1)),s(t,{language:"typescript",code:`// Para cada clave K en los keys de T,
// la propiedad en el nuevo tipo será booleana
type TodosBooleanos<T> = {
  [K in keyof T]: boolean;
};

interface Usuario {
  nombre: string;
  edad: number;
}

// { nombre: boolean; edad: boolean }
type UsuarioBooleano = TodosBooleanos<Usuario>;`})]),e("div",U,[o[16]||(o[16]=r('<div class="card-header"><h3>Modificadores: + y - (agregar/quitar)</h3></div><p>Puedes agregar (<code>+</code>) o quitar (<code>-</code>) los modificadores <code>readonly</code> y <code>?</code> en los Mapped Types. Así se implementan <code>Partial</code> y <code>Required</code> internamente.</p>',2)),s(t,{language:"typescript",code:`// Implementación interna de Partial<T>
type MiPartial<T> = {
  [K in keyof T]+?: T[K]; // +? agrega opcionalidad
};

// Implementación interna de Required<T>
type MiRequired<T> = {
  [K in keyof T]-?: T[K]; // -? elimina opcionalidad
};

// Implementación interna de Readonly<T>
type MiReadonly<T> = {
  +readonly [K in keyof T]: T[K];
};`})])])]),o[34]||(o[34]=e("hr",{class:"divider"},null,-1)),e("section",M,[o[25]||(o[25]=e("h2",{class:"section-title typescript"},"Template Literal Types",-1)),o[26]||(o[26]=e("p",{class:"section-desc"},[n("Los Template Literal Types usan la sintaxis de los template literals de JavaScript ("),e("code",null,"`texto ${variable}`"),n(") pero a nivel de tipos. Permiten construir nuevas uniones de strings de forma programática. ")],-1)),e("div",R,[e("div",L,[o[19]||(o[19]=e("div",{class:"card-header"},[e("h3",null,"Combinación de uniones")],-1)),o[20]||(o[20]=e("p",null,"Cuando usas una unión dentro de un template literal type, TypeScript genera todas las combinaciones posibles automáticamente.",-1)),s(t,{language:"typescript",code:"type Color = 'rojo' | 'verde' | 'azul';\ntype Talla = 'S' | 'M' | 'L';\n\n// 'rojo-S' | 'rojo-M' | 'rojo-L' | 'verde-S' | ...\ntype Variante = `${Color}-${Talla}`;"})]),e("div",z,[o[21]||(o[21]=e("div",{class:"card-header"},[e("h3",null,"Generación de claves de eventos")],-1)),o[22]||(o[22]=e("p",null,"Un patrón muy común es generar dinámicamente nombres de eventos o propiedades a partir de un tipo base.",-1)),s(t,{language:"typescript",code:"type EventName<T extends string> = `on${Capitalize<T>}`;\n\n// 'onClick' | 'onFocus' | 'onBlur'\ntype Handlers = EventName<'click' | 'focus' | 'blur'>;"})]),e("div",K,[o[23]||(o[23]=e("div",{class:"card-header"},[e("h3",null,"Tipos de manipulación de strings")],-1)),o[24]||(o[24]=e("p",null,[n("TypeScript incluye tipos de utilidad específicos para strings: "),e("code",null,"Uppercase"),n(", "),e("code",null,"Lowercase"),n(", "),e("code",null,"Capitalize"),n(" y "),e("code",null,"Uncapitalize"),n(".")],-1)),s(t,{language:"typescript",code:`type Saludo = 'hola mundo';

type EnMayusculas  = Uppercase<Saludo>;   // 'HOLA MUNDO'
type EnMinusculas  = Lowercase<Saludo>;   // 'hola mundo'
type Capitalizado  = Capitalize<Saludo>;  // 'Hola mundo'
type Descapital    = Uncapitalize<'HolaMundo'>; // 'holaMundo'`})])])]),o[35]||(o[35]=e("hr",{class:"divider"},null,-1)),e("section",A,[o[28]||(o[28]=e("h2",{class:"section-title typescript"},"Combinando todo: Un ejemplo real",-1)),o[29]||(o[29]=e("p",{class:"section-desc"},[n("Los tipos avanzados brillan cuando se combinan. A continuación, un ejemplo que usa "),e("code",null,"keyof"),n(", "),e("code",null,"Mapped Types"),n(" y "),e("code",null,"Template Literal Types"),n(" para generar automáticamente un tipo con getters a partir de un objeto. ")],-1)),e("div",j,[o[27]||(o[27]=e("div",{class:"card-header"},[e("h3",null,"Generador de Getters")],-1)),s(t,{language:"typescript",code:`interface Estado {
  nombre: string;
  edad: number;
  activo: boolean;
}

// Genera: { getNombre: () => string; getEdad: () => number; getActivo: () => boolean }
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type GettersDeEstado = Getters<Estado>;

// Una implementación válida:
const miEstado: GettersDeEstado = {
  getNombre: () => 'Alex',
  getEdad: () => 25,
  getActivo: () => true,
};`})])]),o[36]||(o[36]=e("hr",{class:"divider"},null,-1)),s(i,{references:[{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"genericos",text:"Genéricos"},{techId:"typescript",moduleId:"utilidad",text:"Tipos de Utilidad"},{techId:"typescript",moduleId:"narrowing",text:"Narrowing"}]})]))}});export{V as default};
