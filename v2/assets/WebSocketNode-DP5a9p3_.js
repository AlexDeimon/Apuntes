import{d as P,r as v,c as i,a as m,b as a,e as s,f as l,i as S,t as p,l as x,F as E,k as N,h as O,j as I,C as L,p as j,o as r,_ as q}from"./index-B57m_bmv.js";import{C as n}from"./CodeBlock-CASvhCfR.js";import{R as H}from"./ReferenceSection-toiUOXWo.js";const J={class:"module-content"},R={class:"topic-section"},M={class:"cards-grid"},_={class:"card info"},U={class:"card recommended"},B={class:"topic-section"},D={class:"cards-grid"},A={class:"card info"},V={class:"card info"},z={class:"topic-section"},G={class:"cards-grid"},F={class:"card info"},K={class:"card info"},Q={class:"topic-section"},X={class:"cards-grid"},Z={class:"card info"},Y={class:"card info"},$={class:"topic-section"},aa={class:"cards-grid"},ea={class:"card info"},sa={class:"card info"},ta={class:"topic-section"},na={class:"cards-grid"},da={class:"card recommended"},oa={class:"topic-section"},ca={class:"chat-demo"},ia={class:"chat-header"},ra={class:"chat-status-wrap"},la={class:"chat-status-text"},fa={class:"chat-panels"},va={class:"chat-panel client-panel"},pa={class:"msg-time"},ua={class:"msg-text"},ma={key:0,class:"chat-empty"},ga={key:0,class:"chat-input-row"},ha={class:"chat-panel server-panel"},wa={class:"msg-time"},Sa={class:"msg-text"},ba={key:0,class:"chat-empty"},ka=P({__name:"WebSocketNode",setup(xa){const o=v(!1),g=v(""),b=v([]),k=v([]),h=v(null),w=v(null);let y=0;const C=()=>new Date().toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});function u(d,e){b.value.push({id:++y,time:C(),text:d,type:e}),j(()=>{h.value&&(h.value.scrollTop=h.value.scrollHeight)})}function f(d,e){k.value.push({id:++y,time:C(),text:d,type:e}),j(()=>{w.value&&(w.value.scrollTop=w.value.scrollHeight)})}const c=d=>new Promise(e=>setTimeout(e,d));async function W(){if(o.value){u("[close] Conexion cerrada por el cliente (code: 1000)","msg-error"),await c(200),f("[close] Cliente desconectado (code: 1000, wasClean: true)","msg-error"),o.value=!1;return}u("[open] Enviando HTTP Upgrade request...","msg-info"),await c(300),f("[connection] HTTP 101 Switching Protocols","msg-info"),await c(200),f("[connection] Nueva conexion: 127.0.0.1","msg-info"),await c(150);const d=JSON.stringify({tipo:"bienvenida",mensaje:"Conectado exitosamente!",clientes:1});f("[send] "+d,"msg-sent"),await c(200),u("[message] "+d,"msg-received"),o.value=!0}async function T(){const d=g.value.trim();if(!d||!o.value)return;g.value="";const e=JSON.stringify({tipo:"chat",texto:d,usuario:"Usuario1"});u("[send] "+e,"msg-sent"),await c(100),f("[message] "+e,"msg-received"),await c(150);const t=JSON.stringify({tipo:"chat",texto:d,usuario:"Usuario1",timestamp:Date.now()});f("[broadcast] "+t,"msg-sent"),await c(100),u("[message] "+t,"msg-received")}return(d,e)=>(r(),i("div",J,[e[31]||(e[31]=m('<div class="header-section" data-v-9af2df2c><h1 class="main-title node" data-v-9af2df2c>WebSocket</h1><p class="subtitle" data-v-9af2df2c>Protocolo de comunicacion bidireccional y en tiempo real sobre una unica conexion persistente TCP — base de chats, notificaciones y apps colaborativas.</p></div><section class="topic-section" data-v-9af2df2c><h2 class="section-title node" data-v-9af2df2c>Que es WebSocket?</h2><p class="section-desc" data-v-9af2df2c><strong data-v-9af2df2c>WebSocket</strong> es un protocolo de comunicacion que proporciona un canal <strong data-v-9af2df2c>full-duplex</strong> sobre una unica conexion TCP persistente. A diferencia de HTTP (request-response), WebSocket permite que tanto el cliente como el servidor envien datos en cualquier momento sin esperar una solicitud.</p><div class="cards-grid" data-v-9af2df2c><div class="card info" data-v-9af2df2c><div class="card-header" data-v-9af2df2c><h3 data-v-9af2df2c>HTTP vs WebSocket</h3></div><div class="table-responsive" data-v-9af2df2c><table class="custom-table" data-v-9af2df2c><thead data-v-9af2df2c><tr data-v-9af2df2c><th data-v-9af2df2c>Caracteristica</th><th data-v-9af2df2c>HTTP</th><th data-v-9af2df2c>WebSocket</th></tr></thead><tbody data-v-9af2df2c><tr data-v-9af2df2c><td data-v-9af2df2c>Comunicacion</td><td class="text-danger" data-v-9af2df2c>Unidireccional</td><td class="text-success" data-v-9af2df2c>Bidireccional</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Conexion</td><td class="text-danger" data-v-9af2df2c>Nueva por cada request</td><td class="text-success" data-v-9af2df2c>Persistente</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Overhead</td><td class="text-danger" data-v-9af2df2c>Alto (headers en cada msg)</td><td class="text-success" data-v-9af2df2c>Bajo (frame minimo)</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Push del servidor</td><td class="text-danger" data-v-9af2df2c>No nativo</td><td class="text-success" data-v-9af2df2c>Nativo</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Latencia</td><td class="text-danger" data-v-9af2df2c>Alta (nueva TCP por req)</td><td class="text-success" data-v-9af2df2c>Baja (conexion abierta)</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Protocolo</td><td data-v-9af2df2c><code data-v-9af2df2c>http://</code> / <code data-v-9af2df2c>https://</code></td><td data-v-9af2df2c><code data-v-9af2df2c>ws://</code> / <code data-v-9af2df2c>wss://</code></td></tr></tbody></table></div></div><div class="card recommended" data-v-9af2df2c><div class="card-header" data-v-9af2df2c><h3 data-v-9af2df2c>El Handshake: Como se establece la conexion</h3></div><p data-v-9af2df2c>WebSocket comienza como una peticion HTTP normal y luego se &quot;actualiza&quot; al protocolo WebSocket. Este proceso se llama <strong data-v-9af2df2c>handshake</strong>.</p><div class="handshake-flow" data-v-9af2df2c><div class="hs-step client-step" data-v-9af2df2c><div class="hs-icon" data-v-9af2df2c>💻</div><div class="hs-content" data-v-9af2df2c><div class="hs-title" data-v-9af2df2c>1. Cliente envia HTTP Upgrade</div><div class="hs-code" data-v-9af2df2c>GET /chat HTTP/1.1<br data-v-9af2df2c>Upgrade: websocket<br data-v-9af2df2c>Connection: Upgrade<br data-v-9af2df2c>Sec-WebSocket-Key: dGhl...</div></div></div><div class="hs-arrow" data-v-9af2df2c>↓</div><div class="hs-step server-step" data-v-9af2df2c><div class="hs-icon" data-v-9af2df2c>💻</div><div class="hs-content" data-v-9af2df2c><div class="hs-title" data-v-9af2df2c>2. Servidor responde 101</div><div class="hs-code" data-v-9af2df2c>HTTP/1.1 101 Switching Protocols<br data-v-9af2df2c>Upgrade: websocket<br data-v-9af2df2c>Connection: Upgrade</div></div></div><div class="hs-arrow" data-v-9af2df2c>↓</div><div class="hs-step success-step" data-v-9af2df2c><div class="hs-icon" data-v-9af2df2c>🔗</div><div class="hs-content" data-v-9af2df2c><div class="hs-title" data-v-9af2df2c>3. Canal WebSocket abierto</div><div class="hs-desc" data-v-9af2df2c>Comunicacion bidireccional activa sobre TCP</div></div></div></div></div></div></section><hr class="divider" data-v-9af2df2c>',3)),a("section",R,[e[3]||(e[3]=a("h2",{class:"section-title node"},"Libreria ws en Node.js",-1)),e[4]||(e[4]=a("p",{class:"section-desc"},[a("code",null,"ws"),l(" es la libreria mas popular para WebSocket en Node.js. Es rapida, ligera y sin dependencias externas.")],-1)),a("div",M,[a("div",_,[e[1]||(e[1]=a("div",{class:"card-header"},[a("h3",null,"Instalacion y Servidor Basico")],-1)),s(n,{language:"bash",code:`npm install ws
npm install --save-dev @types/ws`}),s(n,{language:"javascript",code:`const { WebSocketServer } = require('ws');
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
});`})]),a("div",U,[e[2]||(e[2]=a("div",{class:"card-header"},[a("h3",null,"Broadcast: Enviar a Todos los Clientes")],-1)),s(n,{language:"javascript",code:`wss.on('connection', (ws) => {
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
console.log('Clientes:', wss.clients.size);`})])])]),e[32]||(e[32]=a("hr",{class:"divider"},null,-1)),a("section",B,[e[8]||(e[8]=a("h2",{class:"section-title node"},"API WebSocket en el Navegador",-1)),e[9]||(e[9]=a("p",{class:"section-desc"},"El navegador tiene soporte nativo para WebSocket. No se necesita ninguna libreria adicional en el cliente.",-1)),a("div",D,[a("div",A,[e[5]||(e[5]=m('<div class="card-header" data-v-9af2df2c><h3 data-v-9af2df2c>Eventos del Cliente</h3></div><ul class="def-list" data-v-9af2df2c><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>open:</span> La conexion se establecio exitosamente tras el handshake.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>message:</span> Se recibio un dato del servidor. Llega en <code data-v-9af2df2c>event.data</code>.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>close:</span> La conexion se cerro. Incluye <code data-v-9af2df2c>code</code> y <code data-v-9af2df2c>reason</code>.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>error:</span> Error de conexion. Siempre precede a un evento <code data-v-9af2df2c>close</code>.</li></ul>',2)),s(n,{language:"javascript",code:`const ws = new WebSocket('ws://localhost:8080');

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
});`})]),a("div",V,[e[6]||(e[6]=a("div",{class:"card-header"},[a("h3",null,"Metodos y readyState")],-1)),s(n,{language:"javascript",code:`// Enviar datos
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
}`}),e[7]||(e[7]=m('<div class="ready-state-grid" data-v-9af2df2c><div class="rs-item" data-v-9af2df2c><span class="rs-num" data-v-9af2df2c>0</span><span class="rs-name" data-v-9af2df2c>CONNECTING</span><span class="rs-desc" data-v-9af2df2c>Conectando...</span></div><div class="rs-item rs-open" data-v-9af2df2c><span class="rs-num" data-v-9af2df2c>1</span><span class="rs-name" data-v-9af2df2c>OPEN</span><span class="rs-desc" data-v-9af2df2c>Conectado y listo</span></div><div class="rs-item rs-closing" data-v-9af2df2c><span class="rs-num" data-v-9af2df2c>2</span><span class="rs-name" data-v-9af2df2c>CLOSING</span><span class="rs-desc" data-v-9af2df2c>Cerrando...</span></div><div class="rs-item rs-closed" data-v-9af2df2c><span class="rs-num" data-v-9af2df2c>3</span><span class="rs-name" data-v-9af2df2c>CLOSED</span><span class="rs-desc" data-v-9af2df2c>Cerrado</span></div></div>',1))])])]),e[33]||(e[33]=a("hr",{class:"divider"},null,-1)),a("section",z,[e[13]||(e[13]=a("h2",{class:"section-title node"},"Integracion con Express",-1)),e[14]||(e[14]=a("p",{class:"section-desc"},"Es muy comun combinar Express con un servidor WebSocket sobre el mismo puerto, compartiendo el servidor HTTP subyacente.",-1)),a("div",G,[a("div",F,[e[10]||(e[10]=a("div",{class:"card-header"},[a("h3",null,"Express + WebSocket en el mismo puerto")],-1)),s(n,{language:"javascript",code:`const express = require('express');
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
});`})]),a("div",K,[e[11]||(e[11]=a("div",{class:"card-header"},[a("h3",null,"Router de Mensajes por Tipo")],-1)),e[12]||(e[12]=a("p",null,[l("Patron recomendado: usar un campo "),a("code",null,"tipo"),l(" en el payload JSON para despachar mensajes.")],-1)),s(n,{language:"javascript",code:`wss.on('connection', (ws) => {
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
});`})])])]),e[34]||(e[34]=a("hr",{class:"divider"},null,-1)),a("section",Q,[e[17]||(e[17]=a("h2",{class:"section-title node"},"Reconexion y Heartbeat",-1)),e[18]||(e[18]=a("p",{class:"section-desc"},"En produccion las conexiones pueden caerse. Es esencial implementar reconexion en el cliente y un heartbeat (ping/pong) en el servidor para detectar conexiones muertas.",-1)),a("div",X,[a("div",Z,[e[15]||(e[15]=a("div",{class:"card-header"},[a("h3",null,"Reconexion con Backoff Exponencial")],-1)),s(n,{language:"javascript",code:`class WSConReconexion {
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
}`})]),a("div",Y,[e[16]||(e[16]=a("div",{class:"card-header"},[a("h3",null,"Heartbeat: Detectar Conexiones Muertas")],-1)),s(n,{language:"javascript",code:`const wss = new WebSocketServer({ port: 8080 });

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

wss.on('close', () => clearInterval(interval));`})])])]),e[35]||(e[35]=a("hr",{class:"divider"},null,-1)),a("section",$,[e[21]||(e[21]=a("h2",{class:"section-title node"},"Seguridad en WebSocket",-1)),e[22]||(e[22]=a("p",{class:"section-desc"},[l("WebSocket hereda el modelo de seguridad de HTTP. En produccion siempre usar "),a("code",null,"wss://"),l(" (WebSocket Secure).")],-1)),a("div",aa,[a("div",ea,[e[19]||(e[19]=m('<div class="card-header" data-v-9af2df2c><h3 data-v-9af2df2c>Buenas Practicas</h3></div><ul class="def-list" data-v-9af2df2c><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>wss:// siempre en produccion:</span> Cifra el trafico con TLS. Previene ataques man-in-the-middle.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>Autenticacion en el handshake:</span> Valida el token JWT antes de aceptar el upgrade.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>Verificar el Origin:</span> Rechazar conexiones de origenes no autorizados.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>Limitar tamano de mensajes:</span> Configurar <code data-v-9af2df2c>maxPayload</code> para prevenir DoS.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>Rate limiting:</span> Limitar mensajes por cliente por segundo.</li><li data-v-9af2df2c><span class="def-term" data-v-9af2df2c>Validar mensajes:</span> Nunca confiar en datos del cliente. Usar Zod o similar.</li></ul>',2)),s(n,{language:"javascript",code:`const wss = new WebSocketServer({
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
});`})]),a("div",sa,[e[20]||(e[20]=a("div",{class:"card-header"},[a("h3",null,"Autenticacion con JWT")],-1)),s(n,{language:"javascript",code:`const jwt = require('jsonwebtoken');

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
});`})])])]),e[36]||(e[36]=a("hr",{class:"divider"},null,-1)),a("section",ta,[e[25]||(e[25]=a("h2",{class:"section-title node"},"ws vs Socket.IO",-1)),e[26]||(e[26]=a("p",{class:"section-desc"},[a("code",null,"ws"),l(" es WebSocket puro. "),a("code",null,"Socket.IO"),l(" agrega reconexion automatica, rooms, namespaces y fallback a HTTP polling.")],-1)),a("div",na,[e[24]||(e[24]=m('<div class="card info" data-v-9af2df2c><div class="card-header" data-v-9af2df2c><h3 data-v-9af2df2c>Cuando usar cada uno</h3></div><div class="table-responsive" data-v-9af2df2c><table class="custom-table" data-v-9af2df2c><thead data-v-9af2df2c><tr data-v-9af2df2c><th data-v-9af2df2c>Caracteristica</th><th data-v-9af2df2c>ws</th><th data-v-9af2df2c>Socket.IO</th></tr></thead><tbody data-v-9af2df2c><tr data-v-9af2df2c><td data-v-9af2df2c>Peso</td><td class="text-success" data-v-9af2df2c>Muy ligero</td><td class="text-danger" data-v-9af2df2c>Mayor bundle size</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Reconexion automatica</td><td class="text-danger" data-v-9af2df2c>Manual</td><td class="text-success" data-v-9af2df2c>Incluida</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Rooms / Namespaces</td><td class="text-danger" data-v-9af2df2c>Manual</td><td class="text-success" data-v-9af2df2c>Incluidos</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Fallback HTTP polling</td><td class="text-danger" data-v-9af2df2c>No</td><td class="text-success" data-v-9af2df2c>Si</td></tr><tr data-v-9af2df2c><td data-v-9af2df2c>Compatibilidad cliente</td><td data-v-9af2df2c>Solo WebSocket nativo</td><td data-v-9af2df2c>WS + HTTP polling</td></tr></tbody></table></div><p class="note-text" data-v-9af2df2c>Usar <strong data-v-9af2df2c>ws</strong> para control total y bajo overhead. Usar <strong data-v-9af2df2c>Socket.IO</strong> cuando se necesitan rooms, reconexion automatica o compatibilidad con redes restrictivas.</p></div>',1)),a("div",da,[e[23]||(e[23]=a("div",{class:"card-header"},[a("h3",null,"Ejemplo con Socket.IO")],-1)),s(n,{language:"bash",code:"npm install socket.io"}),s(n,{language:"javascript",code:`// SERVIDOR
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
});`}),s(n,{language:"javascript",code:`// CLIENTE
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  socket.emit('unirse-sala', 'general');
});

socket.on('mensaje', (data) => console.log(data));
socket.emit('mensaje', { sala: 'general', texto: 'Hola!' });`})])])]),e[37]||(e[37]=a("hr",{class:"divider"},null,-1)),a("section",oa,[e[29]||(e[29]=a("h2",{class:"section-title node"},"Simulacion: Chat en Tiempo Real",-1)),e[30]||(e[30]=a("p",{class:"section-desc"},"Simulacion visual del flujo de mensajes entre cliente y servidor WebSocket.",-1)),a("div",ca,[a("div",ia,[a("div",ra,[a("span",{class:S(["status-dot",{"status-connected":o.value}])},null,2),a("span",la,p(o.value?"ws://localhost:8080 — Conectado":"Desconectado"),1)]),a("button",{class:S(["connect-btn",o.value?"btn-disconnect":"btn-connect"]),onClick:W},p(o.value?"Cerrar Conexion":"Conectar"),3)]),a("div",fa,[a("div",va,[e[27]||(e[27]=a("div",{class:"panel-header"},"💻 Cliente (Navegador)",-1)),a("div",{class:"chat-log",ref_key:"clientLog",ref:h},[(r(!0),i(E,null,N(b.value,t=>(r(),i("div",{key:t.id,class:S(["chat-msg",t.type])},[a("span",pa,p(t.time),1),a("span",ua,p(t.text),1)],2))),128)),!o.value&&b.value.length===0?(r(),i("div",ma,'Presiona "Conectar" para iniciar')):x("",!0)],512),o.value?(r(),i("div",ga,[O(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>g.value=t),onKeyup:L(T,["enter"]),class:"chat-input",placeholder:"Escribe un mensaje..."},null,544),[[I,g.value]]),a("button",{onClick:T,class:"send-btn"},"Enviar")])):x("",!0)]),a("div",ha,[e[28]||(e[28]=a("div",{class:"panel-header"},"💻 Servidor (Node.js / ws)",-1)),a("div",{class:"chat-log",ref_key:"serverLog",ref:w},[(r(!0),i(E,null,N(k.value,t=>(r(),i("div",{key:t.id,class:S(["chat-msg",t.type])},[a("span",wa,p(t.time),1),a("span",Sa,p(t.text),1)],2))),128)),!o.value&&k.value.length===0?(r(),i("div",ba,"Esperando conexion...")):x("",!0)],512)])])])]),e[38]||(e[38]=a("hr",{class:"divider"},null,-1)),s(H,{references:[{techId:"nodejs",moduleId:"express",text:"Express — Servidor HTTP"},{techId:"nodejs",moduleId:"cors",text:"CORS — Cross-Origin"},{techId:"nodejs",moduleId:"apirest",text:"API REST"}]})]))}}),Ea=q(ka,[["__scopeId","data-v-9af2df2c"]]);export{Ea as default};
