export interface Technology {
    id: string;
    name: string;
    icon: string;
}

export const technologies: Technology[] = [
    { id: 'html', name: 'HTML', icon: '/Apuntes/v2/icons/html.svg' },   
    { id: 'css', name: 'CSS', icon: '/Apuntes/v2/icons/css.svg' },
    { id: 'js', name: 'JavaScript', icon: '/Apuntes/v2/icons/javascript.svg' },
    { id: 'bootstrap', name: 'Bootstrap', icon: '/Apuntes/v2/icons/bootstrap.svg' },
    { id: 'typescript', name: 'TypeScript', icon: '/Apuntes/v2/icons/typescript.svg' },
    { id: 'nodejs', name: 'Node.js', icon: '/Apuntes/v2/icons/node.svg' },
]