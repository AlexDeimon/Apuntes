import{C as a}from"./CodeBlock-CASvhCfR.js";import{R as t}from"./ReferenceSection-toiUOXWo.js";import{d as r,c as i,b as e,e as s,f as o,a as d,o as l}from"./index-B57m_bmv.js";const c={class:"module-content"},u={class:"topic-section"},p={class:"card info"},m={class:"topic-section"},f={class:"cards-grid"},g={class:"card recommended"},v={class:"card warning"},y={class:"topic-section"},b={class:"card info"},q={class:"topic-section"},E={class:"card recommended"},S={class:"topic-section"},T={class:"cards-grid"},x={class:"card info"},P={class:"card recommended"},C={class:"topic-section"},z={class:"cards-grid"},j={class:"card recommended"},w={class:"card info"},U=r({__name:"NarrowingTS",setup(N){return(h,n)=>(l(),i("div",c,[n[22]||(n[22]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Narrowing"),e("p",{class:"subtitle"},"Técnicas para reducir un tipo amplio a uno más específico y trabajar con él de forma segura.")],-1)),e("section",u,[n[1]||(n[1]=e("h2",{class:"section-title typescript"},"¿Qué es el Narrowing?",-1)),n[2]||(n[2]=e("p",{class:"section-desc"},[o("Cuando una variable puede tener múltiples tipos (union type), TypeScript no sabe cuál es el tipo exacto en un momento dado. El "),e("strong",null,"Narrowing"),o(' es el proceso de usar verificaciones de control de flujo para que TypeScript "reduzca" el abanico de posibilidades y pueda ofrecerte autocompletado y seguridad de tipo exacta dentro de cada rama.')],-1)),e("div",p,[n[0]||(n[0]=e("div",{class:"card-header"},[e("h3",null,"El problema sin Narrowing")],-1)),s(a,{language:"typescript",code:`function formatear(valor: string | number) {
  // Error: Property 'toUpperCase' does not exist on type 'string | number'.
  return valor.toUpperCase();
}`})])]),n[23]||(n[23]=e("hr",{class:"divider"},null,-1)),e("section",m,[n[6]||(n[6]=d('<h2 class="section-title typescript">typeof — Guardia de tipo primitivo</h2><p class="section-desc">El operador <code>typeof</code> devuelve un string con el nombre del tipo de un valor. TypeScript entiende estas comprobaciones y ajusta el tipo dentro de cada bloque. Valores posibles: <code>&quot;string&quot;</code>, <code>&quot;number&quot;</code>, <code>&quot;bigint&quot;</code>, <code>&quot;boolean&quot;</code>, <code>&quot;symbol&quot;</code>, <code>&quot;undefined&quot;</code>, <code>&quot;object&quot;</code>, <code>&quot;function&quot;</code>.</p>',2)),e("div",f,[e("div",g,[n[3]||(n[3]=e("div",{class:"card-header"},[e("h3",null,"Uso con typeof"),e("span",{class:"badge success"},"Primitivos")],-1)),s(a,{language:"typescript",code:`function formatear(valor: string | number): string {
  if (typeof valor === 'string') {
    // Aquí TypeScript sabe que 'valor' es string
    return valor.toUpperCase();
  }
  // Aquí TypeScript sabe que 'valor' es number
  return valor.toFixed(2);
}`})]),e("div",v,[n[4]||(n[4]=e("div",{class:"card-header"},[e("h3",null,"Trampa: typeof null === 'object'"),e("span",{class:"badge danger"},"Cuidado")],-1)),n[5]||(n[5]=e("p",null,[o("El famoso bug de JavaScript: "),e("code",null,"typeof null"),o(" retorna "),e("code",null,"'object'"),o(", no "),e("code",null,"'null'"),o(". Siempre verifica nulos explícitamente antes de usar "),e("code",null,"typeof"),o(" para objetos.")],-1)),s(a,{language:"typescript",code:`function procesar(valor: string | null) {
  if (valor !== null) {
    // Ahora TypeScript sabe que 'valor' es string
    console.log(valor.toUpperCase());
  }
}`})])])]),n[24]||(n[24]=e("hr",{class:"divider"},null,-1)),e("section",y,[n[7]||(n[7]=e("h2",{class:"section-title typescript"},"instanceof — Guardia de clases",-1)),n[8]||(n[8]=e("p",{class:"section-desc"},[o("El operador "),e("code",null,"instanceof"),o(" verifica si un objeto fue creado por un constructor específico. Es el equivalente a "),e("code",null,"typeof"),o(" pero para instancias de clases.")],-1)),e("div",b,[s(a,{language:"typescript",code:`class Gato {
  maullar() { return 'Miau'; }
}

class Perro {
  ladrar() { return 'Guau'; }
}

function hacerRuido(animal: Gato | Perro) {
  if (animal instanceof Gato) {
    // TypeScript sabe que 'animal' es Gato
    console.log(animal.maullar());
  } else {
    // TypeScript sabe que 'animal' es Perro
    console.log(animal.ladrar());
  }
}`})])]),n[25]||(n[25]=e("hr",{class:"divider"},null,-1)),e("section",q,[n[10]||(n[10]=e("h2",{class:"section-title typescript"},"Operador in — Verificar propiedades",-1)),n[11]||(n[11]=e("p",{class:"section-desc"},[o("El operador "),e("code",null,"in"),o(" comprueba si una propiedad existe en un objeto. TypeScript lo usa para reducir el tipo cuando dos interfaces tienen propiedades distintas.")],-1)),e("div",E,[n[9]||(n[9]=e("div",{class:"card-header"},[e("h3",null,"Discriminar con in"),e("span",{class:"badge success"},"Interfaces")],-1)),s(a,{language:"typescript",code:`interface Circulo {
  radio: number;
}

interface Rectangulo {
  ancho: number;
  alto: number;
}

function calcularArea(figura: Circulo | Rectangulo): number {
  if ('radio' in figura) {
    // TypeScript sabe que 'figura' es Circulo
    return Math.PI * figura.radio ** 2;
  }
  // TypeScript sabe que 'figura' es Rectangulo
  return figura.ancho * figura.alto;
}`})])]),n[26]||(n[26]=e("hr",{class:"divider"},null,-1)),e("section",S,[n[15]||(n[15]=e("h2",{class:"section-title typescript"},"Type Predicates — Predicados de Tipo",-1)),n[16]||(n[16]=e("p",{class:"section-desc"},[o("Cuando la lógica de verificación es compleja, puedes encapsularla en una función dedicada que retorna un "),e("strong",null,"predicado de tipo"),o(": "),e("code",null,"parametro is Tipo"),o(". Esto le dice a TypeScript que si la función retorna "),e("code",null,"true"),o(", el parámetro es de ese tipo específico.")],-1)),e("div",T,[e("div",x,[n[12]||(n[12]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis")],-1)),s(a,{language:"typescript",code:`interface Pez {
  nadar: () => void;
}

interface Ave {
  volar: () => void;
}

// El tipo de retorno 'animal is Pez' es el predicado de tipo
function esPez(animal: Pez | Ave): animal is Pez {
  return (animal as Pez).nadar !== undefined;
}

function mover(animal: Pez | Ave) {
  if (esPez(animal)) {
    animal.nadar(); // TypeScript sabe que es Pez
  } else {
    animal.volar(); // TypeScript sabe que es Ave
  }
}`})]),e("div",P,[n[13]||(n[13]=e("div",{class:"card-header"},[e("h3",null,"Caso de uso real: Filtrar arrays"),e("span",{class:"badge success"},"Muy útil")],-1)),n[14]||(n[14]=e("p",null,[o("Los predicados son esenciales al filtrar arrays con "),e("code",null,".filter()"),o(", ya que TypeScript no puede inferir el tipo del resultado automáticamente.")],-1)),s(a,{language:"typescript",code:`const valores: (string | null)[] = ['Alex', null, 'Diego', null];

// Sin predicado: el tipo es (string | null)[]
const sinNull1 = valores.filter((v) => v !== null);

// Con predicado: el tipo es string[]
function esString(v: string | null): v is string {
  return v !== null;
}
const sinNull2 = valores.filter(esString); // string[]`})])])]),n[27]||(n[27]=e("hr",{class:"divider"},null,-1)),e("section",C,[n[20]||(n[20]=e("h2",{class:"section-title typescript"},"Uniones Discriminadas (Discriminated Unions)",-1)),n[21]||(n[21]=e("p",{class:"section-desc"},[o("Es el patrón más potente e importante de TypeScript para modelar estados. Consiste en crear un campo común (llamado "),e("strong",null,"discriminante"),o("), generalmente de tipo literal string, que TypeScript usa para saber con exactitud qué variante del tipo tienes en cada rama. Es el corazón del diseño de tipos en aplicaciones reales.")],-1)),e("div",z,[e("div",j,[n[17]||(n[17]=e("div",{class:"card-header"},[e("h3",null,"Modelando estados con una propiedad 'tipo'"),e("span",{class:"badge success"},"Patrón esencial")],-1)),s(a,{language:"typescript",code:`interface EstadoCargando {
  tipo: 'cargando';
}

interface EstadoExitoso {
  tipo: 'exitoso';
  datos: string[];
}

interface EstadoError {
  tipo: 'error';
  mensaje: string;
}

type EstadoPeticion = EstadoCargando | EstadoExitoso | EstadoError;

function renderizar(estado: EstadoPeticion) {
  switch (estado.tipo) {
    case 'cargando':
      return 'Cargando...';
    case 'exitoso':
      // TypeScript sabe que 'estado' es EstadoExitoso
      return estado.datos.join(', ');
    case 'error':
      // TypeScript sabe que 'estado' es EstadoError
      return \`Error: \${estado.mensaje}\`;
  }
}`})]),e("div",w,[n[18]||(n[18]=e("div",{class:"card-header"},[e("h3",null,"Exhaustividad con never")],-1)),n[19]||(n[19]=e("p",null,[o("Puedes usar el tipo "),e("code",null,"never"),o(" en el caso "),e("code",null,"default"),o(" de un "),e("code",null,"switch"),o(" para garantizar que todos los casos estén cubiertos. Si alguna vez añades un nuevo estado y olvidas el "),e("code",null,"case"),o(", TypeScript lanzará un error de compilación.")],-1)),s(a,{language:"typescript",code:`type Figura = { tipo: 'circulo'; radio: number }
           | { tipo: 'cuadrado'; lado: number };

function area(f: Figura): number {
  switch (f.tipo) {
    case 'circulo':   return Math.PI * f.radio ** 2;
    case 'cuadrado':  return f.lado ** 2;
    default:
      // Si olvidamos un case, TypeScript nos avisa aquí
      const _exhaustivo: never = f;
      throw new Error(\`Figura no manejada: \${_exhaustivo}\`);
  }
}`})])])]),n[28]||(n[28]=e("hr",{class:"divider"},null,-1)),s(t,{references:[{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"funciones",text:"Funciones"},{techId:"typescript",moduleId:"genericos",text:"Genéricos"}]})]))}});export{U as default};
