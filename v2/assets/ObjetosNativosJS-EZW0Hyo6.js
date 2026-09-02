import{d as V,r as n,q as W,s as B,c as h,b as e,e as t,f as s,l as R,t as o,i as X,h as Y,j as J,o as j,_ as G}from"./index-dU_m1vnq.js";import{C as i}from"./CodeBlock-BwJOGh4v.js";import{R as K}from"./ReferenceSection-x4_mLSMB.js";const Q={class:"module-content"},Z={class:"topic-section"},ee={class:"cards-grid"},ae={class:"card info"},ne={class:"sandbox-area"},oe={key:0,class:"dialog-result"},se={class:"result-value"},te={class:"card recommended"},ie={class:"live-info-grid"},le={class:"live-info-item"},re={class:"live-value"},de={class:"live-info-item"},ce={class:"live-value"},ue={class:"live-info-item"},ve={class:"live-value"},pe={class:"live-info-item"},me={class:"live-value"},ge={class:"topic-section"},fe={class:"cards-grid"},be={class:"card info"},we={class:"live-info-grid"},he={class:"live-info-item"},je={class:"live-value url-value"},xe={class:"live-info-item"},Ee={class:"live-value"},Te={class:"live-info-item"},Ae={class:"live-value"},ye={class:"live-info-item"},Ie={class:"live-value"},ke={class:"card recommended"},Ce={class:"topic-section"},Pe={class:"cards-grid"},Se={class:"card info"},qe={class:"card recommended"},_e={class:"topic-section"},De={class:"cards-grid"},Le={class:"card info"},ze={class:"card recommended"},Me={class:"live-nav-info"},Re={class:"nav-info-grid"},Ue={class:"nav-info-item"},Ne={class:"nav-value"},He={class:"nav-info-item"},Oe={class:"nav-info-item"},Fe={class:"nav-value"},$e={class:"nav-info-item"},Ve={class:"nav-value"},We={class:"nav-info-item"},Be={class:"nav-value"},Xe={class:"nav-info-item nav-item-wide"},Ye={class:"nav-value nav-ua"},Je={class:"topic-section"},Ge={class:"cards-grid"},Ke={class:"card info"},Qe={class:"card recommended"},Ze={class:"timer-sandbox"},ea={class:"timer-panels"},aa={class:"timer-panel"},na={class:"timer-controls"},oa={class:"timer-label"},sa=["disabled"],ta={key:0,class:"timer-output"},ia={class:"timer-panel"},la={class:"clock-display"},ra={class:"timer-controls"},da={class:"tick-count"},ca={class:"topic-section"},ua={class:"cards-grid"},va={class:"card info"},pa={class:"card recommended"},ma=V({__name:"ObjetosNativosJS",setup(ga){const b=n(0),w=n(0),x=n(0),E=n(1),T=n(""),A=n(""),y=n(""),I=n(""),k=n(""),c=n(!0),C=n(!1),P=n(0),S=n(0),q=n(""),r=n(""),U=()=>{window.alert("Esto es un alert() de window!"),r.value="alert() ejecutado (sin valor de retorno)"},N=()=>{const l=window.prompt("Escribe tu nombre:");l!==null?r.value=`prompt() devolvio: "${l}"`:r.value="prompt() devolvio: null (cancelado)"},H=()=>{const l=window.confirm("Confirma la accion?");r.value=`confirm() devolvio: ${l}`},d=n(2e3),u=n(!1),m=n(""),g=n(0);let v=null;const O=()=>{u.value||(u.value=!0,m.value="",g.value=Math.round(d.value/1e3),v=setInterval(()=>{g.value=Math.max(0,g.value-1)},1e3),setTimeout(()=>{u.value=!1,m.value=`Callback ejecutado despues de ${d.value}ms`,v&&clearInterval(v)},d.value))},f=n(!1),_=n("--:--:--"),D=n(0);let p=null;const L=()=>{const l=new Date;_.value=l.toLocaleTimeString("es-MX",{hour12:!1}),D.value++},F=()=>{f.value?(p&&clearInterval(p),f.value=!1):(L(),p=setInterval(L,1e3),f.value=!0)},z=()=>{x.value=Math.round(window.scrollY)},M=()=>{b.value=window.innerWidth,w.value=window.innerHeight};return W(()=>{b.value=window.innerWidth,w.value=window.innerHeight,E.value=window.devicePixelRatio,window.addEventListener("resize",M),window.addEventListener("scroll",z,{passive:!0}),T.value=window.location.href,A.value=window.location.pathname,y.value=window.location.protocol,I.value=window.location.hostname,k.value=navigator.language,c.value=navigator.onLine,C.value=navigator.cookieEnabled,P.value=navigator.hardwareConcurrency,S.value=navigator.maxTouchPoints,q.value=navigator.userAgent,window.addEventListener("online",()=>{c.value=!0}),window.addEventListener("offline",()=>{c.value=!1})}),B(()=>{window.removeEventListener("resize",M),window.removeEventListener("scroll",z),p&&clearInterval(p),v&&clearInterval(v)}),(l,a)=>(j(),h("div",Q,[a[54]||(a[54]=e("div",{class:"header-section"},[e("h1",{class:"main-title js"},"Objetos Nativos & Timers"),e("p",{class:"subtitle"},"El navegador expone objetos globales que permiten interactuar con la ventana, la URL, el historial, el dispositivo y el tiempo.")],-1)),e("section",Z,[a[11]||(a[11]=e("h2",{class:"section-title js"},"El Objeto window",-1)),a[12]||(a[12]=e("p",{class:"section-desc"},[e("code",null,"window"),s(" es el objeto global del navegador. Todas las variables globales, funciones y APIs del navegador son propiedades suyas. Al ser global, se puede omitir "),e("code",null,"window."),s(" al acceder a sus miembros.")],-1)),e("div",ee,[e("div",ae,[a[3]||(a[3]=e("div",{class:"card-header"},[e("h3",null,"Dialogos del Navegador")],-1)),a[4]||(a[4]=e("p",null,"Tres metodos clasicos para mostrar informacion o pedir confirmacion al usuario. Se usan con moderacion en aplicaciones modernas ya que bloquean el hilo principal.",-1)),t(i,{language:"javascript",code:`// Muestra un mensaje. El usuario solo puede cerrar.
window.alert('Operacion completada!');
alert('Equivalente, window es implicito');

// Solicita texto al usuario. Devuelve string o null (si cancela).
const nombre = window.prompt('Como te llamas?', 'Alex');
if (nombre !== null) {
  console.log(\`Hola, \${nombre}!\`);
}

// Solicita confirmacion. Devuelve true (Aceptar) o false (Cancelar).
const confirmado = window.confirm('Estas seguro de eliminar esto?');
if (confirmado) {
  eliminarElemento();
}`}),e("div",ne,[a[2]||(a[2]=e("h5",null,"Prueba los dialogos:",-1)),e("div",{class:"sandbox-btns"},[e("button",{class:"sandbox-btn btn-alert",onClick:U},"alert()"),e("button",{class:"sandbox-btn btn-prompt",onClick:N},"prompt()"),e("button",{class:"sandbox-btn btn-confirm",onClick:H},"confirm()")]),r.value?(j(),h("div",oe,[a[1]||(a[1]=e("span",{class:"result-label"},"Resultado:",-1)),e("span",se,o(r.value),1)])):R("",!0)])]),e("div",te,[a[9]||(a[9]=e("div",{class:"card-header"},[e("h3",null,"Propiedades de Dimensiones")],-1)),a[10]||(a[10]=e("p",null,[s("Propiedades de "),e("code",null,"window"),s(" para obtener el tamano de la ventana y el desplazamiento del scroll:")],-1)),t(i,{language:"javascript",code:`// Dimensiones del viewport (area visible del navegador)
console.log(window.innerWidth);   // Ancho en px
console.log(window.innerHeight);  // Alto en px

// Dimensiones incluyendo barras de herramientas del navegador
console.log(window.outerWidth);
console.log(window.outerHeight);

// Posicion actual del scroll
console.log(window.scrollX);  // Desplazamiento horizontal
console.log(window.scrollY);  // Desplazamiento vertical

// Scroll programatico
window.scrollTo({ top: 0, behavior: 'smooth' });       // Al inicio
window.scrollBy({ top: 300, behavior: 'smooth' });     // Desplazar 300px
window.scrollTo({ top: document.body.scrollHeight });  // Al final`}),e("div",ie,[e("div",le,[a[5]||(a[5]=e("span",{class:"live-label"},"innerWidth",-1)),e("span",re,o(b.value)+"px",1)]),e("div",de,[a[6]||(a[6]=e("span",{class:"live-label"},"innerHeight",-1)),e("span",ce,o(w.value)+"px",1)]),e("div",ue,[a[7]||(a[7]=e("span",{class:"live-label"},"scrollY",-1)),e("span",ve,o(x.value)+"px",1)]),e("div",pe,[a[8]||(a[8]=e("span",{class:"live-label"},"devicePixelRatio",-1)),e("span",me,o(E.value),1)])])])])]),a[55]||(a[55]=e("hr",{class:"divider"},null,-1)),e("section",ge,[a[19]||(a[19]=e("h2",{class:"section-title js"},"window.location",-1)),a[20]||(a[20]=e("p",{class:"section-desc"},[s("El objeto "),e("code",null,"location"),s(" representa la URL actual del documento. Permite leerla, analizarla en partes y navegar programaticamente.")],-1)),e("div",fe,[e("div",be,[a[17]||(a[17]=e("div",{class:"card-header"},[e("h3",null,"Propiedades de location")],-1)),t(i,{language:"javascript",code:`// URL completa: https://app.com:8080/ruta?q=valor#seccion
location.href     // 'https://app.com:8080/ruta?q=valor#seccion'
location.protocol // 'https:'
location.host     // 'app.com:8080'
location.hostname // 'app.com'
location.port     // '8080'
location.pathname // '/ruta'
location.search   // '?q=valor'
location.hash     // '#seccion'
location.origin   // 'https://app.com:8080'`}),e("div",we,[e("div",he,[a[13]||(a[13]=e("span",{class:"live-label"},"href",-1)),e("span",je,o(T.value),1)]),e("div",xe,[a[14]||(a[14]=e("span",{class:"live-label"},"pathname",-1)),e("span",Ee,o(A.value),1)]),e("div",Te,[a[15]||(a[15]=e("span",{class:"live-label"},"protocol",-1)),e("span",Ae,o(y.value),1)]),e("div",ye,[a[16]||(a[16]=e("span",{class:"live-label"},"hostname",-1)),e("span",Ie,o(I.value),1)])])]),e("div",ke,[a[18]||(a[18]=e("div",{class:"card-header"},[e("h3",null,"Metodos de location")],-1)),t(i,{language:"javascript",code:`// Navegar a una nueva URL (agrega entrada al historial)
location.assign('https://nueva-url.com');

// Reemplazar la URL actual (NO agrega entrada al historial)
// El usuario no puede volver atras con el boton Back
location.replace('https://nueva-url.com');

// Recargar la pagina actual
location.reload();

// Navegar cambiando la propiedad href (igual que assign)
location.href = 'https://nueva-url.com';

// Modificar solo el hash (no recarga la pagina)
location.hash = '#seccion-contacto';

// Leer parametros de busqueda modernamente
const params = new URLSearchParams(location.search);
const query = params.get('q');         // null si no existe
const page  = params.get('page') ?? '1'; // con valor por defecto
console.log(query, page);`})])])]),a[56]||(a[56]=e("hr",{class:"divider"},null,-1)),e("section",Ce,[a[24]||(a[24]=e("h2",{class:"section-title js"},"window.history",-1)),a[25]||(a[25]=e("p",{class:"section-desc"},[s("El objeto "),e("code",null,"history"),s(" da acceso al historial de sesion del navegador. Es la base de la navegacion programatica en SPAs (Single Page Applications) como Vue o React.")],-1)),e("div",Pe,[e("div",Se,[a[21]||(a[21]=e("div",{class:"card-header"},[e("h3",null,"Metodos Clasicos")],-1)),t(i,{language:"javascript",code:`// Equivalente al boton Atras del navegador
history.back();

// Equivalente al boton Adelante del navegador
history.forward();

// Navegar N pasos en el historial
history.go(-1);  // Una pagina atras (igual que back())
history.go(1);   // Una pagina adelante (igual que forward())
history.go(-3);  // Tres paginas atras

// Cantidad de entradas en el historial de esta sesion
console.log(history.length);`})]),e("div",qe,[a[22]||(a[22]=e("div",{class:"card-header"},[e("h3",null,"History API Moderna (pushState / replaceState)")],-1)),a[23]||(a[23]=e("p",null,"Permite cambiar la URL sin recargar la pagina. Es la base de los routers de frameworks modernos.",-1)),t(i,{language:"javascript",code:`// pushState: Agrega una nueva entrada al historial
// history.pushState(state, title, url)
history.pushState({ pagina: 2 }, '', '/productos?pagina=2');
// La URL cambia, pero el servidor NO recibe ninguna peticion

// replaceState: Modifica la entrada actual (sin agregar al historial)
history.replaceState({ filtro: 'ropa' }, '', '/tienda?cat=ropa');

// Detectar cuando el usuario navega con Atras / Adelante
window.addEventListener('popstate', (event) => {
  console.log('Navegacion detectada:', event.state);
  // event.state contiene el objeto pasado a pushState/replaceState
  // aqui actualizarias la UI segun el estado
});

// Ejemplo real en una SPA:
function navegarA(ruta, estado = {}) {
  history.pushState(estado, '', ruta);
  renderizarPagina(ruta); // Funcion propia que actualiza el DOM
}`})])])]),a[57]||(a[57]=e("hr",{class:"divider"},null,-1)),e("section",_e,[a[35]||(a[35]=e("h2",{class:"section-title js"},"window.navigator",-1)),a[36]||(a[36]=e("p",{class:"section-desc"},[s("El objeto "),e("code",null,"navigator"),s(" provee informacion sobre el estado e identidad del navegador y del dispositivo del usuario.")],-1)),e("div",De,[e("div",Le,[a[26]||(a[26]=e("div",{class:"card-header"},[e("h3",null,"Propiedades de navigator")],-1)),t(i,{language:"javascript",code:`// Informacion del navegador (puede ser falseada por el usuario)
navigator.userAgent    // Cadena completa del user agent
navigator.language     // Idioma preferido del usuario: 'es-MX', 'en-US'
navigator.languages    // ['es-MX', 'en', 'fr'] — lista de idiomas
navigator.onLine       // true/false — si tiene conexion a internet
navigator.cookieEnabled // true/false — si las cookies estan habilitadas
navigator.hardwareConcurrency // Numero de nucleos logicos de la CPU
navigator.maxTouchPoints      // Numero de puntos de toque (0 si no es tactil)`})]),e("div",ze,[a[27]||(a[27]=e("div",{class:"card-header"},[e("h3",null,"APIs de navigator (Modernas)")],-1)),t(i,{language:"javascript",code:`// Geolocalizacion — solicita permiso al usuario
navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(pos.coords.latitude, pos.coords.longitude);
  },
  (error) => console.error('Permiso denegado', error)
);

// Copiar texto al portapapeles (requiere HTTPS)
await navigator.clipboard.writeText('Texto copiado!');
const texto = await navigator.clipboard.readText();

// Compartir contenido (Web Share API — moviles)
await navigator.share({
  title: 'Mi app',
  text: 'Mira este articulo increible!',
  url: 'https://mi-app.com/articulo/1',
});

// Detectar si la app esta instalada como PWA
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  // Guarda el evento para mostrarlo cuando el usuario lo pida
  deferredPrompt = e;
});`})])]),e("div",Me,[a[34]||(a[34]=e("h4",{class:"live-title"},"Datos del navegador en tiempo real:",-1)),e("div",Re,[e("div",Ue,[a[28]||(a[28]=e("span",{class:"nav-label"},"language",-1)),e("span",Ne,o(k.value),1)]),e("div",He,[a[29]||(a[29]=e("span",{class:"nav-label"},"onLine",-1)),e("span",{class:X(["nav-value",c.value?"online":"offline"])},o(c.value?"true":"false"),3)]),e("div",Oe,[a[30]||(a[30]=e("span",{class:"nav-label"},"cookieEnabled",-1)),e("span",Fe,o(C.value),1)]),e("div",$e,[a[31]||(a[31]=e("span",{class:"nav-label"},"hardwareConcurrency",-1)),e("span",Ve,o(P.value),1)]),e("div",We,[a[32]||(a[32]=e("span",{class:"nav-label"},"maxTouchPoints",-1)),e("span",Be,o(S.value),1)]),e("div",Xe,[a[33]||(a[33]=e("span",{class:"nav-label"},"userAgent",-1)),e("span",Ye,o(q.value),1)])])])]),a[58]||(a[58]=e("hr",{class:"divider"},null,-1)),e("section",Je,[a[47]||(a[47]=e("h2",{class:"section-title js"},"Timers: setTimeout y setInterval",-1)),a[48]||(a[48]=e("p",{class:"section-desc"},"Los timers permiten ejecutar codigo de forma diferida o de manera repetida. Funcionan de forma asincrona: el codigo registrado se ejecuta en el futuro, despues de que el hilo principal haya procesado las tareas actuales.",-1)),e("div",Ge,[e("div",Ke,[a[37]||(a[37]=e("div",{class:"card-header"},[e("h3",null,"setTimeout — Ejecucion Diferida")],-1)),a[38]||(a[38]=e("p",null,[s("Ejecuta una funcion "),e("strong",null,"una sola vez"),s(" despues de un retardo especificado en milisegundos.")],-1)),t(i,{language:"javascript",code:`// Sintaxis: setTimeout(callback, retardoMs, ...args)
const id = setTimeout(() => {
  console.log('Han pasado 2 segundos');
}, 2000);

// Cancelar antes de que se ejecute
clearTimeout(id);

// Pasar argumentos al callback
setTimeout((nombre, accion) => {
  console.log(\`\${nombre} ha realizado: \${accion}\`);
}, 1000, 'Alex', 'guardar');

// setTimeout con 0ms: se ejecuta al final del event loop actual
// Util para diferir codigo sin bloquear el renderizado
setTimeout(() => {
  actualizarUI();
}, 0);`})]),e("div",Qe,[a[39]||(a[39]=e("div",{class:"card-header"},[e("h3",null,"setInterval — Ejecucion Repetida")],-1)),a[40]||(a[40]=e("p",null,[s("Ejecuta una funcion "),e("strong",null,"repetidamente"),s(" cada N milisegundos, hasta que sea cancelada.")],-1)),t(i,{language:"javascript",code:`// Sintaxis: setInterval(callback, intervaloMs, ...args)
let contador = 0;
const id = setInterval(() => {
  contador++;
  console.log(\`Tick #\${contador}\`);

  // Siempre limpia el intervalo cuando ya no lo necesites
  if (contador >= 5) {
    clearInterval(id);
    console.log('Intervalo detenido');
  }
}, 1000);

// Patron: intervalo recursivo con setTimeout
// Mas robusto que setInterval (evita solapamiento si el callback es lento)
function tick() {
  realizarTarea();
  setTimeout(tick, 1000); // El siguiente tick se programa DESPUES de terminar
}
setTimeout(tick, 1000);`})])]),e("div",Ze,[a[46]||(a[46]=e("div",{class:"sandbox-header"},[e("h4",null,"Sandbox: Timers en Accion")],-1)),e("div",ea,[e("div",aa,[a[42]||(a[42]=e("h5",null,"setTimeout",-1)),a[43]||(a[43]=e("p",null,"Ejecuta el callback una vez despues del retardo.",-1)),e("div",na,[e("label",oa,[a[41]||(a[41]=s("Retardo: ")),e("strong",null,o(d.value)+"ms",1)]),Y(e("input",{type:"range","onUpdate:modelValue":a[0]||(a[0]=$=>d.value=$),min:"500",max:"5000",step:"500",class:"range-input"},null,512),[[J,d.value,void 0,{number:!0}]])]),e("button",{class:"sandbox-btn btn-timer",onClick:O,disabled:u.value},o(u.value?`Esperando (${g.value}s)...`:"Ejecutar setTimeout"),9,sa),m.value?(j(),h("div",ta,o(m.value),1)):R("",!0)]),e("div",ia,[a[44]||(a[44]=e("h5",null,"setInterval",-1)),a[45]||(a[45]=e("p",null,"El reloj se actualiza cada segundo usando setInterval.",-1)),e("div",la,o(_.value),1),e("div",ra,[e("button",{class:"sandbox-btn btn-timer",onClick:F},o(f.value?"Detener reloj":"Iniciar reloj"),1),e("span",da,"Ticks: "+o(D.value),1)])])])])]),a[59]||(a[59]=e("hr",{class:"divider"},null,-1)),e("section",ca,[a[52]||(a[52]=e("h2",{class:"section-title js"},"requestAnimationFrame",-1)),a[53]||(a[53]=e("p",{class:"section-desc"},[e("code",null,"requestAnimationFrame"),s(" (rAF) es el timer moderno para animaciones. A diferencia de "),e("code",null,"setInterval"),s(", sincroniza la ejecucion con el ciclo de refresco del navegador (generalmente 60fps), resultando en animaciones mas suaves y eficientes en bateria.")],-1)),e("div",ua,[e("div",va,[a[49]||(a[49]=e("div",{class:"card-header"},[e("h3",null,"Animacion con rAF")],-1)),t(i,{language:"javascript",code:`let posicion = 0;
let animId;

function animar(timestamp) {
  // timestamp: ms desde que empezo la pagina (DOMHighResTimeStamp)
  posicion += 2;
  elemento.style.transform = \`translateX(\${posicion}px)\`;

  if (posicion < 300) {
    animId = requestAnimationFrame(animar); // Pedir el siguiente frame
  }
}

// Iniciar
animId = requestAnimationFrame(animar);

// Cancelar
cancelAnimationFrame(animId);

// Comparacion de rendimiento:
// setInterval(fn, 16)      — puede desincronizarse, consume CPU aunque la pestaña este oculta
// requestAnimationFrame()  — pausa automaticamente si la pestaña no es visible (ahorra bateria)`})]),e("div",pa,[a[50]||(a[50]=e("div",{class:"card-header"},[e("h3",null,"rAF con delta de tiempo")],-1)),a[51]||(a[51]=e("p",null,"Usar la diferencia de tiempo entre frames garantiza animaciones a la misma velocidad independientemente del framerate del dispositivo.",-1)),t(i,{language:"javascript",code:`let ultimoTimestamp = null;
const VELOCIDAD = 100; // px por segundo

function animar(timestamp) {
  if (ultimoTimestamp === null) {
    ultimoTimestamp = timestamp;
  }

  const delta = (timestamp - ultimoTimestamp) / 1000; // segundos
  ultimoTimestamp = timestamp;

  // La posicion aumenta en VELOCIDAD px/s independientemente del fps
  posicion += VELOCIDAD * delta;
  elemento.style.transform = \`translateX(\${posicion}px)\`;

  if (posicion < 500) {
    requestAnimationFrame(animar);
  }
}

requestAnimationFrame(animar);`})])])]),a[60]||(a[60]=e("hr",{class:"divider"},null,-1)),t(K,{references:[{techId:"js",moduleId:"eventos",text:"Eventos de JavaScript"},{techId:"js",moduleId:"dom",text:"DOM: Seleccion y Manipulacion"}]})]))}}),ha=G(ma,[["__scopeId","data-v-7a466bc2"]]);export{ha as default};
