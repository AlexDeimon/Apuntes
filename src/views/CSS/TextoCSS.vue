<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title css">Estilos de Texto</h1>
      <p class="subtitle">Dominando la legibilidad, la estética y el diseño tipográfico.</p>
    </div>
        <section class="topic-section">
      <h2 class="section-title css">Alineación</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>text-align</h3>
          </div>
          <p>Controla la alineación horizontal del texto.</p>
          <ul class="def-list">
            <li><span class="def-term">center</span>: Centra el texto.</li>
            <li><span class="def-term">right</span>: Alinea el texto a la derecha.</li>
            <li><span class="def-term">left</span>: Alinea el texto a la izquierda.</li>
            <li><span class="def-term">justify</span>: Justifica el texto.</li>
          </ul>
          <div class="cards-grid">
            <CodeBlock language="css" code=".align-center { text-align: center; }
.align-right { text-align: right; }
.align-left { text-align: left; }
.align-justify { text-align: justify; }" />
            <div class="demo-box">
              <p class="align-center">Texto centrado</p>
              <p class="align-left">Texto a la izquierda</p>
              <p class="align-right">Texto a la derecha</p>
              <p class="align-justify">Texto justificado: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Tipografía y Fuentes</h2>
      <p class="section-desc">La elección de la fuente es crucial para la identidad visual. CSS permite usar fuentes del sistema o cargarlas remotamente.</p>
      <div class="card info">
        <div class="card-header">
          <h3>font-family</h3>
        </div>
        <p>Define la lista de fuentes. Siempre se debe incluir una familia genérica de respaldo (fallback).</p>
        <ul class="def-list">
          <li><span class="def-term">serif</span>: Fuentes que tienen serifas (adornos en los caracteres).</li>
          <li><span class="def-term">sans-serif</span>: Sin serifas.</li>
          <li><span class="def-term">monospace</span>: Fuentes monoespaciadas.</li>
          <li><span class="def-term">cursive</span>: Fuentes cursivas.</li>
          <li><span class="def-term">fantasy</span>: Fuentes decorativas.</li>
        </ul>
        <div class="cards-grid">
          <CodeBlock language="css" code=".serif {
  font-family: 'Times New Roman', Times, serif;
}

.monospace {
  font-family: 'Courier New', Courier, monospace;
}

.cursive {
  font-family: 'Brush Script MT', cursive;
}

.fantasy {
  font-family: 'Fantasy', cursive;
}
" />
          <div class="demo-box">
            <p class="serif">Texto Serif</p>
            <p class="sans-serif">Texto Sans-serif</p>
            <p class="monospace">Texto Monoespaciado</p>
            <p class="cursive">Texto Cursivo</p>
            <p class="fantasy">Texto Fantasía</p>
          </div>
        </div>
      </div><br><br>
      <div class="card recommended">
        <div class="card-header">
          <h3>Google Fonts</h3>
          <span class="badge success">Popular</span>
        </div>
        <p>Servicio gratuito para usar miles de fuentes profesionales mediante una etiqueta <code>&lt;link&gt;</code> o <code>@import</code>.</p>
        <a href="https://fonts.google.com/" target="_blank" class="link-external">Explorar Google Fonts →</a>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Transformaciones de Texto</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>text-transform</h3>
          </div>
          <p>Convierte el texto a mayúsculas, minúsculas o capitalizado.</p>
          <CodeBlock language="css" code=".uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }" />
          <div class="demo-box">
            <p class="uppercase">Texto en mayúsculas</p>
            <p class="lowercase">Texto en minúsculas</p>
            <p class="capitalize">Texto capitalizado</p>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>font-style</h3>
          </div>
          <p>Permite definir el aspecto de una familia tipográfica</p>
          <CodeBlock language="css" code=".italic { font-style: italic; }
.normal { font-style: normal; }
.oblique { font-style: oblique; }" />
          <div class="demo-box">
            <p class="italic">Texto en itálica</p>
            <p class="oblique">Texto oblicuo</p>
            <p class="normal">Texto normal</p>
          </div>
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>font-size</h3>
          </div>
          <p>Controla el tamaño del texto. Sus valores pueden ser absolutos, relativos, porcentuales o unidades de medida.</p>
          <CodeBlock language="css" code="// Absolutos
