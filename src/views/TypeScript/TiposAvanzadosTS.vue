<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Tipos Avanzados</h1>
      <p class="subtitle">Crea tipos nuevos a partir de otros tipos existentes usando el sistema de tipos como un lenguaje propio.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">El operador keyof</h2>
      <p class="section-desc">El operador <code>keyof</code> toma un tipo objeto y produce una unión de tipo string o numérico con las claves de ese objeto. Es la base de muchos tipos avanzados.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>keyof básico</h3>
          </div>
          <CodeBlock language="typescript" code="interface Punto {
  x: number;
  y: number;
}

// 'x' | 'y'
type ClavePunto = keyof Punto;

const clave: ClavePunto = 'x'; // OK
// const clave2: ClavePunto = 'z'; // Error" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Función de acceso seguro con keyof</h3>
          </div>
          <p>Combinar <code>keyof</code> con genéricos es uno de los patrones más usados para acceder a propiedades de forma type-safe.</p>
          <CodeBlock language="typescript" code="function obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K): T[K] {
  return obj[clave];
}

const usuario = { nombre: 'Alex', edad: 25 };

const nombre = obtenerPropiedad(usuario, 'nombre'); // tipo: string
const edad = obtenerPropiedad(usuario, 'edad');     // tipo: number
// obtenerPropiedad(usuario, 'email'); // Error: 'email' no existe" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Indexados</h2>
      <p class="section-desc">Puedes usar la sintaxis de corchetes <code>Tipo["propiedad"]</code> para acceder al tipo de una propiedad específica dentro de otro tipo, igual que accederías a un valor en JavaScript.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Acceso por índice</h3>
          </div>
          <CodeBlock language="typescript" code="interface Persona {
  nombre: string;
  edad: number;
  activo: boolean;
}

type TipoNombre = Persona['nombre']; // string
type TiposBasicos = Persona['nombre' | 'edad']; // string | number" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Acceso a arrays con number</h3>
          </div>
          <p>Usar <code>number</code> como índice sobre un tipo array extrae el tipo de sus elementos.</p>
          <CodeBlock language="typescript" code="const ROLES = ['admin', 'usuario', 'invitado'];

// Extrae el tipo de los elementos del array: 'admin' | 'usuario' | 'invitado'
type Rol = typeof ROLES[number];" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Condicionales</h2>
      <p class="section-desc">Los tipos condicionales funcionan como el operador ternario de JavaScript, pero a nivel de tipos. La sintaxis es: <code>T extends U ? TipoSiVerdadero : TipoSiFalso</code>. Permiten crear tipos que dependen de otros tipos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Ternario de tipos básico</h3>
          </div>
          <CodeBlock language="typescript" code="// Si T se puede asignar a string, el resultado es string, sino number
type EsString<T> = T extends string ? 'sí' : 'no';

type A = EsString<string>;  // 'sí'
type B = EsString<number>;  // 'no'
type C = EsString<boolean>; // 'no'" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>infer — Extraer un tipo interno</h3>
            <span class="badge success">Avanzado</span>
          </div>
          <p>La palabra clave <code>infer</code> dentro de un tipo condicional permite capturar un sub-tipo para reutilizarlo. Es la base de tipos como <code>ReturnType</code>.</p>
          <CodeBlock language="typescript" code="// Extrae el tipo de retorno de cualquier función
type MiReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function crearUsuario() {
  return { id: 1, nombre: 'Alex' };
}

// { id: number; nombre: string }
type TipoUsuario = MiReturnType<typeof crearUsuario>;" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Mapped Types</h2>
      <p class="section-desc">Los Mapped Types construyen un nuevo tipo iterando sobre las claves de otro tipo, similar a un <code>.map()</code> de arrays pero para tipos. Son la base de todos los Utility Types como <code>Partial</code>, <code>Readonly</code> o <code>Record</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis básica</h3>
          </div>
          <CodeBlock language="typescript" code="// Para cada clave K en los keys de T,
// la propiedad en el nuevo tipo será booleana
type TodosBooleanos<T> = {
  [K in keyof T]: boolean;
};

interface Usuario {
  nombre: string;
  edad: number;
}

// { nombre: boolean; edad: boolean }
type UsuarioBooleano = TodosBooleanos<Usuario>;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Modificadores: + y - (agregar/quitar)</h3>
          </div>
          <p>Puedes agregar (<code>+</code>) o quitar (<code>-</code>) los modificadores <code>readonly</code> y <code>?</code> en los Mapped Types. Así se implementan <code>Partial</code> y <code>Required</code> internamente.</p>
          <CodeBlock language="typescript" code="// Implementación interna de Partial<T>
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
};" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Template Literal Types</h2>
      <p class="section-desc">Los Template Literal Types usan la sintaxis de los template literals de JavaScript (<code>`texto ${variable}`</code>) pero a nivel de tipos. Permiten construir nuevas uniones de strings de forma programática.
      </p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Combinación de uniones</h3>
          </div>
          <p>Cuando usas una unión dentro de un template literal type, TypeScript genera todas las combinaciones posibles automáticamente.</p>
          <CodeBlock language="typescript" code="type Color = 'rojo' | 'verde' | 'azul';
type Talla = 'S' | 'M' | 'L';

// 'rojo-S' | 'rojo-M' | 'rojo-L' | 'verde-S' | ...
type Variante = `${Color}-${Talla}`;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Generación de claves de eventos</h3>
          </div>
          <p>Un patrón muy común es generar dinámicamente nombres de eventos o propiedades a partir de un tipo base.</p>
          <CodeBlock language="typescript" code="type EventName<T extends string> = `on${Capitalize<T>}`;

// 'onClick' | 'onFocus' | 'onBlur'
type Handlers = EventName<'click' | 'focus' | 'blur'>;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Tipos de manipulación de strings</h3>
          </div>
          <p>TypeScript incluye tipos de utilidad específicos para strings: <code>Uppercase</code>, <code>Lowercase</code>, <code>Capitalize</code> y <code>Uncapitalize</code>.</p>
          <CodeBlock language="typescript" code="type Saludo = 'hola mundo';

type EnMayusculas  = Uppercase<Saludo>;   // 'HOLA MUNDO'
type EnMinusculas  = Lowercase<Saludo>;   // 'hola mundo'
type Capitalizado  = Capitalize<Saludo>;  // 'Hola mundo'
type Descapital    = Uncapitalize<'HolaMundo'>; // 'holaMundo'" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Combinando todo: Un ejemplo real</h2>
      <p class="section-desc">Los tipos avanzados brillan cuando se combinan. A continuación, un ejemplo que usa <code>keyof</code>, <code>Mapped Types</code> y <code>Template Literal Types</code> para generar automáticamente un tipo con getters a partir de un objeto.
      </p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Generador de Getters</h3>
        </div>
        <CodeBlock language="typescript" code="interface Estado {
  nombre: string;
  edad: number;
  activo: boolean;
}

// Genera: { getNombre: () => string; getEdad: () => number; getActivo: () => boolean }
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type GettersDeEstado = Getters<Estado>;

// Una implementación válida:
const miEstado: GettersDeEstado = {
  getNombre: () => 'Alex',
  getEdad: () => 25,
  getActivo: () => true,
};" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos' },
      { techId: 'typescript', moduleId: 'genericos', text: 'Genéricos' },
      { techId: 'typescript', moduleId: 'utilidad', text: 'Tipos de Utilidad' },
      { techId: 'typescript', moduleId: 'narrowing', text: 'Narrowing' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
