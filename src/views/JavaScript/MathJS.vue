<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Objeto Math</h1>
      <p class="subtitle">Operaciones y constantes matemáticas en JavaScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Definición</h2>
      <p class="section-desc"><code>Math</code> es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas.</p>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Propiedades (Constantes)</h2>
      <div class="cards-grid">
        <div class="card">
          <h3>Math.PI</h3>
          <p>Representa la relación entre la longitud de la circunferencia de un círculo y su diámetro, aproximadamente 3.14159.</p>
          <CodeBlock language="javascript" code="console.log(Math.PI); // 3.141592653589793" />
        </div>
        <div class="card">
          <h3>Math.E</h3>
          <p>La constante de Euler y la base de los logaritmos naturales, aproximadamente 2.718.</p>
          <CodeBlock language="javascript" code="console.log(Math.E); // 2.718281828459045" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Métodos de Redondeo</h2>
      <div class="cards-grid">
        <div class="card">
          <h3>Math.round()</h3>
          <p>Retorna el valor de un número redondeado al entero más cercano.</p>
          <CodeBlock language="javascript" code="Math.round(4.7); // 5
Math.round(4.4); // 4" />
        </div>
        <div class="card">
          <h3>Math.ceil()</h3>
          <p>Redondea un número hacia arriba al siguiente entero.</p>
          <CodeBlock language="javascript" code="Math.ceil(4.1); // 5" />
        </div>
        <div class="card">
          <h3>Math.floor()</h3>
          <p>Redondea un número hacia abajo al entero anterior.</p>
          <CodeBlock language="javascript" code="Math.floor(4.9); // 4" />
        </div>
        <div class="card">
          <h3>Math.trunc()</h3>
          <span class="badge info">ES6</span>
          <p>Elimina los dígitos decimales (trunca el número).</p>
          <CodeBlock language="javascript" code="Math.trunc(4.9); // 4
Math.trunc(-4.9); // -4" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Números Aleatorios</h2>
      <div class="card recommended">
        <div class="card-header">
          <h3>Math.random()</h3>
          <span class="badge success">Muy usado</span>
        </div>
        <p>Retorna un número pseudo-aleatorio entre 0 (inclusive) y 1 (exclusive).</p>
        <CodeBlock language="javascript" code="// Numero entre 0 y 1
const random = Math.random();

// Numero entero entre 1 y 10
const entreUnoYDiez = Math.floor(Math.random() * 10) + 1;" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Otras Funciones Útiles</h2>
      <div class="cards-grid">
        <div class="card">
          <h3>Math.pow() y Math.sqrt()</h3>
          <p>Potencia y raíz cuadrada.</p>
          <CodeBlock language="javascript" code="Math.pow(2, 3); // 8 (Igual a 2 ** 3)
Math.sqrt(64);  // 8" />
        </div>
        <div class="card">
          <h3>Math.abs()</h3>
          <p>Retorna el valor absoluto de un número.</p>
          <CodeBlock language="javascript" code="Math.abs(-5); // 5" />
        </div>
        <div class="card">
          <h3>Math.min() y Math.max()</h3>
          <p>Encuentran el valor más pequeño o más grande en una lista de argumentos.</p>
          <CodeBlock language="javascript" code="Math.min(0, 150, 30, 20, -8);  // -8
Math.max(0, 150, 30, 20, -8);  // 150" />
        </div>
        <div class="card">
          <h3>Math.sign()</h3>
          <p>Retorna el signo de un número, indicando si es positivo, negativo o cero.</p>
          <CodeBlock language="javascript" code="Math.sign(5);   // 1
Math.sign(-5);  // -1
Math.sign(0);   // 0" />
        </div>
      </div>
    </section>
    </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
