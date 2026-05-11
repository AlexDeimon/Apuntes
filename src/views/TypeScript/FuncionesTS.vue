<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Funciones</h1>
      <p class="subtitle">Añadiendo tipado fuerte a la lógica de negocio.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipado de Parámetros y Retorno</h2>
      <p class="section-desc">En TypeScript, podemos especificar el tipo de cada parámetro y el tipo de dato que la función devolverá después de su ejecución.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis Estándar</h3>
          </div>
          <CodeBlock language="typescript" code='function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Inferencia de Retorno</h3>
          </div>
          <p>TS a menudo puede adivinar qué devuelve una función basándose en la sentencia <code>return</code>.</p>
          <CodeBlock language="typescript" code="// Forma 1: Explicita
function sumar(a: number, b: number): number {
  return a + b;
}

// Forma 2: Implicita
function sumar(a: number, b: number) {
  return a + b; // TS infiere que retorna un number
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Parámetros Opcionales y por Defecto</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Opcionales (?)</h3>
          </div>
          <p>Usa <code>?</code> para marcar parámetros que no siempre se enviarán.</p>
          <CodeBlock language="typescript" code='function log(msg: string, user?: string) {
  console.log(msg, user || "Anónimo");
}' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Por Defecto</h3>
          </div>
          <p>Asigna un valor inicial. TS inferirá el tipo automáticamente.</p>
          <CodeBlock language="typescript" code="function f(x = 10) {
  // x es inferido como number
}" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Rest Parameters</h3>
          </div>
          <p>Para recibir un número indefinido de argumentos como un array.</p>
          <CodeBlock language="typescript" code="function total(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}" />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Any (Implícito)</h3>
          </div>
          <p>Si no se le asigna el tipo de dato explícitamente, TypeScript intentará asignarle <code>any</code>. Sin embargo, bajo el modo estricto actual (<code>strict: true</code> o <code>noImplicitAny: true</code>), esto <strong>lanzará un error de compilación</strong> indicando que el parámetro tiene un tipo <code>any</code> implícito.</p>
          <CodeBlock language="typescript" code="function saludar(nombre) { // Error: Parameter 'nombre' implicitly has an 'any' type.
  console.log(`Hola ${nombre}`);
}

saludar(123);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Objetos y Callbacks</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Objetos como Parámetros</h3>
          </div>
          <p>Podemos tipar el objeto directamente o usar desestructuración.</p>
          <CodeBlock language="typescript" :code="`// Any implícito
function saludar({ nombre, edad }) {
  console.log(\`hola \${nombre} tienes \${edad} años\`)
}
// No infiere tipos, pueden enviarse datos incorrectos
saludar({ nombre: 26, edad: 'Diego' })

// Tipado incorrecto
function saludar2({ nombre: string, edad: number }) {
  // Aquí se están REENOMBRANDO las propiedades (sintaxis JS)
  // string y number ahora son alias para name y age
  console.log(\`hola \${nombre}\`) // Error: name no existe
}

// Tipado correcto:
// 1ra forma
function saludar3({ nombre, edad }: { nombre: string; edad: number }) {
  // Se tipea el objeto desestructurado
  console.log(\`hola \${nombre} tienes \${edad} años\`)
}
saludar3({ nombre: 'Diego', edad: 26 }) // Correcto

// 2da forma
function saludar4(persona: { nombre: string; edad: number }) {
  // Se tipea el objeto completo
  const { nombre, edad } = persona
  console.log(\`hola \${nombre} tienes \${edad} años\`)
}
saludar4({ nombre: 'Diego', edad: 26 }) // Correcto`" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Typing Callbacks</h3>
          </div>
          <p>Define la firma de la función que se recibe como argumento.</p>
          <CodeBlock language="typescript" code="// tipado incorrecto:
function procesar(fn: Function) { // Function es el equivalente a Any
  fn(42);
}

// tipado correcto:
function procesar(fn: (n: number) => number) { // se tipean los parámetros y el retorno
  fn(42);
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Funciones Flecha (Arrow)</h2>
      <p class="section-desc">Existen dos formas principales de tipar las arrow functions de manera explícita.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Forma 1: En línea</h3>
          </div>
          <CodeBlock language="typescript" code="const sumar = (a: number, b: number): number => a + b;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Forma 2: Tipo de variables</h3>
          </div>
          <CodeBlock language="typescript" code="const sumar: (a: number, b: number) => number = (a, b) => a + b;" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Inferencia Contextual</h2>
      <p class="section-desc">TypeScript es inteligente: si una función aparece en un lugar donde TS sabe qué tipo de función debería ser, tipará los parámetros automáticamente.</p>
      <div class="card info">
        <CodeBlock language="typescript" code='const lenguajes = ["Python", "JavaScript", "TypeScript"];

// TS sabe que "s" es un string porque viene de un array de strings
lenguajes.forEach((s) => {
  console.log(s.toUpperCase());
});' />
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
