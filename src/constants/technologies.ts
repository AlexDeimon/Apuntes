export interface Technology {
    id: string;
    name: string;
    icon: string;
}

export const technologies: Technology[] = [
    { id: 'html', name: 'HTML', icon: '/icons/html.svg' },   
    { id: 'css', name: 'CSS', icon: '/icons/css.svg' },
    { id: 'js', name: 'JavaScript', icon: '/icons/javascript.svg' },
    { id: 'bootstrap', name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
    { id: 'typescript', name: 'TypeScript', icon: '/icons/typescript.svg' },
    { id: 'nodejs', name: 'Node.js', icon: '/icons/node.svg' },
]