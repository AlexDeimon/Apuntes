<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Tipos de Datos</h1>
      <p class="subtitle">La base de la seguridad y el tipado estático en TypeScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipado Estático</h2>
      <p class="section-desc">A diferencia de JavaScript, que es de tipado dinámico, TypeScript permite definir tipos de forma estática. Esto significa que podemos especificar qué tipo de datos debe contener una variable, permitiendo detectar errores durante el desarrollo y no en tiempo de ejecución.</p>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Primitivos</h2>
      <p class="section-desc">TypeScript soporta todos los tipos primitivos de JavaScript.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>string, number, boolean</h3>
          <p>Los tipos básicos para texto, números (incluyendo decimales) y valores lógicos.</p>
          <CodeBlock language="typescript" code='let nombre: string = "Diego";
let edad: number = 25;
let esEstudiante: boolean = true;' />
        </div>
        <div class="card info">
          <h3>null & undefined</h3>
          <p>Representan la ausencia de valor. En TS son tipos por derecho propio.</p>
          <CodeBlock language="typescript" code="let vacio: null = null;
let indefinido: undefined = undefined;" />
        </div>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Especiales</h2>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>any</h3>
            <span class="badge danger">Evitar</span>
          </div>
          <p>Desactiva la comprobación de tipos. Permite asignar cualquier valor. Úsalo solo como último recurso.</p>
          <CodeBlock language="typescript" code='let algo: any = "Texto";
algo = 10; // No hay error' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>unknown</h3>
            <span class="badge success">Seguro</span>
          </div>
          <p>Similar a <code>any</code>, pero más seguro. No puedes realizar operaciones sobre una variable <code>unknown</code> sin antes verificar su tipo.</p>
          <CodeBlock language="typescript" code='let valor: unknown = "Hola";
// valor.toUpperCase(); // Error!
if (typeof valor === "string") {
  valor.toUpperCase(); // OK!
}' />
        </div>
        <div class="card info">
          <h3>void & never</h3>
          <p><code>void</code> indica que una función no retorna nada. <code>never</code> indica valores que nunca ocurrirán (ej: funciones que lanzan errores).</p>
          <CodeBlock language="typescript" code="function log(): void { console.log('Hi'); }

function error(): never {
  throw new Error('Error fatal');
}" />
        </div>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Complejos</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Interfaces</h3>
          <p>Se definen mediante la palabra reservada <code>interface</code> seguida del nombre de la interfaz y llaves {} los cuales contienen las propiedades y sus tipos.</p>
          <CodeBlock language="typescript" code='interface Persona {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
};' />
        </div>
        <div class="card info">
          <h3>Type Aliases</h3>
          <p>Similar a las interfaces, se definen mediante la palabra reservada <code>type</code> seguida del nombre del type alias y llaves {}. La diferencia es que los type aliases pueden ser usados para definir tipos de datos primitivos, mientras que las interfaces solo pueden ser usadas para definir tipos de datos complejos.</p>
          <CodeBlock language="typescript" code='type Persona = {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Ana",
  edad: 28,
};' />
        </div>
        <div class="card info">
          <h3>Objetos</h3>
          <p>Se definen mediante llaves {} conteniendo los nombres de las propiedades y sus tipos de datos esperados.</p>
          <CodeBlock language="typescript" code='let persona1: {
  nombre: string;
  edad: number
} = {
  nombre: "Luis",
  edad: 22,
};' />
        </div>
        <div class="card info">
          <h3>Arrays</h3>
          <p>Se definen mediante el nombre del array seguido de corchetes [].</p>
          <CodeBlock language="typescript" code='let lista: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];' />
        </div>
        <div class="card info">
          <h3>Enums</h3>
          <p>Permiten definir un conjunto de constantes con nombre.</p>
          <CodeBlock language="typescript" code='enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
  Derecha
}

let miDireccion: Direccion = Direccion.Arriba;' />
        </div>
        <div class="card info">
          <h3>Tuplas</h3>
          <p>Permiten expresar un array con un número fijo de elementos cuyos tipos son conocidos.</p>
          <CodeBlock language="typescript" code='let persona: [string, number];
persona = ["Diego", 25];
// persona = [25, "Diego"]; // Error!' />
        </div>
        <div class="card info">
          <h3>Union Types</h3>
          <p>Permiten que una variable pueda ser de más de un tipo.</p>
          <CodeBlock language="typescript" code='let id: string | number;
id = 10;
id = "ABC";' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Literales</h2>
      <p class="section-desc">Un tipo no tiene por qué ser solo <code>string</code> o <code>number</code>: también puede ser un <strong>valor exacto</strong>. Combinados con los Union Types, permiten restringir una variable a un conjunto cerrado de valores posibles, de forma similar a un enum pero sin generar código en tiempo de ejecución.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Literales y Uniones</h3>
          </div>
          <p>Se usan comúnmente para estados, opciones y configuraciones.</p>
          <CodeBlock language="typescript" code='let estado: "activo" | "inactivo";
estado = "activo";   // OK
// estado = "pausado"; // Error: Type "pausado" is not assignable to type "activo" | "inactivo"

type Direccion = "norte" | "sur" | "este" | "oeste";
type Dado = 1 | 2 | 3 | 4 | 5 | 6;

function mover(dir: Direccion, pasos: Dado) {
  console.log(`Mover ${pasos} hacia el ${dir}`);
}
mover("norte", 3); // OK
// mover("arriba", 3); // Error' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Inferencia: const vs let</h3>
            <span class="badge success">Importante</span>
          </div>
          <p>Con <code>const</code> TS infiere el tipo literal exacto; con <code>let</code> lo "ensancha" (widening) al tipo primitivo, porque el valor podría cambiar.</p>
          <CodeBlock language="typescript" code='const a = "hola"; // Tipo: "hola"
