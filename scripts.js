var direcciones = new Array("HTML/Titulos_parrafos.html", "HTML/Seccion_contenido.html", "HTML/Elementos_bloque_&_linea.html", "HTML/Enlaces/Enlaces.html","HTML/Listas.html", "HTML/Tablas.html", "HTML/Formularios.html", "HTML/contenido_embebido.html", "HTML/Metadatos.html", "CSS/Fundamentos.html", "CSS/Position.html", "CSS/BoxModel.html", "CSS/Texto.html", "CSS/Visual.html", "CSS/Medidas.html", "CSS/Enlaces.html", "CSS/Listas.html", "CSS/Tablas.html", "CSS/Background.html", "CSS/Transform.html", "CSS/Transition.html", "CSS/Grid.html", "CSS/Flexbox.html", "CSS/BoxAlignment.html", "CSS/Animation.html", "CSS/pseudo.html", "CSS/Formularios.html", "CSS/Filtros.html" ,"CSS/BlendingModes.html", "CSS/clip-path.html", "CSS/Variables-Funciones.html", "CSS/Reglas.html", "CSS/Cursor_Scroll.html", "CSS/ResponsiveDesign.html", "JavaScript/Fundamentos.html", "JavaScript/Strings.html", "JavaScript/Math.html", "JavaScript/Condicionales.html", "JavaScript/Arrays.html", "JavaScript/Bucles.html", "JavaScript/SpreadOperator.html", "JavaScript/POO.html", "JavaScript/DOM.html", "JavaScript/Eventos.html", "JavaScript/ObjetosNativos.html", "JavaScript/AJAX.html", "JavaScript/Callbacks.html", "JavaScript/Promesas.html", "JavaScript/Async-Await.html", "JavaScript/Axios.html", "JavaScript/ExpresionesRegulares.html", "JavaScript/API-WebStorage.html", "JavaScript/API-DragDrop.html", "JavaScript/API-File.html", "JavaScript/API-IndexedDB.html", "JavaScript/API-VisibilityChange.html", "JavaScript/API-Online-Offline.html", "JavaScript/API-IntersectionObserver.html", "Bootstrap/inicio.html", "Bootstrap/Imagenes.html", "Bootstrap/Tablas.html", "Bootstrap/Botones.html", "Bootstrap/Cards.html", "Bootstrap/Carrusel.html", "Bootstrap/Collapse.html", "Bootstrap/Dropdown.html", "Bootstrap/Formularios.html","Bootstrap/ListGroup.html","Bootstrap/Modal.html")
function enlaceAleatorio(){
    aleat = Math.random() * direcciones.length
    aleat = Math.floor(aleat)
    window.location=direcciones[aleat]
}