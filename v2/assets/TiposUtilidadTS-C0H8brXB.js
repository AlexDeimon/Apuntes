import{C as i}from"./CodeBlock-B1lVO3u7.js";import{R as a}from"./ReferenceSection-DGTUJ-TY.js";import{d as t,c as r,a as d,b as e,e as o,f as n,o as l}from"./index-717QYeS5.js";const u={class:"module-content"},p={class:"topic-section"},c={class:"cards-grid"},m={class:"card info"},y={class:"card info"},g={class:"card info"},b={class:"topic-section"},v={class:"cards-grid"},f={class:"card recommended"},T={class:"card recommended"},E={class:"topic-section"},P={class:"cards-grid"},x={class:"card info"},U={class:"topic-section"},R={class:"cards-grid"},C={class:"card info"},q={class:"topic-section"},S={class:"cards-grid"},M={class:"card info"},O={class:"card info"},V={class:"card info"},I=t({__name:"TiposUtilidadTS",setup(D){return(N,s)=>(l(),r("div",u,[s[28]||(s[28]=d('<div class="header-section"><h1 class="main-title typescript">Tipos de Utilidad (Utility Types)</h1><p class="subtitle">Herramientas nativas para transformar y manipular tipos existentes sin duplicar código.</p></div><section class="topic-section"><h2 class="section-title typescript">¿Qué son los Utility Types?</h2><p class="section-desc">TypeScript proporciona una serie de tipos globales que nos ayudan a facilitar las transformaciones de tipos comunes. En lugar de crear múltiples interfaces para cada pequeña variación de tus datos, puedes usar estos tipos para derivar nuevas estructuras basadas en las existentes de manera rápida y segura.</p></section><hr class="divider">',3)),e("section",p,[s[6]||(s[6]=e("h2",{class:"section-title typescript"},"Modificadores de Propiedades",-1)),s[7]||(s[7]=e("p",{class:"section-desc"},"Transforman el estado de las propiedades de una interfaz (opcional, requerido, inmutable).",-1)),e("div",c,[e("div",m,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Partial<Type>")],-1)),s[1]||(s[1]=e("p",null,[n("Convierte todas las propiedades de un tipo en "),e("strong",null,"opcionales"),n(". Es extremadamente útil para funciones de actualización (update/patch).")],-1)),o(i,{language:"typescript",code:`interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

// Para actualizar un usuario, no necesitamos todos los campos
function actualizarUsuario(usuario: Partial<Usuario>) {
  // ...
}

actualizarUsuario({ nombre: 'Alex' }); // Valido
actualizarUsuario({ email: 'alex@mail.com' }); // Valido`})]),e("div",y,[s[2]||(s[2]=e("div",{class:"card-header"},[e("h3",null,"Required<Type>")],-1)),s[3]||(s[3]=e("p",null,[n("Es el opuesto a "),e("code",null,"Partial"),n(". Convierte todas las propiedades en "),e("strong",null,"requeridas"),n(", incluso si estaban marcadas como opcionales.")],-1)),o(i,{language:"typescript",code:`interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 }; // Valido

// Obliga a proveer 'a' y 'b'
const obj2: Required<Props> = { a: 5, b: 'Texto' };`})]),e("div",g,[s[4]||(s[4]=e("div",{class:"card-header"},[e("h3",null,"Readonly<Type>")],-1)),s[5]||(s[5]=e("p",null,[n("Convierte todas las propiedades de un tipo en "),e("strong",null,"solo lectura"),n(" (no se pueden reasignar).")],-1)),o(i,{language:"typescript",code:`interface Todo {
  titulo: string;
}

const tarea: Readonly<Todo> = {
  titulo: 'Aprender TS'
};

// tarea.titulo = 'Otra cosa'; // Error: Cannot assign to 'titulo'`})])])]),s[29]||(s[29]=e("hr",{class:"divider"},null,-1)),e("section",b,[s[12]||(s[12]=e("h2",{class:"section-title typescript"},"Extracción y Exclusión de Propiedades",-1)),s[13]||(s[13]=e("p",{class:"section-desc"},"Permiten crear nuevos tipos seleccionando u omitiendo propiedades específicas de una interfaz grande.",-1)),e("div",v,[e("div",f,[s[8]||(s[8]=e("div",{class:"card-header"},[e("h3",null,"Pick<Type, Keys>"),e("span",{class:"badge success"},"Muy usado")],-1)),s[9]||(s[9]=e("p",null,[n("Crea un tipo "),e("strong",null,"escogiendo"),n(" un conjunto de propiedades específicas de otro tipo.")],-1)),o(i,{language:"typescript",code:`interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

// Solo nos interesa el nombre y precio
type ProductoPreview = Pick<Producto, 'nombre' | 'precio'>;

const preview: ProductoPreview = {
  nombre: 'Laptop',
  precio: 1500
};`})]),e("div",T,[s[10]||(s[10]=e("div",{class:"card-header"},[e("h3",null,"Omit<Type, Keys>"),e("span",{class:"badge success"},"Muy usado")],-1)),s[11]||(s[11]=e("p",null,[n("Crea un tipo "),e("strong",null,"omitiendo"),n(" ciertas propiedades de otro tipo (lo inverso a Pick).")],-1)),o(i,{language:"typescript",code:`interface Tarea {
  id: string;
  titulo: string;
  completada: boolean;
  createdAt: Date;
}

// Un usuario no debería enviar el ID ni createdAt al crear
type CrearTareaDTO = Omit<Tarea, 'id' | 'createdAt'>;

const nuevaTarea: CrearTareaDTO = {
  titulo: 'Estudiar Utility Types',
  completada: false
};`})])])]),s[30]||(s[30]=e("hr",{class:"divider"},null,-1)),e("section",E,[s[16]||(s[16]=e("h2",{class:"section-title typescript"},"Diccionarios y Registros",-1)),e("div",P,[e("div",x,[s[14]||(s[14]=e("div",{class:"card-header"},[e("h3",null,"Record<Keys, Type>")],-1)),s[15]||(s[15]=e("p",null,[n("Construye un tipo de objeto cuyas propiedades son "),e("code",null,"Keys"),n(" y sus valores son de tipo "),e("code",null,"Type"),n(". Es excelente para crear mapas o diccionarios.")],-1)),o(i,{language:"typescript",code:`type Rol = 'admin' | 'usuario' | 'invitado';

interface Permisos {
  leer: boolean;
  escribir: boolean;
}

// Crea un diccionario que obliga a definir permisos para cada Rol
const permisosPorRol: Record<Rol, Permisos> = {
  admin: { leer: true, escribir: true },
  usuario: { leer: true, escribir: false },
  invitado: { leer: false, escribir: false }
};`})])])]),s[31]||(s[31]=e("hr",{class:"divider"},null,-1)),e("section",U,[s[19]||(s[19]=e("h2",{class:"section-title typescript"},"Inferencia y Funciones",-1)),e("div",R,[e("div",C,[s[17]||(s[17]=e("div",{class:"card-header"},[e("h3",null,"ReturnType<Type>")],-1)),s[18]||(s[18]=e("p",null,"Obtiene el tipo de dato que retorna una función. Muy útil cuando usas funciones de librerías externas o no quieres escribir el tipo manualmente.",-1)),o(i,{language:"typescript",code:`function crearUsuario(nombre: string, edad: number) {
  return { nombre, edad, id: Math.random() };
}

// Extraemos el tipo del valor retornado
type UsuarioCreado = ReturnType<typeof crearUsuario>;

const user: UsuarioCreado = {
  nombre: 'Alex',
  edad: 25,
  id: 0.123
};`})])])]),s[32]||(s[32]=e("hr",{class:"divider"},null,-1)),e("section",q,[s[26]||(s[26]=e("h2",{class:"section-title typescript"},"Manipulación de Uniones (Union Types)",-1)),s[27]||(s[27]=e("p",{class:"section-desc"},[n("Se aplican directamente sobre uniones ("),e("code",null,"type A = 'X' | 'Y' | 'Z'"),n(").")],-1)),e("div",S,[e("div",M,[s[20]||(s[20]=e("div",{class:"card-header"},[e("h3",null,"Exclude<UnionType, ExcludedMembers>")],-1)),s[21]||(s[21]=e("p",null,[n("Excluye de una unión aquellos tipos que sean asignables a "),e("code",null,"ExcludedMembers"),n(".")],-1)),o(i,{language:"typescript",code:`type Metodos = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Quitamos POST y PUT
type MetodosSeguros = Exclude<Metodos, 'POST' | 'PUT'>;
// Resultado: 'GET' | 'DELETE'`})]),e("div",O,[s[22]||(s[22]=e("div",{class:"card-header"},[e("h3",null,"Extract<Type, Union>")],-1)),s[23]||(s[23]=e("p",null,[n("Extrae de "),e("code",null,"Type"),n(" los tipos que sean asignables a "),e("code",null,"Union"),n(" (lo inverso a Exclude).")],-1)),o(i,{language:"typescript",code:`type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// Resultado: 'a'

type T1 = Extract<string | number | boolean, boolean | string>;
// Resultado: string | boolean`})]),e("div",V,[s[24]||(s[24]=e("div",{class:"card-header"},[e("h3",null,"NonNullable<Type>")],-1)),s[25]||(s[25]=e("p",null,[n("Elimina "),e("code",null,"null"),n(" y "),e("code",null,"undefined"),n(" de un tipo.")],-1)),o(i,{language:"typescript",code:`type Valor = string | number | null | undefined;

type ValorSeguro = NonNullable<Valor>;
// Resultado: string | number`})])])]),s[33]||(s[33]=e("hr",{class:"divider"},null,-1)),o(a,{references:[{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"genericos",text:"Genéricos"}]})]))}});export{I as default};
