//* Funcion con Any implícito
function saludar(name){
    console.log(`Hola ${name}`)
}

saludar(5) //* actualmente name es any por lo que no infiere que debe ser un String

//* Funcion con tipo de dato
function saludar2(name: string){
    console.log(`Hola ${name}`)
}

//*saludar2(5) //! como ahora name es String el usar otro tipo de dato en el argumento da error

saludar2('mundo')

//* Funciones con objetos como parámetros
//! Any implícito
function saludar3({name, age}){
    console.log(`hola ${name} tienes ${age} años`)
}

saludar3({name:3, age:'Diego'}) //* No infiere los tipos de datos asi que podrian ser cualquier dato incorrecto 

//! Tipado incorrecto
// function saludar4({name: string, age: number}){ //! Aqui se están reenombrando los parámetros debido a la sintaxis propia de JavaScript por lo que luego no encontrará ni a name ni a age
//     console.log(`hola ${name} tienes ${age} años`)
// }

saludar3({name:3,age:'Diego'})

//* Tipado correcto:
//* 1ra forma
function saludar5({name, age}:{name: string, age: number}){ // * Se tipea todo el objeto
    console.log(`hola ${name} tienes ${age} años`)
}

//saludar5({name:23,age:'Diego'}) //! Ahora si genera error de tipo de datos
saludar5({name:'Diego',age:23}) //* Correcto

//* 2da forma
function saludar6(persona:{name: string, age: number}){ // * se asigna como parámetro una clase tipando las propiedades
    const {name, age} = persona //! se DEBEN asignar los parámetros a la clase o saldrá error
    console.log(`hola ${name} tienes ${age} años`)
}

//saludar6({name:23,age:'Diego'}) //! error de tipo de datos
saludar6({name:'Diego',age:23}) //* Correcto

//* Funciones con tipo de retorno
//* Inferido
function saludar7({name, age}:{name: string, age: number}){ 
    let mensaje =`hola ${name} tienes ${age} años`
    return mensaje //* se infiere que el retorno es de tipo String
}

saludar7({name:'Diego',age:23})

//* Asignado
function saludar8({name, age}:{name: string, age: number}) : string{ //* se asigna un String como tipo de retorno
    let mensaje =`hola ${name} tienes ${age} años`
    return mensaje 
}

saludar8({name:'Diego',age:23})

//* Callbacks
//! tipado incorrecto
const funcionSaludar = (fn: Function) => { //! Function es el equivalente a Any, y aunque funciona (no hay error) es una forma muy general de llamar a cualquier funcion
    fn('Diego')
}

funcionSaludar((name: string) => {
    return `Hola ${name}`
})

//* tipado correcto
const funcionSaludar2 = (fn: (name:string) => string ) => { //* se tipea los parámetros y el retorno del callback
    fn('Diego')
}

funcionSaludar2((name: string) => {
    return `Hola ${name}`
})

//* arrow functions
//* 1ra forma
const sumar = (a: number, b: number) : number => {
    return a + b
}

//* 2da forma
const restar: (a: number, b: number) => number = (a, b) => {
    return a - b
}

//* inferencia en funciones
let lenguajes = ['HTML', 'CSS', 'JavaScript', 'Python'];

lenguajes.forEach(lenguaje => { //* Aqui, gracias al contexto de que lenguajes es un arreglo de Strings, dentro del forEach no es necesario decir que tipo de dato es lenguaje, ya que se infiere que es un String
    console.log(lenguaje.toUpperCase())
})