<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Background</h1>
      <p class="subtitle">Dominando los fondos en CSS: colores, imágenes, gradientes y posicionamiento.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title css">Fundamentos y Shorthand</h2>
      <p class="section-desc">La propiedad <code>background</code> es un atajo (shorthand) que permite definir múltiples propiedades de fondo en una sola línea.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Shorthand</h3>
          </div>
          <p>Orden recomendado (aunque flexible): color, image, repeat, attachment, position.</p>
          <CodeBlock language="css" code="/* background: color image repeat attachment position; */
.shorthand {
  background: #7fff00 url('/Apuntes/v2/icons/css.png') no-repeat local center;
}" />
          <div class="demo-box">
            <div class="box shorthand"></div>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Background Color</h3>
          </div>
          <p>Establece el color base. Sirve como respaldo si la imagen falla o tiene transparencias.</p>
          <CodeBlock language="css" code=".color {
  background-color: #d2691e;
}" />
          <div class="demo-box">
            <div class="box color"></div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Gradientes</h2>
      <p class="section-desc">Los gradientes en CSS son tratados matemáticamente como <strong>imágenes</strong>. Crean transiciones suaves entre colores.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Lineal</h3>
          </div>
          <p>Crea transiciones suaves entre colores en una línea recta. Sus parámetros son: <code>(dirección, colorInicio, colorFin)</code>.</p>
          <ul class="def-list">
            <li>
              <span class="def-term">dirección:</span>
              <ul class="def-list">
                <li><span class="def-term">palabras clave: </span>Consta de la palabra to y hasta dos palabras clave: una indica el lado horizontal (left o right), y la otra el lado vertical (top o bottom).</li>
                <li><span class="def-term">angulo: </span>El ángulo de dirección de la línea de degradado. Los valores to top, to bottom, to left, y to right son equivalentes a los ángulos 0deg, 180deg, 270deg, y 90deg, respectivamente. Los otros valores giran en sentido de las agujas del reloj desde 0deg.</li>
              </ul>
            </li>
          </ul>
          <CodeBlock language="css" code=".linear { background-image: linear-gradient(#ff7f50, #6495ed); }
