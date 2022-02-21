//* accediendo a elementos HTML
//* getElementById:
const parrafo = document.getElementById('parrafo');
console.log(parrafo);

const contenidoTexto = () => { 
    parrafo.textContent = 'Nuevo contenido del párrafo';
    console.log(parrafo.textContent);
}

//* querySelector:
const parrafo2 = document.querySelector('.parrafo');

const span = parrafo2.querySelector('span');

const span2 = document.getElementById('parrafo2').querySelector('span');

const identificarSpan = () => {
    span.style.color = '#fed800';
    span.style.fontWeight = 'bold';
    span2.style.color = '#fed800';
    span2.style.fontWeight = 'bold';
}

//* querySelectorAll:

const parrafos = document.querySelectorAll('.parrafos'); //* Crea un nodeList 

const colorParrafos = () => {
    parrafos.map(p => p.style.color = 'green');
} //! ESTA FUNCIÓN DARÁ ERROR YA QUE MAP SOLO FUNCIONA CON ARRAYS

//* 1ra forma de convertir nodeList a Array:
const parrafosSpread = [...document.querySelectorAll('.parrafos')];

//* 2ra forma de convertir nodeList a Array:
const parrafosArray = Array.from(document.querySelectorAll('.parrafos'));

const colorParrafos2 = () => {
    parrafosSpread.map(p => p.style.color = '#ff4747');
}

const colorParrafos3 = () => {
    parrafosArray.map(p=>p.style.color='#6ae96d');
}

//* Modificar atributos y clases
//* atributos:
const input = document.getElementById('input');
const label = document.getElementById('labelInput');

const cambioInput = () => {
    console.log(input.getAttribute('type'));
    input.setAttribute('type','date');
    label.textContent = 'Input de tipo fecha';
    console.log(input.getAttribute('type'));
}

//* Clases:
const agregarClase = () => {
    label.classList.add('resaltado');
}

const eliminarClase = () => {
    label.classList.remove('resaltado');
    label.classList.remove('titulo4');
}

const validarClase = () => {
    if(label.classList.contains('resaltado') || label.classList.contains('titulo4')) alert('Label está resaltado');
    else alert('Label no está resaltado');
}

const reemplazarClase = () =>{
    label.classList.replace('resaltado','titulo4');
}

//* Crear e insertar elementos:
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const lista = document.getElementById('lista');
const selectDias = document.getElementById('selectDias');
// const listaDias = document.getElementById('listaDias');
const fragment = document.createDocumentFragment()

const crearOl = () =>{
    lista.innerHTML = '<ol class="lista" id="listaDias"></ol>';
}

const crearLi = () => {
    const li = document.createElement('li');
    li.textContent = 'Lunes';
    listaDias.appendChild(li);
}

const insertarDias = () => {
    for (const dia of dias) {
        listaDias.innerHTML += `<li>${dia}</li>`;
    }
}

const insertarDias2 = () => {
    for (const dia of dias) {
        const option = document.createElement('option');
        option.setAttribute('value', dia.toLowerCase());
        option.textContent = dia;
        fragment.appendChild(option);
        selectDias.appendChild(fragment);
    }
}

//*Recorrer elementos
const listaEjemplo = document.getElementById('listaEjemplo');

//* Padre
console.log(listaEjemplo.parentElement); //* devuelve section

//* hijos
console.log(listaEjemplo.children); //* devuelve [li, li, li]
console.log(listaEjemplo.firstElementChild); //* devuelve li del item 1
console.log(listaEjemplo.lastElementChild); //* devuelve li del item 3
console.log(listaEjemplo.hasChildNodes()); //* true

//* hermanos
console.log(listaEjemplo.nextElementSibling); //* devuelve img
console.log(listaEjemplo.previousElementSibling); //* devuelve null
console.log(listaEjemplo.children[1].nextElementSibling); //* devuelve el li del item 1
console.log(listaEjemplo.children[1].previousElementSibling);//* devuelve el li del item 3

//* Insertar, clonar y borrar elementos
const listaEjemplo2 = document.getElementById('listaEjemplo2');

const insertarLi2 = () => {
    const li = document.createElement('li');
    li.textContent = "nuevo item";
    listaEjemplo2.insertBefore(li, listaEjemplo2.children[1]);
}

const insertarTitulo = () => {
    listaEjemplo2.insertAdjacentHTML('beforebegin', '<h4 class="titulo4">Titulo lista</h4>');
}

const insertarPrimerLi = () => {
    const li = document.createElement('li');
    li.textContent = "primer item";
    listaEjemplo2.insertAdjacentElement('afterbegin', li);
}

const insertarUltimoLi = () => {
    const li = document.createElement('li');
    li.textContent = "último item";
    listaEjemplo2.insertAdjacentElement('beforeend', li);
}

const insertarParrafo = () => {
    const p = document.createElement('p');
    p.textContent = 'Parráfo nuevo'
    listaEjemplo2.insertAdjacentElement('afterend', p);
}

const reemplazarLi = () => {
    const li = document.createElement('li');
    li.textContent = "item reemplazado";
    listaEjemplo2.replaceChild(li ,listaEjemplo2.children[2])
}

const clonarUl = () => {
    listaEjemplo2.after(listaEjemplo2.cloneNode(true));
}

const eliminarUl = () => {
    listaEjemplo2.remove()
}

const eliminarLi = () => {
    listaEjemplo2.removeChild(listaEjemplo2.lastElementChild);
}