<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Cards</h1>
      <p class="subtitle">Contenedores flexibles y extensibles para mostrar contenido variado con múltiples opciones de diseño.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estructura Básica</h2>
      <p class="section-desc">Construidos con flexbox, ofrecen una fácil alineación y se combinan bien con otros componentes de Bootstrap. No tienen margen por defecto. Las tarjetas no tienen un ancho fijo para comenzar, por lo que naturalmente llenarán todo el ancho de su elemento principal.</p>
      <ul class="list">
        <li>Se dispone de un div con la clase "card".</li>
        <li>Dentro del div se dispone de un div con la clase "card-body".</li>
        <li>Para el título de la tarjeta se dispone un <code>&lt;h4&gt;</code> fijando la clase "card-title".</li>
        <li>Se pueden agregar tambien subtítulos agregando la clase "card-subtitle".</li>
        <li>Los párrafos de la tarjeta tienen la clase "card-text".</li>
        <li>Los enlaces tienen la clase "card-link".</li>
        <li>Se pueden disponer botones dentro de la tarjeta y otros contenidos HTML.</li>
      </ul><br>
      <div class="cards-grid">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Titulo de la tarjeta 1</h4>
            <h5 class="card-subtitle">Subtítulo de la tarjeta</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui. </p>
            <a href="#" class="card-link">Enlace 1</a>
            <a href="#" class="card-link">Enlace 2</a><br><br>
            <a href="#" class="card-link btn btn-primary">Boton</a>
          </div>
        </div>
        <CodeBlock language="html" code='<div class="card text-center" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">Título de la tarjeta 1</h4>
    <h5 class="card-subtitle mb-2 text-muted">Subtítulo de la tarjeta</h5>
    <p class="card-text">Contenido de la tarjeta...</p>
    <a href="#" class="card-link">Enlace 1</a>
    <a href="#" class="card-link">Enlace 2</a>
    <a href="#" class="btn btn-primary">Boton</a>
  </div>
</div>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Imágenes (Top / Bottom / Overlay)</h2>
      <p class="section-desc">Puedes colocar imágenes en la parte superior, inferior o en superposición de la tarjeta usando <code>.card-img-top</code>, <code>.card-img-bottom</code> y <code>.card-img-overlay</code>.</p>
      <div class="cards-grid">
        <div class="card">
          <img class="card-img-top" src="@/assets/images/GZ01.webp" alt="game zone">
          <div class="card-body">
            <h4 class="card-title">Titulo de la tarjeta 2</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.</p>
            <a href="#" class="card-link btn btn-primary">Entrar</a>
          </div>
        </div>
        <CodeBlock language="html" code='<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">...</div>
</div>' />
      </div>
      <div class="cards-grid">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Titulo de la tarjeta 3</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.</p>
            <a href="#" class="card-link btn btn-primary">Entrar</a>
          </div>
          <img class="card-img-bottom" src="@/assets/images/GZ01.webp" alt="game zone">
        </div>
        <CodeBlock language="html" code='<div class="card">
  <div class="card-body">...</div>
  <img src="..." class="card-img-bottom" alt="...">
</div>' />
      </div>
      <div class="cards-grid">
        <div class="card">
          <img class="card-img-top" src="@/assets/images/portada.webp" alt="portada">
          <div class="card-img-overlay">
            <h4 class="card-title">Titulo de la tarjeta 4</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada.</p>
            <a href="#" class="card-link btn btn-primary">Entrar</a>
          </div>
        </div>
        <CodeBlock language="html" code='<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-img-overlay">...</div>
</div>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Header y Footer</h2>
      <p class="section-desc">Puedes agregar un encabezado y un pie de página a la tarjeta usando las clases <code>.card-header</code> y <code>.card-footer</code>.</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Encabezado de la tarjeta 5</h4>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.</p>
            <a href="#" class="card-link btn btn-primary">Entrar</a>
          </div>
          <div class="card-footer">
            <h4 class="card-title">Pie de la tarjeta</h4>
          </div>
        </div>
        <CodeBlock language="html" code='<div class="card">
  <div class="card-header">
    <h4 class="card-title">Encabezado de la tarjeta 5</h4>
  </div>
  <div class="card-body">...</div>
  <div class="card-footer">
    <h4 class="card-title">Pie de la tarjeta</h4>
  </div>
</div>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Navegación con pestañas</h2>
      <p class="section-desc">Otra variante que se puede implementar con las tarjetas de Bootstrap es el añadir pestañas de opciones en la parte superior.</p>
      <p class="section-desc">Las pestañas se agregan en la zona del la cabecera y se requieren las siguientes clases:</p>
      <ul class="def-list">
        <li><span class="def-term">.nav: </span>Clase base para la navegación</li>
        <li><span class="def-term">.nav-tabs: </span>Clase para las pestañas</li>
        <li><span class="def-term">.card-header-tabs: </span>Clase para las pestañas de la cabecera</li>
        <li><span class="def-term">.nav-item: </span>Elemento de la navegación</li>
        <li><span class="def-term">.nav-link: </span>Enlace de navegación</li>
      </ul>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Disabled</a></li>
            </ul>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.</p>
            <a href="#" class="card-link btn btn-primary">Entrar</a>
          </div>
        </div>
        <CodeBlock language="html" code='<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">...</div>
