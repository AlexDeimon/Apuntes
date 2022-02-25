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