.xx-small { font-size: xx-small; }
.x-small { font-size: x-small; }
.small { font-size: small; }
.medium { font-size: medium; }
.large { font-size: large; }
.x-large { font-size: x-large; }
.xx-large { font-size: xx-large; }

// Relativos
.smaller { font-size: smaller; }
.larger { font-size: larger; }

// Porcentuales
.percent-50 { font-size: 50%; }
.percent-100 { font-size: 100%; }
.percent-150 { font-size: 150%; }

// Unidades de medida
.px-16 { font-size: 16px; }
.rem-1-5 { font-size: 1.5rem; }
.em-1-2 { font-size: 1.2em; }
" />
          <div class="demo-box">
            <p class="xx-small">Texto xx-small</p>
            <p class="x-small">Texto x-small</p>
            <p class="small">Texto small</p>
            <p class="medium">Texto medium</p>
            <p class="large">Texto large</p>
            <p class="x-large">Texto x-large</p>
            <p class="xx-large">Texto xx-large</p>
            <p class="smaller">Texto smaller</p>
            <p class="larger">Texto larger</p>
            <p class="percent-50">Texto 50%</p>
            <p class="percent-100">Texto 100%</p>
            <p class="percent-150">Texto 150%</p>
            <p class="px-16">Texto 16px</p>
            <p class="rem-1-5">Texto 1.5rem</p>
            <p class="em-1-2">Texto 1.2em</p>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>font-weight</h3>
          </div>
          <p>Define el grosor de la letra. Sus valores pueden ser absolutos, relativos o numericos (100-900).</p>
          <CodeBlock language="css" code="// Absolutos
.normal { font-weight: normal; }
.bold { font-weight: bold; }

// Relativos
.bolder { font-weight: bolder; }
.lighter { font-weight: lighter; }

// Numericos
.w-100 { font-weight: 100; }
.w-200 { font-weight: 200; }
.w-300 { font-weight: 300; }
.w-400 { font-weight: 400; }
.w-500 { font-weight: 500; }
.w-600 { font-weight: 600; }
.w-700 { font-weight: 700; }
.w-800 { font-weight: 800; }
.w-900 { font-weight: 900; }
" />
          <div class="demo-box">
            <p>Texto normal</p>
            <p class="bold">Texto bold</p>
            <p class="bolder">Texto bolder</p>
            <p class="lighter">Texto lighter</p>
            <p class="w-100">Texto 100</p>
            <p class="w-200">Texto 200</p>
            <p class="w-300">Texto 300</p>
            <p class="w-400">Texto 400</p>
            <p class="w-500">Texto 500</p>
            <p class="w-600">Texto 600</p>
            <p class="w-700">Texto 700</p>
            <p class="w-800">Texto 800</p>
            <p class="w-900">Texto 900</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Decoración y Sombras</h2>
      <p class="section-desc">Añade adornos o profundidad al texto para destacar elementos importantes.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>text-decoration</h3>
          </div>
          <p>Controla líneas sobre, bajo o a través del texto.</p>
          <CodeBlock language="css" code=".none { text-decoration: none; }
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.overline { text-decoration: overline; }
" />
          <div class="demo-box">
            <p class="underline">Texto underline</p>
            <p class="line-through">Texto line-through</p>
            <p class="overline">Texto overline</p>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>text-shadow</h3>
          </div>
          <p>Añade sombras al texto. Es una shorthand para las propiedades: text-shadow-color, text-shadow-offset-x, text-shadow-offset-y, text-shadow-blur.</p>
          <ul class="def-list">
            <li><span class="def-term">text-shadow-color</span>: Color de la sombra</li>
            <li><span class="def-term">text-shadow-offset-x</span>: Desplazamiento horizontal</li>
            <li><span class="def-term">text-shadow-offset-y</span>: Desplazamiento vertical</li>
            <li><span class="def-term">text-shadow-blur</span>: Desenfoque</li>
          </ul>
          <CodeBlock language="css" code=".shadow-text {
  text-shadow: 5px 5px 2.5px rgba(0, 181, 253, 0.722);
}" />
          <div class="demo-box shadow-text">Texto con Sombra</div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Espaciado</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>letter-spacing</h3>
          </div>
          <p>Controla el espacio entre letras.</p>
          <CodeBlock language="css" code=".letter-spacing-1 { letter-spacing: 1px; }
