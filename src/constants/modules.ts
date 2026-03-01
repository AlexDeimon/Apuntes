export interface Module {
  id: string
  name: string
  icon: string
}

export const modules: Record<string, Module[]> = {
  html: [
    { id: 'inicio', name: 'Iniciando con HTML', icon: '/Apuntes/v2/icons/html.svg' },
    { id: 'titulosParrafos', name: 'Titulos & Parrafos', icon: '/Apuntes/v2/icons/texto.png' },
    { id: 'secciones', name: 'Secciones de Contenido', icon: '/Apuntes/v2/icons/contenido.png' },
    { id: 'bloqueLinea', name: 'Bloque vs Línea', icon: '/Apuntes/v2/icons/webpage.png' },
  ],
  css: [
    { id: 'fundamentos', name: 'Fundamentos CSS', icon: '/Apuntes/v2/icons/css.svg' },
    { id: 'medidas', name: 'Medidas y Unidades', icon: '/Apuntes/v2/icons/regla.png' },
    { id: 'boxmodel', name: 'Modelo de Caja', icon: '/Apuntes/v2/icons/caja.png' },
  ],
  js: [
    { id: 'fundamentos', name: 'Fundamentos JS', icon: '/Apuntes/v2/icons/javascript.svg' },
    { id: 'strings', name: 'Strings', icon: '/Apuntes/v2/icons/strings.png' },
    { id: 'math', name: 'Math', icon: '/Apuntes/v2/icons/calculadora.png' },
  ],
  bootstrap: [
    { id: 'inicio', name: 'Iniciando con Bootstrap', icon: '/Apuntes/v2/icons/bootstrap.svg' },
    { id: 'imagenes', name: 'Imágenes', icon: '/Apuntes/v2/icons/imagen.png' },
    { id: 'tablas', name: 'Tablas', icon: '/Apuntes/v2/icons/tabla.png' },
  ],
  typescript: [
    { id: 'inicio', name: '¿Qué es TS?', icon: '/Apuntes/v2/icons/typescript.svg' },
    { id: 'inferencia', name: 'Inferencia', icon: '/Apuntes/v2/icons/visual.png' },
    { id: 'tipos', name: 'Tipos de Datos', icon: '/Apuntes/v2/icons/datos.png' },
  ],
  nodejs: [
    { id: 'inicio', name: '¿Qué es Node.js?', icon: '/Apuntes/v2/icons/node.svg' },
    { id: 'filesystem', name: 'File System', icon: '/Apuntes/v2/icons/file.png' },
    { id: 'path', name: 'Path', icon: '/Apuntes/v2/icons/path.png' },
  ],
}
