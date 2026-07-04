import{d as g,r as S,q as v,c,a as k,b as t,e as f,i as m,s as b,v as R,z as T,f as I,g as q,t as l,F as y,h as C,o as u,_ as L}from"./index-DKWnb4Ff.js";import{C as O}from"./CodeBlock-CSHUkZ5S.js";import{R as N}from"./ReferenceSection-DOm7QAtu.js";const j={class:"module-content"},D={class:"topic-section"},U={class:"simulator-container"},A={class:"sim-client-panel"},M={class:"sim-row"},B={class:"sim-group method-group"},z={class:"sim-group url-group"},w={class:"url-input-wrapper"},G=["disabled"],F={key:0,class:"sim-group body-group"},_={key:0,class:"sim-server-panel"},H={class:"sim-response-header"},J={class:"sim-response-body"},V={class:"response-json"},K={class:"store-preview"},$={class:"books-badges"},Q={class:"book-id"},W={class:"book-title"},X={class:"book-author"},Y={class:"topic-section"},Z={class:"card recommended"},aa=g({__name:"ApiRestNode",setup(ea){const i=S([{id:1,title:"El Quijote",author:"Miguel de Cervantes"},{id:2,title:"Cien años de soledad",author:"Gabriel García Márquez"},{id:3,title:"Don Quijote II",author:"Miguel de Cervantes"}]),s=v({method:"GET",idParam:"",body:""}),e=v({status:0,statusText:"",data:null}),h=()=>{s.method==="POST"?(s.idParam="",s.body=`{
  "title": "Nuevo Libro",
  "author": "Autor Anónimo"
}`):s.method==="PUT"?s.body=`{
  "title": "Título Modificado",
  "author": "Autor Modificado"
}`:s.body=""},E=()=>{const r=s.method,a=s.idParam.trim(),o=parseInt(a);if(r==="GET")if(a==="")e.status=200,e.statusText="OK",e.data=i.value;else{const d=i.value.find(n=>n.id===o);d?(e.status=200,e.statusText="OK",e.data=d):(e.status=404,e.statusText="Not Found",e.data={error:`Libro con ID ${a} no encontrado.`})}else if(r==="POST")try{const d=JSON.parse(s.body);if(!d.title||!d.author){e.status=400,e.statusText="Bad Request",e.data={error:"Faltan parámetros title o author en el cuerpo."};return}const p={id:i.value.length>0?Math.max(...i.value.map(P=>P.id))+1:1,title:d.title,author:d.author};i.value.push(p),e.status=201,e.statusText="Created",e.data=p}catch{e.status=400,e.statusText="Bad Request",e.data={error:"Formato JSON inválido."}}else if(r==="PUT"){if(a===""){e.status=400,e.statusText="Bad Request",e.data={error:"Debes ingresar un ID en la URL para actualizar."};return}const d=i.value.find(n=>n.id===o);if(!d){e.status=404,e.statusText="Not Found",e.data={error:`Libro con ID ${a} no encontrado.`};return}try{const n=JSON.parse(s.body);if(!n.title||!n.author){e.status=400,e.statusText="Bad Request",e.data={error:"Faltan parámetros title o author en el cuerpo."};return}d.title=n.title,d.author=n.author,e.status=200,e.statusText="OK",e.data=d}catch{e.status=400,e.statusText="Bad Request",e.data={error:"Formato JSON inválido."}}}else if(r==="DELETE"){if(a===""){e.status=400,e.statusText="Bad Request",e.data={error:"Debes ingresar un ID en la URL para eliminar."};return}const d=i.value.findIndex(n=>n.id===o);d===-1?(e.status=404,e.statusText="Not Found",e.data={error:`Libro con ID ${a} no encontrado.`}):(i.value.splice(d,1),e.status=200,e.statusText="OK",e.data={success:!0,message:`Libro con ID ${a} eliminado con éxito.`})}},x=r=>r>=200&&r<300?"status-2xx":r>=400&&r<500?"status-4xx":"";return(r,a)=>(u(),c("div",j,[a[17]||(a[17]=k('<div class="header-section" data-v-9ba7a9fd><h1 class="main-title node" data-v-9ba7a9fd>API REST</h1><p class="subtitle" data-v-9ba7a9fd>Principios, diseño de endpoints, métodos HTTP y arquitectura de servicios RESTful modernos.</p></div><section class="topic-section" data-v-9ba7a9fd><h2 class="section-title node" data-v-9ba7a9fd>¿Qué es una API REST?</h2><p class="section-desc" data-v-9ba7a9fd>Una <strong data-v-9ba7a9fd>API REST</strong> (<em data-v-9ba7a9fd>Representational State Transfer</em>) es un estilo de arquitectura de software para sistemas hipermedia distribuidos, como la Web. Permite la comunicación cliente-servidor a través del protocolo HTTP, representando recursos en formatos estructurados (comúnmente JSON).</p><div class="cards-grid" data-v-9ba7a9fd><div class="card recommended" data-v-9ba7a9fd><div class="card-header" data-v-9ba7a9fd><h3 data-v-9ba7a9fd>Fundamentos</h3></div><ul class="def-list" data-v-9ba7a9fd><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Recurso:</span> Se refiere a cualquier objeto o entidad que puede ser nombrado, creado, modificado o eliminado. Por ejemplo: usuarios, productos, pedidos, etc.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Metodo HTTP:</span> Son los verbos que se utilizan para interactuar con los recursos. Por ejemplo: GET, POST, PUT, DELETE, etc.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Representación:</span> Es la forma en que se representa el recurso. Por ejemplo: JSON, XML, HTML, etc.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Cliente-Servidor:</span> Separación clara de responsabilidades entre el frontend y el backend.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Sin Estado (Stateless):</span> Cada petición del cliente contiene toda la información necesaria para procesarse; el servidor no guarda contexto.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Cacheable:</span> Las respuestas deben definirse explícitamente como cacheables o no para mejorar el rendimiento.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Interfaz Uniforme:</span> Identificación de recursos mediante URIs, manipulación a través de representaciones (headers/body), y mensajes autodescriptivos.</li></ul></div><div class="card recommended" data-v-9ba7a9fd><div class="card-header" data-v-9ba7a9fd><h3 data-v-9ba7a9fd>Principios</h3></div><ul class="def-list" data-v-9ba7a9fd><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Simplicidad:</span> Utiliza los métodos HTTP estándar para realizar operaciones sobre los recursos, lo que facilita la comprensión y el mantenimiento de la API.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Escalabilidad:</span> Permite que el sistema crezca sin comprometer su rendimiento o disponibilidad.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Portabilidad:</span> Permite que el sistema funcione en diferentes plataformas y entornos.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Visibilidad:</span> El cliente puede identificar facilmente el recurso que desea obtener.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Fiabilidad:</span> Al ser una arquitectura basada en estándares, las API REST son fáciles de implementar y mantener, lo que garantiza su fiabilidad y disponibilidad.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Cacheable:</span> Las respuestas deben definirse explícitamente como cacheables o no para mejorar el rendimiento.</li><li data-v-9ba7a9fd><span class="def-term" data-v-9ba7a9fd>Fácil de mantener:</span> Las API REST son fáciles de mantener y actualizar, lo que garantiza su fiabilidad y disponibilidad.</li></ul></div></div></section><hr class="divider" data-v-9ba7a9fd><section class="topic-section" data-v-9ba7a9fd><h2 class="section-title node" data-v-9ba7a9fd>Métodos HTTP</h2><p class="section-desc" data-v-9ba7a9fd>REST mapea las operaciones CRUD sobre recursos usando verbos HTTP estándar. Es vital distinguir entre métodos <strong data-v-9ba7a9fd>seguros</strong> (no modifican recursos) e <strong data-v-9ba7a9fd>idempotentes</strong> (ejecutar la petición múltiples veces tiene el mismo efecto que una sola vez).</p><div class="table-responsive" data-v-9ba7a9fd><table class="custom-table" data-v-9ba7a9fd><thead data-v-9ba7a9fd><tr data-v-9ba7a9fd><th data-v-9ba7a9fd>Método</th><th data-v-9ba7a9fd>Acción CRUD</th><th data-v-9ba7a9fd>¿Es Seguro?</th><th data-v-9ba7a9fd>¿Es Idempotente?</th><th data-v-9ba7a9fd>Código de Éxito Habitual</th></tr></thead><tbody data-v-9ba7a9fd><tr data-v-9ba7a9fd><td data-v-9ba7a9fd><span class="badge-verb get" data-v-9ba7a9fd>GET</span></td><td data-v-9ba7a9fd>Leer / Recuperar</td><td class="text-success" data-v-9ba7a9fd>Sí</td><td class="text-success" data-v-9ba7a9fd>Sí</td><td data-v-9ba7a9fd><code data-v-9ba7a9fd>200 OK</code></td></tr><tr data-v-9ba7a9fd><td data-v-9ba7a9fd><span class="badge-verb post" data-v-9ba7a9fd>POST</span></td><td data-v-9ba7a9fd>Crear / Insertar</td><td class="text-danger" data-v-9ba7a9fd>No</td><td class="text-danger" data-v-9ba7a9fd>No</td><td data-v-9ba7a9fd><code data-v-9ba7a9fd>201 Created</code></td></tr><tr data-v-9ba7a9fd><td data-v-9ba7a9fd><span class="badge-verb put" data-v-9ba7a9fd>PUT</span></td><td data-v-9ba7a9fd>Reemplazar (Completo)</td><td class="text-danger" data-v-9ba7a9fd>No</td><td class="text-success" data-v-9ba7a9fd>Sí</td><td data-v-9ba7a9fd><code data-v-9ba7a9fd>200 OK</code> o <code data-v-9ba7a9fd>204 No Content</code></td></tr><tr data-v-9ba7a9fd><td data-v-9ba7a9fd><span class="badge-verb patch" data-v-9ba7a9fd>PATCH</span></td><td data-v-9ba7a9fd>Actualizar (Parcial)</td><td class="text-danger" data-v-9ba7a9fd>No</td><td class="text-danger" data-v-9ba7a9fd>No (típico)</td><td data-v-9ba7a9fd><code data-v-9ba7a9fd>200 OK</code></td></tr><tr data-v-9ba7a9fd><td data-v-9ba7a9fd><span class="badge-verb delete" data-v-9ba7a9fd>DELETE</span></td><td data-v-9ba7a9fd>Eliminar</td><td class="text-danger" data-v-9ba7a9fd>No</td><td class="text-success" data-v-9ba7a9fd>Sí</td><td data-v-9ba7a9fd><code data-v-9ba7a9fd>200 OK</code> o <code data-v-9ba7a9fd>204 No Content</code></td></tr></tbody></table></div></section><hr class="divider" data-v-9ba7a9fd><section class="topic-section" data-v-9ba7a9fd><h2 class="section-title node" data-v-9ba7a9fd>Diseño Correcto de Endpoints</h2><p class="section-desc" data-v-9ba7a9fd>Los endpoints deben hacer referencia a <strong data-v-9ba7a9fd>sustantivos en plural</strong> que representen la colección del recurso, evitando incluir verbos de acción en la URL.</p><div class="cards-grid" data-v-9ba7a9fd><div class="card warning" data-v-9ba7a9fd><div class="card-header" data-v-9ba7a9fd><h3 data-v-9ba7a9fd>🔴 Prácticas Incorrectas (Antipatrones)</h3></div><ul data-v-9ba7a9fd><li data-v-9ba7a9fd><code data-v-9ba7a9fd>GET /obtenerUsuarios</code></li><li data-v-9ba7a9fd><code data-v-9ba7a9fd>POST /crearNuevoUsuario</code></li><li data-v-9ba7a9fd><code data-v-9ba7a9fd>GET /usuario/eliminar/42</code></li></ul></div><div class="card recommended" data-v-9ba7a9fd><div class="card-header" data-v-9ba7a9fd><h3 data-v-9ba7a9fd>🟢 Prácticas Correctas (RESTful)</h3></div><ul data-v-9ba7a9fd><li data-v-9ba7a9fd><code data-v-9ba7a9fd>GET /users</code> (Lista de usuarios)</li><li data-v-9ba7a9fd><code data-v-9ba7a9fd>GET /users/42</code> (Detalle del usuario 42)</li><li data-v-9ba7a9fd><code data-v-9ba7a9fd>POST /users</code> (Crea un nuevo usuario)</li><li data-v-9ba7a9fd><code data-v-9ba7a9fd>DELETE /users/42</code> (Elimina el usuario 42)</li></ul></div></div></section><hr class="divider" data-v-9ba7a9fd>',7)),t("section",D,[a[12]||(a[12]=t("h2",{class:"section-title node"},"Simulador Interactivo de API REST",-1)),a[13]||(a[13]=t("p",{class:"section-desc"},"Prueba cómo responde una API REST en tiempo real. Selecciona un método HTTP, define la URL/ID y el cuerpo de la petición para interactuar con una base de datos simulada de libros.",-1)),t("div",U,[t("div",A,[t("div",M,[t("div",B,[a[4]||(a[4]=t("label",null,"Método",-1)),b(t("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>s.method=o),class:"sim-select",onChange:h},a[3]||(a[3]=[t("option",{value:"GET"},"GET",-1),t("option",{value:"POST"},"POST",-1),t("option",{value:"PUT"},"PUT",-1),t("option",{value:"DELETE"},"DELETE",-1)]),544),[[R,s.method]])]),t("div",z,[a[6]||(a[6]=t("label",null,"Endpoint URL",-1)),t("div",w,[a[5]||(a[5]=t("span",{class:"url-prefix"},"/api/books",-1)),b(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=o=>s.idParam=o),placeholder:" (ID opcional)",class:"sim-input-text",disabled:s.method==="POST"},null,8,G),[[T,s.idParam]])])])]),s.method==="POST"||s.method==="PUT"?(u(),c("div",F,[a[7]||(a[7]=t("label",null,"Request Body (JSON)",-1)),b(t("textarea",{"onUpdate:modelValue":a[2]||(a[2]=o=>s.body=o),class:"sim-textarea",rows:"4"},null,512),[[T,s.body]])])):m("",!0),t("button",{class:"sim-btn-send",onClick:E},a[8]||(a[8]=[I(" Enviar Petición "),t("span",{class:"send-icon"},"➔",-1)]))]),e.status?(u(),c("div",_,[t("div",H,[a[9]||(a[9]=t("span",{class:"header-label"},"Response HTTP Status:",-1)),t("span",{class:q(["status-code-badge",x(e.status)])},l(e.status)+" "+l(e.statusText),3)]),t("div",J,[a[10]||(a[10]=t("label",null,"Response Body (JSON)",-1)),t("pre",V,[t("code",null,l(JSON.stringify(e.data,null,2)),1)])])])):m("",!0)]),t("div",K,[a[11]||(a[11]=t("h4",null,"Base de Datos en Memoria (Libros Actuales)",-1)),t("div",$,[(u(!0),c(y,null,C(i.value,o=>(u(),c("div",{key:o.id,class:"book-badge"},[t("span",Q,"ID: "+l(o.id),1),t("span",W,'"'+l(o.title)+'"',1),t("span",X,"por "+l(o.author),1)]))),128))])])]),a[18]||(a[18]=t("hr",{class:"divider"},null,-1)),t("section",Y,[a[15]||(a[15]=t("h2",{class:"section-title node"},"Ejemplo Completo en Node.js y Express",-1)),a[16]||(a[16]=t("p",{class:"section-desc"}," A continuación, se muestra cómo implementar un enrutamiento RESTful básico utilizando Express para el recurso de libros. ",-1)),t("div",Z,[a[14]||(a[14]=t("div",{class:"card-header"},[t("h3",null,"Servidor de Libros (RESTful API)")],-1)),f(O,{language:"javascript",code:`const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear bodies JSON

// Base de datos simulada en memoria
let books = [
  { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' }
];

// 1. GET /books - Listar todos los libros
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// 2. GET /books/:id - Obtener un libro por ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Libro no encontrado' });
  }
  res.status(200).json(book);
});

// 3. POST /books - Crear un libro nuevo
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Faltan parámetros requeridos' });
  }

  const newBook = {
    id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// 4. PUT /books/:id - Actualizar libro por completo
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Libro no encontrado' });
  }

  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Faltan parámetros requeridos' });
  }

  book.title = title;
  book.author = author;
  res.status(200).json(book);
});

// 5. DELETE /books/:id - Eliminar un libro
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Libro no encontrado' });
  }

  books.splice(index, 1);
  res.status(200).json({ message: 'Libro eliminado con éxito' });
});

app.listen(PORT, () => {
  console.log(\`API REST corriendo en http://localhost:\${PORT}\`);
});`})])]),a[19]||(a[19]=t("hr",{class:"divider"},null,-1)),f(N,{references:[{techId:"nodejs",moduleId:"http",text:"Módulo HTTP de Node.js"},{techId:"nodejs",moduleId:"express",text:"Express Framework"}]})]))}}),oa=L(aa,[["__scopeId","data-v-9ba7a9fd"]]);export{oa as default};