.letter-spacing-2 { letter-spacing: 2px; }" />
          <div class="demo-box">
            <p class="letter-spacing-1">Texto con espaciado entre letras</p>
            <p class="letter-spacing-2">Texto con espaciado entre letras</p>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>word-spacing</h3>
          </div>
          <p>Controla el espacio entre palabras.</p>
          <CodeBlock language="css" code=".word-spacing-1 { word-spacing: 1px; }
.word-spacing-5 { word-spacing: 5px; }" />
          <div class="demo-box">
            <p class="word-spacing-1">Texto con espaciado entre palabras</p>
            <p class="word-spacing-5">Texto con espaciado entre palabras</p>
          </div>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>line-height</h3>
          </div>
          <p>Controla el espacio entre líneas. Fundamental para la legibilidad.</p>
          <CodeBlock language="css" code=".line-height-1-6 { line-height: 1.6; }
.line-height-3 { line-height: 3; }" />
          <div class="demo-box">
            <p class="line-height-1-6">Texto con line-height 1.6</p>
            <p class="line-height-3">Texto con line-height 3</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Orientación</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>writing-mode</h3>
          </div>
          <p>Controla la orientación del texto.</p>
          <ul class="def-list">
            <li><span class="def-term">vertical-rl</span>: El texto se escribe verticalmente de derecha a izquierda.</li>
            <li><span class="def-term">vertical-lr</span>: El texto se escribe verticalmente de izquierda a derecha.</li>
            <li><span class="def-term">horizontal-tb</span>: El texto se escribe horizontalmente de izquierda a derecha.</li>
          </ul>
          <div class="cards-grid">
            <CodeBlock language="css" code=".vertical-rl { writing-mode: vertical-rl; }
.vertical-lr { writing-mode: vertical-lr; }
.horizontal-tb { writing-mode: horizontal-tb; }" />
            <div class="demo-box">
              <p>Texto horizontal</p>
              <p class="vertical-rl">Texto vertical</p>
              <p class="vertical-lr">Texto vertical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Identación</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>text-indent</h3>
          </div>
          <p>Aplica una sangría a la primera línea de un bloque de texto.</p>
          <div class="cards-grid">
            <CodeBlock language="css" code=".text-ident-1 { text-indent: 1em; }
.text-ident-2 { text-indent: 2em; }" />
            <div class="demo-box">
              <p class="text-ident-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <p class="text-ident-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Espacios en blanco</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>white-space</h3>
          </div>
          <p>Controla el espaciado en blanco. Establece cómo se manejan los espacios en blanco, los saltos de línea y los tabuladores en el texto.</p>
          <ul class="def-list">
            <li><span class="def-term">normal</span>: Los espacios en blanco se contraen y los saltos de línea se ignoran.</li>
            <li><span class="def-term">pre</span>: Los espacios en blanco y los saltos de línea se conservan.</li>
            <li><span class="def-term">pre-wrap</span>: Los espacios en blanco se conservan y los saltos de línea se respetan.</li>
            <li><span class="def-term">pre-line</span>: Los espacios en blanco se contraen y los saltos de línea se respetan.</li>
            <li><span class="def-term">nowrap</span>: Los espacios en blanco se contraen y los saltos de línea se ignoran.</li>
          </ul>
          <CodeBlock language="css" code=".white-space-normal { white-space: normal; }
.white-space-pre { white-space: pre; }
.white-space-pre-wrap { white-space: pre-wrap; }
.white-space-pre-line { white-space: pre-line; }
.white-space-nowrap { white-space: nowrap; }" />
          <div class="demo-box demo-box-flex">
            <div class="box">
              <p class="white-space-normal">normal: Los múltiples espacios    se colapsan y el texto fluye normal.</p>
            </div>
            <div class="box">
              <p class="white-space-pre">pre: Este texto es muy largo y no debería envolverse, por lo que desbordará el cuadro hacia la derecha.</p>
            </div>
            <div class="box"><br><br>
              <p class="white-space-pre-wrap" v-text="`pre-wrap: Mantiene    espacios
y saltos de              línea manuales,
pero también se envuelve si no cabe.`"></p>
            </div>
            <div class="box">
              <p class="white-space-nowrap">nowrap: Todo este texto se mantendrá en una sola línea ignorando los bordes del cuadro.</p>
            </div>
            <div class="box"><br><br>
              <p class="white-space-pre-line" v-text="`pre-line: Colapsa espacios    pero respeta saltos
