<template>
  <section class="section1">
    <h2 class="tittle2">&lt; Hola mundo /&gt;</h2>
    <p>Bienvenido a mi sitio de apuntes de desarrollo web. Lo inicie a finales de 2021 y hoy en dia lo mantengo actualizado con lo último sobre las tecnologías que utilizo tanto a nivel personal como profesional.</p>
    <p>Comenzó solo como un proyecto personal para ir dejando todo lo que fui aprendiendo sobre desarrollo web, para poder usarlo como documentación personal y poder consultar y repasar temas. Aun asi espero que te sea util.</p>
    <p>Todo lo que esta aqui son mis apuntes tomados durante mi aprendizaje de carrera y autodidacta con los cursos de:</p>
    <ul class="list">
      <li><a href="https://www.youtube.com/@DorianDesings" class="link" target="_blank">DorianDesings</a></li>
      <li><a href="https://www.youtube.com/@midudev" class="link" target="_blank">Midudev</a></li>
      <li><a href="https://www.youtube.com/@SergieCode" class="link" target="_blank">SergieCode</a></li>
    </ul>
  </section>
</template>
<style scoped>
.section1 {
  position: relative;
  height: 90%;
}

.section1 > * {
  position: relative;
  z-index: 1;
}

.tittle2{
  width: 15ch;
  border-right: 4px solid;
  font-family: monospace;
  font-size: xx-large;
  color: var(--color-html);
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(15), blinking 0.5s infinite step-end alternate, blin .5s infinite step-end alternate;
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

@keyframes typing {
  from { width: 0ch; }
  to { width: 15ch; }
}

@keyframes blin {
  50% { border-color: transparent; }
}
</style>