<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Efectos Visuales</h1>
      <p class="subtitle">Sombras, colores y control de desbordamiento en CSS.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Sombras (Box Shadow)</h2>
      <p class="section-desc">Añade profundidad a tus elementos con sombras personalizadas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Sintaxis de box-shadow</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">offset-x</span>: Distancia horizontal de la sombra.</li>
            <li><span class="def-term">offset-y</span>: Distancia vertical de la sombra.</li>
            <li><span class="def-term">blur</span>: Desenfoque de la sombra.</li>
            <li><span class="def-term">spread</span>: Expansión de la sombra.</li>
            <li><span class="def-term">color</span>: Color de la sombra.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="css" code="/* offset-x | offset-y | blur | spread | color */
.fuerte { box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); }
.suave { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4); }
.interior { box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.5); }
" /><br>
          <div class="preview-container">
            <div class="preview-content visual-demo">
              <div class="box fuerte">Fuerte</div>
              <div class="box suave">Suave</div>
              <div class="box interior">Interior</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Outline vs Border</h2>
      <p class="section-desc">El <code>outline</code> es similar al borde pero tiene diferencias clave.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Características Outline</h3>
          </div>
          <p>Es un shorthand que engloba:</p>
          <ul class="def-list">
            <li><span class="def-term">width</span>: Ancho del outline.</li>
            <li><span class="def-term">style</span>: Estilo del outline.</li>
            <li><span class="def-term">color</span>: Color del outline.</li>
          </ul>
          <p>Tiene las mísmas propiedades y sintaxis que border, pero con algunas diferencias:</p>
          <ul class="list">
            <li>No ocupa espacio (fuera del box-model).</li>
            <li>No se puede redondear individualmente.</li>
            <li>Posee <code>outline-offset</code> para separarlo de la caja.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="css" code=".border {
  border: 3px solid #0095ff;
}

.outline {
  border: 3px solid #0095ff;
  outline: 3px solid #ff0055;
  outline-offset: 5px;
}" /><br>
          <div class="preview-container">
            <div class="preview-content visual-demo">
              <div class="box border">Border</div>
              <div class="box outline">Outline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Control de Desbordamiento</h2>
      <p class="section-desc">¿Qué pasa cuando el contenido es más grande que su contenedor?</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>overflow</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">visible</span>: El contenido se muestra fuera del contenedor.</li>
            <li><span class="def-term">hidden</span>: El contenido se corta.</li>
            <li><span class="def-term">scroll</span>: Se muestra una barra de scroll.</li>
            <li><span class="def-term">auto</span>: Se muestra una barra de scroll solo si es necesario.</li>
          </ul>
        </div>
        <div>
          <CodeBlock language="css" code=".overflow-box {
  width: 150px;
  height: 60px;
}

.visible { overflow: visible; }
.hidden { overflow: hidden; }
.scroll { overflow-y: scroll; }
.auto { overflow-y: auto; }
" /><br>
          <div class="preview-container">
            <div class="preview-content overflow-demo">
              <div class="overflow-box visible">
                <p>Este texto se muestra fuera del contenedor porque el overflow es visible.</p>
              </div>
              <div class="overflow-box hidden">
                <p>Este texto se corta porque el overflow es hidden.</p>
              </div>
              <div class="overflow-box scroll">
                <p>Aquí puedes hacer scroll para ver todo el contenido interno.</p>
              </div>
              <div class="overflow-box auto">
                <p>Aquí puedes hacer scroll para ver todo el contenido interno.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Sistemas de Color</h2>
      <p class="section-desc">Existen varias formas de definir colores en CSS.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Colores Nombrados</h3></div>
          <p>Nombres de colores predefinidos.</p>
          <CodeBlock language="css" code="color: red;" /><br>
          <a href="https://www.w3.org/wiki/CSS/Properties/color/keywords" target="_blank" class="link-external">Ver todos los colores</a>
        </div>
        <div class="card info">
          <div class="card-header"><h3>Hexadecimal</h3></div>
          <p>El sistema hexadecimal es un sistema basado en 16 valores del 0 al 15. Utiliza los dígitos del 0 al 9 y las letras de la A a la F.  Se compone de 16 caracteres en parejas. 16*16 = 256</p>
          <p>Para indicar que vamos a usar notación hexadecimal debemos usar el símbolo de hash/almohadilla # y a continuación usaremos esta notación por parejas: #RRGGBB</p>
          <p>Cuando una pareja usa el mismo valor se puede omitir el segundo valor, siempre que se haga en las 3 parejas.</p>
          <p>También hay la opción de usar transparencias en hexadecimal añadiendo un cuarto canal que sigue las mismas normas.</p>
          <CodeBlock language="css" code="#ff0055
