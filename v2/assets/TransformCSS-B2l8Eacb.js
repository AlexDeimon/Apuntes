import{d as J,m as D,r as X,h as C,c as v,b as e,e as n,f as t,a as m,F as f,l as b,t as o,n as w,i as h,k as _,j as x,p as Z,o as u,_ as Q}from"./index-IqIao0mJ.js";import{_ as K}from"./portada-DiCtIBfT.js";import{C as l}from"./CodeBlock-CxsY0dI-.js";import{R as W}from"./ReferenceSection-D0nIM9ZN.js";const ee={class:"module-content"},ae={class:"topic-section"},se={class:"cards-grid"},te={class:"topic-section"},ne={class:"cards-grid"},oe={class:"preview-container"},le={class:"preview-content"},de={class:"btn-toggle-group"},re=["onClick"],ie={class:"slider-list"},ce={class:"slider-name"},ve=["onUpdate:modelValue","min","max","step"],ue={class:"slider-value"},pe={class:"origin-picker"},me={class:"origin-grid"},fe=["title","onClick"],be={class:"slider-value origin-label"},ge={class:"playground-output"},xe={class:"preview-container"},ye={class:"preview-content tf-stage"},ke={class:"topic-section"},we={class:"group-title"},he=["innerHTML"],je={class:"cards-grid"},Xe={class:"preview-container"},Ce={class:"preview-header"},Ye={class:"preview-content fn-grid"},ze={class:"fn-stage"},_e={class:"topic-section"},$e={class:"cards-grid"},De={class:"preview-container"},Se={class:"preview-content stage-center"},qe={class:"origin-demo"},Pe={class:"origin-wrap"},Ee={class:"origin-controls"},Ze={class:"origin-grid"},Ve=["title","onClick"],Te={class:"slider-row angle-row"},Re={class:"slider-value"},Ue={class:"topic-section"},Ae={class:"topic-section"},Me={class:"cards-grid"},Ie={class:"preview-container"},Oe={class:"preview-content stage-center"},Fe={class:"btn-toggle-group"},Le={class:"indiv-stage"},Ge={class:"topic-section"},Be={class:"cards-grid"},Ne={class:"preview-container"},He={class:"preview-content"},Je={class:"slider-list"},Qe={class:"slider-name"},Ke=["onUpdate:modelValue","min","max","step","disabled"],We={class:"slider-value"},ea={class:"check-row"},aa={class:"playground-output"},sa={class:"preview-container"},ta={class:"cards-grid"},na={class:"card info"},oa={class:"table-responsive"},la={class:"custom-table"},da={class:"cards-grid"},ra={class:"preview-container"},ia={class:"preview-content"},ca={class:"cube-scene"},va={class:"slider-list"},ua={class:"slider-row"},pa=["disabled"],ma={class:"slider-value"},fa={class:"slider-row"},ba=["disabled"],ga={class:"slider-value"},xa={class:"check-row"},ya={class:"cards-grid"},ka={class:"topic-section"},wa={class:"cards-grid"},ha={class:"topic-section"},ja={class:"cards-grid"},Xa={class:"cards-grid"},Ca={class:"cards-grid"},Ya={class:"cards-grid"},za={class:"cards-grid"},_a={class:"preview-container"},$a={class:"preview-content stage-center"},Da=["aria-expanded"],Sa={class:"topic-section"},qa={class:"cards-grid"},Pa={class:"card recommended"},Ea={class:"card warning"},Za={class:"topic-section"},Va={class:"card info"},Ta={class:"table-responsive"},Ra={class:"custom-table"},Ua=J({__name:"TransformCSS",setup(Aa){const S={tx:0,ty:0,scale:1,rotate:0,skx:0,sky:0},d=D({...S}),V=[{key:"tx",label:"translateX",min:-100,max:100,step:5,unit:"px"},{key:"ty",label:"translateY",min:-80,max:80,step:5,unit:"px"},{key:"scale",label:"scale",min:.3,max:2,step:.1,unit:""},{key:"rotate",label:"rotate",min:-180,max:180,step:5,unit:"deg"},{key:"skx",label:"skewX",min:-60,max:60,step:5,unit:"deg"},{key:"sky",label:"skewY",min:-60,max:60,step:5,unit:"deg"}],q=[{value:"top left"},{value:"top"},{value:"top right"},{value:"left"},{value:"center"},{value:"right"},{value:"bottom left"},{value:"bottom"},{value:"bottom right"}],y=X("center"),P=C(()=>{const r=[];return(d.tx!==0||d.ty!==0)&&r.push(`translate(${d.tx}px, ${d.ty}px)`),d.scale!==1&&r.push(`scale(${d.scale})`),d.rotate!==0&&r.push(`rotate(${d.rotate}deg)`),d.skx!==0&&r.push(`skewX(${d.skx}deg)`),d.sky!==0&&r.push(`skewY(${d.sky}deg)`),r.length?r.join(" "):"none"}),T=C(()=>{const r=[".caja {",`  transform: ${P.value};`];return y.value!=="center"&&r.push(`  transform-origin: ${y.value};`),r.push("}"),r.join(`
`)}),R=[{name:"Reset",values:{}},{name:"Inclinada",values:{rotate:-15,scale:1.2}},{name:"Cursiva",values:{skx:-20}},{name:"Volcada",values:{rotate:180,tx:40}},{name:"Romboide",values:{skx:30,sky:10,scale:.9}}];function U(r){Object.assign(d,S,r),y.value="center"}const A=[{id:"translate",title:"translate()",desc:"Desplaza el elemento en el plano. Acepta longitudes o porcentajes (relativos al <strong>propio elemento</strong>). Existen <code>translateX()</code> y <code>translateY()</code> para un solo eje.",items:[{label:"translate(40px, 15px)",value:"translate(40px, 15px)"},{label:"translateX(30%)",value:"translateX(30%)"},{label:"translateY(-20px)",value:"translateY(-20px)"}],code:`.a { transform: translate(40px, 15px); }  /* x, y */
.b { transform: translateX(30%); }        /* 30% de su propio ancho */
.c { transform: translateY(-20px); }      /* valores negativos: arriba */

/* Si omites y, vale 0 */
.d { transform: translate(40px); }`},{id:"scale",title:"scale()",desc:"Cambia el tamaño. <code>1</code> es el tamaño original: mayor que 1 agranda, entre 0 y 1 reduce y los negativos reflejan el elemento como un espejo.",items:[{label:"scale(1.3)",value:"scale(1.3)"},{label:"scaleX(1.5)",value:"scaleX(1.5)"},{label:"scaleY(0.6)",value:"scaleY(0.6)"},{label:"scaleX(-1)",value:"scaleX(-1)"}],code:`.a { transform: scale(1.3); }       /* 130% en ambos ejes */
.b { transform: scaleX(1.5); }      /* solo el ancho */
.c { transform: scaleY(0.6); }      /* solo el alto, 60% */
.d { transform: scale(0.93, 0.97); }/* x, y distintos */

/* Reflejar (efecto espejo) */
.espejo { transform: scaleX(-1); }`},{id:"rotate",title:"rotate()",desc:"Gira el elemento sobre su <code>transform-origin</code>. Valores positivos giran en <strong>sentido horario</strong>. Unidades: <code>deg</code>, <code>grad</code>, <code>rad</code> y <code>turn</code>.",items:[{label:"rotate(15deg)",value:"rotate(15deg)"},{label:"rotate(-30deg)",value:"rotate(-30deg)"},{label:"rotate(0.25turn)",value:"rotate(0.25turn)"},{label:"rotate(180deg)",value:"rotate(180deg)"}],code:`.a { transform: rotate(15deg); }     /* horario */
.b { transform: rotate(-30deg); }    /* antihorario */
.c { transform: rotate(0.25turn); }  /* 90deg */
.d { transform: rotate(3.14rad); }   /* ~180deg */`},{id:"skew",title:"skew()",desc:"Sesga (inclina) el elemento a lo largo del eje X, del Y o de ambos, según los ángulos indicados. Muy usado para efectos de paralelogramo y cursiva artificial.",items:[{label:"skew(10deg, 5deg)",value:"skew(10deg, 5deg)"},{label:"skewX(25deg)",value:"skewX(25deg)"},{label:"skewY(15deg)",value:"skewY(15deg)"}],code:`.a { transform: skew(10deg, 5deg); }  /* x, y */
.b { transform: skewX(25deg); }       /* inclina horizontalmente */
.c { transform: skewY(15deg); }       /* inclina verticalmente */

/* Truco: botón paralelogramo sin deformar el texto */
.btn { transform: skewX(-15deg); }
.btn span { display: inline-block; transform: skewX(15deg); }`}],Y=X("top left"),z=X(35),M={"top left":[0,0],top:[50,0],"top right":[100,0],left:[0,50],center:[50,50],right:[100,50],"bottom left":[0,100],bottom:[50,100],"bottom right":[100,100]},I=C(()=>{const[r,a]=M[Y.value]??[50,50];return{left:`${r}%`,top:`${a}%`}}),O=C(()=>`.caja {
  transform-origin: ${Y.value};
  transform: rotate(${z.value}deg);
}`),c=D({t:!1,r:!1,s:!1}),E={rx:25,ry:-35,rz:0,tz:0,persp:600},i=D({...E}),k=X(!0),F=[{key:"rx",label:"rotateX",min:-180,max:180,step:5,unit:"deg"},{key:"ry",label:"rotateY",min:-180,max:180,step:5,unit:"deg"},{key:"rz",label:"rotateZ",min:-180,max:180,step:5,unit:"deg"},{key:"tz",label:"translateZ",min:-200,max:200,step:10,unit:"px"},{key:"persp",label:"perspective",min:100,max:1500,step:50,unit:"px"}],L=C(()=>`translateZ(${i.tz}px) rotateX(${i.rx}deg) rotateY(${i.ry}deg) rotateZ(${i.rz}deg)`),G=C(()=>`.escena {
  perspective: ${k.value?i.persp+"px":"none"};
}

.carta {
  transform:
    translateZ(${i.tz}px)
    rotateX(${i.rx}deg)
    rotateY(${i.ry}deg)
    rotateZ(${i.rz}deg);
}`);function B(){Object.assign(i,E),k.value=!0}const N=[{name:"rotateX(a)",desc:"Gira alrededor del eje horizontal: inclina hacia adelante o atrás."},{name:"rotateY(a)",desc:"Gira alrededor del eje vertical: como una puerta o una página."},{name:"rotateZ(a)",desc:"Gira sobre el eje de profundidad (equivale a rotate())."},{name:"rotate3d(x, y, z, a)",desc:"Rotación sobre un eje arbitrario definido por un vector."},{name:"translateZ(d)",desc:"Acerca o aleja el elemento de la cámara (necesita perspective)."},{name:"translate3d(x, y, z)",desc:"Traslación en los tres ejes a la vez."},{name:"scaleZ(s) / scale3d()",desc:"Escala en profundidad (solo visible con hijos 3D)."},{name:"perspective(d)",desc:"Aplica perspectiva solo a este elemento; debe ir primero."},{name:"matrix3d(...)",desc:"Matriz 4×4 con 16 valores; la forma general de cualquier 3D."}],g=D({x:-20,y:35}),j=X(!1),$=X(!1),H=[{name:"translate(x, y)",params:"longitud o %",example:"translate(20px, -10px)"},{name:"translateX() / translateY()",params:"longitud o %",example:"translateX(50%)"},{name:"scale(x, y)",params:"número (1 = original)",example:"scale(1.2, 0.8)"},{name:"scaleX() / scaleY()",params:"número",example:"scaleY(0.5)"},{name:"rotate(a)",params:"ángulo (deg, rad, turn)",example:"rotate(45deg)"},{name:"skew(x, y)",params:"ángulos",example:"skew(10deg, 5deg)"},{name:"skewX() / skewY()",params:"ángulo",example:"skewX(-15deg)"},{name:"matrix(a, b, c, d, tx, ty)",params:"6 números",example:"matrix(1, 0, 0, 1, 30, 0)"},{name:"perspective(d)",params:"longitud",example:"perspective(500px)"},{name:"rotateX/Y/Z(), translateZ()",params:"ángulo / longitud",example:"rotateY(60deg)"}];return(r,a)=>(u(),v("div",ee,[a[75]||(a[75]=e("div",{class:"header-section"},[e("h1",{class:"main-title css"},"Transform"),e("p",{class:"subtitle"},"Traslada, escala, rota y sesga elementos, también en 3D, sin alterar el flujo del documento.")],-1)),e("section",ae,[a[10]||(a[10]=e("h2",{class:"section-title css"},"La propiedad transform",-1)),a[11]||(a[11]=e("p",{class:"section-desc"},[e("code",null,"transform"),t(" modifica el "),e("strong",null,"espacio de coordenadas"),t(" del elemento: puede trasladarse, rotarse, escalarse o sesgarse según los valores indicados. Es un cambio puramente "),e("strong",null,"visual"),t(": el elemento sigue ocupando su espacio original en el layout y no empuja a sus vecinos.")],-1)),e("div",se,[a[9]||(a[9]=m('<div class="card info" data-v-a51fdb06><div class="card-header" data-v-a51fdb06><h3 data-v-a51fdb06>Cómo funciona</h3></div><ul class="def-list" data-v-a51fdb06><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Sin efecto en el flujo:</span> los demás elementos no se mueven. Lo que ves desplazado sigue «ocupando» su lugar original.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Varias funciones:</span> se escriben separadas por espacios y se aplican <strong data-v-a51fdb06>en orden</strong>.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Porcentajes:</span> en translate() se calculan sobre el <strong data-v-a51fdb06>tamaño del propio elemento</strong>, no del padre.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Solo algunos elementos:</span> display: inline (no reemplazado) y la mayoría de elementos de tabla internos no se transforman. Usa inline-block.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Rendimiento:</span> es de las pocas propiedades que el navegador anima directamente en la GPU, sin recalcular el layout.</li></ul></div>',1)),e("div",null,[n(l,{language:"css",code:`/* Una función */
.caja { transform: rotate(15deg); }

/* Varias funciones (se aplican en orden) */
.caja { transform: translate(40px, 10px) rotate(15deg) scale(1.2); }

/* Quitar la transformación */
.caja { transform: none; }

/* Punto de anclaje de la transformación */
.caja { transform-origin: top left; }`})])])]),a[76]||(a[76]=e("hr",{class:"divider"},null,-1)),e("section",te,[a[16]||(a[16]=e("h2",{class:"section-title css"},"Playground 2D",-1)),a[17]||(a[17]=e("p",{class:"section-desc"},[t("Combina las funciones y observa el resultado. El recuadro punteado muestra la "),e("strong",null,"posición original"),t(". También verás la "),e("strong",null,"matriz"),t(" que el navegador calcula internamente.")],-1)),e("div",ne,[e("div",oe,[a[13]||(a[13]=e("div",{class:"preview-header"},"Controles",-1)),e("div",le,[e("div",de,[(u(),v(f,null,b(R,s=>e("button",{key:s.name,class:"demo-btn",onClick:p=>U(s.values)},o(s.name),9,re)),64))]),e("div",ie,[(u(),v(f,null,b(V,s=>e("label",{key:s.key,class:"slider-row"},[e("span",ce,o(s.label),1),h(e("input",{"onUpdate:modelValue":p=>d[s.key]=p,class:"slider-input",type:"range",min:s.min,max:s.max,step:s.step},null,8,ve),[[_,d[s.key],void 0,{number:!0}]]),e("span",ue,o(d[s.key])+o(s.unit),1)])),64))]),e("div",pe,[a[12]||(a[12]=e("span",{class:"slider-name"},"transform-origin",-1)),e("div",me,[(u(),v(f,null,b(q,s=>e("button",{key:s.value,type:"button",class:x(["origin-cell",{active:y.value===s.value}]),title:s.value,onClick:p=>y.value=s.value},null,10,fe)),64))]),e("span",be,o(y.value),1)])])]),e("div",ge,[e("div",xe,[a[15]||(a[15]=e("div",{class:"preview-header"},"Resultado",-1)),e("div",ye,[a[14]||(a[14]=e("div",{class:"tf-ghost"},null,-1)),e("div",{ref:"playEl",class:"tf-box",style:w({transform:P.value,transformOrigin:y.value})},"Caja",4)])]),n(l,{language:"css",code:T.value},null,8,["code"])])])]),a[77]||(a[77]=e("hr",{class:"divider"},null,-1)),e("section",ke,[a[19]||(a[19]=e("h2",{class:"section-title css"},"Funciones 2D",-1)),a[20]||(a[20]=e("p",{class:"section-desc"},"Las cuatro transformaciones básicas. En cada ejemplo, el recuadro punteado es la posición original.",-1)),(u(),v(f,null,b(A,s=>e("div",{key:s.id,class:"group-block"},[e("h3",we,[e("code",null,o(s.title),1)]),e("p",{class:"group-desc",innerHTML:s.desc},null,8,he),e("div",je,[e("div",Xe,[e("div",Ce,o(s.title),1),e("div",Ye,[(u(!0),v(f,null,b(s.items,p=>(u(),v("figure",{key:p.label,class:"fn-cell"},[e("div",ze,[a[18]||(a[18]=e("div",{class:"fn-ghost"},null,-1)),e("div",{class:"fn-box",style:w({transform:p.value})},null,4)]),e("figcaption",null,[e("code",null,o(p.label),1)])]))),128))])]),e("div",null,[n(l,{language:"css",code:s.code},null,8,["code"])])])])),64))]),a[78]||(a[78]=e("hr",{class:"divider"},null,-1)),e("section",_e,[a[23]||(a[23]=e("h2",{class:"section-title css"},"transform-origin",-1)),a[24]||(a[24]=e("p",{class:"section-desc"},[t("Define el "),e("strong",null,"punto fijo"),t(" alrededor del cual se rota, escala o sesga el elemento. Por defecto es "),e("code",null,"50% 50%"),t(" (el centro). Elige un punto y mueve el ángulo: el punto amarillo es el origen.")],-1)),e("div",$e,[e("div",De,[a[22]||(a[22]=e("div",{class:"preview-header"},"Origen de la rotación",-1)),e("div",Se,[e("div",qe,[e("div",Pe,[e("div",{class:"origin-box",style:w({transform:"rotate("+z.value+"deg)",transformOrigin:Y.value})},null,4),e("span",{class:"origin-dot",style:w(I.value)},null,4)])]),e("div",Ee,[e("div",Ze,[(u(),v(f,null,b(q,s=>e("button",{key:s.value,type:"button",class:x(["origin-cell",{active:Y.value===s.value}]),title:s.value,onClick:p=>Y.value=s.value},null,10,Ve)),64))]),e("label",Te,[a[21]||(a[21]=e("span",{class:"slider-name"},"ángulo",-1)),h(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>z.value=s),class:"slider-input",type:"range",min:"0",max:"360",step:"5"},null,512),[[_,z.value,void 0,{number:!0}]]),e("span",Re,o(z.value)+"deg",1)])])])]),e("div",null,[n(l,{language:"css",code:O.value},null,8,["code"]),n(l,{language:"css",code:`/* Valores aceptados */
transform-origin: center;          /* 50% 50% (por defecto) */
transform-origin: top left;        /* esquina superior izquierda */
transform-origin: 100% 0;          /* esquina superior derecha */
transform-origin: 20px 40px;       /* medidas absolutas */
transform-origin: center bottom;   /* base del elemento */

/* En 3D admite un tercer valor (eje Z) */
transform-origin: 50% 50% -100px;`})])])]),a[79]||(a[79]=e("hr",{class:"divider"},null,-1)),e("section",Ue,[a[25]||(a[25]=m('<h2 class="section-title css" data-v-a51fdb06>El orden importa</h2><p class="section-desc" data-v-a51fdb06>Cada función transforma el <strong data-v-a51fdb06>sistema de coordenadas</strong> del elemento. Si primero <code data-v-a51fdb06>rotate()</code> gira los ejes, el siguiente <code data-v-a51fdb06>translate()</code> se mueve a lo largo de los ejes ya girados. Cambiar el orden da resultados distintos.</p><div class="cards-grid" data-v-a51fdb06><div class="preview-container" data-v-a51fdb06><div class="preview-header" data-v-a51fdb06>translateX(80px) rotate(45deg)</div><div class="preview-content order-stage" data-v-a51fdb06><div class="order-ghost" data-v-a51fdb06></div><div class="order-box ob-a" data-v-a51fdb06>1º mover<br data-v-a51fdb06>2º girar</div></div></div><div class="preview-container" data-v-a51fdb06><div class="preview-header" data-v-a51fdb06>rotate(45deg) translateX(80px)</div><div class="preview-content order-stage" data-v-a51fdb06><div class="order-ghost" data-v-a51fdb06></div><div class="order-box ob-b" data-v-a51fdb06>1º girar<br data-v-a51fdb06>2º mover</div></div></div></div>',3)),n(l,{language:"css",code:`/* El elemento se mueve 80px a la derecha y luego gira sobre su centro */
.a { transform: translateX(80px) rotate(45deg); }

/* El elemento gira y luego se mueve 80px a lo largo del eje ya girado (diagonal) */
.b { transform: rotate(45deg) translateX(80px); }`})]),a[80]||(a[80]=e("hr",{class:"divider"},null,-1)),e("section",Ae,[a[31]||(a[31]=e("h2",{class:"section-title css"},"Propiedades individuales: translate, rotate, scale",-1)),a[32]||(a[32]=e("p",{class:"section-desc"},[t("Los navegadores modernos permiten escribir cada transformación en su "),e("strong",null,"propia propiedad"),t(". Se pueden animar y cambiar de forma independiente sin reescribir toda la lista de "),e("code",null,"transform"),t(".")],-1)),e("div",Me,[e("div",Ie,[a[27]||(a[27]=e("div",{class:"preview-header"},"Activa cada propiedad por separado",-1)),e("div",Oe,[e("div",Fe,[e("button",{class:x(["demo-btn",{active:c.t}]),onClick:a[1]||(a[1]=s=>c.t=!c.t)},"translate",2),e("button",{class:x(["demo-btn",{active:c.r}]),onClick:a[2]||(a[2]=s=>c.r=!c.r)},"rotate",2),e("button",{class:x(["demo-btn",{active:c.s}]),onClick:a[3]||(a[3]=s=>c.s=!c.s)},"scale",2)]),e("div",Le,[e("div",{class:x(["indiv-box",{"is-t":c.t,"is-r":c.r,"is-s":c.s}])},"★",2)]),a[26]||(a[26]=e("p",{class:"demo-note"},"Cada una tiene su propia duración de transición.",-1))])]),e("div",null,[n(l,{language:"css",code:`.caja {
  translate: 0 0;
  rotate: 0deg;
  scale: 1;
  transition: translate 0.4s, rotate 0.8s, scale 0.3s;
}

.caja.activa {
  translate: 60px 0;   /* x y */
  rotate: 90deg;
  scale: 1.4;          /* o: scale: 1.4 0.8 */
}

/* Rotar en 3D con un eje */
.caja { rotate: 1 1 0 45deg; }

/* Ventaja: con 'transform' habría que reescribir las tres
   funciones para cambiar solo una */`}),a[28]||(a[28]=e("br",null,null,-1)),a[29]||(a[29]=e("br",null,null,-1)),a[30]||(a[30]=e("div",{class:"card info"},[e("p",null,[t("Orden fijo de aplicación: "),e("code",null,"translate"),t(" → "),e("code",null,"rotate"),t(" → "),e("code",null,"scale"),t(" → "),e("code",null,"transform"),t(", sin importar el orden en que las escribas.")])],-1))])])]),a[81]||(a[81]=e("hr",{class:"divider"},null,-1)),e("section",Ge,[a[47]||(a[47]=e("h2",{class:"section-title css"},"Transformaciones 3D",-1)),a[48]||(a[48]=e("p",{class:"section-desc"},[t("Para dar profundidad se añade una "),e("strong",null,"perspectiva"),t(" al contenedor y se rota sobre los ejes "),e("code",null,"X"),t(", "),e("code",null,"Y"),t(" y "),e("code",null,"Z"),t(". Cuanto menor sea el valor de "),e("code",null,"perspective"),t(", más exagerado es el efecto.")],-1)),e("div",Be,[e("div",Ne,[a[35]||(a[35]=e("div",{class:"preview-header"},"Controles 3D",-1)),e("div",He,[e("div",Je,[(u(),v(f,null,b(F,s=>e("label",{key:s.key,class:"slider-row"},[e("span",Qe,o(s.label),1),h(e("input",{"onUpdate:modelValue":p=>i[s.key]=p,class:"slider-input",type:"range",min:s.min,max:s.max,step:s.step,disabled:s.key==="persp"&&!k.value},null,8,Ke),[[_,i[s.key],void 0,{number:!0}]]),e("span",We,o(s.key==="persp"&&!k.value?"none":i[s.key]+s.unit),1)])),64)),e("label",ea,[h(e("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>k.value=s),type:"checkbox"},null,512),[[Z,k.value]]),a[33]||(a[33]=e("span",null,"Activar perspective",-1))])]),a[34]||(a[34]=e("br",null,null,-1)),e("div",{class:"btn-toggle-group"},[e("button",{class:"demo-btn",onClick:B},"Reset")])])]),e("div",aa,[e("div",sa,[a[37]||(a[37]=e("div",{class:"preview-header"},"Resultado",-1)),e("div",{class:"preview-content scene3d",style:w({perspective:k.value?i.persp+"px":"none"})},[e("div",{class:"card3d",style:w({transform:L.value})},a[36]||(a[36]=[e("strong",null,"3D",-1),e("small",null,"rotateX · rotateY · rotateZ",-1)]),4)],4)]),n(l,{language:"css",code:G.value},null,8,["code"])])]),a[49]||(a[49]=e("br",null,null,-1)),a[50]||(a[50]=e("br",null,null,-1)),e("div",ta,[e("div",na,[a[39]||(a[39]=e("div",{class:"card-header"},[e("h3",null,"Funciones 3D")],-1)),e("div",oa,[e("table",la,[a[38]||(a[38]=e("thead",null,[e("tr",null,[e("th",null,"Función"),e("th",null,"Descripción")])],-1)),e("tbody",null,[(u(),v(f,null,b(N,s=>e("tr",{key:s.name},[e("td",null,[e("code",null,o(s.name),1)]),e("td",null,o(s.desc),1)])),64))])])])]),a[40]||(a[40]=m('<div class="card info" data-v-a51fdb06><div class="card-header" data-v-a51fdb06><h3 data-v-a51fdb06>Propiedades relacionadas</h3></div><ul class="def-list" data-v-a51fdb06><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>perspective:</span> en el <strong data-v-a51fdb06>padre</strong>; define la distancia de la cámara a todos sus hijos.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>perspective-origin:</span> punto de vista (por defecto el centro).</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>perspective():</span> función dentro de transform; afecta solo a ese elemento.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>transform-style:</span> preserve-3d mantiene el 3D de los hijos; con flat (por defecto) se aplanan.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>backface-visibility:</span> hidden oculta la cara trasera cuando el elemento queda de espaldas.</li></ul></div>',1))]),a[51]||(a[51]=e("h3",{class:"subsection-title"},"Cubo 3D con preserve-3d",-1)),e("div",da,[e("div",ra,[a[45]||(a[45]=e("div",{class:"preview-header"},"Cubo",-1)),e("div",ia,[e("div",ca,[e("div",{class:x(["cube",{spin:j.value}]),style:w(j.value?{}:{transform:"rotateX("+g.x+"deg) rotateY("+g.y+"deg)"})},a[41]||(a[41]=[m('<div class="face f1" data-v-a51fdb06>1</div><div class="face f2" data-v-a51fdb06>2</div><div class="face f3" data-v-a51fdb06>3</div><div class="face f4" data-v-a51fdb06>4</div><div class="face f5" data-v-a51fdb06>5</div><div class="face f6" data-v-a51fdb06>6</div>',6)]),6)]),e("div",va,[e("label",ua,[a[42]||(a[42]=e("span",{class:"slider-name"},"rotateX",-1)),h(e("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>g.x=s),class:"slider-input",type:"range",min:"-180",max:"180",step:"5",disabled:j.value},null,8,pa),[[_,g.x,void 0,{number:!0}]]),e("span",ma,o(g.x)+"deg",1)]),e("label",fa,[a[43]||(a[43]=e("span",{class:"slider-name"},"rotateY",-1)),h(e("input",{"onUpdate:modelValue":a[6]||(a[6]=s=>g.y=s),class:"slider-input",type:"range",min:"-180",max:"180",step:"5",disabled:j.value},null,8,ba),[[_,g.y,void 0,{number:!0}]]),e("span",ga,o(g.y)+"deg",1)]),e("label",xa,[h(e("input",{"onUpdate:modelValue":a[7]||(a[7]=s=>j.value=s),type:"checkbox"},null,512),[[Z,j.value]]),a[44]||(a[44]=e("span",null,"Rotación automática (animation)",-1))])])])]),e("div",null,[n(l,{language:"css",code:`.escena { perspective: 600px; }

.cubo {
  position: relative;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;      /* clave para el 3D */
}

.cara {
  position: absolute;
  inset: 0;
}

/* Cada cara se gira y se aleja del centro la mitad del lado */
.f1 { transform: rotateY(0deg)   translateZ(60px); }
.f2 { transform: rotateY(90deg)  translateZ(60px); }
.f3 { transform: rotateY(180deg) translateZ(60px); }
.f4 { transform: rotateY(-90deg) translateZ(60px); }
.f5 { transform: rotateX(90deg)  translateZ(60px); }
.f6 { transform: rotateX(-90deg) translateZ(60px); }

/* Animación continua */
@keyframes girar {
  from { transform: rotateX(-20deg) rotateY(0deg); }
  to   { transform: rotateX(-20deg) rotateY(360deg); }
}
.cubo.spin { animation: girar 8s linear infinite; }`})])]),a[52]||(a[52]=e("h3",{class:"subsection-title"},"Tarjeta que se voltea (backface-visibility)",-1)),e("div",ya,[a[46]||(a[46]=m('<div class="preview-container" data-v-a51fdb06><div class="preview-header" data-v-a51fdb06>Pasa el mouse o enfoca con Tab</div><div class="preview-content stage-center" data-v-a51fdb06><div class="flip-card" tabindex="0" data-v-a51fdb06><div class="flip-inner" data-v-a51fdb06><div class="flip-face flip-front" data-v-a51fdb06><strong data-v-a51fdb06>Frente</strong><small data-v-a51fdb06>Hover para voltear</small></div><div class="flip-face flip-back" data-v-a51fdb06><strong data-v-a51fdb06>Reverso</strong><small data-v-a51fdb06>backface-visibility: hidden</small></div></div></div></div></div>',1)),e("div",null,[n(l,{language:"css",code:`.flip-card {
  width: 220px;
  height: 140px;
  perspective: 800px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s;
}

.flip-card:hover .flip-inner,
.flip-card:focus-visible .flip-inner {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;       /* oculta la cara de espaldas */
}

.flip-back { transform: rotateY(180deg); }`})])])]),a[82]||(a[82]=e("hr",{class:"divider"},null,-1)),e("section",ka,[a[54]||(a[54]=e("h2",{class:"section-title css"},"matrix() y matrix3d()",-1)),a[55]||(a[55]=e("p",{class:"section-desc"},[t("Todas las funciones anteriores se reducen a una "),e("strong",null,"matriz"),t(". "),e("code",null,"matrix(a, b, c, d, tx, ty)"),t(" es la forma compacta de una transformación 2D. Rara vez se escribe a mano, pero es lo que devuelve "),e("code",null,"getComputedStyle()"),t(".")],-1)),e("div",wa,[a[53]||(a[53]=m('<div class="card info" data-v-a51fdb06><div class="card-header" data-v-a51fdb06><h3 data-v-a51fdb06>Equivalencias</h3></div><div class="table-responsive" data-v-a51fdb06><table class="custom-table" data-v-a51fdb06><thead data-v-a51fdb06><tr data-v-a51fdb06><th data-v-a51fdb06>Parámetro</th><th data-v-a51fdb06>Controla</th></tr></thead><tbody data-v-a51fdb06><tr data-v-a51fdb06><td data-v-a51fdb06><code data-v-a51fdb06>a</code></td><td data-v-a51fdb06>Escala en X (<code data-v-a51fdb06>scaleX</code>)</td></tr><tr data-v-a51fdb06><td data-v-a51fdb06><code data-v-a51fdb06>b</code></td><td data-v-a51fdb06>Sesgo vertical (<code data-v-a51fdb06>skewY</code>) / seno de la rotación</td></tr><tr data-v-a51fdb06><td data-v-a51fdb06><code data-v-a51fdb06>c</code></td><td data-v-a51fdb06>Sesgo horizontal (<code data-v-a51fdb06>skewX</code>) / -seno de la rotación</td></tr><tr data-v-a51fdb06><td data-v-a51fdb06><code data-v-a51fdb06>d</code></td><td data-v-a51fdb06>Escala en Y (<code data-v-a51fdb06>scaleY</code>)</td></tr><tr data-v-a51fdb06><td data-v-a51fdb06><code data-v-a51fdb06>tx</code>, <code data-v-a51fdb06>ty</code></td><td data-v-a51fdb06>Traslación en X e Y (<code data-v-a51fdb06>translate</code>)</td></tr></tbody></table></div></div>',1)),e("div",null,[n(l,{language:"css",code:`/* Equivalencias de matrix(a, b, c, d, tx, ty) */
transform: matrix(1, 0, 0, 1, 50, 20);   /* translate(50px, 20px) */
transform: matrix(1.5, 0, 0, 1.5, 0, 0); /* scale(1.5) */
transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0); /* rotate(30deg) */

/* Leer la matriz calculada con JavaScript */
const el = document.querySelector('.caja');
const matriz = getComputedStyle(el).transform;
console.log(matriz); // matrix(0.866, 0.5, -0.5, 0.866, 0, 0)

/* DOMMatrix permite manipularla */
const m = new DOMMatrix(matriz);
console.log(m.a, m.b, m.e, m.f);`})])])]),a[83]||(a[83]=e("hr",{class:"divider"},null,-1)),e("section",ha,[a[62]||(a[62]=e("h2",{class:"section-title css"},"Casos de uso reales",-1)),a[63]||(a[63]=e("p",{class:"section-desc"},[t("Patrones de interfaz muy habituales construidos con "),e("code",null,"transform"),t(".")],-1)),e("div",ja,[a[56]||(a[56]=e("div",{class:"preview-container"},[e("div",{class:"preview-header"},"Tarjeta que se eleva (hover)"),e("div",{class:"preview-content stage-center"},[e("div",{class:"lift-card",tabindex:"0"},[e("strong",null,"Plan Pro"),e("span",null,"Pasa el mouse")])])],-1)),e("div",null,[n(l,{language:"css",code:`.tarjeta {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.tarjeta:hover,
.tarjeta:focus-visible {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 16px 30px rgb(0 0 0 / 0.35);
}`})])]),a[64]||(a[64]=e("br",null,null,-1)),e("div",Xa,[a[57]||(a[57]=m('<div class="preview-container" data-v-a51fdb06><div class="preview-header" data-v-a51fdb06>Centrado absoluto</div><div class="preview-content" data-v-a51fdb06><div class="center-demo" data-v-a51fdb06><div class="center-item" data-v-a51fdb06>translate(-50%, -50%)</div></div></div></div>',1)),e("div",null,[n(l,{language:"css",code:`.contenedor { position: relative; }

.elemento {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* se desplaza la mitad de SU tamaño */
}

/* Alternativa moderna */
.contenedor { display: grid; place-items: center; }`})])]),a[65]||(a[65]=e("br",null,null,-1)),e("div",Ca,[a[58]||(a[58]=m('<div class="preview-container" data-v-a51fdb06><div class="preview-header" data-v-a51fdb06>Zoom de imagen (hover)</div><div class="preview-content stage-center" data-v-a51fdb06><div class="zoom-frame" data-v-a51fdb06><img class="zoom-img" src="'+K+'" alt="Imagen con zoom al pasar el mouse" data-v-a51fdb06></div></div></div>',1)),e("div",null,[n(l,{language:"css",code:`.marco { overflow: hidden; border-radius: 12px; }

.marco img {
  display: block;
  width: 100%;
  transition: transform 0.5s ease;
}

.marco:hover img { transform: scale(1.15); }`})])]),a[66]||(a[66]=e("br",null,null,-1)),e("div",Ya,[a[59]||(a[59]=e("div",{class:"preview-container"},[e("div",{class:"preview-header"},"Spinner de carga"),e("div",{class:"preview-content stage-center"},[e("div",{class:"spinner-ring",role:"status","aria-label":"Cargando"})])],-1)),e("div",null,[n(l,{language:"css",code:`.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid rgb(255 255 255 / 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: girar 0.9s linear infinite;
}

@keyframes girar {
  to { transform: rotate(360deg); }
}`})])]),a[67]||(a[67]=e("br",null,null,-1)),e("div",za,[e("div",_a,[a[61]||(a[61]=e("div",{class:"preview-header"},"Menú hamburguesa → X (clic)",-1)),e("div",$a,[e("button",{type:"button",class:x(["burger",{open:$.value}]),"aria-expanded":$.value,"aria-label":"Menú",onClick:a[8]||(a[8]=s=>$.value=!$.value)},a[60]||(a[60]=[e("span",{class:"bar"},null,-1),e("span",{class:"bar"},null,-1),e("span",{class:"bar"},null,-1)]),10,Da)])]),e("div",null,[n(l,{language:"css",code:`.burger { display: flex; flex-direction: column; gap: 5px; }

.bar {
  width: 26px;
  height: 3px;
  background: #fff;
  transition: transform 0.3s, opacity 0.3s;
}

/* gap 5px + altura 3px = 8px entre centros */
.burger.open .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.burger.open .bar:nth-child(2) { opacity: 0; }
.burger.open .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }`})])])]),a[84]||(a[84]=e("hr",{class:"divider"},null,-1)),e("section",Sa,[a[71]||(a[71]=e("h2",{class:"section-title css"},"Animación, rendimiento y accesibilidad",-1)),e("div",qa,[e("div",Pa,[a[68]||(a[68]=m('<div class="card-header" data-v-a51fdb06><h3 data-v-a51fdb06>Animar con transform</h3><span class="badge success" data-v-a51fdb06>Recomendado</span></div><p data-v-a51fdb06><code data-v-a51fdb06>transform</code> y <code data-v-a51fdb06>opacity</code> se animan en el <strong data-v-a51fdb06>compositor</strong> (GPU) sin reflow ni repaint. Prefiérelas frente a <code data-v-a51fdb06>top</code>, <code data-v-a51fdb06>left</code>, <code data-v-a51fdb06>width</code> o <code data-v-a51fdb06>margin</code>.</p>',2)),n(l,{language:"css",code:`/* Error: Provoca reflow en cada fotograma */
.caja { transition: left 0.3s; }
.caja:hover { left: 100px; }

/* Correcto: Solo composición */
.caja { transition: transform 0.3s; }
.caja:hover { transform: translateX(100px); }

/* Avisar al navegador (úsalo con moderación) */
.caja-animada { will-change: transform; }`})]),e("div",Ea,[a[69]||(a[69]=e("div",{class:"card-header"},[e("h3",null,"Respeta prefers-reduced-motion"),e("span",{class:"badge danger"},"A11y")],-1)),a[70]||(a[70]=e("p",null,"El movimiento intenso puede causar mareo a algunas personas. Desactiva o reduce las animaciones si el usuario lo pide en su sistema.",-1)),n(l,{language:"css",code:`@media (prefers-reduced-motion: reduce) {
  .caja,
  .tarjeta,
  .spinner {
    animation: none;
    transition: none;
  }
}`})])]),a[72]||(a[72]=m('<br data-v-a51fdb06><br data-v-a51fdb06><div class="card info" data-v-a51fdb06><div class="card-header" data-v-a51fdb06><h3 data-v-a51fdb06>Efectos secundarios a tener en cuenta</h3></div><ul class="def-list" data-v-a51fdb06><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Contexto de apilamiento:</span> cualquier transform distinto de none crea uno nuevo, lo que puede alterar el orden de z-index.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Bloque contenedor:</span> los descendientes con position: fixed pasan a posicionarse respecto al elemento transformado, no al viewport.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Desbordamiento:</span> el área transformada puede generar scroll, aunque el layout no cambie.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Texto borroso:</span> valores fraccionarios (por ejemplo translate(-50%, -50%) sobre tamaños impares) pueden dejar el texto o los bordes difuminados.</li><li data-v-a51fdb06><span class="def-term" data-v-a51fdb06>Clics y foco:</span> el área sensible sigue a la forma visual transformada; el elemento sigue ocupando su espacio original.</li></ul></div>',3))]),a[85]||(a[85]=e("hr",{class:"divider"},null,-1)),e("section",Za,[a[74]||(a[74]=e("h2",{class:"section-title css"},"Resumen de funciones",-1)),e("div",Va,[e("div",Ta,[e("table",Ra,[a[73]||(a[73]=e("thead",null,[e("tr",null,[e("th",null,"Función"),e("th",null,"Parámetros"),e("th",null,"Ejemplo")])],-1)),e("tbody",null,[(u(),v(f,null,b(H,s=>e("tr",{key:s.name},[e("td",null,[e("code",null,o(s.name),1)]),e("td",null,o(s.params),1),e("td",null,[e("code",null,o(s.example),1)])])),64))])])])])]),a[86]||(a[86]=e("hr",{class:"divider"},null,-1)),n(W,{references:[{techId:"css",moduleId:"position",text:"Posicionamiento"},{techId:"css",moduleId:"visual",text:"Efectos Visuales"},{techId:"css",moduleId:"clippath",text:"Clip-path"},{techId:"css",moduleId:"filtros",text:"Filtros"}]})]))}}),La=Q(Ua,[["__scopeId","data-v-a51fdb06"]]);export{La as default};
