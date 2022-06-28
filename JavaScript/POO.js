//* Clases
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

//* Objetos declarados
//* Crear objeto usuario:
let usuario = {
    id: '13211022',
    nombre: 'Alex',
    edad: 22,
    lenguajes: ['HTML','CSS','JavaScript']
}

//* acceder a atributo nombre:
console.log(usuario.nombre);
console.log(usuario['nombre']); 

//* acceder a todos los atributos
for(const key in usuario){
    console.log(key);
}

//* acceder a los atributos y sus valores:
for(const key in usuario){
    console.log(`${key}: ${usuario[key]}`);
}

//* acceder a cada uno de los valores del atributo lenguajes:
for(const lenguaje of usuario.lenguajes){
    console.log(lenguaje);
}

//* imprimir el objeto en una frase
console.log(`El usuario ${usuario.id} de nombre ${usuario.nombre} tiene ${usuario.edad} años y maneja los lenguajes: ${usuario.lenguajes.join(', ')}`);

//* Objetos a partir de clases:
let persona1 = new Persona('Diego', 'Sandoval', 22);
let persona2 = new Persona('Juan', 'Fernández', 22);

//* acceder a atributos:
console.log(persona1.nombre);
console.log(persona2.nombre);

//* acceder a todos los atributos es igual a llamar al objeto:
console.log(persona1);
console.log(persona2);

//* invocar método saludar:
console.log(persona1.saludar());
console.log(persona2.saludar());

//*Funciones
//* sintaxis con fuction:
function saludar1(){
    console.log("Hola mundo");
}

//* sintaxis función de tipo expresión:
let saludar2 = function(){ return "Hola mundo" };

//* sintaxis función de tipo Self Invoking:
(function(a,b){ console.log("suma: " + (a+b)) })(1, 1);

//* sintaxis función flecha:
const saludar3 = () => { console.log("Hola mundo") };

//* uso de parámatros:
function saludarUsuario1(usuario){
    console.log(`Hola ${usuario}`);
}

const saludarUsuario2 = (usuario) => { console.log(`Hola ${usuario}`) };

//* devolucion de valores (return): 
function suma1(num1, num2){
    return 'suma: '+ (num1 + num2)
}

const suma2 = (num1, num2) => 'suma: '+ (num1 + num2) //* en las funciones flecha si solo hay una instruccion no es necesario el return ni las {} 

//* invocar funciones:
saludar1();
console.log(saludar2());
saludar3();

saludarUsuario1('Alex');
saludarUsuario2('Diego');

console.log(suma1(2, 1)); 

let result = suma2(4, 1);

console.log(result);

//* Ejercicio: 
class Book{
    constructor(title, author, year, gender){
        this.title = title;
        this.author = author;
        this.year = year;
        this.gender = gender;
    }

    bookInfo() {
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}.`
    }

}

let books = [];

const appendBook = () => {
    let title;
    let author;
    let year;
    let gender;

    do{
        title = prompt('Introduce el título del libro');
        if(title == ''){
            alert('El titulo del libro no puede estar vacio');
        }
    } while (title == '');

    do{
        author = prompt('Introduce el autor del libro');
        if(author == ''){
            alert('El autor del libro no puede estar vacio');
        }
    } while (author == '');

    do{
        year = prompt('Introduce el año del libro');
        if(year =='' || (isNaN(year) || year.length < 4)){
            alert('El año debe ser un número de 4 digitos');
        }
    } while (year =='' || (isNaN(year) || year.length < 4));
        
    do{
        gender = prompt('Introduce el género del libro');
        gender.toLowerCase();
        if(gender == ''){
            alert('El genero del libro no puede estar vacio');
        }
    } while (gender == '');

    books.push(new Book(title, author, year, gender));
}

const showBooks = () => {
    let list = document.getElementById("libros");
    let libro;
    var li;
    if(books.length == 0){
        alert('No hay libros agregados');
    } else {
        list.insertAdjacentHTML('beforebegin', '<h3 class="titulo3">Libros</h3>');
        for(let book of books){
            li = document.createElement("li");
            list.appendChild(li);
            libro = document.createTextNode(book.bookInfo());
            li.appendChild(libro);
        }
    }
}