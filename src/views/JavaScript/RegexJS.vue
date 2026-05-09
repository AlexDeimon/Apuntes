<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Expresiones Regulares</h1>
      <p class="subtitle">Patrones de búsqueda avanzados para validar, extraer y reemplazar texto.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">¿Qué son?</h2>
      <p class="section-desc">Las expresiones regulares son patrones utilizados para encontrar combinaciones de caracteres dentro de cadenas (strings). En JavaScript, son objetos nativos del lenguaje.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis Literal</h3>
          </div>
          <p>La forma más común y eficiente si el patrón es fijo.</p>
          <CodeBlock language="javascript" code="const regex = /patron/;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Constructor RegExp</h3>
          </div>
          <p>Útil cuando el patrón cambia dinámicamente o viene de una variable.</p>
          <CodeBlock language="javascript" code="const regex = new RegExp('patron');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Banderas (Flags)</h2>
      <p class="section-desc">Modifican el comportamiento general de la búsqueda. Se colocan al final del patrón: <code>/patron/ig</code>.</p>
      <div class="preview-container">
        <div class="preview-content">
          <ul class="def-list">
            <li><span class="def-term">g (Global):</span> Busca todas las coincidencias, no se detiene en la primera.</li>
            <li><span class="def-term">i (Ignore Case):</span> No distingue entre mayúsculas y minúsculas (ej: "A" === "a").</li>
            <li><span class="def-term">m (Multiline):</span> Trata los caracteres de inicio (<code>^</code>) y fin (<code>$</code>) para trabajar línea por línea.</li>
            <li><span class="def-term">u (Unicode):</span> Permite trabajar con caracteres Unicode.</li>
            <li><span class="def-term">y (Sticky):</span> Busca solo en la posición indicada por la propiedad <code>lastIndex</code>.</li>
            <li><span class="def-term">s (Dotall):</span> Permite que el metacaracter <code>.</code> coincida también con los saltos de línea.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Metacaracteres y Cuantificadores</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Metacaracteres (Clases)</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">.</span>: Cualquier carácter (excepto salto de línea).</li>
            <li><span class="def-term">\d</span>: Un dígito (0-9).</li>
            <li><span class="def-term">\D</span>: No es un dígito.</li>
            <li><span class="def-term">\w</span>: Carácter alfanumérico (A-Z, 0-9, _).</li>
            <li><span class="def-term">\W</span>: No es un carácter alfanumérico.</li>
            <li><span class="def-term">\s</span>: Espacio en blanco.</li>
            <li><span class="def-term">\S</span>: No es un espacio en blanco.</li>
            <li><span class="def-term">\n</span>: Salto de línea.</li>
            <li><span class="def-term">\t</span>: Tabulación.</li>
            <li><span class="def-term">\r</span>: Retorno de carro.</li>
            <li><span class="def-term">\f</span>: Salto de página.</li>
            <li><span class="def-term">\v</span>: Tabulación vertical.</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Cuantificadores</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">X+</span>: X debe aparecer 1 o más veces.</li>
            <li><span class="def-term">X*</span>: X debe aparecer 0 o más veces.</li>
            <li><span class="def-term">X?</span>: X debe aparecer 0 o 1 vez (opcional).</li>
            <li><span class="def-term">X{n}</span>: X debe aparecer exactamente n veces.</li>
            <li><span class="def-term">X{n,}</span>: X debe aparecer n o más veces.</li>
            <li><span class="def-term">X{n,m}</span>: X debe aparecer entre n y m veces.</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Aserciones y Agrupación</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">^</span>: Inicio del string.</li>
            <li><span class="def-term">$</span>: Fin del string.</li>
            <li><span class="def-term">\b</span>: Límite de palabra.</li>
            <li><span class="def-term">\B</span>: No es un límite de palabra.</li>
            <li><span class="def-term">[abc]</span>: Conjunto (coincide con a, b o c).</li>
            <li><span class="def-term">(abc)</span>: Grupo de captura.</li>
            <li><span class="def-term">abc|def</span>: Alternancia.</li>
            <li><span class="def-term">(?:abc)</span>: Grupo sin captura.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Métodos de Evaluación</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>RegExp.test()</h3>
          </div>
          <p>Devuelve <code>true</code> o <code>false</code> si existe coincidencia. Excelente para validaciones simples.</p>
          <CodeBlock language="javascript" code="const isEmail = /@/.test('usuario@mail.com'); // true" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>String.match()</h3>
          </div>
          <p>Devuelve un array con las coincidencias. Si usa la bandera <code>g</code>, devuelve todas.</p>
          <CodeBlock language="javascript" code="const vocales = 'Murcielago'.match(/[aeiou]/ig);
// ['u', 'i', 'e', 'a', 'o']" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>String.replace()</h3>
          </div>
          <p>Busca y reemplaza usando regex. Vital usar <code>g</code> para reemplazar todas.</p>
          <CodeBlock language="javascript" code="const texto = 'Hola mundo, adios mundo';
const nuevo = texto.replace(/mundo/g, 'amigo');
// 'Hola amigo, adios amigo'" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'strings', text: 'Métodos de Strings JS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
