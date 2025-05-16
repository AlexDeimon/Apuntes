const fs = require('node:fs').promises;
const path = require('node:path');

const Ruta = 'C:/Users/diego/OneDrive/Documentos/Proyectos/Apuntes';

async function infoArchivos() {
    try {
        const archivos = await fs.readdir(Ruta, { withFileTypes: true });
        console.log(`El contenido de la carpeta: ${Ruta}`);

        for (const archivo of archivos) {
            const rutaCompleta = path.join(Ruta, archivo.name);
            const stat = await fs.stat(rutaCompleta);

            const tamaños = [20, 20, 15];
            const columnas = [archivo.name, stat.mtime.toUTCString().substring(0,16), stat.size + " bytes"];
            const linea = [];

            columnas.forEach((columna, index) => {
                const textoFormateado = columna.padStart(tamaños[index], " ");
                linea.push(textoFormateado);
            });

            console.log(...linea);
        }
    } catch (err) {
        console.error('Error leyendo el directorio:', err);
    }
}

infoArchivos()


