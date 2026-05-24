import{C as n}from"./CodeBlock-DLC-eVoM.js";import{d as i,c as r,b as e,f as o,e as a,a as t,o as l}from"./index-C9UjCUwy.js";const c={class:"module-content"},d={class:"topic-section"},u={class:"cards-grid"},v={class:"card info"},m={class:"topic-section"},p={class:"cards-grid"},f={class:"card warning"},g={class:"card recommended"},h={class:"topic-section"},y={class:"cards-grid"},b={class:"card"},A={class:"card"},x={class:"card"},F={class:"card"},j={class:"card"},w={class:"topic-section"},D={class:"card"},N=i({__name:"FileSystemNode",setup(E){return(q,s)=>(l(),r("div",c,[s[25]||(s[25]=e("div",{class:"header-section"},[e("h1",{class:"main-title node"},"File System (fs)"),e("p",{class:"subtitle"},"Manipulación de archivos y directorios con Node.js")],-1)),e("section",d,[s[2]||(s[2]=e("h2",{class:"section-title node"},"Introducción",-1)),s[3]||(s[3]=e("p",{class:"section-desc"},[o(" El módulo "),e("strong",null,"fs"),o(" (File System) es uno de los módulos centrales de Node.js. Permite interactuar con el sistema de archivos del sistema operativo (leer, crear, actualizar, borrar y renombrar archivos).")],-1)),e("div",u,[e("div",v,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Importación")],-1)),s[1]||(s[1]=e("p",null,"Al ser un módulo nativo, no necesitas instalar nada.",-1)),a(n,{language:"javascript",code:`const fs = require('fs');
// O para usar promesas (Moderno)
const fsPromises = require('fs/promises');`})])])]),s[26]||(s[26]=e("hr",{class:"divider"},null,-1)),e("section",m,[s[8]||(s[8]=e("h2",{class:"section-title node"},"Síncrono vs Asíncrono",-1)),s[9]||(s[9]=e("p",{class:"section-desc"},[o("Casi todos los métodos de "),e("code",null,"fs"),o(" tienen una versión síncrona (bloqueante) y una asíncrona (no bloqueante).")],-1)),e("div",p,[e("div",f,[s[4]||(s[4]=e("div",{class:"card-header"},[e("h3",null,"Versión Síncrona"),e("span",{class:"badge danger"},"Bloqueante")],-1)),s[5]||(s[5]=e("p",null,[o("Terminan en "),e("code",null,"Sync"),o(". Detienen la ejecución de todo el programa hasta que terminan. Útiles solo para scripts pequeños o inicialización.")],-1)),a(n,{language:"javascript",code:`try {
  const data = fs.readFileSync('archivo.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}`})]),e("div",g,[s[6]||(s[6]=e("div",{class:"card-header"},[e("h3",null,"Versión Asíncrona (Promesas)"),e("span",{class:"badge success"},"Recomendado")],-1)),s[7]||(s[7]=e("p",null,[o("No bloquean el Event Loop. La forma moderna es usar "),e("strong",null,"Async/Await"),o(" con el módulo "),e("code",null,"fs/promises"),o(".")],-1)),a(n,{language:"javascript",code:`const fs = require('fs/promises');

async function leerArchivo() {
  try {
    const data = await fs.readFile('archivo.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

leerArchivo();`})])])]),s[27]||(s[27]=e("hr",{class:"divider"},null,-1)),e("section",h,[s[21]||(s[21]=e("h2",{class:"section-title node"},"Operaciones Comunes",-1)),e("div",y,[e("div",b,[s[10]||(s[10]=e("div",{class:"card-header"},[e("h3",null,"Leer archivos")],-1)),s[11]||(s[11]=e("p",null,[e("code",null,"readFile"),o(" lee el contenido de un archivo.")],-1)),a(n,{language:"javascript",code:`const fs = require('fs/promises');

async function leerArchivo() {
  await fs.readFile('archivo.txt', 'utf8');
  console.log('Archivo leído exitosamente');
}

leerArchivo();`})]),e("div",A,[s[12]||(s[12]=e("div",{class:"card-header"},[e("h3",null,"Escribir Archivos")],-1)),s[13]||(s[13]=e("p",null,[e("code",null,"writeFile"),o(" sobrescribe el archivo si existe, o lo crea si no.")],-1)),a(n,{language:"javascript",code:`const fs = require('fs/promises');

async function crearArchivo() {
  const contenido = 'Este es el nuevo contenido.';
  await fs.writeFile('logs.txt', contenido);
  console.log('Creado exitosamente');
}`})]),e("div",x,[s[14]||(s[14]=e("div",{class:"card-header"},[e("h3",null,"Agregar contenido a archivos")],-1)),s[15]||(s[15]=e("p",null,[e("code",null,"appendFile"),o(" agrega contenido al final del archivo.")],-1)),a(n,{language:"javascript",code:`const fs = require('fs/promises');

async function agregarContenido() {
  const contenido = 'Este es el nuevo contenido.';
  await fs.appendFile('logs.txt', contenido);
  console.log('Contenido agregado exitosamente');
}

agregarContenido();`})]),e("div",F,[s[16]||(s[16]=e("div",{class:"card-header"},[e("h3",null,"Eliminar Archivos")],-1)),s[17]||(s[17]=e("p",null,[e("code",null,"unlink"),o(" borra un archivo permanentemente.")],-1)),a(n,{language:"javascript",code:"await fs.unlink('borrame.txt');"})]),e("div",j,[s[18]||(s[18]=e("div",{class:"card-header"},[e("h3",null,"Leer Directorios")],-1)),s[19]||(s[19]=e("p",null,[e("code",null,"readdir"),o(" lista los archivos y subcarpetas dentro de una carpeta.")],-1)),s[20]||(s[20]=e("p",null,[o("Si se le pasa el flag "),e("code",null,"withFileTypes: true"),o(", devuelve objetos con información adicional de cada elemento (si es archivo, directorio, etc).")],-1)),a(n,{language:"javascript",code:`async function verDirectorio() {
  const archivos = await fs.readdir('./mi-carpeta', { withFileTypes: true });
  archivos.forEach(archivo => {
    if (archivo.isDirectory()) {
      console.log('Directorio:', archivo.name);
    } else {
      console.log('Archivo:', archivo.name);
    }
  });
}

verDirectorio();`})])])]),s[28]||(s[28]=e("hr",{class:"divider"},null,-1)),e("section",w,[s[23]||(s[23]=e("h2",{class:"section-title node"},"Información de Archivos",-1)),s[24]||(s[24]=e("p",{class:"section-desc"},[o("El método "),e("code",null,"stat"),o(" se utiliza para obtener información sobre un archivo o un directorio. Esta información se presenta en un objeto de tipo "),e("code",null,"fs.Stats"),o(", que contiene varios detalles sobre el archivo o directorio, como su tamaño, permisos, fecha de creación, y si es un archivo regular o un directorio.")],-1)),e("div",D,[s[22]||(s[22]=t('<ul class="def-list"><li><span class="def-term">stats.isFile:</span> Devuelve <code>true</code> si el archivo es un archivo regular.</li><li><span class="def-term">stats.isDirectory:</span> Devuelve <code>true</code> si el archivo es un directorio.</li><li><span class="def-term">stats.size:</span> Devuelve el tamaño del archivo en bytes.</li><li><span class="def-term">stats.mtime:</span> Devuelve la fecha de modificación del archivo.</li><li><span class="def-term">stats.birthtime:</span> Devuelve la fecha de creación del archivo.</li><li><span class="def-term">stats.atime:</span> Devuelve la fecha de último acceso al archivo.</li><li><span class="def-term">stats.ctime:</span> Devuelve la fecha de cambio de estado del archivo.</li></ul>',1)),a(n,{language:"javascript",code:`async function infoArchivos() {
    try {
        const archivos = await fs.readdir(Ruta, { withFileTypes: true });
        console.log(\`El contenido de la carpeta: \${Ruta}\`);

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

infoArchivos()`})])])]))}});export{N as default};
