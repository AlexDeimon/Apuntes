<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Bucles e Iteración</h1>
      <p class="subtitle">Automatizando tareas repetitivas mediante ciclos inteligentes.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Tipos de Bucles</h2>
      <p class="section-desc">Los bucles nos permiten ejecutar un bloque de código varias veces. Se dividen principalmente en dos categorías:</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Determinados</h3>
          </div>
          <p>Sabemos de antemano cuántas veces se ejecutará (ej. <code>for</code>).</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Indeterminados</h3>
          </div>
          <p>La ejecución depende de una condición que puede cambiar en cualquier momento (ej. <code>while</code>).</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">While y Do While</h2>
      <p class="section-desc">Ideales para situaciones donde no sabemos cuántas iteraciones necesitamos hasta que se cumpla una condición.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>While</h3>
          </div>
          <p>Evalúa la condición <strong>antes</strong> de cada iteración.</p>
          <CodeBlock language="javascript" code="let i = 0;
while (i < 5) { // Mientras i sea menor a 5
  console.log(i);
  i++;
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Do While</h3>
            <span class="badge success">Garantizado</span>
          </div>
          <p>Ejecuta el bloque <strong>al menos una vez</strong> antes de evaluar la condición.</p>
          <CodeBlock language="javascript" code="let i = 0;
do { // Ejecuta el bloque al menos una vez
  console.log(i);
  i++; // Incrementa i
} while (i < 5); // Mientras i sea menor a 5" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Bucle For (Tradicional)</h2>
      <p class="section-desc">La estructura clásica para iterar un número conocido de veces.</p>
      <div class="card info">
        <div class="card-header">
          <h3>Estructura de Tres Partes</h3>
        </div>
        <ul class="def-list">
          <li><span class="def-term">Inicialización:</span> Donde se crea la variable de control.</li>
          <li><span class="def-term">Condición:</span> Se evalúa antes de cada ciclo.</li>
          <li><span class="def-term">Actualización:</span> Se ejecuta al final de cada ciclo.</li>
        </ul>
        <CodeBlock language="javascript" code="for (let i = 0; i < 10; i++) { // for (inicialización; condición; actualización)
  console.log(`Paso número: ${i}`);
}" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Iteradores Modernos (ES6+)</h2>
      <p class="section-desc">Formas mucho más legibles y seguras de recorrer colecciones y objetos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>For of</h3>
            <span class="badge info">Arrays</span>
          </div>
          <p>Itera sobre los <strong>valores</strong> de un objeto iterable (Array, Map, Set).</p>
          <CodeBlock language="javascript" code="const frutas = ['🍎', '🍌', '🥝'];
for (const fruta of frutas) { // por cada fruta en frutas
  console.log(fruta);
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>For in</h3>
            <span class="badge info">Objetos</span>
          </div>
          <p>Itera sobre las <strong>propiedades (claves)</strong> de un objeto.</p>
          <CodeBlock language="javascript" code="const auto = { marca: 'Tesla', año: 2024 };
for (const clave in auto) { // por cada clave en auto
  console.log(`${clave}: ${auto[clave]}`); // clave: valor
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Control de Flujo</h2>
      <p class="section-desc">Palabras clave para alterar el comportamiento normal de un bucle.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Break</h3>
            <span class="badge danger">Salir</span>
          </div>
          <p>Termina el bucle inmediatamente y salta a la siguiente instrucción fuera de él.</p>
          <CodeBlock language="javascript" code="for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Sale del bucle en 5
  console.log(i);
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Continue</h3>
            <span class="badge success">Saltar</span>
          </div>
          <p>Salta la iteración actual y continúa con la siguiente vuelta del bucle.</p>
          <CodeBlock language="javascript" code="for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Salta el 2
  console.log(i);
}" />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'condicionales', text: 'Condicionales en JS' },
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
