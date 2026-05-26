<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title js">Programación Orientada a Objetos</h1>
      <p class="subtitle">Paradigma basado en clases, propiedades y métodos para modelar entidades del mundo real.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title js">Fundamentos de POO</h2>
      <p class="section-desc">La POO actualiza la programación estructurada organizando el código en "Objetos". Aunque bajo el capó JavaScript usa prototipos, a partir de ES6 ofrece una sintaxis de <code>class</code> mucho más clara.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Pilares de la POO</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Abstracción: </span>Ocultar la complejidad interna.</li>
            <li><span class="def-term">Encapsulamiento: </span>Proteger el estado interno del objeto.</li>
            <li><span class="def-term">Herencia: </span>Clases que heredan de otras clases.</li>
            <li><span class="def-term">Polimorfismo: </span>Diferentes clases pueden responder al mismo método de formas distintas.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Clases, Propiedades y Métodos</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis de Clase</h3>
          </div>
          <p>Se declaran con <code>class</code>, empiezan en Mayúscula y usan un <code>constructor</code> para inicializar las propiedades (usando <code>this</code>).</p>
          <CodeBlock language="javascript" code="class Animal {
  // Constructor: Se ejecuta al instanciar (new)
  constructor(especie, nombre) {
    this.especie = especie; // Propiedad
    this.nombre = nombre;
  }

  // Método
  hacerSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}" />
        </div>

        <div class="card recommended">
          <div class="card-header">
            <h3>Herencia (extends y super)</h3>
          </div>
          <p>Usamos <code>extends</code> para heredar propiedades y métodos de una clase padre, y <code>super()</code> para llamar a su constructor.</p>
          <CodeBlock language="javascript" code="class Perro extends Animal {
  constructor(nombre, raza) {
    // super() llama al constructor de 'Animal'
    super('Perro', nombre);
    this.raza = raza;
  }

  // Polimorfismo: Sobrescribir el método
  hacerSonido() {
    console.log(`${this.nombre} ladra: ¡Guau!`);
  }
}" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Objetos</h2>
      <p class="section-desc">Los objetos son estructuras de datos que representan instancias de clases. Todos los objetos tienen propiedades o atributos y comportamientos y acciones representados por pares de clave: valor.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Crear Objetos</h3>
          </div>
          <p>Los objetos se pueden crear de varias maneras:</p>
          <ul class="def-list">
            <li><span class="def-term">Literal: </span>La forma más común y sencilla de crear objetos es utilizando la sintaxis de objeto literal, que consiste en encerrar las propiedades y métodos del objeto entre llaves <code>{}</code>, declarandolo como una variable o constante.</li>
            <li><span class="def-term">Tipo Object: </span>Creando un tipo de dato Object usando new. Se crea un objeto vacio y sus propiedades se van definiendo dinámicamente.</li>
            <li><span class="def-term">Clases: </span>Se crea una clase con la palabra reservada <code>class</code> y se llama para crear un objeto con la palabra reservada <code>new</code>.</li>
            <li><span class="def-term">Funciones Constructoras: </span>Son funciones que se utilizan para crear objetos. Se declara con la palabra reservada <code>function</code> y se llama con la palabra reservada <code>new</code>.</li>
          </ul>
          <CodeBlock language="javascript" code="// Objeto literal
const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Programador',
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // Hola, soy Juan

// Objeto tipo Object
const persona2 = new Object();
persona2.nombre = 'Camilo';
persona2.edad = 20;
persona2.profesion = 'Estudiante';
persona2.empresa = 'Google';
persona2.saludar = function() {
  console.log(`Hola, soy ${this.nombre} y trabajo en ${this.empresa}`);
};

persona2.saludar(); // Hola, soy Camilo y trabajo en Google

// Instanciar un objeto mediante una clase
const perro = new Animal('Perro', 'Firulais');
perro.hacerSonido(); // Firulais hace un sonido.

// Funciones constructoras
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
  };
}

const persona3 = new Persona('Maria', 25);
persona3.saludar(); // Hola, soy Maria
" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title js">Encapsulamiento Moderno</h2>
      <p class="section-desc">Cómo controlar el acceso a las propiedades internas de una clase.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Campos Privados (#)</h3>
          </div>
          <p>Añadiendo <code>#</code> al inicio de una propiedad o método, se vuelve inaccesible desde fuera de la clase.</p>
          <CodeBlock language="javascript" code="class CuentaBancaria {
  #saldo = 0; // Propiedad privada

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria();
cuenta.depositar(100);
// console.log(cuenta.#saldo); // ❌ Error de Sintaxis" />
        </div>

        <div class="card recommended">
          <div class="card-header">
            <h3>Getters y Setters</h3>
          </div>
          <p>Son métodos especiales que se comportan como si fueran propiedades. Permiten añadir lógica al leer (<code>get</code>) o escribir (<code>set</code>) valores.</p>
          <CodeBlock language="javascript" code="class Usuario {
  constructor(nombre) {
    this._nombre = nombre; // Convención para 'interno'
  }

  get nombre() {
    return this._nombre.toUpperCase();
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 2) {
      this._nombre = nuevoNombre;
    }
  }
}

const user = new Usuario('Juan');
user.nombre = 'Ana'; // Usa el setter
console.log(user.nombre); // ANA (Usa el getter)" />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>Métodos Estáticos (static)</h3>
        </div>
        <p>Los métodos y propiedades estáticas pertenecen a la clase en sí, no a las instancias (los objetos creados). Se usan comúnmente para funciones de utilidad.</p>
        <CodeBlock language="javascript" code="class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

// Se llama directamente desde la Clase, no requiere 'new'
console.log(Matematica.sumar(5, 3)); // 8" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'poo', text: 'POO tipada en TypeScript (Avanzado)' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
