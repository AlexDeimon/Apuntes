const img = document.getElementById('img');
const dropZone = document.getElementById('drop-zone');
const parrafo = document.getElementById('parrafo');

img.addEventListener('drag', () => {
    parrafo.textContent = "Se está arrastrando la imagen";
});

img.addEventListener('dragend', () => {
    parrafo.textContent = "Se ha soltado la imagen";
});

dropZone.addEventListener('dragenter', () => {
    dropZone.style.borderColor = "#fed800";
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.backgroundColor = "#2c323f";
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#6ae96d";
    dropZone.style.color = "#6ae96d";
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#ffffff";
    dropZone.style.backgroundColor = "initial";
});

