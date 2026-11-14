import{d as F,u as B,r as p,h as H,m as V,y as J,c as i,b as a,e as o,f as n,a as k,w as G,g as v,t as d,F as L,l as I,i as Q,k as _,j as A,n as K,p as W,o as c,_ as X}from"./index-BiVGtinp.js";import{C as t}from"./CodeBlock-CvGzwvz0.js";import{R as Y}from"./ReferenceSection-BEF4KlHN.js";const Z={class:"module-content"},aa={class:"topic-section"},ea={class:"section-desc"},na={class:"card info"},sa={class:"compare-grid"},oa={class:"topic-section"},ta={class:"cards-grid"},ra={class:"card info"},la={class:"card info"},ia={class:"topic-section"},da={class:"cards-grid"},ca={class:"card info"},ua={class:"card warning"},pa={class:"topic-section"},ma={class:"cards-grid"},va={class:"card demo-card info"},ba={class:"demo-row"},ga=["disabled"],fa={key:0,class:"spinner"},wa={key:0,class:"greeting"},ya={class:"log-box"},ha={key:0,class:"log-empty"},ja={class:"topic-section"},Pa={class:"cards-grid"},Ea={class:"card recommended"},ka={class:"card recommended"},Sa={class:"cards-grid"},qa={class:"card demo-card info"},xa={class:"demo-row"},Aa={class:"id-label"},Ta=["disabled"],Ua=["disabled"],Ca=["disabled"],La={class:"demo-status"},Ia={key:0,class:"spinner"},Da={key:0,class:"user-card"},Na={class:"user-avatar"},$a={class:"user-name"},za={class:"user-line"},Ma={class:"user-line"},Oa={key:1,class:"user-error"},Ra={key:2,class:"log-empty"},Fa={class:"topic-section"},Ba={class:"card demo-card info"},Ha={class:"demo-row"},Va=["disabled"],Ja=["disabled"],Ga={class:"gantt"},Qa={class:"gantt-name"},_a={class:"gantt-track"},Ka={key:0},Wa={key:1},Xa={class:"cards-grid"},Ya={class:"card warning"},Za={class:"card recommended"},ae={class:"cards-grid"},ee={class:"card info"},ne={class:"card info"},se={class:"topic-section"},oe={class:"cards-grid"},te={class:"card warning"},re={class:"card recommended"},le={class:"topic-section"},ie={class:"cards-grid"},de={class:"card info"},ce={class:"card recommended"},ue={class:"topic-section"},pe={class:"cards-grid"},me={class:"card info"},ve={class:"card recommended"},be={class:"card info"},ge={class:"topic-section"},fe={class:"card info"},we={class:"topic-section"},ye={class:"cards-grid"},he={class:"card warning"},je={class:"card warning"},D=2800,Pe=F({__name:"AsyncAwaitJS",setup(Ee){const N=B(),$=(l,e)=>{var r;const s=(r=W[l])==null?void 0:r.find(E=>E.id===e);s&&N.addTab({id:`${l}-${e}`,title:s.name,route:`/${l}/${e}`,moduleId:e,techId:l})},T=l=>new Promise(e=>setTimeout(e,l)),b=p(!1),g=p(""),f=p([]);async function z(){b.value=!0,g.value="",f.value=[];const l=Date.now(),e=R=>f.value.push(`[+${Date.now()-l} ms] ${R}`);async function s(){return e("1. Antes del await (dentro de saludar)"),await T(2e3),e("3. Después del await: la función continúa"),"¡Hola desde async/await!"}e("0. Llamando a saludar()");const r=s();e("2. La línea siguiente NO espera: el código principal sigue");const E=await r;g.value=E,e(`4. Resultado recibido: "${E}"`),b.value=!1}const w=p(1),u=p("idle"),m=p(null),S=p(""),M=H(()=>({idle:"sin consultar",loading:"cargando…",ok:"éxito",error:"error"})[u.value]);async function U(){var l,e;u.value="loading",m.value=null,S.value="";try{const s=await fetch(`https://jsonplaceholder.typicode.com/users/${w.value}`);if(!s.ok)throw new Error(`HTTP ${s.status}: usuario no encontrado`);const r=await s.json();m.value={name:r.name,email:r.email,city:((l=r.address)==null?void 0:l.city)??"—",company:((e=r.company)==null?void 0:e.name)??"—"},u.value="ok"}catch(s){S.value=s.message,u.value="error"}}const y=V([{name:"Usuario",ms:800,color:"bar-a",start:null,end:null},{name:"Pedidos",ms:1200,color:"bar-b",start:null,end:null},{name:"Productos",ms:600,color:"bar-c",start:null,end:null}]),q=p(0),h=p(null),j=p(!1),P=p(null);let x;function O(l){if(l.start===null)return{left:"0%",width:"0%"};const e=l.end??q.value;return{left:`${l.start/D*100}%`,width:`${Math.max((e-l.start)/D*100,.5)}%`}}async function C(l){y.forEach(r=>{r.start=null,r.end=null}),h.value=l,P.value=null,j.value=!0,q.value=0;const e=performance.now();x=window.setInterval(()=>{q.value=performance.now()-e},40);const s=async r=>{r.start=Math.round(performance.now()-e),await T(r.ms),r.end=Math.round(performance.now()-e)};if(l==="seq")for(const r of y)await s(r);else await Promise.all(y.map(r=>s(r)));P.value=Math.round(performance.now()-e),window.clearInterval(x),j.value=!1}return J(()=>window.clearInterval(x)),(l,e)=>(c(),i("div",Z,[e[71]||(e[71]=a("div",{class:"header-section"},[a("h1",{class:"main-title js"},"Async / Await"),a("p",{class:"subtitle"},[n("Escribe código asíncrono que se lee de arriba hacia abajo, sin cadenas de "),a("code",null,".then()"),n(" y con "),a("code",null,"try/catch"),n(" de toda la vida.")])],-1)),a("section",aa,[e[12]||(e[12]=a("h2",{class:"section-title js"},"¿Qué son async y await?",-1)),a("p",ea,[e[5]||(e[5]=n("Son palabras clave (ES2017) para trabajar con ")),a("a",{class:"link",href:"#",onClick:e[0]||(e[0]=G(s=>$("js","promesas"),["prevent"]))},"promesas"),e[6]||(e[6]=n(" de una forma más sencilla. Seguimos usando promesas, pero abandonamos el encadenamiento de ")),e[7]||(e[7]=a("code",null,".then()",-1)),e[8]||(e[8]=n(" a favor de un estilo secuencial más tradicional."))]),e[13]||(e[13]=k('<div class="cards-grid" data-v-5b771dbe><div class="card info" data-v-5b771dbe><div class="card-header" data-v-5b771dbe><h3 data-v-5b771dbe>async</h3></div><p data-v-5b771dbe>Marca una función como <strong data-v-5b771dbe>asíncrona</strong>. Lo que retorne se envuelve automáticamente en una promesa, y habilita el uso de <code data-v-5b771dbe>await</code> dentro de ella.</p></div><div class="card recommended" data-v-5b771dbe><div class="card-header" data-v-5b771dbe><h3 data-v-5b771dbe>await</h3></div><p data-v-5b771dbe><strong data-v-5b771dbe>Pausa la función</strong> hasta que la promesa se resuelva y devuelve su valor. Si la promesa se rechaza, lanza una excepción en ese punto.</p></div></div><br data-v-5b771dbe><br data-v-5b771dbe>',3)),a("div",na,[e[11]||(e[11]=a("div",{class:"card-header"},[a("h3",null,"Mismo resultado, dos estilos")],-1)),a("div",sa,[a("div",null,[e[9]||(e[9]=a("div",{class:"compare-label cl-old"},"Con .then()",-1)),o(t,{language:"javascript",code:`function cargarPerfil(id) {
  return obtenerUsuario(id)
    .then(usuario => {
      return obtenerPedidos(usuario.id)
        .then(pedidos => ({ usuario, pedidos }));
    })
    .catch(err => {
      console.error(err);
    });
}`})]),a("div",null,[e[10]||(e[10]=a("div",{class:"compare-label cl-new"},"Con async / await",-1)),o(t,{language:"javascript",code:`async function cargarPerfil(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const pedidos = await obtenerPedidos(usuario.id);
    return { usuario, pedidos };
  } catch (err) {
    console.error(err);
  }
}`})])])])]),e[72]||(e[72]=a("hr",{class:"divider"},null,-1)),a("section",oa,[e[16]||(e[16]=a("h2",{class:"section-title js"},"La palabra clave async",-1)),e[17]||(e[17]=a("p",{class:"section-desc"},[n("Una función "),a("code",null,"async"),n(),a("strong",null,"siempre devuelve una promesa"),n(", sin importar lo que retornes dentro.")],-1)),a("div",ta,[a("div",ra,[e[14]||(e[14]=a("div",{class:"card-header"},[a("h3",null,"Siempre devuelve una promesa")],-1)),o(t,{language:"javascript",code:`async function a() { return 42; }
// equivale a: return Promise.resolve(42)

async function b() { throw new Error('boom'); }
// equivale a: return Promise.reject(new Error('boom'))

async function c() { return fetch('/api'); }
// si retornas una promesa, se 'aplana' (no hay promesa de promesa)

a().then(v => console.log(v));        // 42
b().catch(e => console.log(e.message)); // boom

console.log(a() instanceof Promise);   // true`})]),a("div",la,[e[15]||(e[15]=a("div",{class:"card-header"},[a("h3",null,"Dónde se puede usar")],-1)),o(t,{language:"javascript",code:`// Declaración
async function saludar() { /* ... */ }

// Expresión
const saludar2 = async function () { /* ... */ };

// Arrow function
const saludar3 = async () => { /* ... */ };

// Método de objeto
const api = {
  async obtener(id) { /* ... */ }
};

// Método de clase
class Servicio {
  async cargar() { /* ... */ }
  static async crear() { /* ... */ }
}

// IIFE asíncrona (útil fuera de módulos)
(async () => {
  const datos = await obtenerDatos();
  console.log(datos);
})();`})])])]),e[73]||(e[73]=a("hr",{class:"divider"},null,-1)),a("section",ia,[e[21]||(e[21]=a("h2",{class:"section-title js"},"La palabra clave await",-1)),e[22]||(e[22]=a("p",{class:"section-desc"},[a("code",null,"await"),n(" suspende la ejecución de la función "),a("code",null,"async"),n(" hasta que la promesa se resuelva; mientras tanto, el hilo principal queda libre para atender otras tareas (eventos, renderizado, otras promesas).")],-1)),a("div",da,[a("div",ca,[e[18]||(e[18]=a("div",{class:"card-header"},[a("h3",null,"Qué hace por debajo")],-1)),e[19]||(e[19]=a("p",null,[a("code",null,"await expr"),n(" es, en esencia, azúcar sintáctico sobre "),a("code",null,".then()"),n(": el resto de la función se convierte en el callback.")],-1)),o(t,{language:"javascript",code:`async function ejemplo() {
  const a = await promesaA();   // pausa aquí
  const b = await promesaB(a);  // y luego aquí
  return a + b;
}

// Conceptualmente:
function ejemplo2() {
  return promesaA().then(a =>
    promesaB(a).then(b => a + b)
  );
}`})]),a("div",ua,[e[20]||(e[20]=k('<div class="card-header" data-v-5b771dbe><h3 data-v-5b771dbe>Reglas importantes</h3></div><ul class="def-list" data-v-5b771dbe><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Solo en async:</span> await funciona dentro de una función async o en el nivel superior de un módulo ES.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>No bloquea el hilo:</span> pausa <em data-v-5b771dbe>solo esa función</em>; el resto del programa sigue corriendo.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Acepta cualquier valor:</span> si no es una promesa, se resuelve en la siguiente microtarea.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Thenables:</span> cualquier objeto con método .then() puede esperarse.</li></ul>',2)),o(t,{language:"javascript",code:`const x = await 5;            // 5 (valor normal)
const y = await Promise.resolve(7); // 7
const z = await { then(res) { res('thenable'); } }; // 'thenable'

function normal() {
  // const v = await algo();  // SyntaxError: await solo en async
}`})])])]),e[74]||(e[74]=a("hr",{class:"divider"},null,-1)),a("section",pa,[e[23]||(e[23]=a("h2",{class:"section-title js"},"Demo 1: Saludar en 2 segundos",-1)),e[24]||(e[24]=a("p",{class:"section-desc"},[n("Observa el orden real de ejecución: la función "),a("code",null,"async"),n(" se pausa en el "),a("code",null,"await"),n(", pero el código que la llamó "),a("strong",null,"continúa de inmediato"),n(".")],-1)),a("div",ma,[a("div",va,[a("div",ba,[a("button",{class:"run-btn",disabled:b.value,onClick:z},d(b.value?"Esperando…":"▶ Saludar en 2 segundos"),9,ga),b.value?(c(),i("span",fa)):v("",!0)]),g.value?(c(),i("div",wa,d(g.value),1)):v("",!0),a("div",ya,[f.value.length?v("",!0):(c(),i("div",ha,"Pulsa el botón para ver el flujo de ejecución…")),(c(!0),i(L,null,I(f.value,(s,r)=>(c(),i("div",{key:r,class:"log-line"},d(s),1))),128))])]),a("div",null,[o(t,{language:"javascript",code:`const sleep = ms => new Promise(r => setTimeout(r, ms));

async function saludar() {
  console.log('1. Antes del await');
  await sleep(2000);                    // se pausa 2 s
  console.log('3. Después del await');
  return '¡Hola desde async/await!';
}

async function main() {
  console.log('0. Llamando a saludar()');
  const promesa = saludar();
  console.log('2. La línea siguiente NO espera');
  const mensaje = await promesa;
  console.log('4. Resultado:', mensaje);
}

main();`})])])]),e[75]||(e[75]=a("hr",{class:"divider"},null,-1)),a("section",ja,[e[30]||(e[30]=a("h2",{class:"section-title js"},"Manejo de errores",-1)),e[31]||(e[31]=a("p",{class:"section-desc"},[n("Un "),a("code",null,"await"),n(" sobre una promesa rechazada "),a("strong",null,"lanza una excepción"),n(", así que se captura con el clásico "),a("code",null,"try/catch/finally"),n(".")],-1)),a("div",Pa,[a("div",Ea,[e[25]||(e[25]=a("div",{class:"card-header"},[a("h3",null,"try / catch / finally")],-1)),o(t,{language:"javascript",code:`async function cargarUsuario(id) {
  mostrarSpinner();
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

    // fetch NO rechaza con 404/500: revisa res.ok
    if (!res.ok) throw new Error('HTTP ' + res.status);

    return await res.json();
  } catch (error) {
    console.error('No se pudo cargar:', error.message);
    return null;
  } finally {
    ocultarSpinner(); // siempre se ejecuta
  }
}`})]),a("div",ka,[e[26]||(e[26]=a("div",{class:"card-header"},[a("h3",null,"Alternativas al try/catch")],-1)),o(t,{language:"javascript",code:`// 1. .catch() sobre la llamada
const datos = await obtenerDatos().catch(() => null);

// 2. Helper que devuelve [error, datos] (estilo Go)
async function to(promesa) {
  try {
    return [null, await promesa];
  } catch (err) {
    return [err, null];
  }
}

const [err, usuario] = await to(obtenerUsuario(1));
if (err) return console.error(err);
console.log(usuario);

// 3. Capturar solo al final de una llamada compuesta
cargarTodo().catch(manejarError);`})])]),e[32]||(e[32]=a("h3",{class:"section-title"},"Demo 2: Consultar datos de un usuario",-1)),a("div",Sa,[a("div",qa,[a("div",xa,[a("label",Aa,[e[27]||(e[27]=n("ID de usuario ")),Q(a("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>w.value=s),type:"number",min:"1",class:"id-input",disabled:u.value==="loading"},null,8,Ta),[[_,w.value,void 0,{number:!0}]])]),a("button",{class:"run-btn",disabled:u.value==="loading",onClick:U},d(u.value==="loading"?"Consultando…":"▶ Consultar"),9,Ua),a("button",{class:"seg-btn",disabled:u.value==="loading",onClick:e[2]||(e[2]=s=>{w.value=999,U()})},"Probar ID inexistente",8,Ca)]),a("div",La,[e[28]||(e[28]=a("span",{class:"status-label"},"Estado:",-1)),a("span",{class:A(["status-pill","pill-"+u.value])},[u.value==="loading"?(c(),i("span",Ia)):v("",!0),n(" "+d(M.value),1)],2)]),u.value==="ok"&&m.value?(c(),i("div",Da,[a("div",Na,d(m.value.name.charAt(0)),1),a("div",null,[a("div",$a,d(m.value.name),1),a("div",za,"✉ "+d(m.value.email),1),a("div",Ma,"📍 "+d(m.value.city)+" · 🏢 "+d(m.value.company),1)])])):u.value==="error"?(c(),i("div",Oa,[e[29]||(e[29]=a("strong",null,"catch →",-1)),n(" "+d(S.value),1)])):u.value==="idle"?(c(),i("div",Ra,"Aún no se ha hecho ninguna consulta.")):v("",!0)]),a("div",null,[o(t,{language:"javascript",code:`async function consultarUsuario(id) {
  try {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);

    if (!res.ok) {
      throw new Error(\`HTTP \${res.status}: usuario no encontrado\`);
    }

    const usuario = await res.json();
    console.log(usuario.name, usuario.email);
  } catch (error) {
    // Errores de red y errores HTTP lanzados arriba
    console.error('Error:', error.message);
  }
}

consultarUsuario(1);    // ✔ datos del usuario
consultarUsuario(999);  // ✖ HTTP 404`})])])]),e[76]||(e[76]=a("hr",{class:"divider"},null,-1)),a("section",Fa,[e[41]||(e[41]=a("h2",{class:"section-title js"},"Secuencial vs Paralelo",-1)),e[42]||(e[42]=a("p",{class:"section-desc"},[n("El error de rendimiento más común: usar "),a("code",null,"await"),n(" uno tras otro con tareas "),a("strong",null,"independientes"),n(". Los tiempos se suman. Lanza las promesas a la vez y espera el conjunto con "),a("code",null,"Promise.all"),n(".")],-1)),a("div",Ba,[e[34]||(e[34]=a("div",{class:"card-header"},[a("h3",null,"Demo 3: Línea de tiempo de ejecución")],-1)),a("div",Ha,[a("button",{class:"run-btn",disabled:j.value,onClick:e[3]||(e[3]=s=>C("seq"))},"▶ Secuencial (await uno a uno)",8,Va),a("button",{class:"run-btn run-alt",disabled:j.value,onClick:e[4]||(e[4]=s=>C("par"))},"▶ Paralelo (Promise.all)",8,Ja)]),a("div",Ga,[(c(!0),i(L,null,I(y,s=>(c(),i("div",{key:s.name,class:"gantt-row"},[a("span",Qa,[n(d(s.name),1),a("small",null,d(s.ms)+" ms",1)]),a("div",_a,[a("div",{class:A(["gantt-bar",s.color]),style:K(O(s))},null,6)])]))),128)),e[33]||(e[33]=a("div",{class:"gantt-axis"},[a("span",null,"0"),a("span",null,"700"),a("span",null,"1400"),a("span",null,"2100"),a("span",null,"2800 ms")],-1))]),P.value!==null?(c(),i("div",{key:0,class:A(["timeline-result",h.value==="par"?"tr-ok":"tr-warn"])},[n(d(h.value==="seq"?"Secuencial":"Paralelo")+": ",1),a("strong",null,d(P.value)+" ms",1),h.value==="seq"?(c(),i("span",Ka," (suma de todas: 800 + 1200 + 600)")):(c(),i("span",Wa," (solo lo que tarda la más lenta: 1200)"))],2)):v("",!0)]),e[43]||(e[43]=a("br",null,null,-1)),e[44]||(e[44]=a("br",null,null,-1)),a("div",Xa,[a("div",Ya,[e[35]||(e[35]=a("div",{class:"card-header"},[a("h3",null,"Secuencial (suma los tiempos)")],-1)),o(t,{language:"javascript",code:`// ~ 800 + 1200 + 600 = 2600 ms
const usuario   = await obtenerUsuario();   // 800 ms
const pedidos   = await obtenerPedidos();   // 1200 ms
const productos = await obtenerProductos(); // 600 ms`}),e[36]||(e[36]=a("p",null,[n("Úsalo "),a("strong",null,"solo"),n(" cuando cada paso necesita el resultado del anterior.")],-1))]),a("div",Za,[e[37]||(e[37]=a("div",{class:"card-header"},[a("h3",null,"Paralelo (gana la más lenta)")],-1)),o(t,{language:"javascript",code:`// ~ 1200 ms
const [usuario, pedidos, productos] = await Promise.all([
  obtenerUsuario(),
  obtenerPedidos(),
  obtenerProductos()
]);

// Variante: iniciar primero, esperar después
const pUsuario = obtenerUsuario();   // ya está corriendo
const pPedidos = obtenerPedidos();   // ya está corriendo
const usuario2 = await pUsuario;
const pedidos2 = await pPedidos;`})])]),e[45]||(e[45]=a("br",null,null,-1)),e[46]||(e[46]=a("br",null,null,-1)),a("div",ae,[a("div",ee,[e[38]||(e[38]=a("div",{class:"card-header"},[a("h3",null,"Bucles y await")],-1)),o(t,{language:"javascript",code:`const ids = [1, 2, 3, 4];

// Secuencial: for...of (el orden importa)
for (const id of ids) {
  const u = await obtenerUsuario(id);
  console.log(u.name);
}

// Paralelo: map + Promise.all
const usuarios = await Promise.all(ids.map(id => obtenerUsuario(id)));

// forEach NO espera los await internos
ids.forEach(async (id) => {
  await obtenerUsuario(id);
});
console.log('Esto sale ANTES de que terminen');

// Secuencial con reduce (encadenar promesas)
await ids.reduce(
  (prev, id) => prev.then(() => obtenerUsuario(id)),
  Promise.resolve()
);`})]),a("div",ne,[e[39]||(e[39]=a("div",{class:"card-header"},[a("h3",null,"Limitar la concurrencia"),n(". ")],-1)),e[40]||(e[40]=a("p",null,[n("Lanzar 500 peticiones con "),a("code",null,"Promise.all"),n(" puede saturar el servidor. Procesa por lotes o con un pool de trabajadores.")],-1)),o(t,{language:"javascript",code:`// Por lotes de N
async function enLotes(items, tam, fn) {
  const resultados = [];
  for (let i = 0; i < items.length; i += tam) {
    const lote = items.slice(i, i + tam);
    resultados.push(...await Promise.all(lote.map(fn)));
  }
  return resultados;
}

// Pool: máximo N tareas simultáneas
async function conLimite(items, limite, fn) {
  const resultados = [];
  let siguiente = 0;

  async function trabajador() {
    while (siguiente < items.length) {
      const i = siguiente++;
      resultados[i] = await fn(items[i]);
    }
  }

  await Promise.all(Array.from({ length: limite }, trabajador));
  return resultados;
}

await conLimite(urls, 3, url => fetch(url).then(r => r.json()));`})])])]),e[77]||(e[77]=a("hr",{class:"divider"},null,-1)),a("section",se,[e[49]||(e[49]=a("h2",{class:"section-title js"},"return vs return await",-1)),e[50]||(e[50]=a("p",{class:"section-desc"},[n("Dentro de un "),a("code",null,"try/catch"),n(", retornar una promesa "),a("strong",null,"sin"),n(),a("code",null,"await"),n(" hace que el rechazo escape del "),a("code",null,"catch"),n(", porque la función ya terminó cuando la promesa falla.")],-1)),a("div",oe,[a("div",te,[e[47]||(e[47]=a("div",{class:"card-header"},[a("h3",null,"El catch no se ejecuta")],-1)),o(t,{language:"javascript",code:`async function a() {
  try {
    return obtenerDatos();        // sin await
  } catch (e) {
    console.log('Nunca llega aquí');
    return null;
  }
}
// el rechazo se propaga al llamador`})]),a("div",re,[e[48]||(e[48]=a("div",{class:"card-header"},[a("h3",null,"Ahora sí se captura")],-1)),o(t,{language:"javascript",code:`async function b() {
  try {
    return await obtenerDatos();  // con await
  } catch (e) {
    console.log('Capturado:', e.message);
    return null;
  }
}

// Fuera de un try/catch, 'return promesa' y
// 'return await promesa' son equivalentes.`})])])]),e[78]||(e[78]=a("hr",{class:"divider"},null,-1)),a("section",le,[e[54]||(e[54]=a("h2",{class:"section-title js"},"Iteración asíncrona",-1)),e[55]||(e[55]=a("p",{class:"section-desc"},[n("Cuando los datos llegan "),a("strong",null,"poco a poco"),n(" (páginas de una API, streams, eventos), usa "),a("code",null,"for await...of"),n(" y los "),a("strong",null,"generadores asíncronos"),n(".")],-1)),a("div",ie,[a("div",de,[e[51]||(e[51]=a("div",{class:"card-header"},[a("h3",null,"for await...of")],-1)),o(t,{language:"javascript",code:`// Itera un array de promesas, esperando cada una en orden
const promesas = [obtener(1), obtener(2), obtener(3)];
for await (const resultado of promesas) {
  console.log(resultado);
}

// Leer una respuesta en streaming
const res = await fetch('/api/stream');
const decoder = new TextDecoder();
for await (const chunk of res.body) {
  console.log(decoder.decode(chunk, { stream: true }));
}

// Node.js: leer un archivo línea por línea
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const rl = createInterface({ input: createReadStream('log.txt') });
for await (const linea of rl) {
  console.log(linea);
}`})]),a("div",ce,[e[52]||(e[52]=a("div",{class:"card-header"},[a("h3",null,"Generadores asíncronos")],-1)),e[53]||(e[53]=a("p",null,[n("Combinan "),a("code",null,"async"),n(" y "),a("code",null,"function*"),n(": producen valores con "),a("code",null,"yield"),n(" mientras esperan operaciones asíncronas. Ideales para "),a("strong",null,"paginación"),n(".")],-1)),o(t,{language:"javascript",code:`async function* paginas(url) {
  let pagina = 1;
  while (true) {
    const res = await fetch(\`\${url}?page=\${pagina}\`);
    const datos = await res.json();
    if (datos.length === 0) return;   // fin
    yield datos;
    pagina++;
  }
}

for await (const lote of paginas('/api/productos')) {
  console.log('Página con', lote.length, 'productos');
}

// Array.fromAsync (ES2024): recoger todo en un array
const todos = await Array.fromAsync(paginas('/api/productos'));`})])])]),e[79]||(e[79]=a("hr",{class:"divider"},null,-1)),a("section",ue,[e[61]||(e[61]=a("h2",{class:"section-title js"},"Top-level await y Node.js",-1)),a("div",pe,[a("div",me,[e[56]||(e[56]=a("div",{class:"card-header"},[a("h3",null,"Top-level await")],-1)),e[57]||(e[57]=a("p",null,[n("En módulos ES puedes usar "),a("code",null,"await"),n(" directamente, sin envolverlo en una función "),a("code",null,"async"),n(".")],-1)),o(t,{language:"javascript",code:`// config.mjs  (módulo ES; también válido en el navegador con type module)
const res = await fetch('/api/config');
export const config = await res.json();

// Otro módulo que lo importe esperará a que termine:
// import { config } from './config.mjs';

// En CommonJS (require) NO está disponible:
// usa una IIFE async en su lugar.`})]),a("div",ve,[e[58]||(e[58]=a("div",{class:"card-header"},[a("h3",null,"APIs asíncronas en Node.js")],-1)),o(t,{language:"javascript",code:`// fs con promesas (en vez de callbacks)
import { readFile, writeFile } from 'node:fs/promises';

const texto = await readFile('datos.txt', 'utf-8');
await writeFile('copia.txt', texto);

// sleep nativo, sin crear la promesa a mano
import { setTimeout as sleep } from 'node:timers/promises';
await sleep(1000);

// Convertir una API de callbacks a promesas
import { promisify } from 'node:util';
import { exec } from 'node:child_process';

const execAsync = promisify(exec);
const { stdout } = await execAsync('node --version');
console.log(stdout);`})])]),e[62]||(e[62]=a("br",null,null,-1)),e[63]||(e[63]=a("br",null,null,-1)),a("div",be,[e[59]||(e[59]=a("div",{class:"card-header"},[a("h3",null,"async en TypeScript")],-1)),e[60]||(e[60]=a("p",null,[n("Una función "),a("code",null,"async"),n(" siempre devuelve "),a("code",null,"Promise<T>"),n(". Anota el tipo de lo que resuelve la promesa, no la promesa en sí.")],-1)),o(t,{language:"typescript",code:`interface Usuario {
  id: number;
  name: string;
  email: string;
}

async function obtenerUsuario(id: number): Promise<Usuario> {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json() as Promise<Usuario>;
}

// Awaited<T> extrae el tipo resuelto de una promesa
type Resultado = Awaited<ReturnType<typeof obtenerUsuario>>; // Usuario`})])]),e[80]||(e[80]=a("hr",{class:"divider"},null,-1)),a("section",ge,[e[65]||(e[65]=a("h2",{class:"section-title js"},"await y el Event Loop",-1)),e[66]||(e[66]=a("p",{class:"section-desc"},[n("Lo que viene después de un "),a("code",null,"await"),n(" se ejecuta como "),a("strong",null,"microtarea"),n(", por lo que corre antes que cualquier "),a("code",null,"setTimeout"),n(", incluso con 0 ms.")],-1)),a("div",fe,[o(t,{language:"javascript",code:`async function prueba() {
  console.log('2. Dentro de prueba (síncrono hasta el primer await)');
  await null;
  console.log('4. Continúa tras el await (microtarea)');
}

console.log('1. Inicio');
setTimeout(() => console.log('5. setTimeout (macrotarea)'), 0);
prueba();
console.log('3. Fin del script');

// Orden: 1, 2, 3, 4, 5`}),e[64]||(e[64]=k('<div class="loop-visual" data-v-5b771dbe><div class="loop-step ls-sync" data-v-5b771dbe>Código síncrono<br data-v-5b771dbe><small data-v-5b771dbe>hasta el primer await</small></div><div class="loop-arrow" data-v-5b771dbe>→</div><div class="loop-step ls-micro" data-v-5b771dbe>Microtareas<br data-v-5b771dbe><small data-v-5b771dbe>continuación tras await</small></div><div class="loop-arrow" data-v-5b771dbe>→</div><div class="loop-step ls-macro" data-v-5b771dbe>Macrotareas<br data-v-5b771dbe><small data-v-5b771dbe>setTimeout, eventos, I/O</small></div></div>',1))])]),e[81]||(e[81]=a("hr",{class:"divider"},null,-1)),a("section",we,[e[69]||(e[69]=a("h2",{class:"section-title js"},"Errores comunes",-1)),a("div",ye,[a("div",he,[e[67]||(e[67]=a("div",{class:"card-header"},[a("h3",null,"Olvidos y trampas")],-1)),o(t,{language:"javascript",code:`// Error 1. Olvidar el await: obtienes una Promise, no el dato
const usuario = obtenerUsuario(1);
console.log(usuario.name);   // undefined (usuario es una Promise)

// Solución
const usuario2 = await obtenerUsuario(1);

// Error 2. await dentro de un callback que no es async
datos.map(d => await procesar(d));   // SyntaxError

// Solución
await Promise.all(datos.map(async d => await procesar(d)));

// Error 3. Condición con una promesa (siempre es truthy)
if (esAdmin(usuario)) { /* siempre entra */ }

// Solución
if (await esAdmin(usuario)) { /* ... */ }`})]),a("div",je,[e[68]||(e[68]=a("div",{class:"card-header"},[a("h3",null,"Errores que se escapan")],-1)),o(t,{language:"javascript",code:`// Error: Llamar a una async sin await ni catch:
// el rechazo queda sin manejar (unhandled rejection)
async function guardar() { throw new Error('fallo'); }
guardar();

// Solución: Maneja siempre el resultado
guardar().catch(console.error);

// Solución: Event handlers async: el navegador ignora la promesa
button.addEventListener('click', async () => {
  await guardar();   // si falla, nadie lo captura
});

// Otra solución: try/catch dentro del handler
button.addEventListener('click', async () => {
  try {
    await guardar();
  } catch (e) {
    mostrarError(e);
  }
});`})])]),e[70]||(e[70]=k('<br data-v-5b771dbe><br data-v-5b771dbe><div class="card recommended" data-v-5b771dbe><div class="card-header" data-v-5b771dbe><h3 data-v-5b771dbe>Buenas prácticas</h3></div><ul class="def-list" data-v-5b771dbe><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Independiente = paralelo:</span> si dos tareas no dependen entre sí, usa Promise.all en lugar de dos await seguidos.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Maneja los errores:</span> cada cadena de awaits debe terminar en un try/catch o un .catch().</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Revisa res.ok:</span> fetch solo rechaza en errores de red, no en 404 o 500.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Evita await innecesarios:</span> no esperes dentro de un bucle si no necesitas el orden.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Cancela lo que puedas:</span> usa AbortController / AbortSignal.timeout() para peticiones lentas.</li><li data-v-5b771dbe><span class="def-term" data-v-5b771dbe>Una función async = una promesa:</span> el llamador debe esperar el resultado con await o .then().</li></ul></div>',3))]),e[82]||(e[82]=a("hr",{class:"divider"},null,-1)),o(Y,{references:[{techId:"js",moduleId:"promesas",text:"Promesas"},{techId:"js",moduleId:"callbacks",text:"Callbacks"},{techId:"js",moduleId:"objetosNativos",text:"Objetos Nativos y Timers"}]})]))}}),xe=X(Pe,[["__scopeId","data-v-5b771dbe"]]);export{xe as default};
