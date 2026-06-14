import{C as e}from"./CodeBlock-BzZmbN9f.js";import{d as i,c as s,a as n,b as d,e as t,o as c,_ as o}from"./index-_FTtpg_U.js";const l={class:"module-content"},r={class:"topic-section"},p={class:"cards-grid"},v=i({__name:"SeccionContenido",setup(h){return(g,a)=>(c(),s("div",l,[a[1]||(a[1]=n('<div class="header-section" data-v-e49d20ad><h1 class="main-title html" data-v-e49d20ad>Secciones de Contenido</h1><p class="subtitle" data-v-e49d20ad>Organizando la estructura semántica de la web</p></div><section class="topic-section" data-v-e49d20ad><h2 class="section-title html" data-v-e49d20ad>HTML Semántico</h2><p class="section-desc" data-v-e49d20ad>HTML5 introdujo etiquetas con significado semántico para definir las diferentes partes de una página web, en lugar de usar solo <code data-v-e49d20ad>&lt;div&gt;</code> genéricos.</p></section><section class="topic-section" data-v-e49d20ad><h2 class="section-title html" data-v-e49d20ad>Estructura Principal</h2><div class="cards-grid" data-v-e49d20ad><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;header&gt;</h3><span class="badge info" data-v-e49d20ad>Cabecera</span></div><p data-v-e49d20ad>Representa la cabecera de la página o de una sección. Suele contener el logo, título principal y navegación.</p></div><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;main&gt;</h3><span class="badge info" data-v-e49d20ad>Único</span></div><p data-v-e49d20ad>Contiene el contenido principal y único del documento. <strong data-v-e49d20ad>Solo debe haber uno por página</strong>.</p></div><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;footer&gt;</h3><span class="badge info" data-v-e49d20ad>Pie</span></div><p data-v-e49d20ad>El pie de página. Suele contener copyright, enlaces legales y datos de contacto.</p></div><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;nav&gt;</h3><span class="badge info" data-v-e49d20ad>Navegación</span></div><p data-v-e49d20ad>Sección destinada a enlaces de navegación (menú principal, índice, etc).</p></div></div></section><hr class="divider" data-v-e49d20ad><section class="topic-section" data-v-e49d20ad><h2 class="section-title html" data-v-e49d20ad>Agrupación de Contenido</h2><p class="section-desc" data-v-e49d20ad>Cómo organizar el contenido dentro del <code data-v-e49d20ad>&lt;main&gt;</code>.</p><div class="cards-grid" data-v-e49d20ad><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;article&gt;</h3><span class="badge info" data-v-e49d20ad>Independiente</span></div><p data-v-e49d20ad>Contenido que tiene sentido por sí mismo y podría distribuirse independientemente (ej: una noticia, un post de blog, un tweet).</p></div><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;section&gt;</h3><span class="badge info" data-v-e49d20ad>Relacionado</span></div><p data-v-e49d20ad>Un contenedor genérico para agrupar contenido temáticamente relacionado. Idealmente debe tener un título (h2-h6).</p></div><div class="card info" data-v-e49d20ad><div class="card-header" data-v-e49d20ad><h3 data-v-e49d20ad>&lt;aside&gt;</h3><span class="badge info" data-v-e49d20ad>Lateral</span></div><p data-v-e49d20ad>Contenido relacionado indirectamente con el principal (barras laterales, publicidad, &quot;ver también&quot;).</p></div></div></section><hr class="divider" data-v-e49d20ad>',6)),d("section",r,[a[0]||(a[0]=n('<h2 class="section-title html" data-v-e49d20ad>Ejemplo Visual</h2><p class="section-desc" data-v-e49d20ad>Representación visual de cómo se estructuran estas etiquetas.</p><div class="preview-container" data-v-e49d20ad><div class="preview-header" data-v-e49d20ad>Vista Previa (Layout Semántico)</div><div class="layout-demo" data-v-e49d20ad><header class="demo-header" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;header&gt;</span><h1 data-v-e49d20ad>Logo / Título</h1><nav class="demo-nav" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;nav&gt;</span>Inicio | Noticias | Contacto</nav></header><div class="demo-body" data-v-e49d20ad><main class="demo-main" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;main&gt;</span><section class="demo-section" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;section&gt;</span><h2 data-v-e49d20ad>Noticias Nacionales</h2><article class="demo-article" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;article&gt;</span><h3 data-v-e49d20ad>Noticia 1</h3><p data-v-e49d20ad>Descripción de la noticia 1...</p></article><article class="demo-article" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;article&gt;</span><h3 data-v-e49d20ad>Noticia 2</h3><p data-v-e49d20ad>Descripción de la noticia 2...</p></article></section><section class="demo-section" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;section&gt;</span><h2 data-v-e49d20ad>Noticias Internacionales</h2><article class="demo-article" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;article&gt;</span><h3 data-v-e49d20ad>Noticia 3</h3><p data-v-e49d20ad>Descripción de la noticia 3...</p></article><article class="demo-article" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;article&gt;</span><h3 data-v-e49d20ad>Noticia 4</h3><p data-v-e49d20ad>Descripción de la noticia 4...</p></article></section></main><aside class="demo-aside" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;aside&gt;</span><h3 data-v-e49d20ad>Publicidad</h3><p data-v-e49d20ad>Descripción de la publicidad...</p></aside></div><footer class="demo-footer" data-v-e49d20ad><span class="tag" data-v-e49d20ad>&lt;footer&gt;</span><p data-v-e49d20ad>Descripción del pie de página...</p></footer></div></div>',3)),d("div",p,[d("div",null,[t(e,{language:"html",code:`<body>
  <header>
    <nav>Links de navegación...</nav>
    <h1>Noticias Internacionales</h1>
  </header>

  <div class="container">
    <main>
      <section>
        <h2>Noticias Nacionales</h2>

        <article>
          <h3>Noticia 1</h3>
          <p>Descripción de la noticia 1...</p>
        </article>

        <article>
          <h3>Noticia 2</h3>
          <p>Descripción de la noticia 2...</p>
        </article>
      </section>
      <section>
        <h2>Noticias Internacionales</h2>

        <article>
          <h3>Noticia 3</h3>
          <p>Descripción de la noticia 3...</p>
        </article>

        <article>
          <h3>Noticia 4</h3>
          <p>Descripción de la noticia 4...</p>
        </article>
      </section>
    </main>

    <aside>
      <h3>Publicidad</h3>
      <p>Descripción de la publicidad...</p>
    </aside>
  </div>

  <footer>
    <p>Descripción del pie de página...</p>
  </footer>
</body>`})]),d("div",null,[t(e,{language:"css",code:`header,
footer,
main,
section,
aside,
article,
nav {
  position: relative;
  padding: 25px 15px 15px;
  border-radius: 4px;
  border: 2px dashed #444;
}

header {
  background: #2a2a35;
  border-color: #555;
}

nav {
  background: #1f2633;
  margin-bottom: 10px;
  border-color: #448cff;
}

body {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

main {
  flex: 2;
  background: #252526;
  border-color: #42b883;
  min-width: 250px;
}

section {
  background: #252526;
  border-color: #4279b8;
  min-width: 250px;
}

aside {
  flex: 1;
  background: #2a2a2a;
  border-color: #e6a23c;
  min-width: 150px;
}

article {
  background: #1e1e1e;
  margin-top: 10px;
  border-color: #ff4747;
  padding: 30px 10px 10px;
}

footer {
  background: #2a2a35;
  border-color: #555;
  text-align: center;
}`})])])])]))}}),b=o(v,[["__scopeId","data-v-e49d20ad"]]);export{b as default};
