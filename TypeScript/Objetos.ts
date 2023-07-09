//* Type Alias
type Hero = { //* Siempre se deben definir con la primera letra Mayúscula
    name: string,
    age: number,
    isActive?: boolean //? propiedad opcional: no genera error si no se llama a la propiedad
}

let hero: Hero = { //* definiendo un nuevo objeto Hero
    name: 'Thor',
    age: 1500
}

console.log(hero)

function createHero(name: string, age: number): Hero {
    return {name, age, isActive: true}
}

const ironMan = createHero('Iron Man', 40)

console.log(ironMan)

//* Template types
//* types como nuevo tipos de datos
type HexadecimalColor = `#${string}`
//const color1: HexadecimalColor = '9371ff'
const color2: HexadecimalColor = '#9371ff' //* correcto

//* types como tipos de datos dentro de otros types
type HeroId = `${string}-${string}-${string}-${string}`

type Hero2 = { 
    readonly id?: HeroId,
    name: string,
    age: number
}

function createHero2(name: string, age: number): Hero2 {
    return {
        //id: '122',
        name, 
        age
    }
}

function createHero3(name: string, age: number): Hero2 {
    return {
        id: '122-943-130-620', //* correcto
        name, 
        age
    }
}

//* union types
type HeroPowerScale = 'local' | 'planetario' | 'galactico' | 'universal' | 'multiversal'

let multiTipo: number | string

multiTipo = 3
// multiTipo = true

type Hero3 = { 
    readonly id?: HeroId,
    name: string,
    age: number
    powerScale?: HeroPowerScale
}

function createHero4(name: string, age: number): Hero3 {
    return {
        id: '122-943-130-620', //* correcto
        name, 
        age
    }
}

const doctorStrange = createHero4('Doctor Strange', 40)

doctorStrange.powerScale = "universal"

//* Intersection Types
//* Extender tipos
type HeroBasicInfo = {
    name: string,
    age: number
}

type HeroProperties = { 
    readonly id?: HeroId,
    isActive?: boolean
    powerScale?: HeroPowerScale
}

type Hero4 = HeroBasicInfo & HeroProperties //* type Hero creado a partir de 2 Types

function createHero5(input: HeroBasicInfo): Hero4{
    const {name, age} = input
    return{
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

//*Type indexing
//* acceder a types anidados con [] 
type HeroProperties2 = {
    isActive: boolean,
    address: {
        planet: string,
        city: string,
    }
}

const addressHero: HeroProperties2['address'] = {
    planet: 'Earth',
    city: 'New York'
}

//* Type from value
//* crear un typo a apartir de una constante
const address = {
    planet: 'Earth',
    city: 'New York'
}
//* typeof en Typescript extrae los tipos de objetos, funciones, etc
type Address = typeof address

//* type of function return
function createAddress(){
    return{
        planet: 'Earth',
        city: 'New York'
    }
}
//* permite obtener el type que está retornando una función
type Address2 = ReturnType<typeof createAddress>

//* Interfaces
interface Hero {
    id: string,
    name: string,
    age: number,
    saludar: () => void
}

const hero:Hero = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar() {
        console.log(`hola`)
    },
}

//* Interfaces anidadas
interface Producto {
    id: string,
    nombre: string,
    precio: number,
    quantity: number
}

interface carritoCompras {
    totalPrice: number,
    productos: Producto[]
}

const carrito: carritoCompras = {
    totalPrice: 100,
    productos: [
        {
            id: '1',
            nombre: 'teclado',
            precio: 400,
            quantity: 1
        }
    ]
}

//* extends
interface Camiseta extends Producto {
    talla: number | string
}

interface carritoCamisetas {
    totalPrice: number,
    camisetas: Camiseta[]
}

const carrito2: carritoCamisetas = {
    totalPrice: 100,
    camisetas: [
        {
            id: '1',
            nombre: 'teclado',
            precio: 400,
            quantity: 1,
            talla: 'L'
        }
    ]
}

//* Funciones en interfaces
//* manera 1:
interface carritoOps {
    add: (producto: Producto) => void,
    remove: (producto: Producto) => void,
    clear: () => void
}

//* manera 2:
interface carritoOps2 {
    add(producto: Producto): void,
    remove(producto: Producto): void,
    clear(): void
}