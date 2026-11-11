import{C as i}from"./CodeBlock-C4wdvMLG.js";import{R as r}from"./ReferenceSection-B5vtw-fs.js";import{d as t,c as a,a as l,b as e,e as o,f as s,o as d}from"./index-CkbRcMC1.js";const u={class:"module-content"},p={class:"topic-section"},c={class:"cards-grid"},m={class:"card info"},g={class:"card info"},v={class:"topic-section"},b={class:"cards-grid"},f={class:"card warning"},y={class:"card recommended"},T={class:"card info"},S={class:"topic-section"},E={class:"cards-grid"},q={class:"card info"},x={class:"card info"},j={class:"card info"},C={class:"card info"},P={class:"card info"},A={class:"card info"},D={class:"card info"},R={class:"topic-section"},I={class:"cards-grid"},L={class:"card info"},w={class:"card recommended"},O={class:"cards-grid"},B={class:"card info"},N={class:"card warning"},k={class:"topic-section"},U={class:"cards-grid"},M={class:"card info"},z={class:"card warning"},G={class:"cards-grid"},H={class:"card info"},K={class:"card recommended"},V={class:"card warning"},J={class:"topic-section"},F={class:"cards-grid"},X={class:"card info"},$={class:"card info"},_=t({__name:"TiposDatosTS",setup(Q){return(W,n)=>(d(),a("div",u,[n[61]||(n[61]=l('<div class="header-section"><h1 class="main-title typescript">Tipos de Datos</h1><p class="subtitle">La base de la seguridad y el tipado estático en TypeScript.</p></div><section class="topic-section"><h2 class="section-title typescript">Tipado Estático</h2><p class="section-desc">A diferencia de JavaScript, que es de tipado dinámico, TypeScript permite definir tipos de forma estática. Esto significa que podemos especificar qué tipo de datos debe contener una variable, permitiendo detectar errores durante el desarrollo y no en tiempo de ejecución.</p></section>',2)),e("section",p,[n[4]||(n[4]=e("h2",{class:"section-title typescript"},"Tipos Primitivos",-1)),n[5]||(n[5]=e("p",{class:"section-desc"},"TypeScript soporta todos los tipos primitivos de JavaScript.",-1)),e("div",c,[e("div",m,[n[0]||(n[0]=e("h3",null,"string, number, boolean",-1)),n[1]||(n[1]=e("p",null,"Los tipos básicos para texto, números (incluyendo decimales) y valores lógicos.",-1)),o(i,{language:"typescript",code:`let nombre: string = "Diego";
let edad: number = 25;
let esEstudiante: boolean = true;`})]),e("div",g,[n[2]||(n[2]=e("h3",null,"null & undefined",-1)),n[3]||(n[3]=e("p",null,"Representan la ausencia de valor. En TS son tipos por derecho propio.",-1)),o(i,{language:"typescript",code:`let vacio: null = null;
let indefinido: undefined = undefined;`})])])]),e("section",v,[n[12]||(n[12]=e("h2",{class:"section-title typescript"},"Tipos Especiales",-1)),e("div",b,[e("div",f,[n[6]||(n[6]=e("div",{class:"card-header"},[e("h3",null,"any"),e("span",{class:"badge danger"},"Evitar")],-1)),n[7]||(n[7]=e("p",null,"Desactiva la comprobación de tipos. Permite asignar cualquier valor. Úsalo solo como último recurso.",-1)),o(i,{language:"typescript",code:`let algo: any = "Texto";
algo = 10; // No hay error`})]),e("div",y,[n[8]||(n[8]=e("div",{class:"card-header"},[e("h3",null,"unknown"),e("span",{class:"badge success"},"Seguro")],-1)),n[9]||(n[9]=e("p",null,[s("Similar a "),e("code",null,"any"),s(", pero más seguro. No puedes realizar operaciones sobre una variable "),e("code",null,"unknown"),s(" sin antes verificar su tipo.")],-1)),o(i,{language:"typescript",code:`let valor: unknown = "Hola";
// valor.toUpperCase(); // Error!
if (typeof valor === "string") {
  valor.toUpperCase(); // OK!
}`})]),e("div",T,[n[10]||(n[10]=e("h3",null,"void & never",-1)),n[11]||(n[11]=e("p",null,[e("code",null,"void"),s(" indica que una función no retorna nada. "),e("code",null,"never"),s(" indica valores que nunca ocurrirán (ej: funciones que lanzan errores).")],-1)),o(i,{language:"typescript",code:`function log(): void { console.log('Hi'); }

function error(): never {
  throw new Error('Error fatal');
}`})])])]),e("section",S,[n[27]||(n[27]=e("h2",{class:"section-title typescript"},"Tipos Complejos",-1)),e("div",E,[e("div",q,[n[13]||(n[13]=e("h3",null,"Interfaces",-1)),n[14]||(n[14]=e("p",null,[s("Se definen mediante la palabra reservada "),e("code",null,"interface"),s(" seguida del nombre de la interfaz y llaves {} los cuales contienen las propiedades y sus tipos.")],-1)),o(i,{language:"typescript",code:`interface Persona {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
};`})]),e("div",x,[n[15]||(n[15]=e("h3",null,"Type Aliases",-1)),n[16]||(n[16]=e("p",null,[s("Similar a las interfaces, se definen mediante la palabra reservada "),e("code",null,"type"),s(" seguida del nombre del type alias y llaves {}. La diferencia es que los type aliases pueden ser usados para definir tipos de datos primitivos, mientras que las interfaces solo pueden ser usadas para definir tipos de datos complejos.")],-1)),o(i,{language:"typescript",code:`type Persona = {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Ana",
  edad: 28,
};`})]),e("div",j,[n[17]||(n[17]=e("h3",null,"Objetos",-1)),n[18]||(n[18]=e("p",null,"Se definen mediante llaves {} conteniendo los nombres de las propiedades y sus tipos de datos esperados.",-1)),o(i,{language:"typescript",code:`let persona1: {
  nombre: string;
  edad: number
} = {
  nombre: "Luis",
  edad: 22,
};`})]),e("div",C,[n[19]||(n[19]=e("h3",null,"Arrays",-1)),n[20]||(n[20]=e("p",null,"Se definen mediante el nombre del array seguido de corchetes [].",-1)),o(i,{language:"typescript",code:`let lista: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];`})]),e("div",P,[n[21]||(n[21]=e("h3",null,"Enums",-1)),n[22]||(n[22]=e("p",null,"Permiten definir un conjunto de constantes con nombre.",-1)),o(i,{language:"typescript",code:`enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
  Derecha
}

let miDireccion: Direccion = Direccion.Arriba;`})]),e("div",A,[n[23]||(n[23]=e("h3",null,"Tuplas",-1)),n[24]||(n[24]=e("p",null,"Permiten expresar un array con un número fijo de elementos cuyos tipos son conocidos.",-1)),o(i,{language:"typescript",code:`let persona: [string, number];
persona = ["Diego", 25];
// persona = [25, "Diego"]; // Error!`})]),e("div",D,[n[25]||(n[25]=e("h3",null,"Union Types",-1)),n[26]||(n[26]=e("p",null,"Permiten que una variable pueda ser de más de un tipo.",-1)),o(i,{language:"typescript",code:`let id: string | number;
id = 10;
id = "ABC";`})])])]),n[62]||(n[62]=e("hr",{class:"divider"},null,-1)),e("section",R,[n[36]||(n[36]=e("h2",{class:"section-title typescript"},"Tipos Literales",-1)),n[37]||(n[37]=e("p",{class:"section-desc"},[s("Un tipo no tiene por qué ser solo "),e("code",null,"string"),s(" o "),e("code",null,"number"),s(": también puede ser un "),e("strong",null,"valor exacto"),s(". Combinados con los Union Types, permiten restringir una variable a un conjunto cerrado de valores posibles, de forma similar a un enum pero sin generar código en tiempo de ejecución.")],-1)),e("div",I,[e("div",L,[n[28]||(n[28]=e("div",{class:"card-header"},[e("h3",null,"Literales y Uniones")],-1)),n[29]||(n[29]=e("p",null,"Se usan comúnmente para estados, opciones y configuraciones.",-1)),o(i,{language:"typescript",code:`let estado: "activo" | "inactivo";
estado = "activo";   // OK
// estado = "pausado"; // Error: Type "pausado" is not assignable to type "activo" | "inactivo"

type Direccion = "norte" | "sur" | "este" | "oeste";
type Dado = 1 | 2 | 3 | 4 | 5 | 6;

function mover(dir: Direccion, pasos: Dado) {
  console.log(\`Mover \${pasos} hacia el \${dir}\`);
}
mover("norte", 3); // OK
// mover("arriba", 3); // Error`})]),e("div",w,[n[30]||(n[30]=e("div",{class:"card-header"},[e("h3",null,"Inferencia: const vs let"),e("span",{class:"badge success"},"Importante")],-1)),n[31]||(n[31]=e("p",null,[s("Con "),e("code",null,"const"),s(" TS infiere el tipo literal exacto; con "),e("code",null,"let"),s(' lo "ensancha" (widening) al tipo primitivo, porque el valor podría cambiar.')],-1)),o(i,{language:"typescript",code:`const a = "hola"; // Tipo: "hola"
let b = "hola";   // Tipo: string

const c = 42;     // Tipo: 42
let d = 42;       // Tipo: number`})])]),n[38]||(n[38]=e("br",null,null,-1)),n[39]||(n[39]=e("br",null,null,-1)),e("div",O,[e("div",B,[n[32]||(n[32]=e("div",{class:"card-header"},[e("h3",null,"as const")],-1)),n[33]||(n[33]=e("p",null,[s("La aserción "),e("code",null,"as const"),s(" convierte un objeto o array en "),e("strong",null,"solo lectura"),s(" con tipos literales exactos. Es muy útil para derivar uniones a partir de valores.")],-1)),o(i,{language:"typescript",code:`const ROLES = ["admin", "editor", "lector"] as const;
// Tipo: readonly ["admin", "editor", "lector"]

type Rol = (typeof ROLES)[number];
// Tipo: "admin" | "editor" | "lector"

const config = { modo: "oscuro", puerto: 3000 } as const;
// config.modo es "oscuro" (no string) y es readonly
// config.puerto = 8080; // Error: es de solo lectura`})]),e("div",N,[n[34]||(n[34]=e("div",{class:"card-header"},[e("h3",null,"Problema común con objetos")],-1)),n[35]||(n[35]=e("p",null,[s("Al declarar un objeto, sus propiedades se infieren como "),e("code",null,"string"),s(", no como literales, lo que puede causar errores al pasarlo a una función que espera un literal.")],-1)),o(i,{language:"typescript",code:`function pedir(url: string, metodo: "GET" | "POST") {}

const req = { url: "/api", metodo: "GET" };
// pedir(req.url, req.metodo); // Error: string no es asignable a "GET" | "POST"

// Soluciones:
const req2 = { url: "/api", metodo: "GET" as const };
const req3 = { url: "/api", metodo: "GET" } as const;
pedir(req2.url, req2.metodo); // OK`})])])]),n[63]||(n[63]=e("hr",{class:"divider"},null,-1)),e("section",k,[n[50]||(n[50]=e("h2",{class:"section-title typescript"},"Index Signatures",-1)),n[51]||(n[51]=e("p",{class:"section-desc"},[s("Cuando no conoces de antemano los nombres de las propiedades de un objeto, pero sí el tipo de sus claves y de sus valores, puedes usar una "),e("strong",null,"firma de índice"),s(". Es la forma de tipar diccionarios o mapas de claves dinámicas.")],-1)),e("div",U,[e("div",M,[n[40]||(n[40]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis Básica")],-1)),n[41]||(n[41]=e("p",null,[s("El tipo de la clave puede ser "),e("code",null,"string"),s(", "),e("code",null,"number"),s(", "),e("code",null,"symbol"),s(" o un template literal type.")],-1)),o(i,{language:"typescript",code:`interface Puntajes {
  [jugador: string]: number;
}

const puntajes: Puntajes = {
  Ana: 90,
  Luis: 75
};

puntajes["Marta"] = 88; // OK: se pueden agregar claves nuevas
// puntajes.Pedro = "alto"; // Error: el valor debe ser number

// Tambien con type alias o inline
type Traducciones = { [palabra: string]: string };`})]),e("div",z,[n[42]||(n[42]=e("div",{class:"card-header"},[e("h3",null,"Compatibilidad con otras propiedades"),e("span",{class:"badge danger"},"Restricción")],-1)),n[43]||(n[43]=e("p",null,"Todas las propiedades explícitas deben ser compatibles con el tipo de valor de la firma de índice. Si necesitas tipos distintos, usa una unión.",-1)),o(i,{language:"typescript",code:`// Error: "nombre" (string) no es asignable a number
interface Mal {
  [clave: string]: number;
  nombre: string;
}

// Correcto: se amplia el valor con una union
interface Bien {
  [clave: string]: number | string;
  nombre: string;
  edad: number;
}`})])]),n[52]||(n[52]=e("br",null,null,-1)),n[53]||(n[53]=e("br",null,null,-1)),e("div",G,[e("div",H,[n[44]||(n[44]=e("div",{class:"card-header"},[e("h3",null,"Solo lectura")],-1)),n[45]||(n[45]=e("p",null,[s("Puedes impedir que se reasignen valores marcando la firma de índice como "),e("code",null,"readonly"),s(".")],-1)),o(i,{language:"typescript",code:`interface Constantes {
  readonly [clave: string]: number;
}

const c: Constantes = { PI: 3.14159 };
// c["PI"] = 3; // Error: solo lectura`})]),e("div",K,[n[46]||(n[46]=e("div",{class:"card-header"},[e("h3",null,"Alternativa: Record"),e("span",{class:"badge success"},"Recomendado")],-1)),n[47]||(n[47]=e("p",null,[s("Para casos simples, el utility type "),e("code",null,"Record<Clave, Valor>"),s(" es más conciso. Además permite restringir las claves a una unión de literales.")],-1)),o(i,{language:"typescript",code:`type Puntajes = Record<string, number>;

// Con claves literales, TS exige que existan todas
type Config = Record<"dev" | "prod", string>;
const cfg: Config = { dev: "localhost", prod: "miapp.com" };`})])]),n[54]||(n[54]=e("br",null,null,-1)),n[55]||(n[55]=e("br",null,null,-1)),e("div",V,[n[48]||(n[48]=e("div",{class:"card-header"},[e("h3",null,"Acceso a claves inexistentes")],-1)),n[49]||(n[49]=e("p",null,[s("Por defecto, TS asume que cualquier clave del índice existe, aunque en la realidad devuelva "),e("code",null,"undefined"),s(". Para mayor seguridad, activa "),e("code",null,"noUncheckedIndexedAccess"),s(" en el "),e("code",null,"tsconfig.json"),s(".")],-1)),o(i,{language:"typescript",code:`const p: Record<string, number> = { Ana: 90 };

const nota = p["Inexistente"];
// Sin la opción: tipo number (¡pero en runtime es undefined!)
// Con noUncheckedIndexedAccess: tipo number | undefined

if (nota !== undefined) {
  console.log(nota.toFixed(1)); // Seguro
}`})])]),n[64]||(n[64]=e("hr",{class:"divider"},null,-1)),e("section",J,[n[60]||(n[60]=e("h2",{class:"section-title typescript"},"Aserciones y Narrowing",-1)),e("div",F,[e("div",X,[n[56]||(n[56]=e("h3",null,"Type Assertions (as)",-1)),n[57]||(n[57]=e("p",null,[s('Cuando tú sabes más sobre el tipo de un valor que TypeScript, puedes "forzar" el tipo. Aunque existe una sintaxis alternativa con '),e("code",null,"<Tipo>"),s(", el estándar de la industria es usar "),e("code",null,"as Tipo"),s(" porque la primera es incompatible con TSX/React.")],-1)),o(i,{language:"typescript",code:`// canvas es un HTMLElement por defecto
const canvas = document.getElementById("main") as HTMLCanvasElement;

// Sintaxis antigua (No usar en proyectos con React/TSX):
// const canvas = <HTMLCanvasElement>document.getElementById("main");`})]),e("div",$,[n[58]||(n[58]=e("h3",null,"Narrowing",-1)),n[59]||(n[59]=e("p",null,"Técnica para reducir un tipo amplio a uno más específico mediante validaciones.",-1)),o(i,{language:"typescript",code:`function split(val: string | number) {
  if (typeof val === "string") {
    return val.split(""); // TS sabe que es string
  }
  return val.toFixed(2); // TS sabe que es number
}`})])])]),o(r,{references:[{techId:"js",moduleId:"fundamentos",text:"Fundamentos de JavaScript"}]})]))}});export{_ as default};
