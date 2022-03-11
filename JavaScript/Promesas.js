//Una promesa es un objeto con 2 callbacks internos
const usuarios = [
    {id: 1, nombre: 'Alex'},
    {id: 2, nombre: 'Diego'}, 
    {id: 3, nombre: 'Juan'}
];
const emails = [
    {id: 1, email: 'alex@gmail.com'},
    {id: 2, email: 'diego@gmail.com'}
];

const getUser = (id) => {
    const usuario = usuarios.find(usuario => usuario.id == id);
    //* crear la promesa mediante contructor Promise
    return promise = new Promise((resolve, reject) => {
        if (!usuario) reject(alert(`No existe un usuario con id ${id}`)); //* Error
        else resolve(alert(`Id: ${usuario.id}\nnombre: ${usuario.nombre}`)); //* Exito
    })
}

const getEmail = (nombre) => {
    const usuario = usuarios.find(usuario => usuario.nombre == nombre);
    if (!usuario){
        return alert(`${nombre} No existe`);
    } else {
        const email = emails.find(email => email.id == usuario.id);
        //* crear la promesa mediante contructor Promise
        return promise = new Promise((resolve, reject) => {
            if (!email) reject(alert(`${usuario.nombre} No tiene email`)); //* error
            else resolve(alert(`id: ${email.id} \nemail: ${email.email}`));//* exito
        })
    }
}

const usuario = () =>{
    const id = prompt('Digite un id de usuario (1 - 3):');
    getUser(id).then(res => res).catch(err => err);
};

const email = () =>{
    const nombre = prompt('Digite un nombre de usuario:');
    getEmail(nombre).then(res => res).catch(err => err)
}