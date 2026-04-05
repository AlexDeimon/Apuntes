<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Spread & Rest</h1>
      <p class="subtitle">Dominando la sintaxis de los tres puntos (...) para manipular datos con elegancia.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">¿Qué son?</h2>
      <p class="section-desc">Aunque usan la misma sintaxis (<code>...</code>), su comportamiento depende de dónde se utilicen. El <strong>Spread</strong> expande elementos, mientras que el <strong>Rest</strong> los agrupa.</p>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">1. Spread Operator (Expansión)</h2>
      <p class="section-desc">Se usa para expandir los elementos de un iterable (Array, Objeto, String).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>En Arrays</h3>
          </div>
          <p>Ideal para copiar o combinar arreglos sin mutar los originales.</p>
          <CodeBlock language="javascript" code="const a = [1, 2];
const b = [3, 4];

const combinado = [...a, ...b]; // [1, 2, 3, 4]
const copia = [...a]; // Clon real

// Se puede usar para agregar un array a otro array
copia.push(...b); // [1, 2, 3, 4]" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>En Objetos</h3>
          </div>
          <p>Permite clonar objetos y sobrescribir propiedades de forma sencilla.</p>
          <CodeBlock language="javascript" code="const user = { name: 'Diego', age: 25 };
const update = { ...user, age: 26, city: 'CDMX' };

// { name: 'Diego', age: 26, city: 'CDMX' }" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>En Funciones</h3>
          </div>
          <p>Pasa los elementos de un array como argumentos individuales.</p>
          <CodeBlock language="javascript" code="const precios = [10, 50, 20];
const max = Math.max(...precios); // 50" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">2. Rest Operator (Agrupación)</h2>
      <p class="section-desc">Se usa para recolectar múltiples elementos en un solo lugar (variable o parámetro).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Parámetros Rest</h3>
          </div>
          <p>Permite que una función reciba un número indefinido de argumentos como un array.</p>
          <CodeBlock language="javascript" code="function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

sumar(1, 2, 3, 4); // 10" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>En Desestructuración</h3>
          </div>
          <p>Extrae ciertos valores y agrupa el sobrante en un nuevo contenedor.</p>
          <CodeBlock language="javascript" code="const [primero, ...elResto] = [1, 2, 3, 4];
// primero = 1, elResto = [2, 3, 4]

const { admin, ...userData } = { admin: true, id: 1, mail: 'a@b.com' };
// userData = { id: 1, mail: 'a@b.com' }" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'arrays', text: 'Arrays en JS' },
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos JS' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
