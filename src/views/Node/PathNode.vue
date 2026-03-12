<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Módulo Path</h1>
      <p class="subtitle">Utilidades para el manejo y transformación de rutas de archivos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Por qué usar Path?</h2>
      <p class="section-desc">Node.js se ejecuta en diferentes sistemas operativos (Windows, macOS, Linux). Cada sistema tiene su propia forma de representar las rutas de archivos. El módulo <code>path</code> abstrae estas diferencias para que el código sea multiplataforma.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Windows</h3>
          </div>
          <p>Usa barras invertidas (<code>\</code>) como separador: <code>C:\Users\admin\archivo.txt</code></p>
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Posix (Linux/Mac)</h3>
          </div>
          <p>Usa barras inclinadas (<code>/</code>) como separador: <code>/home/user/archivo.txt</code></p>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Métodos Principales</h2>
      <p class="section-desc">Para utilizar este módulo, primero debemos importarlo:</p>
      <CodeBlock language="javascript" code="const path = require('path'); // CommonJS
import path from 'path'; // ES Modules" />
      <br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>path.join()</h3>
          </div>
          <p>Une todos los fragmentos de ruta usando el separador específico del sistema operativo.</p>
          <CodeBlock language="javascript" code="path.join('/folder', 'subfolder', 'file.txt');
// Windows: \folder\subfolder\file.txt
// Linux: /folder/subfolder/file.txt" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.resolve()</h3>
          </div>
          <p>Resuelve una secuencia de rutas en una <strong>ruta absoluta</strong> desde el directorio actual.</p>
          <CodeBlock language="javascript" code="path.resolve('src', 'app.js');
// Salida: /Users/diego/project/src/app.js (ejemplo)" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.basename()</h3>
          </div>
          <p>Retorna la última porción de una ruta (generalmente el nombre del archivo).</p>
          <CodeBlock language="javascript" code="path.basename('/src/js/index.js'); // 'index.js'
path.basename('/src/js/index.js', '.js'); // 'index'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.dirname()</h3>
          </div>
          <p>Retorna el nombre del directorio de una ruta.</p>
          <CodeBlock language="javascript" code="path.dirname('/src/js/index.js'); // '/src/js'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.extname()</h3>
          </div>
          <p>Retorna la extensión del archivo, incluido el punto.</p>
          <CodeBlock language="javascript" code="path.extname('image.png'); // '.png'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.parse()</h3>
          </div>
          <p>Retorna un objeto cuyas propiedades representan elementos significativos de la ruta.</p>
          <CodeBlock language="javascript" code="path.parse('/home/user/dir/file.txt');
/* {
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
} */" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.format()</h3>
          </div>
          <p>Convierte un objeto de ruta en una cadena de texto.</p>
          <CodeBlock language="javascript" code="path.format({
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
});
// Salida: /home/user/dir/file.txt" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>path.normalize()</h3>
          </div>
          <p>Normaliza una ruta, resolviendo <code>..</code> y <code>.</code> automáticamente. También elimina los separadores duplicados.</p>
          <CodeBlock language="javascript" code="path.normalize('/home/user/dir/../file.txt');
/* /home/user/file.txt */" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Path en ES Modules (ESM)</h2>
      <p class="section-desc">En los módulos modernos (ESM), las variables globales <code>__dirname</code> y <code>__filename</code> no están disponibles. Debemos recrearlas.</p>
      <div class="card recommended">
        <ul class="def-list">
          <li><span class="def-term">__filename</span>: es la ruta absoluta del archivo actual.</li>
          <li><span class="def-term">__dirname</span>: es el directorio del archivo actual.</li>
        </ul>
        <CodeBlock language="javascript" code="import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);" />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
