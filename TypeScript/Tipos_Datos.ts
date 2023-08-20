//* TIPO ANY
let anyValue:any = 'Hola mundo'

//* anyValue. //* No sale el autocomplete como si sale en el ejemplo de Inferencia
//* Esta ignorando que es un tipo String

//* Tipo Built-in
let numero:number = 1
let cadenaTexto:string = 'Soy un String'
let booleano:boolean = true
let indefinido:undefined
let nulo:null
let vacio:void

let suma = numero + 5 //* Inferencia number
let concatenacion = cadenaTexto + ' de TypeScript' //* inferencia String

//* Asersiones de tipo

//const canvas = document.getElementById('canvas') //* canvas: HTMLElement | null

//const contexto = canvas.getContext('2d');

//if(canvas != null) canvas.getContext('2d');

//* para evitar esto:
//* 1ra manera: Obligar al typescript indicando el tipo de elemento
const canvas = document.getElementById('canvas') as HTMLCanvasElement

const contexto = canvas.getContext('2d'); //! elimina la validación de si puede ser null, un caso que SI puede ser posible

//* 2da manera: primero hace la validación de si no es null y luego la indicación del tipo
const canvas2 = document.getElementById('canvas')

if(canvas2 != null) (canvas2 as HTMLCanvasElement).getContext('2d'); //! En tiempo de ejecución el             as HTMLCanvasElement no funciona, por lo que es posible un error si al momento de ejecucion el tipo de elemento es diferente

//* 3ra manera: validar tambien que el elemento sea una instancia del tipo de elemento que se espera:
if(canvas2 != null && canvas2 instanceof HTMLCanvasElement) canvas2.getContext('2d'); //* inferencia

//* Narrowing
//! sin Narrowing
function mostrarLongitud(objeto: number | string){
//    return objeto.length;
}

//* con narrowing
function mostrarLongitud2(objeto: number | string){
    if(typeof objeto ==='string') return objeto.length;
    else return objeto.toString()
}

