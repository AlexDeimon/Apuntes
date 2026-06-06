<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">API REST</h1>
      <p class="subtitle">Principios, diseño de endpoints, métodos HTTP y arquitectura de servicios RESTful modernos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es una API REST?</h2>
      <p class="section-desc">Una <strong>API REST</strong> (<em>Representational State Transfer</em>) es un estilo de arquitectura de software para sistemas hipermedia distribuidos, como la Web. Permite la comunicación cliente-servidor a través del protocolo HTTP, representando recursos en formatos estructurados (comúnmente JSON).</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Fundamentos</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Recurso:</span> Se refiere a cualquier objeto o entidad que puede ser nombrado, creado, modificado o eliminado. Por ejemplo: usuarios, productos, pedidos, etc.</li>
            <li><span class="def-term">Metodo HTTP:</span> Son los verbos que se utilizan para interactuar con los recursos. Por ejemplo: GET, POST, PUT, DELETE, etc.</li>
            <li><span class="def-term">Representación:</span> Es la forma en que se representa el recurso. Por ejemplo: JSON, XML, HTML, etc.</li>
            <li><span class="def-term">Cliente-Servidor:</span> Separación clara de responsabilidades entre el frontend y el backend.</li>
            <li><span class="def-term">Sin Estado (Stateless):</span> Cada petición del cliente contiene toda la información necesaria para procesarse; el servidor no guarda contexto.</li>
            <li><span class="def-term">Cacheable:</span> Las respuestas deben definirse explícitamente como cacheables o no para mejorar el rendimiento.</li>
            <li><span class="def-term">Interfaz Uniforme:</span> Identificación de recursos mediante URIs, manipulación a través de representaciones (headers/body), y mensajes autodescriptivos.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Principios</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Simplicidad:</span> Utiliza los métodos HTTP estándar para realizar operaciones sobre los recursos, lo que facilita la comprensión y el mantenimiento de la API.</li>
            <li><span class="def-term">Escalabilidad:</span> Permite que el sistema crezca sin comprometer su rendimiento o disponibilidad.</li>
            <li><span class="def-term">Portabilidad:</span> Permite que el sistema funcione en diferentes plataformas y entornos.</li>
            <li><span class="def-term">Visibilidad:</span> El cliente puede identificar facilmente el recurso que desea obtener.</li>
            <li><span class="def-term">Fiabilidad:</span> Al ser una arquitectura basada en estándares, las API REST son fáciles de implementar y mantener, lo que garantiza su fiabilidad y disponibilidad.</li>
            <li><span class="def-term">Cacheable:</span> Las respuestas deben definirse explícitamente como cacheables o no para mejorar el rendimiento.</li>
            <li><span class="def-term">Fácil de mantener:</span> Las API REST son fáciles de mantener y actualizar, lo que garantiza su fiabilidad y disponibilidad.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Métodos HTTP</h2>
      <p class="section-desc">REST mapea las operaciones CRUD sobre recursos usando verbos HTTP estándar. Es vital distinguir entre métodos <strong>seguros</strong> (no modifican recursos) e <strong>idempotentes</strong> (ejecutar la petición múltiples veces tiene el mismo efecto que una sola vez).</p>
      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Método</th>
              <th>Acción CRUD</th>
              <th>¿Es Seguro?</th>
              <th>¿Es Idempotente?</th>
              <th>Código de Éxito Habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="badge-verb get">GET</span></td>
              <td>Leer / Recuperar</td>
              <td class="text-success">Sí</td>
              <td class="text-success">Sí</td>
              <td><code>200 OK</code></td>
            </tr>
            <tr>
              <td><span class="badge-verb post">POST</span></td>
              <td>Crear / Insertar</td>
              <td class="text-danger">No</td>
              <td class="text-danger">No</td>
              <td><code>201 Created</code></td>
            </tr>
            <tr>
              <td><span class="badge-verb put">PUT</span></td>
              <td>Reemplazar (Completo)</td>
              <td class="text-danger">No</td>
              <td class="text-success">Sí</td>
              <td><code>200 OK</code> o <code>204 No Content</code></td>
            </tr>
            <tr>
              <td><span class="badge-verb patch">PATCH</span></td>
              <td>Actualizar (Parcial)</td>
              <td class="text-danger">No</td>
              <td class="text-danger">No (típico)</td>
              <td><code>200 OK</code></td>
            </tr>
            <tr>
              <td><span class="badge-verb delete">DELETE</span></td>
              <td>Eliminar</td>
              <td class="text-danger">No</td>
              <td class="text-success">Sí</td>
              <td><code>200 OK</code> o <code>204 No Content</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Diseño Correcto de Endpoints</h2>
      <p class="section-desc">Los endpoints deben hacer referencia a <strong>sustantivos en plural</strong> que representen la colección del recurso, evitando incluir verbos de acción en la URL.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>🔴 Prácticas Incorrectas (Antipatrones)</h3>
          </div>
          <ul>
            <li><code>GET /obtenerUsuarios</code></li>
            <li><code>POST /crearNuevoUsuario</code></li>
            <li><code>GET /usuario/eliminar/42</code></li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>🟢 Prácticas Correctas (RESTful)</h3>
          </div>
          <ul>
            <li><code>GET /users</code> (Lista de usuarios)</li>
            <li><code>GET /users/42</code> (Detalle del usuario 42)</li>
            <li><code>POST /users</code> (Crea un nuevo usuario)</li>
            <li><code>DELETE /users/42</code> (Elimina el usuario 42)</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Simulador Interactivo de API REST</h2>
      <p class="section-desc">Prueba cómo responde una API REST en tiempo real. Selecciona un método HTTP, define la URL/ID y el cuerpo de la petición para interactuar con una base de datos simulada de libros.</p>
      <div class="simulator-container">
        <div class="sim-client-panel">
          <div class="sim-row">
            <div class="sim-group method-group">
              <label>Método</label>
              <select v-model="simRequest.method" class="sim-select" @change="onMethodChange">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
            <div class="sim-group url-group">
              <label>Endpoint URL</label>
              <div class="url-input-wrapper">
                <span class="url-prefix">/api/books</span>
                <input type="text" v-model="simRequest.idParam" placeholder=" (ID opcional)" class="sim-input-text" :disabled="simRequest.method === 'POST'" />
              </div>
            </div>
          </div>
          <div class="sim-group body-group" v-if="simRequest.method === 'POST' || simRequest.method === 'PUT'">
            <label>Request Body (JSON)</label>
            <textarea v-model="simRequest.body" class="sim-textarea" rows="4"></textarea>
          </div>
          <button class="sim-btn-send" @click="sendSimRequest"> Enviar Petición <span class="send-icon">➔</span></button>
        </div>
        <div class="sim-server-panel" v-if="simResponse.status">
          <div class="sim-response-header">
            <span class="header-label">Response HTTP Status:</span>
            <span :class="['status-code-badge', getStatusClass(simResponse.status)]"> {{ simResponse.status }} {{ simResponse.statusText }} </span>
          </div>
          <div class="sim-response-body">
            <label>Response Body (JSON)</label>
            <pre class="response-json"><code>{{ JSON.stringify(simResponse.data, null, 2) }}</code></pre>
          </div>
        </div>
      </div>
      <div class="store-preview">
        <h4>Base de Datos en Memoria (Libros Actuales)</h4>
        <div class="books-badges">
          <div v-for="book in books" :key="book.id" class="book-badge">
            <span class="book-id">ID: {{ book.id }}</span>
            <span class="book-title">"{{ book.title }}"</span>
            <span class="book-author">por {{ book.author }}</span>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Ejemplo Completo en Node.js y Express</h2>
      <p class="section-desc">
        A continuación, se muestra cómo implementar un enrutamiento RESTful básico utilizando Express para el recurso de libros.
      </p>

      <div class="card recommended">
        <div class="card-header">
          <h3>Servidor de Libros (RESTful API)</h3>
        </div>
        <CodeBlock language="javascript" code="const express = require('express');
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
  console.log(`API REST corriendo en http://localhost:${PORT}`);
});" />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'http', text: 'Módulo HTTP de Node.js' },
      { techId: 'nodejs', moduleId: 'express', text: 'Express Framework' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

const books = ref([
  { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { id: 3, title: 'Don Quijote II', author: 'Miguel de Cervantes' }
])

const simRequest = reactive({
  method: 'GET',
  idParam: '',
  body: ''
})

const simResponse = reactive({
  status: 0,
  statusText: '',
  data: null as unknown
})

const onMethodChange = () => {
  if (simRequest.method === 'POST') {
    simRequest.idParam = ''
    simRequest.body = '{\n  "title": "Nuevo Libro",\n  "author": "Autor Anónimo"\n}'
  } else if (simRequest.method === 'PUT') {
    simRequest.body = '{\n  "title": "Título Modificado",\n  "author": "Autor Modificado"\n}'
  } else {
    simRequest.body = ''
  }
}

const sendSimRequest = () => {
  const method = simRequest.method
  const rawId = simRequest.idParam.trim()
  const parsedId = parseInt(rawId)

  if (method === 'GET') {
    if (rawId === '') {
      simResponse.status = 200
      simResponse.statusText = 'OK'
      simResponse.data = books.value
    } else {
      const book = books.value.find(b => b.id === parsedId)
      if (book) {
        simResponse.status = 200
        simResponse.statusText = 'OK'
        simResponse.data = book
      } else {
        simResponse.status = 404
        simResponse.statusText = 'Not Found'
        simResponse.data = { error: `Libro con ID ${rawId} no encontrado.` }
      }
    }
  }

  else if (method === 'POST') {
    try {
      const parsedBody = JSON.parse(simRequest.body)
      if (!parsedBody.title || !parsedBody.author) {
        simResponse.status = 400
        simResponse.statusText = 'Bad Request'
        simResponse.data = { error: 'Faltan parámetros title o author en el cuerpo.' }
        return
      }

      const newId = books.value.length > 0 ? Math.max(...books.value.map(b => b.id)) + 1 : 1
      const newBook = {
        id: newId,
        title: parsedBody.title,
        author: parsedBody.author
      }
      books.value.push(newBook)

      simResponse.status = 201
      simResponse.statusText = 'Created'
      simResponse.data = newBook
    } catch {
      simResponse.status = 400
      simResponse.statusText = 'Bad Request'
      simResponse.data = { error: 'Formato JSON inválido.' }
    }
  }

  else if (method === 'PUT') {
    if (rawId === '') {
      simResponse.status = 400
      simResponse.statusText = 'Bad Request'
      simResponse.data = { error: 'Debes ingresar un ID en la URL para actualizar.' }
      return
    }

    const book = books.value.find(b => b.id === parsedId)
    if (!book) {
      simResponse.status = 404
      simResponse.statusText = 'Not Found'
      simResponse.data = { error: `Libro con ID ${rawId} no encontrado.` }
      return
    }

    try {
      const parsedBody = JSON.parse(simRequest.body)
      if (!parsedBody.title || !parsedBody.author) {
        simResponse.status = 400
        simResponse.statusText = 'Bad Request'
        simResponse.data = { error: 'Faltan parámetros title o author en el cuerpo.' }
        return
      }

      book.title = parsedBody.title
      book.author = parsedBody.author

      simResponse.status = 200
      simResponse.statusText = 'OK'
      simResponse.data = book
    } catch {
      simResponse.status = 400
      simResponse.statusText = 'Bad Request'
      simResponse.data = { error: 'Formato JSON inválido.' }
    }
  }

  else if (method === 'DELETE') {
    if (rawId === '') {
      simResponse.status = 400
      simResponse.statusText = 'Bad Request'
      simResponse.data = { error: 'Debes ingresar un ID en la URL para eliminar.' }
      return
    }

    const idx = books.value.findIndex(b => b.id === parsedId)
    if (idx === -1) {
      simResponse.status = 404
      simResponse.statusText = 'Not Found'
      simResponse.data = { error: `Libro con ID ${rawId} no encontrado.` }
    } else {
      books.value.splice(idx, 1)
      simResponse.status = 200
      simResponse.statusText = 'OK'
      simResponse.data = { success: true, message: `Libro con ID ${rawId} eliminado con éxito.` }
    }
  }
}

const getStatusClass = (code: number) => {
  if (code >= 200 && code < 300) return 'status-2xx'
  if (code >= 400 && code < 500) return 'status-4xx'
  return ''
}
</script>

<style scoped>
.badge-verb {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  min-width: 60px;
  text-align: center;
}

.badge-verb.get { background-color: #61afef; }
.badge-verb.post { background-color: #98c379; }
.badge-verb.put { background-color: #e5c07b; }
.badge-verb.patch { background-color: #abb2bf; }
.badge-verb.delete { background-color: #e06c75; }

.text-success { color: #98c379; }
.text-danger { color: #e06c75; }

.simulator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .simulator-container {
    grid-template-columns: 1fr;
  }
}

.sim-client-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sim-row {
  display: flex;
  gap: 1rem;
}

.sim-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sim-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.method-group {
  flex: 0 0 100px;
}

.url-group {
  flex: 1;
}

.sim-select, .sim-input-text, .sim-textarea {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.sim-select:focus, .sim-input-text:focus, .sim-textarea:focus {
  border-color: #4b8df8;
}

.url-input-wrapper {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  overflow: hidden;
}

.url-prefix {
  padding: 0 0.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  background-color: rgba(255, 255, 255, 0.02);
  border-right: 1px solid var(--border-color);
  user-select: none;
}

.sim-input-text {
  border: none;
  background: transparent;
  flex: 1;
  padding: 0.5rem;
}

.sim-input-text:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.sim-textarea {
  font-family: monospace;
  resize: vertical;
}

.sim-btn-send {
  align-self: flex-start;
  background-color: #4b8df8;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s, transform 0.1s;
}

.sim-btn-send:hover {
  background-color: #357ae8;
}

.sim-btn-send:active {
  transform: scale(0.98);
}

.sim-server-panel {
  border-left: 1px solid var(--border-color);
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 768px) {
  .sim-server-panel {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--border-color);
    padding-top: 1.5rem;
  }
}

.sim-response-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.header-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.status-code-badge {
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 700;
}

.status-2xx {
  background-color: rgba(152, 195, 121, 0.15);
  color: #98c379;
}

.status-4xx {
  background-color: rgba(224, 108, 117, 0.15);
  color: #e06c75;
}

.response-json {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.85rem;
  max-height: 250px;
}

.store-preview {
  margin-top: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.02);
}

.store-preview h4 {
  margin: 0 0 0.8rem 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.books-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.book-badge {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.book-id {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 700;
  color: #4b8df8;
}

.book-title {
  color: var(--text-primary);
  font-weight: 500;
}

.book-author {
  color: var(--text-secondary);
}
</style>
