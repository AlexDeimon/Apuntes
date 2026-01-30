<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Strings en JavaScript</h1>
      <p class="subtitle">Manipulación y propiedades de cadenas de texto</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Introducción</h2>
      <p class="section-desc">Un <strong>String</strong> (cadena de caracteres) es una secuencia de caracteres usada para representar texto. En JavaScript, los strings son inmutables, lo que significa que una vez creados, no pueden ser modificados. Los métodos que "modifican" un string en realidad devuelven uno nuevo.</p>
    </section>
    <section class="topic-section">
      <h2 class="section-title js">Creación de Strings</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Comillas Simples y Dobles</h3>
          <p>Son funcionalmente idénticas en JS.</p>
          <CodeBlock language="javascript" code="const str1 = 'Hola Mundo';
const str2 = &quot;Hola Mundo&quot;;" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Template Strings</h3>
            <span class="badge success">Moderno</span>
          </div>
          <p>Usan comillas invertidas (<code>`</code>). Permiten interpolación de variables y múltiples líneas. Se usa el simbolo <code>$</code> junto con <code>{}</code> para insertar variables.</p>
          <CodeBlock language="javascript" code="const nombre = 'Alex';
const saludo = `Hola ${nombre},
bienvenido.`;" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Propiedades</h2>
      <div class="card info">
        <h3>.length</h3>
        <p>Devuelve la longitud de la cadena (número de caracteres).</p>
        <CodeBlock language="javascript" code="const texto = 'JavaScript';
console.log(texto.length); // 10" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Métodos Comunes</h2>
      <p class="section-desc">JavaScript ofrece muchos métodos integrados para trabajar con texto. <strong>Recuerda: ninguno modifica la cadena original.</strong></p>
      <div class="cards-grid">
        <div class="card">
          <h3>Transformación</h3>
          <p>Cambiar mayúsculas y minúsculas.</p>
          <CodeBlock language="javascript" code="const str = 'Hola';
console.log(str.toUpperCase()); // 'HOLA'
console.log(str.toLowerCase()); // 'hola'" />
        </div>
        <div class="card">
          <h3>Búsqueda</h3>
          <p>Encontrar subcadenas.</p>
          <CodeBlock language="javascript" code="const frase = 'Hola Mundo';
console.log(frase.includes('Mundo')); // true
console.log(frase.indexOf('a')); // 3
console.log(frase.startsWith('H')); // true
console.log(frase.endsWith('o')); // true" />
        </div>
        <div class="card">
          <h3>Extracción</h3>
          <p>Obtener partes de una cadena.</p>
          <CodeBlock language="javascript" code="const txt = 'JavaScript';
// substring(inicio, fin)
console.log(txt.substring(0, 4)); // 'Java'
console.log(txt.substring(4));    // 'Script'
// slice(inicio, fin)
console.log(txt.slice(-6)); // 'Script'
console.log(txt.slice(4, 10)); // 'Script'" />
        </div>
        <div class="card">
          <h3>Reemplazo y Limpieza</h3>
          <p>Modificar y limpiar contenido.</p>
          <CodeBlock language="javascript" code="const sucio = '  Hola  ';
console.log(sucio.trim()); // 'Hola'

const err = 'JavaScrip';
console.log(err.replace('p', 'pt'));
// 'JavaScript'" />
        </div>
        <div class="card">
          <h3>Dividir</h3>
          <p>Convierte un string en un array.</p>
          <CodeBlock language="javascript" code="const csv = 'rojo,verde,azul';
const colores = csv.split(',');
// ['rojo', 'verde', 'azul']

const str = 'Hola';
const arr = str.split('');
// ['H', 'o', 'l', 'a']" />
        </div>
        <div class="card">
          <h3>Repetir</h3>
          <p>Repite un string un número de veces.</p>
          <CodeBlock language="javascript" code="const str = 'Hola';
console.log(str.repeat(3)); // 'HolaHolaHola'" />
        </div>
        <div class="card">
          <h3>Rellenar</h3>
          <p>Rellena un string con caracteres hasta alcanzar una longitud determinada.</p>
          <CodeBlock language="javascript" code="const str = '5';
console.log(str.padStart(3, '0')); // '005'
console.log(str.padEnd(3, '0')); // '500'" />
        </div>
        <div class="card">
          <h3>Concatenación</h3>
          <p>Une dos o más strings.</p>
          <CodeBlock language="javascript" code="const str1 = 'Hola';
const str2 = 'Mundo';
console.log(str1 + str2); // 'HolaMundo'
console.log(str1.concat(str2)); // 'HolaMundo'" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<style scoped>
/* Utiliza estilos globales de main.css */
</style>