</div>' />
      </div>
      <p class="section-desc">En lugar de pestañas se puede mostrar una serie de enlaces y el seleccionado en forma de botón. Para lograr esto hay que sustituir las clases (nav-tabs card-header-tabs) por las clases (nav-pills card-header-pills):</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Disabled</a></li>
            </ul>
          </div>
          <div class="card-body">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue nec tortor sit amet, maximus mattis dui.</p>
            <a href="#" class="card-link btn btn-primary">Entrar</a>
          </div>
        </div>
        <CodeBlock language="html" code='<div class="card">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">...</div>
</div>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estilos</h2>
      <p class="section-desc">Para el color de fondo disponemos de diferentes clases:</p>
      <div class="cards-grid">
        <div class="card text-white bg-primary" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-primary</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-secondary" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-secondary</div>
          <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-success" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-success</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-danger" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-danger</div>
          <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-warning" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-warning</div>
          <div class="card-body">
            <h5 class="card-title p">Warning card title</h5>
            <p class="card-text p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-info" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-info</div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card bg-light" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-light</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card text-white bg-dark" style="max-width: 18rem;">
          <div class="card-header">Clase: bg-dark</div>
          <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <p class="section-desc">Tambien se puede modificar el color de texto y los bordes de las tarjetas con las clases text-* y border-*:</p>
      <div class="cards-grid">
        <div class="card border-primary text-primary" style="max-width: 18rem;">
          <div class="card-header">Clase: border-primary text-primary</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-secondary text-secondary" style="max-width: 18rem;">
          <div class="card-header">Clase: border-secondary text-secondary</div>
          <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-success text-success" style="max-width: 18rem;">
          <div class="card-header">Clase: border-success text-success</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-danger text-danger" style="max-width: 18rem;">
          <div class="card-header">Clase: border-danger text-danger</div>
          <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-warning text-warning" style="max-width: 18rem;">
          <div class="card-header">Clase: border-warning text-warning</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-info text-info" style="max-width: 18rem;">
          <div class="card-header">Clase: border-info text-info</div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-light text-light" style="max-width: 18rem;">
          <div class="card-header">Clase: border-light text-light</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card border-dark text-dark" style="max-width: 18rem;">
          <div class="card-header">Clase: border-dark text-dark</div>
          <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Grupos de Tarjetas</h2>
      <p class="section-desc">Para agrupar tarjetas, se utiliza la clase .card-group:</p>
      <div class="cards-grid">
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Titulo tarjeta 6</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Titulo tarjeta 7</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Titulo tarjeta 8</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
        </div>
      </div>
      <CodeBlock :language="'html'" code='<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Titulo tarjeta 6</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Titulo tarjeta 7</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Titulo tarjeta 8</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </div>
  </div>
</div>'/>
      <p class="section-desc">Para separar las tarjetas, se utiliza la clase .card-deck:</p>
      <div class="cards-grid">
        <div class="card-deck">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Titulo tarjeta 9</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Titulo tarjeta 10</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Titulo tarjeta 11</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider">
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'botones', text: 'Botones' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.card {
  width: 380px;
  text-align: center;
  margin-bottom: 20px;
  padding: 0;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
  color: #000;
}

.card-body {
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: .75rem;
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.card-subtitle {
  margin-top: -.375rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
}

.card-text {
  margin-top: 0;
  margin-bottom: 1rem;
}

.card-link {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

.card-link+.card-link {
  margin-left: 1.25rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
}

.card-img-bottom {
  width: 100%;
  border-bottom-left-radius: calc(.25rem - 1px);
  border-bottom-right-radius: calc(.25rem - 1px);
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-header,
.card-footer {
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, .03);
  border-bottom: 1px solid rgba(0, 0, 0, .125);
}

.card-header-tabs {
  margin-right: -.625rem;
  margin-bottom: -.75rem;
  margin-left: -.625rem;
  margin-top: 0;
  border-bottom: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
}

.nav-tabs .nav-link {
  margin-bottom: -1px;
}

.nav-tabs .nav-link.active {
  border: 1px solid transparent;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-link {
  display: block;
  padding: .5rem 1rem;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

.nav-pills .nav-link.active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.nav-pills .nav-link {
  border-radius: .25rem;
}

.text-white {
  color: #fff;
}

.bg-primary {
  background-color: #007bff;
}

.bg-secondary {
  background-color: #6c757d;
}

.bg-success {
  background-color: #28a745;
}

.bg-danger {
  background-color: #dc3545;
}

.bg-warning {
  background-color: #ffc107;
}

.bg-info {
  background-color: #17a2b8;
}

.bg-light {
  background-color: #f8f9fa;
}

.bg-dark {
  background-color: #343a40;
}

.border-primary {
  border-color: #007bff;
}

.border-secondary {
  border-color: #6c757d;
}

.border-success {
  border-color: #28a745;
}

.border-danger {
  border-color: #dc3545;
}

.border-warning {
  border-color: #ffc107;
}

.border-info {
  border-color: #17a2b8;
}

.border-light {
  border-color: #f8f9fa;
}

.border-dark {
  border-color: #343a40;
}

.card-group {
  display: flex;
  flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
}

.card-deck {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.card-deck .card {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1 0 0%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
}
</style>
