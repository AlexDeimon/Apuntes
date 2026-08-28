<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Navbar</h1>
      <p class="subtitle">Barra de navegacion responsiva con soporte para branding, links, formularios, dropdowns y colapso en dispositivos moviles.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estructura Basica</h2>
      <p class="section-desc">La navbar de Bootstrap se construye con el elemento <code>nav</code> y una serie de clases. Requiere <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> para indicar el breakpoint en el que el menu debe expandirse.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Componentes de una Navbar</h3></div>
          <ul class="def-list">
            <li><span class="def-term">.navbar:</span> Contenedor principal. Siempre requerido.</li>
            <li><span class="def-term">.navbar-expand-{bp}:</span> Define el breakpoint de expansion. <code>lg</code> significa que el menu es horizontal en pantallas large y colapsa debajo de eso.</li>
            <li><span class="def-term">.navbar-brand:</span> Logotipo o nombre del sitio. Puede ser texto o imagen.</li>
            <li><span class="def-term">.navbar-toggler:</span> El boton hamburguesa visible en movil.</li>
            <li><span class="def-term">.collapse.navbar-collapse:</span> Contenedor del menu que se oculta/muestra. Se enlaza con el toggler via <code>data-bs-target</code>.</li>
            <li><span class="def-term">.navbar-nav:</span> Lista de enlaces de navegacion.</li>
            <li><span class="def-term">.nav-item / .nav-link:</span> Elemento e hipervinculo de cada item del menu.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Navbar Minima Funcional</h3></div>
          <CodeBlock language="html" code='<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
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
</nav>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Temas de Color</h2>
      <p class="section-desc">Bootstrap 5.3 introduce el atributo <code>data-bs-theme</code> como la forma moderna de controlar el color de la navbar. Las clases legacy <code>.navbar-light</code> y <code>.navbar-dark</code> siguen funcionando pero el nuevo sistema es mas flexible.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Con data-bs-theme (BS 5.3+)</h3></div>
          <p>Nuevo en Bootstrap 5.3: usar el atributo HTML en lugar de clases para definir el tema de color de componentes.</p>
          <CodeBlock language="html" code='<!-- Tema oscuro (nuevo metodo BS 5.3) -->
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
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">...</nav>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Variantes de Color</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button v-for="t in colorThemes" :key="t.key" :class="['demo-btn', { active: selectedTheme === t.key }]" @click="selectedTheme = t.key">{{ t.label }}</button>
            </div>
            <div class="navbar-preview" :class="selectedThemeData.containerClass">
              <div class="nb-brand">{{ selectedThemeData.brandText }}</div>
              <div class="nb-links">
                <a class="nb-link nb-active" href="#">Inicio</a>
                <a class="nb-link" href="#">Servicios</a>
                <a class="nb-link" href="#">Contacto</a>
              </div>
              <div class="nb-toggler">&#9776;</div>
            </div>
            <CodeBlock language="html" :code="selectedThemeData.code" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Contenido en la Navbar</h2>
      <p class="section-desc">La navbar puede incluir mucho mas que simples links: formularios de busqueda, dropdowns, texto, botones e incluso imagenes como logotipo.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Dropdown en la Navbar</h3></div>
          <CodeBlock language="html" code='<ul class="navbar-nav ms-auto">
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
</ul>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Contenido de Navbar</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: contentDemo === 'dropdown' }]" @click="contentDemo = 'dropdown'">Dropdown</button>
              <button :class="['demo-btn', { active: contentDemo === 'search' }]" @click="contentDemo = 'search'">Busqueda</button>
              <button :class="['demo-btn', { active: contentDemo === 'text' }]" @click="contentDemo = 'text'">Texto + Boton</button>
            </div>
            <div v-if="contentDemo === 'dropdown'" class="navbar-preview nb-dark">
              <div class="nb-brand">MiApp</div>
              <div class="nb-links">
                <a class="nb-link nb-active">Inicio</a>
                <div class="nb-dropdown-wrap">
                  <button class="nb-link nb-dropdown-btn" @click="dropdownOpen = !dropdownOpen">Productos ▾</button>
                  <div v-if="dropdownOpen" class="nb-dropdown-menu">
                    <a class="nb-dd-item">Electronica</a>
                    <a class="nb-dd-item">Ropa</a>
                    <hr class="nb-dd-divider">
                    <a class="nb-dd-item">Ver todo</a>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="contentDemo === 'search'" class="navbar-preview nb-dark">
              <div class="nb-brand">MiApp</div>
              <div class="nb-links">
                <a class="nb-link nb-active">Inicio</a>
              </div>
              <div class="nb-search-form">
                <input type="text" class="nb-search-input" placeholder="Buscar..." />
                <button class="nb-search-btn">Buscar</button>
              </div>
            </div>
            <div v-if="contentDemo === 'text'" class="navbar-preview nb-dark">
              <div class="nb-brand">MiApp</div>
              <div class="nb-links">
                <a class="nb-link nb-active">Inicio</a>
              </div>
              <span class="nb-text">Bienvenido, Alex</span>
              <button class="nb-btn-outline">Cerrar sesion</button>
            </div>
          </div>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Logotipo con Imagen</h3></div>
          <CodeBlock language="html" code='<!-- Solo imagen como brand -->
