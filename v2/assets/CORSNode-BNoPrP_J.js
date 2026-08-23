import{C as n}from"./CodeBlock-Bz09fMKf.js";import{R as i}from"./ReferenceSection-BVvaRklu.js";import{d as r,c as d,a as t,b as e,e as o,f as s,o as c,_ as l}from"./index-Bv0jxDU6.js";const p={class:"module-content"},u={class:"topic-section"},v={class:"cards-grid"},g={class:"card info"},m={class:"card recommended"},f={class:"topic-section"},h={class:"cards-grid"},C={class:"card recommended"},O={class:"card info"},b={class:"card info"},S={class:"topic-section"},T={class:"cards-grid"},w={class:"card info"},A={class:"card info"},P={class:"topic-section"},R={class:"cards-grid"},E={class:"card warning"},x={class:"card warning"},q={class:"card warning"},y={class:"topic-section"},N={class:"card recommended"},H=r({__name:"CORSNode",setup(I){return(k,a)=>(c(),d("div",p,[a[34]||(a[34]=t('<div class="header-section" data-v-0066964c><h1 class="main-title node" data-v-0066964c>CORS</h1><p class="subtitle" data-v-0066964c>Cross-Origin Resource Sharing — el mecanismo HTTP que controla qué orígenes pueden acceder a los recursos de tu servidor.</p></div><section class="topic-section" data-v-0066964c><h2 class="section-title node" data-v-0066964c>¿Qué es CORS?</h2><p class="section-desc" data-v-0066964c><strong data-v-0066964c>CORS (Cross-Origin Resource Sharing)</strong> es un mecanismo basado en cabeceras HTTP que permite a un servidor indicar qué orígenes distintos al suyo tienen permiso para acceder a sus recursos. Es implementado por los navegadores como extensión de la política de <strong data-v-0066964c>Same-Origin Policy (SOP)</strong>.</p><div class="card info" data-v-0066964c><div class="card-header" data-v-0066964c><h3 data-v-0066964c>El Problema: Same-Origin Policy</h3></div><p data-v-0066964c>Los navegadores aplican la <strong data-v-0066964c>Política del Mismo Origen</strong> por seguridad: un script cargado desde <code data-v-0066964c>https://app.com</code> no puede por defecto leer respuestas de <code data-v-0066964c>https://api.com</code>. Dos URLs tienen el mismo origen si comparten el mismo <strong data-v-0066964c>protocolo</strong>, <strong data-v-0066964c>dominio</strong> y <strong data-v-0066964c>puerto</strong>.</p><table class="origin-table" data-v-0066964c><thead data-v-0066964c><tr class="origin-row header-row" data-v-0066964c><th data-v-0066964c>URL de Origen</th><th data-v-0066964c>URL Comparada</th><th data-v-0066964c>¿Mismo Origen?</th></tr></thead><tbody data-v-0066964c><tr class="origin-row" data-v-0066964c><td data-v-0066964c><code data-v-0066964c>https://app.com/page</code></td><td data-v-0066964c><code data-v-0066964c>https://app.com/api</code></td><td class="tag-yes" data-v-0066964c>✓ Sí</td></tr><tr class="origin-row" data-v-0066964c><td data-v-0066964c><code data-v-0066964c>https://app.com</code></td><td data-v-0066964c><code data-v-0066964c>http://app.com</code></td><td class="tag-no" data-v-0066964c>✗ No (protocolo)</td></tr><tr class="origin-row" data-v-0066964c><td data-v-0066964c><code data-v-0066964c>https://app.com</code></td><td data-v-0066964c><code data-v-0066964c>https://api.com</code></td><td class="tag-no" data-v-0066964c>✗ No (dominio)</td></tr><tr class="origin-row" data-v-0066964c><td data-v-0066964c><code data-v-0066964c>https://app.com</code></td><td data-v-0066964c><code data-v-0066964c>https://app.com:3000</code></td><td class="tag-no" data-v-0066964c>✗ No (puerto)</td></tr></tbody></table></div><br data-v-0066964c><br data-v-0066964c><div class="card recommended" data-v-0066964c><div class="card-header" data-v-0066964c><h3 data-v-0066964c>La Solución: Cabeceras CORS</h3></div><p data-v-0066964c>Cuando se realiza una petición cross-origin, el navegador añade automáticamente la cabecera <code data-v-0066964c>Origin</code> a la solicitud. El servidor puede entonces responder con cabeceras CORS que indican si permite ese origen. Si el servidor no responde con las cabeceras correctas, el navegador bloquea la respuesta.</p><div class="flow-diagram" data-v-0066964c><div class="flow-row nodes-row" data-v-0066964c><div class="flow-node client-node" data-v-0066964c><div class="flow-icon" data-v-0066964c>🌐</div><div class="flow-node-text" data-v-0066964c><strong data-v-0066964c>Navegador</strong><small data-v-0066964c>app.com</small></div></div><div class="flow-connector" data-v-0066964c><div class="connector-label top-label" data-v-0066964c>1. <code data-v-0066964c>Origin: app.com</code></div><div class="connector-line" data-v-0066964c><div class="connector-track" data-v-0066964c></div><div class="arrow-head right-arrow" data-v-0066964c>▶</div></div></div><div class="flow-node server-node" data-v-0066964c><div class="flow-icon" data-v-0066964c>🖥️</div><div class="flow-node-text" data-v-0066964c><strong data-v-0066964c>Servidor</strong><small data-v-0066964c>api.com</small></div></div><div class="flow-connector" data-v-0066964c><div class="connector-label bottom-label" data-v-0066964c>2. <code data-v-0066964c>Access-Control-Allow-Origin</code></div><div class="connector-line return-line" data-v-0066964c><div class="arrow-head left-arrow" data-v-0066964c>◀</div><div class="connector-track" data-v-0066964c></div></div></div><div class="flow-node check-node" data-v-0066964c><div class="flow-icon" data-v-0066964c>🔒</div><div class="flow-node-text" data-v-0066964c><strong data-v-0066964c>Navegador</strong><small data-v-0066964c>Verifica CORS</small></div></div></div></div><p class="note-text" data-v-0066964c>CORS es aplicado solo por los <strong data-v-0066964c>navegadores</strong>. Las peticiones desde servidores (curl, Postman, fetch en Node.js) no tienen estas restricciones.</p></div></section><hr class="divider" data-v-0066964c>',3)),e("section",u,[a[2]||(a[2]=e("h2",{class:"section-title node"},"Peticiones Simples vs. Preflight",-1)),a[3]||(a[3]=e("p",{class:"section-desc"},[s("No todas las peticiones cross-origin se tratan igual. Dependiendo del método HTTP y las cabeceras utilizadas, el navegador puede enviar primero una petición "),e("strong",null,"preflight"),s(" para verificar que el servidor permite la operación.")],-1)),e("div",v,[e("div",g,[a[0]||(a[0]=t('<div class="card-header" data-v-0066964c><h3 data-v-0066964c>Peticiones Simples (Simple Requests)</h3></div><p data-v-0066964c>Una petición se considera &quot;simple&quot; y no requiere preflight si cumple <strong data-v-0066964c>todas</strong> estas condiciones:</p><ul class="def-list" data-v-0066964c><li data-v-0066964c><span class="def-term" data-v-0066964c>Métodos permitidos:</span> GET, POST, HEAD.</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Cabeceras permitidas:</span> Solo Accept, Accept-Language, Content-Language, Content-Type (con valor MIME simple).</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Content-Type simple:</span> application/x-www-form-urlencoded, multipart/form-data, text/plain.</li></ul>',3)),o(n,{language:"javascript",code:`// Petición simple — NO genera preflight
fetch('https://api.example.com/datos', {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
});`})]),e("div",m,[a[1]||(a[1]=t('<div class="card-header" data-v-0066964c><h3 data-v-0066964c>Peticiones Preflight</h3></div><p data-v-0066964c>Cuando la petición no es &quot;simple&quot; (usa <code data-v-0066964c>PUT</code>, <code data-v-0066964c>DELETE</code>, <code data-v-0066964c>PATCH</code>, la cabecera <code data-v-0066964c>Authorization</code>, <code data-v-0066964c>Content-Type: application/json</code>, etc.), el navegador envía primero una petición <strong data-v-0066964c>OPTIONS</strong> al servidor para pedir permiso.</p>',2)),o(n,{language:"http",code:`// 1. Navegador envía preflight automáticamente:
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

// 3. Solo si la respuesta preflight es OK, el navegador envía la petición real.`})])])]),a[35]||(a[35]=t('<hr class="divider" data-v-0066964c><section class="topic-section" data-v-0066964c><h2 class="section-title node" data-v-0066964c>Cabeceras CORS Principales</h2><p class="section-desc" data-v-0066964c>CORS se configura completamente a través de cabeceras HTTP. El servidor las incluye en sus respuestas para indicar qué está permitido.</p><div class="cards-grid" data-v-0066964c><div class="card info" data-v-0066964c><div class="card-header" data-v-0066964c><h3 data-v-0066964c>Cabeceras de Respuesta (Servidor → Navegador)</h3></div><ul class="def-list" data-v-0066964c><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Allow-Origin:</span> El origen permitido. Puede ser una URL específica (https://app.com) o * para cualquier origen (no funciona con credenciales).</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Allow-Methods:</span> Lista de métodos HTTP permitidos (GET, POST, PUT, DELETE).</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Allow-Headers:</span> Cabeceras que el cliente puede enviar (Content-Type, Authorization).</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Allow-Credentials:</span> Si es true, el navegador incluirá cookies y cabeceras de autenticación. Requiere que Access-Control-Allow-Origin sea un origen específico, no *.</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Expose-Headers:</span> Cabeceras de respuesta que JavaScript puede leer (por defecto solo se exponen unas pocas).</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Max-Age:</span> Segundos que el navegador puede cachear la respuesta preflight (evita peticiones OPTIONS repetidas).</li></ul></div><div class="card recommended" data-v-0066964c><div class="card-header" data-v-0066964c><h3 data-v-0066964c>Cabeceras de Petición (Navegador → Servidor)</h3></div><ul class="def-list" data-v-0066964c><li data-v-0066964c><span class="def-term" data-v-0066964c>Origin:</span> El origen desde donde se hace la petición. El navegador lo añade automáticamente.</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Request-Method:</span> En peticiones preflight, indica qué método HTTP se usará en la petición real.</li><li data-v-0066964c><span class="def-term" data-v-0066964c>Access-Control-Request-Headers:</span> En peticiones preflight, lista las cabeceras que se enviarán en la petición real.</li></ul></div></div></section><hr class="divider" data-v-0066964c>',3)),e("section",f,[a[9]||(a[9]=e("h2",{class:"section-title node"},"CORS en Express.js",-1)),a[10]||(a[10]=e("p",{class:"section-desc"},[s("Hay dos formas de implementar CORS en Express: manualmente con middleware propio o usando el paquete "),e("code",null,"cors"),s(", que es la opción recomendada para la mayoría de los proyectos.")],-1)),e("div",h,[e("div",C,[a[4]||(a[4]=e("div",{class:"card-header"},[e("h3",null,[s("Con el Paquete "),e("code",null,"cors")]),e("span",{class:"badge success"},"Recomendado")],-1)),o(n,{language:"bash",code:`npm install cors
npm install @types/cors -D  # Si usas TypeScript`}),o(n,{language:"typescript",code:`import express from "express";
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
}));`})]),e("div",O,[a[5]||(a[5]=e("div",{class:"card-header"},[e("h3",null,"CORS Manual sin Paquete Externo"),e("span",{class:"badge info"},"Opcional")],-1)),a[6]||(a[6]=e("p",null,[s("Si prefieres no depender del paquete "),e("code",null,"cors"),s(", puedes implementarlo directamente con un middleware:")],-1)),o(n,{language:"typescript",code:`import express, { Request, Response, NextFunction } from "express";

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
});`})])]),a[11]||(a[11]=e("br",null,null,-1)),a[12]||(a[12]=e("br",null,null,-1)),e("div",b,[a[7]||(a[7]=e("div",{class:"card-header"},[e("h3",null,"CORS por Ruta Específica"),e("span",{class:"badge info"},"Opcional")],-1)),a[8]||(a[8]=e("p",null,"Puedes aplicar CORS solo a rutas específicas en lugar de globalmente:",-1)),o(n,{language:"typescript",code:`import cors from "cors";

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
app.options("/api/admin", corsRestringido);`})])]),a[36]||(a[36]=e("hr",{class:"divider"},null,-1)),e("section",S,[a[15]||(a[15]=e("h2",{class:"section-title node"},"Credenciales: Cookies y Autenticación",-1)),a[16]||(a[16]=e("p",{class:"section-desc"},[s("Por defecto, las peticiones cross-origin "),e("strong",null,"no incluyen cookies, cabeceras de autenticación ni certificados TLS"),s(". Para habilitar esto, se necesita configuración tanto en el servidor como en el cliente.")],-1)),e("div",T,[e("div",w,[a[13]||(a[13]=e("div",{class:"card-header"},[e("h3",null,"Configuración en el Servidor")],-1)),o(n,{language:"typescript",code:`// IMPORTANTE: Con credentials: true, NO puedes usar origin: "*"
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
}));`})]),e("div",A,[a[14]||(a[14]=e("div",{class:"card-header"},[e("h3",null,"Configuración en el Cliente (Fetch / Axios)")],-1)),o(n,{language:"typescript",code:`// Con Fetch API
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
// las cookies NO se enviarán aunque el navegador las tenga.`})])])]),a[37]||(a[37]=e("hr",{class:"divider"},null,-1)),e("section",P,[a[27]||(a[27]=e("h2",{class:"section-title node"},"Errores Comunes y Soluciones",-1)),a[28]||(a[28]=e("p",{class:"section-desc"},"Estos son los errores CORS más frecuentes que encontrarás en el desarrollo y cómo solucionarlos.",-1)),e("div",R,[e("div",E,[a[17]||(a[17]=e("div",{class:"card-header"},[e("h3",null,"Error: Missing Allow-Origin Header")],-1)),a[18]||(a[18]=e("div",{class:"error-box"},[e("code",null,"Access to fetch at 'https://api.com' from origin 'https://app.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")],-1)),a[19]||(a[19]=e("p",null,[e("strong",null,"Causa:"),s(" El servidor no está enviando la cabecera "),e("code",null,"Access-Control-Allow-Origin"),s(".")],-1)),a[20]||(a[20]=e("p",null,[e("strong",null,"Solución:"),s(" Configurar CORS en el servidor (ver sección anterior). Verifica que el middleware esté antes de la definición de rutas.")],-1)),o(n,{language:"typescript",code:`// Orden incorrecto — el middleware no se aplica a las rutas
app.get("/api/datos", handler);
app.use(cors());             // Demasiado tarde

// Orden correcto — middleware primero
app.use(cors());
app.get("/api/datos", handler);`})]),e("div",x,[a[21]||(a[21]=e("div",{class:"card-header"},[e("h3",null,"Error: Wildcard con Credentials")],-1)),a[22]||(a[22]=e("div",{class:"error-box"},[e("code",null,"The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.")],-1)),a[23]||(a[23]=e("p",null,[e("strong",null,"Causa:"),s(" Estás usando "),e("code",null,'origin: "*"'),s(" junto con "),e("code",null,"credentials: true"),s(".")],-1)),o(n,{language:"typescript",code:`// Inválido: wildcard + credentials
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
}));`})])]),a[29]||(a[29]=e("br",null,null,-1)),a[30]||(a[30]=e("br",null,null,-1)),e("div",q,[a[24]||(a[24]=e("div",{class:"card-header"},[e("h3",null,"Error: Preflight Response No Exitosa")],-1)),a[25]||(a[25]=e("div",{class:"error-box"},[e("code",null,"Response to preflight request doesn't pass access control check: It does not have HTTP ok status.")],-1)),a[26]||(a[26]=e("p",null,[e("strong",null,"Causa:"),s(" La ruta no maneja peticiones "),e("code",null,"OPTIONS"),s(" o el middleware CORS no está configurado para responder al preflight.")],-1)),o(n,{language:"typescript",code:`// Si usas rutas específicas, el preflight no llega al handler
app.put("/api/usuario", handler);
// El navegador envía OPTIONS /api/usuario pero no hay ruta OPTIONS

// Solución 1: Habilitar preflight globalmente
app.options("*", cors(corsOptions)); // Responde a OPTIONS en cualquier ruta
app.use(cors(corsOptions));

// Solución 2: Por ruta específica
app.options("/api/usuario", cors(corsOptions));  // Primero el preflight
app.put("/api/usuario", cors(corsOptions), handler);`})])]),a[38]||(a[38]=e("hr",{class:"divider"},null,-1)),e("section",y,[a[32]||(a[32]=e("h2",{class:"section-title node"},"CORS en Desarrollo: Proxy con Vite",-1)),a[33]||(a[33]=e("p",{class:"section-desc"},[s("En desarrollo local, una alternativa elegante a configurar CORS en el servidor es usar el "),e("strong",null,"proxy integrado de Vite"),s(". Las peticiones del frontend pasan por el servidor de desarrollo de Vite, que las redirige al backend —mismo origen desde la perspectiva del navegador.")],-1)),e("div",N,[a[31]||(a[31]=e("div",{class:"card-header"},[e("h3",null,"Configuración de Proxy en vite.config.ts")],-1)),o(n,{language:"typescript",code:`// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Todas las peticiones a /api/* se redirigen al backend
      "/api": {
        target: "http://localhost:3000",  // URL de tu servidor Express
        changeOrigin: true,               // Cambia el header Origin al target
        rewrite: (path) => path.replace(/^\\/api/, ""),
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
// → Sin errores CORS en desarrollo`})])]),a[39]||(a[39]=e("hr",{class:"divider"},null,-1)),o(i,{references:[{techId:"nodejs",moduleId:"apirest",text:"API REST con Node.js"},{techId:"nodejs",moduleId:"express",text:"Express.js Framework"},{techId:"nodejs",moduleId:"http",text:"Módulo HTTP de Node.js"}]})]))}}),D=l(H,[["__scopeId","data-v-0066964c"]]);export{D as default};
