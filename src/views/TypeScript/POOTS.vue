<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Programación Orientada a Objetos</h1>
      <p class="subtitle">Clases, interfaces y herencia para construir arquitecturas sólidas y escalables.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Clases</h2>
      <p class="section-desc">TypeScript añade tipos y modificadores a las clases de ES6, permitiendo una definición más rigurosa de los objetos. Cada campo debe declararse con su tipo y, con <code>strictPropertyInitialization</code> (incluido en <code>strict</code>), debe inicializarse o asignarse en el constructor.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Campos y constructor</h3>
          </div>
          <p>Los campos se declaran en el cuerpo de la clase. Si tienen valor inicial, no hace falta asignarlos en el constructor.</p>
          <CodeBlock language="typescript" code="class Usuario {
  nombre: string;     // Debe asignarse en el constructor
  activo = true;      // Valor inicial: se infiere boolean

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  presentar(): string {
    return `Hola, soy ${this.nombre}`;
  }
}

const u = new Usuario('Ana');" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Propiedades de parámetros (Shorthand)</h3>
          </div>
          <p>Un modificador de acceso o <code>readonly</code> delante de un parámetro del constructor declara y asigna la propiedad automáticamente, ahorrando líneas de código.</p>
          <CodeBlock language="typescript" code="class Usuario {
  constructor(
    public nombre: string,
    private id: number,
    protected email: string,
    readonly creado = new Date()
  ) {}

  presentar() {
    return `Hola, soy ${this.nombre}`;
  }
}" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Aserción de asignación definitiva (!)</h3>
            <span class="badge danger">Con cuidado</span>
          </div>
          <p>Si un campo se inicializa fuera del constructor (por ejemplo en un método <code>init</code> o por un framework), puedes silenciar el error con <code>!</code>. Es una promesa al compilador: si no la cumples, fallará en tiempo de ejecución.</p>
          <CodeBlock language="typescript" code="class Servicio {
  private cache!: Map<string, number>; // '!' = se asignará antes de usarse

  init() {
    this.cache = new Map();
  }

  leer(clave: string) {
    return this.cache.get(clave);
  }
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Tipado estructural</h3>
          </div>
          <p>TypeScript compara las clases por su <strong>forma</strong>, no por su nombre. Cualquier objeto con los mismos miembros públicos es compatible con el tipo de la clase.</p>
          <CodeBlock language="typescript" code="class Punto {
  x = 0;
  y = 0;
}

function dibujar(p: Punto) {
  console.log(p.x, p.y);
}

// OK: un objeto literal con la misma forma es compatible
dibujar({ x: 10, y: 20 });" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Modificadores de Acceso</h2>
      <p class="section-desc">Controlan quién puede ver y modificar cada miembro de la clase. Son verificaciones de <strong>compilación</strong>: desaparecen al transpilar a JavaScript.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>public / private / protected</h3>
          </div>
          <p><code>public</code> (por defecto) permite acceso total. <code>private</code> solo permite acceso dentro de la misma clase. <code>protected</code> permite acceso en la clase y sus subclases, pero no desde fuera.</p>
          <CodeBlock language="typescript" code="class Cuenta {
  public titular: string;
  private saldo = 0;
  protected tipo = 'ahorro';

  constructor(titular: string) {
    this.titular = titular;
  }

  depositar(monto: number) {
    this.saldo += monto; // OK: dentro de la clase
  }
}

const c = new Cuenta('Ana');
c.titular;  // OK
// c.saldo; // Error: 'saldo' es privado
// c.tipo;  // Error: 'tipo' es protegido" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>readonly</h3>
          </div>
          <p><code>readonly</code> impide reasignar una propiedad tras su inicialización (en la declaración o en el constructor).</p>
          <CodeBlock language="typescript" code="class Config {
  readonly version = '1.0';
  readonly entorno: string;

  constructor(entorno: string) {
    this.entorno = entorno; // OK: dentro del constructor
  }
}

const cfg = new Config('prod');
// cfg.version = '2.0'; // Error: propiedad de solo lectura" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>private vs #privado (ECMAScript)</h3>
            <span class="badge success">Importante</span>
          </div>
          <p><code>private</code> de TypeScript solo existe en compilación: en JavaScript el campo sigue siendo accesible y TS incluso permite la notación de corchetes. Los campos <code>#</code> de ECMAScript son privados <strong>reales</strong> en tiempo de ejecución.</p>
          <CodeBlock language="typescript" code="class Secreto {
  private a = 1; // Privacidad solo en compilación
  #b = 2;        // Privacidad real (JavaScript nativo)
}

