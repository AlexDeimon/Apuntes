const fileInput1 = document.getElementById('file1');
const text = document.getElementById('text');

//* Archivo tipo texto 
fileInput1.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.addEventListener('load', (e) => {
        text.textContent = e.target.result;
    })
});

const fileInput2 = document.getElementById('file2');
const img = document.getElementById('img');

//* Carga simple de imagen
fileInput2.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result);
    })
});

const fileInput3 = document.getElementById('file3');
const images = document.getElementById('images');

//* Carga múltiple de imágenes
fileInput3.addEventListener('change', (e) => {
    const files = e.target.files;
    const fragment = document.createDocumentFragment();
    for (const file of files) {
        const fileReader = new FileReader();
        const img = document.createElement('IMG');
        img.setAttribute('class', 'img');
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result);
        })
        fragment.appendChild(img);
    }
    images.appendChild(fragment);
});

const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('progress', (e) => {
        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%';
        progress.style.boxShadow = '0px 0px 10px 5px springgreen';
    });
    fileReader.addEventListener('loadend', () => {
        progress.style.width = '100%';
    });
});

//* API FILE + API DRAG DROP
const fileInput4 = document.getElementById('file4');
const dropZone = document.getElementById('drop-zone');
const images2 = document.getElementById('images2');

dropZone.addEventListener('click', () => fileInput4.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drop-zone--active');
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drop-zone--active');
});

fileInput4.addEventListener('change', (e) => {
    const files = e.target.files;
    const fragment = document.createDocumentFragment();
    for (const file of files) {
        const fileReader = new FileReader();
        const img = document.createElement('IMG');
        img.setAttribute('class', 'img');
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result);
        })
        fragment.appendChild(img);
    }
    images2.appendChild(fragment);
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    fileInput4.files = e.dataTransfer.files;
    const files = fileInput4.files;
    const fragment = document.createDocumentFragment();
    for (const file of files) {
        const fileReader = new FileReader();
        const img = document.createElement('IMG');
        img.setAttribute('class', 'img');
        fileReader.readAsDataURL(file);
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result);
        })
        fragment.appendChild(img);
    }
    images2.appendChild(fragment);
});