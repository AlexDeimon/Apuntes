<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">WebSocket</h1>
      <p class="subtitle">Protocolo de comunicacion bidireccional y en tiempo real sobre una unica conexion persistente TCP — base de chats, notificaciones y apps colaborativas.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">Que es WebSocket?</h2>
      <p class="section-desc"><strong>WebSocket</strong> es un protocolo de comunicacion que proporciona un canal <strong>full-duplex</strong> sobre una unica conexion TCP persistente. A diferencia de HTTP (request-response), WebSocket permite que tanto el cliente como el servidor envien datos en cualquier momento sin esperar una solicitud.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>HTTP vs WebSocket</h3></div>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Caracteristica</th>
                  <th>HTTP</th>
                  <th>WebSocket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Comunicacion</td>
                  <td class="text-danger">Unidireccional</td>
                  <td class="text-success">Bidireccional</td>
                </tr>
                <tr>
                  <td>Conexion</td>
                  <td class="text-danger">Nueva por cada request</td>
                  <td class="text-success">Persistente</td>
                </tr>
                <tr>
                  <td>Overhead</td>
                  <td class="text-danger">Alto (headers en cada msg)</td>
                  <td class="text-success">Bajo (frame minimo)</td>
                </tr>
                <tr>
                  <td>Push del servidor</td>
                  <td class="text-danger">No nativo</td>
                  <td class="text-success">Nativo</td>
                </tr>
                <tr>
                  <td>Latencia</td>
                  <td class="text-danger">Alta (nueva TCP por req)</td>
                  <td class="text-success">Baja (conexion abierta)</td>
                </tr>
                <tr>
                  <td>Protocolo</td>
                  <td><code>http://</code> / <code>https://</code></td>
                  <td><code>ws://</code> / <code>wss://</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>El Handshake: Como se establece la conexion</h3></div>
          <p>WebSocket comienza como una peticion HTTP normal y luego se "actualiza" al protocolo WebSocket. Este proceso se llama <strong>handshake</strong>.</p>
          <div class="handshake-flow">
            <div class="hs-step client-step">
              <div class="hs-icon">💻</div>
              <div class="hs-content">
                <div class="hs-title">1. Cliente envia HTTP Upgrade</div>
                <div class="hs-code">GET /chat HTTP/1.1<br>Upgrade: websocket<br>Connection: Upgrade<br>Sec-WebSocket-Key: dGhl...</div>
              </div>
            </div>
            <div class="hs-arrow">&#8595;</div>
            <div class="hs-step server-step">
              <div class="hs-icon">💻</div>
              <div class="hs-content">
                <div class="hs-title">2. Servidor responde 101</div>
                <div class="hs-code">HTTP/1.1 101 Switching Protocols<br>Upgrade: websocket<br>Connection: Upgrade</div>
              </div>
            </div>
            <div class="hs-arrow">&#8595;</div>
            <div class="hs-step success-step">
              <div class="hs-icon">🔗</div>
              <div class="hs-content">
                <div class="hs-title">3. Canal WebSocket abierto</div>
                <div class="hs-desc">Comunicacion bidireccional activa sobre TCP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Libreria ws en Node.js</h2>
      <p class="section-desc"><code>ws</code> es la libreria mas popular para WebSocket en Node.js. Es rapida, ligera y sin dependencias externas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Instalacion y Servidor Basico</h3></div>
          <CodeBlock language="bash" code="npm install ws
npm install --save-dev @types/ws" />
          <CodeBlock language="javascript" code="const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, req) => {
  console.log('Cliente conectado:', req.socket.remoteAddress);

  ws.on('message', (data) => {
    const mensaje = data.toString();
    ws.send('Echo: ' + mensaje);
  });

  ws.on('close', (code, reason) => {
    console.log('Desconectado:', code, reason.toString());
  });

  ws.on('error', (err) => console.error('Error:', err.message));

  ws.send(JSON.stringify({ tipo: 'bienvenida', mensaje: 'Conectado!' }));
});" />
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Broadcast: Enviar a Todos los Clientes</h3></div>
          <CodeBlock language="javascript" code="wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const mensaje = data.toString();

    // Broadcast a TODOS los clientes
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(mensaje);
      }
    });

    // Broadcast a todos MENOS al emisor
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(mensaje);
      }
    });
  });
});

