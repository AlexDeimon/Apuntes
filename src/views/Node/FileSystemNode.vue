<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">File System (fs)</h1>
      <p class="subtitle">Manipulación de archivos y directorios con Node.js</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">Introducción</h2>
      <p class="section-desc"> El módulo <strong>fs</strong> (File System) es uno de los módulos centrales de Node.js. Permite interactuar con el sistema de archivos del sistema operativo (leer, crear, actualizar, borrar y renombrar archivos).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Importación</h3>
          </div>
          <p>Al ser un módulo nativo, no necesitas instalar nada.</p>
          <CodeBlock language="javascript" code="const fs = require('fs');
// O para usar promesas (Moderno)
const fsPromises = require('fs/promises');" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Síncrono vs Asíncrono</h2>
      <p class="section-desc">Casi todos los métodos de <code>fs</code> tienen una versión síncrona (bloqueante) y una asíncrona (no bloqueante).</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Versión Síncrona</h3>
            <span class="badge danger">Bloqueante</span>
          </div>
          <p>Terminan en <code>Sync</code>. Detienen la ejecución de todo el programa hasta que terminan. Útiles solo para scripts pequeños o inicialización.</p>
          <CodeBlock language="javascript" code="try {
  const data = fs.readFileSync('archivo.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Versión Asíncrona (Promesas)</h3>
            <span class="badge success">Recomendado</span>
          </div>
          <p>No bloquean el Event Loop. La forma moderna es usar <strong>Async/Await</strong> con el módulo <code>fs/promises</code>.</p>
          <CodeBlock language="javascript" code="const fs = require('fs/promises');

async function leerArchivo() {
  try {
    const data = await fs.readFile('archivo.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

leerArchivo();" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Operaciones Comunes</h2>
      <div class="cards-grid">
        <div class="card">
          <div class="card-header">
            <h3>Leer archivos</h3>
          </div>
          <p><code>readFile</code> lee el contenido de un archivo.</p>
          <CodeBlock language="javascript" code="const fs = require('fs/promises');

async function leerArchivo() {
  await fs.readFile('archivo.txt', 'utf8');
  console.log('Archivo leído exitosamente');
}

leerArchivo();" />
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Escribir Archivos</h3>
          </div>
          <p><code>writeFile</code> sobrescribe el archivo si existe, o lo crea si no.</p>
          <CodeBlock language="javascript" code="const fs = require('fs/promises');

async function crearArchivo() {
  const contenido = 'Este es el nuevo contenido.';
  await fs.writeFile('logs.txt', contenido);
  console.log('Creado exitosamente');
}" />
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Agregar contenido a archivos</h3>
          </div>
          <p><code>appendFile</code> agrega contenido al final del archivo.</p>
          <CodeBlock language="javascript" code="const fs = require('fs/promises');

async function agregarContenido() {
  const contenido = 'Este es el nuevo contenido.';
  await fs.appendFile('logs.txt', contenido);
  console.log('Contenido agregado exitosamente');
}

agregarContenido();" />
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Eliminar Archivos</h3>
          </div>
          <p><code>unlink</code> borra un archivo permanentemente.</p>
          <CodeBlock language="javascript" code="await fs.unlink('borrame.txt');" />
        </div>
        <div class="card">
          <div class="card-header">
            <h3>Leer Directorios</h3>
          </div>
          <p><code>readdir</code> lista los archivos y subcarpetas dentro de una carpeta.</p>
          <p>Si se le pasa el flag <code>withFileTypes: true</code>, devuelve objetos con información adicional de cada elemento (si es archivo, directorio, etc).</p>
          <CodeBlock language="javascript" code="async function verDirectorio() {
  const archivos = await fs.readdir('./mi-carpeta', { withFileTypes: true });
  archivos.forEach(archivo => {
    if (archivo.isDirectory()) {
      console.log('Directorio:', archivo.name);
    } else {
      console.log('Archivo:', archivo.name);
    }
  });
}

verDirectorio();" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Información de Archivos</h2>
      <p class="section-desc">El método <code>stat</code> se utiliza para obtener información sobre un archivo o un directorio. Esta información se presenta en un objeto de tipo <code>fs.Stats</code>, que contiene varios detalles sobre el archivo o directorio, como su tamaño, permisos, fecha de creación, y si es un archivo regular o un directorio.</p>
      <div class="card">
        <ul class="def-list">
          <li><span class="def-term">stats.isFile:</span> Devuelve <code>true</code> si el archivo es un archivo regular.</li>
          <li><span class="def-term">stats.isDirectory:</span> Devuelve <code>true</code> si el archivo es un directorio.</li>
          <li><span class="def-term">stats.size:</span> Devuelve el tamaño del archivo en bytes.</li>
          <li><span class="def-term">stats.mtime:</span> Devuelve la fecha de modificación del archivo.</li>
          <li><span class="def-term">stats.birthtime:</span> Devuelve la fecha de creación del archivo.</li>
          <li><span class="def-term">stats.atime:</span> Devuelve la fecha de último acceso al archivo.</li>
          <li><span class="def-term">stats.ctime:</span> Devuelve la fecha de cambio de estado del archivo.</li>
        </ul>
         <CodeBlock language="javascript" code="async function infoArchivos() {
    try {
        const archivos = await fs.readdir(Ruta, { withFileTypes: true });
        console.log(`El contenido de la carpeta: ${Ruta}`);

        for (const archivo of archivos) {
            const rutaCompleta = path.join(Ruta, archivo.name);
            const stat = await fs.stat(rutaCompleta);

            const tamaños = [20, 20, 15];
            const columnas = [archivo.name, stat.mtime.toUTCString().substring(0,16), stat.size + ' bytes'];
            const linea = [];

            columnas.forEach((columna, index) => {
                const textoFormateado = columna.padStart(tamaños[index], ' ');
                linea.push(textoFormateado);
            });

            console.log(...linea);
        }
    } catch (err) {
        console.error('Error leyendo el directorio:', err);
    }
}

infoArchivos()" />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>