const s = new Secreto();
// s.a;     // Error de compilación
console.log(s['a']); // 1 -> TS permite la notación de corchetes
// s.#b;    // Error: nunca accesible desde fuera" />
        </div>
      </div>
    </section>
    <hr class="divider" />

    <!-- ============ ACCESSORS Y STATIC ============ -->
    <section class="topic-section">
      <h2 class="section-title typescript">Accessors y Miembros Estáticos</h2>
      <p class="section-desc">Los <code>get</code>/<code>set</code> exponen lógica como si fueran propiedades, y <code>static</code> asocia miembros a la clase en lugar de a cada instancia.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Getters y Setters</h3>
          </div>
          <p>Permiten validar o calcular valores al leer/escribir. Un <code>get</code> sin <code>set</code> es automáticamente de solo lectura.</p>
          <CodeBlock language="typescript" code="class Temperatura {
  #celsius = 0;

  get celsius(): number {
    return this.#celsius;
  }

  set celsius(valor: number) {
    if (valor < -273.15) throw new Error('Valor imposible');
    this.#celsius = valor;
  }

  // Solo getter: propiedad calculada de solo lectura
  get fahrenheit(): number {
    return this.#celsius * 9 / 5 + 32;
  }
}

const t = new Temperatura();
t.celsius = 25;
console.log(t.fahrenheit); // 77
// t.fahrenheit = 100;     // Error: no tiene setter" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>static</h3>
          </div>
          <p>Los miembros <code>static</code> se acceden desde la clase, no desde las instancias. Útiles para contadores, constantes y métodos de fábrica.</p>
          <CodeBlock language="typescript" code="class Contador {
  static total = 0;

  static incrementar(): number {
    return ++Contador.total;
  }

  constructor() {
    Contador.incrementar();
  }
}

new Contador();
new Contador();
console.log(Contador.total); // 2" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Herencia y Clases Abstractas</h2>
      <p class="section-desc">Extiende funcionalidades de clases existentes o define moldes incompletos que obliguen a las subclases a implementar ciertos miembros.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>extends y super</h3>
          </div>
          <p>La subclase hereda los miembros de la base. Si define constructor, debe llamar a <code>super(...)</code> <strong>antes</strong> de usar <code>this</code>.</p>
          <CodeBlock language="typescript" code="class Persona {
  constructor(public nombre: string, protected edad: number) {}

  presentar() {
    return `Hola, soy ${this.nombre}`;
  }
}

class Empleado extends Persona {
  constructor(nombre: string, edad: number, public sueldo: number) {
    super(nombre, edad); // Obligatorio antes de usar 'this'
  }
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>override</h3>
            <span class="badge success">Buena práctica</span>
          </div>
          <p>Marca explícitamente que un método sobrescribe al de la clase base. Si el método base cambia de nombre o desaparece, TypeScript avisa. Actívalo globalmente con <code>noImplicitOverride</code>.</p>
          <CodeBlock language="typescript" code="class Gerente extends Empleado {
  override presentar() {
    return `${super.presentar()} (Gerente)`;
  }

  // override presentarse() {}
  // Error: no existe 'presentarse' en la clase base
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Abstract Classes</h3>
            <span class="badge success">Patrón</span>
          </div>
          <p>No se pueden instanciar directamente; sirven como base. Pueden mezclar miembros abstractos (sin implementación, obligatorios en las hijas) con miembros concretos.</p>
          <CodeBlock language="typescript" code="abstract class Figura {
  abstract area(): number; // Obligatorio en las hijas

  describir() {            // Miembro concreto reutilizable
    return `Área: ${this.area().toFixed(2)}`;
  }
}

class Circulo extends Figura {
  constructor(private radio: number) {
    super();
  }
  area() {
    return Math.PI * this.radio ** 2;
  }
}

// new Figura(); // Error: no se puede instanciar una clase abstracta
console.log(new Circulo(2).describir());" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Interfaces vs Clases</h2>
      <p class="section-desc">Las interfaces definen el "qué" (contrato) y desaparecen en tiempo de ejecución; las clases definen el "cómo" (implementación) y sí existen como valores en JavaScript.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>implements (uno o varios contratos)</h3>
          </div>
          <p>Una clase puede implementar múltiples interfaces, pero solo puede extender <strong>una</strong> clase.</p>
          <CodeBlock language="typescript" code="interface Volador {
  volar(): void;
}
interface Nadador {
  nadar(): void;
}

class Pato implements Volador, Nadador {
  volar() { console.log('Volando...'); }
  nadar() { console.log('Nadando...'); }
}" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>implements solo comprueba</h3>
            <span class="badge danger">Trampa común</span>
          </div>
          <p><code>implements</code> verifica que la clase cumpla el contrato, pero <strong>no cambia</strong> su tipo ni infiere los tipos de los parámetros. Debes tiparlos tú.</p>
          <CodeBlock language="typescript" code="interface Comprobable {
  verificar(nombre: string): boolean;
}

class Validador implements Comprobable {
  // Los parámetros NO se infieren desde la interfaz:
  // sin ': string' sería 'any' implícito (error con noImplicitAny)
  verificar(nombre: string) {
    return nombre.toLowerCase() === 'ok';
  }
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Interfaces Avanzadas</h2>
      <p class="section-desc">Las interfaces soportan extensión múltiple, firmas de índice, firmas de llamada y construcción, y fusión de declaraciones.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>extends (uno o varios) y opcionales</h3>
          </div>
          <p>Una interfaz puede extender varias interfaces a la vez. Usa <code>?</code> para propiedades opcionales y <code>readonly</code> para las de solo lectura.</p>
          <CodeBlock language="typescript" code="interface Direccion {
  ciudad: string;
  pais: string;
}
interface Contacto {
  email: string;
  telefono?: string; // Propiedad opcional
}