// Cuantos clientes conectados
console.log('Clientes:', wss.clients.size);" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">API WebSocket en el Navegador</h2>
      <p class="section-desc">El navegador tiene soporte nativo para WebSocket. No se necesita ninguna libreria adicional en el cliente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Eventos del Cliente</h3></div>
          <ul class="def-list">
            <li><span class="def-term">open:</span> La conexion se establecio exitosamente tras el handshake.</li>
            <li><span class="def-term">message:</span> Se recibio un dato del servidor. Llega en <code>event.data</code>.</li>
            <li><span class="def-term">close:</span> La conexion se cerro. Incluye <code>code</code> y <code>reason</code>.</li>
            <li><span class="def-term">error:</span> Error de conexion. Siempre precede a un evento <code>close</code>.</li>
          </ul>
          <CodeBlock language="javascript" code="const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', () => {
  ws.send('Hola servidor!');
});

ws.addEventListener('message', (event) => {
  const datos = JSON.parse(event.data);
  console.log(datos.tipo, datos.mensaje);
});

ws.addEventListener('close', (event) => {
  console.log('Desconectado. Code:', event.code, 'wasClean:', event.wasClean);
});

ws.addEventListener('error', () => {
  console.error('Error en WebSocket');
});" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Metodos y readyState</h3></div>
          <CodeBlock language="javascript" code="// Enviar datos
ws.send('Hola!');
ws.send(JSON.stringify({ accion: 'unirse', sala: 'general' }));
ws.send(arrayBuffer); // Para datos binarios

// Cerrar la conexion
ws.close();
ws.close(1000, 'Cierre normal');

// readyState
ws.readyState === WebSocket.CONNECTING  // 0
ws.readyState === WebSocket.OPEN        // 1
ws.readyState === WebSocket.CLOSING     // 2
ws.readyState === WebSocket.CLOSED      // 3

// Verificar antes de enviar
if (ws.readyState === WebSocket.OPEN) {
  ws.send(JSON.stringify(datos));
}" />
          <div class="ready-state-grid">
            <div class="rs-item"><span class="rs-num">0</span><span class="rs-name">CONNECTING</span><span class="rs-desc">Conectando...</span></div>
            <div class="rs-item rs-open"><span class="rs-num">1</span><span class="rs-name">OPEN</span><span class="rs-desc">Conectado y listo</span></div>
            <div class="rs-item rs-closing"><span class="rs-num">2</span><span class="rs-name">CLOSING</span><span class="rs-desc">Cerrando...</span></div>
            <div class="rs-item rs-closed"><span class="rs-num">3</span><span class="rs-name">CLOSED</span><span class="rs-desc">Cerrado</span></div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Integracion con Express</h2>
      <p class="section-desc">Es muy comun combinar Express con un servidor WebSocket sobre el mismo puerto, compartiendo el servidor HTTP subyacente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Express + WebSocket en el mismo puerto</h3></div>
          <CodeBlock language="javascript" code="const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.get('/api/status', (req, res) => {
  res.json({ clientes: wss.clients.size });
});

wss.on('connection', (ws, req) => {
  const path = req.url; // '/chat', '/notificaciones'

  ws.on('message', (data) => {
    const msg = JSON.parse(data.toString());
    // logica...
  });
});

