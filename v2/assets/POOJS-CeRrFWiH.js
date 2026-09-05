import{C as o}from"./CodeBlock-CASvhCfR.js";import{R as t}from"./ReferenceSection-toiUOXWo.js";import{d as l,c as d,a as r,b as e,e as n,f as a,o as i}from"./index-B57m_bmv.js";const c={class:"module-content"},u={class:"topic-section"},p={class:"cards-grid"},m={class:"card info"},b={class:"card recommended"},v={class:"topic-section"},f={class:"cards-grid"},g={class:"card info"},j={class:"topic-section"},h={class:"cards-grid"},y={class:"card info"},S={class:"card recommended"},O={class:"card info"},z=l({__name:"POOJS",setup(P){return(C,s)=>(i(),d("div",c,[s[18]||(s[18]=r('<div class="header-section"><h1 class="main-title js">Programación Orientada a Objetos</h1><p class="subtitle">Paradigma basado en clases, propiedades y métodos para modelar entidades del mundo real.</p></div><section class="topic-section"><h2 class="section-title js">Fundamentos de POO</h2><p class="section-desc">La POO actualiza la programación estructurada organizando el código en &quot;Objetos&quot;. Aunque bajo el capó JavaScript usa prototipos, a partir de ES6 ofrece una sintaxis de <code>class</code> mucho más clara.</p><div class="cards-grid"><div class="card recommended"><div class="card-header"><h3>Pilares de la POO</h3></div><ul class="def-list"><li><span class="def-term">Abstracción: </span>Ocultar la complejidad interna.</li><li><span class="def-term">Encapsulamiento: </span>Proteger el estado interno del objeto.</li><li><span class="def-term">Herencia: </span>Clases que heredan de otras clases.</li><li><span class="def-term">Polimorfismo: </span>Diferentes clases pueden responder al mismo método de formas distintas.</li></ul></div></div></section><hr class="divider">',3)),e("section",u,[s[4]||(s[4]=e("h2",{class:"section-title js"},"Clases, Propiedades y Métodos",-1)),e("div",p,[e("div",m,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis de Clase")],-1)),s[1]||(s[1]=e("p",null,[a("Se declaran con "),e("code",null,"class"),a(", empiezan en Mayúscula y usan un "),e("code",null,"constructor"),a(" para inicializar las propiedades (usando "),e("code",null,"this"),a(").")],-1)),n(o,{language:"javascript",code:`class Animal {
  // Constructor: Se ejecuta al instanciar (new)
  constructor(especie, nombre) {
    this.especie = especie; // Propiedad
    this.nombre = nombre;
  }

  // Método
  hacerSonido() {
    console.log(\`\${this.nombre} hace un sonido.\`);
  }
}`})]),e("div",b,[s[2]||(s[2]=e("div",{class:"card-header"},[e("h3",null,"Herencia (extends y super)")],-1)),s[3]||(s[3]=e("p",null,[a("Usamos "),e("code",null,"extends"),a(" para heredar propiedades y métodos de una clase padre, y "),e("code",null,"super()"),a(" para llamar a su constructor.")],-1)),n(o,{language:"javascript",code:`class Perro extends Animal {
  constructor(nombre, raza) {
    // super() llama al constructor de 'Animal'
    super('Perro', nombre);
    this.raza = raza;
  }

  // Polimorfismo: Sobrescribir el método
  hacerSonido() {
    console.log(\`\${this.nombre} ladra: ¡Guau!\`);
  }
}`})])])]),s[19]||(s[19]=e("hr",{class:"divider"},null,-1)),e("section",v,[s[6]||(s[6]=e("h2",{class:"section-title js"},"Objetos",-1)),s[7]||(s[7]=e("p",{class:"section-desc"},"Los objetos son estructuras de datos que representan instancias de clases. Todos los objetos tienen propiedades o atributos y comportamientos y acciones representados por pares de clave: valor.",-1)),e("div",f,[e("div",g,[s[5]||(s[5]=r('<div class="card-header"><h3>Crear Objetos</h3></div><p>Los objetos se pueden crear de varias maneras:</p><ul class="def-list"><li><span class="def-term">Literal: </span>La forma más común y sencilla de crear objetos es utilizando la sintaxis de objeto literal, que consiste en encerrar las propiedades y métodos del objeto entre llaves <code>{}</code>, declarandolo como una variable o constante.</li><li><span class="def-term">Tipo Object: </span>Creando un tipo de dato Object usando new. Se crea un objeto vacio y sus propiedades se van definiendo dinámicamente.</li><li><span class="def-term">Clases: </span>Se crea una clase con la palabra reservada <code>class</code> y se llama para crear un objeto con la palabra reservada <code>new</code>.</li><li><span class="def-term">Funciones Constructoras: </span>Son funciones que se utilizan para crear objetos. Se declara con la palabra reservada <code>function</code> y se llama con la palabra reservada <code>new</code>.</li></ul>',3)),n(o,{language:"javascript",code:`// Objeto literal
const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Programador',
  saludar() {
    console.log(\`Hola, soy \${this.nombre}\`);
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
  console.log(\`Hola, soy \${this.nombre} y trabajo en \${this.empresa}\`);
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
    console.log(\`Hola, soy \${this.nombre}\`);
  };
}

const persona3 = new Persona('Maria', 25);
persona3.saludar(); // Hola, soy Maria
`})])])]),s[20]||(s[20]=e("hr",{class:"divider"},null,-1)),e("section",j,[s[14]||(s[14]=e("h2",{class:"section-title js"},"Encapsulamiento Moderno",-1)),s[15]||(s[15]=e("p",{class:"section-desc"},"Cómo controlar el acceso a las propiedades internas de una clase.",-1)),e("div",h,[e("div",y,[s[8]||(s[8]=e("div",{class:"card-header"},[e("h3",null,"Campos Privados (#)")],-1)),s[9]||(s[9]=e("p",null,[a("Añadiendo "),e("code",null,"#"),a(" al inicio de una propiedad o método, se vuelve inaccesible desde fuera de la clase.")],-1)),n(o,{language:"javascript",code:`class CuentaBancaria {
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
// console.log(cuenta.#saldo); // ❌ Error de Sintaxis`})]),e("div",S,[s[10]||(s[10]=e("div",{class:"card-header"},[e("h3",null,"Getters y Setters")],-1)),s[11]||(s[11]=e("p",null,[a("Son métodos especiales que se comportan como si fueran propiedades. Permiten añadir lógica al leer ("),e("code",null,"get"),a(") o escribir ("),e("code",null,"set"),a(") valores.")],-1)),n(o,{language:"javascript",code:`class Usuario {
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
console.log(user.nombre); // ANA (Usa el getter)`})])]),s[16]||(s[16]=e("br",null,null,-1)),s[17]||(s[17]=e("br",null,null,-1)),e("div",O,[s[12]||(s[12]=e("div",{class:"card-header"},[e("h3",null,"Métodos Estáticos (static)")],-1)),s[13]||(s[13]=e("p",null,"Los métodos y propiedades estáticas pertenecen a la clase en sí, no a las instancias (los objetos creados). Se usan comúnmente para funciones de utilidad.",-1)),n(o,{language:"javascript",code:`class Matematica {
  static sumar(a, b) {
    return a + b;
  }
}

// Se llama directamente desde la Clase, no requiere 'new'
console.log(Matematica.sumar(5, 3)); // 8`})])]),s[21]||(s[21]=e("hr",{class:"divider"},null,-1)),n(t,{references:[{techId:"typescript",moduleId:"poo",text:"POO tipada en TypeScript (Avanzado)"}]})]))}});export{z as default};
