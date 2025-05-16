<template>
  <section class="section1">
    <h2 class="title2">&lt; Hola mundo /&gt;</h2>
    <div class="welcome-container">
      <i class="fas fa-book-open icon-main"></i>
      <p>Bienvenido a mi sitio de apuntes sobre desarrollo web. Iniciado a finales de 2021, mi objetivo es mantener una documentación actualizada sobre las tecnologías que utilizo tanto en el ámbito personal como profesional.</p>
    </div>
    <div class="about-container">
      <i class="fas fa-lightbulb icon-main"></i>
      <p>Este proyecto nació como una iniciativa para documentar mi aprendizaje en desarrollo web, sirviendo como una referencia personal para consultas y repaso de temas. Si bien su propósito inicial fue personal, espero que también pueda resultarte útil.</p>
    </div>
    <div class="credits-container">
      <i class="fas fa-graduation-cap icon-main"></i>
      <p>El contenido representa mis apuntes recopilados durante mi formación académica y aprendizaje autodidacta gracias a los cursos de:</p>
      <ul class="list">
        <li>
          <i class="fab fa-youtube"></i>
          <a href="https://www.youtube.com/@DorianDesings" class="link" target="_blank">DorianDesings</a>
        </li>
        <li>
          <i class="fab fa-youtube"></i>
          <a href="https://www.youtube.com/@midudev" class="link" target="_blank">Midudev</a>
        </li>
        <li>
          <i class="fab fa-youtube"></i>
          <a href="https://www.youtube.com/@SergieCode" class="link" target="_blank">SergieCode</a>
        </li>
      </ul>
    </div>
    <div class="version-container">
      <i class="fas fa-code-branch icon-main"></i>
      <p>Lo que ves aquí es la versión 2 de mi sitio de apuntes, la cual como podrás notar, está en desarrollo <i class="fa-solid fa-wrench"></i>. Estoy migrando gradualmente desde la versión 1 (un sitio web estático, hecho con herramientas front-end básicas <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fa-brands fa-js"></i>, diseño simple, ejemplos de código en imágenes <i class="fa-solid fa-image"></i> y un responsive con algunas fallas <i class="fa-solid fa-triangle-exclamation"></i>) a esta nueva versión (Desarrollada Vue.js <i class="fa-brands fa-vuejs"></i> como SPA, diseño mejorado basado en IDE, mejora del responsive, ofrecerá ejemplos de código copiables, entre otras mejoras).</p>
      <p>Si deseas conocer mi sitio y revisar algún tema el enlace es: <a href="https://alexdeimon.github.io/Apuntes/index.html" class="link" target="_blank">Version 1</a></p>
    </div>
  </section>
</template>
<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
</script>
<style scoped>
.section1 {
  position: relative;
  height: 90%;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.section1 > * {
  position: relative;
  margin-bottom: 2rem;
  z-index: 1;
}

.title2 {
  width: 15ch;
  margin-bottom: 3rem;
  border-right: 4px solid;
  font-family: monospace;
  font-size: 2.5rem;
  color: var(--color-html);
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(15), blin .5s infinite step-end alternate;
}

.welcome-container,
.about-container,
.credits-container,
.version-container {
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--color-html);
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
}

.icon-main {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--color-html);
}

.fa-wrench {
  color: darkgray;
}

.fa-html5 {
  color: var(--color-html);
}

.fa-css3-alt,
.fa-image {
  color: var(--color-css);
}

.fa-js,
.fa-triangle-exclamation {
  color: var(--color-js);
}

.fa-vuejs {
  color: var(--color-nodejs);
}

.list {
  padding: 0;
}

.link {
  color: var(--color-html);
  transition: color 0.3s ease;
}

.list li {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/DISANDEV.png') no-repeat center;
  background-size: contain;
  opacity: 0.2;
  mix-blend-mode: screen;
  filter: brightness(1.5);
  z-index: 0;
}

.welcome-container:hover,
.about-container:hover,
.credits-container:hover,
.version-container:hover {
  transform: translateX(10px);
}

.list .fab {
  color: #ff0000;
}

.link:hover {
  color: #fff;
}

@keyframes typing {
  from { width: 0ch; }
  to { width: 15ch; }
}

@keyframes blin {
  50% { border-color: transparent }
}
</style>