// Un solo puerto para REST y WebSocket
server.listen(3000, () => {
  console.log('HTTP: http://localhost:3000');
  console.log('WS:   ws://localhost:3000');
});" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Router de Mensajes por Tipo</h3></div>
          <p>Patron recomendado: usar un campo <code>tipo</code> en el payload JSON para despachar mensajes.</p>
          <CodeBlock language="javascript" code="wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    let msg;
    try {
      msg = JSON.parse(data.toString());
    } catch {
      return ws.send(JSON.stringify({ error: 'JSON invalido' }));
    }

    switch (msg.tipo) {
      case 'chat':
        broadcast({ tipo: 'chat', texto: msg.texto, usuario: msg.usuario });
        break;

      case 'unirse-sala':
        ws.sala = msg.sala;
        ws.send(JSON.stringify({ tipo: 'bienvenida', sala: msg.sala }));
        break;

      case 'ping':
        ws.send(JSON.stringify({ tipo: 'pong' }));
        break;

      default:
        ws.send(JSON.stringify({ error: 'Tipo desconocido' }));
    }
  });
});" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Reconexion y Heartbeat</h2>
      <p class="section-desc">En produccion las conexiones pueden caerse. Es esencial implementar reconexion en el cliente y un heartbeat (ping/pong) en el servidor para detectar conexiones muertas.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Reconexion con Backoff Exponencial</h3></div>
          <CodeBlock language="javascript" code="class WSConReconexion {
  constructor(url) {
    this.url = url;
    this.intentos = 0;
    this.maxIntentos = 10;
    this.conectar();
  }

  conectar() {
    this.ws = new WebSocket(this.url);

    this.ws.addEventListener('open', () => {
      this.intentos = 0;
      console.log('Conectado!');
    });

    this.ws.addEventListener('close', (event) => {
      if (!event.wasClean && this.intentos < this.maxIntentos) {
        const delay = Math.min(1000 * 2 ** this.intentos, 30000);
        console.log('Reconectando en ' + delay + 'ms...');
        setTimeout(() => { this.intentos++; this.conectar(); }, delay);
      }
    });
  }

  send(datos) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(datos));
    }
  }
}" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Heartbeat: Detectar Conexiones Muertas</h3></div>
          <CodeBlock language="javascript" code="const wss = new WebSocketServer({ port: 8080 });

function heartbeat() { this.isAlive = true; }

wss.on('connection', (ws) => {
  ws.isAlive = true;
  ws.on('pong', heartbeat);
  ws.on('message', (data) => { /* ... */ });
});

// Verificar cada 30 segundos
const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive) {
      console.log('Terminando conexion muerta');
      return ws.terminate();
    }
    ws.isAlive = false;
    ws.ping();
  });
}, 30_000);

wss.on('close', () => clearInterval(interval));" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Seguridad en WebSocket</h2>
      <p class="section-desc">WebSocket hereda el modelo de seguridad de HTTP. En produccion siempre usar <code>wss://</code> (WebSocket Secure).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Buenas Practicas</h3></div>
          <ul class="def-list">
            <li><span class="def-term">wss:// siempre en produccion:</span> Cifra el trafico con TLS. Previene ataques man-in-the-middle.</li>
            <li><span class="def-term">Autenticacion en el handshake:</span> Valida el token JWT antes de aceptar el upgrade.</li>
            <li><span class="def-term">Verificar el Origin:</span> Rechazar conexiones de origenes no autorizados.</li>
            <li><span class="def-term">Limitar tamano de mensajes:</span> Configurar <code>maxPayload</code> para prevenir DoS.</li>
            <li><span class="def-term">Rate limiting:</span> Limitar mensajes por cliente por segundo.</li>
            <li><span class="def-term">Validar mensajes:</span> Nunca confiar en datos del cliente. Usar Zod o similar.</li>
          </ul>
          <CodeBlock language="javascript" code="const wss = new WebSocketServer({
  port: 8080,
  maxPayload: 1024 * 64, // Max 64 KB por mensaje

  verifyClient: ({ req }, cb) => {
    const origin = req.headers.origin;
    const allowed = ['https://mi-app.com'];

    if (allowed.includes(origin)) {
      cb(true);
    } else {
      cb(false, 403, 'Forbidden');
    }
  },
});" />
        </div>
        <div class="card info">
          <div class="card-header"><h3>Autenticacion con JWT</h3></div>
          <CodeBlock language="javascript" code="const jwt = require('jsonwebtoken');

