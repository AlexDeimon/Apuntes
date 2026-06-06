import{C as a}from"./CodeBlock-BCu3rfa8.js";import{R as d}from"./ReferenceSection-D_wF__rA.js";import{d as i,c as t,b as e,e as n,f as r,a as o,o as l}from"./index-Ct8qiaRS.js";const u={class:"module-content"},p={class:"topic-section"},c={class:"card recommended"},m={class:"topic-section"},v={class:"cards-grid"},g={class:"card info"},x={class:"card info"},j={class:"topic-section"},q={class:"cards-grid"},f={class:"card info"},P={class:"card recommended"},E={class:"topic-section"},R={class:"cards-grid"},b={class:"card info"},T={class:"card recommended"},y={class:"card recommended"},S={class:"topic-section"},w={class:"card recommended"},h=i({__name:"ExpressNode",setup(I){return(M,s)=>(l(),t("div",u,[s[22]||(s[22]=e("div",{class:"header-section"},[e("h1",{class:"main-title node"},"Express.js"),e("p",{class:"subtitle"},"El framework web rápido, minimalista y flexible para Node.js.")],-1)),e("section",p,[s[1]||(s[1]=e("h2",{class:"section-title node"},"¿Qué es Express?",-1)),s[2]||(s[2]=e("p",{class:"section-desc"},[r("Express abstrae la complejidad del módulo "),e("code",null,"http"),r(" nativo de Node.js, ofreciendo una sintaxis mucho más limpia para crear servidores, manejar rutas y trabajar con peticiones/respuestas.")],-1)),e("div",c,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Crear un Servidor Básico")],-1)),n(a,{language:"javascript",code:`const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.listen(PORT, () => {
  console.log(\`Servidor corriendo en http://localhost:\${PORT}\`);
});`})])]),s[23]||(s[23]=e("hr",{class:"divider"},null,-1)),e("section",m,[s[7]||(s[7]=e("h2",{class:"section-title node"},"Definición de Rutas",-1)),s[8]||(s[8]=e("p",{class:"section-desc"},"El enrutamiento determina cómo responde una aplicación a una solicitud de un cliente en una determinada vía final (URI) mediante un método HTTP específico (GET, POST, etc.).",-1)),e("div",v,[e("div",g,[s[3]||(s[3]=e("div",{class:"card-header"},[e("h3",null,"Parámetros de Ruta (Params)")],-1)),s[4]||(s[4]=e("p",null,[r("Capturan valores dinámicos definidos directamente en la URL. Se accede con "),e("code",null,"req.params"),r(".")],-1)),n(a,{language:"javascript",code:`app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`Perfil del usuario \${userId}\`);
});
// Ejemplo: /usuarios/42 -> userId = '42'`})]),e("div",x,[s[5]||(s[5]=e("div",{class:"card-header"},[e("h3",null,"Cadenas de Consulta (Query)")],-1)),s[6]||(s[6]=e("p",null,[r("Parámetros adicionales enviados en la URL tras un "),e("code",null,"?"),r(". Se accede con "),e("code",null,"req.query"),r(".")],-1)),n(a,{language:"javascript",code:`app.get('/buscar', (req, res) => {
  const termino = req.query.q;
  res.send(\`Resultados para: \${termino}\`);
});
// Ejemplo: /buscar?q=node -> termino = 'node'`})])])]),s[24]||(s[24]=e("hr",{class:"divider"},null,-1)),e("section",j,[s[11]||(s[11]=e("h2",{class:"section-title node"},"Route y Router en Express",-1)),e("div",q,[e("div",f,[s[9]||(s[9]=o('<div class="card-header"><h3>Route</h3></div><p>El método app.route() se utiliza para manejar varias solicitudes HTTP en un solo punto de ruta sin necesidad de repetir la ruta en cada método.</p><ul class="def-list"><li><span class="def-term">Propósito:</span>Manejar múltiples métodos en una ruta.</li><li><span class="def-term">Uso principal:</span>Simplificación para rutas específicas.</li><li><span class="def-term">Escalabilidad:</span>Limitada a rutas únicas.</li><li><span class="def-term">Sintaxis:</span>Más concisa para casos simples.</li></ul>',3)),n(a,{language:"javascript",code:`const app = express();

app.route('/usuario')
  .get((req, res) => {
    res.send('Obtener un usuario');
  })
  .post((req, res) => {
    res.send('Crear un usuario');
  })
  .put((req, res) => {
    res.send('Actualizar un usuario');
  })
  .delete((req, res) => {
    res.send('Eliminar un usuario');
  });`})]),e("div",P,[s[10]||(s[10]=o('<div class="card-header"><h3>Router</h3></div><p>Para evitar tener todas las rutas en el archivo principal (<code>index.js</code> o <code>app.js</code>), usamos <code>express.Router()</code> para agrupar manejadores de rutas comunes.</p><ul class="def-list"><li><span class="def-term">Propósito:</span>Modularizar y agrupar rutas relacionadas.</li><li><span class="def-term">Uso principal:</span>Estructuración y escalabilidad de la app.</li><li><span class="def-term">Escalabilidad:</span>Más escalable para APIs grandes.</li><li><span class="def-term">Sintaxis:</span>Más código, pero mejor organización.</li></ul>',3)),n(a,{language:"javascript",code:`// En routes/usuarios.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Lista de usuarios'));
router.post('/', (req, res) => res.send('Usuario creado'));

module.exports = router;

// ------------------------------------------

// En el archivo principal (index.js)
const userRoutes = require('./routes/usuarios');

// Usar el router en un prefijo específico
app.use('/api/usuarios', userRoutes);`})])])]),s[25]||(s[25]=e("hr",{class:"divider"},null,-1)),e("section",E,[s[18]||(s[18]=e("h2",{class:"section-title node"},"Middleware y Body Parsing",-1)),s[19]||(s[19]=e("p",{class:"section-desc"},[r("Los middleware son funciones que se ejecutan antes de que se ejecute una ruta. Se utilizan para realizar tareas comunes a todas las rutas, como la validación de datos, la autenticación de usuarios y el manejo de errores. Tienen acceso al objeto de solicitud ("),e("code",null,"req"),r("), al objeto de respuesta ("),e("code",null,"res"),r(") y a la siguiente función de middleware ("),e("code",null,"next"),r(").")],-1)),e("div",R,[e("div",b,[s[12]||(s[12]=e("div",{class:"card-header"},[e("h3",null,"Ejemplo de Middleware Propio")],-1)),s[13]||(s[13]=e("p",null,[r("Se ejecutan secuencialmente. "),e("strong",null,"Importante:"),r(" Siempre llamar a "),e("code",null,"next()"),r(" si no se termina la petición.")],-1)),n(a,{language:"javascript",code:`const logger = (req, res, next) => {
  console.log(\`\${req.method} a \${req.url}\`);
  next(); // Pasa el control a la siguiente función
};

app.use(logger);`})]),e("div",T,[s[14]||(s[14]=e("div",{class:"card-header"},[e("h3",null,"Middlewares Integrados (Body Parser)"),e("span",{class:"badge warning"},"Crucial")],-1)),s[15]||(s[15]=e("p",null,"Express no parsea el body de POST/PUT automáticamente. Necesitas estos middlewares nativos.",-1)),n(a,{language:"javascript",code:`// Para parsear application/json
app.use(express.json());

// Para parsear formularios (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.post('/datos', (req, res) => {
  console.log(req.body); // Ahora req.body existe
  res.send('Datos recibidos');
});`})]),e("div",y,[s[16]||(s[16]=e("div",{class:"card-header"},[e("h3",null,"Ejemplo de Manejo de Errores")],-1)),s[17]||(s[17]=e("p",null,[r("Si ocurre un error en un middleware, se debe llamar a "),e("code",null,"next(err)"),r(" para pasar el error al siguiente middleware de error.")],-1)),n(a,{language:"javascript",code:`const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
};

app.use(errorHandler);`})])])]),s[26]||(s[26]=e("hr",{class:"divider"},null,-1)),e("section",S,[s[21]||(s[21]=e("h2",{class:"section-title node"},"Express en Acción",-1)),e("div",w,[s[20]||(s[20]=e("div",{class:"card-header"},[e("h3",null,"Ejemplo Práctico")],-1)),n(a,{language:"javascript",code:`// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta GET
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Ruta con parámetro
app.get('/usuario/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`Perfil del usuario \${userId}\`);
});

// Ruta con query
app.get('/buscar', (req, res) => {
  const termino = req.query.q;
  res.send(\`Resultados para: \${termino}\`);
});

// Ruta POST
app.post('/datos', (req, res) => {
  console.log(req.body);
  res.send('Datos recibidos');
});

// Middleware de error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error en el servidor');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(\`Servidor corriendo en http://localhost:\${PORT}\`);
});`})])]),s[27]||(s[27]=e("hr",{class:"divider"},null,-1)),n(d,{references:[{techId:"nodejs",moduleId:"http",text:"Módulo HTTP Nativo"},{techId:"nodejs",moduleId:"npm",text:"NPM (Para instalar Express)"}]})]))}});export{h as default};
