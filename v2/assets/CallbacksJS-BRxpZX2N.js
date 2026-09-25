import{C as r}from"./CodeBlock-BRMidGAh.js";import{R as l}from"./ReferenceSection-Cze-_fSr.js";import{d as i,c as t,b as e,e as o,f as a,a as s,o as d,_ as c}from"./index-DAfjV5Gp.js";const u={class:"module-content"},m={class:"topic-section"},v={class:"cards-grid"},p={class:"card info"},f={class:"card recommended"},b={class:"topic-section"},g={class:"cards-grid"},k={class:"card info"},E={class:"card recommended"},j={class:"topic-section"},y={class:"cards-grid"},P={class:"card info"},C={class:"card info"},A={class:"topic-section"},h={class:"cards-grid"},S={class:"card warning"},w={class:"card recommended"},U={class:"topic-section"},x={class:"cards-grid"},D={class:"card warning"},T={class:"card recommended"},I={class:"topic-section"},q={class:"cards-grid"},N={class:"card info"},L={class:"card recommended"},F=i({__name:"CallbacksJS",setup(H){return(O,n)=>(d(),t("div",u,[n[35]||(n[35]=e("div",{class:"header-section"},[e("h1",{class:"main-title js"},"Callbacks"),e("p",{class:"subtitle"},"Funciones pasadas como argumentos a otras funciones, es el patron fundamental de la asincronía en JavaScript.")],-1)),e("section",m,[n[4]||(n[4]=e("h2",{class:"section-title js"},"Que es un Callback?",-1)),n[5]||(n[5]=e("p",{class:"section-desc"},[a("Un "),e("strong",null,"callback"),a(" es simplemente una funcion que se pasa como argumento a otra funcion, para ser invocada en un momento posterior. No hay nada especial en la sintaxis: cualquier funcion puede ser un callback.")],-1)),e("div",v,[e("div",p,[n[0]||(n[0]=e("div",{class:"card-header"},[e("h3",null,"Concepto Basico")],-1)),n[1]||(n[1]=e("p",null,[a("Las funciones en JavaScript son "),e("strong",null,"ciudadanos de primera clase"),a(": se pueden asignar a variables, pasar como argumentos y retornar desde otras funciones. Un callback aprovecha exactamente esta caracteristica.")],-1)),o(r,{language:"javascript",code:`// La funcion que RECIBE el callback
function procesarUsuario(nombre, callbackExito, callbackError) {
  if (!nombre) {
    callbackError('El nombre no puede estar vacio');
    return;
  }
  const resultado = { id: 1, nombre: nombre.trim().toUpperCase() };
  callbackExito(resultado); // Invocar el callback con el resultado
}

// Las funciones que SE PASAN como callbacks
function alExito(datos) {
  console.log('Usuario creado:', datos);
}

function alError(mensaje) {
  console.error('Error:', mensaje);
}

// Uso
procesarUsuario('Alex', alExito, alError);
// → Usuario creado: { id: 1, nombre: 'ALEX' }

procesarUsuario('', alExito, alError);
// → Error: El nombre no puede estar vacio

// Tambien se puede pasar una funcion anonima
procesarUsuario('Diego', (datos) => {
  console.log('OK!', datos.nombre);
}, console.error);`})]),e("div",f,[n[2]||(n[2]=e("div",{class:"card-header"},[e("h3",null,"Callbacks en la API del Navegador")],-1)),n[3]||(n[3]=e("p",null,"Los callbacks son el patron fundamental de muchas APIs del navegador y de Node.js.",-1)),o(r,{language:"javascript",code:`// addEventListener — el callback se ejecuta al ocurrir el evento
document.querySelector('#btn').addEventListener('click', function(event) {
  console.log('Click en:', event.target);
});

// setTimeout — el callback se ejecuta despues del delay
setTimeout(() => {
  console.log('Se ejecuta tras 2 segundos');
}, 2000);

// Array.forEach — el callback se ejecuta por cada elemento
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, indice) => {
  console.log(indice + ': ' + numero);
});

// Array.filter — el callback determina si incluir el elemento
const pares = numeros.filter(n => n % 2 === 0);
// → [2, 4]

// Array.map — el callback transforma cada elemento
const dobles = numeros.map(n => n * 2);
// → [2, 4, 6, 8, 10]

// Array.sort — el callback define el criterio de orden
const personas = [{ nombre: 'Diego', edad: 25 }, { nombre: 'Alex', edad: 30 }];
personas.sort((a, b) => a.edad - b.edad);`})])])]),n[36]||(n[36]=e("hr",{class:"divider"},null,-1)),e("section",b,[n[10]||(n[10]=e("h2",{class:"section-title js"},"Sincronos vs Asincronos",-1)),n[11]||(n[11]=e("p",{class:"section-desc"},[a("Hay dos tipos de callbacks: los "),e("strong",null,"sincronos"),a(", que se ejecutan inmediatamente en el flujo normal del codigo, y los "),e("strong",null,"asincronos"),a(", que se ejecutan en el futuro despues de una operacion que toma tiempo.")],-1)),e("div",g,[e("div",k,[n[6]||(n[6]=e("div",{class:"card-header"},[e("h3",null,"Callback Sincrono")],-1)),n[7]||(n[7]=e("p",null,"El callback se invoca en el momento en que la funcion lo llama, bloqueando la ejecucion hasta que termine.",-1)),o(r,{language:"javascript",code:`// Sincrono: el callback se ejecuta AHORA
function ejecutarDosVeces(callback) {
  callback(); // Se ejecuta inmediatamente
  callback(); // Se ejecuta inmediatamente despues
}

ejecutarDosVeces(() => console.log('Hola!'));
// Hola!
// Hola!

console.log('Esto se ejecuta DESPUES de ejecutarDosVeces');
// Orden garantizado: Hola!, Hola!, Esto se ejecuta DESPUES

// Otro ejemplo sincrono: Array.map
const cuadrados = [1, 2, 3].map(n => {
  console.log('Procesando:', n); // Se imprime en orden
  return n * n;
});
// Procesando: 1
// Procesando: 2
// Procesando: 3`})]),e("div",E,[n[8]||(n[8]=e("div",{class:"card-header"},[e("h3",null,"Callback Asincrono")],-1)),n[9]||(n[9]=e("p",null,"El callback se invoca en el futuro, cuando una operacion termina. El codigo sigue ejecutandose mientras tanto.",-1)),o(r,{language:"javascript",code:`// Asincrono: el callback se ejecuta EN EL FUTURO
console.log('1. Inicio');

setTimeout(() => {
  console.log('3. Callback del timeout (despues de 1s)');
}, 1000);

console.log('2. Despues de setTimeout');

// Orden de ejecucion:
// 1. Inicio
// 2. Despues de setTimeout
// 3. Callback del timeout (despues de 1s)

// Simulacion de llamada HTTP (patron clasico de Node.js)
function obtenerUsuario(id, callback) {
  console.log('Solicitando usuario...');

  // Simula una operacion asincrona (base de datos, HTTP, etc.)
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID invalido'), null);
    } else {
      callback(null, { id, nombre: 'Alex', rol: 'admin' });
    }
  }, 500);
}

console.log('Antes de obtenerUsuario');

obtenerUsuario(1, (error, usuario) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Usuario:', usuario);
  }
});

console.log('Despues de obtenerUsuario (no espera el resultado)');`})])])]),n[37]||(n[37]=e("hr",{class:"divider"},null,-1)),e("section",j,[n[15]||(n[15]=e("h2",{class:"section-title js"},"Patron Error-First",-1)),n[16]||(n[16]=e("p",{class:"section-desc"},[a("El patron "),e("strong",null,"Error-First"),a(" es el estandar de facto para callbacks asincronos. El primer argumento del callback siempre es el error ("),e("code",null,"null"),a(" si no hay error) y el segundo es el resultado.")],-1)),e("div",y,[e("div",P,[n[12]||(n[12]=e("div",{class:"card-header"},[e("h3",null,"Convencion Error-First")],-1)),o(r,{language:"javascript",code:`// Regla: callback(error, resultado)
// Si hay error: callback(new Error('mensaje'), null)
// Si hay exito: callback(null, datos)

function leerArchivo(ruta, callback) {
  // Simulacion de lectura de archivo
  setTimeout(() => {
    if (!ruta.endsWith('.txt')) {
      callback(new Error('Solo se permiten archivos .txt'), null);
      return;
    }
    callback(null, 'Contenido del archivo: Lorem ipsum...');
  }, 300);
}

// Uso correcto del patron error-first
leerArchivo('datos.txt', (error, contenido) => {
  if (error) {
    console.error('Fallo:', error.message);
    return; // Siempre hacer return para evitar continuar
  }
  console.log('Exito:', contenido);
});

// Con archivo invalido
leerArchivo('imagen.png', (error, contenido) => {
  if (error) {
    console.error('Fallo:', error.message);
    // → Fallo: Solo se permiten archivos .txt
    return;
  }
  console.log(contenido); // No llega aqui
});`})]),e("div",C,[n[13]||(n[13]=e("div",{class:"card-header"},[e("h3",null,"Composicion de Operaciones Asincronas")],-1)),n[14]||(n[14]=e("p",null,"Ejemplo real: obtener un usuario, luego sus pedidos, luego el detalle de un pedido.",-1)),o(r,{language:"javascript",code:`// Funciones que siguen el patron error-first
function obtenerUsuario(id, cb) {
  setTimeout(() => cb(null, { id, nombre: 'Alex' }), 100);
}

function obtenerPedidos(userId, cb) {
  setTimeout(() => cb(null, [{ pedidoId: 'P001', total: 150 }]), 100);
}

function obtenerDetalle(pedidoId, cb) {
  setTimeout(() => cb(null, { pedidoId, items: ['Laptop', 'Mouse'] }), 100);
}

// Encadenar operaciones asincronas con callbacks
obtenerUsuario(1, (err, usuario) => {
  if (err) return console.error(err);
  console.log('Usuario:', usuario.nombre);

  obtenerPedidos(usuario.id, (err, pedidos) => {
    if (err) return console.error(err);
    console.log('Pedidos:', pedidos.length);

    const primerPedido = pedidos[0];
    obtenerDetalle(primerPedido.pedidoId, (err, detalle) => {
      if (err) return console.error(err);
      console.log('Items:', detalle.items);
      // Aqui empieza el Callback Hell...
    });
  });
});`})])])]),n[38]||(n[38]=e("hr",{class:"divider"},null,-1)),e("section",A,[n[24]||(n[24]=e("h2",{class:"section-title js"},"Callback Hell (Pyramid of Doom)",-1)),n[25]||(n[25]=e("p",{class:"section-desc"},[a("Cuando se encadenan multiples operaciones asincronas con callbacks, el codigo se anida profundamente formando la "),e("strong",null,"piramide de la muerte"),a(". Esto lo hace dificil de leer, mantener y manejar errores.")],-1)),e("div",h,[e("div",S,[n[17]||(n[17]=e("div",{class:"card-header"},[e("h3",null,"El Problema: Codigo Ilegible")],-1)),o(r,{language:"javascript",code:`// Ejemplo de Callback Hell — evitar este patron
autenticar(usuario, contrasena, (err, token) => {
  if (err) return manejarError(err);

  obtenerPerfil(token, (err, perfil) => {
    if (err) return manejarError(err);

    obtenerPermisos(perfil.id, (err, permisos) => {
      if (err) return manejarError(err);

      if (permisos.includes('admin')) {
        obtenerDashboard(perfil.id, (err, dashboard) => {
          if (err) return manejarError(err);

          renderizarUI(dashboard, (err, resultado) => {
            if (err) return manejarError(err);
            console.log('Listo:', resultado);
            // La 'piramide' sigue creciendo...
          });
        });
      }
    });
  });
});`}),n[18]||(n[18]=s('<div class="hell-pyramid" data-v-ed1eefa1><div class="pyramid-level" data-v-ed1eefa1>autenticar( </div><div class="pyramid-level pl-1" data-v-ed1eefa1>obtenerPerfil( </div><div class="pyramid-level pl-2" data-v-ed1eefa1>obtenerPermisos( </div><div class="pyramid-level pl-3" data-v-ed1eefa1>obtenerDashboard( </div><div class="pyramid-level pl-4" data-v-ed1eefa1>renderizarUI( </div><div class="pyramid-level pl-4" data-v-ed1eefa1>))</div><div class="pyramid-level pl-3" data-v-ed1eefa1>))</div><div class="pyramid-level pl-2" data-v-ed1eefa1>))</div><div class="pyramid-level pl-1" data-v-ed1eefa1>))</div><div class="pyramid-level" data-v-ed1eefa1>))</div></div>',1))]),e("div",w,[n[19]||(n[19]=e("div",{class:"card-header"},[e("h3",null,"Soluciones al Callback Hell")],-1)),n[20]||(n[20]=e("p",null,"Varias estrategias para evitar la piramide de la muerte:",-1)),n[21]||(n[21]=e("div",{class:"solution-item"},[e("div",{class:"solution-badge sol-1"},"1"),e("div",null,[e("strong",null,"Named Functions:"),a(" Extraer los callbacks a funciones nombradas en lugar de funciones anonimas. ")])],-1)),o(r,{language:"javascript",code:`// En vez de anidar funciones anonimas...
// Definir funciones nombradas separadas
function manejarToken(err, token) {
  if (err) return manejarError(err);
  obtenerPerfil(token, manejarPerfil);
}

function manejarPerfil(err, perfil) {
  if (err) return manejarError(err);
  obtenerPermisos(perfil.id, manejarPermisos);
}

function manejarPermisos(err, permisos) {
  if (err) return manejarError(err);
  console.log('Permisos:', permisos);
}

// Uso limpio — una sola capa de anidacion
autenticar(usuario, contrasena, manejarToken);`}),n[22]||(n[22]=e("div",{class:"solution-item"},[e("div",{class:"solution-badge sol-2"},"2"),e("div",null,[e("strong",null,"Promises:"),a(" La solucion moderna. Convierte callbacks en una cadena "),e("code",null,".then()"),a(" plana. ")])],-1)),n[23]||(n[23]=e("div",{class:"solution-item"},[e("div",{class:"solution-badge sol-3"},"3"),e("div",null,[e("strong",null,"Async/Await:"),a(" Azucar sintactico sobre Promises que hace el codigo asincrono parecer sincrono. ")])],-1)),o(r,{language:"javascript",code:`// Con Promises (sin Callback Hell)
autenticar(usuario, contrasena)
  .then(token => obtenerPerfil(token))
  .then(perfil => obtenerPermisos(perfil.id))
  .then(permisos => console.log('Permisos:', permisos))
  .catch(err => manejarError(err));

// Con Async/Await (la forma mas moderna y legible)
async function iniciarSesion(usuario, contrasena) {
  try {
    const token      = await autenticar(usuario, contrasena);
    const perfil     = await obtenerPerfil(token);
    const permisos   = await obtenerPermisos(perfil.id);
    console.log('Permisos:', permisos);
  } catch (err) {
    manejarError(err);
  }
}`})])])]),n[39]||(n[39]=e("hr",{class:"divider"},null,-1)),e("section",U,[n[29]||(n[29]=e("h2",{class:"section-title js"},"Errores Comunes con Callbacks",-1)),n[30]||(n[30]=e("p",{class:"section-desc"},"Los callbacks tienen varias trampas clasicas que conviene conocer para evitar bugs dificiles de depurar.",-1)),e("div",x,[e("div",D,[n[26]||(n[26]=e("div",{class:"card-header"},[e("h3",null,"Trampas Frecuentes")],-1)),o(r,{language:"javascript",code:`// Error 1: Llamar al callback dos veces
function procesarDatos(datos, callback) {
  if (!datos) {
    callback(new Error('Sin datos'));
    // Falta el return — el callback se llama dos veces!
  }
  callback(null, 'procesado'); // Tambien se ejecuta
}

// Correcto: return despues de llamar al callback de error
function procesarDatos(datos, callback) {
  if (!datos) {
    return callback(new Error('Sin datos'));
  }
  callback(null, 'procesado');
}

// Error 2: Olvidar manejar el error
leerArchivo('datos.json', (err, datos) => {
  // Si err existe y no se maneja, el codigo sigue
  const parsed = JSON.parse(datos); // Crashea si datos es null
  console.log(parsed);
});

// Correcto: siempre manejar el error primero
leerArchivo('datos.json', (err, datos) => {
  if (err) return console.error('Error:', err.message);
  const parsed = JSON.parse(datos);
  console.log(parsed);
});

// Error 3: Perder el contexto 'this'
const miObjeto = {
  nombre: 'Alex',
  saludar: function() {
    setTimeout(function() {
      console.log('Hola, soy', this.nombre); // undefined!
    }, 100);
  }
};

// Correcto: usar arrow function para preservar 'this'
const miObjeto2 = {
  nombre: 'Alex',
  saludar: function() {
    setTimeout(() => {
      console.log('Hola, soy', this.nombre); // 'Alex'
    }, 100);
  }
};`})]),e("div",T,[n[27]||(n[27]=e("div",{class:"card-header"},[e("h3",null,"Promisificar un Callback")],-1)),n[28]||(n[28]=e("p",null,[a("Convierte una funcion basada en callbacks al patron de Promises para usarla con "),e("code",null,"async/await"),a(".")],-1)),o(r,{language:"javascript",code:`// Funcion original con callback
function obtenerDatosConCallback(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID invalido'), null);
    } else {
      callback(null, { id, nombre: 'Producto ' + id });
    }
  }, 500);
}

// Promisificacion manual
function obtenerDatos(id) {
  return new Promise((resolve, reject) => {
    obtenerDatosConCallback(id, (error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

// Ahora se puede usar con async/await
async function cargarProducto(id) {
  try {
    const producto = await obtenerDatos(id);
    console.log('Producto:', producto);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Node.js tiene una utilidad para esto: util.promisify
const { promisify } = require('util');
const leerArchivoAsync = promisify(fs.readFile);

const contenido = await leerArchivoAsync('datos.txt', 'utf-8');`})])])]),n[40]||(n[40]=e("hr",{class:"divider"},null,-1)),e("section",I,[n[33]||(n[33]=e("h2",{class:"section-title js"},"Cuando Usar Callbacks Hoy en Dia",-1)),n[34]||(n[34]=e("p",{class:"section-desc"},[a("En 2024+, "),e("strong",null,"Promises y async/await"),a(" son la forma preferida de manejar asincronía. Sin embargo, los callbacks siguen siendo relevantes en ciertos contextos.")],-1)),e("div",q,[e("div",N,[n[31]||(n[31]=s('<div class="card-header" data-v-ed1eefa1><h3 data-v-ed1eefa1>Casos de Uso Validos</h3></div><ul class="def-list" data-v-ed1eefa1><li data-v-ed1eefa1><span class="def-term" data-v-ed1eefa1>Event Listeners:</span>addEventListener, socket.on() — callbacks para eventos que pueden ocurrir multiples veces.</li><li data-v-ed1eefa1><span class="def-term" data-v-ed1eefa1>Metodos de Arrays:</span> .map(), .filter(), .reduce(), .forEach() — callbacks sincronos de iteracion.</li><li data-v-ed1eefa1><span class="def-term" data-v-ed1eefa1>Funciones de orden superior:</span> Funciones que reciben logica como parametro (patron Strategy, DI).</li><li data-v-ed1eefa1><span class="def-term" data-v-ed1eefa1>APIs de Node.js legadas:</span> El modulo fs, http etc. siguen usando callbacks (aunque tienen alternativas con Promises).</li><li data-v-ed1eefa1><span class="def-term" data-v-ed1eefa1>Librarias de terceros:</span> Algunas librerias antiguas todavia usan el patron error-first.</li></ul>',2)),o(r,{language:"javascript",code:`// Callbacks apropiados en 2024
// 1. Eventos (pueden ocurrir N veces)
window.addEventListener('resize', (e) => {
  console.log('Nuevo tamaño:', window.innerWidth);
});

// 2. Metodos de arrays (sincronos, no hay alternativa mejor)
const adultos = usuarios.filter(u => u.edad >= 18);
const nombres = adultos.map(u => u.nombre);
const total   = precios.reduce((acc, p) => acc + p, 0);

// 3. Funcion de orden superior (patron strategy)
function ordenarPor(array, comparador) {
  return [...array].sort(comparador);
}

const porEdad  = ordenarPor(usuarios, (a, b) => a.edad - b.edad);
const porNombre = ordenarPor(usuarios, (a, b) => a.nombre.localeCompare(b.nombre));`})]),e("div",L,[n[32]||(n[32]=s('<div class="card-header" data-v-ed1eefa1><h3 data-v-ed1eefa1>Evolucion: Callbacks → Promises → Async/Await</h3></div><div class="evolution-timeline" data-v-ed1eefa1><div class="evo-step" data-v-ed1eefa1><div class="evo-badge evo-old" data-v-ed1eefa1>ES5</div><div class="evo-content" data-v-ed1eefa1><div class="evo-title" data-v-ed1eefa1>Callbacks</div><div class="evo-desc" data-v-ed1eefa1>Unico mecanismo de asincronía. Callback hell inevitable en operaciones complejas.</div></div></div><div class="evo-arrow" data-v-ed1eefa1>↓</div><div class="evo-step" data-v-ed1eefa1><div class="evo-badge evo-mid" data-v-ed1eefa1>ES6</div><div class="evo-content" data-v-ed1eefa1><div class="evo-title" data-v-ed1eefa1>Promises</div><div class="evo-desc" data-v-ed1eefa1>Cadena <code data-v-ed1eefa1>.then()/.catch()</code> plana. Elimina la piramide de callbacks anidados.</div></div></div><div class="evo-arrow" data-v-ed1eefa1>↓</div><div class="evo-step" data-v-ed1eefa1><div class="evo-badge evo-new" data-v-ed1eefa1>ES2017+</div><div class="evo-content" data-v-ed1eefa1><div class="evo-title" data-v-ed1eefa1>Async / Await</div><div class="evo-desc" data-v-ed1eefa1>Codigo asincrono que se lee como sincrono. El estandar actual para la mayoría de casos.</div></div></div></div>',2)),o(r,{language:"javascript",code:`// Las tres formas de hacer lo mismo:
// Obtener usuario → obtener sus posts → mostrar

// 1. Callbacks (evitar para nuevas operaciones asincronas)
getUser(id, (err, user) => {
  if (err) return handleError(err);
  getPosts(user.id, (err, posts) => {
    if (err) return handleError(err);
    render({ user, posts });
  });
});

// 2. Promises
getUser(id)
  .then(user => getPosts(user.id).then(posts => ({ user, posts })))
  .then(({ user, posts }) => render({ user, posts }))
  .catch(handleError);

// 3. Async/Await (recomendado)
async function cargar(id) {
  const user  = await getUser(id);
  const posts = await getPosts(user.id);
  render({ user, posts });
}`})])])]),n[41]||(n[41]=e("hr",{class:"divider"},null,-1)),o(l,{references:[{techId:"js",moduleId:"eventos",text:"Eventos del DOM"},{techId:"js",moduleId:"objetosNativos",text:"Objetos Nativos y Timers"}]})]))}}),J=c(F,[["__scopeId","data-v-ed1eefa1"]]);export{J as default};