interface Cliente extends Direccion, Contacto {
  readonly id: number;
  nombre: string;
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Firmas de índice</h3>
          </div>
          <p>Describen objetos usados como diccionarios, donde las claves no se conocen de antemano. Todas las propiedades deben ser compatibles con el tipo del índice.</p>
          <CodeBlock language="typescript" code="interface Traducciones {
  [palabra: string]: string;
}

const es: Traducciones = {
  hello: 'hola',
  bye: 'adiós'
};
es['thanks'] = 'gracias'; // OK: cualquier clave string" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Método vs propiedad de función</h3>
          </div>
          <p>Se pueden tipar funciones dentro de una interfaz con sintaxis de <strong>método</strong> o como <strong>propiedad</strong> con tipo función (esta última, con <code>strictFunctionTypes</code>, comprueba los parámetros de forma más estricta).</p>
          <CodeBlock language="typescript" code="interface Calculadora {
  sumar(a: number, b: number): number;         // Método
  restar: (a: number, b: number) => number;    // Propiedad de función
}

const calc: Calculadora = {
  sumar(a, b) { return a + b; },
  restar: (a, b) => a - b
};" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Firmas de llamada y de construcción</h3>
          </div>
          <p>Una interfaz puede describir una función invocable (<em>call signature</em>) o algo que se puede instanciar con <code>new</code> (<em>construct signature</em>).</p>
          <CodeBlock language="typescript" code="// Call signature: describe la función en sí
interface Operacion {
  (a: number, b: number): number;
}
const multiplicar: Operacion = (a, b) => a * b;

// Construct signature: describe algo instanciable con 'new'
class Usuario {
  constructor(public nombre: string) {}
}
interface FabricaDeUsuarios {
  new (nombre: string): Usuario;
}
function crear(Fabrica: FabricaDeUsuarios, nombre: string) {
  return new Fabrica(nombre);
}
const u = crear(Usuario, 'Ana');" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Declaration Merging</h3>
            <span class="badge success">Exclusivo de interface</span>
          </div>
          <p>Si declaras la misma interfaz varias veces, TypeScript las fusiona en una sola. Es la base para extender tipos de librerías (por ejemplo <code>Window</code>). Los <code>type</code> no pueden hacerlo.</p>
          <CodeBlock language="typescript" code="interface Ventana {
  titulo: string;
}
interface Ventana {
  ancho: number;
}

// Ambas declaraciones se fusionan
const v: Ventana = { titulo: 'App', ancho: 800 };" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">interface vs type</h2>
      <p class="section-desc">Para describir la forma de un objeto, ambos son casi intercambiables. Las diferencias clave están en cómo se extienden y en qué más pueden representar.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>extends vs Intersection Types (&amp;)</h3>
          </div>
          <p>Las interfaces se extienden con <code>extends</code>. Los type aliases combinan tipos con la intersección <code>&amp;</code>.</p>
          <CodeBlock language="typescript" code="// interface: extends
interface Base { id: number }
interface Completo extends Base { nombre: string }

// type: intersección
type Base2 = { id: number };
type Detalle = { nombre: string };
type Completo2 = Base2 & Detalle;

const obj: Completo2 = { id: 1, nombre: 'Ana' };" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Qué pasa ante un conflicto</h3>
          </div>
          <p>Con <code>extends</code>, una propiedad incompatible produce un error claro. Con <code>&amp;</code>, el compilador no se queja: la propiedad se vuelve <code>never</code> y el error aparece más tarde.</p>
          <CodeBlock language="typescript" code="interface Animal { sonido: string }

// interface Perro extends Animal { sonido: number }
// Error: 'Perro' extiende incorrectamente a 'Animal'

type Perro = Animal & { sonido: number };
// 'sonido' es string &amp; number = never (sin error aquí)" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>¿Cuál usar?</h3>
            <span class="badge success">Criterio</span>
          </div>
          <p>Usa <code>interface</code> para describir objetos y contratos de clases (mejores mensajes de error, fusión y <code>extends</code>). Usa <code>type</code> cuando necesites uniones, tuplas, primitivos, tipos condicionales o mapped types.</p>
          <CodeBlock language="typescript" code="// Solo posible con type:
type Id = string | number;                  // Unión
type Par = [string, number];                // Tupla
type Estado = 'activo' | 'inactivo';        // Literales
type Callback = (err: Error | null) => void;

// Ideal con interface:
interface Repositorio<T> {
  obtener(id: number): T;
  guardar(item: T): void;
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'inferencia', text: 'Inferencia de Tipos' },
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos' },
      { techId: 'typescript', moduleId: 'enums', text: 'Enums en TS' },
      { techId: 'typescript', moduleId: 'genericos', text: 'Genéricos en TS' },
      { techId: 'typescript', moduleId: 'narrowing', text: 'Narrowing' },
      { techId: 'typescript', moduleId: 'tiposavanzados', text: 'Tipos Avanzados' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
