<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title html">Contenido Embebido</h1>
      <p class="subtitle">Insertando imágenes, multimedia y documentos externos en tu página web.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title html">¿Qué es el contenido embebido?</h2>
      <p class="section-desc">Es todo el contenido externo al código HTML en sí (archivos multimedia). Suele ser lo que más "peso" añade a una página web, por lo que su correcta optimización y uso es crucial.
      </p>
    </section>
    <section class="topic-section">
      <h2 class="section-title html">Imágenes</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Formatos Comunes</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Vectoriales:</span> <code>.svg</code> (escalables sin pérdida de calidad).</li>
            <li><span class="def-term">Mapa de bits:</span> <code>.jpg</code> (fotos), <code>.png</code> (transparencias), <code>.gif</code> (animaciones cortas).</li>
            <li><span class="def-term">Modernos:</span> <code>.webp</code> o <code>.avif</code> (excelente compresión, muy livianos).</li>
          </ul>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Etiqueta Básica <code>&lt;img&gt;</code></h3>
          </div>
          <p>Requiere el atributo <code>src</code> (ruta) y siempre debe llevar <code>alt</code> (texto alternativo para accesibilidad y SEO).</p>
          <CodeBlock language="html" code='<img src="../../assets/images/GZ01.webp" alt="Imagen de prueba">' />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Imágenes Adaptables (Responsive) y Figuras</h3>
            <span class="badge success">Avanzado</span>
          </div>
          <p>Usa <code>srcset</code> para que el navegador elija la mejor imagen según la densidad de píxeles (ej. pantallas Retina).</p>
          <p>Usa <code>&lt;figure&gt;</code> para agrupar semánticamente una imagen con una descripción debajo.</p>
          <p>Un título puede estar asociado con el elemento &lt;figure&gt; mediante la inserción de un &lt;figcaption&gt; en su interior.</p>
          <CodeBlock language="html" code='<!-- Imágen adaptable -->
<img srcset="../../assets/images/portada-small.webp 3x, ../assets/images/portada-medium.webp" alt="Imagen de prueba">

<!-- Figura semántica -->
<figure>
  <img src="diagrama.png" alt="Diagrama de flujo">
  <figcaption>Figura 1: Diagrama de flujo de la aplicación.</figcaption>
</figure>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Imagen normal src</h3>
          </div>
          <img src="../../assets/images/GZ01.webp" alt="Imagen de prueba">
          <div class="card-header">
            <h3>Imágen adaptable según el Device pixel ratio (srcset)</h3>
          </div>
          <img srcset="../../assets/images/portada-small.webp 3x, ../assets/images/portada-medium.webp" alt="Imagen de prueba">
          <div class="card-header">
            <h3>Figura con descripción</h3>
          </div>
          <figure>
            <img src="../../../public/icons/html.svg" alt="Logo de html">
            <figcaption>Figura 1: Logo de html.</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Multimedia: Audio y Video</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Audio <code>&lt;audio&gt;</code></h3>
          </div>
          <p>Los audios se insertan mediante la etiqueta <code>&lt;audio&gt;</code>, la cual tiene los siguientes atributos:</p>
          <ul class="def-list">
            <li><span class="def-term">controls</span>: Muestra el reproductor.</li>
            <li><span class="def-term">autoplay</span>: Reproduce el audio automáticamente.</li>
            <li><span class="def-term">loop</span>: Reproduce el audio en bucle.</li>
            <li><span class="def-term">muted</span>: Silencia el audio.</li>
            <li><span class="def-term">src</span>: Especifica la ruta del archivo de audio.</li>
            <li><span class="def-term">type</span>: Especifica el tipo de archivo de audio.</li>
          </ul>
          <CodeBlock language="html" code='<audio src="../../assets/audios/deaf-kev-invincible-ncs-release.mp3" id="audio"></audio>' /><br>
          <audio src="https://alexdeimon.github.io/Apuntes/assets/audios/deaf-kev-invincible-ncs-release.mp3" controls id="audio"></audio>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Video <code>&lt;video&gt;</code></h3>
          </div>
          <p>Los videos se insertan mediante la etiqueta <code>&lt;video&gt;</code>, la cual tiene los siguientes atributos:</p>
          <ul class="def-list">
            <li><span class="def-term">controls</span>: Muestra el reproductor.</li>
            <li><span class="def-term">autoplay</span>: Reproduce el video automáticamente.</li>
            <li><span class="def-term">loop</span>: Reproduce el video en bucle.</li>
            <li><span class="def-term">muted</span>: Silencia el video.</li>
            <li><span class="def-term">poster</span>: Especifica la ruta de la imagen que se mostrará antes de que el video se reproduzca.</li>
            <li><span class="def-term">src</span>: Especifica la ruta del archivo de video.</li>
            <li><span class="def-term">type</span>: Especifica el tipo de archivo de video.</li>
          </ul>
          <CodeBlock language="html" code='<video controls poster="../../assets/images/poster.webp" src="../../assets/videos/pentakill.mp4" width="100%" height="auto"></video>' /><br>
          <video controls poster="../../assets/images/poster.webp" src="https://alexdeimon.github.io/Apuntes/assets/videos/pentakill.mp4" width="100%" height="auto"></video>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title html">Iframes</h2>
      <p class="section-desc">La etiqueta <code>&lt;iframe&gt;</code> permite incrustar otro documento HTML dentro de la página actual (ej: mapas de Google, videos de YouTube).</p>
      <div class="card warning">
        <div class="card-header">
          <h3>Consideraciones de Rendimiento</h3>
          <span class="badge danger">Cuidado</span>
        </div>
        <p>No abuses de los iframes, ya que cada iframe carga un entorno completo (scripts, CSS, etc.) afectando el rendimiento de tu página. Usa <code>loading="lazy"</code> para diferir su carga.</p>
        <CodeBlock language="html" code='<iframe width="560" height="315" src="https://www.youtube.com/embed/hF_rU3vdajE?si=0n6HwpIgnoVaxEKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' /><br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hF_rU3vdajE?si=0n6HwpIgnoVaxEKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'html', moduleId: 'secciones', text: 'Estructura Semántica' },
      { techId: 'css', moduleId: 'background', text: 'Imágenes como fondo en CSS' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
