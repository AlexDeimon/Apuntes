//* Objeto XMLHttpRequest:
const button = document.getElementById('boton');

button.addEventListener('click', () => {
    let xhr;
    //* condicion para navegadores actuales else antiguos:
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    //* open: método de apertura de conexión (método HTTP, enlace al servidor o API para acceder a los datos)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); 

    //* Acción con los datos que se obtengan al enviar la petición:
    //* load = la petición ha terminado y información ha llegado correctamente. data: información de la petición
    xhr.addEventListener('load', (data) => { 
        //* se convierte a JSON ya que inicialmente el response está como un String
        const dataJSON = JSON.parse(data.target.response); 
        const list = document.getElementById('lista');
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('li');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem);
        }
    })

    xhr.send(); //* Enviar la petición
})

//* Fetch API
//* GET
const button2 = document.getElementById('boton2');

button2.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users') //* fetch tiene el método HTTP Get por defecto, por lo que, en este caso, solo se agrega el enlace al servidor
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) //* cuando la petición haya terminado se evalua el estado de la promesa, si es exitosa se lanza la función resolve, de lo contrario se lanza reject
        .then(res => res.json()) //* Equivalente a JSON.parse
        .then(res => {
            const list = document.getElementById('lista2');
            const fragment = document.createDocumentFragment();
            for (const userInfo of res) {
                const listItem = document.createElement('li');
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
                fragment.appendChild(listItem);
            }
            list.appendChild(fragment);
        })
})

//* POST
const button3 = document.getElementById('boton3')

button3.addEventListener('click', () => {
    const newPost = {
        title: prompt('Digite un titulo:'),
        body: prompt('Digite lo que quiera:'),
        userId: prompt('Digite un numero para id de usuario')
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', //* Método HTTP
        body: JSON.stringify(newPost), //* Datos que se enviarán
        headers: { //* Detalles sobre los datos
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => alert(`UserId: ${data.userId}\nId: ${data.id}\nTitle: ${data.title}\nBody: ${data.body}`))
})

//* leer archivos
const buttonImg = document.getElementById('boton-img');
const buttonPDF = document.getElementById('boton-pdf');

buttonImg.addEventListener('click', () => {
    fetch('../assets/images/AJAX04.webp')
    .then(res => res.blob())
    .then(img => {
        document.getElementById('img').src = URL.createObjectURL(img);
    })
})

buttonPDF.addEventListener('click', () => {
    fetch('../assets/demo.pdf')
    .then(res => res.blob())
    .then(pdf => {
        document.getElementById('link').href = URL.createObjectURL(pdf);
    })
})