de línea
manuales.`"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title css">Romper palabras y textos extensos</h2>
      <p class="section-desc">Hay ocaciones en la que un texto concreto (por ejemplo, un enlace muy extenso) no cabe dentro de un contenedor, por lo que el texto se desborda. Para evitar este tipo de situaciones existen diferentes propiedades.</p>
      <div class="card info">
        <div class="card-header">
          <h3>hyphens</h3>
        </div>
        <p>Especifica cómo se deben dividir las palabras cuando el texto se ajusta a varias líneas.</p>
        <ul class="def-list">
          <li><span class="def-term">none</span>: No se permiten divisiones de palabras.</li>
          <li><span class="def-term">manual</span>: Solo se permiten divisiones de palabras que el navegador considere apropiadas (por ejemplo, si la palabra está escrita con guiones).</li>
          <li><span class="def-term">auto</span>: El navegador puede dividir las palabras largas con guiones si es necesario.</li>
        </ul>
        <CodeBlock language="css" code=".hyphens-none { hyphens: none; }
.hyphens-manual { hyphens: manual; }
.hyphens-auto { hyphens: auto; }" />
        <div class="demo-box demo-box-flex">
          <div class="box">
            <p class="hyphens-none" v-text="'none: NoooSeeeRooompeeeLaaaPaaalaaabraaaLaaargaaa'" ></p>
          </div>
          <div class="box">
            <p class="hyphens-manual" v-text="'manual: Si-se-rompe-la-palabra-larga'" ></p>
          </div>
          <div class="box">
            <p class="hyphens-auto" v-text="'auto: SiiiSeeeRooompeeeLaaaPaaalaaabraaaLaaargaaa'" ></p>
          </div>
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>overflow-wrap</h3>
        </div>
        <p>Se aplica a los elementos en línea, estableciendo si el navegador debe insertar saltos de línea dentro de una cadena que de otro modo sería irrompible para evitar que el texto se desborde en su cuadro de línea</p>
        <ul class="def-list">
          <li><span class="def-term">normal</span>: Las líneas solo pueden dividirse en puntos normales de separación de palabras (como un espacio entre dos palabras).</li>
          <li><span class="def-term">anywhere</span>: Para evitar el desbordamiento, una cadena de caracteres irrompible, como una palabra larga o una URL, puede dividirse en cualquier punto si no hay puntos de interrupción aceptables en la línea.</li>
          <li><span class="def-term">break-word</span>: Si una cadena de caracteres irrompible, como una palabra larga o una URL, no tiene ningún punto de interrupción aceptable en la línea, la palabra se romperá en cualquier punto para evitar el desbordamiento.</li>
        </ul>
        <CodeBlock language="css" code=".overflow-wrap-normal { overflow-wrap: normal; }
.overflow-wrap-anywhere { overflow-wrap: anywhere; }
.overflow-wrap-break-word { overflow-wrap: break-word; }" />
        <div class="demo-box demo-box-flex">
          <div class="box">
            <a class="overflow-wrap-normal link-external" v-text="'normal: Esta Es Una Palabra Muy Larga Para El Contenedor'" ></a>
          </div>
          <div class="box">
            <a class="overflow-wrap-anywhere link-external" v-text="'anywhere: Esta Es Una Palabra Muy Larga Para El Contenedor'" ></a>
          </div>
          <div class="box">
            <a class="overflow-wrap-break-word link-external" v-text="'break-word: EstaEsUnaPalabraMuyLargaParaElContenedor'" ></a>
          </div>
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>word-break</h3>
        </div>
        <p>Establece si los saltos de línea aparecen donde el texto de otro modo desbordaría su cuadro de contenido.</p>
        <ul class="def-list">
          <li><span class="def-term">normal</span>: Las palabras largas se rompen solo si es necesario.</li>
          <li><span class="def-term">break-all</span>: Las palabras largas se rompen en cualquier punto.</li>
          <li><span class="def-term">keep-all</span>: Las palabras largas no se rompen.</li>
        </ul>
        <CodeBlock language="css" code=".word-break-normal { word-break: normal; }
.word-break-break-all { word-break: break-all; }
.word-break-keep-all { word-break: keep-all; }" />
        <div class="demo-box demo-box-flex">
          <div class="box">
            <p class="word-break-normal" v-text="'normal: Esta-Es-Una-Palabra-Muy-Larga-Para-El-Contenedor'" ></p>
          </div>
          <div class="box">
            <p class="word-break-break-all" v-text="'break-all: EstaEsUnaPalabraMuyLargaParaElContenedor'" ></p>
          </div>
          <div class="box">
            <p class="word-break-keep-all" v-text="'keep-all: EstaEsUnaPalabraMuyLargaParaElContenedor'" ></p>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'css', moduleId: 'fundamentos', text: 'Fundamentos CSS' },
      { techId: 'html', moduleId: 'bloqueLinea', text: 'Elementos en línea y de bloque' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.align-center { text-align: center; }
.align-left { text-align: left; }
.align-right { text-align: right; }
.align-justify { text-align: justify; }

.serif { font-family: 'Times New Roman', Times, serif; }
.sans-serif { font-family: Arial, Helvetica, sans-serif; }
.monospace { font-family: 'Courier New', Courier, monospace; }
.cursive { font-family: 'Brush Script MT', cursive; }
.fantasy { font-family: 'Fantasy', cursive; }

.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

.italic { font-style: italic; }
.oblique { font-style: oblique; }
.normal { font-style: normal; }

.xx-small { font-size: xx-small; }
.x-small { font-size: x-small; }
.small { font-size: small; }
.medium { font-size: medium; }
.large { font-size: large; }
.x-large { font-size: x-large; }
.xx-large { font-size: xx-large; }

.smaller { font-size: smaller; }
.larger { font-size: larger; }

.percent-50 { font-size: 50%; }
.percent-100 { font-size: 100%; }
.percent-150 { font-size: 150%; }

.px-16 { font-size: 16px; }
.rem-1-5 { font-size: 1.5rem; }
.em-1-2 { font-size: 1.2em; }

.bold { font-weight: bold; }
.bolder { font-weight: bolder; }
.lighter { font-weight: lighter; }

.w-100 { font-weight: 100; }
.w-200 { font-weight: 200; }
.w-300 { font-weight: 300; }
.w-400 { font-weight: 400; }
.w-500 { font-weight: 500; }
.w-600 { font-weight: 600; }
.w-700 { font-weight: 700; }
.w-800 { font-weight: 800; }
.w-900 { font-weight: 900; }

.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.overline { text-decoration: overline; }

.shadow-text {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 5px 5px 2.5px rgba(0, 181, 253, 0.722);
  text-align: center;
  padding: 1rem;
}

.letter-spacing-1 { letter-spacing: 1px; }
.letter-spacing-2 { letter-spacing: 2px; }

.word-spacing-1 { word-spacing: 1px; }
.word-spacing-5 { word-spacing: 5px; }

.line-height-1-6 {
  line-height: 1.6;
  border: 1px solid #ccc;
}

.line-height-3 {
  line-height: 3;
  border: 1px solid #ccc;
}

.vertical-rl {
  display: inline;
  writing-mode: vertical-rl;
 }

.vertical-lr {
  display: inline;
  writing-mode: vertical-lr;
}

.text-ident-1 { text-indent: 1em; }
.text-ident-2 { text-indent: 2em; }

.demo-box-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}

.box {
  position: relative;
  width: 240px;
  height: 268px;
  padding: 10px;
  background: rgba(93, 93, 93, 0.2);
  border: 2px solid #333;
}

.white-space-normal { white-space: normal; }
.white-space-pre { white-space: pre; }
.white-space-pre-wrap { white-space: pre-wrap; }
.white-space-pre-line { white-space: pre-line; }
.white-space-nowrap { white-space: nowrap; }

.hyphens-none { hyphens: none; }
.hyphens-manual { hyphens: manual; }
.hyphens-auto { hyphens: auto; }

.overflow-wrap-normal { overflow-wrap: normal; }
.overflow-wrap-anywhere { overflow-wrap: anywhere; }
.overflow-wrap-break-word { overflow-wrap: break-word; }

.word-break-normal { word-break: normal; }
.word-break-break-all { word-break: break-all; }
.word-break-keep-all { word-break: keep-all; }
</style>
