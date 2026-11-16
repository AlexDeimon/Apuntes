import{d as u,u as g,c as v,b as e,e as n,f as s,w as m,a as l,p as f,o as b}from"./index-CXlchLrO.js";import{C as r}from"./CodeBlock-3ngvlDVi.js";import{R as j}from"./ReferenceSection-CcFa2ylv.js";const x={class:"module-content"},y={class:"topic-section"},E={class:"topic-section"},S={class:"cards-grid"},T={class:"card recommended"},q={class:"card info"},I={class:"cards-grid"},P={class:"card info"},R={class:"card info"},C={class:"cards-grid"},N={class:"card info"},w={class:"card info"},D={class:"topic-section"},M={class:"cards-grid"},k={class:"card info"},G={class:"card info"},U={class:"card warning"},A={class:"topic-section"},$={class:"cards-grid"},z={class:"card info"},B={class:"card warning"},F={class:"card info"},L={class:"card info"},O={class:"card info"},V={class:"card info"},K={class:"card info"},W={class:"card info"},h={class:"card info"},H={class:"topic-section"},Y={class:"cards-grid"},J={class:"card info"},Q={class:"card info"},X={class:"card warning"},Z={class:"card warning"},_={class:"card warning"},ee={class:"card info"},oe={class:"card info"},se={class:"topic-section"},ne={class:"card recommended"},ie=u({__name:"ProcessNode",setup(re){const t=g(),c=(a,o)=>{var i;const d=(i=f[a])==null?void 0:i.find(p=>p.id===o);d&&t.addTab({id:`${a}-${o}`,title:d.name,route:`/${a}/${o}`,moduleId:o,techId:a})};return(a,o)=>(b(),v("div",x,[o[70]||(o[70]=e("div",{class:"header-section"},[e("h1",{class:"main-title node"},"Objeto Process"),e("p",{class:"subtitle"},"Interacción con el entorno de ejecución, el sistema operativo y el ciclo de vida de la aplicación.")],-1)),e("section",y,[o[1]||(o[1]=e("h2",{class:"section-title node"},"¿Qué es Process?",-1)),o[2]||(o[2]=e("p",{class:"section-desc"},[e("code",null,"process"),s(" es un objeto "),e("strong",null,"global"),s(" de Node.js que proporciona información y control sobre el proceso actual de ejecución. Al ser global, no requiere ser importado, aunque también puedes hacerlo de forma explícita con el prefijo "),e("code",null,"node:"),s(".")],-1)),n(r,{language:"javascript",code:`// Global: disponible sin importar nada
console.log(process.pid);

// Importación explícita (opcional, útil para claridad y en ESM)
import process from 'node:process';
// CommonJS: const process = require('node:process');`}),o[3]||(o[3]=e("div",{class:"info-box"},[e("p",null,"Es fundamental para leer argumentos de la terminal, consultar el entorno de ejecución, gestionar el ciclo de vida de la aplicación (señales, cierre, errores) y comunicarte con la entrada/salida estándar.")],-1))]),o[71]||(o[71]=e("hr",{class:"divider"},null,-1)),e("section",E,[o[20]||(o[20]=e("h2",{class:"section-title node"},"Propiedades Útiles",-1)),e("div",S,[e("div",T,[o[7]||(o[7]=e("div",{class:"card-header"},[e("h3",null,"process.env"),e("span",{class:"badge success"},"Crítico")],-1)),o[8]||(o[8]=e("p",null,[s("Objeto con las "),e("strong",null,"variables de entorno"),s(" del proceso. Todos sus valores son "),e("strong",null,"strings"),s(". Se usa para configurar puertos, claves y conexiones sin escribirlas en el código.")],-1)),n(r,{language:"javascript",code:`const PORT = Number(process.env.PORT) || 3000;
const DB_URL = process.env.DATABASE_URL;`}),e("p",null,[o[4]||(o[4]=s("Para archivos ")),o[5]||(o[5]=e("code",null,".env",-1)),o[6]||(o[6]=s(", valores por defecto, validación y seguridad, consulta el módulo ")),e("a",{href:"#",onClick:o[0]||(o[0]=m(d=>c("nodejs","envvars"),["prevent"])),class:"link-external"},"Variables de Entorno →")])]),e("div",q,[o[9]||(o[9]=e("div",{class:"card-header"},[e("h3",null,"process.argv")],-1)),o[10]||(o[10]=e("p",null,[s("Un array con los "),e("strong",null,"argumentos"),s(" pasados por la línea de comandos al ejecutar el script.")],-1)),o[11]||(o[11]=e("p",null,[s("El primer elemento es la ruta del ejecutable de Node.js, el segundo es la ruta del archivo JavaScript que se está ejecutando, y los elementos restantes son los argumentos pasados al script. Por eso se suele usar "),e("code",null,"process.argv.slice(2)"),s(" para obtener solo los argumentos del usuario.")],-1)),n(r,{language:"bash",code:"node app.js --nombre=Diego --modo=dev"}),n(r,{language:"javascript",code:`// app.js
console.log(process.argv);
// [
//   '/usr/local/bin/node',      // ejecutable de Node.js
//   '/home/diego/app.js',       // script en ejecución
//   '--nombre=Diego',
//   '--modo=dev'
// ]

const args = process.argv.slice(2);
console.log(args); // [ '--nombre=Diego', '--modo=dev' ]`}),o[12]||(o[12]=e("p",null,[s("Para analizar flags y opciones sin parsear a mano, Node incluye "),e("code",null,"util.parseArgs"),s(":")],-1)),n(r,{language:"javascript",code:`import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    nombre: { type: 'string' },
    modo: { type: 'string', default: 'prod' },
    verbose: { type: 'boolean', short: 'v' },
  },
});

console.log(values); // { nombre: 'Diego', modo: 'dev' }`})])]),o[21]||(o[21]=e("br",null,null,-1)),o[22]||(o[22]=e("br",null,null,-1)),e("div",I,[e("div",P,[o[13]||(o[13]=l('<div class="card-header"><h3>process.platform y process.arch</h3></div><p><code>platform</code> indica el sistema operativo (<code>&#39;win32&#39;</code>, <code>&#39;linux&#39;</code>, <code>&#39;darwin&#39;</code>) y <code>arch</code> la arquitectura del procesador (<code>&#39;x64&#39;</code>, <code>&#39;arm64&#39;</code>…). Nota: en Windows siempre es <code>&#39;win32&#39;</code>, incluso en sistemas de 64 bits.</p>',2)),n(r,{language:"javascript",code:`if (process.platform === 'win32') {
  console.log('Ejecutando en Windows');
}

console.log(process.arch); // 'x64'`})]),e("div",R,[o[14]||(o[14]=e("div",{class:"card-header"},[e("h3",null,"process.pid")],-1)),o[15]||(o[15]=e("p",null,[s("Retorna el "),e("strong",null,"ID del proceso"),s(" actual en el sistema operativo.")],-1)),n(r,{language:"javascript",code:"console.log(process.pid);"})])]),o[23]||(o[23]=e("br",null,null,-1)),o[24]||(o[24]=e("br",null,null,-1)),e("div",C,[e("div",N,[o[16]||(o[16]=e("div",{class:"card-header"},[e("h3",null,"process.version y process.versions")],-1)),o[17]||(o[17]=e("p",null,[e("code",null,"version"),s(" retorna la "),e("strong",null,"versión de Node.js"),s(" en uso. "),e("code",null,"versions"),s(" es un objeto con la versión de Node y de sus dependencias internas (V8, libuv, OpenSSL…).")],-1)),n(r,{language:"javascript",code:`console.log(process.version);  // 'v24.x.x'
console.log(process.versions.v8); // versión del motor V8`})]),e("div",w,[o[18]||(o[18]=e("div",{class:"card-header"},[e("h3",null,"process.title")],-1)),o[19]||(o[19]=e("p",null,[s("Nombre con el que el proceso aparece en el administrador de tareas o en "),e("code",null,"ps"),s(". Se puede leer y modificar.")],-1)),n(r,{language:"javascript",code:`process.title = 'mi-api-usuarios';
console.log(process.title);`})])])]),o[72]||(o[72]=e("hr",{class:"divider"},null,-1)),e("section",D,[o[31]||(o[31]=e("h2",{class:"section-title node"},"Entrada y Salida Estándar (Streams)",-1)),o[32]||(o[32]=e("p",{class:"section-desc"},[e("code",null,"process.stdin"),s(", "),e("code",null,"process.stdout"),s(" y "),e("code",null,"process.stderr"),s(" son "),e("strong",null,"propiedades"),s(" que exponen los flujos estándar del proceso como "),e("strong",null,"streams"),s(".")],-1)),e("div",M,[e("div",k,[o[25]||(o[25]=e("div",{class:"card-header"},[e("h3",null,"process.stdin")],-1)),o[26]||(o[26]=e("p",null,[s("Flujo de "),e("strong",null,"entrada estándar"),s(" (STDIN): lo que el usuario escribe en la terminal o lo que otro programa envía por una tubería ("),e("em",null,"pipe"),s(").")],-1)),n(r,{language:"javascript",code:`process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log('Recibido:', data.trim());
});

// Útil para detectar si hay una persona en la terminal:
console.log(process.stdin.isTTY); // true en terminal, undefined con pipe`})]),e("div",G,[o[27]||(o[27]=e("div",{class:"card-header"},[e("h3",null,"process.stdout"),e("span",{class:"badge info"},"Writable")],-1)),o[28]||(o[28]=e("p",null,[s("Flujo de "),e("strong",null,"salida estándar"),s(" (STDOUT). Es lo que usa "),e("code",null,"console.log"),s(" internamente, pero sin añadir salto de línea automático.")],-1)),n(r,{language:"javascript",code:"process.stdout.write('Hola, mundo!\\n');"})]),e("div",U,[o[29]||(o[29]=e("div",{class:"card-header"},[e("h3",null,"process.stderr"),e("span",{class:"badge danger"},"Errores")],-1)),o[30]||(o[30]=e("p",null,[s("Flujo de "),e("strong",null,"salida de error"),s(" (STDERR). Separa los mensajes de error de la salida normal, lo que permite redirigirlos por separado ("),e("code",null,"node app.js 2> errores.log"),s(").")],-1)),n(r,{language:"javascript",code:`process.stderr.write('Error: algo salió mal\\n');
// Equivalente de más alto nivel:
console.error('Error: algo salió mal');`})])])]),o[73]||(o[73]=e("hr",{class:"divider"},null,-1)),e("section",A,[o[49]||(o[49]=e("h2",{class:"section-title node"},"Métodos Frecuentes",-1)),e("div",$,[e("div",z,[o[33]||(o[33]=e("div",{class:"card-header"},[e("h3",null,"process.cwd()")],-1)),o[34]||(o[34]=e("p",null,[s("Retorna el "),e("strong",null,"directorio de trabajo actual"),s(" (Current Working Directory) desde donde se lanzó el proceso. No es necesariamente la carpeta donde vive el script.")],-1)),n(r,{language:"javascript",code:`console.log(process.cwd());
// /Users/diego/project`})]),e("div",B,[o[35]||(o[35]=l('<div class="card-header"><h3>process.exit() y process.exitCode</h3><span class="badge danger">Uso Cuidado</span></div><p><code>process.exit(code)</code> finaliza el proceso de Node.js <strong>de forma inmediata</strong>: puede cortar escrituras pendientes y operaciones asíncronas. Por convención, <code>0</code> significa éxito y cualquier otro valor (normalmente <code>1</code>) indica error.</p><p>Siempre que sea posible, es preferible asignar <code>process.exitCode</code> y dejar que el programa termine por sí solo cuando no quede trabajo pendiente.</p>',3)),n(r,{language:"javascript",code:`// Salida inmediata (puede perder trabajo pendiente)
if (!process.env.API_KEY) {
  console.error('Falta API_KEY');
  process.exit(1);
}

// Recomendado: marcar el código y dejar terminar con normalidad
process.exitCode = 1;`})]),e("div",F,[o[36]||(o[36]=l('<div class="card-header"><h3>process.memoryUsage()</h3></div><p>Retorna un objeto con el uso de memoria en <strong>bytes</strong>. Sus campos principales son <code>rss</code> (memoria total residente), <code>heapTotal</code> y <code>heapUsed</code> (heap de V8), <code>external</code> y <code>arrayBuffers</code>.</p>',2)),n(r,{language:"javascript",code:"const { rss, heapUsed } = process.memoryUsage();\nconsole.log(`RSS: ${(rss / 1024 / 1024).toFixed(1)} MB`);\nconsole.log(`Heap usado: ${(heapUsed / 1024 / 1024).toFixed(1)} MB`);\n\n// Versión rápida que solo devuelve el RSS:\nconsole.log(process.memoryUsage.rss());"})]),e("div",L,[o[37]||(o[37]=e("div",{class:"card-header"},[e("h3",null,"process.uptime()")],-1)),o[38]||(o[38]=e("p",null,[s("Retorna el tiempo que lleva activo el proceso, en "),e("strong",null,"segundos"),s(" (con decimales).")],-1)),n(r,{language:"javascript",code:"console.log(process.uptime()); // 12.345"})]),e("div",O,[o[39]||(o[39]=e("div",{class:"card-header"},[e("h3",null,"process.cpuUsage()")],-1)),o[40]||(o[40]=e("p",null,[s("Retorna el uso de CPU del proceso como "),e("code",null,"{ user, system }"),s(", expresado en "),e("strong",null,"microsegundos"),s(" (1 000 000 µs = 1 s). "),e("code",null,"user"),s(" es el tiempo ejecutando tu código y "),e("code",null,"system"),s(" el tiempo en llamadas al sistema operativo.")],-1)),n(r,{language:"javascript",code:"const inicio = process.cpuUsage();\n// ... trabajo intensivo ...\nconst uso = process.cpuUsage(inicio); // diferencia desde 'inicio'\nconsole.log(`CPU usuario: ${uso.user / 1000} ms`);\nconsole.log(`CPU sistema: ${uso.system / 1000} ms`);"})]),e("div",V,[o[41]||(o[41]=e("div",{class:"card-header"},[e("h3",null,"process.hrtime.bigint()"),e("span",{class:"badge info"},"Alta precisión")],-1)),o[42]||(o[42]=e("p",null,[s("Reloj monotónico de alta resolución, en "),e("strong",null,"nanosegundos"),s(" ("),e("code",null,"BigInt"),s("). Es la forma correcta de medir el tiempo de ejecución, porque no se ve afectado por cambios en la hora del sistema.")],-1)),n(r,{language:"javascript",code:"const t0 = process.hrtime.bigint();\n// ... operación a medir ...\nconst t1 = process.hrtime.bigint();\nconsole.log(`Duración: ${Number(t1 - t0) / 1e6} ms`);"})]),e("div",K,[o[43]||(o[43]=e("div",{class:"card-header"},[e("h3",null,"process.nextTick()")],-1)),o[44]||(o[44]=e("p",null,[s("Encola un callback para ejecutarlo "),e("strong",null,"justo después de la operación actual"),s(", antes de continuar con el Event Loop (incluso antes que las promesas ya resueltas). Úsalo con moderación: abusar de él puede bloquear la fase de I/O.")],-1)),n(r,{language:"javascript",code:`console.log('1. Sincrónico');
process.nextTick(() => console.log('3. nextTick'));
Promise.resolve().then(() => console.log('4. Promesa'));
setTimeout(() => console.log('5. Timeout'), 0);
console.log('2. Sincrónico');`})]),e("div",W,[o[45]||(o[45]=e("div",{class:"card-header"},[e("h3",null,"process.kill(pid, señal)")],-1)),o[46]||(o[46]=e("p",null,[s("Envía una señal a un proceso por su PID. Si no se indica la señal, se usa "),e("code",null,"'SIGTERM'"),s(". Con "),e("code",null,"process.pid"),s(" puedes enviártela a ti mismo.")],-1)),n(r,{language:"javascript",code:`// Pedir a otro proceso que termine ordenadamente
process.kill(12345, 'SIGTERM');

// Comprobar si un proceso existe (señal 0 no mata nada)
try {
  process.kill(12345, 0);
  console.log('El proceso existe');
} catch {
  console.log('El proceso no existe');
}`})]),e("div",h,[o[47]||(o[47]=e("div",{class:"card-header"},[e("h3",null,"process.loadEnvFile()"),e("span",{class:"badge info"},"Node 20.12+ / 21.7+")],-1)),o[48]||(o[48]=e("p",null,[s("Carga un archivo "),e("code",null,".env"),s(" en "),e("code",null,"process.env"),s(" sin dependencias externas (por defecto lee "),e("code",null,"./.env"),s(").")],-1)),n(r,{language:"javascript",code:`process.loadEnvFile();            // ./.env
process.loadEnvFile('.env.local');  // ruta personalizada`})])])]),o[74]||(o[74]=e("hr",{class:"divider"},null,-1)),e("section",H,[o[64]||(o[64]=e("h2",{class:"section-title node"},"Eventos del Proceso",-1)),o[65]||(o[65]=e("p",{class:"section-desc"},"Podemos escuchar eventos del ciclo de vida del proceso para hacer limpieza, registrar fallos o apagar la aplicación de forma ordenada.",-1)),e("div",Y,[e("div",J,[o[50]||(o[50]=e("div",{class:"card-header"},[e("h3",null,"'exit'")],-1)),o[51]||(o[51]=e("p",null,[s("Se dispara cuando el proceso "),e("strong",null,"va a terminar"),s(", ya sea por "),e("code",null,"process.exit()"),s(" o porque el Event Loop quedó vacío. El Event Loop ya no seguirá procesando trabajo, por lo que el listener solo admite "),e("strong",null,"código síncrono"),s(".")],-1)),n(r,{language:"javascript",code:"process.on('exit', (code) => {\n  console.log(`Cerrando con código: ${code}`);\n  // Aquí NO funcionan setTimeout, promesas ni I/O asíncrono\n});"})]),e("div",Q,[o[52]||(o[52]=l('<div class="card-header"><h3>&#39;beforeExit&#39;</h3></div><p>Se dispara cuando el Event Loop <strong>se queda vacío</strong> y no hay más trabajo pendiente. A diferencia de <code>&#39;exit&#39;</code>, aquí <strong>sí puedes agendar trabajo asíncrono</strong> y el proceso seguirá vivo. <strong>No se emite</strong> con <code>process.exit()</code> ni ante excepciones no capturadas.</p>',2)),n(r,{language:"javascript",code:`let reintentos = 0;

process.on('beforeExit', (code) => {
  console.log(\`Event Loop vacío (código \${code})\`);
  if (reintentos++ < 1) {
    setTimeout(() => console.log('Trabajo extra agendado'), 100);
  }
});`})]),e("div",X,[o[53]||(o[53]=e("div",{class:"card-header"},[e("h3",null,"'uncaughtException'"),e("span",{class:"badge danger"},"Último recurso")],-1)),o[54]||(o[54]=e("p",null,[s("Se dispara con errores que "),e("strong",null,"no fueron capturados"),s(" por ningún "),e("code",null,"try/catch"),s(". Tras una de estas excepciones el estado de la aplicación es incierto, y la documentación de Node indica que "),e("strong",null,"no es seguro seguir funcionando con normalidad"),s(". El patrón correcto es registrar el error, liberar lo imprescindible y "),e("strong",null,"terminar el proceso"),s(" (idealmente para que un gestor como PM2, Docker o Kubernetes lo reinicie).")],-1)),n(r,{language:"javascript",code:`process.on('uncaughtException', (err, origen) => {
  console.error('Excepción no capturada:', err, 'Origen:', origen);
  // No continuar: salir con código de error
  process.exit(1);
});`}),o[55]||(o[55]=e("p",null,'Evita usarlo para "mantener viva" la aplicación ignorando el error: oculta fallos y deja datos o conexiones en estados inconsistentes.',-1))]),e("div",Z,[o[56]||(o[56]=e("div",{class:"card-header"},[e("h3",null,"'unhandledRejection'"),e("span",{class:"badge danger"},"Crítico")],-1)),o[57]||(o[57]=e("p",null,[s("Se dispara cuando una "),e("strong",null,"promesa es rechazada"),s(" y nadie la manejó con "),e("code",null,".catch()"),s(" o "),e("code",null,"try/catch"),s(". Desde Node 15, por defecto una promesa rechazada sin manejar "),e("strong",null,"termina el proceso"),s(" con error. Escucharlo sirve para registrar el fallo, no para ignorarlo.")],-1)),n(r,{language:"javascript",code:`process.on('unhandledRejection', (razon, promesa) => {
  console.error('Promesa rechazada sin manejar:', razon);
  process.exit(1);
});

// Esto dispara el evento (falta el .catch):
Promise.reject(new Error('Fallo en la base de datos'));`})]),e("div",_,[o[58]||(o[58]=e("div",{class:"card-header"},[e("h3",null,"'warning'")],-1)),o[59]||(o[59]=e("p",null,[s("Se dispara cuando Node emite una "),e("strong",null,"advertencia"),s(" del proceso (APIs obsoletas, posibles fugas de memoria, etc.).")],-1)),n(r,{language:"javascript",code:"process.on('warning', (warning) => {\n  console.warn(`${warning.name}: ${warning.message}`);\n});"})]),e("div",ee,[o[60]||(o[60]=e("div",{class:"card-header"},[e("h3",null,"'SIGINT'")],-1)),o[61]||(o[61]=e("p",null,[s("Se dispara cuando el proceso recibe una señal de interrupción ("),e("strong",null,"Ctrl+C"),s(" en la terminal).")],-1)),n(r,{language:"javascript",code:`process.on('SIGINT', () => {
  console.log('Proceso interrumpido (Ctrl+C)');
  process.exit(0);
});`})]),e("div",oe,[o[62]||(o[62]=e("div",{class:"card-header"},[e("h3",null,"'SIGTERM'")],-1)),o[63]||(o[63]=e("p",null,[s("Señal de "),e("strong",null,"terminación"),s(" estándar: es la que envían Docker, Kubernetes, PM2 o "),e("code",null,"kill"),s(" cuando quieren detener tu aplicación de forma ordenada.")],-1)),n(r,{language:"javascript",code:`process.on('SIGTERM', () => {
  console.log('Terminación solicitada');
  process.exit(0);
});`})])]),o[66]||(o[66]=l('<br><br><div class="card warning"><div class="card-header"><h3>Señales en Windows</h3><span class="badge danger">Compatibilidad</span></div><p>El soporte de señales en Windows es limitado. <code>SIGINT</code> funciona (Ctrl+C) y existe <code>SIGBREAK</code> (Ctrl+Pausa/Interrumpir), pero <code>SIGTERM</code> <strong>no se emite</strong> en Windows (se puede registrar un listener, pero no se dispara), y enviar <code>SIGTERM</code> o <code>SIGKILL</code> con <code>process.kill()</code> termina el proceso incondicionalmente sin ejecutar tus handlers. Si tu aplicación se despliega en Linux (Docker, Kubernetes), el apagado ordenado con <code>SIGTERM</code> sí funciona con normalidad.</p></div>',3))]),o[75]||(o[75]=e("hr",{class:"divider"},null,-1)),e("section",se,[o[68]||(o[68]=e("h2",{class:"section-title node"},"Apagado Ordenado (Graceful Shutdown)",-1)),o[69]||(o[69]=e("p",{class:"section-desc"},[s("Combinando señales con "),e("code",null,"server.close()"),s(" se evita cortar peticiones en curso al detener o redesplegar el servidor: primero se deja de aceptar conexiones nuevas, se esperan las activas y solo entonces se termina el proceso.")],-1)),e("div",ne,[o[67]||(o[67]=e("div",{class:"card-header"},[e("h3",null,"Patrón de apagado ordenado"),e("span",{class:"badge success"},"Producción")],-1)),n(r,{language:"javascript",code:`import http from 'node:http';

const server = http.createServer((req, res) => {
  res.end('Servidor activo');
});

server.listen(3000);

let cerrando = false;

function apagar(senal) {
  if (cerrando) return; // evitar ejecutar el cierre dos veces
  cerrando = true;
  console.log(\`Recibida \${senal}. Cerrando servidor...\`);

  // 1. Dejar de aceptar nuevas conexiones y esperar las activas
  server.close((err) => {
    if (err) {
      console.error('Error al cerrar:', err);
      process.exitCode = 1;
    }
    // 2. Aquí cerrarías BD, colas, etc. y el proceso termina solo
    console.log('Servidor cerrado');
  });

  // 3. Red de seguridad: forzar salida si tarda demasiado
  setTimeout(() => {
    console.error('Cierre forzado por tiempo agotado');
    process.exit(1);
  }, 10_000).unref(); // unref: este timer no mantiene el proceso vivo
}

process.on('SIGINT', () => apagar('SIGINT'));
process.on('SIGTERM', () => apagar('SIGTERM'));`})])]),o[76]||(o[76]=e("hr",{class:"divider"},null,-1)),n(j,{references:[{techId:"nodejs",moduleId:"envvars",text:"Variables de Entorno"},{techId:"nodejs",moduleId:"http",text:"Módulo HTTP (servidores y server.close)"},{techId:"nodejs",moduleId:"npm",text:"NPM y scripts de ejecución"}]})]))}});export{ie as default};
