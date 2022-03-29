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

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = { //* objeto que se va a añadir a la BD
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data);
    });

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
                cursor.continue(); //* recorre el siguiente registro de la colección hasta que el resultado sea null
            } else {
                tasks.textContent = '';
                tasks.appendChild(fragment);
            }
        }
    }
}