<a class="navbar-brand" href="#">
  <img src="/logo.svg" alt="Logo" width="30" height="30">
</a>

<!-- Imagen + texto -->
<a class="navbar-brand" href="#">
  <img src="/logo.svg" alt="Logo"
       width="30" height="30"
       class="d-inline-block align-text-top">
  MiEmpresa
</a>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Texto y Botones</h3></div>
          <CodeBlock language="html" code='<div class="collapse navbar-collapse">
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
</div>' />
          <div class="mini-navbar-preview">
            <div class="nb-brand nb-brand-sm">MiApp</div>
            <a class="nb-link nb-active nb-link-sm" href="#">Inicio</a>
            <span class="nb-text-sm">Bienvenido, Alex</span>
            <button class="nb-btn-outline nb-btn-sm">Cerrar sesion</button>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Posicionamiento</h2>
      <p class="section-desc">Bootstrap ofrece clases utilitarias para fijar la navbar en la parte superior o inferior de la pantalla, o para que se quede fija al hacer scroll.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Clases de Posicion</h3></div>
          <ul class="def-list">
            <li><span class="def-term">.sticky-top:</span> La navbar se fija en la parte superior al hacer scroll, pero empieza en su posicion natural en el documento. El contenido fluye normalmente. <strong>Recomendado</strong>.</li>
            <li><span class="def-term">.fixed-top:</span> La navbar esta siempre fija en la parte superior de la ventana (<code>position: fixed</code>). Requiere agregar <code>padding-top</code> al body para que no tape el contenido.</li>
            <li><span class="def-term">.fixed-bottom:</span> Igual que <code>fixed-top</code> pero en la parte inferior.</li>
          </ul>
          <CodeBlock language="html" code='<!-- Fija al hacer scroll (recomendado) -->
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
</nav>' />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Breakpoints de Expansion</h3></div>
          <p>El sufijo en <code>.navbar-expand-{bp}</code> controla en que anchura el menu se muestra horizontal. Debajo de ese breakpoint, se muestra el boton hamburguesa.</p>
          <ul class="def-list">
            <li><span class="def-term">.navbar-expand (sin sufijo):</span> Siempre horizontal, nunca colapsa.</li>
            <li><span class="def-term">.navbar-expand-sm:</span> Horizontal desde 576px.</li>
            <li><span class="def-term">.navbar-expand-md:</span> Horizontal desde 768px.</li>
            <li><span class="def-term">.navbar-expand-lg:</span> Horizontal desde 992px. <strong>El mas comun.</strong></li>
            <li><span class="def-term">.navbar-expand-xl:</span> Horizontal desde 1200px.</li>
            <li><span class="def-term">.navbar-expand-xxl:</span> Horizontal desde 1400px.</li>
          </ul>
          <CodeBlock language="html" code='<!-- Colapsa debajo de 992px -->