#ff005580 /* 50% Alpha */" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>RGB / RGBA</h3></div>
          <p>En el modo RGB hay tres canales (Red, Green, Blue) y se tiene 8 bits de color por canal, (cada bit tiene dos posibles valores 0 ó 1) lo que significa que se tiene 28 posibles valores, que van desde 0 hasta 255. Esto da un total de 255 * 255 * 255 = 16.581.375 colores.</p>
          <p>Su sintaxis es rgb(R,G,B)</p>
          <p>Si todos los canales se definen a 0 da un negro puro y si se definen a 255 da un blanco.</p>
          <p>Para obtener gama de grises se definen los 3 canales con el mismo valor, si se definen los 3 canales a 128 se obtiene el gris puro.</p>
          <p>El modo RGB da la opción de utilizar un cuarto canal que correspondería al canal alpha (la transparencia), y su valor va desde 0 a 1. Hay dos sintaxis para utilizar el canal alpha: <strong>rgba(R,G,B,A)</strong> o <strong>rgb(R G B / A)</strong></p>
          <CodeBlock language="css" code="rgb(255 0 85 / 0.5)
rgba(255, 0, 85, 0.5)" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>HSL / HSLA</h3>
          </div>
          <p>El modo de color HSL es el más intuitivo para los humanos. Su nombre viene de las siglas Hue (tono) Saturation (saturación) y Lightness (luminancia).</p>
          <p>El tono se mide en grados en una rueda de color, donde 0 es rojo, 120 es verde y 240 es azul.</p>
          <p>La saturación se mide en porcentaje, donde 0 es gris y 100 es color puro.</p>
          <p>La luminancia se mide en porcentaje, donde 0 es negro y 100 es blanco.</p>
          <p>Al igual que en RGB, se puede utilizar un cuarto canal alpha para indicar la transparencia.</p>
          <CodeBlock language="css" code="hsl(340, 100%, 50%, 0.5)
hsla(340 100% 50% / 0.5)" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <CodeBlock language="css" code=".color-keyword { color: red; }
.color-hex { color: #ff0055; }
.color-rgb { color: rgb(255, 0, 85); }
.color-rgba { color: rgba(255, 0, 85, 0.5); }
.color-hsl { color: hsl(340, 100%, 50%); }
.color-hsla { color: hsla(340, 100%, 50%, 0.5); }
" />
        <div class="preview-container">
          <div class="preview-content visual-demo">
            <div class="box color-keyword">color-keyword</div>
            <div class="box color-hex">color-hex</div>
            <div class="box color-rgb">color-rgb</div>
            <div class="box color-rgba">color-rgba</div>
            <div class="box color-hsl">color-hsl</div>
            <div class="box color-hsla">color-hsla</div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider">
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'boxmodel', text: 'Modelo de Caja' },
      { techId: 'css', moduleId: 'texto', text: 'Estilos de Texto' }
    ]" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>

<style scoped>
.visual-demo {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1.5rem;
}

.box {
  width: 100px;
  height: 100px;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.fuerte { box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); }
.suave { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4); }
.interior { box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.5); }

.border {
  border: 3px solid #0095ff;
}

.outline {
  border: 3px solid #0095ff;
  outline: 3px solid #ff0055;
  outline-offset: 5px;
}

.overflow-demo {
  display: flex;
  gap: 1rem;
}

.overflow-box {
  width: 100px;
  height: 60px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 10px;
}

.overflow-box p {
  margin: 0;
}

.overflow-box.visible { overflow: visible; }
.overflow-box.hidden { overflow: hidden; }
.overflow-box.scroll { overflow-y: scroll; }
.overflow-box.auto { overflow-y: auto; }

.color-keyword {
  background-color: red;
}

.color-hex {
  background-color: #ff0055;
}

.color-rgb {
  background-color: rgb(255, 0, 85);
}

.color-rgba {
  background-color: rgba(255, 0, 85, 0.5);
}

.color-hsl {
  background-color: hsl(340, 100%, 50%);
}

.color-hsla {
  background-color: hsla(340, 100%, 50%, 0.5);
}
</style>
