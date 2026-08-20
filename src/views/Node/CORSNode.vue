<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">CORS</h1>
      <p class="subtitle">Cross-Origin Resource Sharing — el mecanismo HTTP que controla qué orígenes pueden acceder a los recursos de tu servidor.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es CORS?</h2>
      <p class="section-desc"><strong>CORS (Cross-Origin Resource Sharing)</strong> es un mecanismo basado en cabeceras HTTP que permite a un servidor indicar qué orígenes distintos al suyo tienen permiso para acceder a sus recursos. Es implementado por los navegadores como extensión de la política de <strong>Same-Origin Policy (SOP)</strong>.</p>
      <div class="card info">
        <div class="card-header">
          <h3>El Problema: Same-Origin Policy</h3>
        </div>
        <p>Los navegadores aplican la <strong>Política del Mismo Origen</strong> por seguridad: un script cargado desde <code>https://app.com</code> no puede por defecto leer respuestas de <code>https://api.com</code>. Dos URLs tienen el mismo origen si comparten el mismo <strong>protocolo</strong>, <strong>dominio</strong> y <strong>puerto</strong>.</p>
        <table class="origin-table">
          <thead>
            <tr class="origin-row header-row">
              <th>URL de Origen</th>
              <th>URL Comparada</th>
              <th>¿Mismo Origen?</th>
            </tr>
          </thead>
          <tbody>
            <tr class="origin-row">
              <td><code>https://app.com/page</code></td>
              <td><code>https://app.com/api</code></td>
              <td class="tag-yes">✓ Sí</td>
            </tr>
            <tr class="origin-row">
              <td><code>https://app.com</code></td>
              <td><code>http://app.com</code></td>
              <td class="tag-no">✗ No (protocolo)</td>
            </tr>
            <tr class="origin-row">
              <td><code>https://app.com</code></td>
              <td><code>https://api.com</code></td>
              <td class="tag-no">✗ No (dominio)</td>
            </tr>
            <tr class="origin-row">
              <td><code>https://app.com</code></td>
              <td><code>https://app.com:3000</code></td>
              <td class="tag-no">✗ No (puerto)</td>
            </tr>
          </tbody>
        </table>
      </div><br><br>
      <div class="card recommended">
        <div class="card-header">
          <h3>La Solución: Cabeceras CORS</h3>
        </div>
        <p>Cuando se realiza una petición cross-origin, el navegador añade automáticamente la cabecera <code>Origin</code> a la solicitud. El servidor puede entonces responder con cabeceras CORS que indican si permite ese origen. Si el servidor no responde con las cabeceras correctas, el navegador bloquea la respuesta.</p>
        <div class="flow-diagram">
          <div class="flow-row nodes-row">
            <div class="flow-node client-node">
              <div class="flow-icon">🌐</div>
              <div class="flow-node-text">
                <strong>Navegador</strong>
                <small>app.com</small>
              </div>
            </div>
            <div class="flow-connector">
              <div class="connector-label top-label">1. <code>Origin: app.com</code></div>
              <div class="connector-line">
                <div class="connector-track"></div>
                <div class="arrow-head right-arrow">▶</div>
              </div>
            </div>
            <div class="flow-node server-node">
              <div class="flow-icon">🖥️</div>
              <div class="flow-node-text">
                <strong>Servidor</strong>
                <small>api.com</small>
              </div>
            </div>
            <div class="flow-connector">
              <div class="connector-label bottom-label">2. <code>Access-Control-Allow-Origin</code></div>
              <div class="connector-line return-line">
                <div class="arrow-head left-arrow">◀</div>
                <div class="connector-track"></div>
              </div>
            </div>
            <div class="flow-node check-node">
              <div class="flow-icon">🔒</div>
              <div class="flow-node-text">
                <strong>Navegador</strong>
                <small>Verifica CORS</small>
              </div>
            </div>
          </div>
        </div>
        <p class="note-text">CORS es aplicado solo por los <strong>navegadores</strong>. Las peticiones desde servidores (curl, Postman, fetch en Node.js) no tienen estas restricciones.</p>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Peticiones Simples vs. Preflight</h2>
      <p class="section-desc">No todas las peticiones cross-origin se tratan igual. Dependiendo del método HTTP y las cabeceras utilizadas, el navegador puede enviar primero una petición <strong>preflight</strong> para verificar que el servidor permite la operación.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Peticiones Simples (Simple Requests)</h3>
          </div>
          <p>Una petición se considera "simple" y no requiere preflight si cumple <strong>todas</strong> estas condiciones:</p>
          <ul class="def-list">
            <li><span class="def-term">Métodos permitidos:</span> GET, POST, HEAD.</li>
            <li><span class="def-term">Cabeceras permitidas:</span> Solo Accept, Accept-Language, Content-Language, Content-Type (con valor MIME simple).</li>
            <li><span class="def-term">Content-Type simple:</span> application/x-www-form-urlencoded, multipart/form-data, text/plain.</li>
          </ul>
          <CodeBlock language="javascript" code="// Petición simple — NO genera preflight