<nav class="navbar navbar-expand-lg ...">

<!-- Colapsa debajo de 768px -->
<nav class="navbar navbar-expand-md ...">

<!-- Nunca colapsa -->
<nav class="navbar navbar-expand ...">' />
        </div>
      </div>
    </section>

    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Contenedores en la Navbar</h2>
      <p class="section-desc">El contenedor interno de la navbar controla el ancho maximo del contenido y su centrado horizontal. Es un detalle clave para el layout de la navbar.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>.container vs .container-fluid</h3></div>
          <ul class="def-list">
            <li><span class="def-term">.container-fluid:</span> El contenido de la navbar ocupa el 100% del ancho. Es el valor por defecto cuando no se especifica contenedor.</li>
            <li><span class="def-term">.container:</span> El contenido de la navbar se limita al ancho maximo del breakpoint actual y se centra. Recomendado para sitios con layout centrado.</li>
            <li><span class="def-term">.container-{bp}:</span> Fluido hasta el breakpoint indicado, luego se comporta como <code>.container</code>.</li>
          </ul>
          <CodeBlock language="html" code='<!-- Navbar full width (todo el viewport) -->
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
</nav>' />
        </div>
        <div class="preview-container">
          <div class="preview-header">Demo: Contenedores y Alineacion</div>
          <div class="preview-content">
            <div class="btn-toggle-group">
              <button :class="['demo-btn', { active: containerDemo === 'fluid' }]" @click="containerDemo = 'fluid'">container-fluid</button>
              <button :class="['demo-btn', { active: containerDemo === 'fixed' }]" @click="containerDemo = 'fixed'">container</button>
              <button :class="['demo-btn', { active: containerDemo === 'left' }]" @click="containerDemo = 'left'">me-auto (izquierda)</button>
              <button :class="['demo-btn', { active: containerDemo === 'right' }]" @click="containerDemo = 'right'">ms-auto (derecha)</button>
              <button :class="['demo-btn', { active: containerDemo === 'center' }]" @click="containerDemo = 'center'">mx-auto (centro)</button>
            </div>
            <div v-if="containerDemo === 'fluid'" class="container-demo-wrap">
              <div class="navbar-preview nb-dark nb-preview-top">
                <div class="nb-brand">MiSitio</div>
                <div class="nb-links">
                  <a class="nb-link nb-active">Inicio</a>
                  <a class="nb-link">Sobre</a>
                </div>
              </div>
              <div class="container-label">← contenido ocupa el 100% del ancho →</div>
            </div>
            <div v-if="containerDemo === 'fixed'" class="container-demo-wrap">
              <div class="navbar-preview nb-dark nb-preview-top">
                <div class="nb-fixed-inner">
                  <div class="nb-brand">MiSitio</div>
                  <div class="nb-links">
                    <a class="nb-link nb-active">Inicio</a>
                    <a class="nb-link">Sobre</a>
                  </div>
                </div>
              </div>
              <div class="container-label">← contenido centrado con max-width →</div>
            </div>
            <div v-if="containerDemo === 'left'" class="navbar-preview nb-dark">
              <div class="nb-brand">MiSitio</div>
              <div class="nb-links">
                <a class="nb-link nb-active">Inicio</a>
                <a class="nb-link">Productos</a>
              </div>
              <span class="align-badge">Login ← ms-auto</span>
            </div>
            <div v-if="containerDemo === 'right'" class="navbar-preview nb-dark">
              <div class="nb-brand">MiSitio</div>
              <span class="align-badge">ms-auto →</span>
              <div class="nb-links">
                <a class="nb-link nb-active">Inicio</a>
                <a class="nb-link">Login</a>
              </div>
            </div>
            <div v-if="containerDemo === 'center'" class="navbar-preview nb-dark">
              <div class="nb-brand">MiSitio</div>
              <div class="nb-links nb-links-center">
                <a class="nb-link nb-active">Inicio</a>
                <a class="nb-link">Nosotros</a>
              </div>
              <button class="nb-btn-outline nb-btn-sm">Login</button>
            </div>
            <CodeBlock language="html" :code="containerDemoCode" />
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Control via JavaScript</h2>
      <p class="section-desc">Ademas de los atributos <code>data-bs-*</code>, puedes controlar el comportamiento de la navbar programaticamente con la API de Bootstrap o con JavaScript puro para detectar scroll.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>API de Collapse</h3></div>
          <p>La navbar usa el componente Collapse de Bootstrap internamente. Puedes manipularlo via JS:</p>
          <CodeBlock language="javascript" code='// Obtener la instancia del collapse
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
});' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'dropdown', text: 'Dropdown de Bootstrap' },
      { techId: 'bootstrap', moduleId: 'collapse', text: 'Collapse de Bootstrap' },
      { techId: 'js', moduleId: 'eventos', text: 'Eventos de JavaScript' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const selectedTheme = ref('dark')
const contentDemo = ref('dropdown')
const dropdownOpen = ref(false)
const containerDemo = ref('fluid')

const containerDemoCode = computed(() => {
  const codes: Record<string, string> = {
    fluid: '<nav class="navbar navbar-expand-lg bg-dark">\n  <div class="container-fluid">...</div>\n</nav>',
    fixed: '<nav class="navbar navbar-expand-lg bg-dark">\n  <div class="container">...</div>\n</nav>',
    left: '<div class="collapse navbar-collapse">\n  <ul class="navbar-nav me-auto">...links...</ul>\n  <ul class="navbar-nav">\n    <li class="nav-item"><a class="nav-link" href="#">Login</a></li>\n  </ul>\n</div>',
    right: '<div class="collapse navbar-collapse">\n  <ul class="navbar-nav ms-auto">\n    <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>\n    <li class="nav-item"><a class="nav-link" href="#">Login</a></li>\n  </ul>\n</div>',
    center: '<div class="collapse navbar-collapse">\n  <ul class="navbar-nav mx-auto">...links...</ul>\n  <button class="btn btn-outline-light">Login</button>\n</div>',
  }
  return codes[containerDemo.value] ?? ''
})

const colorThemes = [
  { key: 'dark', label: 'bg-dark' },
  { key: 'primary', label: 'bg-primary' },
  { key: 'success', label: 'bg-success' },
  { key: 'light', label: 'bg-light' },
  { key: 'danger', label: 'bg-danger' },
]

const themes: Record<string, { containerClass: string; brandText: string; code: string }> = {
  dark: {
    containerClass: 'nb-dark',
    brandText: 'MiSitio',
    code: '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">',
  },
  primary: {
    containerClass: 'nb-primary',
    brandText: 'MiSitio',
    code: '<nav class="navbar navbar-expand-lg navbar-dark bg-primary">',
  },
  success: {
    containerClass: 'nb-success',
    brandText: 'MiSitio',
    code: '<nav class="navbar navbar-expand-lg navbar-dark bg-success">',
  },
  light: {
    containerClass: 'nb-light',
    brandText: 'MiSitio',
    code: '<nav class="navbar navbar-expand-lg navbar-light bg-light">',
  },
  danger: {
    containerClass: 'nb-danger',
    brandText: 'MiSitio',
    code: '<nav class="navbar navbar-expand-lg navbar-dark bg-danger">',
  },
}

const selectedThemeData = computed(() => themes[selectedTheme.value])
</script>

<style scoped>
.btn-toggle-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}

