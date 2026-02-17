<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Tablas en Bootstrap</h1>
      <p class="subtitle">Estilos rápidos y responsivos para datos tabulares.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estilos Base</h2>
      <p class="section-desc">La clase <code>.table</code> agrega un estilizado básico (padding ligero y divisores horizontales). Puedes invertir los colores con <code>.table-dark</code>.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Tabla Básica</h3>
            <span class="badge success">Estándar</span>
          </div>
          <p>Solo requiere la clase base.</p>
          <CodeBlock language="html" code='<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Gustavo</td>
      <td>Bernate</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Santiago</td>
      <td>Devia</td>
      <td>21</td>
    </tr>
  </tbody>
</table>' />
          <div class="demo-box">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Edad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Gustavo</td>
                  <td>Bernate</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Santiago</td>
                  <td>Devia</td>
                  <td>21</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Tabla Oscura</h3>
          </div>
          <p>Invierte los colores para fondos oscuros.</p>
          <CodeBlock language="html" code='<table class="table table-dark">
  ...
</table>' />
          <div class="demo-box">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Edad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Gustavo</td>
                  <td>Bernate</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Santiago</td>
                  <td>Devia</td>
                  <td>21</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Variantes de Estilo</h2>
      <p class="section-desc">Mejora la legibilidad con rayas, bordes y efectos hover.</p>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>Striped (Rayada)</h3>
          </div>
          <p><code>.table-striped</code> agrega un color de fondo alternado a las filas (zebra-striping).</p>
          <CodeBlock language="html" code='<table class="table table-striped">
  ...
</table>' />
          <div class="demo-box">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mateo</td>
                  <td>Delgado</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Henry</td>
                  <td>Marin</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Greg</td>
                  <td>House</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Hoverable (Interactiva)</h3>
          </div>
          <p><code>.table-hover</code> resalta la fila cuando el mouse pasa por encima.</p>
          <CodeBlock language="html" code='<table class="table table-hover">
  ...
</table>' />
          <div class="demo-box">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Lisa</td>
                  <td>Cuddy</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Tobias</td>
                  <td>Forge</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Anakin</td>
                  <td>Skywalker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>Bordered (Bordes)</h3>
          </div>
          <p><code>.table-bordered</code> agrega bordes a todos los lados de la tabla y celdas.</p>
          <CodeBlock language="html" code='<table class="table table-bordered">
  ...
</table>' />
          <div class="demo-box">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Bill</td>
                  <td>Cipher</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>James</td>
                  <td>Wilson</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Stanley</td>
                  <td>Pines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Borderless (Sin Bordes)</h3>
          </div>
          <p><code>.table-borderless</code> elimina todos los bordes.</p>
          <CodeBlock language="html" code='<table class="table table-borderless">
  ...
</table>' />
          <div class="demo-box">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Robert</td>
                  <td>Chase</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jake</td>
                  <td>Sulley</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Agnes</td>
                  <td>Nielsen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Cabeceras y Tamaños</h2>
      <div class="cards-grid">
        <div class="card">
          <h3>Personalizar &lt;thead&gt;</h3>
          <p>Usa <code>.table-light</code> o <code>.table-dark</code> directamente en la etiqueta <code>&lt;thead&gt;</code>.</p>
          <CodeBlock language="html" code='<table class="table">
  <thead class="table-dark">
    ...
  </thead>
</table>' />
          <div class="demo-box">
            <table class="table">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Peter</td>
                  <td>Parker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <h3>Tabla Compacta</h3>
          <p><code>.table-sm</code> reduce el padding de las celdas a la mitad para mostrar más datos.</p>
          <CodeBlock language="html" code='<table class="table table-sm">
  ...
</table>' />
          <div class="demo-box">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Padme</td>
                  <td>Amidala</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Ivan</td>
                  <td>Pereira</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Tablas Responsivas</h2>
      <p class="section-desc">Las tablas pueden desbordarse en móviles. Para solucionarlo, envuelve la tabla en un
        contenedor con <code>.table-responsive</code>.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Scroll Horizontal</h3>
            <span class="badge success">Móvil</span>
          </div>
          <p>Esto habilita el scroll horizontal solo cuando es necesario.</p>
          <CodeBlock language="html" code='<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>' />
          <div class="demo-box">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Cabecera 1</th>
                    <th>Cabecera 2</th>
                    <th>Cabecera 3</th>
                    <th>Cabecera 4</th>
                    <th>Cabecera 5</th>
                    <th>Cabecera 6</th>
                    <th>Cabecera 7</th>
                    <th>Cabecera 8</th>
                    <th>Cabecera 9</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td style="white-space:nowrap;">Contenido de la celda muy largo</td>
                    <td>Celda</td>
                    <td>Celda</td>
                    <td>Celda</td>
                    <td>Celda</td>
                    <td>Celda</td>
                    <td>Celda</td>
                    <td>Celda</td>
                    <td>Celda</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <small class="text-muted d-block mt-2">Intenta hacer scroll horizontal si la pantalla es pequeña.</small>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<style scoped>
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #e0e0e0;
  vertical-align: top;
  border-color: #3c3c3c;
  border-collapse: collapse;
}

.table> :not(caption)>*>* {
  padding: 0.5rem 0.5rem;
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px transparent;
}

.table>tbody {
  vertical-align: inherit;
}

.table>thead {
  vertical-align: bottom;
  border-bottom: 2px solid #5a5a5a;
}

.table th,
.table td {
  border-bottom: 1px solid #3c3c3c;
  text-align: left;
}

.table-dark {
  color: #fff;
  background-color: #212529;
  border-color: #373b3e;
}

.table-dark th,
.table-dark td {
  border-color: #373b3e;
}

.table-striped>tbody>tr:nth-of-type(odd)>* {
  color: #e0e0e0;
  background-color: rgba(255, 255, 255, 0.05);
}

.table-hover>tbody>tr:hover>* {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}

.table-bordered> :not(caption)>* {
  border-width: 1px 0;
}

.table-bordered> :not(caption)>*>* {
  border-width: 0 1px;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #444;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead,
.table-borderless tbody+tbody {
  border: 0;
}

.table-sm> :not(caption)>*>* {
  padding: 0.25rem 0.25rem;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.text-muted {
  color: #888;
  font-size: 0.9em;
}

.mt-2 {
  margin-top: 0.5rem;
}

.d-block {
  display: block;
}
</style>
