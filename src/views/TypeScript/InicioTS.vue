<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">¿Qué es TypeScript?</h1>
      <p class="subtitle">JavaScript con sintaxis para tipos estáticos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Introducción</h2>
      <p class="section-desc">TypeScript es un <strong>superset</strong> de JavaScript desarrollado por Microsoft. Un superset es un lenguaje que contiene todas las características de otro lenguaje y más. Por lo tanto, todo código JavaScript válido es también código TypeScript válido, pero TS amplia JS con una nueva sintaxis que añade características adicionales, principalmente un sistema de tipos estáticos opcional.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Tipado Estático</h3>
          </div>
          <p>Permite definir qué tipo de datos pueden contener las variables (string, number, boolean, etc.) en tiempo de desarrollo, previniendo errores comunes antes de ejecutar el código.</p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Compilación</h3>
          </div>
          <p>Los navegadores no entienden TypeScript. El código debe ser <strong>compilado</strong> a JavaScript estándar para funcionar.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">¿Por qué usarlo?</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Popularidad</h3>
          </div>
          <p>A lo largo de los últimos años Javascript ha crecido mucho y se ha convertido en el camino a seguir para escribir aplicaciones multiplataforma. En los últimos años la popularidad de TypeScript se ha disparado y se perfila como uno de los lenguajes de programación con más futuro.</p>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Sencillo de aprender</h3>
          </div>
          <p>TypeScript está basado en JavaScript, por lo que si se tienen las bases, aprenderlo será muy facil.</p>
        </div>
      </div>
      <p class="section-desc">Ventajas principales frente a JavaScript vainilla.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <h3>Fiabilidad</h3>
          <p>Detecta errores en tiempo de compilación/escritura en lugar de en tiempo de ejecución (runtime). "Si compila, probablemente funcione".</p>
        </div>
        <div class="card recommended">
          <h3>Escalabilidad</h3>
          <p>Facilita trabajar en proyectos grandes y con equipos numerosos gracias a las interfaces y tipos explícitos que documentan el código automáticamente.</p>
        </div>
        <div class="card recommended">
          <h3>Tooling Moderno</h3>
          <p>Mejora el autocompletado y la refactorización en editores como VS Code.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Instalación y Uso</h2>
      <p class="section-desc">Herramientas necesarias para empezar.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Instalación Global</h3>
          </div>
          <p>Se instala mediante NPM (Node Package Manager).</p>
          <CodeBlock language="bash" code='npm install -g typescript' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Compilación</h3>
          </div>
          <p>Convierte un archivo <code>.ts</code> a <code>.js</code>.</p>
          <CodeBlock language="bash" code='tsc archivo.ts' />
          <p style="margin-top: 1rem; font-size: 0.9rem; color: #aaa;">Esto generará un archivo <code>archivo.js</code> que puede ser interpretado por el navegador o Node.js.</p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Ejemplo Comparativo</h2>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>JavaScript</h3>
            <span class="badge danger">Sin Tipos</span>
          </div>
          <CodeBlock language="javascript" code='function sumar(a, b) {
  return a + b;
}

// Esto no da error al escribir, pero concatena
console.log(sumar("5", 5)); // "55"' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>TypeScript</h3>
            <span class="badge success">Tipado</span>
          </div>
          <CodeBlock language="typescript" code='function sumar(a: number, b: number): number {
  return a + b;
}

// Error en el editor: Argument of type "string" is not assignable to parameter of type "number"
console.log(sumar("5", 5));' />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'js', moduleId: 'fundamentos', text: 'Fundamentos de JavaScript' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