fetch('https://api.example.com/datos', {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
});" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Peticiones Preflight</h3>
          </div>
          <p>Cuando la petición no es "simple" (usa <code>PUT</code>, <code>DELETE</code>, <code>PATCH</code>, la cabecera <code>Authorization</code>, <code>Content-Type: application/json</code>, etc.), el navegador envía primero una petición <strong>OPTIONS</strong> al servidor para pedir permiso.</p>
          <CodeBlock language="http" code="// 1. Navegador envía preflight automáticamente:
OPTIONS /api/usuarios HTTP/1.1
Origin: https://app.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization

// 2. Servidor debe responder con permisos:
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.com
Access-Control-Allow-Methods: PUT, POST, GET, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400

// 3. Solo si la respuesta preflight es OK, el navegador envía la petición real." />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Cabeceras CORS Principales</h2>
      <p class="section-desc">CORS se configura completamente a través de cabeceras HTTP. El servidor las incluye en sus respuestas para indicar qué está permitido.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Cabeceras de Respuesta (Servidor → Navegador)</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Access-Control-Allow-Origin:</span> El origen permitido. Puede ser una URL específica (https://app.com) o * para cualquier origen (no funciona con credenciales).</li>
            <li><span class="def-term">Access-Control-Allow-Methods:</span> Lista de métodos HTTP permitidos (GET, POST, PUT, DELETE).</li>
            <li><span class="def-term">Access-Control-Allow-Headers:</span> Cabeceras que el cliente puede enviar (Content-Type, Authorization).</li>
            <li><span class="def-term">Access-Control-Allow-Credentials:</span> Si es true, el navegador incluirá cookies y cabeceras de autenticación. Requiere que Access-Control-Allow-Origin sea un origen específico, no *.</li>
            <li><span class="def-term">Access-Control-Expose-Headers:</span> Cabeceras de respuesta que JavaScript puede leer (por defecto solo se exponen unas pocas).</li>
            <li><span class="def-term">Access-Control-Max-Age:</span> Segundos que el navegador puede cachear la respuesta preflight (evita peticiones OPTIONS repetidas).</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Cabeceras de Petición (Navegador → Servidor)</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Origin:</span> El origen desde donde se hace la petición. El navegador lo añade automáticamente.</li>
            <li><span class="def-term">Access-Control-Request-Method:</span> En peticiones preflight, indica qué método HTTP se usará en la petición real.</li>
            <li><span class="def-term">Access-Control-Request-Headers:</span> En peticiones preflight, lista las cabeceras que se enviarán en la petición real.</li>
          </ul>
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">CORS en Express.js</h2>
      <p class="section-desc">Hay dos formas de implementar CORS en Express: manualmente con middleware propio o usando el paquete <code>cors</code>, que es la opción recomendada para la mayoría de los proyectos.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Con el Paquete <code>cors</code></h3>
            <span class="badge success">Recomendado</span>
          </div>
          <CodeBlock language="bash" code="npm install cors
npm install @types/cors -D  # Si usas TypeScript" />
          <CodeBlock language="typescript" code='import express from "express";
import cors from "cors";

const app = express();

// ─── Opción 1: Permitir TODOS los orígenes (solo para desarrollo) ───
app.use(cors());

// ─── Opción 2: Configuración específica para producción ─────────────
const corsOptions: cors.CorsOptions = {
  origin: ["https://mi-app.com", "https://admin.mi-app.com"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,       // Habilita cookies y auth headers
  maxAge: 86400,           // Cachear preflight por 24 horas
};

app.use(cors(corsOptions));

// ─── Opción 3: Origen dinámico desde variable de entorno ────────────
app.use(cors({
  origin: (origin, callback) => {
    const allowed = process.env.ALLOWED_ORIGINS?.split(",") ?? [];
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origen no permitido por CORS"));
    }
  },
  credentials: true,
}));' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>CORS Manual sin Paquete Externo</h3>
            <span class="badge info">Opcional</span>
          </div>
          <p>Si prefieres no depender del paquete <code>cors</code>, puedes implementarlo directamente con un middleware:</p>
          <CodeBlock language="typescript" code='import express, { Request, Response, NextFunction } from "express";

const app = express();

// Middleware CORS personalizado
app.use((req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = ["https://mi-app.com", "http://localhost:5173"];
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "86400");

  // Responder a peticiones preflight inmediatamente
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/api/datos", (req, res) => {
  res.json({ mensaje: "¡Petición cross-origin exitosa!" });
});' />
        </div>
      </div><br><br>
      <div class="card info">
        <div class="card-header">
          <h3>CORS por Ruta Específica</h3>
          <span class="badge info">Opcional</span>
        </div>
        <p>Puedes aplicar CORS solo a rutas específicas en lugar de globalmente:</p>
        <CodeBlock language="typescript" code='import cors from "cors";

