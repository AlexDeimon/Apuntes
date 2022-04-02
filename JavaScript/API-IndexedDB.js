const indexedDB = window.indexedDB;
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');


if (indexedDB) {
    let db;
    const request = indexedDB.open('tasksList', 1); //* crear la BD

    request.onsuccess = () => {
        db = request.result; 
        console.log('OPEN', db); //* Exito
        readData();
    }

    request.onupgradeneeded = () => { //* Si no existe crea la BD 
        db = request.result;
        console.log('Create', db);
        const objectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        }); //* Crea la colección Y LA KEY
    }

    request.onerror = (error) => {
        console.log('Error', error); //* Error
    }

    //* añadir datos
    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite'); //* crear la transacción
        const objectStore = transaction.objectStore('tasks'); //* Realizar la transacción
        const request = objectStore.add(data); //* Agregar el registro
        readData();
    }

    //* leer datos: 
    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly'); //* crear la transacción
        const objectStore = transaction.objectStore('tasks'); //* Realizar la transacción
        const request = objectStore.openCursor(); //* crear el cursor
        const fragment = document.createDocumentFragment();
        request.onsuccess = (e) => {
            const cursor = e.target.result; //* obtiene el resultado del primer registro
            if(cursor){
                const tr = document.createElement('TR');
                const taskTitle = document.createElement('TD');
                taskTitle.textContent = cursor.value.taskTitle;
                tr.appendChild(taskTitle);

                const taskPriority = document.createElement('TD');
                taskPriority.textContent = cursor.value.taskPriority;
                tr.appendChild(taskPriority);
                fragment.appendChild(tr);

                const taskupdateTd = document.createElement('TD');
                const taskUpdate = document.createElement('BUTTON');
                taskUpdate.setAttribute('class','boton');
                taskUpdate.dataset.type = 'update';
                taskUpdate.dataset.key = cursor.key;
                taskUpdate.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/24/pencil--v1.png">';
                taskupdateTd.appendChild(taskUpdate);
                tr.appendChild(taskupdateTd);
                fragment.appendChild(tr);

                const taskdeleteTd = document.createElement('TD');
                const taskdelete = document.createElement('BUTTON');
                taskdelete.setAttribute('class','boton');
                taskdelete.dataset.type = 'delete';
                taskdelete.dataset.key = cursor.key;
                taskdelete.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/24/trash--v1.png">';
                taskdeleteTd.appendChild(taskdelete);
                tr.appendChild(taskdeleteTd);
                fragment.appendChild(tr);

                cursor.continue(); //* recorre el siguiente registro de la colección hasta que el resultado sea null
            } else {
                tasks.textContent = '';
                tasks.appendChild(fragment);
            }
        }
    }

    //* obtener datos:
    const getData = (key) => {//* usa la key para buscar el registro
        const transaction = db.transaction(['tasks'], 'readwrite');
        const objectStore = transaction.objectStore('tasks');
        const request = objectStore.get(key); //* obtiene el registro

        request.onsuccess = (e) => { //* actualiza el form
            form.task.value = request.result.taskTitle;
            form.priority.value = request.result.taskPriority;
            form.button.dataset.action = 'update';
            form.button.textContent = 'Update Task';
        }
    }

    //*actualizar datos:
    const updateData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite');//* crear la transacion
        const objectStore = transaction.objectStore('tasks');//* realizar la transacion
        const request = objectStore.put(data); //* si el dato existe lo actualiza, si no lo crea
        request.onsuccess = () => {//* una vez actualizado el form vuelve a su defecto y se actualiza
            form.button.dataset.action = 'add';
            form.button.textContent = 'Add Task';
            readData();
        }
    }

    //* eliminar datos:
    const deleteData = (key) => {
        const transaction = db.transaction(['tasks'], 'readwrite'); //* crear la transacion
        const objectStore = transaction.objectStore('tasks'); //* realizar la transacion
        const request = objectStore.delete(key); //*elimina el registro segun el key
        request.onsuccess = () => {
            readData(); //* actualiza la tabla
        }
    }

    //*CRUD
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {//* objeto q se va a hacer CRUD en la BD
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }


        if (e.target.button.dataset.action == 'add') {//* si el dataset del input == add
            addData(data)
        } else if (e.target.button.dataset.action == 'update') { //* si el dataset del input == update
            updateData(data)
        }

        form.reset()
    })

    tasks.addEventListener('click', (e) => {
        if (e.target.dataset.type == 'update') {
            getData(e.target.dataset.key)
        } else if (e.target.dataset.type == 'delete') {
            deleteData(e.target.dataset.key)
        }
    })
}