wss.on('connection', (ws, req) => {
  // Token en la URL: ws://api.com/ws?token=eyJ...
  const url = new URL(req.url, 'http://localhost');
  const token = url.searchParams.get('token');

  if (!token) {
    ws.close(4001, 'Token requerido');
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    ws.userId = payload.sub;
    ws.send(JSON.stringify({ tipo: 'auth-ok', userId: ws.userId }));
  } catch (err) {
    ws.close(4001, 'Token invalido');
  }
});" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">ws vs Socket.IO</h2>
      <p class="section-desc"><code>ws</code> es WebSocket puro. <code>Socket.IO</code> agrega reconexion automatica, rooms, namespaces y fallback a HTTP polling.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header"><h3>Cuando usar cada uno</h3></div>
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Caracteristica</th>
                  <th>ws</th>
                  <th>Socket.IO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Peso</td>
                  <td class="text-success">Muy ligero</td>
                  <td class="text-danger">Mayor bundle size</td>
                </tr>
                <tr>
                  <td>Reconexion automatica</td>
                  <td class="text-danger">Manual</td>
                  <td class="text-success">Incluida</td>
                </tr>
                <tr>
                  <td>Rooms / Namespaces</td>
                  <td class="text-danger">Manual</td>
                  <td class="text-success">Incluidos</td>
                </tr>
                <tr>
                  <td>Fallback HTTP polling</td>
                  <td class="text-danger">No</td>
                  <td class="text-success">Si</td>
                </tr>
                <tr>
                  <td>Compatibilidad cliente</td>
                  <td>Solo WebSocket nativo</td>
                  <td>WS + HTTP polling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="note-text">Usar <strong>ws</strong> para control total y bajo overhead. Usar <strong>Socket.IO</strong> cuando se necesitan rooms, reconexion automatica o compatibilidad con redes restrictivas.</p>
        </div>
        <div class="card recommended">
          <div class="card-header"><h3>Ejemplo con Socket.IO</h3></div>
          <CodeBlock language="bash" code="npm install socket.io" />
          <CodeBlock language="javascript" code="// SERVIDOR
const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:5173' },
});

io.on('connection', (socket) => {
  socket.on('unirse-sala', (sala) => {
    socket.join(sala);
    io.to(sala).emit('notificacion', socket.id + ' entro');
  });

  socket.on('mensaje', (data) => {
    io.to(data.sala).emit('mensaje', { ...data, id: socket.id });
  });
});" />
          <CodeBlock language="javascript" code="// CLIENTE
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  socket.emit('unirse-sala', 'general');
});

socket.on('mensaje', (data) => console.log(data));
socket.emit('mensaje', { sala: 'general', texto: 'Hola!' });" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Simulacion: Chat en Tiempo Real</h2>
      <p class="section-desc">Simulacion visual del flujo de mensajes entre cliente y servidor WebSocket.</p>
      <div class="chat-demo">
        <div class="chat-header">
          <div class="chat-status-wrap">
            <span class="status-dot" :class="{ 'status-connected': chatConnected }"></span>
            <span class="chat-status-text">{{ chatConnected ? 'ws://localhost:8080 — Conectado' : 'Desconectado' }}</span>
          </div>
          <button class="connect-btn" @click="toggleConnection" :class="chatConnected ? 'btn-disconnect' : 'btn-connect'">{{ chatConnected ? 'Cerrar Conexion' : 'Conectar' }}</button>
        </div>
        <div class="chat-panels">
          <div class="chat-panel client-panel">
            <div class="panel-header">&#128187; Cliente (Navegador)</div>
            <div class="chat-log" ref="clientLog">
              <div v-for="msg in clientMessages" :key="msg.id" :class="['chat-msg', msg.type]">
                <span class="msg-time">{{ msg.time }}</span>
                <span class="msg-text">{{ msg.text }}</span>
              </div>
              <div v-if="!chatConnected && clientMessages.length === 0" class="chat-empty">Presiona "Conectar" para iniciar</div>
            </div>
            <div class="chat-input-row" v-if="chatConnected">
              <input v-model="chatInput" @keyup.enter="sendMessage" class="chat-input" placeholder="Escribe un mensaje..." />
              <button @click="sendMessage" class="send-btn">Enviar</button>
            </div>
          </div>
          <div class="chat-panel server-panel">
            <div class="panel-header">&#128187; Servidor (Node.js / ws)</div>
            <div class="chat-log" ref="serverLog">
              <div v-for="msg in serverMessages" :key="msg.id" :class="['chat-msg', msg.type]">
                <span class="msg-time">{{ msg.time }}</span>
                <span class="msg-text">{{ msg.text }}</span>
              </div>
              <div v-if="!chatConnected && serverMessages.length === 0" class="chat-empty">Esperando conexion...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'express', text: 'Express — Servidor HTTP' },
      { techId: 'nodejs', moduleId: 'cors', text: 'CORS — Cross-Origin' },
      { techId: 'nodejs', moduleId: 'apirest', text: 'API REST' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'

interface ChatMessage {
  id: number
  time: string
  text: string
  type: 'msg-info' | 'msg-sent' | 'msg-received' | 'msg-error'
}

const chatConnected = ref(false)
const chatInput = ref('')
const clientMessages = ref<ChatMessage[]>([])
const serverMessages = ref<ChatMessage[]>([])
const clientLog = ref<HTMLElement | null>(null)
const serverLog = ref<HTMLElement | null>(null)
let msgCounter = 0

const now = () => new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })

