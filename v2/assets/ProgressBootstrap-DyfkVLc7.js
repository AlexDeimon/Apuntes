import{C as d}from"./CodeBlock-BRMidGAh.js";import{R as E}from"./ReferenceSection-Cze-_fSr.js";import{d as P,r as b,h as y,s as k,c as g,b as s,e as t,f as e,a as u,n as x,j as m,t as c,F as M,l as D,o as f,_ as A}from"./index-DAfjV5Gp.js";const L={class:"module-content"},z={class:"topic-section"},T={class:"cards-grid"},V={class:"card info"},R={class:"topic-section"},j={class:"cards-grid"},N={class:"card info"},F={class:"topic-section"},J={class:"cards-grid"},U={class:"card info"},_={class:"topic-section"},X={class:"cards-grid"},G={class:"card info"},H={class:"topic-section"},O={class:"cards-grid"},W={class:"card info"},K={class:"topic-section"},Q={class:"cards-grid"},Y={class:"card info"},Z={class:"card recommended"},$={class:"bs-demo-area"},ss=["aria-valuenow"],as={class:"sim-controls"},rs=["disabled"],es=["disabled"],ls={class:"task-name"},os=["aria-valuenow"],is={class:"task-pct"},ts=P({__name:"ProgressBootstrap",setup(ns){const r=b(0),o=b(!1);let n=null;const C=y(()=>o.value?"Procesando...":r.value===100?"Completado!":r.value>0?"Pausado":"Listo para iniciar"),S=y(()=>({"sim-status-running":o.value,"sim-status-done":r.value===100&&!o.value,"sim-status-paused":r.value>0&&r.value<100&&!o.value}));function I(){r.value>=100&&(r.value=0),o.value=!0,n=setInterval(()=>{r.value=Math.min(100,r.value+Math.floor(Math.random()*8)+2),r.value>=100&&(r.value=100,o.value=!1,n&&clearInterval(n))},250)}function h(){o.value=!1,n&&clearInterval(n)}function B(){h(),r.value=0}const v=b([{id:1,name:"Compilar assets",progress:0,colorClass:"bs-bg-primary"},{id:2,name:"Ejecutar tests",progress:0,colorClass:"bs-bg-success"},{id:3,name:"Subir a servidor",progress:0,colorClass:"bs-bg-warning"},{id:4,name:"Limpiar cache",progress:0,colorClass:"bs-bg-info"}]);let p=[];function q(){v.value.forEach(l=>l.progress=0),p.forEach(l=>clearInterval(l)),p=[],v.value.forEach((l,a)=>{const i=a*400;setTimeout(()=>{const w=setInterval(()=>{l.progress=Math.min(100,l.progress+Math.floor(Math.random()*12)+3),l.progress>=100&&(l.progress=100,clearInterval(w))},200);p.push(w)},i)})}return k(()=>{n&&clearInterval(n),p.forEach(l=>clearInterval(l))}),(l,a)=>(f(),g("div",L,[a[26]||(a[26]=s("div",{class:"header-section"},[s("h1",{class:"main-title bootstrap"},"Progress"),s("p",{class:"subtitle"},"Barras de progreso personalizadas con soporte para etiquetas de texto, colores, animaciones y barras apiladas.")],-1)),s("section",z,[a[2]||(a[2]=s("h2",{class:"section-title bootstrap"},"Estructura Basica",-1)),a[3]||(a[3]=s("p",{class:"section-desc"},[e("Las barras de progreso se construyen con "),s("strong",null,"dos elementos"),e(": el contenedor "),s("code",null,".progress"),e(" y la barra interna "),s("code",null,".progress-bar"),e(". No usan el elemento HTML nativo "),s("code",null,"<progress>"),e(", lo que permite apilarlas y animarlas libremente.")],-1)),s("div",T,[s("div",V,[a[0]||(a[0]=u('<div class="card-header" data-v-c0cc180f><h3 data-v-c0cc180f>Atributos Requeridos</h3></div><ul class="def-list" data-v-c0cc180f><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>.progress:</span> Contenedor principal. Define la &quot;pista&quot; gris de fondo. Se le puede agregar un style=&quot;height: Xpx&quot; para cambiar el alto.</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>.progress-bar:</span> La barra de color interior. El ancho se controla con style=&quot;width: X%&quot; o con utilidades de ancho de Bootstrap.</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>role=&quot;progressbar&quot;:</span> Indica al lector de pantalla que es una barra de progreso.</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>aria-valuenow:</span> Valor actual de la barra.</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>aria-valuemin / aria-valuemax:</span> Valor minimo y maximo (normalmente 0 y 100).</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>aria-label:</span> Descripcion textual para accesibilidad.</li></ul>',2)),t(d,{language:"html",code:`<!-- Estructura minima de una barra de progreso -->
<div class="progress" role="progressbar"
     aria-label="Progreso del proyecto"
     aria-valuenow="75"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>

<!-- Sin valor visible: solo barra de fondo -->
<div class="progress" role="progressbar"
     aria-label="Descarga"
     aria-valuenow="0"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>`})]),a[1]||(a[1]=s("div",{class:"card info"},[s("div",{class:"card-header"},[s("h3",null,"Demo: Progreso Basico")]),s("div",{class:"bs-demo-area"},[s("p",{class:"bs-demo-label"},"0%"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar",style:{width:"0%"}})]),s("p",{class:"bs-demo-label mt"},"25%"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar",style:{width:"25%"}})]),s("p",{class:"bs-demo-label mt"},"50%"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar",style:{width:"50%"}})]),s("p",{class:"bs-demo-label mt"},"75%"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar",style:{width:"75%"}})]),s("p",{class:"bs-demo-label mt"},"100%"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar",style:{width:"100%"}})])])],-1))])]),a[27]||(a[27]=s("hr",{class:"divider"},null,-1)),s("section",R,[a[6]||(a[6]=s("h2",{class:"section-title bootstrap"},"Etiquetas y Colores",-1)),a[7]||(a[7]=s("p",{class:"section-desc"},[e("Se puede mostrar el porcentaje directamente sobre la barra agregando texto dentro de "),s("code",null,".progress-bar"),e(". Los colores se cambian con las clases de utilidad de Bootstrap.")],-1)),s("div",j,[s("div",N,[a[4]||(a[4]=s("div",{class:"card-header"},[s("h3",null,"Etiqueta de Texto")],-1)),t(d,{language:"html",code:`<!-- Con etiqueta de porcentaje -->
<div class="progress" role="progressbar"
     aria-label="Progreso"
     aria-valuenow="65"
     aria-valuemin="0"
     aria-valuemax="100">
  <div class="progress-bar" style="width: 65%">65%</div>
</div>

<!-- Colores de contexto -->
<div class="progress" ...>
  <div class="progress-bar bg-success" style="width: 80%">Completado</div>
</div>

<div class="progress" ...>
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>

<div class="progress" ...>
  <div class="progress-bar bg-warning" style="width: 35%"></div>
</div>

<div class="progress" ...>
  <div class="progress-bar bg-danger" style="width: 20%"></div>
</div>`})]),a[5]||(a[5]=s("div",{class:"card info"},[s("div",{class:"card-header"},[s("h3",null,"Demo: Colores y Etiquetas")]),s("div",{class:"bs-demo-area"},[s("p",{class:"bs-demo-label"},"Default (con etiqueta)"),s("div",{class:"bs-progress bs-progress-lg",role:"progressbar","aria-valuenow":"65","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar",style:{width:"65%"}},"65%")]),s("p",{class:"bs-demo-label mt"},"bg-success"),s("div",{class:"bs-progress bs-progress-lg",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-bg-success",style:{width:"80%"}})]),s("p",{class:"bs-demo-label mt"},"bg-info"),s("div",{class:"bs-progress bs-progress-lg",role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-bg-info",style:{width:"50%"}})]),s("p",{class:"bs-demo-label mt"},"bg-warning"),s("div",{class:"bs-progress bs-progress-lg",role:"progressbar","aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-bg-warning",style:{width:"35%"}})]),s("p",{class:"bs-demo-label mt"},"bg-danger"),s("div",{class:"bs-progress bs-progress-lg",role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-bg-danger",style:{width:"20%"}})])])],-1))])]),a[28]||(a[28]=s("hr",{class:"divider"},null,-1)),s("section",F,[a[10]||(a[10]=s("h2",{class:"section-title bootstrap"},"Barras Apiladas",-1)),a[11]||(a[11]=s("p",{class:"section-desc"},[e("Bootstrap 5.3 introduce el componente "),s("code",null,".progress-stacked"),e(" como contenedor para apilar multiples barras de progreso dentro del mismo track, creando barras segmentadas.")],-1)),s("div",J,[s("div",U,[a[8]||(a[8]=u('<div class="card-header" data-v-c0cc180f><h3 data-v-c0cc180f>Sintaxis Apilada (BS 5.3)</h3></div><ul class="def-list" data-v-c0cc180f><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>.progress-stacked:</span> Contenedor externo que agrupa multiples barras. Nuevo en Bootstrap 5.3.</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>Multiples .progress:</span> Dentro del stacked, cada segmento es su propio .progress con su .progress-bar.</li><li data-v-c0cc180f><span class="def-term" data-v-c0cc180f>Suma total:</span> Los anchos de todas las barras deben sumar 100% (o menos si el total no llega al maximo).</li></ul>',2)),t(d,{language:"html",code:`<!-- Barras apiladas — Bootstrap 5.3+ -->
<div class="progress-stacked">
  <div class="progress" role="progressbar"
       aria-label="Completado"
       aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
       style="width: 40%">
    <div class="progress-bar bg-success">40%</div>
  </div>
  <div class="progress" role="progressbar"
       aria-label="En progreso"
       aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"
       style="width: 35%">
    <div class="progress-bar bg-warning">35%</div>
  </div>
  <div class="progress" role="progressbar"
       aria-label="Pendiente"
       aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
       style="width: 25%">
    <div class="progress-bar bg-danger">25%</div>
  </div>
</div>`})]),a[9]||(a[9]=u('<div class="card info" data-v-c0cc180f><div class="card-header" data-v-c0cc180f><h3 data-v-c0cc180f>Demo: Barras Apiladas</h3></div><div class="bs-demo-area" data-v-c0cc180f><p class="bs-demo-label" data-v-c0cc180f>Distribucion de Tareas</p><div class="bs-progress-stacked" data-v-c0cc180f><div class="bs-progress-segment" style="width:40%;" data-v-c0cc180f><div class="bs-progress-bar bs-progress-lg bs-bg-success" data-v-c0cc180f>40% Listo</div></div><div class="bs-progress-segment" style="width:35%;" data-v-c0cc180f><div class="bs-progress-bar bs-progress-lg bs-bg-warning" data-v-c0cc180f>35% WIP</div></div><div class="bs-progress-segment" style="width:25%;" data-v-c0cc180f><div class="bs-progress-bar bs-progress-lg bs-bg-danger" data-v-c0cc180f>25% Pendiente</div></div></div><p class="bs-demo-label mt" data-v-c0cc180f>Distribución de Presupuesto</p><div class="bs-progress-stacked" data-v-c0cc180f><div class="bs-progress-segment" style="width:55%;" data-v-c0cc180f><div class="bs-progress-bar bs-progress-lg bs-bg-primary" data-v-c0cc180f>55% Marketing</div></div><div class="bs-progress-segment" style="width:25%;" data-v-c0cc180f><div class="bs-progress-bar bs-progress-lg bs-bg-info" data-v-c0cc180f>25% Desarrollo</div></div><div class="bs-progress-segment" style="width:20%;" data-v-c0cc180f><div class="bs-progress-bar bs-progress-lg" style="background:#6f42c1;" data-v-c0cc180f>20% Ops</div></div></div></div></div>',1))])]),a[29]||(a[29]=s("hr",{class:"divider"},null,-1)),s("section",_,[a[15]||(a[15]=s("h2",{class:"section-title bootstrap"},"Striped y Animacion",-1)),a[16]||(a[16]=s("p",{class:"section-desc"},"Bootstrap incluye variantes con patron de rayas y animacion de movimiento, utiles para indicar que un proceso esta en curso.",-1)),s("div",X,[s("div",G,[a[12]||(a[12]=s("div",{class:"card-header"},[s("h3",null,"Clases de Variantes")],-1)),a[13]||(a[13]=s("ul",{class:"def-list"},[s("li",null,[s("span",{class:"def-term"},".progress-bar-striped:"),e(" Agrega un patron de rayas diagonales sobre la barra usando un gradiente CSS.")]),s("li",null,[s("span",{class:"def-term"},".progress-bar-animated:"),e(" Anima las rayas para dar efecto de movimiento. Requiere .progress-bar-striped.")])],-1)),t(d,{language:"html",code:`<!-- Barra con rayas -->
<div class="progress" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 75%"></div>
</div>

<!-- Barra animada (requiere striped) -->
<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"></div>
</div>

<!-- Combinacion: color + striped + animated -->
<div class="progress" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success progress-bar-striped progress-bar-animated"
       style="width: 45%">
  </div>
</div>`})]),a[14]||(a[14]=s("div",{class:"card info"},[s("div",{class:"card-header"},[s("h3",null,"Demo: Variantes Visuales")]),s("div",{class:"bs-demo-area"},[s("p",{class:"bs-demo-label"},"progress-bar-striped"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-striped",style:{width:"75%"}})]),s("p",{class:"bs-demo-label mt"},"progress-bar-animated (bg-primary)"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-striped bs-animated",style:{width:"60%"}})]),s("p",{class:"bs-demo-label mt"},"bg-success + striped + animated"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"45","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-bg-success bs-striped bs-animated",style:{width:"45%"}})]),s("p",{class:"bs-demo-label mt"},"bg-warning + striped + animated"),s("div",{class:"bs-progress",role:"progressbar","aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:"bs-progress-bar bs-bg-warning bs-striped bs-animated",style:{width:"85%"}})])])],-1))])]),a[30]||(a[30]=s("hr",{class:"divider"},null,-1)),s("section",H,[a[19]||(a[19]=s("h2",{class:"section-title bootstrap"},"Alto Personalizado",-1)),a[20]||(a[20]=s("p",{class:"section-desc"},[e("El alto de la barra se controla directamente en el contenedor "),s("code",null,".progress"),e(" via la propiedad CSS "),s("code",null,"height"),e(". La barra interna se adapta automaticamente.")],-1)),s("div",O,[s("div",W,[a[17]||(a[17]=s("div",{class:"card-header"},[s("h3",null,"Controlar la Altura")],-1)),t(d,{language:"html",code:`<!-- Muy delgada (1px) -->
<div class="progress" style="height: 1px" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%"></div>
</div>

<!-- Altura por defecto (~16px) -->
<div class="progress" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%"></div>
</div>

<!-- Grande (30px) — permite mostrar texto -->
<div class="progress" style="height: 30px" role="progressbar"
     aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 60%; font-size: 1rem; line-height: 30px">
    60% Completado
  </div>
</div>`})]),a[18]||(a[18]=s("div",{class:"card info"},[s("div",{class:"card-header"},[s("h3",null,"Demo: Alturas")]),s("div",{class:"bs-demo-area"},[s("p",{class:"bs-demo-label"},"1px"),s("div",{class:"bs-progress bs-progress-1px",role:"progressbar"},[s("div",{class:"bs-progress-bar",style:{width:"60%"}})]),s("p",{class:"bs-demo-label mt"},"4px"),s("div",{class:"bs-progress bs-progress-4px",role:"progressbar"},[s("div",{class:"bs-progress-bar bs-bg-success",style:{width:"70%"}})]),s("p",{class:"bs-demo-label mt"},"10px (default)"),s("div",{class:"bs-progress",role:"progressbar"},[s("div",{class:"bs-progress-bar bs-bg-info",style:{width:"55%"}})]),s("p",{class:"bs-demo-label mt"},"24px"),s("div",{class:"bs-progress bs-progress-24px",role:"progressbar"},[s("div",{class:"bs-progress-bar bs-bg-warning",style:{width:"80%"}},"80%")]),s("p",{class:"bs-demo-label mt"},"36px"),s("div",{class:"bs-progress bs-progress-36px",role:"progressbar"},[s("div",{class:"bs-progress-bar bs-bg-primary",style:{width:"45%"}},"45% Completado")])])],-1))])]),a[31]||(a[31]=s("hr",{class:"divider"},null,-1)),s("section",K,[a[24]||(a[24]=s("h2",{class:"section-title bootstrap"},"Uso Dinamico con JavaScript",-1)),a[25]||(a[25]=s("p",{class:"section-desc"},"En proyectos reales la barra de progreso se actualiza dinamicamente desde JavaScript para reflejar el avance de una operacion (subida de archivo, carga de datos, etc.).",-1)),s("div",Q,[s("div",Y,[a[21]||(a[21]=s("div",{class:"card-header"},[s("h3",null,"Actualizar con JS")],-1)),t(d,{language:"javascript",code:`// Funcion para actualizar una barra de progreso
function setProgress(barElement, percent) {
  const clamped = Math.min(100, Math.max(0, percent));
  barElement.style.width = clamped + '%';
  barElement.setAttribute('aria-valuenow', clamped);

  // Actualizar texto si existe
  if (barElement.textContent !== '') {
    barElement.textContent = clamped + '%';
  }
}

// Uso
const bar = document.querySelector('.progress-bar');
setProgress(bar, 75);

// Simulacion de descarga con setInterval
let progress = 0;
const interval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress >= 100) {
    progress = 100;
    clearInterval(interval);
    bar.textContent = '¡Completo!';
  }
  setProgress(bar, Math.round(progress));
}, 300);`}),t(d,{language:"javascript",code:`// Con fetch: mostrar progreso de descarga
async function descargarConProgreso(url, progressBar) {
  const response = await fetch(url);
  const total = parseInt(response.headers.get('Content-Length'), 10);
  let loaded = 0;

  const reader = response.body.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    loaded += value.length;
    const percent = Math.round((loaded / total) * 100);
    setProgress(progressBar, percent);
  }
}`})]),s("div",Z,[a[23]||(a[23]=s("div",{class:"card-header"},[s("h3",null,"Demo: Simulacion Interactiva")],-1)),s("div",$,[s("div",{class:"bs-progress bs-progress-lg",role:"progressbar","aria-valuenow":r.value,"aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:m(["bs-progress-bar bs-bg-primary bs-striped",{"bs-animated":o.value}]),style:x({width:r.value+"%"})},c(r.value>0?r.value+"%":""),7)],8,ss),s("div",as,[s("button",{class:"sim-btn sim-btn-start",onClick:I,disabled:o.value},c(r.value===100?"↻ Reiniciar":"▶ Iniciar"),9,rs),s("button",{class:"sim-btn sim-btn-stop",onClick:h,disabled:!o.value},"▮▮ Pausar",8,es),s("button",{class:"sim-btn sim-btn-reset",onClick:B},"■ Reset"),s("span",{class:m(["sim-status",S.value])},c(C.value),3)]),a[22]||(a[22]=s("p",{class:"bs-demo-label mt"},"Multiples Tareas",-1)),(f(!0),g(M,null,D(v.value,i=>(f(),g("div",{key:i.id,class:"task-row"},[s("span",ls,c(i.name),1),s("div",{class:"bs-progress task-bar",role:"progressbar","aria-valuenow":i.progress,"aria-valuemin":"0","aria-valuemax":"100"},[s("div",{class:m(["bs-progress-bar",i.colorClass]),style:x({width:i.progress+"%"})},null,6)],8,os),s("span",is,c(i.progress)+"%",1)]))),128)),s("button",{class:"sim-btn sim-btn-start mt",onClick:q},"Simular Tareas")])])])]),a[32]||(a[32]=s("hr",{class:"divider"},null,-1)),t(E,{references:[{techId:"bootstrap",moduleId:"navbar",text:"Navbar"},{techId:"bootstrap",moduleId:"modal",text:"Modal"},{techId:"bootstrap",moduleId:"collapse",text:"Collapse"}]})]))}}),vs=A(ts,[["__scopeId","data-v-c0cc180f"]]);export{vs as default};
