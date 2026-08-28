import{C as t}from"./CodeBlock-CtOBzUo1.js";import{R as y}from"./ReferenceSection-Czya6LpB.js";import{d as S,r as p,g as k,c as i,b as e,e as o,f as c,a as l,F as B,k as I,i as r,t as f,l as b,o as d,_ as E}from"./index-DWaTpcs-.js";const L={class:"module-content"},M={class:"topic-section"},N={class:"cards-grid"},T={class:"card recommended"},q={class:"topic-section"},j={class:"cards-grid"},A={class:"card info"},D={class:"preview-container"},z={class:"preview-content"},P={class:"btn-toggle-group"},$=["onClick"],R={class:"nb-brand"},V={class:"topic-section"},F={class:"cards-grid"},H={class:"card info"},J={class:"preview-container"},O={class:"preview-content"},W={class:"btn-toggle-group"},G={key:0,class:"navbar-preview nb-dark"},K={class:"nb-links"},Q={class:"nb-dropdown-wrap"},U={key:0,class:"nb-dropdown-menu"},X={key:1,class:"navbar-preview nb-dark"},Y={key:2,class:"navbar-preview nb-dark"},Z={class:"cards-grid"},_={class:"card info"},aa={class:"card info"},ea={class:"topic-section"},na={class:"cards-grid"},sa={class:"card info"},la={class:"card info"},oa={class:"topic-section"},ta={class:"cards-grid"},ia={class:"card info"},da={class:"preview-container"},ra={class:"preview-content"},va={class:"btn-toggle-group"},ca={key:0,class:"container-demo-wrap"},ba={key:1,class:"container-demo-wrap"},pa={key:2,class:"navbar-preview nb-dark"},ua={key:3,class:"navbar-preview nb-dark"},ma={key:4,class:"navbar-preview nb-dark"},ga={class:"topic-section"},ka={class:"cards-grid"},fa={class:"card info"},xa=S({__name:"NavbarBootstrap",setup(ha){const u=p("dark"),v=p("dropdown"),m=p(!1),n=p("fluid"),x=k(()=>({fluid:`<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">...</div>
</nav>`,fixed:`<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">...</div>
</nav>`,left:`<div class="collapse navbar-collapse">
  <ul class="navbar-nav me-auto">...links...</ul>
  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
  </ul>
</div>`,right:`<div class="collapse navbar-collapse">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
  </ul>
</div>`,center:`<div class="collapse navbar-collapse">
  <ul class="navbar-nav mx-auto">...links...</ul>
  <button class="btn btn-outline-light">Login</button>
</div>`})[n.value]??""),h=[{key:"dark",label:"bg-dark"},{key:"primary",label:"bg-primary"},{key:"success",label:"bg-success"},{key:"light",label:"bg-light"},{key:"danger",label:"bg-danger"}],C={dark:{containerClass:"nb-dark",brandText:"MiSitio",code:'<nav class="navbar navbar-expand-lg navbar-dark bg-dark">'},primary:{containerClass:"nb-primary",brandText:"MiSitio",code:'<nav class="navbar navbar-expand-lg navbar-dark bg-primary">'},success:{containerClass:"nb-success",brandText:"MiSitio",code:'<nav class="navbar navbar-expand-lg navbar-dark bg-success">'},light:{containerClass:"nb-light",brandText:"MiSitio",code:'<nav class="navbar navbar-expand-lg navbar-light bg-light">'},danger:{containerClass:"nb-danger",brandText:"MiSitio",code:'<nav class="navbar navbar-expand-lg navbar-dark bg-danger">'}},g=k(()=>C[u.value]);return(w,a)=>(d(),i("div",L,[a[50]||(a[50]=e("div",{class:"header-section"},[e("h1",{class:"main-title bootstrap"},"Navbar"),e("p",{class:"subtitle"},"Barra de navegacion responsiva con soporte para branding, links, formularios, dropdowns y colapso en dispositivos moviles.")],-1)),e("section",M,[a[11]||(a[11]=e("h2",{class:"section-title bootstrap"},"Estructura Basica",-1)),a[12]||(a[12]=e("p",{class:"section-desc"},[c("La navbar de Bootstrap se construye con el elemento "),e("code",null,"nav"),c(" y una serie de clases. Requiere "),e("code",null,".navbar-expand{-sm|-md|-lg|-xl|-xxl}"),c(" para indicar el breakpoint en el que el menu debe expandirse.")],-1)),e("div",N,[a[10]||(a[10]=l('<div class="card info" data-v-4e3154e7><div class="card-header" data-v-4e3154e7><h3 data-v-4e3154e7>Componentes de una Navbar</h3></div><ul class="def-list" data-v-4e3154e7><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar:</span> Contenedor principal. Siempre requerido.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand-{bp}:</span> Define el breakpoint de expansion. <code data-v-4e3154e7>lg</code> significa que el menu es horizontal en pantallas large y colapsa debajo de eso.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-brand:</span> Logotipo o nombre del sitio. Puede ser texto o imagen.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-toggler:</span> El boton hamburguesa visible en movil.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.collapse.navbar-collapse:</span> Contenedor del menu que se oculta/muestra. Se enlaza con el toggler via <code data-v-4e3154e7>data-bs-target</code>.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-nav:</span> Lista de enlaces de navegacion.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.nav-item / .nav-link:</span> Elemento e hipervinculo de cada item del menu.</li></ul></div>',1)),e("div",T,[a[9]||(a[9]=e("div",{class:"card-header"},[e("h3",null,"Navbar Minima Funcional")],-1)),o(t,{language:"html",code:`<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <!-- Logotipo / Nombre del sitio -->
    <a class="navbar-brand" href="#">MiSitio</a>
    <!-- Boton hamburguesa (solo visible en movil) -->
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Contenido colapsable -->
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" aria-disabled="true">Inactivo</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`})])])]),a[51]||(a[51]=e("hr",{class:"divider"},null,-1)),e("section",q,[a[17]||(a[17]=e("h2",{class:"section-title bootstrap"},"Temas de Color",-1)),a[18]||(a[18]=e("p",{class:"section-desc"},[c("Bootstrap 5.3 introduce el atributo "),e("code",null,"data-bs-theme"),c(" como la forma moderna de controlar el color de la navbar. Las clases legacy "),e("code",null,".navbar-light"),c(" y "),e("code",null,".navbar-dark"),c(" siguen funcionando pero el nuevo sistema es mas flexible.")],-1)),e("div",j,[e("div",A,[a[13]||(a[13]=e("div",{class:"card-header"},[e("h3",null,"Con data-bs-theme (BS 5.3+)")],-1)),a[14]||(a[14]=e("p",null,"Nuevo en Bootstrap 5.3: usar el atributo HTML en lugar de clases para definir el tema de color de componentes.",-1)),o(t,{language:"html",code:`<!-- Tema oscuro (nuevo metodo BS 5.3) -->
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  ...
</nav>

<!-- Tema claro (nuevo metodo BS 5.3) -->
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
  ...
</nav>

<!-- Metodo clasico (aun valido) -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">...</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">...</nav>

<!-- Con color de utilidad -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">...</nav>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">...</nav>
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">...</nav>`})]),e("div",D,[a[16]||(a[16]=e("div",{class:"preview-header"},"Demo: Variantes de Color",-1)),e("div",z,[e("div",P,[(d(),i(B,null,I(h,s=>e("button",{key:s.key,class:r(["demo-btn",{active:u.value===s.key}]),onClick:Ca=>u.value=s.key},f(s.label),11,$)),64))]),e("div",{class:r(["navbar-preview",g.value.containerClass])},[e("div",R,f(g.value.brandText),1),a[15]||(a[15]=l('<div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" href="#" data-v-4e3154e7>Inicio</a><a class="nb-link" href="#" data-v-4e3154e7>Servicios</a><a class="nb-link" href="#" data-v-4e3154e7>Contacto</a></div><div class="nb-toggler" data-v-4e3154e7>☰</div>',2))],2),o(t,{language:"html",code:g.value.code},null,8,["code"])])])])]),a[52]||(a[52]=e("hr",{class:"divider"},null,-1)),e("section",V,[a[29]||(a[29]=e("h2",{class:"section-title bootstrap"},"Contenido en la Navbar",-1)),a[30]||(a[30]=e("p",{class:"section-desc"},"La navbar puede incluir mucho mas que simples links: formularios de busqueda, dropdowns, texto, botones e incluso imagenes como logotipo.",-1)),e("div",F,[e("div",H,[a[19]||(a[19]=e("div",{class:"card-header"},[e("h3",null,"Dropdown en la Navbar")],-1)),o(t,{language:"html",code:`<ul class="navbar-nav ms-auto">
  <!-- Link simple -->
  <li class="nav-item">
    <a class="nav-link" href="#">Inicio</a>
  </li>

  <!-- Dropdown -->
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button"
       data-bs-toggle="dropdown" aria-expanded="false">
      Productos
    </a>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><a class="dropdown-item" href="#">Electronica</a></li>
      <li><a class="dropdown-item" href="#">Ropa</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Ver todo</a></li>
    </ul>
  </li>
</ul>`})]),e("div",J,[a[25]||(a[25]=e("div",{class:"preview-header"},"Demo: Contenido de Navbar",-1)),e("div",O,[e("div",W,[e("button",{class:r(["demo-btn",{active:v.value==="dropdown"}]),onClick:a[0]||(a[0]=s=>v.value="dropdown")},"Dropdown",2),e("button",{class:r(["demo-btn",{active:v.value==="search"}]),onClick:a[1]||(a[1]=s=>v.value="search")},"Busqueda",2),e("button",{class:r(["demo-btn",{active:v.value==="text"}]),onClick:a[2]||(a[2]=s=>v.value="text")},"Texto + Boton",2)]),v.value==="dropdown"?(d(),i("div",G,[a[22]||(a[22]=e("div",{class:"nb-brand"},"MiApp",-1)),e("div",K,[a[21]||(a[21]=e("a",{class:"nb-link nb-active"},"Inicio",-1)),e("div",Q,[e("button",{class:"nb-link nb-dropdown-btn",onClick:a[3]||(a[3]=s=>m.value=!m.value)},"Productos ▾"),m.value?(d(),i("div",U,a[20]||(a[20]=[e("a",{class:"nb-dd-item"},"Electronica",-1),e("a",{class:"nb-dd-item"},"Ropa",-1),e("hr",{class:"nb-dd-divider"},null,-1),e("a",{class:"nb-dd-item"},"Ver todo",-1)]))):b("",!0)])])])):b("",!0),v.value==="search"?(d(),i("div",X,a[23]||(a[23]=[l('<div class="nb-brand" data-v-4e3154e7>MiApp</div><div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a></div><div class="nb-search-form" data-v-4e3154e7><input type="text" class="nb-search-input" placeholder="Buscar..." data-v-4e3154e7><button class="nb-search-btn" data-v-4e3154e7>Buscar</button></div>',3)]))):b("",!0),v.value==="text"?(d(),i("div",Y,a[24]||(a[24]=[l('<div class="nb-brand" data-v-4e3154e7>MiApp</div><div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a></div><span class="nb-text" data-v-4e3154e7>Bienvenido, Alex</span><button class="nb-btn-outline" data-v-4e3154e7>Cerrar sesion</button>',4)]))):b("",!0)])])]),a[31]||(a[31]=e("br",null,null,-1)),a[32]||(a[32]=e("br",null,null,-1)),e("div",Z,[e("div",_,[a[26]||(a[26]=e("div",{class:"card-header"},[e("h3",null,"Logotipo con Imagen")],-1)),o(t,{language:"html",code:`<!-- Solo imagen como brand -->
<a class="navbar-brand" href="#">
  <img src="/logo.svg" alt="Logo" width="30" height="30">
</a>

<!-- Imagen + texto -->
<a class="navbar-brand" href="#">
  <img src="/logo.svg" alt="Logo"
       width="30" height="30"
       class="d-inline-block align-text-top">
  MiEmpresa
</a>`})]),e("div",aa,[a[27]||(a[27]=e("div",{class:"card-header"},[e("h3",null,"Texto y Botones")],-1)),o(t,{language:"html",code:`<div class="collapse navbar-collapse">
  <ul class="navbar-nav me-auto">
    <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
  </ul>

  <!-- Texto en la navbar -->
  <span class="navbar-text me-3">
    Bienvenido, Alex
  </span>

  <!-- Boton (NO nav-link) -->
  <button class="btn btn-outline-light" type="button">
    Cerrar sesion
  </button>
</div>`}),a[28]||(a[28]=l('<div class="mini-navbar-preview" data-v-4e3154e7><div class="nb-brand nb-brand-sm" data-v-4e3154e7>MiApp</div><a class="nb-link nb-active nb-link-sm" href="#" data-v-4e3154e7>Inicio</a><span class="nb-text-sm" data-v-4e3154e7>Bienvenido, Alex</span><button class="nb-btn-outline nb-btn-sm" data-v-4e3154e7>Cerrar sesion</button></div>',1))])])]),a[53]||(a[53]=e("hr",{class:"divider"},null,-1)),e("section",ea,[a[35]||(a[35]=e("h2",{class:"section-title bootstrap"},"Posicionamiento",-1)),a[36]||(a[36]=e("p",{class:"section-desc"},"Bootstrap ofrece clases utilitarias para fijar la navbar en la parte superior o inferior de la pantalla, o para que se quede fija al hacer scroll.",-1)),e("div",na,[e("div",sa,[a[33]||(a[33]=l('<div class="card-header" data-v-4e3154e7><h3 data-v-4e3154e7>Clases de Posicion</h3></div><ul class="def-list" data-v-4e3154e7><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.sticky-top:</span> La navbar se fija en la parte superior al hacer scroll, pero empieza en su posicion natural en el documento. El contenido fluye normalmente. <strong data-v-4e3154e7>Recomendado</strong>.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.fixed-top:</span> La navbar esta siempre fija en la parte superior de la ventana (<code data-v-4e3154e7>position: fixed</code>). Requiere agregar <code data-v-4e3154e7>padding-top</code> al body para que no tape el contenido.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.fixed-bottom:</span> Igual que <code data-v-4e3154e7>fixed-top</code> pero en la parte inferior.</li></ul>',2)),o(t,{language:"html",code:`<!-- Fija al hacer scroll (recomendado) -->
<nav class="navbar navbar-expand-lg bg-dark sticky-top">
  ...
</nav>

<!-- Siempre fija arriba (requiere padding en body) -->
<nav class="navbar navbar-expand-lg bg-dark fixed-top">
  ...
</nav>
<!-- En CSS: body { padding-top: 56px; } -->

<!-- Fija abajo -->
<nav class="navbar navbar-expand-lg bg-dark fixed-bottom">
  ...
</nav>`})]),e("div",la,[a[34]||(a[34]=l('<div class="card-header" data-v-4e3154e7><h3 data-v-4e3154e7>Breakpoints de Expansion</h3></div><p data-v-4e3154e7>El sufijo en <code data-v-4e3154e7>.navbar-expand-{bp}</code> controla en que anchura el menu se muestra horizontal. Debajo de ese breakpoint, se muestra el boton hamburguesa.</p><ul class="def-list" data-v-4e3154e7><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand (sin sufijo):</span> Siempre horizontal, nunca colapsa.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand-sm:</span> Horizontal desde 576px.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand-md:</span> Horizontal desde 768px.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand-lg:</span> Horizontal desde 992px. <strong data-v-4e3154e7>El mas comun.</strong></li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand-xl:</span> Horizontal desde 1200px.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.navbar-expand-xxl:</span> Horizontal desde 1400px.</li></ul>',3)),o(t,{language:"html",code:`<!-- Colapsa debajo de 992px -->
<nav class="navbar navbar-expand-lg ...">

<!-- Colapsa debajo de 768px -->
<nav class="navbar navbar-expand-md ...">

<!-- Nunca colapsa -->
<nav class="navbar navbar-expand ...">`})])])]),a[54]||(a[54]=e("hr",{class:"divider"},null,-1)),e("section",oa,[a[44]||(a[44]=e("h2",{class:"section-title bootstrap"},"Contenedores en la Navbar",-1)),a[45]||(a[45]=e("p",{class:"section-desc"},"El contenedor interno de la navbar controla el ancho maximo del contenido y su centrado horizontal. Es un detalle clave para el layout de la navbar.",-1)),e("div",ta,[e("div",ia,[a[37]||(a[37]=l('<div class="card-header" data-v-4e3154e7><h3 data-v-4e3154e7>.container vs .container-fluid</h3></div><ul class="def-list" data-v-4e3154e7><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.container-fluid:</span> El contenido de la navbar ocupa el 100% del ancho. Es el valor por defecto cuando no se especifica contenedor.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.container:</span> El contenido de la navbar se limita al ancho maximo del breakpoint actual y se centra. Recomendado para sitios con layout centrado.</li><li data-v-4e3154e7><span class="def-term" data-v-4e3154e7>.container-{bp}:</span> Fluido hasta el breakpoint indicado, luego se comporta como <code data-v-4e3154e7>.container</code>.</li></ul>',2)),o(t,{language:"html",code:`<!-- Navbar full width (todo el viewport) -->
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Full Width</a>
  </div>
</nav>

<!-- Navbar con contenido centrado y ancho maximo -->
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Centrada</a>
  </div>
</nav>`})]),e("div",da,[a[43]||(a[43]=e("div",{class:"preview-header"},"Demo: Contenedores y Alineacion",-1)),e("div",ra,[e("div",va,[e("button",{class:r(["demo-btn",{active:n.value==="fluid"}]),onClick:a[4]||(a[4]=s=>n.value="fluid")},"container-fluid",2),e("button",{class:r(["demo-btn",{active:n.value==="fixed"}]),onClick:a[5]||(a[5]=s=>n.value="fixed")},"container",2),e("button",{class:r(["demo-btn",{active:n.value==="left"}]),onClick:a[6]||(a[6]=s=>n.value="left")},"me-auto (izquierda)",2),e("button",{class:r(["demo-btn",{active:n.value==="right"}]),onClick:a[7]||(a[7]=s=>n.value="right")},"ms-auto (derecha)",2),e("button",{class:r(["demo-btn",{active:n.value==="center"}]),onClick:a[8]||(a[8]=s=>n.value="center")},"mx-auto (centro)",2)]),n.value==="fluid"?(d(),i("div",ca,a[38]||(a[38]=[l('<div class="navbar-preview nb-dark nb-preview-top" data-v-4e3154e7><div class="nb-brand" data-v-4e3154e7>MiSitio</div><div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a><a class="nb-link" data-v-4e3154e7>Sobre</a></div></div><div class="container-label" data-v-4e3154e7>← contenido ocupa el 100% del ancho →</div>',2)]))):b("",!0),n.value==="fixed"?(d(),i("div",ba,a[39]||(a[39]=[l('<div class="navbar-preview nb-dark nb-preview-top" data-v-4e3154e7><div class="nb-fixed-inner" data-v-4e3154e7><div class="nb-brand" data-v-4e3154e7>MiSitio</div><div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a><a class="nb-link" data-v-4e3154e7>Sobre</a></div></div></div><div class="container-label" data-v-4e3154e7>← contenido centrado con max-width →</div>',2)]))):b("",!0),n.value==="left"?(d(),i("div",pa,a[40]||(a[40]=[l('<div class="nb-brand" data-v-4e3154e7>MiSitio</div><div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a><a class="nb-link" data-v-4e3154e7>Productos</a></div><span class="align-badge" data-v-4e3154e7>Login ← ms-auto</span>',3)]))):b("",!0),n.value==="right"?(d(),i("div",ua,a[41]||(a[41]=[l('<div class="nb-brand" data-v-4e3154e7>MiSitio</div><span class="align-badge" data-v-4e3154e7>ms-auto →</span><div class="nb-links" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a><a class="nb-link" data-v-4e3154e7>Login</a></div>',3)]))):b("",!0),n.value==="center"?(d(),i("div",ma,a[42]||(a[42]=[l('<div class="nb-brand" data-v-4e3154e7>MiSitio</div><div class="nb-links nb-links-center" data-v-4e3154e7><a class="nb-link nb-active" data-v-4e3154e7>Inicio</a><a class="nb-link" data-v-4e3154e7>Nosotros</a></div><button class="nb-btn-outline nb-btn-sm" data-v-4e3154e7>Login</button>',3)]))):b("",!0),o(t,{language:"html",code:x.value},null,8,["code"])])])])]),a[55]||(a[55]=e("hr",{class:"divider"},null,-1)),e("section",ga,[a[48]||(a[48]=e("h2",{class:"section-title bootstrap"},"Control via JavaScript",-1)),a[49]||(a[49]=e("p",{class:"section-desc"},[c("Ademas de los atributos "),e("code",null,"data-bs-*"),c(", puedes controlar el comportamiento de la navbar programaticamente con la API de Bootstrap o con JavaScript puro para detectar scroll.")],-1)),e("div",ka,[e("div",fa,[a[46]||(a[46]=e("div",{class:"card-header"},[e("h3",null,"API de Collapse")],-1)),a[47]||(a[47]=e("p",null,"La navbar usa el componente Collapse de Bootstrap internamente. Puedes manipularlo via JS:",-1)),o(t,{language:"javascript",code:`// Obtener la instancia del collapse
const navCollapse = document.getElementById("navMenu");
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);

// Metodos
bsCollapse.show();    // Abrir el menu
bsCollapse.hide();    // Cerrar el menu
bsCollapse.toggle();  // Alternar

// Cerrar el menu al hacer click en un link (util en SPAs)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.hide();
  });
});

// Eventos del collapse
navCollapse.addEventListener("show.bs.collapse", () => {
  console.log("El menu se esta abriendo");
});
navCollapse.addEventListener("hidden.bs.collapse", () => {
  console.log("El menu esta completamente cerrado");
});`})])])]),a[56]||(a[56]=e("hr",{class:"divider"},null,-1)),o(y,{references:[{techId:"bootstrap",moduleId:"dropdown",text:"Dropdown de Bootstrap"},{techId:"bootstrap",moduleId:"collapse",text:"Collapse de Bootstrap"},{techId:"js",moduleId:"eventos",text:"Eventos de JavaScript"}]})]))}}),Ba=E(xa,[["__scopeId","data-v-4e3154e7"]]);export{Ba as default};