let b = "hola";   // Tipo: string

const c = 42;     // Tipo: 42
let d = 42;       // Tipo: number' />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>as const</h3>
          </div>
          <p>La aserción <code>as const</code> convierte un objeto o array en <strong>solo lectura</strong> con tipos literales exactos. Es muy útil para derivar uniones a partir de valores.</p>
          <CodeBlock language="typescript" code='const ROLES = ["admin", "editor", "lector"] as const;
// Tipo: readonly ["admin", "editor", "lector"]

type Rol = (typeof ROLES)[number];
// Tipo: "admin" | "editor" | "lector"

const config = { modo: "oscuro", puerto: 3000 } as const;
// config.modo es "oscuro" (no string) y es readonly
// config.puerto = 8080; // Error: es de solo lectura' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Problema común con objetos</h3>
          </div>
          <p>Al declarar un objeto, sus propiedades se infieren como <code>string</code>, no como literales, lo que puede causar errores al pasarlo a una función que espera un literal.</p>
          <CodeBlock language="typescript" code='function pedir(url: string, metodo: "GET" | "POST") {}

const req = { url: "/api", metodo: "GET" };
// pedir(req.url, req.metodo); // Error: string no es asignable a "GET" | "POST"

// Soluciones:
const req2 = { url: "/api", metodo: "GET" as const };
const req3 = { url: "/api", metodo: "GET" } as const;
pedir(req2.url, req2.metodo); // OK' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Index Signatures</h2>
      <p class="section-desc">Cuando no conoces de antemano los nombres de las propiedades de un objeto, pero sí el tipo de sus claves y de sus valores, puedes usar una <strong>firma de índice</strong>. Es la forma de tipar diccionarios o mapas de claves dinámicas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis Básica</h3>
          </div>
          <p>El tipo de la clave puede ser <code>string</code>, <code>number</code>, <code>symbol</code> o un template literal type.</p>
          <CodeBlock language="typescript" code='interface Puntajes {
  [jugador: string]: number;
}

const puntajes: Puntajes = {
  Ana: 90,
  Luis: 75
};

puntajes["Marta"] = 88; // OK: se pueden agregar claves nuevas
// puntajes.Pedro = "alto"; // Error: el valor debe ser number

// Tambien con type alias o inline
type Traducciones = { [palabra: string]: string };' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Compatibilidad con otras propiedades</h3>
            <span class="badge danger">Restricción</span>
          </div>
          <p>Todas las propiedades explícitas deben ser compatibles con el tipo de valor de la firma de índice. Si necesitas tipos distintos, usa una unión.</p>
          <CodeBlock language="typescript" code='// Error: "nombre" (string) no es asignable a number
interface Mal {
  [clave: string]: number;
  nombre: string;
}

// Correcto: se amplia el valor con una union
interface Bien {
  [clave: string]: number | string;
  nombre: string;
  edad: number;
}' />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Solo lectura</h3>
          </div>
          <p>Puedes impedir que se reasignen valores marcando la firma de índice como <code>readonly</code>.</p>
          <CodeBlock language="typescript" code='interface Constantes {
  readonly [clave: string]: number;
}

const c: Constantes = { PI: 3.14159 };
// c["PI"] = 3; // Error: solo lectura' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Alternativa: Record</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>Para casos simples, el utility type <code>Record&lt;Clave, Valor&gt;</code> es más conciso. Además permite restringir las claves a una unión de literales.</p>
          <CodeBlock language="typescript" code='type Puntajes = Record<string, number>;

// Con claves literales, TS exige que existan todas
type Config = Record<"dev" | "prod", string>;
const cfg: Config = { dev: "localhost", prod: "miapp.com" };' />
        </div>
      </div><br><br>
      <div class="card warning">
        <div class="card-header">
          <h3>Acceso a claves inexistentes</h3>
        </div>
        <p>Por defecto, TS asume que cualquier clave del índice existe, aunque en la realidad devuelva <code>undefined</code>. Para mayor seguridad, activa <code>noUncheckedIndexedAccess</code> en el <code>tsconfig.json</code>.</p>
        <CodeBlock language="typescript" code='const p: Record<string, number> = { Ana: 90 };

const nota = p["Inexistente"];
// Sin la opción: tipo number (¡pero en runtime es undefined!)
// Con noUncheckedIndexedAccess: tipo number | undefined

if (nota !== undefined) {
  console.log(nota.toFixed(1)); // Seguro
}' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Aserciones y Narrowing</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Type Assertions (as)</h3>
          <p>Cuando tú sabes más sobre el tipo de un valor que TypeScript, puedes "forzar" el tipo. Aunque existe una sintaxis alternativa con <code>&lt;Tipo&gt;</code>, el estándar de la industria es usar <code>as Tipo</code> porque la primera es incompatible con TSX/React.</p>
          <CodeBlock language="typescript" code='// canvas es un HTMLElement por defecto
const canvas = document.getElementById("main") as HTMLCanvasElement;

// Sintaxis antigua (No usar en proyectos con React/TSX):
// const canvas = <HTMLCanvasElement>document.getElementById("main");' />
        </div>
        <div class="card info">
          <h3>Narrowing</h3>
          <p>Técnica para reducir un tipo amplio a uno más específico mediante validaciones.</p>
          <CodeBlock language="typescript" code='function split(val: string | number) {
  if (typeof val === "string") {
    return val.split(""); // TS sabe que es string
  }
  return val.toFixed(2); // TS sabe que es number
}' />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JavaScript' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>

