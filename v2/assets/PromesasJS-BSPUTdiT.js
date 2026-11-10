import{d as L,r as m,h as U,c as d,b as e,e as r,f as s,a as w,j as g,i as D,t as i,k as I,g as C,F as T,l as z,o as c,_ as F}from"./index-D-jl3Rmq.js";import{C as l}from"./CodeBlock-BzwlNw74.js";import{R as M}from"./ReferenceSection-B5DV2Qwh.js";const O={class:"module-content"},$={class:"topic-section"},B={class:"cards-grid"},V={class:"card recommended"},J={class:"topic-section"},_={class:"card recommended"},H={class:"demo-controls"},G={class:"control-group"},K={class:"seg"},Q=["disabled"],W=["disabled"],X={class:"control-group"},Y={class:"control-label"},Z=["disabled"],ee=["disabled"],ae={class:"demo-status"},se={key:0,class:"spinner"},ne={class:"log-box"},oe={key:0,class:"log-empty"},te={class:"log-time"},re={class:"topic-section"},le={class:"cards-grid"},ie={class:"card info"},de={class:"card warning"},ce={class:"topic-section"},ue={class:"card recommended"},ve={class:"comb-buttons"},me=["disabled","onClick"],pe={class:"log-box small"},fe={key:0,class:"log-empty"},ge={class:"log-line log-info"},be={class:"log-time"},he={class:"log-line log-info"},je={key:2,class:"log-line log-info"},we={class:"cards-grid"},ye={class:"card info"},Pe={class:"card recommended"},Ee={class:"topic-section"},ke={class:"cards-grid"},Se={class:"card info"},Ce={class:"card recommended"},Te={class:"card info"},xe={class:"topic-section"},ze={class:"cards-grid"},Re={class:"card info"},Ne={class:"card info"},Ae={class:"card recommended"},qe={class:"topic-section"},Le={class:"card info"},Ue={class:"topic-section"},De={class:"cards-grid"},Ie={class:"card warning"},Fe={class:"card warning"},Me=L({__name:"PromesasJS",setup(Oe){const b=m("ok"),y=m(1500),f=m("idle"),p=m(!1),P=m([]),R=U(()=>({idle:"sin crear",pending:"pending",fulfilled:"fulfilled",rejected:"rejected"})[f.value]);function h(o,a="info",n=0){P.value.push({time:`+${Date.now()-n} ms`,text:o,type:a})}function N(){const o=Date.now(),a=b.value,n=y.value;P.value=[],f.value="pending",p.value=!0,h("new Promise(...) creada → pending","info",o),new Promise((t,j)=>{setTimeout(()=>{a==="ok"?t("Datos del usuario"):j(new Error("Fallo de red"))},n)}).then(t=>(f.value="fulfilled",h(`.then → recibió "${t}"`,"ok",o),t.length)).then(t=>{h(`.then (encadenado) → longitud = ${t}`,"ok",o)}).catch(t=>{f.value="rejected",h(`.catch → ${t.message}`,"error",o)}).finally(()=>{h(".finally → se ejecuta siempre","info",o),p.value=!1})}const A=["all","allSettled","race","any"],x=m(null),E=m(!1),u=m(null);function k(o,a,n){return new Promise((v,t)=>{setTimeout(()=>n?v(o):t(new Error("Falló "+o)),a)})}async function q(o){x.value=o,E.value=!0,u.value=null;const a=Date.now(),n=()=>[k("A",600,!0),k("B",1e3,!1),k("C",1400,!0)];let v=!0,t="";try{o==="all"?t=JSON.stringify(await Promise.all(n())):o==="allSettled"?t=(await Promise.allSettled(n())).map(S=>S.status==="fulfilled"?`✔ ${S.value}`:`✖ ${S.reason.message}`).join("  |  "):o==="race"?t="Ganó: "+await Promise.race(n()):t="Primera cumplida: "+await Promise.any.call(Promise,n())}catch(j){v=!1,t=j.message}u.value={metodo:o,ok:v,texto:t,ms:Date.now()-a},E.value=!1}return(o,a)=>(c(),d("div",O,[a[49]||(a[49]=e("div",{class:"header-section"},[e("h1",{class:"main-title js"},"Promesas"),e("p",{class:"subtitle"},[s("Objetos que representan el resultado futuro de una operación asíncrona: la base de "),e("code",null,"async/await"),s(" y de casi toda la web moderna.")])],-1)),e("section",$,[a[5]||(a[5]=e("h2",{class:"section-title js"},"¿Qué es una Promesa?",-1)),a[6]||(a[6]=e("p",{class:"section-desc"},[s("Una "),e("strong",null,"promesa"),s(" es algo que en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas. En JavaScript se representa con un objeto "),e("code",null,"Promise"),s(" que siempre está en uno de tres estados.")],-1)),e("div",B,[a[4]||(a[4]=w('<div class="card info" data-v-3763ef4e><div class="card-header" data-v-3763ef4e><h3 data-v-3763ef4e>Los 3 Estados</h3></div><div class="state-diagram" data-v-3763ef4e><div class="state-box st-pending" data-v-3763ef4e><span class="st-name" data-v-3763ef4e>pending</span><span class="st-desc" data-v-3763ef4e>Estado inicial: ni cumplida ni rechazada.</span></div><div class="state-branches" data-v-3763ef4e><div class="state-arrow" data-v-3763ef4e>resolve(valor) ↓</div><div class="state-arrow" data-v-3763ef4e>reject(error) ↓</div></div><div class="state-final" data-v-3763ef4e><div class="state-box st-fulfilled" data-v-3763ef4e><span class="st-name" data-v-3763ef4e>fulfilled</span><span class="st-desc" data-v-3763ef4e>La operación se completó con éxito.</span></div><div class="state-box st-rejected" data-v-3763ef4e><span class="st-name" data-v-3763ef4e>rejected</span><span class="st-desc" data-v-3763ef4e>La operación falló.</span></div></div></div><p data-v-3763ef4e>Una promesa es <strong data-v-3763ef4e>inmutable una vez resuelta</strong> (<em data-v-3763ef4e>settled</em>): no puede cambiar de estado ni de valor.</p></div>',1)),e("div",V,[a[3]||(a[3]=w('<div class="card-header" data-v-3763ef4e><h3 data-v-3763ef4e>Métodos de la Instancia</h3></div><ul class="def-list" data-v-3763ef4e><li data-v-3763ef4e><span class="def-term" data-v-3763ef4e>.then(onFulfilled):</span>Se ejecuta cuando la promesa se cumple. Devuelve una nueva promesa.</li><li data-v-3763ef4e><span class="def-term" data-v-3763ef4e>.catch(onRejected):</span>Se ejecuta cuando la promesa se rechaza (o si algo lanza un error en la cadena).</li><li data-v-3763ef4e><span class="def-term" data-v-3763ef4e>.then(ok, error):</span>Equivalente a los dos anteriores en una sola llamada.</li><li data-v-3763ef4e><span class="def-term" data-v-3763ef4e>.finally(onFinally):</span>Se ejecuta siempre, se cumpla o se rechace. No recibe argumentos.</li></ul>',2)),r(l,{language:"javascript",code:`const promesa = new Promise((resolve, reject) => {
  // Aquí va la operación asíncrona
  const exito = true;

  if (exito) {
    resolve('¡Todo salió bien!');   // → fulfilled
  } else {
    reject(new Error('Algo falló')); // → rejected
  }
});

promesa
  .then(valor => console.log('Éxito:', valor))
  .catch(error => console.error('Error:', error.message))
  .finally(() => console.log('Fin (siempre se ejecuta)'));`})])])]),a[50]||(a[50]=e("hr",{class:"divider"},null,-1)),e("section",J,[a[10]||(a[10]=e("h2",{class:"section-title js"},"Demo: Ciclo de Vida de una Promesa",-1)),a[11]||(a[11]=e("p",{class:"section-desc"},[s("Configura el resultado y el tiempo de espera, crea la promesa y observa cómo cambia de estado y en qué orden se ejecutan "),e("code",null,".then"),s(", "),e("code",null,".catch"),s(" y "),e("code",null,".finally"),s(".")],-1)),e("div",_,[e("div",H,[e("div",G,[a[7]||(a[7]=e("label",{class:"control-label"},"Resultado",-1)),e("div",K,[e("button",{class:g(["seg-btn",{active:b.value==="ok"}]),disabled:p.value,onClick:a[0]||(a[0]=n=>b.value="ok")},"✔ Cumplir",10,Q),e("button",{class:g(["seg-btn",{active:b.value==="fail"}]),disabled:p.value,onClick:a[1]||(a[1]=n=>b.value="fail")},"✖ Rechazar",10,W)])]),e("div",X,[e("label",Y,[a[8]||(a[8]=s("Espera: ")),e("strong",null,i(y.value)+" ms",1)]),D(e("input",{type:"range",min:"200",max:"3000",step:"100","onUpdate:modelValue":a[2]||(a[2]=n=>y.value=n),disabled:p.value,class:"range"},null,8,Z),[[I,y.value,void 0,{number:!0}]])]),e("button",{class:"run-btn",disabled:p.value,onClick:N},i(p.value?"Esperando…":"▶ Crear promesa"),9,ee)]),e("div",ae,[a[9]||(a[9]=e("span",{class:"status-label"},"Estado:",-1)),e("span",{class:g(["status-pill","pill-"+f.value])},[f.value==="pending"?(c(),d("span",se)):C("",!0),s(i(R.value),1)],2)]),e("div",ne,[P.value.length?C("",!0):(c(),d("div",oe,"Pulsa «Crear promesa» para ver el flujo de ejecución…")),(c(!0),d(T,null,z(P.value,(n,v)=>(c(),d("div",{key:v,class:g(["log-line","log-"+n.type])},[e("span",te,i(n.time),1),s(i(n.text),1)],2))),128))])])]),a[51]||(a[51]=e("hr",{class:"divider"},null,-1)),e("section",re,[a[14]||(a[14]=e("h2",{class:"section-title js"},"Encadenamiento (Chaining)",-1)),a[15]||(a[15]=e("p",{class:"section-desc"},[s("Cada "),e("code",null,".then()"),s(" devuelve una "),e("strong",null,"nueva promesa"),s(". Lo que retornes dentro se pasa al siguiente eslabón; si retornas otra promesa, la cadena espera a que se resuelva. Así se evita el "),e("em",null,"callback hell"),s(".")],-1)),e("div",le,[e("div",ie,[a[12]||(a[12]=e("div",{class:"card-header"},[e("h3",null,"Pasando valores por la cadena")],-1)),r(l,{language:"javascript",code:`function esperar(ms, valor) {
  return new Promise(resolve => setTimeout(() => resolve(valor), ms));
}

esperar(500, 2)
  .then(n => n * 10)                 // 20 (valor normal)
  .then(n => esperar(500, n + 5))    // retorna otra promesa → espera
  .then(n => {
    console.log(n);                  // 25
    return n * 2;
  })
  .then(n => console.log(n))         // 50
  .catch(err => console.error(err))
  .finally(() => console.log('Listo'));`})]),e("div",de,[a[13]||(a[13]=w('<div class="card-header" data-v-3763ef4e><h3 data-v-3763ef4e>Propagación de errores</h3></div><p data-v-3763ef4e>Un error (<code data-v-3763ef4e>throw</code> o promesa rechazada) salta todos los <code data-v-3763ef4e>.then</code> hasta el siguiente <code data-v-3763ef4e>.catch</code>. Después del <code data-v-3763ef4e>.catch</code>, la cadena <strong data-v-3763ef4e>se recupera</strong> y continúa.</p>',2)),r(l,{language:"javascript",code:`Promise.resolve(1)
  .then(n => {
    throw new Error('Falló el paso 2');
  })
  .then(n => console.log('No se ejecuta'))   // saltado
  .catch(err => {
    console.error(err.message);              // Falló el paso 2
    return 'valor de recuperación';          // la cadena continúa
  })
  .then(v => console.log(v))                 // valor de recuperación
  .finally(() => console.log('Siempre'));`})])])]),a[52]||(a[52]=e("hr",{class:"divider"},null,-1)),e("section",ce,[a[23]||(a[23]=w('<h2 class="section-title js" data-v-3763ef4e>Métodos Estáticos y Combinadores</h2><p class="section-desc" data-v-3763ef4e>Cuando trabajas con <strong data-v-3763ef4e>varias promesas a la vez</strong>, los combinadores deciden cuándo y cómo se resuelve el conjunto.</p><div class="cards-grid" data-v-3763ef4e><div class="comb-card" data-v-3763ef4e><div class="comb-name" data-v-3763ef4e>Promise.all</div><div class="comb-desc" data-v-3763ef4e>Espera a <strong data-v-3763ef4e>todas</strong>. Si una falla, rechaza inmediatamente.</div></div><div class="comb-card" data-v-3763ef4e><div class="comb-name" data-v-3763ef4e>Promise.allSettled</div><div class="comb-desc" data-v-3763ef4e>Espera a todas y devuelve el estado de cada una. <strong data-v-3763ef4e>Nunca rechaza.</strong></div></div></div><br data-v-3763ef4e><div class="cards-grid" data-v-3763ef4e><div class="comb-card" data-v-3763ef4e><div class="comb-name" data-v-3763ef4e>Promise.race</div><div class="comb-desc" data-v-3763ef4e>Se resuelve/rechaza con la <strong data-v-3763ef4e>primera</strong> que termine (éxito o error).</div></div><div class="comb-card" data-v-3763ef4e><div class="comb-name" data-v-3763ef4e>Promise.any</div><div class="comb-desc" data-v-3763ef4e>Se resuelve con la primera <strong data-v-3763ef4e>cumplida</strong>. Rechaza solo si todas fallan.</div></div></div><br data-v-3763ef4e><br data-v-3763ef4e>',7)),e("div",ue,[a[19]||(a[19]=e("div",{class:"card-header"},[e("h3",null,"Demo: Compara los combinadores")],-1)),a[20]||(a[20]=e("p",null,[s("Tres tareas simuladas: "),e("span",{class:"task t-a"},"A · 600 ms ✔"),s(),e("span",{class:"task t-b"},"B · 1000 ms ✖"),s(),e("span",{class:"task t-c"},"C · 1400 ms ✔")],-1)),e("div",ve,[(c(),d(T,null,z(A,n=>e("button",{key:n,class:g(["seg-btn",{active:x.value===n}]),disabled:E.value,onClick:v=>q(n)},i(n),11,me)),64))]),e("div",pe,[u.value?(c(),d(T,{key:1},[e("div",ge,[a[16]||(a[16]=e("span",{class:"log-time"},"método",-1)),s("Promise."+i(u.value.metodo)+"([A, B, C])",1)]),e("div",{class:g(["log-line",u.value.ok?"log-ok":"log-error"])},[e("span",be,i(u.value.ok?"cumplida":"rechazada"),1),s(i(u.value.texto),1)],2),e("div",he,[a[17]||(a[17]=e("span",{class:"log-time"},"tiempo",-1)),s(i(u.value.ms)+" ms",1)])],64)):(c(),d("div",fe,"Elige un método para ejecutarlo…")),E.value?(c(),d("div",je,a[18]||(a[18]=[e("span",{class:"log-time"},"…",-1),s("Ejecutando tareas")]))):C("",!0)])]),a[24]||(a[24]=e("br",null,null,-1)),a[25]||(a[25]=e("br",null,null,-1)),e("div",we,[e("div",ye,[a[21]||(a[21]=e("div",{class:"card-header"},[e("h3",null,"Código de los combinadores")],-1)),r(l,{language:"javascript",code:`const a = fetch('/api/usuarios');
const b = fetch('/api/pedidos');
const c = fetch('/api/productos');

// Todas deben cumplirse (falla rápido)
const [usuarios, pedidos, productos] = await Promise.all([a, b, c]);

// Resultado individual de cada una, sin rechazar nunca
const resultados = await Promise.allSettled([a, b, c]);
resultados.forEach(r => {
  if (r.status === 'fulfilled') console.log('OK:', r.value);
  else console.log('Error:', r.reason);
});

// La más rápida gana (éxito o fallo)
const primera = await Promise.race([a, b, c]);

// La primera exitosa (ignora los fallos)
try {
  const primeraOk = await Promise.any([a, b, c]);
} catch (e) {
  console.log(e instanceof AggregateError); // true: todas fallaron
  console.log(e.errors);
}`})]),e("div",Pe,[a[22]||(a[22]=e("div",{class:"card-header"},[e("h3",null,"Atajos y novedades")],-1)),r(l,{language:"javascript",code:`// Promesas ya resueltas / rechazadas
const ok  = Promise.resolve(42);
const bad = Promise.reject(new Error('boom'));

// Promise.withResolvers() — ES2024
// Evita el patrón 'let resolve; new Promise(r => resolve = r)'
const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => resolve('Listo desde fuera'), 1000);
console.log(await promise); // Listo desde fuera

// Promise.try() — ejecuta una función (sync o async)
// y siempre devuelve una promesa (soporte creciente)
Promise.try(() => JSON.parse(texto))
  .then(datos => console.log(datos))
  .catch(err => console.error('JSON inválido'));`})])])]),a[53]||(a[53]=e("hr",{class:"divider"},null,-1)),e("section",Ee,[a[31]||(a[31]=e("h2",{class:"section-title js"},"async / await",-1)),a[32]||(a[32]=e("p",{class:"section-desc"},[s("Una función "),e("code",null,"async"),s(),e("strong",null,"siempre devuelve una promesa"),s(" y "),e("code",null,"await"),s(" pausa la función hasta que la promesa se resuelva, sin bloquear el hilo principal.")],-1)),e("div",ke,[e("div",Se,[a[26]||(a[26]=e("div",{class:"card-header"},[e("h3",null,"Manejo de errores con try/catch")],-1)),r(l,{language:"javascript",code:`async function cargarUsuario(id) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

    // fetch NO rechaza con errores HTTP (404, 500): hay que revisarlo
    if (!respuesta.ok) {
      throw new Error('HTTP ' + respuesta.status);
    }

    const usuario = await respuesta.json();
    console.log(usuario.name, usuario.email);
    return usuario;
  } catch (error) {
    console.error('No se pudo cargar:', error.message);
  } finally {
    console.log('Petición finalizada');
  }
}

cargarUsuario(1);`})]),e("div",Ce,[a[27]||(a[27]=e("div",{class:"card-header"},[e("h3",null,"Secuencial vs Paralelo"),e("span",{class:"badge warning"},"Rendimiento")],-1)),a[28]||(a[28]=e("p",null,[s("Hacer "),e("code",null,"await"),s(" uno tras otro suma los tiempos. Si las tareas son independientes, lánzalas a la vez.")],-1)),r(l,{language:"javascript",code:`// Secuencial: tarda ~ 1s + 1s = 2s
const usuario = await obtenerUsuario();  // 1s
const pedidos = await obtenerPedidos();  // 1s
// Paralelo: tarda ~ 1s (la más lenta)
const [usuario2, pedidos2] = await Promise.all([
  obtenerUsuario(),
  obtenerPedidos()
]);

// Iterar con await en secuencia (cuando el orden importa)
for (const id of [1, 2, 3]) {
  const u = await obtenerUsuario(id);
  console.log(u);
}

// Iterar en paralelo
const usuarios = await Promise.all(
  [1, 2, 3].map(id => obtenerUsuario(id))
);`})])]),a[33]||(a[33]=e("br",null,null,-1)),a[34]||(a[34]=e("br",null,null,-1)),e("div",Te,[a[29]||(a[29]=e("div",{class:"card-header"},[e("h3",null,"Top-level await")],-1)),a[30]||(a[30]=e("p",null,[s("En módulos ES ("),e("code",null,'type="module"'),s(" o archivos "),e("code",null,".mjs"),s(") puedes usar "),e("code",null,"await"),s(" fuera de una función.")],-1)),r(l,{language:"javascript",code:`// main.mjs  (módulo ES)
const respuesta = await fetch('/api/config');
const config = await respuesta.json();

console.log('Configuración cargada:', config);`})])]),a[54]||(a[54]=e("hr",{class:"divider"},null,-1)),e("section",xe,[a[38]||(a[38]=e("h2",{class:"section-title js"},"Patrones Útiles",-1)),a[39]||(a[39]=e("p",{class:"section-desc"},"Recetas comunes que combinan promesas, timers y cancelación.",-1)),e("div",ze,[e("div",Re,[a[35]||(a[35]=e("div",{class:"card-header"},[e("h3",null,"Promisificar: sleep y callbacks")],-1)),r(l,{language:"javascript",code:`// sleep reutilizable
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function demo() {
  console.log('Inicio');
  await sleep(1000);
  console.log('Pasó 1 segundo');
}

// Convertir una función con callback en promesa
function leerConPromesa(ruta) {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, 'utf-8', (err, datos) => {
      if (err) reject(err);
      else resolve(datos);
    });
  });
}

// Node.js ya lo trae hecho
import { readFile } from 'node:fs/promises';
const texto = await readFile('datos.txt', 'utf-8');`})]),e("div",Ne,[a[36]||(a[36]=e("div",{class:"card-header"},[e("h3",null,"Timeout y cancelación")],-1)),r(l,{language:"javascript",code:`// Cancelar un fetch si tarda más de 3 segundos
try {
  const res = await fetch('/api/lento', {
    signal: AbortSignal.timeout(3000)
  });
  console.log(await res.json());
} catch (e) {
  if (e.name === 'TimeoutError') console.log('Tardó demasiado');
}

// Cancelación manual con AbortController
const controller = new AbortController();
fetch('/api/datos', { signal: controller.signal })
  .catch(e => console.log(e.name)); // AbortError

controller.abort();

// Timeout genérico con Promise.race
const conTimeout = (promesa, ms) =>
  Promise.race([
    promesa,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms))
  ]);`})])]),a[40]||(a[40]=e("br",null,null,-1)),a[41]||(a[41]=e("br",null,null,-1)),e("div",Ae,[a[37]||(a[37]=e("div",{class:"card-header"},[e("h3",null,"Reintentos con espera (retry)")],-1)),r(l,{language:"javascript",code:`async function conReintentos(fn, intentos = 3, espera = 500) {
  for (let i = 1; i <= intentos; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === intentos) throw error;      // último intento: propagar
      console.log('Intento ' + i + ' falló, reintentando…');
      await sleep(espera * i);              // espera creciente
    }
  }
}

const datos = await conReintentos(() => fetch('/api/inestable').then(r => r.json()));`})])]),a[55]||(a[55]=e("hr",{class:"divider"},null,-1)),e("section",qe,[a[43]||(a[43]=e("h2",{class:"section-title js"},"Promesas y el Event Loop",-1)),a[44]||(a[44]=e("p",{class:"section-desc"},[s("Los callbacks de las promesas van a la cola de "),e("strong",null,"microtareas"),s(", que se vacía "),e("strong",null,"antes"),s(" de la cola de macrotareas ("),e("code",null,"setTimeout"),s(", eventos…). Por eso una promesa ya resuelta siempre le gana a un "),e("code",null,"setTimeout(…, 0)"),s(".")],-1)),e("div",Le,[r(l,{language:"javascript",code:`console.log('1. Síncrono');

setTimeout(() => console.log('4. Macrotarea (setTimeout)'), 0);

Promise.resolve().then(() => console.log('3. Microtarea (promesa)'));

console.log('2. Síncrono');

// Orden de salida:
// 1. Síncrono
// 2. Síncrono
// 3. Microtarea (promesa)
// 4. Macrotarea (setTimeout)`}),a[42]||(a[42]=w('<div class="loop-visual" data-v-3763ef4e><div class="loop-step ls-sync" data-v-3763ef4e>Código síncrono</div><div class="loop-arrow" data-v-3763ef4e>→</div><div class="loop-step ls-micro" data-v-3763ef4e>Microtareas<br data-v-3763ef4e><small data-v-3763ef4e>promesas, queueMicrotask</small></div><div class="loop-arrow" data-v-3763ef4e>→</div><div class="loop-step ls-macro" data-v-3763ef4e>Macrotareas<br data-v-3763ef4e><small data-v-3763ef4e>setTimeout, eventos, I/O</small></div></div>',1))])]),a[56]||(a[56]=e("hr",{class:"divider"},null,-1)),e("section",Ue,[a[48]||(a[48]=e("h2",{class:"section-title js"},"Errores Comunes",-1)),e("div",De,[e("div",Ie,[a[45]||(a[45]=e("div",{class:"card-header"},[e("h3",null,"Trampas frecuentes")],-1)),r(l,{language:"javascript",code:`// 1. Olvidar el return dentro de .then
obtenerUsuario()
  .then(u => { obtenerPedidos(u.id); })   // no retorna → siguiente then recibe undefined
  .then(pedidos => console.log(pedidos)); // undefined

// Solución: Retornar la promesa
obtenerUsuario()
  .then(u => obtenerPedidos(u.id))
  .then(pedidos => console.log(pedidos));

// 2. forEach no espera los await
ids.forEach(async id => {
  await procesar(id);
});
console.log('Listo'); // se imprime ANTES de terminar

// Solución: for...of o Promise.all
await Promise.all(ids.map(id => procesar(id)));
console.log('Listo');

// 3. Anti-patrón: envolver una promesa en otra
function obtener() {
  return new Promise(resolve => {
    fetch('/api').then(r => resolve(r.json()));
  });
}
// Solución: Simplemente retornar la promesa existente
const obtener2 = () => fetch('/api').then(r => r.json());`})]),e("div",Fe,[a[46]||(a[46]=e("div",{class:"card-header"},[e("h3",null,"Rechazos sin manejar")],-1)),a[47]||(a[47]=e("p",null,[s("Una promesa rechazada sin "),e("code",null,".catch"),s(" dispara "),e("code",null,"unhandledrejection"),s(". En Node.js 15+ esto "),e("strong",null,"termina el proceso"),s(".")],-1)),r(l,{language:"javascript",code:`// 1. Nadie captura el error
Promise.reject(new Error('Sin manejar'));

// Red de seguridad global (navegador)
window.addEventListener('unhandledrejection', event => {
  console.error('Rechazo sin manejar:', event.reason);
  event.preventDefault();
});

// Red de seguridad global (Node.js)
process.on('unhandledRejection', (reason) => {
  console.error('Rechazo sin manejar:', reason);
});

// 2. try/catch no captura errores de promesas sin await
try {
  fetch('/api/falla');            // sin await: el error escapa
} catch (e) { /* nunca entra */ }

// Solución: Con await sí
try {
  await fetch('/api/falla');
} catch (e) {
  console.error('Capturado:', e);
}`})])])]),a[57]||(a[57]=e("hr",{class:"divider"},null,-1)),r(M,{references:[{techId:"js",moduleId:"callbacks",text:"Callbacks"},{techId:"js",moduleId:"objetosNativos",text:"Objetos Nativos y Timers"},{techId:"js",moduleId:"eventos",text:"Eventos del DOM"}]})]))}}),Je=F(Me,[["__scopeId","data-v-3763ef4e"]]);export{Je as default};
