<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Fundamentos JavaScript</h1>
      <p class="subtitle">La base de la interactividad en la web</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title">Conectar HTML y JavaScript</h2>
      <p class="section-desc"> Existen principalmente dos formas de vincular JavaScript a un documento HTML. La ubicación del script es crucial para el rendimiento de carga.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Script Externo</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>Se vincula un archivo <code>.js</code> separado. Es la mejor práctica para mantener el código organizado y reutilizable. Se recomienda ubicarlo al final del <code>&lt;body&gt;</code> para no bloquear la carga visual.</p>
          <CodeBlock language="html" code='<body>
  <!-- Contenido de la página -->

  <script src="app.js"></script>
</body>' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>Script Interno</h3>
            <span class="badge danger">No Recomendado</span>
          </div>
          <p>El código se escribe directamente dentro de una etiqueta <code>&lt;script&gt;</code> en el HTML. Dificulta el mantenimiento y la cache del navegador.</p>
          <CodeBlock language="html" code='<script>
  console.log("Hola Mundo");
</script>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Sintaxis Básica</h2>
      <p class="section-desc">Reglas fundamentales para escribir código JavaScript correctamente.</p>
      <div class="cards-grid">
        <div class="card">
          <h3>Case Sensitive</h3>
          <p>JavaScript distingue mayúsculas de minúsculas. <code>miVariable</code> no es lo mismo que <code>mivariable</code>.</p>
          <CodeBlock language="javascript" code='let nombre = "Alex";
let Nombre = "Diego";

console.log(nombre); // Alex
console.log(Nombre); // Diego' />
        </div>
        <div class="card">
          <h3>Comentarios</h3>
          <p>Es vital documentar el código. JS ignora estas líneas al ejecutarse.</p>
          <CodeBlock language="javascript" code='// Comentario de una línea

/*
  Comentario de
  múltiples líneas
*/' />
        </div>
      </div>
      <p class="section-desc">Las sentencias finalizan con ; No es obligatorio pero es recomendable.</p>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Variables, Constantes y Scope</h2>
      <p class="section-desc">Una variable es un espacio reservado en memoria para almacenar un dato que podrá cambiar durante la ejecución del programa. En JavaScript moderno (ES6+), utilizamos <code>let</code> para declarar variables. Evita usar <code>var</code> ya que es una forma antigua de declarar variables.</p>
      <p class="section-desc">Las variables se pueden declarar, inicializar y modificar.</p>
      <p class="section-desc">Una constante es un espacio reservado en memoria para almacenar un dato que no cambiará durante la ejecución del programa. Se declaran con la palabra reservada <code>const</code>. Estas solo admiten la declaración e inicialización en la misma sentencia.</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>let</h3>
          </div>
          <p>Declara una variable reasignable con scope local. Úsala cuando sepas que el valor cambiará.</p>
          <CodeBlock language="javascript" code='let contador = 0;
contador = 1; // Correcto' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>const</h3>
            <span class="badge success">Más usado</span>
          </div>
          <p>Declara una constante de solo lectura. Debe inicializarse al declarar. Es la opción por defecto más segura.</p>
          <CodeBlock language="javascript" code='const PI = 3.1416;
PI = 3.15; // Error!' />
        </div>
        <div class="card warning">
          <div class="card-header">
            <h3>var</h3>
            <span class="badge danger">Evitar</span>
          </div>
          <p>Forma antigua de declarar variables. Tiene alcance global y permite hoisting, lo que causa errores sutiles.</p>
          <CodeBlock language="javascript" code='var nombre = "Juan";' />
        </div>
      </div>
      <p class="section-desc">El scope define el alcance de una variable. En JavaScript, existen dos tipos de scope: global y local.</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>Scope Global</h3>
          </div>
          <p>Las variables declaradas fuera de cualquier bloque de código son globales y son accesibles desde cualquier parte del programa.</p>
          <CodeBlock language="javascript" code='var nombre = "Juan";
console.log(nombre); // Juan' />
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Scope Local</h3>
          </div>
          <p>Las variables declaradas dentro de un bloque de código son locales y solo son accesibles dentro de ese bloque.</p>
          <CodeBlock language="javascript" code='function miFuncion() {
  var nombre = "Juan";
  console.log(nombre); // Juan
}
console.log(nombre); // Error!' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Tipos de Datos</h2>
      <p class="section-desc">JavaScript es un lenguaje de tipado dinámico. Los datos se dividen en Primitivos y Compuestos.</p>
      <div class="cards-grid">
        <div class="card">
          <h3>Primitivos</h3>
          <ul class="def-list">
            <li><span class="def-term">string</span>: Texto ("Hola")</li>
            <li><span class="def-term">number</span>: Números (10, 3.5)</li>
            <li><span class="def-term">boolean</span>: Lógica (true, false)</li>
            <li><span class="def-term">undefined</span>: Valor no asignado</li>
            <li><span class="def-term">null</span>: Ausencia intencional de valor</li>
            <li><span class="def-term">symbol</span>: Identificador único</li>
          </ul>
        </div>
        <div class="card">
          <h3>Compuestos (Objetos)</h3>
          <ul class="def-list">
            <li><span class="def-term">Object</span>: Colección clave-valor</li>
            <li><span class="def-term">Array</span>: Lista ordenada</li>
            <li><span class="def-term">Function</span>: Bloque ejecutable</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Operador typeof</h3>
          </div>
        <p>Devuelve una cadena indicando el tipo del operando.</p>
        <CodeBlock language="javascript" code='typeof "Hola"    // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof {}        // "object"
typeof []        // "object"
typeof null      // "object"' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title">Operadores</h2>
      <p class="section-desc">Símbolos que permiten realizar operaciones con valores.</p>
      <div class="cards-grid">
        <div class="card">
          <h3>Aritméticos</h3>
          <p>Operaciones matemáticas básicas.</p>
          <CodeBlock language="javascript" code='let numero = 10;
numero + 5; // 15
numero - 3; // 7
numero * 2; // 20
numero / 4; // 2.5
numero % 3; // 1
numero ** 2; // 100' />
        </div>
        <div class="card">
          <h3>Incremento/Decremento</h3>
          <p>Modifican el valor de una variable.</p>
          <CodeBlock language="javascript" code='let numero = 10;
numero++ // 11
numero-- // 10
++numero // 11
--numero // 10' />
        </div>
        <div class="card">
          <h3>Asignación</h3>
          <p>Asignan valor a una variable, posiblemente realizando una operación.</p>
          <CodeBlock language="javascript" code='let numero = 10;
numero += 5; // 15
numero -= 3; // 7
numero *= 2; // 20
numero /= 4; // 2.5
numero %= 3; // 1
numero **= 2; // 100' />
        </div>
        <div class="card">
          <h3>Comparación</h3>
          <p>Comparan dos valores y devuelven un booleano.</p>
          <CodeBlock language="javascript" code='let a = 2, b = 2, c = 3, d = "2";
a == b; // true
a === b; // true
a == c; // false
a === c; // false
a != b; // false
a !== b; // false
a != c; // true
a !== c; // true
a > c; // false
a < c; // true
a >= c; // false
a <= c; // true
a >= d; // true
a <= d; // true' />
        </div>
        <div class="card">
          <h3>Lógicos</h3>
          <p>Combinan condiciones booleanas.</p>
          <CodeBlock language="javascript" code='&&  AND (Y)
||  OR (O)
!   NOT (Negación)

let a = true, b = false;
a && b; // false
a || b; // true
!a; // false' />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