function addClientMsg(text: string, type: ChatMessage['type']) {
  clientMessages.value.push({ id: ++msgCounter, time: now(), text, type })
  nextTick(() => { if (clientLog.value) clientLog.value.scrollTop = clientLog.value.scrollHeight })
}

function addServerMsg(text: string, type: ChatMessage['type']) {
  serverMessages.value.push({ id: ++msgCounter, time: now(), text, type })
  nextTick(() => { if (serverLog.value) serverLog.value.scrollTop = serverLog.value.scrollHeight })
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function toggleConnection() {
  if (chatConnected.value) {
    addClientMsg('[close] Conexion cerrada por el cliente (code: 1000)', 'msg-error')
    await delay(200)
    addServerMsg('[close] Cliente desconectado (code: 1000, wasClean: true)', 'msg-error')
    chatConnected.value = false
    return
  }

  addClientMsg('[open] Enviando HTTP Upgrade request...', 'msg-info')
  await delay(300)
  addServerMsg('[connection] HTTP 101 Switching Protocols', 'msg-info')
  await delay(200)
  addServerMsg('[connection] Nueva conexion: 127.0.0.1', 'msg-info')
  await delay(150)

  const bienvenida = JSON.stringify({ tipo: 'bienvenida', mensaje: 'Conectado exitosamente!', clientes: 1 })
  addServerMsg('[send] ' + bienvenida, 'msg-sent')
  await delay(200)
  addClientMsg('[message] ' + bienvenida, 'msg-received')
  chatConnected.value = true
}

async function sendMessage() {
  const texto = chatInput.value.trim()
  if (!texto || !chatConnected.value) return
  chatInput.value = ''

  const msgCliente = JSON.stringify({ tipo: 'chat', texto, usuario: 'Usuario1' })
  addClientMsg('[send] ' + msgCliente, 'msg-sent')
  await delay(100)
  addServerMsg('[message] ' + msgCliente, 'msg-received')
  await delay(150)

  const broadcast = JSON.stringify({ tipo: 'chat', texto, usuario: 'Usuario1', timestamp: Date.now() })
  addServerMsg('[broadcast] ' + broadcast, 'msg-sent')
  await delay(100)
  addClientMsg('[message] ' + broadcast, 'msg-received')
}
</script>
<style scoped>
.handshake-flow {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.hs-step {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid;
}

.client-step  {
  background: rgba(59,130,246,0.08);
  border-color: rgba(59,130,246,0.2);
}

.server-step  {
  background: rgba(16,185,129,0.08);
  border-color: rgba(16,185,129,0.2);
}

.success-step {
  background: rgba(99,102,241,0.08);
  border-color: rgba(99,102,241,0.2);
}

.hs-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.hs-content {
  flex: 1;
  min-width: 0;
}

.hs-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
}

.hs-code {
  font-family: monospace;
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.6;
  background: rgba(0,0,0,0.2);
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
}

.hs-desc {
  font-size: 0.83rem;
  color: var(--text-secondary);
}

.hs-arrow {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  padding-left: 1rem;
}

.ready-state-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
}

.rs-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.6rem 0.8rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 7px;
}

.rs-num  {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-secondary);
  font-family: monospace;
}

