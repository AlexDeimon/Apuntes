export interface Tab {
    id: string
    title: string
    route: string
    moduleId: string
    techId: string
}

export const homeTab: Tab = {
    id: 'home',
    title: 'Inicio',
    route: '/',
    moduleId: 'home',
    techId: 'home'
}
