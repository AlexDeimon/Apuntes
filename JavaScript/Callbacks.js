const saludo = document.getElementById('saludo');
const botonSaludar = document.getElementById('saludar');
const saludar = (nombre) => saludo.textContent = `Hola ${nombre}`;

const procesarSaludo = (callback) => {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}

const verSaludo = () => {
    procesarSaludo(saludar);
}

const lanzarDado = (iterations, callback) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
            //* Error, se ha sacado un 6
            return callback({
                error: true,
                message: "Se ha sacado un 6",
                value: numbers
            });
        }
    }
    //* Termina bucle y no se ha sacado 6
    return callback(null, {
        error: false,
        message: "Todas las tiradas correctas",
        value: numbers
    });
}

const error = document.getElementById('error');
const numeros = document.getElementById('numeros');
const resultado = document.getElementById('resultado');

const dado = () => {
    error.textContent = '';
    resultado.textContent = '';
    numeros.innerHTML = '';
    lanzarDado(10, function(err, result) {
        if (err) {
            error.textContent = err.message;
            let numeroLista;
            var li;
            err.value.forEach(numero => {
                li = document.createElement("li");
                numeros.appendChild(li);
                numeroLista = document.createTextNode(numero);
                li.appendChild(numeroLista);
            });
        }
        resultado.textContent = result.message;
        let numeroLista;
        var li;
        result.value.forEach(numero => {
            li = document.createElement("li");
            numeros.appendChild(li);
            numeroLista = document.createTextNode(numero);
            li.appendChild(numeroLista); 
        })
    });
}
