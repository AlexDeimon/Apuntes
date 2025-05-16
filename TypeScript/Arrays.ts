//* Arrays
//* para un solo un tipo de dato
//! vacio tipo never
let lenguajes = []
//lenguajes.push('HTML')

//* forma 1
let lenguajes2: string[] = []
lenguajes2.push('CSS')
console.log(lenguajes2)

//* forma 2
let lenguajes3: Array<string> = []
//lenguajes2.push(2)

//* para varios tipos de datos
//! INCORRECTO
let arreglo: string[] | number[] = []
//arreglo.push('hola')
//arreglo.push(2)

//* Correcto
let arreglo2: (string | number)[] = []
arreglo2.push('mundo')
arreglo2.push(3)
console.log(arreglo2)

//* matrices
//* [
//*    ['X','O','X'] //string
//*    ['O','X','O'] //string
//*    ['X','','']   //string
//* ]

//* Array de arrays de strings
const tresRaya: string[][] = [
    ['X','O','X'], 
    ['O','X','O'],
    ['X','','']   
]

//! error 1 para este ejercicio de 3 en raya:
tresRaya[0][1] = '49' //! valor incorrecto
console.log(tresRaya)

//* corregir
type cellValue = 'X' | 'O' | ''
let tresRaya2: cellValue[][] = [
    ['X','O','X'], 
    ['O','X','O'],
    ['X','','']   
]
//tresRaya2[0][1] = '49'

//! error 2 para este ejercicio de 3 en raya: mas de tres celdas
tresRaya2= [
    ['X','O','X','X'], 
    ['O','X','O', 'O'],
    ['X','',''],
    ['O','X']   
]

//* Corrigiendo mediante Tuplas
type tresRaya = [
    [cellValue,cellValue,cellValue],
    [cellValue,cellValue,cellValue],
    [cellValue,cellValue,cellValue]
] //* solo se permiten 3 elementos

let tresRaya3: tresRaya = [
    ['X','O','X','X'],
    ['O','X','O'],
    ['X','','']
]

tresRaya3 = [
    ['X','O','X'], 
    ['O','X','O'],
    ['X','','']
]

