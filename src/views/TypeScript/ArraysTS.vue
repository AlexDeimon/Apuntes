<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Arrays y Tuplas</h1>
      <p class="subtitle">Manejando colecciones de datos con tipado estricto en TypeScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Arrays</h2>
      <p class="section-desc">En TypeScript, es fundamental tipar los arrays desde su declaración para evitar que se infieran como <code>never[]</code>, lo cual impediría añadir cualquier elemento después.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis de Corchetes</h3>
          </div>
          <p>La forma más común y recomendada.</p>
          <CodeBlock language="typescript" code="let lenguajes: string[] = ['JS', 'TS', 'Node'];" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis Genérica</h3>
          </div>
          <p>Usa la clase <code>Array</code> con tipos genéricos.</p>
          <CodeBlock language="typescript" code="let precios: Array<number> = [10, 20, 30];" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Múltiples (Union Types)</h2>
      <p class="section-desc">Si un array debe contener más de un tipo de dato, podemos usar paréntesis y el operador de unión <code>|</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Arrays de Unión</h3>
          </div>
          <CodeBlock language="typescript" code="let mixto: (string | number)[] = ['Edad', 25, 'ID', 101];" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Matrices (Multidimensionales)</h2>
      <p class="section-desc">Para arrays dentro de arrays, simplemente añadimos más pares de corchetes.</p>
      <div class="cards-grid">
        <div class="card info">
          <CodeBlock language="typescript" code="const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Tuplas</h2>
      <p class="section-desc">Las tuplas son arrays con una <strong>longitud fija</strong> y tipos predefinidos para cada posición. Son útiles para representar estructuras como coordenadas o pares clave-valor.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Sintaxis de Tupla</h3>
            <span class="badge success">Estructura</span>
          </div>
          <CodeBlock language="typescript" code="let usuario: [number, string] = [1, 'Alex'];
// usuario = ['Alex', 1]; // Error: El orden importa" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Tuplas con Desestructuración</h3>
          </div>
          <CodeBlock language="typescript" code="const [id, nombre] = usuario;
console.log(id); // 1" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">ReadonlyArray</h2>
      <p class="section-desc">Para crear arrays que no puedan ser modificados (inmutables) después de su creación.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Arrays de Solo Lectura</h3>
            <span class="badge danger">Inmutable</span>
          </div>
          <CodeBlock language="typescript" code="const constArray: readonly number[] = [1, 2, 3];
// constArray.push(4); // Error: Propiedad 'push' no existe" />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos en TS' },
      { techId: 'js', moduleId: 'fundamentos', text: 'Arrays en JS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