const corsPublico = cors({ origin: "*" });
const corsRestringido = cors({ origin: "https://admin.mi-app.com", credentials: true });

// Ruta pública — cualquier origen puede acceder
app.get("/api/publico", corsPublico, (req, res) => {
  res.json({ datos: "Información pública" });
});

// Ruta de admin — solo el panel de administración
app.get("/api/admin", corsRestringido, (req, res) => {
  res.json({ datos: "Información de administración" });
});

// En rutas con preflight, también debes habilitar OPTIONS
app.options("/api/admin", corsRestringido);' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Credenciales: Cookies y Autenticación</h2>
      <p class="section-desc">Por defecto, las peticiones cross-origin <strong>no incluyen cookies, cabeceras de autenticación ni certificados TLS</strong>. Para habilitar esto, se necesita configuración tanto en el servidor como en el cliente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Configuración en el Servidor</h3>
          </div>
          <CodeBlock language="typescript" code='// IMPORTANTE: Con credentials: true, NO puedes usar origin: "*"
// Debes especificar orígenes concretos

app.use(cors({
  origin: "https://mi-app.com",   // Origen exacto, no wildcard
  credentials: true,               // Habilita cookies y auth headers
}));

// También puedes exponer cabeceras de respuesta personalizadas
app.use(cors({
  origin: "https://mi-app.com",
  credentials: true,
  exposedHeaders: ["X-Custom-Header", "X-Request-Id"],
}));' />
        </div>

        <div class="card info">
          <div class="card-header">
            <h3>Configuración en el Cliente (Fetch / Axios)</h3>
          </div>
          <CodeBlock language="typescript" code='// Con Fetch API
const response = await fetch("https://api.mi-app.com/perfil", {
  method: "GET",
  credentials: "include",   // "omit" | "same-origin" | "include"
  headers: {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json",
  },
});

// Con Axios
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mi-app.com",
  withCredentials: true,  // Equivalente a credentials: "include"
});

const { data } = await api.get("/perfil");

// Error común sin credentials
// Si el servidor usa Access-Control-Allow-Credentials: true
// pero el cliente no envía credentials: "include",
// las cookies NO se enviarán aunque el navegador las tenga.' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Errores Comunes y Soluciones</h2>
      <p class="section-desc">Estos son los errores CORS más frecuentes que encontrarás en el desarrollo y cómo solucionarlos.</p>
      <div class="cards-grid">
        <div class="card warning">
          <div class="card-header">
            <h3>Error: Missing Allow-Origin Header</h3>
          </div>
          <div class="error-box">
            <code>Access to fetch at 'https://api.com' from origin 'https://app.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</code>
          </div>
          <p><strong>Causa:</strong> El servidor no está enviando la cabecera <code>Access-Control-Allow-Origin</code>.</p>
          <p><strong>Solución:</strong> Configurar CORS en el servidor (ver sección anterior). Verifica que el middleware esté antes de la definición de rutas.</p>
          <CodeBlock language="typescript" code='// Orden incorrecto — el middleware no se aplica a las rutas
app.get("/api/datos", handler);
app.use(cors());             // Demasiado tarde

// Orden correcto — middleware primero
app.use(cors());
app.get("/api/datos", handler);' />
        </div>

        <div class="card warning">
          <div class="card-header">
            <h3>Error: Wildcard con Credentials</h3>
          </div>
          <div class="error-box">
            <code>The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.</code>
          </div>
          <p><strong>Causa:</strong> Estás usando <code>origin: "*"</code> junto con <code>credentials: true</code>.</p>
          <CodeBlock language="typescript" code='// Inválido: wildcard + credentials
app.use(cors({ origin: "*", credentials: true }));

// Correcto: origen específico + credentials
app.use(cors({
  origin: "https://mi-app.com",
  credentials: true,
}));

