<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Genéricos</h1>
      <p class="subtitle">Crea código reutilizable, flexible y con tipado fuerte mediante parámetros de tipo.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">¿Qué son los Genéricos?</h2>
      <p class="section-desc">Los genéricos permiten que las funciones, clases e interfaces trabajen con una variedad de tipos en lugar de uno solo, sin perder la seguridad del tipado estático (a diferencia de usar <code>any</code>). Piensa en ellos como "variables de tipo" que pasamos como argumentos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>El problema: Duplicidad o pérdida de tipo</h3>
          </div>
          <p>Sin genéricos, o bien repetimos lógica para cada tipo de dato, o bien usamos <code>any</code> (perdiendo la seguridad de TypeScript).</p>
          <CodeBlock language="typescript" code="// Sin seguridad de tipo:
function identityAny(arg: any): any {
  return arg;
}
const res = identityAny('hola'); // res es de tipo 'any'" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>La solución: Parámetro de tipo &lt;T&gt;</h3>
            <span class="badge success">Seguro</span>
          </div>
          <p>Usamos un marcador (usualmente <code>T</code> por <i>Type</i>) para capturar el tipo provisto por el usuario en la llamada.</p>
          <CodeBlock language="typescript" code="// Con seguridad de tipo:
function identity<T>(arg: T): T {
  return arg;
}
const res = identity<string>('hola'); // res es de tipo 'string'" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Funciones Genéricas</h2>
      <p class="section-desc">Podemos usar genéricos tanto en funciones estándar como en funciones flecha. TypeScript también puede inferir el tipo automáticamente basándose en los argumentos pasados.</p>
      <CodeBlock language="typescript" code="// Función estándar
function primeraPosicion<T>(arr: T[]): T {
  return arr[0];
}

// Función Flecha (Arrow Function)
const primeraPosicionArrow = <T>(arr: T[]): T => {
  return arr[0];
};

const primerNumero = primeraPosicion([10, 20, 30]); // Infiere number
const primerTexto = primeraPosicion(['a', 'b', 'c']); // Infiere string" />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Interfaces y Clases Genéricas</h2>
      <p class="section-desc">Las interfaces y clases pueden parametrizarse con tipos para modelar estructuras de datos sumamente flexibles.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Interfaces Genéricas</h3>
          </div>
          <CodeBlock language="typescript" code="interface Respuesta<T> {
  exitoso: boolean;
  datos: T;
}

const respuestaUsuarios: Respuesta<{ nombre: string }[]> = {
  exitoso: true,
  datos: [{ nombre: 'Diego' }]
};" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Clases Genéricas</h3>
          </div>
          <CodeBlock language="typescript" code="class Caja<T> {
  contenido: T;
  constructor(valor: T) {
    this.contenido = valor;
  }
  obtenerContenido(): T {
    return this.contenido;
  }
}

const cajaNumeros = new Caja<number>(100);
const cajaTextos = new Caja<string>('Hola');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Restricciones de Genéricos</h2>
      <p class="section-desc">A veces no queremos admitir absolutamente cualquier tipo, sino restringir el genérico a tipos que cumplan con ciertas condiciones utilizando la palabra clave <code>extends</code>.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Uso de extends</h3>
            <span class="badge danger">Restricción</span>
          </div>
          <p>Forzamos a que el parámetro genérico tenga al menos las propiedades especificadas.</p>
          <CodeBlock language="typescript" code="interface ConLongitud {
  length: number;
}

function loguearLongitud<T extends ConLongitud>(arg: T): T {
  console.log(arg.length); // Seguro: 'length' está garantizado
  return arg;
}

loguearLongitud('Hola'); // OK: string tiene .length
loguearLongitud([1, 2, 3]); // OK: array tiene .length
// loguearLongitud(10); // Error: number no tiene .length" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos' },
      { techId: 'typescript', moduleId: 'poo', text: 'Programación Orientada a Objetos' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
