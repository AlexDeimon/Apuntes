<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Narrowing</h1>
      <p class="subtitle">Técnicas para reducir un tipo amplio a uno más específico y trabajar con él de forma segura.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">¿Qué es el Narrowing?</h2>
      <p class="section-desc">Cuando una variable puede tener múltiples tipos (union type), TypeScript no sabe cuál es el tipo exacto en un momento dado. El <strong>Narrowing</strong> es el proceso de usar verificaciones de control de flujo para que TypeScript "reduzca" el abanico de posibilidades y pueda ofrecerte autocompletado y seguridad de tipo exacta dentro de cada rama.</p>
      <div class="card info">
        <div class="card-header">
          <h3>El problema sin Narrowing</h3>
        </div>
        <CodeBlock language="typescript" code="function formatear(valor: string | number) {
  // Error: Property 'toUpperCase' does not exist on type 'string | number'.
  return valor.toUpperCase();
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">typeof — Guardia de tipo primitivo</h2>
      <p class="section-desc">El operador <code>typeof</code> devuelve un string con el nombre del tipo de un valor. TypeScript entiende estas comprobaciones y ajusta el tipo dentro de cada bloque. Valores posibles: <code>"string"</code>, <code>"number"</code>, <code>"bigint"</code>, <code>"boolean"</code>, <code>"symbol"</code>, <code>"undefined"</code>, <code>"object"</code>, <code>"function"</code>.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Uso con typeof</h3>
            <span class="badge success">Primitivos</span>
          </div>
          <CodeBlock language="typescript" code="function formatear(valor: string | number): string {
  if (typeof valor === 'string') {
    // Aquí TypeScript sabe que 'valor' es string
    return valor.toUpperCase();
  }
  // Aquí TypeScript sabe que 'valor' es number
  return valor.toFixed(2);
}" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Trampa: typeof null === 'object'</h3>
            <span class="badge danger">Cuidado</span>
          </div>
          <p>El famoso bug de JavaScript: <code>typeof null</code> retorna <code>'object'</code>, no <code>'null'</code>. Siempre verifica nulos explícitamente antes de usar <code>typeof</code> para objetos.</p>
          <CodeBlock language="typescript" code="function procesar(valor: string | null) {
  if (valor !== null) {
    // Ahora TypeScript sabe que 'valor' es string
    console.log(valor.toUpperCase());
  }
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">instanceof — Guardia de clases</h2>
      <p class="section-desc">El operador <code>instanceof</code> verifica si un objeto fue creado por un constructor específico. Es el equivalente a <code>typeof</code> pero para instancias de clases.</p>
      <div class="card info">
        <CodeBlock language="typescript" code="class Gato {
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
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Operador in — Verificar propiedades</h2>
      <p class="section-desc">El operador <code>in</code> comprueba si una propiedad existe en un objeto. TypeScript lo usa para reducir el tipo cuando dos interfaces tienen propiedades distintas.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Discriminar con in</h3>
          <span class="badge success">Interfaces</span>
        </div>
        <CodeBlock language="typescript" code="interface Circulo {
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
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Type Predicates — Predicados de Tipo</h2>
      <p class="section-desc">Cuando la lógica de verificación es compleja, puedes encapsularla en una función dedicada que retorna un <strong>predicado de tipo</strong>: <code>parametro is Tipo</code>. Esto le dice a TypeScript que si la función retorna <code>true</code>, el parámetro es de ese tipo específico.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis</h3>
          </div>
          <CodeBlock language="typescript" code="interface Pez {
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
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Caso de uso real: Filtrar arrays</h3>
            <span class="badge success">Muy útil</span>
          </div>
          <p>Los predicados son esenciales al filtrar arrays con <code>.filter()</code>, ya que TypeScript no puede inferir el tipo del resultado automáticamente.</p>
          <CodeBlock language="typescript" code="const valores: (string | null)[] = ['Alex', null, 'Diego', null];

// Sin predicado: el tipo es (string | null)[]
const sinNull1 = valores.filter((v) => v !== null);

// Con predicado: el tipo es string[]
function esString(v: string | null): v is string {
  return v !== null;
}
const sinNull2 = valores.filter(esString); // string[]" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Uniones Discriminadas (Discriminated Unions)</h2>
      <p class="section-desc">Es el patrón más potente e importante de TypeScript para modelar estados. Consiste en crear un campo común (llamado <strong>discriminante</strong>), generalmente de tipo literal string, que TypeScript usa para saber con exactitud qué variante del tipo tienes en cada rama. Es el corazón del diseño de tipos en aplicaciones reales.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Modelando estados con una propiedad 'tipo'</h3>
            <span class="badge success">Patrón esencial</span>
          </div>
          <CodeBlock language="typescript" code="interface EstadoCargando {
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
      return `Error: ${estado.mensaje}`;
  }
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Exhaustividad con never</h3>
          </div>
          <p>Puedes usar el tipo <code>never</code> en el caso <code>default</code> de un <code>switch</code> para garantizar que todos los casos estén cubiertos. Si alguna vez añades un nuevo estado y olvidas el <code>case</code>, TypeScript lanzará un error de compilación.</p>
          <CodeBlock language="typescript" code="type Figura = { tipo: 'circulo'; radio: number }
           | { tipo: 'cuadrado'; lado: number };

function area(f: Figura): number {
  switch (f.tipo) {
    case 'circulo':   return Math.PI * f.radio ** 2;
    case 'cuadrado':  return f.lado ** 2;
    default:
      // Si olvidamos un case, TypeScript nos avisa aquí
      const _exhaustivo: never = f;
      throw new Error(`Figura no manejada: ${_exhaustivo}`);
  }
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos' },
      { techId: 'typescript', moduleId: 'funciones', text: 'Funciones' },
      { techId: 'typescript', moduleId: 'genericos', text: 'Genéricos' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
