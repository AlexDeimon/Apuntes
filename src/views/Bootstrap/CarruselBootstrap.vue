<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title bootstrap">Carrusel</h1>
      <p class="subtitle">Componente para ciclar elementos (imágenes, texto) con transiciones animadas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title bootstrap">Estructura Básica</h2>
      <div class="cards-grid">
        <div class="card info">
          <p class="section-desc">El carrusel requiere una estructura específica de clases: <code>.carousel</code> para el contenedor, <code>.carousel-inner</code> para agrupar los ítems y <code>.carousel-item</code> para cada diapositiva.</p>
          <p class="section-desc">Cada item debe tener la clase <code>.w-100</code> para que ocupe el 100% del ancho del carrusel y la clase <code>.d-block</code> para que sea un elemento de bloque.</p>
          <p class="section-desc">La clase <code>.active</code> debe estar en el primer item para que sea visible al cargar el carrusel.</p>
        </div>
        <div>
          <CodeBlock language="html" code='<div id="miCarrusel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>' />
        </div>
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Demo: Carrusel Automático</div>
        <div class="preview-content bootstrap-demo">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(slide, index) in slides" :key="index" :class="['carousel-item', { active: currentSlide === index }]">
                <div class="slide-placeholder" :style="{ backgroundColor: slide.color }">
                  <span>{{ slide.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Controles, Indicadores y Etiquetas</h2>
      <div class="cards-grid">
        <div class="card info">
          <p class="section-desc">Permiten al usuario navegar manualmente por las diapositivas usando botones o pequeños puntos indicadores.</p>
          <p class="section-desc">Los controles se crean con las clases <code>.carousel-control-prev</code> y <code>.carousel-control-next</code>. Para que funcionen, deben tener un atributo <code>data-bs-target</code> que apunte al id del carrusel y un atributo <code>data-bs-slide</code> que indique la dirección del slide (prev o next).</p>
          <p class="section-desc">Tambien se deben agregar las clases de los iconos, <code>.carousel-control-prev-icon</code> y <code>.carousel-control-next-icon</code>, dentro de los botones.</p>
          <p class="section-desc">Los indicadores se crean con la clase <code>.carousel-indicators</code>.</p>
          <p class="section-desc">Las etiquetas se crean con la clase <code>.carousel-caption</code>.</p>
        </div>
        <CodeBlock language="html" code='<div id="carruselFull" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carruselFull" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carruselFull" data-bs-slide-to="1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100">
      <div class="carousel-caption d-none d-md-block">
        <h5>Título</h5>
        <p>Subtítulo o descripción.</p>
      </div>
    </div>
  </div>

  <!-- Controles -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carruselFull" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carruselFull" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>' />
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Demo: Con Controles, Indicadores y Etiquetas</div>
        <div class="preview-content bootstrap-demo p-5">
          <div id="carouselExampleIndicators" class="carousel slide position-relative">
            <div class="carousel-indicators">
              <button
                v-for="(_, index) in slides"
                :key="index"
                type="button"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
              ></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(slide, index) in slides" :key="index" :class="['carousel-item', { active: currentSlide === index }]">
                <div class="slide-placeholder" :style="{ backgroundColor: slide.color }">
                  <span>{{ slide.text }}</span>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Etiqueta {{ index + 1 }}</h5>
                    <p>Texto descriptivo del slide.</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" @click="prevSlide">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" @click="nextSlide">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title bootstrap">Variantes y Opciones</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Crossfade</h3>
          </div>
          <p>Usa la clase <code>.carousel-fade</code> para animar los cambios con un desvanecimiento en lugar de un desplazamiento.</p>
          <CodeBlock language="html" code='<div class="carousel slide carousel-fade">...</div>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Intervalo Individual</h3>
          </div>
          <p>Define <code>data-bs-interval</code> en un <code>.carousel-item</code> específico para cambiar su duración (en milisegundos).</p>
          <CodeBlock language="html" code='<div class="carousel-item" data-bs-interval="10000">...</div>' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Dark Variant</h3>
          </div>
          <p>Usa <code>.carousel-dark</code> para controles, indicadores y etiquetas oscuras (útil para fondos claros).</p>
          <CodeBlock language="html" code='<div class="carousel carousel-dark slide">...</div>' />
        </div>
      </div>
    </section>
    <ReferenceSection :references="[
      { techId: 'bootstrap', moduleId: 'imagenes', text: 'Imágenes en Bootstrap' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const slides = [
  { color: '#334155', text: 'Diapositiva 1' },
  { color: '#475569', text: 'Diapositiva 2' },
  { color: '#1e293b', text: 'Diapositiva 3' }
]

const currentSlide = ref(0)
let intervalId: number | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3500)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.bootstrap-demo {
  background: var(--bg-card);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  display: none;
  width: 100%;
  transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
  backface-visibility: hidden;
}

.carousel-item.active {
  display: block;
}

.carousel-item {
  opacity: 0;
}
.carousel-item.active {
  opacity: 1;
}

.slide-placeholder {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  cursor: pointer;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
}

.carousel-control-prev { left: 0; }
.carousel-control-next { right: 0; }

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.carousel-control-prev-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e"); }
.carousel-control-next-icon { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"); }

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators [type="button"] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
}

.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
  background: rgba(0,0,0,0.4);
  border-radius: 8px;
}

.carousel-caption h5 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.carousel-caption p {
  font-size: 0.9rem;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
