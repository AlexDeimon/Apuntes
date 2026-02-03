<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Inferencia de Tipos</h1>
      <p class="subtitle">TS sabe que tipo de dato es una variable sin que se lo digas</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">¿Qué es la Inferencia?</h2>
      <p class="section-desc">TypeScript es lo suficientemente inteligente como para deducir (inferir) el tipo de dato de una variable basándose en su valor inicial. Esto significa que no siempre es necesario escribir el tipo explícitamente.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Inferencia Básica</h3>
            <span class="badge success">Automático</span>
          </div>
          <p>Al asignar un valor, TS asume el tipo.</p>
          <CodeBlock language="typescript" code='// TypeScript infiere que es "string"
let mensaje = "Hola Mundo";

// Error: Type "number" is not assignable to type "string"
mensaje = 100;' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Sin Inferencia (Any)</h3>
            <span class="badge danger">Evitar</span>
          </div>
          <p>Si declaras una variable sin asignar valor y sin tipo, TS asume <code>any</code> (evitar esto).</p>
          <CodeBlock language="typescript" code='let variable; // Tipo: any
variable = "Texto";
variable = 10; // No hay error detectado' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Inferencia en Objetos</h2>
      <p class="section-desc">TypeScript analiza la estructura de los objetos que creas para proporcionar autocompletado y seguridad.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>Detección de Estructura</h3>
          <p>TS genera un tipo basado en las propiedades.</p>
          <CodeBlock language="typescript" code='const usuario = {
  nombre: "Diego",
  id: 1,
  habilitado: true
};

// TS sabe que usuario.nombre es string
// Metodos segun el tipo:
usuario.nombre.toUpperCase();' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Validación de Propiedades</h3>
            <span class="badge danger">Estricto</span>
          </div>
          <p>No puedes acceder a propiedades que TS no infirió inicialmente.</p>
          <CodeBlock language="typescript" code='// Error: Property "edad" does not exist on type...
console.log(usuario.edad);' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Arrays y Contexto</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Best Common Type</h3>
          <p>En arrays con múltiples tipos, TS busca un tipo que abarque a todos.</p>
          <CodeBlock language="typescript" code='// Inferencia: (string | number)[]
const lista = [10, "veinte", 30];

lista.push("cuarenta"); // OK
lista.push(true); // Error' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Tipado Contextual</h3>
          </div>
          <p>TS infiere tipos basándose en el contexto, como en callbacks.</p>
          <CodeBlock language="typescript" code='window.onmousedown = function(mouseEvent) {
  // TS sabe que mouseEvent es MouseEvent
  // sin que lo escribamos explícitamente
  console.log(mouseEvent.button);
};' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Inferencia en Funciones</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Tipos de Retorno</h3>
          <p>TS infiere el tipo de retorno de una función basándose en lo que retorna.</p>
          <CodeBlock language="typescript" code='function sumar(a: number, b: number) {
  // TS infiere que retorna number
  return a + b;
}

// Error: Type "string" is not assignable to type "number"
let resultado: number = sumar(1, 2);' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Tipos de Parámetros</h3>
            <span class="badge danger">Estricto</span>
          </div>
          <p>No puedes llamar a una función con parámetros que no coincidan con los tipos inferidos.</p>
          <CodeBlock language="typescript" code='// Error: Argument of type "string" is not assignable to parameter of type "number"' />
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
