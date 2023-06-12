//* TIPO ANY
let anyValue:any = 'Hola mundo'

//* anyValue. //* No sale el autocomplete como si sale en el ejemplo de Inferencia
//* Esta ignorando que es un tipo String

//* Tipo Built-in
let numero:number = 1
let cadenaTexto:String = 'Soy un String'
let booleano:boolean = true
let indefinido:undefined
let nulo:null
let vacio:void

let suma = numero + 5 //* Inferencia number
let concatenacion = cadenaTexto + ' de TypeScript' //* inferencia String


