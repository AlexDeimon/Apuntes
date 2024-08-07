const sumar = (x1, x2) => x1 + x2
  
const restar = (x1, x2) =>  x1 - x2
  
const dividir = (x1, x2) => {
    if (x2 == 0) {
        mostrarErrorDivision()
    }
    else {
        return x1 / x2
    }
}

const mostrarErrorDivision = () => console.log('No se puede dividir por cero')

export {
    sumar,
    restar,
    dividir
};