// O dinámicamente desde una lista blanca
app.use(cors({
  origin: (origin, callback) => {
    const lista = ["https://app.com", "http://localhost:5173"];
    if (!origin || lista.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido"));
    }
  },
  credentials: true,
}));' />
        </div>
      </div><br><br>
      <div class="card warning">
        <div class="card-header">
          <h3>Error: Preflight Response No Exitosa</h3>
        </div>
        <div class="error-box">
          <code>Response to preflight request doesn't pass access control check: It does not have HTTP ok status.</code>
        </div>
        <p><strong>Causa:</strong> La ruta no maneja peticiones <code>OPTIONS</code> o el middleware CORS no está configurado para responder al preflight.</p>
        <CodeBlock language="typescript" code='// Si usas rutas específicas, el preflight no llega al handler
app.put("/api/usuario", handler);
// El navegador envía OPTIONS /api/usuario pero no hay ruta OPTIONS

// Solución 1: Habilitar preflight globalmente
app.options("*", cors(corsOptions)); // Responde a OPTIONS en cualquier ruta
app.use(cors(corsOptions));

// Solución 2: Por ruta específica
app.options("/api/usuario", cors(corsOptions));  // Primero el preflight
app.put("/api/usuario", cors(corsOptions), handler);' />
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">CORS en Desarrollo: Proxy con Vite</h2>
      <p class="section-desc">En desarrollo local, una alternativa elegante a configurar CORS en el servidor es usar el <strong>proxy integrado de Vite</strong>. Las peticiones del frontend pasan por el servidor de desarrollo de Vite, que las redirige al backend —mismo origen desde la perspectiva del navegador.</p>
      <div class="card recommended">
        <div class="card-header">
          <h3>Configuración de Proxy en vite.config.ts</h3>
        </div>
        <CodeBlock language="typescript" code='// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Todas las peticiones a /api/* se redirigen al backend
      "/api": {
        target: "http://localhost:3000",  // URL de tu servidor Express
        changeOrigin: true,               // Cambia el header Origin al target
        rewrite: (path) => path.replace(/^\/api/, ""),
        // Si usas HTTPS con certificado autofirmado:
        // secure: false,
      },
    },
  },
});

// Con esta config, desde el frontend haces:
// fetch("/api/usuarios")
// Y Vite lo redirige internamente a:
// http://localhost:3000/usuarios
// → Sin errores CORS en desarrollo' />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'apirest', text: 'API REST con Node.js' },
      { techId: 'nodejs', moduleId: 'express', text: 'Express.js Framework' },
      { techId: 'nodejs', moduleId: 'http', text: 'Módulo HTTP de Node.js' },
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
<style scoped>
.origin-table {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
  font-size: 0.82rem;
}

.origin-row {
  display: flex;
  justify-content: space-between;
  padding: 0.55rem 0.85rem;
  border-bottom: 1px solid var(--border-color);
}

.origin-row:last-child {
  border-bottom: none;
}

.header-row {
  background: rgba(255, 255, 255, 0.04);
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.tag-yes {
  color: #34d399;
  font-weight: 600;
  white-space: nowrap;
}

.tag-no {
  color: #f87171;
  font-weight: 600;
  white-space: nowrap;
}

.flow-diagram {
  margin: 1rem 0;
  overflow-x: auto;
}

.nodes-row {
  display: flex;
  align-items: center;
  gap: 0;
  min-width: 480px;
}

.flow-node {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  flex-shrink: 0;
  z-index: 1;
}

.flow-node-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.flow-node-text strong {
  font-size: 0.88rem;
}

.flow-node-text small {
  font-size: 0.74rem;
  opacity: 0.75;
}

.client-node {
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: #93c5fd;
}

.server-node {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #6ee7b7;
}

.check-node {
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.4);
  color: #fcd34d;
}

.flow-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.flow-connector {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.2rem;
  padding: 0 0.25rem;
  min-width: 0;
}

.connector-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  height: 1.4em;
  line-height: 1.4;
}

.connector-label code {
  font-size: 0.68rem;
  background: rgba(255, 255, 255, 0.06);
  padding: 1px 3px;
  border-radius: 3px;
  color: #a5b4fc;
}

.bottom-label {
  order: 3;
}

.connector-line {
  display: flex;
  align-items: center;
  flex: 1;
  order: 2;
}

.connector-track {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.5), rgba(99, 102, 241, 0.2));
  border-radius: 1px;
}

.return-line .connector-track {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.5));
}

.arrow-head {
  font-size: 0.75rem;
  color: rgba(99, 102, 241, 0.7);
  line-height: 1;
  flex-shrink: 0;
}

.right-arrow {
  margin-left: -2px;
}

.left-arrow {
  margin-right: -2px;
}

.note-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.75rem;
}

.error-box {
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-left: 3px solid #ef4444;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
}

.error-box code {
  font-size: 0.78rem;
  color: #fca5a5;
  font-family: monospace;
  line-height: 1.5;
  word-break: break-word;
}
</style>
