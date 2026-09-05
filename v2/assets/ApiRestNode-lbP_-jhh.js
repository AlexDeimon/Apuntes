import{d as g,r as S,y as m,c,a as k,b as t,e as b,l as T,h as p,v as R,j as f,f as I,i as q,t as l,F as y,k as C,o as u,_ as L}from"./index-B57m_bmv.js";import{C as O}from"./CodeBlock-CASvhCfR.js";import{R as N}from"./ReferenceSection-toiUOXWo.js";const j={class:"module-content"},D={class:"topic-section"},U={class:"simulator-container"},A={class:"sim-client-panel"},M={class:"sim-row"},B={class:"sim-group method-group"},z={class:"sim-group url-group"},w={class:"url-input-wrapper"},G=["disabled"],F={key:0,class:"sim-group body-group"},_={key:0,class:"sim-server-panel"},H={class:"sim-response-header"},J={class:"sim-response-body"},V={class:"response-json"},K={class:"store-preview"},$={class:"books-badges"},Q={class:"book-id"},W={class:"book-title"},X={class:"book-author"},Y={class:"topic-section"},Z={class:"card recommended"},aa=g({__name:"ApiRestNode",setup(ea){const i=S([{id:1,title:"El Quijote",author:"Miguel de Cervantes"},{id:2,title:"Cien años de soledad",author:"Gabriel García Márquez"},{id:3,title:"Don Quijote II",author:"Miguel de Cervantes"}]),s=m({method:"GET",idParam:"",body:""}),e=m({status:0,statusText:"",data:null}),h=()=>{s.method==="POST"?(s.idParam="",s.body=`{
  "title": "Nuevo Libro",
  "author": "Autor Anónimo"
}`):s.method==="PUT"?s.body=`{
  "title": "Título Modificado",
  "author": "Autor Modificado"
}`:s.body=""},E=()=>{const r=s.method,a=s.idParam.trim(),o=parseInt(a);if(r==="GET")if(a==="")e.status=200,e.statusText="OK",e.data=i.value;else{const d=i.value.find(n=>n.id===o);d?(e.status=200,e.statusText="OK",e.data=d):(e.status=404,e.statusText="Not Found",e.data={error:`Libro con ID ${a} no encontrado.`})}else if(r==="POST")try{const d=JSON.parse(s.body);if(!d.title||!d.author){e.status=400,e.statusText="Bad Request",e.data={error:"Faltan parámetros title o author en el cuerpo."};return}const v={id:i.value.length>0?Math.max(...i.value.map(P=>P.id))+1:1,title:d.title,author:d.author};i.value.push(v),e.status=201,e.statusText="Created",e.data=v}catch{e.status=400,e.statusText="Bad Request",e.data={error:"Formato JSON inválido."}}else if(r==="PUT"){if(a===""){e.status=400,e.statusText="Bad Request",e.data={error:"Debes ingresar un ID en la URL para actualizar."};return}const d=i.value.find(n=>n.id===o);if(!d){e.status=404,e.statusText="Not Found",e.data={error:`Libro con ID ${a} no encontrado.`};return}try{const n=JSON.parse(s.body);if(!n.title||!n.author){e.status=400,e.statusText="Bad Request",e.data={error:"Faltan parámetros title o author en el cuerpo."};return}d.title=n.title,d.author=n.author,e.status=200,e.statusText="OK",e.data=d}catch{e.status=400,e.statusText="Bad Request",e.data={error:"Formato JSON inválido."}}}else if(r==="DELETE"){if(a===""){e.status=400,e.statusText="Bad Request",e.data={error:"Debes ingresar un ID en la URL para eliminar."};return}const d=i.value.findIndex(n=>n.id===o);d===-1?(e.status=404,e.statusText="Not Found",e.data={error:`Libro con ID ${a} no encontrado.`}):(i.value.splice(d,1),e.status=200,e.statusText="OK",e.data={success:!0,message:`Libro con ID ${a} eliminado con éxito.`})}},x=r=>r>=200&&r<300?"status-2xx":r>=400&&r<500?"status-4xx":"";return(r,a)=>(u(),c("div",j,[a[17]||(a[17]=k('<div class="header-section" data-v-5755da22><h1 class="main-title node" data-v-5755da22>API REST</h1><p class="subtitle" data-v-5755da22>Principios, diseño de endpoints, métodos HTTP y arquitectura de servicios RESTful modernos.</p></div><section class="topic-section" data-v-5755da22><h2 class="section-title node" data-v-5755da22>¿Qué es una API REST?</h2><p class="section-desc" data-v-5755da22>Una <strong data-v-5755da22>API REST</strong> (<em data-v-5755da22>Representational State Transfer</em>) es un estilo de arquitectura de software para sistemas hipermedia distribuidos, como la Web. Permite la comunicación cliente-servidor a través del protocolo HTTP, representando recursos en formatos estructurados (comúnmente JSON).</p><div class="cards-grid" data-v-5755da22><div class="card recommended" data-v-5755da22><div class="card-header" data-v-5755da22><h3 data-v-5755da22>Fundamentos</h3></div><ul class="def-list" data-v-5755da22><li data-v-5755da22><span class="def-term" data-v-5755da22>Recurso:</span> Se refiere a cualquier objeto o entidad que puede ser nombrado, creado, modificado o eliminado. Por ejemplo: usuarios, productos, pedidos, etc.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Metodo HTTP:</span> Son los verbos que se utilizan para interactuar con los recursos. Por ejemplo: GET, POST, PUT, DELETE, etc.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Representación:</span> Es la forma en que se representa el recurso. Por ejemplo: JSON, XML, HTML, etc.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Cliente-Servidor:</span> Separación clara de responsabilidades entre el frontend y el backend.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Sin Estado (Stateless):</span> Cada petición del cliente contiene toda la información necesaria para procesarse; el servidor no guarda contexto.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Cacheable:</span> Las respuestas deben definirse explícitamente como cacheables o no para mejorar el rendimiento.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Interfaz Uniforme:</span> Identificación de recursos mediante URIs, manipulación a través de representaciones (headers/body), y mensajes autodescriptivos.</li></ul></div><div class="card recommended" data-v-5755da22><div class="card-header" data-v-5755da22><h3 data-v-5755da22>Principios</h3></div><ul class="def-list" data-v-5755da22><li data-v-5755da22><span class="def-term" data-v-5755da22>Simplicidad:</span> Utiliza los métodos HTTP estándar para realizar operaciones sobre los recursos, lo que facilita la comprensión y el mantenimiento de la API.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Escalabilidad:</span> Permite que el sistema crezca sin comprometer su rendimiento o disponibilidad.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Portabilidad:</span> Permite que el sistema funcione en diferentes plataformas y entornos.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Visibilidad:</span> El cliente puede identificar facilmente el recurso que desea obtener.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Fiabilidad:</span> Al ser una arquitectura basada en estándares, las API REST son fáciles de implementar y mantener, lo que garantiza su fiabilidad y disponibilidad.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Cacheable:</span> Las respuestas deben definirse explícitamente como cacheables o no para mejorar el rendimiento.</li><li data-v-5755da22><span class="def-term" data-v-5755da22>Fácil de mantener:</span> Las API REST son fáciles de mantener y actualizar, lo que garantiza su fiabilidad y disponibilidad.</li></ul></div></div></section><hr class="divider" data-v-5755da22><section class="topic-section" data-v-5755da22><h2 class="section-title node" data-v-5755da22>Métodos HTTP</h2><p class="section-desc" data-v-5755da22>REST mapea las operaciones CRUD sobre recursos usando verbos HTTP estándar. Es vital distinguir entre métodos <strong data-v-5755da22>seguros</strong> (no modifican recursos) e <strong data-v-5755da22>idempotentes</strong> (ejecutar la petición múltiples veces tiene el mismo efecto que una sola vez).</p><div class="table-responsive" data-v-5755da22><table class="custom-table" data-v-5755da22><thead data-v-5755da22><tr data-v-5755da22><th data-v-5755da22>Método</th><th data-v-5755da22>Acción CRUD</th><th data-v-5755da22>¿Es Seguro?</th><th data-v-5755da22>¿Es Idempotente?</th><th data-v-5755da22>Código de Éxito Habitual</th></tr></thead><tbody data-v-5755da22><tr data-v-5755da22><td data-v-5755da22><span class="badge-verb get" data-v-5755da22>GET</span></td><td data-v-5755da22>Leer / Recuperar</td><td class="text-success" data-v-5755da22>Sí</td><td class="text-success" data-v-5755da22>Sí</td><td data-v-5755da22><code data-v-5755da22>200 OK</code></td></tr><tr data-v-5755da22><td data-v-5755da22><span class="badge-verb post" data-v-5755da22>POST</span></td><td data-v-5755da22>Crear / Insertar</td><td class="text-danger" data-v-5755da22>No</td><td class="text-danger" data-v-5755da22>No</td><td data-v-5755da22><code data-v-5755da22>201 Created</code></td></tr><tr data-v-5755da22><td data-v-5755da22><span class="badge-verb put" data-v-5755da22>PUT</span></td><td data-v-5755da22>Reemplazar (Completo)</td><td class="text-danger" data-v-5755da22>No</td><td class="text-success" data-v-5755da22>Sí</td><td data-v-5755da22><code data-v-5755da22>200 OK</code> o <code data-v-5755da22>204 No Content</code></td></tr><tr data-v-5755da22><td data-v-5755da22><span class="badge-verb patch" data-v-5755da22>PATCH</span></td><td data-v-5755da22>Actualizar (Parcial)</td><td class="text-danger" data-v-5755da22>No</td><td class="text-danger" data-v-5755da22>No (típico)</td><td data-v-5755da22><code data-v-5755da22>200 OK</code></td></tr><tr data-v-5755da22><td data-v-5755da22><span class="badge-verb delete" data-v-5755da22>DELETE</span></td><td data-v-5755da22>Eliminar</td><td class="text-danger" data-v-5755da22>No</td><td class="text-success" data-v-5755da22>Sí</td><td data-v-5755da22><code data-v-5755da22>200 OK</code> o <code data-v-5755da22>204 No Content</code></td></tr></tbody></table></div></section><hr class="divider" data-v-5755da22><section class="topic-section" data-v-5755da22><h2 class="section-title node" data-v-5755da22>Diseño Correcto de Endpoints</h2><p class="section-desc" data-v-5755da22>Los endpoints deben hacer referencia a <strong data-v-5755da22>sustantivos en plural</strong> que representen la colección del recurso, evitando incluir verbos de acción en la URL.</p><div class="cards-grid" data-v-5755da22><div class="card warning" data-v-5755da22><div class="card-header" data-v-5755da22><h3 data-v-5755da22>🔴 Prácticas Incorrectas (Antipatrones)</h3></div><ul data-v-5755da22><li data-v-5755da22><code data-v-5755da22>GET /obtenerUsuarios</code></li><li data-v-5755da22><code data-v-5755da22>POST /crearNuevoUsuario</code></li><li data-v-5755da22><code data-v-5755da22>GET /usuario/eliminar/42</code></li></ul></div><div class="card recommended" data-v-5755da22><div class="card-header" data-v-5755da22><h3 data-v-5755da22>🟢 Prácticas Correctas (RESTful)</h3></div><ul data-v-5755da22><li data-v-5755da22><code data-v-5755da22>GET /users</code> (Lista de usuarios)</li><li data-v-5755da22><code data-v-5755da22>GET /users/42</code> (Detalle del usuario 42)</li><li data-v-5755da22><code data-v-5755da22>POST /users</code> (Crea un nuevo usuario)</li><li data-v-5755da22><code data-v-5755da22>DELETE /users/42</code> (Elimina el usuario 42)</li></ul></div></div></section><hr class="divider" data-v-5755da22>',7)),t("section",D,[a[12]||(a[12]=t("h2",{class:"section-title node"},"Simulador Interactivo de API REST",-1)),a[13]||(a[13]=t("p",{class:"section-desc"},"Prueba cómo responde una API REST en tiempo real. Selecciona un método HTTP, define la URL/ID y el cuerpo de la petición para interactuar con una base de datos simulada de libros.",-1)),t("div",U,[t("div",A,[t("div",M,[t("div",B,[a[4]||(a[4]=t("label",null,"Método",-1)),p(t("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>s.method=o),class:"sim-select",onChange:h},a[3]||(a[3]=[t("option",{value:"GET"},"GET",-1),t("option",{value:"POST"},"POST",-1),t("option",{value:"PUT"},"PUT",-1),t("option",{value:"DELETE"},"DELETE",-1)]),544),[[R,s.method]])]),t("div",z,[a[6]||(a[6]=t("label",null,"Endpoint URL",-1)),t("div",w,[a[5]||(a[5]=t("span",{class:"url-prefix"},"/api/books",-1)),p(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=o=>s.idParam=o),placeholder:" (ID opcional)",class:"sim-input-text",disabled:s.method==="POST"},null,8,G),[[f,s.idParam]])])])]),s.method==="POST"||s.method==="PUT"?(u(),c("div",F,[a[7]||(a[7]=t("label",null,"Request Body (JSON)",-1)),p(t("textarea",{"onUpdate:modelValue":a[2]||(a[2]=o=>s.body=o),class:"sim-textarea",rows:"4"},null,512),[[f,s.body]])])):T("",!0),t("button",{class:"sim-btn-send",onClick:E},a[8]||(a[8]=[I(" Enviar Petición "),t("span",{class:"send-icon"},"➔",-1)]))]),e.status?(u(),c("div",_,[t("div",H,[a[9]||(a[9]=t("span",{class:"header-label"},"Response HTTP Status:",-1)),t("span",{class:q(["status-code-badge",x(e.status)])},l(e.status)+" "+l(e.statusText),3)]),t("div",J,[a[10]||(a[10]=t("label",null,"Response Body (JSON)",-1)),t("pre",V,[t("code",null,l(JSON.stringify(e.data,null,2)),1)])])])):T("",!0)]),t("div",K,[a[11]||(a[11]=t("h4",null,"Base de Datos en Memoria (Libros Actuales)",-1)),t("div",$,[(u(!0),c(y,null,C(i.value,o=>(u(),c("div",{key:o.id,class:"book-badge"},[t("span",Q,"ID: "+l(o.id),1),t("span",W,'"'+l(o.title)+'"',1),t("span",X,"por "+l(o.author),1)]))),128))])])]),a[18]||(a[18]=t("hr",{class:"divider"},null,-1)),t("section",Y,[a[15]||(a[15]=t("h2",{class:"section-title node"},"Ejemplo Completo en Node.js y Express",-1)),a[16]||(a[16]=t("p",{class:"section-desc"}," A continuación, se muestra cómo implementar un enrutamiento RESTful básico utilizando Express para el recurso de libros. ",-1)),t("div",Z,[a[14]||(a[14]=t("div",{class:"card-header"},[t("h3",null,"Servidor de Libros (RESTful API)")],-1)),b(O,{language:"javascript",code:`const express = require('express');
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
});`})])]),a[19]||(a[19]=t("hr",{class:"divider"},null,-1)),b(N,{references:[{techId:"nodejs",moduleId:"http",text:"Módulo HTTP de Node.js"},{techId:"nodejs",moduleId:"express",text:"Express Framework"}]})]))}}),oa=L(aa,[["__scopeId","data-v-5755da22"]]);export{oa as default};
