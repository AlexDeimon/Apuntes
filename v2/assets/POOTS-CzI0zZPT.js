import{C as r}from"./CodeBlock-m9f372yJ.js";import{R as a}from"./ReferenceSection-CV5JXX5w.js";import{d as i,c as t,b as e,e as o,f as s,o as l}from"./index-BOkGEZN1.js";const d={class:"module-content"},c={class:"topic-section"},u={class:"cards-grid"},p={class:"card info"},m={class:"card info"},b={class:"card warning"},g={class:"card info"},v={class:"topic-section"},f={class:"cards-grid"},y={class:"card info"},C={class:"card info"},x={class:"card recommended"},S={class:"topic-section"},T={class:"cards-grid"},w={class:"card info"},E={class:"card info"},I={class:"topic-section"},P={class:"cards-grid"},A={class:"card info"},j={class:"card recommended"},U={class:"card recommended"},h={class:"topic-section"},z={class:"cards-grid"},O={class:"card info"},L={class:"card warning"},q={class:"topic-section"},D={class:"cards-grid"},M={class:"card info"},V={class:"card info"},F={class:"card info"},B={class:"card info"},N={class:"card recommended"},k={class:"topic-section"},K={class:"cards-grid"},$={class:"card info"},G={class:"card warning"},H={class:"card recommended"},Y=i({__name:"POOTS",setup(J){return(R,n)=>(l(),t("div",d,[n[58]||(n[58]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Programación Orientada a Objetos"),e("p",{class:"subtitle"},"Clases, interfaces y herencia para construir arquitecturas sólidas y escalables.")],-1)),e("section",c,[n[8]||(n[8]=e("h2",{class:"section-title typescript"},"Clases",-1)),n[9]||(n[9]=e("p",{class:"section-desc"},[s("TypeScript añade tipos y modificadores a las clases de ES6, permitiendo una definición más rigurosa de los objetos. Cada campo debe declararse con su tipo y, con "),e("code",null,"strictPropertyInitialization"),s(" (incluido en "),e("code",null,"strict"),s("), debe inicializarse o asignarse en el constructor.")],-1)),e("div",u,[e("div",p,[n[0]||(n[0]=e("div",{class:"card-header"},[e("h3",null,"Campos y constructor")],-1)),n[1]||(n[1]=e("p",null,"Los campos se declaran en el cuerpo de la clase. Si tienen valor inicial, no hace falta asignarlos en el constructor.",-1)),o(r,{language:"typescript",code:`class Usuario {
  nombre: string;     // Debe asignarse en el constructor
  activo = true;      // Valor inicial: se infiere boolean

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  presentar(): string {
    return \`Hola, soy \${this.nombre}\`;
  }
}

const u = new Usuario('Ana');`})]),e("div",m,[n[2]||(n[2]=e("div",{class:"card-header"},[e("h3",null,"Propiedades de parámetros (Shorthand)")],-1)),n[3]||(n[3]=e("p",null,[s("Un modificador de acceso o "),e("code",null,"readonly"),s(" delante de un parámetro del constructor declara y asigna la propiedad automáticamente, ahorrando líneas de código.")],-1)),o(r,{language:"typescript",code:`class Usuario {
  constructor(
    public nombre: string,
    private id: number,
    protected email: string,
    readonly creado = new Date()
  ) {}

  presentar() {
    return \`Hola, soy \${this.nombre}\`;
  }
}`})]),e("div",b,[n[4]||(n[4]=e("div",{class:"card-header"},[e("h3",null,"Aserción de asignación definitiva (!)"),e("span",{class:"badge danger"},"Con cuidado")],-1)),n[5]||(n[5]=e("p",null,[s("Si un campo se inicializa fuera del constructor (por ejemplo en un método "),e("code",null,"init"),s(" o por un framework), puedes silenciar el error con "),e("code",null,"!"),s(". Es una promesa al compilador: si no la cumples, fallará en tiempo de ejecución.")],-1)),o(r,{language:"typescript",code:`class Servicio {
  private cache!: Map<string, number>; // '!' = se asignará antes de usarse

  init() {
    this.cache = new Map();
  }

  leer(clave: string) {
    return this.cache.get(clave);
  }
}`})]),e("div",g,[n[6]||(n[6]=e("div",{class:"card-header"},[e("h3",null,"Tipado estructural")],-1)),n[7]||(n[7]=e("p",null,[s("TypeScript compara las clases por su "),e("strong",null,"forma"),s(", no por su nombre. Cualquier objeto con los mismos miembros públicos es compatible con el tipo de la clase.")],-1)),o(r,{language:"typescript",code:`class Punto {
  x = 0;
  y = 0;
}

function dibujar(p: Punto) {
  console.log(p.x, p.y);
}

// OK: un objeto literal con la misma forma es compatible
dibujar({ x: 10, y: 20 });`})])])]),n[59]||(n[59]=e("hr",{class:"divider"},null,-1)),e("section",v,[n[16]||(n[16]=e("h2",{class:"section-title typescript"},"Modificadores de Acceso",-1)),n[17]||(n[17]=e("p",{class:"section-desc"},[s("Controlan quién puede ver y modificar cada miembro de la clase. Son verificaciones de "),e("strong",null,"compilación"),s(": desaparecen al transpilar a JavaScript.")],-1)),e("div",f,[e("div",y,[n[10]||(n[10]=e("div",{class:"card-header"},[e("h3",null,"public / private / protected")],-1)),n[11]||(n[11]=e("p",null,[e("code",null,"public"),s(" (por defecto) permite acceso total. "),e("code",null,"private"),s(" solo permite acceso dentro de la misma clase. "),e("code",null,"protected"),s(" permite acceso en la clase y sus subclases, pero no desde fuera.")],-1)),o(r,{language:"typescript",code:`class Cuenta {
  public titular: string;
  private saldo = 0;
  protected tipo = 'ahorro';

  constructor(titular: string) {
    this.titular = titular;
  }

  depositar(monto: number) {
    this.saldo += monto; // OK: dentro de la clase
  }
}

const c = new Cuenta('Ana');
c.titular;  // OK
// c.saldo; // Error: 'saldo' es privado
// c.tipo;  // Error: 'tipo' es protegido`})]),e("div",C,[n[12]||(n[12]=e("div",{class:"card-header"},[e("h3",null,"readonly")],-1)),n[13]||(n[13]=e("p",null,[e("code",null,"readonly"),s(" impide reasignar una propiedad tras su inicialización (en la declaración o en el constructor).")],-1)),o(r,{language:"typescript",code:`class Config {
  readonly version = '1.0';
  readonly entorno: string;

  constructor(entorno: string) {
    this.entorno = entorno; // OK: dentro del constructor
  }
}

const cfg = new Config('prod');
// cfg.version = '2.0'; // Error: propiedad de solo lectura`})]),e("div",x,[n[14]||(n[14]=e("div",{class:"card-header"},[e("h3",null,"private vs #privado (ECMAScript)"),e("span",{class:"badge success"},"Importante")],-1)),n[15]||(n[15]=e("p",null,[e("code",null,"private"),s(" de TypeScript solo existe en compilación: en JavaScript el campo sigue siendo accesible y TS incluso permite la notación de corchetes. Los campos "),e("code",null,"#"),s(" de ECMAScript son privados "),e("strong",null,"reales"),s(" en tiempo de ejecución.")],-1)),o(r,{language:"typescript",code:`class Secreto {
  private a = 1; // Privacidad solo en compilación
  #b = 2;        // Privacidad real (JavaScript nativo)
}

const s = new Secreto();
// s.a;     // Error de compilación
console.log(s['a']); // 1 -> TS permite la notación de corchetes
// s.#b;    // Error: nunca accesible desde fuera`})])])]),n[60]||(n[60]=e("hr",{class:"divider"},null,-1)),e("section",S,[n[22]||(n[22]=e("h2",{class:"section-title typescript"},"Accessors y Miembros Estáticos",-1)),n[23]||(n[23]=e("p",{class:"section-desc"},[s("Los "),e("code",null,"get"),s("/"),e("code",null,"set"),s(" exponen lógica como si fueran propiedades, y "),e("code",null,"static"),s(" asocia miembros a la clase en lugar de a cada instancia.")],-1)),e("div",T,[e("div",w,[n[18]||(n[18]=e("div",{class:"card-header"},[e("h3",null,"Getters y Setters")],-1)),n[19]||(n[19]=e("p",null,[s("Permiten validar o calcular valores al leer/escribir. Un "),e("code",null,"get"),s(" sin "),e("code",null,"set"),s(" es automáticamente de solo lectura.")],-1)),o(r,{language:"typescript",code:`class Temperatura {
  #celsius = 0;

  get celsius(): number {
    return this.#celsius;
  }

  set celsius(valor: number) {
    if (valor < -273.15) throw new Error('Valor imposible');
    this.#celsius = valor;
  }

  // Solo getter: propiedad calculada de solo lectura
  get fahrenheit(): number {
    return this.#celsius * 9 / 5 + 32;
  }
}

const t = new Temperatura();
t.celsius = 25;
console.log(t.fahrenheit); // 77
// t.fahrenheit = 100;     // Error: no tiene setter`})]),e("div",E,[n[20]||(n[20]=e("div",{class:"card-header"},[e("h3",null,"static")],-1)),n[21]||(n[21]=e("p",null,[s("Los miembros "),e("code",null,"static"),s(" se acceden desde la clase, no desde las instancias. Útiles para contadores, constantes y métodos de fábrica.")],-1)),o(r,{language:"typescript",code:`class Contador {
  static total = 0;

  static incrementar(): number {
    return ++Contador.total;
  }

  constructor() {
    Contador.incrementar();
  }
}

new Contador();
new Contador();
console.log(Contador.total); // 2`})])])]),n[61]||(n[61]=e("hr",{class:"divider"},null,-1)),e("section",I,[n[30]||(n[30]=e("h2",{class:"section-title typescript"},"Herencia y Clases Abstractas",-1)),n[31]||(n[31]=e("p",{class:"section-desc"},"Extiende funcionalidades de clases existentes o define moldes incompletos que obliguen a las subclases a implementar ciertos miembros.",-1)),e("div",P,[e("div",A,[n[24]||(n[24]=e("div",{class:"card-header"},[e("h3",null,"extends y super")],-1)),n[25]||(n[25]=e("p",null,[s("La subclase hereda los miembros de la base. Si define constructor, debe llamar a "),e("code",null,"super(...)"),s(),e("strong",null,"antes"),s(" de usar "),e("code",null,"this"),s(".")],-1)),o(r,{language:"typescript",code:`class Persona {
  constructor(public nombre: string, protected edad: number) {}

  presentar() {
    return \`Hola, soy \${this.nombre}\`;
  }
}

class Empleado extends Persona {
  constructor(nombre: string, edad: number, public sueldo: number) {
    super(nombre, edad); // Obligatorio antes de usar 'this'
  }
}`})]),e("div",j,[n[26]||(n[26]=e("div",{class:"card-header"},[e("h3",null,"override"),e("span",{class:"badge success"},"Buena práctica")],-1)),n[27]||(n[27]=e("p",null,[s("Marca explícitamente que un método sobrescribe al de la clase base. Si el método base cambia de nombre o desaparece, TypeScript avisa. Actívalo globalmente con "),e("code",null,"noImplicitOverride"),s(".")],-1)),o(r,{language:"typescript",code:`class Gerente extends Empleado {
  override presentar() {
    return \`\${super.presentar()} (Gerente)\`;
  }

  // override presentarse() {}
  // Error: no existe 'presentarse' en la clase base
}`})]),e("div",U,[n[28]||(n[28]=e("div",{class:"card-header"},[e("h3",null,"Abstract Classes"),e("span",{class:"badge success"},"Patrón")],-1)),n[29]||(n[29]=e("p",null,"No se pueden instanciar directamente; sirven como base. Pueden mezclar miembros abstractos (sin implementación, obligatorios en las hijas) con miembros concretos.",-1)),o(r,{language:"typescript",code:`abstract class Figura {
  abstract area(): number; // Obligatorio en las hijas

  describir() {            // Miembro concreto reutilizable
    return \`Área: \${this.area().toFixed(2)}\`;
  }
}

class Circulo extends Figura {
  constructor(private radio: number) {
    super();
  }
  area() {
    return Math.PI * this.radio ** 2;
  }
}

// new Figura(); // Error: no se puede instanciar una clase abstracta
console.log(new Circulo(2).describir());`})])])]),n[62]||(n[62]=e("hr",{class:"divider"},null,-1)),e("section",h,[n[36]||(n[36]=e("h2",{class:"section-title typescript"},"Interfaces vs Clases",-1)),n[37]||(n[37]=e("p",{class:"section-desc"},'Las interfaces definen el "qué" (contrato) y desaparecen en tiempo de ejecución; las clases definen el "cómo" (implementación) y sí existen como valores en JavaScript.',-1)),e("div",z,[e("div",O,[n[32]||(n[32]=e("div",{class:"card-header"},[e("h3",null,"implements (uno o varios contratos)")],-1)),n[33]||(n[33]=e("p",null,[s("Una clase puede implementar múltiples interfaces, pero solo puede extender "),e("strong",null,"una"),s(" clase.")],-1)),o(r,{language:"typescript",code:`interface Volador {
  volar(): void;
}
interface Nadador {
  nadar(): void;
}

class Pato implements Volador, Nadador {
  volar() { console.log('Volando...'); }
  nadar() { console.log('Nadando...'); }
}`})]),e("div",L,[n[34]||(n[34]=e("div",{class:"card-header"},[e("h3",null,"implements solo comprueba"),e("span",{class:"badge danger"},"Trampa común")],-1)),n[35]||(n[35]=e("p",null,[e("code",null,"implements"),s(" verifica que la clase cumpla el contrato, pero "),e("strong",null,"no cambia"),s(" su tipo ni infiere los tipos de los parámetros. Debes tiparlos tú.")],-1)),o(r,{language:"typescript",code:`interface Comprobable {
  verificar(nombre: string): boolean;
}

class Validador implements Comprobable {
  // Los parámetros NO se infieren desde la interfaz:
  // sin ': string' sería 'any' implícito (error con noImplicitAny)
  verificar(nombre: string) {
    return nombre.toLowerCase() === 'ok';
  }
}`})])])]),n[63]||(n[63]=e("hr",{class:"divider"},null,-1)),e("section",q,[n[48]||(n[48]=e("h2",{class:"section-title typescript"},"Interfaces Avanzadas",-1)),n[49]||(n[49]=e("p",{class:"section-desc"},"Las interfaces soportan extensión múltiple, firmas de índice, firmas de llamada y construcción, y fusión de declaraciones.",-1)),e("div",D,[e("div",M,[n[38]||(n[38]=e("div",{class:"card-header"},[e("h3",null,"extends (uno o varios) y opcionales")],-1)),n[39]||(n[39]=e("p",null,[s("Una interfaz puede extender varias interfaces a la vez. Usa "),e("code",null,"?"),s(" para propiedades opcionales y "),e("code",null,"readonly"),s(" para las de solo lectura.")],-1)),o(r,{language:"typescript",code:`interface Direccion {
  ciudad: string;
  pais: string;
}
interface Contacto {
  email: string;
  telefono?: string; // Propiedad opcional
}

interface Cliente extends Direccion, Contacto {
  readonly id: number;
  nombre: string;
}`})]),e("div",V,[n[40]||(n[40]=e("div",{class:"card-header"},[e("h3",null,"Firmas de índice")],-1)),n[41]||(n[41]=e("p",null,"Describen objetos usados como diccionarios, donde las claves no se conocen de antemano. Todas las propiedades deben ser compatibles con el tipo del índice.",-1)),o(r,{language:"typescript",code:`interface Traducciones {
  [palabra: string]: string;
}

const es: Traducciones = {
  hello: 'hola',
  bye: 'adiós'
};
es['thanks'] = 'gracias'; // OK: cualquier clave string`})]),e("div",F,[n[42]||(n[42]=e("div",{class:"card-header"},[e("h3",null,"Método vs propiedad de función")],-1)),n[43]||(n[43]=e("p",null,[s("Se pueden tipar funciones dentro de una interfaz con sintaxis de "),e("strong",null,"método"),s(" o como "),e("strong",null,"propiedad"),s(" con tipo función (esta última, con "),e("code",null,"strictFunctionTypes"),s(", comprueba los parámetros de forma más estricta).")],-1)),o(r,{language:"typescript",code:`interface Calculadora {
  sumar(a: number, b: number): number;         // Método
  restar: (a: number, b: number) => number;    // Propiedad de función
}

const calc: Calculadora = {
  sumar(a, b) { return a + b; },
  restar: (a, b) => a - b
};`})]),e("div",B,[n[44]||(n[44]=e("div",{class:"card-header"},[e("h3",null,"Firmas de llamada y de construcción")],-1)),n[45]||(n[45]=e("p",null,[s("Una interfaz puede describir una función invocable ("),e("em",null,"call signature"),s(") o algo que se puede instanciar con "),e("code",null,"new"),s(" ("),e("em",null,"construct signature"),s(").")],-1)),o(r,{language:"typescript",code:`// Call signature: describe la función en sí
interface Operacion {
  (a: number, b: number): number;
}
const multiplicar: Operacion = (a, b) => a * b;

// Construct signature: describe algo instanciable con 'new'
class Usuario {
  constructor(public nombre: string) {}
}
interface FabricaDeUsuarios {
  new (nombre: string): Usuario;
}
function crear(Fabrica: FabricaDeUsuarios, nombre: string) {
  return new Fabrica(nombre);
}
const u = crear(Usuario, 'Ana');`})]),e("div",N,[n[46]||(n[46]=e("div",{class:"card-header"},[e("h3",null,"Declaration Merging"),e("span",{class:"badge success"},"Exclusivo de interface")],-1)),n[47]||(n[47]=e("p",null,[s("Si declaras la misma interfaz varias veces, TypeScript las fusiona en una sola. Es la base para extender tipos de librerías (por ejemplo "),e("code",null,"Window"),s("). Los "),e("code",null,"type"),s(" no pueden hacerlo.")],-1)),o(r,{language:"typescript",code:`interface Ventana {
  titulo: string;
}
interface Ventana {
  ancho: number;
}

// Ambas declaraciones se fusionan
const v: Ventana = { titulo: 'App', ancho: 800 };`})])])]),n[64]||(n[64]=e("hr",{class:"divider"},null,-1)),e("section",k,[n[56]||(n[56]=e("h2",{class:"section-title typescript"},"interface vs type",-1)),n[57]||(n[57]=e("p",{class:"section-desc"},"Para describir la forma de un objeto, ambos son casi intercambiables. Las diferencias clave están en cómo se extienden y en qué más pueden representar.",-1)),e("div",K,[e("div",$,[n[50]||(n[50]=e("div",{class:"card-header"},[e("h3",null,"extends vs Intersection Types (&)")],-1)),n[51]||(n[51]=e("p",null,[s("Las interfaces se extienden con "),e("code",null,"extends"),s(". Los type aliases combinan tipos con la intersección "),e("code",null,"&"),s(".")],-1)),o(r,{language:"typescript",code:`// interface: extends
interface Base { id: number }
interface Completo extends Base { nombre: string }

// type: intersección
type Base2 = { id: number };
type Detalle = { nombre: string };
type Completo2 = Base2 & Detalle;

const obj: Completo2 = { id: 1, nombre: 'Ana' };`})]),e("div",G,[n[52]||(n[52]=e("div",{class:"card-header"},[e("h3",null,"Qué pasa ante un conflicto")],-1)),n[53]||(n[53]=e("p",null,[s("Con "),e("code",null,"extends"),s(", una propiedad incompatible produce un error claro. Con "),e("code",null,"&"),s(", el compilador no se queja: la propiedad se vuelve "),e("code",null,"never"),s(" y el error aparece más tarde.")],-1)),o(r,{language:"typescript",code:`interface Animal { sonido: string }

// interface Perro extends Animal { sonido: number }
// Error: 'Perro' extiende incorrectamente a 'Animal'

type Perro = Animal & { sonido: number };
// 'sonido' es string & number = never (sin error aquí)`})]),e("div",H,[n[54]||(n[54]=e("div",{class:"card-header"},[e("h3",null,"¿Cuál usar?"),e("span",{class:"badge success"},"Criterio")],-1)),n[55]||(n[55]=e("p",null,[s("Usa "),e("code",null,"interface"),s(" para describir objetos y contratos de clases (mejores mensajes de error, fusión y "),e("code",null,"extends"),s("). Usa "),e("code",null,"type"),s(" cuando necesites uniones, tuplas, primitivos, tipos condicionales o mapped types.")],-1)),o(r,{language:"typescript",code:`// Solo posible con type:
type Id = string | number;                  // Unión
type Par = [string, number];                // Tupla
type Estado = 'activo' | 'inactivo';        // Literales
type Callback = (err: Error | null) => void;

// Ideal con interface:
interface Repositorio<T> {
  obtener(id: number): T;
  guardar(item: T): void;
}`})])])]),n[65]||(n[65]=e("hr",{class:"divider"},null,-1)),o(a,{references:[{techId:"typescript",moduleId:"inferencia",text:"Inferencia de Tipos"},{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos"},{techId:"typescript",moduleId:"enums",text:"Enums en TS"},{techId:"typescript",moduleId:"genericos",text:"Genéricos en TS"},{techId:"typescript",moduleId:"narrowing",text:"Narrowing"},{techId:"typescript",moduleId:"tiposavanzados",text:"Tipos Avanzados"}]})]))}});export{Y as default};
