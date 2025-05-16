export interface Module {
    id: string
    name: string
    icon: string
}

export const modules: Record<string, Module[]> = {
    html: [
        { id: 'titulosParrafos', name: 'Titulos & Parrafos', icon: '/icons/texto.png' },
    ],
    css: [
        { id: 'fundamentos', name: 'Fundamentos CSS', icon: '/icons/css.svg'}
    ],
    js: [
        { id: 'fundamentos', name: 'Fundamentos JS', icon:'/icons/javascript.svg'}
    ],
    bootstrap: [
        { id: 'inicio', name: 'Iniciando con Bootstrap', icon:'/icons/bootstrap.svg'}
    ],
    typescript: [
        { id: 'inicio', name: '¿Qué es TS?', icon:'/icons/typescript.svg'}
    ],
    nodejs: [
        { id: 'inicio', name: '¿Qué es Node.js?', icon:'/icons/node.svg'}
    ],
}