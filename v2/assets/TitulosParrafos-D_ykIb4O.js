import{C as i}from"./CodeBlock-Bole2OrV.js";import{d as m,u as f,c as d,b as e,F as y,r as P,w as H,t as I,m as p,o as c,_ as v,e as r,f as l,a as h}from"./index-DnFFZ2vN.js";const S={class:"reference-list"},_=["onClick"],w=m({__name:"ReferenceSection",props:{references:{}},setup(g){const u=f(),a=s=>{const t=p[s.techId],o=t==null?void 0:t.find(n=>n.id===s.moduleId);return(o==null?void 0:o.name)||"Enlace desconocido"},b=s=>{const t=p[s.techId],o=t==null?void 0:t.find(n=>n.id===s.moduleId);o?u.addTab({id:`${s.techId}-${s.moduleId}`,title:o.name,route:`/${s.techId}/${s.moduleId}`,moduleId:s.moduleId,techId:s.techId}):console.warn(`Module not found: ${s.techId}/${s.moduleId}`)};return(s,t)=>(c(),d("section",null,[t[0]||(t[0]=e("h2",{class:"section-title"},"Referencias",-1)),e("ul",S,[(c(!0),d(y,null,P(s.references,(o,n)=>(c(),d("li",{key:n,class:"reference-item"},[e("a",{href:"#",onClick:H(k=>b(o),["prevent"]),class:"link-external"},I(o.text||a(o)),9,_)]))),128))])]))}}),q=v(w,[["__scopeId","data-v-c1cedf69"]]),T={class:"module-content"},E={class:"topic-section"},x={class:"cards-grid"},$={class:"topic-section"},R={class:"topic-section"},j={class:"cards-grid"},z=m({__name:"TitulosParrafos",setup(g){return(u,a)=>(c(),d("div",T,[a[6]||(a[6]=e("div",{class:"header-section"},[e("h1",{class:"main-title html"},"Títulos y Párrafos"),e("p",{class:"subtitle"},"La estructura fundamental del contenido web")],-1)),e("section",E,[a[1]||(a[1]=e("h2",{class:"section-title"},"Encabezados",-1)),a[2]||(a[2]=e("p",{class:"section-desc"},[l("HTML ofrece 6 niveles de títulos, desde "),e("code",null,"<h1>"),l(" hasta "),e("code",null,"<h6>"),l(". Son fundamentales para la jerarquía del documento y el SEO. ")],-1)),e("div",x,[a[0]||(a[0]=h('<div class="card" data-v-91a6e67b><div class="card-header" data-v-91a6e67b><h3 data-v-91a6e67b>Jerarquía y Uso</h3></div><ul class="hierarchy-list" data-v-91a6e67b><li data-v-91a6e67b><strong class="tag" data-v-91a6e67b>&lt;h1&gt;</strong>: Título principal (Solo uno por página).</li><li data-v-91a6e67b><strong class="tag" data-v-91a6e67b>&lt;h2&gt;</strong>: Títulos de secciones principales.</li><li data-v-91a6e67b><strong class="tag" data-v-91a6e67b>&lt;h3&gt;</strong>: Subtítulos dentro de las secciones.</li><li data-v-91a6e67b><strong class="tag" data-v-91a6e67b>&lt;h4&gt; - &lt;h6&gt;</strong>: Sub-niveles de menor importancia.</li></ul></div>',1)),r(i,{language:"html",code:`<h1>Título Principal</h1>
<h2>Sección Importante</h2>
<h3>Sub-sección</h3>
<h4>Título nivel 4</h4>
<h5>Título nivel 5</h5>
<h6>Título nivel 6</h6>`})])]),a[7]||(a[7]=e("hr",{class:"divider"},null,-1)),e("section",$,[a[3]||(a[3]=e("h2",{class:"section-title"},"Párrafos",-1)),a[4]||(a[4]=e("p",{class:"section-desc"},[l("La etiqueta "),e("code",null,"<p>"),l(" define un párrafo. Los navegadores añaden automáticamente un margen antes y después de cada párrafo. Son elementos de bloque, lo que significa que siempre empiezan en una nueva línea y ocupan todo el ancho disponible.")],-1)),r(i,{language:"html",code:`<p>Este es un párrafo de texto estándar.</p>
<p>Este es otro párrafo que aparecerá debajo del primero.</p>`})]),a[8]||(a[8]=e("hr",{class:"divider"},null,-1)),e("section",R,[a[5]||(a[5]=h('<h2 class="section-title" data-v-91a6e67b>Ejemplo</h2><p class="section-desc" data-v-91a6e67b>Estructura real de un artículo usando la jerarquía correcta.</p><div class="preview-container" data-v-91a6e67b><div class="preview-header" data-v-91a6e67b>Vista Previa</div><div class="preview-content" data-v-91a6e67b><h1 class="preview-h1" data-v-91a6e67b>Harry Potter</h1><h2 class="preview-h2" data-v-91a6e67b>Sinopsis</h2><p data-v-91a6e67b>Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.</p><p data-v-91a6e67b>El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien asesinó a los padres de Harry en su afán de conquistar el mundo mágico.</p><h2 class="preview-h2" data-v-91a6e67b>Novelas</h2><h3 class="preview-h3" data-v-91a6e67b>Harry Potter y la Piedra Filosofal</h3><p data-v-91a6e67b>Harry Potter y la piedra filosofal (Harry Potter and the Philosopher&#39;s Stone) es el primer libro de la serie, fue publicado en Reino Unido el 26 de junio de 1997 y en español en marzo de 1999.</p><p data-v-91a6e67b>Se trata de uno de los libros más vendidos de la historia, las estimaciones de sus ventas mundiales superan los 110 millones de copias.</p><h4 class="preview-h4" data-v-91a6e67b>Personajes Principales</h4><p data-v-91a6e67b>Harry Potter, Ron Weasley &amp; Hermione Granger</p></div></div>',3)),e("div",j,[e("div",null,[r(i,{language:"html",code:`<h1>Harry Potter</h1>

<h2>Sinopsis</h2>
<p>Harry Potter es una serie de novelas fantásticas...</p>

<h2>Novelas</h2>
<h3>Harry Potter y la Piedra Filosofal</h3>
<p>Es el primer libro de la serie...</p>

<h4>Personajes Principales</h4>
<p>Harry Potter, Ron Weasley & Hermione Granger</p>`})]),e("div",null,[r(i,{language:"css",code:`h1 {
  color: #222;
  font-size: 2.5rem;
  margin-top: 0;
  border-bottom: 2px solid #ff4747;
  padding-bottom: 0.5rem;
}

h2 {
  color: #ff4747;
  font-size: 1.8rem;
  margin-top: 2rem;
}

h3 {
  color: #d35400;
  font-size: 1.4rem;
}

h4 {
  color: #7f8c8d;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-top: 1.5rem;
}`})])])]),r(q,{references:[{techId:"css",moduleId:"fundamentos",text:"Fundamentos de CSS"}]})]))}}),V=v(z,[["__scopeId","data-v-91a6e67b"]]);export{V as default};
