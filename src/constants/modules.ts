export interface Module {
    id: string
    name: string
    icon: string
}

export const modules: Record<string, Module[]> = {
    html: [
        { id: 'titulosParrafos', name: 'Titulos & Parrafos', icon: '/Apuntes/v2/icons/texto.png' },
    ],
    css: [
        { id: 'fundamentos', name: 'Fundamentos CSS', icon: '/Apuntes/v2/icons/css.svg'}
    ],
    js: [
        { id: 'fundamentos', name: 'Fundamentos JS', icon:'/Apuntes/v2/icons/javascript.svg'}
    ],
    bootstrap: [
        { id: 'inicio', name: 'Iniciando con Bootstrap', icon:'/Apuntes/v2/icons/bootstrap.svg'}
    ],
    typescript: [
        { id: 'inicio', name: '¿Qué es TS?', icon:'/Apuntes/v2/icons/typescript.svg'}
    ],
    nodejs: [
        { id: 'inicio', name: '¿Qué es Node.js?', icon:'/Apuntes/v2/icons/node.svg'}
    ],
}