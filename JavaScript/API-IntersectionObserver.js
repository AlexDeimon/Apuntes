const boxes = document.querySelectorAll('.box');

const callback = (boxes) => {
    boxes.forEach(box => {
        if (box.isIntersecting) { //* si la caja es interceptada aparece en consola el id de la caja
            console.log(box.target.id, 'is intersecting');
        }
    });
}

const observer = new IntersectionObserver(callback); //* se crea un objeto Intersection observer teninendo el callback como argumento
boxes.forEach(element => observer.observe(element)); //* por cada caja se ejecuta el metodo observe del objeto observer

