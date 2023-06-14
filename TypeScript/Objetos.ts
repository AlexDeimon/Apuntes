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

//* Template union types
//* types como nuevo tipos de datos
type HexadecimalColor = `#${string}`
//const color1: HexadecimalColor = '9371ff' //! incorrecto
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
        //id: '122', //! incoreccto porque no cumple con el id de tipo HeroId
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

