<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Arrays</h1>
      <p class="subtitle">Estructuras potentes para modelar y manipular colecciones de datos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Fundamentos</h2>
      <ul class="list">
        <li>Son estructuras que permiten almacenar varios datos y agruparlos.</li>
        <li>Se declaran usando corchetes <code>[]</code>.</li>
        <li>Cada uno de sus elementos puede ser identificado por su índice, el cual comienza desde 0.</li>
        <li>Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas.</li>
        <li>Pueden declararse vacíos o con un contenido ya establecido.</li>
        <li>Pueden añadirse o eliminarse elementos en cualquier momento.</li>
        <li>Se pueden mezclar tipos de datos, <strong>pero no es recomendable</strong>.</li>
      </ul>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Declaración</h3>
          </div>
          <CodeBlock language="javascript" code="const frutas = ['🍎', '🍌', '🍒'];
console.log(frutas[0]); // '🍎'" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Propiedad Length</h3>
          </div>
          <p>Indica la cantidad total de elementos en el array.</p>
          <CodeBlock language="javascript" code="console.log(frutas.length); // 3" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Métodos Clásicos</h2>
      <p class="section-desc"></p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>is Array</h3>
          </div>
          <p>Método que permite verificar si un array es un array.</p>
          <CodeBlock language="javascript" code="Array.isArray(frutas); // true" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>indexOf y lastIndexOf</h3>
          </div>
          <p>Métodos que permiten obtener el índice de un elemento en un array desde el inicio o desde el final.</p>
          <CodeBlock language="javascript" code="frutas.indexOf('🍎'); // 0
frutas.lastIndexOf('🍎'); // 2" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>reverse</h3>
          </div>
          <p>Método que permite invertir el orden de los elementos en un array.</p>
          <CodeBlock language="javascript" code="frutas.reverse(); // ['🍒', '🍌', '🍎']" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>join</h3>
          </div>
          <p>Método que permite unir los elementos de un array en un string.</p>
          <CodeBlock language="javascript" code="frutas.join(','); // '🍎,🍌,🍒'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>slice</h3>
          </div>
          <p>Método que permite obtener una porción de un array.</p>
          <CodeBlock language="javascript" code="frutas.slice(1, 2); // ['🍌']" />
        </div>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title js">Métodos Mutables</h2>
      <p class="section-desc">Estos métodos modifican el array original.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Push & Pop</h3>
          </div>
          <p>Añade o quita elementos al <strong>final</strong>.</p>
          <CodeBlock language="javascript" code="frutas.push('🍇'); // ['🍎', '🍌', '🍒', '🍇']
frutas.pop(); // ['🍎', '🍌', '🍒']" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Unshift & Shift</h3>
          </div>
          <p>Añade o quita elementos al <strong>inicio</strong>.</p>
          <CodeBlock language="javascript" code="frutas.unshift('🍓'); // ['🍓', '🍎', '🍌', '🍒']
frutas.shift(); // ['🍎', '🍌', '🍒']" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Splice</h3>
          </div>
          <p>Añade, elimina o reemplaza elementos en cualquier posición.</p>
          <CodeBlock language="javascript" code='// splice(inicio, eliminarCount, item1, item2...)
frutas.splice(1, 1, "🥝"); // Reemplaza 1 en pos 1' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>sort</h3>
          </div>
          <p>Método que permite ordenar los elementos de un array.</p>
          <CodeBlock language="javascript" code="frutas.sort(); // ['🍎', '🍌', '🍒']" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>for Each</h3>
          </div>
          <p>Método que permite ejecutar una función para cada elemento de un array.</p>
          <CodeBlock language="javascript" code="frutas.forEach(fruta => console.log(fruta));" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>some</h3>
          </div>
          <p>Método que permite verificar si algún elemento de un array cumple una condición.</p>
          <CodeBlock language="javascript" code="frutas.some(fruta => fruta === '🍎'); // true" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>every</h3>
          </div>
          <p>Método que permite verificar si todos los elementos de un array cumplen una condición.</p>
          <CodeBlock language="javascript" code="frutas.every(fruta => fruta === '🍎'); // false" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Iteradores e Inmutabilidad</h2>
      <p class="section-desc">La forma moderna de trabajar con arrays sin modificar los datos originales.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Map</h3>
          </div>
          <p>Crea un nuevo array aplicando una función a cada elemento.</p>
          <CodeBlock language="javascript" code="const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2); // [2, 4, 6]" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Filter</h3>
          </div>
          <p>Crea un nuevo array con los elementos que cumplan una condición.</p>
          <CodeBlock language="javascript" code="const pares = numeros.filter(n => n % 2 === 0); // [2]" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Reduce</h3>
          </div>
          <p>Reduce todos los elementos a un único valor (suma, objeto, etc).</p>
          <CodeBlock language="javascript" code="const total = numeros.reduce((acc, n) => acc + n, 0); // 6" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>from</h3>
          </div>
          <p>Método que permite crear un array a partir de un iterable.</p>
          <CodeBlock language="javascript" code="const array = Array.from('hola'); // ['h', 'o', 'l', 'a']" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Novedades y Buenas Prácticas</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Métodos "To" (ES2023)</h3>
            <span class="badge success">Nativo</span>
          </div>
          <p>Versiones inmutables de métodos clásicos.</p>
          <CodeBlock language="javascript" code="const ordenado = array.toSorted();
const invertido = array.toReversed();" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Spread & Destructuring</h3>
          </div>
          <p>Permite crear una copia de un array o extraer elementos de un array.</p>
          <CodeBlock language="javascript" code="const copia = [...frutas];
const [primera, segunda] = frutas; // ['🍎', '🍌']" />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'bucles', text: 'Bucles en JS' },
      { techId: 'typescript', moduleId: 'arrays', text: 'Arrays en TypeScript' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>

<style scoped>
/* Reutilizando main.css */
</style>
