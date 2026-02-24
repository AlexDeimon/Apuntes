<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Tipos de Datos</h1>
      <p class="subtitle">La base de la seguridad y el tipado estático en TypeScript.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipado Estático</h2>
      <p class="section-desc">A diferencia de JavaScript, que es de tipado dinámico, TypeScript permite definir tipos de forma estática. Esto significa que podemos especificar qué tipo de datos debe contener una variable, permitiendo detectar errores durante el desarrollo y no en tiempo de ejecución.</p>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Primitivos</h2>
      <p class="section-desc">TypeScript soporta todos los tipos primitivos de JavaScript.</p>
      <div class="cards-grid">
        <div class="card info">
          <h3>string, number, boolean</h3>
          <p>Los tipos básicos para texto, números (incluyendo decimales) y valores lógicos.</p>
          <CodeBlock language="typescript" code='let nombre: string = "Diego";
let edad: number = 25;
let esEstudiante: boolean = true;' />
        </div>
        <div class="card info">
          <h3>null & undefined</h3>
          <p>Representan la ausencia de valor. En TS son tipos por derecho propio.</p>
          <CodeBlock language="typescript" code="let vacio: null = null;
let indefinido: undefined = undefined;" />
        </div>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Especiales</h2>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>any</h3>
            <span class="badge danger">Evitar</span>
          </div>
          <p>Desactiva la comprobación de tipos. Permite asignar cualquier valor. Úsalo solo como último recurso.</p>
          <CodeBlock language="typescript" code='let algo: any = "Texto";
algo = 10; // No hay error' />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>unknown</h3>
            <span class="badge success">Seguro</span>
          </div>
          <p>Similar a <code>any</code>, pero más seguro. No puedes realizar operaciones sobre una variable <code>unknown</code> sin antes verificar su tipo.</p>
          <CodeBlock language="typescript" code='let valor: unknown = "Hola";
// valor.toUpperCase(); // Error!
if (typeof valor === "string") {
  valor.toUpperCase(); // OK!
}' />
        </div>
        <div class="card info">
          <h3>void & never</h3>
          <p><code>void</code> indica que una función no retorna nada. <code>never</code> indica valores que nunca ocurrirán (ej: funciones que lanzan errores).</p>
          <CodeBlock language="typescript" code="function log(): void { console.log('Hi'); }

function error(): never {
  throw new Error('Error fatal');
}" />
        </div>
      </div>
    </section>
    <section class="topic-section">
      <h2 class="section-title typescript">Tipos Complejos</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Interfaces</h3>
          <p>Se definen mediante la palabra reservada <code>interface</code> seguida del nombre de la interfaz y llaves {} los cuales contienen las propiedades y sus tipos.</p>
          <CodeBlock language="typescript" code='interface Persona {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Juan",
  edad: 30,
};' />
        </div>
        <div class="card info">
          <h3>Type Aliases</h3>
          <p>Similar a las interfaces, se definen mediante la palabra reservada <code>type</code> seguida del nombre del type alias y llaves {}. La diferencia es que los type aliases pueden ser usados para definir tipos de datos primitivos, mientras que las interfaces solo pueden ser usadas para definir tipos de datos complejos.</p>
          <CodeBlock language="typescript" code='type Persona = {
  nombre: string;
  edad: number;
}

let persona1: Persona = {
  nombre: "Ana",
  edad: 28,
};' />
        </div>
        <div class="card info">
          <h3>Objetos</h3>
          <p>Se definen mediante el nombre del objeto seguido de llaves {}.</p>
          <CodeBlock language="typescript" code='let persona: {
  nombre: string;
  edad: number
}

let persona1: persona = {
  nombre: "Luis",
  edad: 22,
};' />
        </div>
        <div class="card info">
          <h3>Arrays</h3>
          <p>Se definen mediante el nombre del array seguido de corchetes [].</p>
          <CodeBlock language="typescript" code='let lista: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];' />
        </div>
        <div class="card info">
          <h3>Enums</h3>
          <p>Permiten definir un conjunto de constantes con nombre.</p>
          <CodeBlock language="typescript" code='enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
  Derecha
}

let miDireccion: Direccion = Direccion.Arriba;' />
        </div>
        <div class="card info">
          <h3>Tuplas</h3>
          <p>Permiten expresar un array con un número fijo de elementos cuyos tipos son conocidos.</p>
          <CodeBlock language="typescript" code='let persona: [string, number];
persona = ["Diego", 25];
// persona = [25, "Diego"]; // Error!' />
        </div>
        <div class="card info">
          <h3>Union Types</h3>
          <p>Permiten que una variable pueda ser de más de un tipo.</p>
          <CodeBlock language="typescript" code='let id: string | number;
id = 10;
id = "ABC";' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Aserciones y Narrowing</h2>
      <div class="cards-grid">
        <div class="card info">
          <h3>Type Assertions (as)</h3>
          <p>Cuando tú sabes más sobre el tipo de un valor que TypeScript, puedes "forzar" el tipo.</p>
          <CodeBlock language="typescript" code='// canvas es un HTMLElement por defecto
const canvas = document.getElementById("main") as HTMLCanvasElement;

// Tambien se puede usar: <HTMLCanvasElement>canvas' />
        </div>
        <div class="card info">
          <h3>Narrowing</h3>
          <p>Técnica para reducir un tipo amplio a uno más específico mediante validaciones.</p>
          <CodeBlock language="typescript" code='function split(val: string | number) {
  if (typeof val === "string") {
    return val.split(""); // TS sabe que es string
  }
  return val.toFixed(2); // TS sabe que es number
}' />
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

