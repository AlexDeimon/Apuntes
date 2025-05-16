//* while
let numero = 0;
while(numero < 10){
    console.log(numero);
    numero++;
}

//* do while:
do{
    console.log(numero);
    numero++;
}while(numero < 10);

//* Ejemplos con manipulación del DOM:
function unoADiez(){
    let numero = 1;
    let lista = document.getElementById("unoADiez");
    let numeroLista;
    var li;
    while(numero <= 10){
        li = document.createElement("li");
        lista.appendChild(li);
        numeroLista = document.createTextNode(numero++);
        li.appendChild(numeroLista);
    }
}

function adivinaNumero(){
    let min = 1;
    let max = 10;
    resultado = Math.round(Math.random() * (max - min) + min) ;
    resultado;
    do{
        numero = prompt('Introduzca el numero del 1 al 10');
        if(numero != resultado){
            alert('número equivocado. Repitelo.');
        }
    }while(numero != resultado);
    alert('¡Adivinaste! Fin del bucle');
}

//* for:
let numeros = [10, 13, 8]

for(let i = 0; i < numeros.length; i++){
    console.log(`posición ${i} = ${numeros[i]}`);
}

//* for of:
let lenguajes = ['HTML', 'CSS', 'JavaScript', 'Python'];

for(let lenguaje of lenguajes){
    console.log(lenguaje);
}

//* for in:
for(let index in lenguajes){
    console.log(index);
}

//* break
for(let lenguaje of lenguajes){
    if(lenguaje == 'Python'){
        break;
    }
    console.log(lenguaje);
}

//* continue
for(let lenguaje of lenguajes){
    if(lenguaje == 'CSS'){
        continue;
    }
    console.log(lenguaje);
}