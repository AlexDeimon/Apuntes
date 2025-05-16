//* Objeto window
const alerta = () => {
    alert('Se ha lanzado la alerta');
}

const escribe = ()  => {
    let nombre = prompt('Digita tu nombre');
    alert(`Tu nombre es ${nombre}`);
}

const confirmar = () => {
    if (confirm('¿Acepta?')) {
        alert('El usuario aceptó');
    } else {
        alert('El usuario no aceptó');
    } 
}

//* objeto console:
console.log('Hola mundo');
console.error('Soy un error');

const usuario = {
    nombre: 'Alex',
    edad: 22,
    email: 'AlexD@gmail.com'
}

console.table(usuario);

//* objeto location:
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash);

//* Objeto Date:
let fecha = new Date();
const parrafofecha = document.getElementById('fecha');

let dias = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabádo'];
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const fechaActual = () => {
    parrafofecha.textContent = `Hoy es ${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del año ${fecha.getFullYear()}.`;
}

const horaActual = () =>{
    if(fecha.getHours() > 12){
        parrafofecha.textContent = `La hora es ${(fecha.getHours()-12)}:${fecha.getMinutes()} PM`;
    } else {
        parrafofecha.textContent = `La hora es ${fecha.getHours()}:${fecha.getMinutes()} AM`;
    }
}

//* Timers
const parrafoTimers = document.getElementById('timers');
const parrafoTimers2 = document.getElementById('timers2');
let timeout;
let interval;
let contador = 0;

const holaMundo2s = () => {
    timeout = setTimeout(() => {
        parrafoTimers.textContent = 'Hola mundo';
    }, 2000);
}

const contadorSeg = () => {
    interval = setInterval(() => {
        parrafoTimers2.textContent = `${contador} segundos`;
        contador++;
    }, 1000);
}

const detener = () => {
    clearInterval(interval);
}
