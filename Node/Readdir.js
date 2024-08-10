const fs = require('node:fs').promises;

const Ruta = 'C:/Users/diego/OneDrive/Documentos/Proyectos/Apuntes';

async function listarArchivos() {
    try {
        const archivos = await fs.readdir(Ruta, {
            withFileTypes: true
        });

        const getIcon = (archivo) => {
            if (archivo.isDirectory()) return "📁";
            else if (archivo.isFile()) return "📄";
        }

        console.log(`El contenido de la carpeta: ${Ruta}`);

        archivos.forEach((archivo) => {
            const icono = getIcon(archivo);
            const nombre = archivo.name;
            console.log(`${icono} ${nombre}`);
        });

    } catch (err) {
        console.error('Error leyendo el directorio:', err);
    }
}

listarArchivos();

