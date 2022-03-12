const getName = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name}`);
        }, 2000); //* La función se ejecutará en 2 segundos
    });
}

const sayHello = async (name) => {
    const naame = await getName(name); //* espera a que la función getName se ejecute
    return `Hola ${naame}`;
}

const parrafo = document.getElementById('saludo');
const saludo = () =>{
    nombre = prompt('Digite su nombre:');
    sayHello(nombre).then(res => parrafo.textContent = `${res}`);
}

const usuarios = [
    {id: 1, nombre: 'Alex'},
    {id: 2, nombre: 'Diego'}, 
    {id: 3, nombre: 'Juan'}
]

const emails = [
    {id: 1, email: 'alex@gmail.com'},
    {id: 2, email: 'diego@gmail.com'}
]

const getUser = async (id) => {
    const usuario = usuarios.find(usuario => usuario.id == id);
    if (!usuario) throw new Error(`No existe usuario con id ${id}`);
    else return usuario;
}

const getEmail = async (usuario) => {
    const email = emails.find(email => email.id == usuario.id);
    if (!email) throw new Error(`${usuario.nombre} no tiene email`);
    else return ({
        id: usuario.id,
        nombre: usuario.nombre,
        email: email.email
    });
}

const getInfo = async (id) => {
    try {
        const usuario = await getUser(id);
        const res = await getEmail(usuario);
        return `Id: ${usuario.id}\nNombre: ${usuario.nombre}\nEmail: ${res.email}`;
    } catch (error) {
        return error;
    }
}

const usuario = () => {
    const id = prompt('Digite Id de usuario (1 - 3):');
    getInfo(id).then(res => alert(res));
}