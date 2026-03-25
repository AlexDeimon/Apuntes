<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Enums</h1>
      <p class="subtitle">Definiendo conjuntos de constantes con nombre para un código más legible y seguro.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">¿Qué son los Enums?</h2>
      <p class="section-desc">Los <strong>enum</strong> son un tipo de dato en TypeScript. Esta característica no es una extensión de JavaScript, sino una peculiaridad propia de TypeScript. Se encargan de juntar en un solo tipo de dato un conjunto finito de constantes.</p>
      <p class="section-desc">Similar a un Array, al definir un enum, cada constante se le asigna por defecto un índice desde 0 y se incrementa automáticamente para el resto de las constantes.</p>
      <div class="card info">
        <div class="card-header">
          <h3>Sintaxis Básica</h3>
        </div>
        <CodeBlock language="typescript" code="enum Direccion {
  Norte,
  Sur,
  Este,
  Oeste
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos de Enums</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Numéricos</h3>
          </div>
          <p>Por defecto empiezan en 0, pero puedes asignar un valor inicial y el resto se autoincrementará.</p>
          <CodeBlock language="typescript" code="enum CodigoRespuesta {
  OK = 200,
  NotFound = 404,
  Error = 500
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Strings</h3>
          </div>
          <p>Obligan a asignar un valor a cada miembro. Son más legibles durante la depuración.</p>
          <CodeBlock language="typescript" code="enum Logs {
  Error = 'ERROR',
  Warning = 'WARN',
  Info = 'INFO'
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Mapeo Inverso</h2>
      <p class="section-desc">Solo disponible en enums <strong>numéricos</strong>. Permite obtener el nombre a partir del valor.</p>
      <CodeBlock language="typescript" code="enum Estado { Activo = 1 }
const nombre = Estado[1]; // 'Activo'
const valor  = Estado.Activo; // 1" />
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Optimización: Const Enums</h2>
      <p class="section-desc">Para mejorar el rendimiento, los <code>const enums</code> se eliminan durante la compilación y sus valores se insertan directamente (inline) donde se usan.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Eficiencia</h3>
          <span class="badge success">Recomendado</span>
        </div>
        <CodeBlock language="typescript" code="const enum Tallas {
  Small,
  Medium,
  Large
}
const miTalla = Tallas.Medium; // Se compila como: var miTalla = 1;" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos en TS' },
      { techId: 'typescript', moduleId: 'arrays', text: 'Arrays & Tuplas' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
