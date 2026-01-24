<template>
  <section class="section1">
    <h1 class="title1">&lt; Hola mundo /&gt;</h1>
    <h2 class="title2">&lt; diseñado por = "Diego Sandoval" /&gt;</h2>
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
    <div class="networks-container">
      <i class="fas fa-share-alt icon-main"></i>
      <p>Mis redes sociales:</p>
      <ul class="list">
        <li>
          <i class="fab fa-github"></i>
          <a href="https://github.com/AlexDeimon" class="link" target="_blank">GitHub</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/diego-alejandro-sandoval-fern%C3%A1ndez/" class="link" target="_blank">LinkedIn</a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
</script>
<style scoped>
.section1 {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.section1 > * {
  position: relative;
  margin-bottom: 2rem;
  z-index: 1;
}

.title1 {
  width: 15ch;
  margin-bottom: 1rem;
  font-family: monospace;
  font-size: 3rem;
  color: var(--color-html);
  white-space: nowrap;
  overflow: hidden;
  animation: typing1 2s steps(15), blin .5s 5 step-end alternate backwards;
}

.title2 {
  width: 0;
  margin-bottom: 2rem;
  font-family: monospace;
  font-size: 1.5rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  animation: typing2 3s 2.5s steps(36) forwards, blin .5s 2.5s infinite step-end alternate;
}

.welcome-container,
.about-container,
.credits-container,
.version-container,
.networks-container {
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
  position: fixed;
  top: 10%;
  left: 48px;
  width: 90%;
  height: 90%;
  background: url('@/assets/images/DISANDEV.png') no-repeat center;
  background-size: contain;
  opacity: 0.2;
  mix-blend-mode: screen;
  filter: brightness(1.5);
  z-index: 0;
  pointer-events: none;
}

.welcome-container:hover,
.about-container:hover,
.credits-container:hover,
.version-container:hover,
.networks-container:hover {
  transform: scale(1.05);
}

.list .fab {
  color: #ff0000;
}

.link:hover {
  color: #fff;
}

.list .fa-github {
  color: #fff;
}

.list .fa-linkedin {
  color: #0077b5;
}

@keyframes typing1 {
  from { width: 0ch; }
  to { width: 15ch; }
}

@keyframes typing2 {
  from { width: 0ch; }
  to { width: 36ch; }
}

@keyframes blin {
  from { border-right: 4px solid }
  50% { border-color: transparent }
  to { border-right-color: transparent }
}
</style>
