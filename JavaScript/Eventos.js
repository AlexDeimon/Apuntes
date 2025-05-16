const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafo');

//* Eventos del ratón:
boton.addEventListener('click', () => {
    parrafo.textContent = 'Se hizo un click';
});

boton.addEventListener('dblclick', () => {
    parrafo.textContent = 'Se hizo doble click';
});

boton.addEventListener('mouseenter', () => {
    boton.classList.add('botonHover');
});

boton.addEventListener('mouseleave', () => {
    boton.classList.remove('botonHover');
});

boton.addEventListener('mousedown', () => {
    boton.classList.add('botonShadow');
});

boton.addEventListener('mouseup', () => {
    boton.classList.remove('botonShadow');
});

boton.addEventListener('mousemove', () => {
    parrafo.textContent = 'Se ha movido el mouse por el boton';
});

//* Eventos del teclado
const input = document.getElementById('input');
const parrafo2 = document.getElementById('parrafoevent');

input.addEventListener('keydown', () => {
    parrafo2.textContent = 'Has pulsado una tecla';
});

input.addEventListener('keyup', () => {
    parrafo2.textContent = 'Has soltado una tecla';
});

input.addEventListener('keypress', () => {
    parrafo2.textContent = 'Estas pulsando una tecla';
});

//* Objeto evento
const form = document.getElementById('form');
const input2 = document.getElementById('input2');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const link = document.getElementById('link');
const grid = document.getElementById('grid'); 

input2.addEventListener('keyup', (event) => {
    console.log(event); //*En la consola se puede visualizar todo el objeto event
}) 

boton2.addEventListener('click', (event)=> {
    console.log(event.target); //*En la consola se puede visualizar el atributo target del objeto event
}) 

grid.addEventListener('click', (event) => {
    event.target.classList.add('red'); //* el target tambien nos ubica en el elemento hijo especifico donde se hizo el evento
}) 

link.addEventListener('click', (event) => {
    event.preventDefault(); //* Evita que se dispare el evento por defecto
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('El formulario se ha enviado');
})

boton3.addEventListener('click', () => {
    input2.value = 'Has hecho click';
})