.demo-btn {
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: monospace;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s;
}

.demo-btn.active,
.demo-btn:hover {
  background-color: var(--color-bootstrap);
  border-color: var(--color-bootstrap);
  color: #fff;
}

.navbar-preview {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.nb-dark    { background: #212529; }
.nb-primary { background: #0d6efd; }
.nb-success { background: #198754; }
.nb-light   { background: #f8f9fa; }
.nb-danger  { background: #dc3545; }

.nb-brand {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin-right: auto;
}

.nb-light .nb-brand { color: #212529; }

.nb-links {
  display: flex;
  gap: 1.2rem;
}

.nb-link {
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  transition: color 0.15s;
  font-size: 0.88rem;
}

.nb-link:hover { color: #fff; }
.nb-active { color: #fff !important; }

.nb-light .nb-link { color: rgba(0,0,0,0.55); }
.nb-light .nb-link:hover { color: rgba(0,0,0,0.9); }
.nb-light .nb-active { color: rgba(0,0,0,0.9) !important; }

.nb-toggler {
  color: rgba(255,255,255,0.55);
  font-size: 1.2rem;
  display: none;
}

@media (max-width: 600px) {
  .nb-links { display: none; }
  .nb-toggler { display: block; }
}

.nb-brand-sm { font-size: 0.9rem; }
.nb-link-sm  { font-size: 0.82rem; }

.nb-text-sm {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: 0.75rem;
}

.nb-btn-sm {
  font-size: 0.78rem;
  padding: 0.25rem 0.6rem;
}

.nb-preview-top {
  border-radius: 8px 8px 0 0;
  margin-bottom: 0;
}

.nb-fixed-inner {
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.nb-links-center {
  margin: 0 auto;
}

.demo-hint {
  font-size: 0.83rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.nb-dropdown-wrap {
  position: relative;
}

.nb-dropdown-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nb-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #2c2f33;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  min-width: 140px;
  z-index: 10;
  padding: 0.4rem 0;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

.nb-dd-item {
  display: block;
  padding: 0.45rem 1rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 0.85rem;
  transition: background-color 0.15s;
}

.nb-dd-item:hover {
  background: rgba(255,255,255,0.07);
  color: #fff;
}

.nb-dd-divider {
  border-color: rgba(255,255,255,0.1);
  margin: 0.3rem 0;
}

.nb-search-form {
  display: flex;
  gap: 0.4rem;
  margin-left: auto;
}

.nb-search-input {
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 0.82rem;
  width: 120px;
  outline: none;
}

.nb-search-input::placeholder { color: rgba(255,255,255,0.4); }

.nb-search-btn {
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.3);
  background: transparent;
  color: rgba(255,255,255,0.9);
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.15s;
}

.nb-search-btn:hover { background: rgba(255,255,255,0.1); }

.nb-text {
  color: rgba(255,255,255,0.55);
  font-size: 0.85rem;
  margin-left: auto;
  margin-right: 0.75rem;
}

.nb-btn-outline {
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.5);
  background: transparent;
  color: rgba(255,255,255,0.9);
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.15s;
}

.nb-btn-outline:hover {
  background: rgba(255,255,255,0.1);
}

.mini-navbar-preview {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 1rem;
  background: #212529;
  border-radius: 8px;
  margin-top: 1rem;
}

.container-demo-wrap {
  margin-bottom: 1rem;
}

.container-label {
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-secondary);
  padding: 0.4rem;
  background: rgba(0,0,0,0.15);
  border: 1px dashed rgba(255,255,255,0.1);
  border-radius: 0 0 8px 8px;
  margin-bottom: 1rem;
}

.align-badge {
  font-size: 0.75rem;
  color: #fbbf24;
  font-family: monospace;
  padding: 0.2rem 0.5rem;
  background: rgba(251,191,36,0.1);
  border: 1px solid rgba(251,191,36,0.25);
  border-radius: 4px;
  white-space: nowrap;
}
</style>
