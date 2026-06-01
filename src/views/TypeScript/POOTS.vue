<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Programación Orientada a Objetos</h1>
      <p class="subtitle">Clases, interfaces y herencia para construir arquitecturas sólidas y escalables.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Clases</h2>
      <p class="section-desc">TypeScript añade tipos y modificadores a las clases de ES6, permitiendo una definición más rigurosa de los objetos.</p>
      <div class="card info">
        <div class="card-header">
          <h3>Sintaxis y Propiedades de Parámetros</h3>
        </div>
        <p>Puedes declarar propiedades directamente en el constructor (Shorthand), ahorrando líneas de código.</p>
        <CodeBlock language="typescript" code="class Usuario {
  // Shorthand: declara y asigna automáticamente
  constructor(
    public nombre: string,
    private id: number,
    protected email: string
  ) {}

  presentar() {
    return `Hola, soy ${this.nombre}`;
  }
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Modificadores de Acceso</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>public / private</h3>
          </div>
          <p><code>public</code> (por defecto) permite acceso total. <code>private</code> solo permite acceso dentro de la misma clase.</p>
          <CodeBlock language="typescript" code="private clave: string; // Oculto fuera de la clase" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>protected / readonly</h3>
          </div>
          <p><code>protected</code> permite acceso en subclases. <code>readonly</code> impide la modificación tras la asignación inicial.</p>
          <CodeBlock language="typescript" code="readonly version = '1.0'; // Inmutable" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Herencia y Clases Abstractas</h2>
      <p class="section-desc">Extiende funcionalidades de clases existentes o define moldes incompletos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>extends</h3>
          </div>
          <CodeBlock language="typescript" code="class Empleado extends Usuario {
  constructor(nombre: string, public sueldo: number) {
    super(nombre, Date.now(), ''); // Llama al padre
  }
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Abstract Classes</h3>
            <span class="badge success">Patrón</span>
          </div>
          <p>No se pueden instanciar directamente; sirven como base para otras clases.</p>
          <CodeBlock language="typescript" code="abstract class Animal {
  abstract emitirSonido(): void; // Obligatorio en hijos
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Interfaces vs Clases</h2>
      <p class="section-desc">Las interfaces definen el "qué" (contrato), las clases definen el "cómo" (implementación).</p>
      <div class="card info">
        <div class="card-header">
          <h3>implements</h3>
        </div>
        <CodeBlock language="typescript" code="interface IProcesable {
  procesar(): boolean;
}

class Tarea implements IProcesable {
  procesar() { return true; }
}" />
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Type Alias Avanzados</h2>
      <p class="section-desc">Características avanzadas de los Type Alias para construir tipos flexibles.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Intersection Types</h3>
          </div>
          <p>Combina múltiples tipos en uno solo usando <code>&amp;</code>.</p>
          <CodeBlock language="typescript" code="type Base = { id: number };
type Detalle = { nombre: string };
type Completo = Base & Detalle;

const obj: Completo = { id: 1, nombre: 'Ana' };" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Template Types & Type Indexing</h3>
          </div>
          <p>Usa <i>template literals</i> y accede a tipos mediante índices.</p>
          <CodeBlock language="typescript" code="type Talla = 'S' | 'M' | 'L';
type Variante = `Talla-${Talla}`; // 'Talla-S' | 'Talla-M' | 'Talla-L'

type API = { user: { id: number } };
type UserId = API['user']['id']; // number" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Type from value (typeof)</h3>
          </div>
          <p>Genera un tipo a partir de un valor u objeto existente.</p>
          <CodeBlock language="typescript" code="const config = { theme: 'dark', port: 3000 };
type Config = typeof config;" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Interfaces Avanzadas</h2>
      <p class="section-desc">Las interfaces soportan anidamiento, extensión y firmas de funciones.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Interfaces Anidadas y Extends</h3>
          </div>
          <CodeBlock language="typescript" code="interface Direccion {
  ciudad: string;
}
interface Persona extends Direccion {
  nombre: string;
  contacto?: string; // Propiedad opcional
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Firmas de Funciones</h3>
          </div>
          <p>Se pueden tipar las funciones dentro de la interfaz.</p>
          <CodeBlock language="typescript" code="interface Calculadora {
  (a: number, b: number): number; // Firma de función
  sumar: (a: number, b: number) => number; // Método
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'inferencia', text: 'Inferencia de Tipos' },
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos' },
      { techId: 'typescript', moduleId: 'enums', text: 'Enums en TS' },
      { techId: 'typescript', moduleId: 'genericos', text: 'Genéricos en TS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
