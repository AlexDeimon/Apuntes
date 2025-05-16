const button = document.getElementById('boton');

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        const list = document.getElementById('lista');
        const fragment = document.createDocumentFragment();
        for (const userInfo of res.data) {
            const listItem = document.createElement('li');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            fragment.appendChild(listItem);
        }
        list.appendChild(fragment);
    }).catch(err => console.log(err));
})

const button2 = document.getElementById('boton2');

button2.addEventListener('click', () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: prompt('Digite un titulo:'),
            body: prompt('Digite lo que quiera:'),
            userId: prompt('Digite un numero para id de usuario')
        }
    }).then(res => alert(`UserId: ${res.data.userId}\nId: ${res.data.id}\nTitle: ${res.data.title}\nBody: ${res.data.body}`))
      .catch(err => console.log(err));
})

