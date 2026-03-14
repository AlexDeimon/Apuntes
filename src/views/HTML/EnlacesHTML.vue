<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Enlaces</h1>
      <p class="subtitle">La esencia de la web: conectando recursos y páginas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">Conceptos Básicos</h2>
      <p class="section-desc">La etiqueta <code>&lt;a&gt;</code> (ancla) define un hipervínculo que se utiliza para enlazar de una página a otra, o a un recurso específico (imagen, PDF, etc.) mediante el atributo <code>href</code>.</p>
      <div class="card info">
        <div class="card-header">
          <h3>Sintaxis Básica</h3>
        </div>
        <CodeBlock language="html" code='<a href="https://www.google.com">Ir a Google</a>' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Rutas: Absolutas vs Relativas</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Rutas Absolutas</h3>
            <span class="badge info">Externas</span>
          </div>
          <p>Incluyen el protocolo (http, https) y el dominio. Son únicas en internet.</p>
          <CodeBlock language="html" code='<a href="https://github.com">GitHub</a>' />
          <a href="https://github.com" target="_blank" class="link">GitHub</a>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Rutas Relativas</h3>
            <span class="badge success">Internas</span>
          </div>
          <p>Apuntan a un archivo dentro del mismo proyecto. No necesitan el dominio ni protocolo.</p>
          <CodeBlock language="html" code='<a href="@/views/HTML/InicioHTML.vue">Inicio HTML</a>' />
          <a href="#" target="_blank" @click.prevent="abrirEnlace()" class="link">Inicio HTML</a>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Atributos Importantes</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>href</h3>
            <span class="badge success">Obligatorio</span>
          </div>
          <p>Define la URL del recurso al que apunta el enlace.</p>
          <CodeBlock language="html" code='<a href="https://github.com">GitHub</a>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>download</h3>
          </div>
          <p>Indica al navegador que descargue el recurso en lugar de navegar hacia él.</p>
          <CodeBlock language="html" code='<a href="https://alexdeimon.github.io/Apuntes/v2/icons/css.svg" title="css" download>Icono CSS</a>' />
          <a href="https://alexdeimon.github.io/Apuntes/v2/icons/css.svg" title="css" download target="_blank" class="link">Icono CSS</a>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>title</h3>
          </div>
          <p>Proporciona información adicional sobre el enlace. Se muestra como una sugerencia (tooltip) cuando el usuario pasa el cursor sobre el enlace.</p>
          <CodeBlock language="html" code='<a href="https://google.com" title="Ir a Google">Google</a>' />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>target</h3>
          </div>
          <p>Define dónde se abrirá el enlace.</p>
          <ul class="def-list">
            <li><span class="def-term">_self</span>: Se abre en la misma pestaña (valor por defecto).</li>
            <li><span class="def-term">_blank</span>: Se abre en una nueva pestaña.</li>
          </ul>
          <CodeBlock language="html" code='<a href="https://google.com" target="_blank">Google</a>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>rel</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">alternate</span>: Indica que el enlace apunta a una versión alternativa del contenido.</li>
            <li><span class="def-term">author</span>: Indica que el enlace apunta al autor del contenido.</li>
            <li><span class="def-term">bookmark</span>: Indica que el enlace es un marcador de la página.</li>
            <li><span class="def-term">help</span>: Indica que el enlace apunta a una página de ayuda.</li>
            <li><span class="def-term">license</span>: Indica que el enlace apunta a una licencia.</li>
            <li><span class="def-term">next</span>: Indica que el enlace apunta a la siguiente página.</li>
            <li><span class="def-term">prev</span>: Indica que el enlace apunta a la página anterior.</li>
            <li><span class="def-term">nofollow</span>: Indica que el enlace no tiene relación con el contenido de la página.</li>
          </ul>
          <CodeBlock language="html" code='<a href="https://google.com" target="_blank" rel="nofollow">Google</a>' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Anclas y Protocolos Especiales</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Navegación con Anclas</h3>
          </div>
          <p>Permite saltar a una parte específica de la misma página usando el <code>id</code> de un elemento.</p>
          <CodeBlock language="html" code='<!-- Enlace -->
<a href="#contacto">Ir al pie de página</a>

<!-- Destino -->
<footer id="contacto">...</footer>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>mailto y tel</h3>
          </div>
          <p>Protocolos para abrir el cliente de correo o la app de llamadas del dispositivo.</p>
          <CodeBlock language="html" code='<!-- Email -->
<a href="mailto:correo@ejemplo.com">Escríbenos</a>

<!-- Teléfono -->
<a href="tel:+123456789">Llámanos</a>' />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import { useEditorStore } from '@/stores/editor'

const abrirEnlace = () => {
  const editorStore = useEditorStore()
  editorStore.addTab({
    id: 'html-inicio',
    title: 'Iniciando con HTML',
    route: '/html/inicio',
    moduleId: 'html',
    techId: 'html'
  })
}
</script>