.linear-2 { background-image: linear-gradient(to left, #fff8dc, #dc143c); }
.linear-3 { background-image: linear-gradient(to top right, #00ffff, #00008b); }
.linear-4 { background-image: linear-gradient(60deg, #008b8b, #b8860b); }" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Radial</h3>
          </div>
          <p>Crea transiciones suaves entre colores en forma de círculo o elipse. Sus parámetros son: <code>(forma, tamaño, posición, colorInicio, colorFin)</code>.</p>
          <ul class="def-list">
            <li><span class="def-term">Forma del degradado:</span> El valor puede ser circle o ellipse.</li>
            <li><span class="def-term">Posición del gradiente:</span> interpretada de la misma manera que background-position o transform-origin. Si no se especifica, el valor predeterminado es center.</li>
            <li>
              <span class="def-term">Tamaño:</span> Si se omite, el valor predeterminado es la esquina más lejana. Se puede dar de forma explícita o por palabra clave.
              <ul class="def-list">
                <li><span class="def-term">closest-side:</span> La forma final del degradado se encuentra con el lado del cuadro más cercano a su centro (para círculos) o con los lados vertical y horizontal más cercanos al centro (para elipses).</li>
                <li><span class="def-term">closest-corner:</span> El tamaño de la forma final del degradado se ajusta de manera que coincida exactamente con la esquina más cercana del cuadro desde su centro.</li>
                <li><span class="def-term">farthest-side:</span> Similar a closest-side, excepto que el tamaño de la forma final se ajusta al lado de la caja más alejado de su centro (o los lados vertical y horizontal).</li>
                <li><span class="def-term">farthest-corner:</span> El valor predeterminado, la forma final del degradado tiene un tamaño tal que coincida exactamente con la esquina más alejada del cuadro desde su centro.</li>
              </ul>
            </li>
          </ul>
          <CodeBlock language="css" code=".radial { background-image: radial-gradient(circle closest-side, #a9a9a9, #006400); }
.radial-2 { background-image: radial-gradient(circle closest-corner, #a9a9a9, #006400); }
.radial-3 { background-image: radial-gradient(circle farthest-side, #a9a9a9, #006400); }
.radial-4 { background-image: radial-gradient(circle farthest-corner, #a9a9a9, #006400); }" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Cónico</h3>
          </div>
          <p>Los degradados cónicos cambian de color progresivamente alrededor de un círculo. Se generan con la función <code>conic-gradient()</code>. Sus argumentos son angulo, posicion y el color.</p>
          <ul class="def-list">
            <li><span class="def-term">angulo</span>: Precedido por from, y tomando un ángulo como su valor, define la rotación del gradiente en el sentido de las agujas del reloj.</li>
            <li><span class="def-term">posicion</span>: Con los mismos valores que la propiedad background-position, la posición define el centro del degradado. Si se omite, el valor predeterminado es center, lo que significa que el degradado estará centrado.</li>
          </ul>
          <CodeBlock language="css" code=".conic { background-image: conic-gradient(from 50deg, #a9a9a9, #bdb76b); }\
.conic-2 { background-image: conic-gradient(from 60deg, #8b008b, #556b2f, #8b008b); }" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Repetido</h3>
          </div>
          <p>La repetición de degradados duplica un degradado tanto como sea necesario para rellenar un área determinada. Se generan con las funciones <code>repeating-linear-gradient()y repeating-radial-gradient()</code>.</p>
          <CodeBlock language="css" code=".repeating { background-image: repeating-linear-gradient(45deg, #ff8c00, #ff8c00 10px, #9932cc 10px, #9932cc 20px); }
.repeating-2 { background-image: repeating-radial-gradient(#8b0000, #8b0000 15px, #e9967a 15px, #e9967a 30px); }" />
        </div>
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Demo de Gradientes</div>
        <div class="preview-content demo-box">
          <div class="box linear">Linear</div>
          <div class="box linear-2">Linear 2</div>
          <div class="box linear-3">Linear 3</div>
          <div class="box linear-4">Linear 4</div>
          <div class="box radial">Radial</div>
          <div class="box radial-2">Radial 2</div>
          <div class="box radial-3">Radial 3</div>
          <div class="box radial-4">Radial 4</div>
          <div class="box conic">Conic</div>
          <div class="box conic-2">Conic 2</div>
          <div class="box repeating">Repeating</div>
          <div class="box repeating-2">Repeating 2</div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Imágenes</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>background-image</h3>
          </div>
          <p>La propiedad <code>background-image</code> establece una o más imágenes de fondo en un elemento separadas por comas.</p>
          <p>Las imágenes de fondo se dibujan apilando capas de contexto una encima de la otra. La primera capa especificada se dibuja como si fuera la más cercana al usuario.</p>
          <p>Si no se puede dibujar una imagen especificada (por ejemplo, cuando el archivo indicado por el URI especificado no se puede cargar), los navegadores la manejan como lo harían con un valor none. Por eso es importante que exista un <code>background-color</code> de respaldo. Este se mostrará en caso de que la imagen no carge o tambien si esta está opaca o posee transparencia.</p>
          <CodeBlock language="css" code=".bg-img { background-image: url('/icons/css.svg'), url('../../assets/images/portada.webp'); }
.bg-img-2 { background: url('/icons/css.svg'), #8fbc8f;" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>background-repeat</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">no-repeat</span>: No se repite.</li>
            <li><span class="def-term">repeat-x</span>: Se repite solo en el eje x.</li>
            <li><span class="def-term">repeat-y</span>: Se repite solo en el eje y.</li>
            <li><span class="def-term">repeat</span>: Se repite en ambos ejes.</li>
            <li><span class="def-term">space</span>: Se repite en ambos ejes, pero agrega espacio entre las imágenes para que no se solapen.</li>
            <li><span class="def-term">round</span>: Se repite en ambos ejes, pero redondea el tamaño de las imágenes para que no se solapen.</li>
          </ul>
          <CodeBlock language="css" code=".repeat-x { background-repeat: repeat-x; }
.repeat-y { background-repeat: repeat-y; }
.no-repeat { background-repeat: no-repeat; }
.space { background-repeat: space; }
.round { background-repeat: round; }" />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>background-position</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Palabras</span>: <code>top</code>, <code>right</code>, <code>left</code>, <code>bottom</code>, <code>center</code>.</li>
            <li><span class="def-term">Porcentajes</span>: medidas horizontal y vertical <code>50%, 30%</code>.</li>
            <li><span class="def-term">Px/Rem</span>: medidas horizontal y vertical <code>10px, 2rem</code>.</li>
            <li><span class="def-term">Combinaciones</span>: Palabras clave y medidas: <code>top 50%</code> (palabra + medida), <code>50% left</code> (medida + palabra).</li>
          </ul>
          <CodeBlock language="css" code=".box.bg-pos-1 { background-position: center; }
.box.bg-pos-2 { background-position: top left; }
.box.bg-pos-3 { background-position: 20% 20%; }
.box.bg-pos-4 { background-position: 60px 2rem; }
.box.bg-pos-5 { background-position: bottom 10px right 20px; }
.box.bg-pos-6 { background-position: bottom 10px right; }" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>background-size</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">cover</span>: Cubre todo el área (puede recortarse).</li>
            <li><span class="def-term">contain</span>: Muestra la imagen completa (pueden quedar huecos).</li>
            <li><span class="def-term">auto</span>: Mantiene el tamaño original.</li>
            <li><span class="def-term">medidas y porcentajes</span>: Se puede especificar el tamaño de la imagen en píxeles, rem o porcentajes. <code>100% 100%</code> o <code>40% 60%</code>.</li>
          </ul>
          <CodeBlock language="css" code=".box.bg-size-1 { background-size: cover; }
.box.bg-size-2 { background-size: contain; }
.box.bg-size-3 { background-size: auto; }
.box.bg-size-4 { background-size: 100% 100%; }
.box.bg-size-5 { background-size: 128px 72px; }" />
        </div>
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Demo background-image</div>
        <div class="preview-content demo-box">
          <div class="box bg-img"></div>
          <div class="box bg-img-2"></div>
        </div>
      </div>
      <div class="preview-container">
        <div class="preview-header">Demo background-repeat</div>
        <div class="preview-content demo-box">
          <div class="box repeat-x">repeat-x</div>
          <div class="box repeat-y">repeat-y</div>
          <div class="box no-repeat">no-repeat</div>
          <div class="box space">space</div>
          <div class="box round">round</div>
        </div>
      </div>
      <div class="preview-container">
        <div class="preview-header">Demo background-position</div>
        <div class="preview-content demo-box">
          <div class="box bg-pos-1">posicion center</div>
          <div class="box bg-pos-2">posicion top left</div>
          <div class="box bg-pos-3">posicion 20% 20%</div>
          <div class="box bg-pos-4">posicion 60px 2rem</div>
          <div class="box bg-pos-5">posicion bottom 10px right 20px</div>
          <div class="box bg-pos-6">posicion bottom 10px right</div>
        </div>
      </div>
      <div class="preview-container">
        <div class="preview-header">Demo background-size</div>
        <div class="preview-content demo-box">
          <div class="box bg-size-1">tamaño cover</div>
          <div class="box bg-size-2">tamaño contain</div>
          <div class="box bg-size-3">tamaño auto</div>
          <div class="box bg-size-4">tamaño 100% 100%</div>
          <div class="box bg-size-5">tamaño 128px 72px</div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Efectos Avanzados</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>background-attachment</h3>
          </div>
          <p>Controla cómo se comporta el fondo al hacer scroll.</p>
          <ul class="def-list">
            <li><span class="def-term">scroll</span> (Default): El fondo se mueve con el elemento.</li>
            <li><span class="def-term">fixed</span>: El fondo queda fijo en la ventana (efecto Parallax).</li>
            <li><span class="def-term">local</span>: Se mueve con el contenido del elemento si este tiene scroll interno.</li>
          </ul>
          <CodeBlock language="css" code=".scroll { background-attachment: scroll; }
.fixed { background-attachment: fixed; }
.local { background-attachment: local; }" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>background-clip</h3>
          </div>
          <p>Define hasta dónde llega el color o imagen de fondo (Caja modelo).</p>
          <ul class="def-list">
            <li><span class="def-term">border-box</span>: Hasta el borde externo.</li>
            <li><span class="def-term">padding-box</span>: Hasta el padding (ignora el borde).</li>
            <li><span class="def-term">content-box</span>: Solo debajo del contenido.</li>
            <li><span class="def-term">text</span>: El fondo solo se dibuja dentro del texto (útil para texto con gradientes).</li>
          </ul>
          <CodeBlock language="css" code=".border-box { background-clip: border-box; }
.padding-box { background-clip: padding-box; }
.content-box { background-clip: content-box; }
.text { background-clip: text; }" />
        </div>
      </div><br><br>
      <div class="preview-container">
        <div class="preview-header">Demo background-attachment</div>
        <div class="preview-content demo-box">
          <div class="box box-scroll scroll">
            <h4>scroll</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam voluptatibus doloremque voluptate, tenetur ducimus ad porro odit quaerat quidem repellendus repellat saepe facere cumque amet voluptatum libero accusantium molestias?</p>
          </div>
          <div class="box box-scroll fixed">
            <h4>fixed</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam voluptatibus doloremque voluptate, tenetur ducimus ad porro odit quaerat quidem repellendus repellat saepe facere cumque amet voluptatum libero accusantium molestias?</p>
          </div>
          <div class="box box-scroll local">
            <h4>local</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam voluptatibus doloremque voluptate, tenetur ducimus ad porro odit quaerat quidem repellendus repellat saepe facere cumque amet voluptatum libero accusantium molestias?</p>
          </div>
        </div>
      </div>
      <div class="preview-container">
        <div class="preview-header">Demo background-clip</div>
        <div class="preview-content demo-box">
          <div class="box box-clip clip-border">border-box</div>
          <div class="box box-clip clip-padding">padding-box</div>
          <div class="box box-clip clip-content">content-box</div>
          <div class="box box-clip clip-text">text text text</div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Imagen con degradado</h2>
      <div class="cards-grid">
        <div class="card recommended">
          <CodeBlock language="css" code=".bg-img-gradient {
  background: #8e0e00;
  background: -webkit-linear-gradient(to right, rgba(31, 28, 24, 0.603), rgba(142, 14, 0, 0.61)), url('../assets/images/portada.webp');
  background: linear-gradient(to right, rgba(31, 28, 24, 0.603), rgba(142, 14, 0, 0.61)), url('../assets/images/portada.webp');
  background-size: cover;
}" />
          <div class="demo-box">
            <div class="box bg-img-gradient"></div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'boxmodel', text: 'Modelo de Caja CSS' },
      { techId: 'css', moduleId: 'visual', text: 'Efectos Visuales (Sombras y Bordes)' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>

<style scoped>
.demo-box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
}

.box {
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.shorthand {
  background: #7fff00 url('/icons/css.svg') no-repeat local center;
}

.color {
  background: #d2691e;
}

.box.linear {
  background-image: linear-gradient(#ff7f50, #6495ed);
}

.box.linear-2 {
  background-image: linear-gradient(to left, #fff8dc, #dc143c);
}

.box.linear-3 {
  background-image: linear-gradient(to top right, #00ffff, #00008b);
}

.box.linear-4 {
  background-image: linear-gradient(60deg, #008b8b, #b8860b);
}

.box.radial {
  background-image: radial-gradient(circle closest-side, #a9a9a9, #006400);
}

.box.radial-2 {
  background-image: radial-gradient(circle closest-corner, #a9a9a9, #006400);
}

.box.radial-3 {
  background-image: radial-gradient(circle farthest-side, #a9a9a9, #006400);
}

.box.radial-4 {
  background-image: radial-gradient(circle farthest-corner, #a9a9a9, #006400);
}

.box.conic {
  background-image: conic-gradient(from 50deg, #a9a9a9, #bdb76b);
}

.box.conic-2 {
  background-image: conic-gradient(from 60deg, #8b008b, #556b2f, #8b008b);
}

.box.repeating {
  background-image: repeating-linear-gradient(45deg, #ff8c00, #ff8c00 10px, #9932cc 10px, #9932cc 20px);
}

.box.repeating-2 {
  background-image: repeating-radial-gradient(#8b0000, #8b0000 15px, #e9967a 15px, #e9967a 30px);
}

.box.bg-img {
  background-image: url('/icons/css.svg'), url('../../assets/images/portada.webp');
}

.box.bg-img-2 {
  background: url('/icons/css.svg'), #8fbc8f;
}

.box.repeat-x {
  background: url('/icons/css.svg'), #483d8b;
  background-size: 40%;
  background-repeat: repeat-x;
}

.box.repeat-y {
  background: url('/icons/css.svg'), #2f4f4f;
  background-size: 40%;
  background-repeat: repeat-y;
}

.box.no-repeat {
  background: url('/icons/css.svg'), #2f4f4f;
  background-size: 40%;
  background-repeat: no-repeat;
}

.box.space {
  background: url('/icons/css.svg'), #00ced1;
  background-size: 40%;
  background-repeat: space;
}

.box.round {
  background: url('/icons/css.svg'), #9400d3;
  background-size: 40%;
  background-repeat: round;
}

.box.bg-pos-1 {
  background: url('/icons/css.svg'), #ff1493;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
}

.box.bg-pos-2 {
  background: url('/icons/css.svg'), #00bfff;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: top left;
}

.box.bg-pos-3 {
  background: url('/icons/css.svg'), #696969;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 20% 20%;
}

.box.bg-pos-4 {
  background: url('/icons/css.svg'), #1e90ff;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 60px 2rem;
}

.box.bg-pos-5 {
  background: url('/icons/css.svg'), #b22222;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: bottom 10px right 20px;
}

.box.bg-pos-6 {
  background: url('/icons/css.svg'), #fffaf0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: bottom 10px right;
}

.box.bg-size-1 {
  background-image: url('../../assets/images/portada.webp');
  background-size: cover;
}

.box.bg-size-2 {
  background-image: url('../../assets/images/portada.webp');
  background-size: contain;
}

.box.bg-size-3 {
  background-image: url('../../assets/images/portada.webp');
  background-size: auto;
}

.box.bg-size-4 {
  background-image: url('../../assets/images/portada.webp');
  background-size: 100% 100%;
}

.box.bg-size-5 {
  background-image: url('../../assets/images/portada.webp');
  background-size: 128px 72px;
}

.box.box-scroll {
  background-image: url('../../assets/images/portada.webp');
  height: 240px;
  overflow-y: scroll;
  background-size: contain;
  flex-direction: row;
  flex-wrap: wrap;
  
}

.box.scroll {
  background-position: center;
  background-attachment: scroll;
}

.box.fixed {
  background-position: center;
  background-attachment: fixed;
}

.box.local {
  background-position: center;
  background-attachment: local;
}

.box.box-clip {
  background-image: url('../../assets/images/portada.webp');
  background-size: cover;
  border: 10px dashed #228b22;
  padding: 10px;
}

.box.clip-border {
  background-clip: border-box;
}

.box.clip-padding {
  background-clip: padding-box;
}

.box.clip-content {
  background-clip: content-box;
}

.box.clip-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
}

.bg-img-gradient {
  background: #8e0e00;
  background: -webkit-linear-gradient(to right, rgba(31, 28, 24, 0.603), rgba(142, 14, 0, 0.61)), url('../assets/images/portada.webp');
  background: linear-gradient(to right, rgba(31, 28, 24, 0.603), rgba(142, 14, 0, 0.61)), url('../../assets/images/portada.webp');
  background-size: cover;
}
</style>