.rs-name {
  font-size: 0.8rem;
  font-weight: 600;
  font-family: monospace;
  color: var(--text-secondary);
}

.rs-desc {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.rs-open    {
  border-color: rgba(52,211,153,0.3);
}

.rs-open .rs-num,
.rs-open .rs-name {
  color: #34d399;
}

.rs-closing {
  border-color: rgba(251,191,36,0.3);
}

.rs-closing .rs-num,
.rs-closing .rs-name {
  color: #fbbf24;
}

.rs-closed  {
  border-color: rgba(248,113,113,0.3);
}

.rs-closed .rs-num,
.rs-closed .rs-name {
  color: #f87171;
}

.note-text {
  font-size: 0.83rem;
  color: var(--text-secondary);
  margin-top: 0.75rem;
  padding: 0.6rem 0.8rem;
  background: rgba(99,102,241,0.06);
  border-left: 3px solid rgba(99,102,241,0.3);
  border-radius: 0 6px 6px 0;
}

.chat-demo {
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.01);
  margin-top: 1.5rem;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.2rem;
  background: #181825;
  border-bottom: 1px solid var(--border-color);
}

.chat-status-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f87171;
  transition: background-color 0.3s;
}

.status-connected {
  background: #34d399;
  box-shadow: 0 0 6px rgba(52,211,153,0.5);
}

.chat-status-text {
  font-size: 0.8rem;
  font-family: monospace;
  color: var(--text-secondary);
}

.connect-btn {
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  border: none;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-connect {
  background: rgba(52,211,153,0.15);
  border: 1px solid rgba(52,211,153,0.35);
  color: #34d399;
}

.btn-connect:hover {
  background: rgba(52,211,153,0.25);
}

.btn-disconnect {
  background: rgba(248,113,113,0.15);
  border: 1px solid rgba(248,113,113,0.35);
  color: #f87171;
}

.btn-disconnect:hover {
  background: rgba(248,113,113,0.25);
}

.chat-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 700px) {
  .chat-panels {
    grid-template-columns: 1fr;
  }
}

.chat-panel {
  border-right: 1px solid var(--border-color);
}

.chat-panel:last-child {
  border-right: none;
}

.panel-header {
  padding: 0.6rem 1rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: rgba(0,0,0,0.1);
  border-bottom: 1px solid var(--border-color);
}

.chat-log {
  height: 220px;
  overflow-y: auto;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.chat-empty {
  color: var(--text-secondary);
  font-size: 0.8rem;
  text-align: center;
  margin-top: 2rem;
}

.chat-msg {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  font-size: 0.77rem;
}

.msg-time {
  font-size: 0.68rem;
  color: var(--text-secondary);
  font-family: monospace;
}

.msg-text {
  font-family: monospace;
  word-break: break-all;
  line-height: 1.4;
}

.msg-info {
  background: rgba(99,102,241,0.08);
  border-left: 2px solid rgba(99,102,241,0.3);
}

.msg-info .msg-text {
  color: #a5b4fc;
}

.msg-sent {
  background: rgba(52,211,153,0.07);
  border-left: 2px solid rgba(52,211,153,0.3);
}

.msg-sent .msg-text {
  color: #6ee7b7;
}

.msg-received {
  background: rgba(59,130,246,0.07);
  border-left: 2px solid rgba(59,130,246,0.3);
}

.msg-received .msg-text {
  color: #93c5fd;
}

.msg-error {
  background: rgba(248,113,113,0.07);
  border-left: 2px solid rgba(248,113,113,0.3);
}

.msg-error .msg-text {
  color: #fca5a5;
}

.chat-input-row {
  display: flex;
  gap: 0.5rem;
  padding: 0.65rem 0.75rem;
  border-top: 1px solid var(--border-color);
}

.chat-input {
  flex: 1;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background: rgba(255,255,255,0.05);
  color: var(--text-primary);
  font-size: 0.85rem;
  outline: none;
}

.chat-input:focus {
  border-color: rgba(99,102,241,0.5);
}

.send-btn {
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  border: 1px solid rgba(99,102,241,0.35);
  background: rgba(99,102,241,0.15);
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.send-btn:hover {
  background: rgba(99,102,241,0.25);
}
</style>
