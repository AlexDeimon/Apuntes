<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Condicionales</h1>
      <p class="subtitle">Controlando el flujo de ejecución mediante decisiones lógicas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Estructura if - else</h2>
      <p class="section-desc">Es la forma más común de tomar decisiones. Permite ejecutar un bloque de código si se cumple una condición, y otro bloque si no se cumple.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis Básica</h3>
          </div>
          <CodeBlock language="javascript" code="if (condicion) {
  // Código si es true
} else {
  // Código si es false
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Múltiples Condiciones</h3>
          </div>
          <CodeBlock language="javascript" code="if (edad < 13) {
  console.log('Niño');
} else if (edad < 20) {
  console.log('Adolescente');
} else {
  console.log('Adulto');
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Operadores Lógicos</h2>
      <p class="section-desc">Permiten combinar múltiples expresiones lógicas para crear condiciones más complejas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>AND (&&)</h3>
          </div>
          <p>Retorna <code>true</code> solo si <strong>ambas</strong> condiciones son verdaderas.</p>
          <CodeBlock language="javascript" code="if (tieneEdad && tienePermiso) {
  // Solo si ambos son true
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>OR (||)</h3>
          </div>
          <p>Retorna <code>true</code> si <strong>al menos una</strong> de las condiciones es verdadera.</p>
          <CodeBlock language="javascript" code="if (esAdmin || esModerador) {
  // Si cualquiera es true
}" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>NOT (!)</h3>
          </div>
          <p>Invierte el valor lógico (vuelve <code>true</code> lo que es <code>false</code> y viceversa).</p>
          <CodeBlock language="javascript" code="if (!estaLogueado) {
  // Si no está logueado
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">La estructura Switch</h2>
      <p class="section-desc">Ideal cuando tenemos múltiples casos posibles para una misma variable. Es más limpio que
        usar muchos <code>else if</code>.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Sintaxis Switch</h3>
          <span class="badge success">Práctica</span>
        </div>
        <CodeBlock language="javascript" code="switch (dia) {
  case 'Lunes':
    console.log('Inicio de semana');
    break;
  case 'Viernes':
    console.log('Casi fin de semana');
    break;
  default:
    console.log('Día normal');
}" />
        <br>
        <div class="info-box">
          <p><strong>Importante:</strong> La palabra <code>break</code> es vital para evitar que el código siga ejecutando los siguientes casos (fall-through).</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Operador Ternario</h2>
      <p class="section-desc">Una forma abreviada de escribir un <code>if-else</code> corto que devuelve un valor.</p>
      <div class="card info">
        <div class="card-header">
          <h3>condicion ? true : false</h3>
        </div>
        <CodeBlock language="javascript" code="const mensaje = edad >= 18 ? 'Adulto' : 'Menor';
console.log(mensaje);" />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Conceptos Modernos</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Truthy y Falsy</h3>
          </div>
          <p>En JS, ciertos valores no booleanos se evalúan como <code>false</code> (Falsy). El resto son <code>true</code> (Truthy).</p>
          <table class="truthy-table">
            <thead>
              <tr>
                <th>Valor</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr class="falsy-row">
                <td><code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code></td>
                <td>Falsy (false)</td>
              </tr>
              <tr class="falsy-row">
                <td><code>''</code>, <code>""</code>, <code>``</code> (Vacío)</td>
                <td>Falsy (false)</td>
              </tr>
              <tr class="falsy-row">
                <td><code>null</code>, <code>undefined</code>, <code>NaN</code></td>
                <td>Falsy (false)</td>
              </tr>
              <tr class="truthy-row">
                <td><code>{}</code>, <code>[]</code>, <code>' '</code> (Espacio)</td>
                <td>Truthy (true)</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="javascript" code="if (persona) { // Si existe el objeto
  // Código...
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Nullish Coalescing (??)</h3>
            <span class="badge success">ES2020</span>
          </div>
          <p>Retorna el lado derecho si el izquierdo es <code>null</code> o <code>undefined</code>. A diferencia de <code>||</code>, sí acepta <code>0</code> o <code>''</code> como valores válidos.</p>
          <CodeBlock language="javascript" code="const nombre = usuario.nombre ?? 'Invitado';" />
          <p class="mt-3">También es muy común el <strong>Optional Chaining (<code>?.</code>)</strong>:</p>
          <CodeBlock language="javascript" code="const ciudad = usuario?.perfil?.ciudad;" />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
<style scoped>
.truthy-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.truthy-table th,
.truthy-table td {
  padding: 10px;
  border: 1px solid #3c3c3c;
  text-align: left;
}

.truthy-table th {
  background: #2d2d2d;
  color: #fff;
}

.falsy-row td:last-child {
  color: #f56c6c;
  font-weight: bold;
}

.truthy-row td:last-child {
  color: #42b883;
  font-weight: bold;
}
</style>
