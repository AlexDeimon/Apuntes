import{C as a}from"./CodeBlock-zvggzKyJ.js";import{R as r}from"./ReferenceSection-BJi-XUeW.js";import{d as t,c as d,b as e,e as o,f as s,a as i,o as l}from"./index-CJBwFkmO.js";const c={class:"module-content"},u={class:"topic-section"},p={class:"cards-grid"},m={class:"card recommended"},v={class:"topic-section"},g={class:"cards-grid"},f={class:"card info"},z={class:"card recommended"},b={class:"cards-grid"},y={class:"card info"},S={class:"card warning"},E={class:"cards-grid"},x={class:"card info"},j={class:"topic-section"},T={class:"cards-grid"},h={class:"card info"},N={class:"card recommended"},q={class:"topic-section"},P={class:"cards-grid"},R={class:"card info"},C={class:"card recommended"},I={class:"topic-section"},A={class:"cards-grid"},D={class:"card info"},Z={class:"card info"},O={class:"cards-grid"},U={class:"card recommended"},M={class:"topic-section"},w={class:"cards-grid"},k={class:"card info"},V={class:"card recommended"},F={class:"cards-grid"},L={class:"card info"},B={class:"topic-section"},J={class:"cards-grid"},W={class:"card recommended"},G={class:"card recommended"},H={class:"cards-grid"},Q={class:"card info"},ee=t({__name:"ZodNode",setup($){return(X,n)=>(l(),d("div",c,[n[54]||(n[54]=e("div",{class:"header-section"},[e("h1",{class:"main-title node"},"Zod"),e("p",{class:"subtitle"},"Biblioteca de validación de esquemas TypeScript-first con inferencia estática de tipos para Node.js y el ecosistema moderno.")],-1)),e("section",u,[n[3]||(n[3]=e("h2",{class:"section-title node"},"¿Qué es Zod?",-1)),n[4]||(n[4]=e("p",{class:"section-desc"},[e("strong",null,"Zod"),s(" es una biblioteca de declaración y validación de esquemas TypeScript-first. Permite definir la estructura de datos una única vez en tiempo de ejecución y obtener automáticamente el tipo estático de TypeScript correspondiente, eliminando la duplicación entre contratos de validación e interfaces.")],-1)),e("div",p,[n[2]||(n[2]=i('<div class="card info"><div class="card-header"><h3>Características Principales</h3></div><ul class="def-list"><li><span class="def-term">Definición de Esquemas:</span> Permite componer esquemas complejos a partir de primitivos, objetos, uniones, tuplas y registros.</li><li><span class="def-term">Validación Segura:</span> Métodos sincrónicos y asincrónicos como parse y safeParse para procesar datos sin excepciones inesperadas.</li><li><span class="def-term">Inferencia de Tipos:</span> Deduce tipos de entrada (z.input) y salida (z.output) de forma automática con z.infer.</li><li><span class="def-term">Tipado Seguro:</span> Permite definir esquemas de validación de datos en TypeScript, garantizando que las cargas útiles cumplan las reglas del dominio.</li><li><span class="def-term">Extensibilidad:</span> Permite añadir validaciones personalizadas con .refine() y .check().</li><li><span class="def-term">Coerción y Transformación:</span> Convierte y normaliza tipos automáticamente (strings a números, fechas, booleanos).</li><li><span class="def-term">Standard Schema:</span> Compatible con la especificación ~standard para interoperabilidad nativa entre bibliotecas y frameworks.</li><li><span class="def-term">JSON Schema Nativo:</span> Genera esquemas JSON estándar mediante la función integrada z.toJSONSchema().</li></ul></div>',1)),e("div",m,[n[0]||(n[0]=e("div",{class:"card-header"},[e("h3",null,"Instalación y Prerrequisitos"),e("span",{class:"badge success"},"Zod v4")],-1)),o(a,{language:"bash",code:`# Con npm
npm install zod

# Con pnpm
pnpm add zod

# Con Bun
bun add zod`}),n[1]||(n[1]=e("p",null,[s("Requiere "),e("strong",null,"TypeScript v5.5+"),s(" con "),e("code",null,"strict: true"),s(" en tu "),e("code",null,"tsconfig.json"),s(". En entornos Node.js modernos (Node 22.18+, 24 LTS, 26), puedes ejecutar TypeScript directamente con soporte nativo (type stripping) o usando utilidades como "),e("code",null,"tsx"),s(".")],-1)),o(a,{language:"json",code:`{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  }
}`})])])]),n[55]||(n[55]=e("hr",{class:"divider"},null,-1)),e("section",v,[n[13]||(n[13]=e("h2",{class:"section-title node"},"Tipos Primitivos y Formatos",-1)),n[14]||(n[14]=e("p",{class:"section-desc"},"Zod expone funciones y constructores para representar los tipos fundamentales de JavaScript y TypeScript, así como formatos comunes validados por estándar.",-1)),e("div",g,[e("div",f,[n[5]||(n[5]=e("div",{class:"card-header"},[e("h3",null,"Primitivos Básicos")],-1)),o(a,{language:"typescript",code:`import { z } from "zod";

// Tipos primitivos básicos
const schema = {
  nombre:    z.string(),
  edad:      z.number(),
  activo:    z.boolean(),
  id:        z.bigint(),
  indefinido: z.undefined(),
  nulo:      z.null(),
  cualquiera: z.any(),
  desconocido: z.unknown(),
  vacio:     z.void(),
  noNumero:  z.nan(),
};

// Parse sincrónico: retorna el dato o lanza ZodError
const nombre = z.string().parse("Alex"); // "Alex"

// safeParse: retorna un resultado tipado sin arrojar excepciones
const result = z.string().safeParse(42);
if (!result.success) {
  // result.error contiene los issues tipados
  // Mensaje Zod 4: "Invalid input: expected string, received number"
  console.log(result.error.issues[0].message);
}`})]),e("div",z,[n[6]||(n[6]=e("div",{class:"card-header"},[e("h3",null,"Validaciones y Formatos de String (Zod 4)"),e("span",{class:"badge success"},"Top-Level API")],-1)),n[7]||(n[7]=e("p",null,"En Zod 4 los formatos de texto canónicos se invocan como funciones principales independientes, manteniendo soporte a métodos encadenados por compatibilidad.",-1)),o(a,{language:"typescript",code:`// 1. Formatos recomendados en Zod 4 (Funciones directas)
const emailSchema = z.email("Correo no válido");
const uuidSchema  = z.uuid("Identificador UUID no válido");
const urlSchema   = z.url("URL no válida");
const ipv4Schema  = z.ipv4("IPv4 inválida");
const ipv6Schema  = z.ipv6("IPv6 inválida");
const jwtSchema   = z.jwt("Token JWT inválido");
const base64      = z.base64();
const hostname    = z.hostname();

// Formatos de fecha y hora ISO
const isoDate     = z.iso.date();     // "2026-10-24"
const isoTime     = z.iso.time();     // "15:30:00"
const isoDateTime = z.iso.datetime(); // "2026-10-24T15:30:00Z"

// 2. Encadenamientos de texto generales
const usuarioNick = z.string()
  .min(3, "Mínimo 3 caracteres")
  .max(20, "Máximo 20 caracteres")
  .length(8, "Longitud exacta de 8 caracteres")
  .regex(/^[a-z0-9_]+$/, "Solo minúsculas, números y guión bajo")
  .startsWith("usr_")
  .endsWith("_app")
  .includes("node")
  // Nota: .excludes() no existe; se usa .refine() para exclusiones:
  .refine((val) => !val.endsWith(".co"), "El dominio no puede terminar en .co")
  .trim()          // Transforma quitando espacios en bordes
  .toLowerCase();  // Normaliza a minúsculas`})])]),n[15]||(n[15]=e("br",null,null,-1)),n[16]||(n[16]=e("br",null,null,-1)),e("div",b,[e("div",y,[n[8]||(n[8]=e("div",{class:"card-header"},[e("h3",null,"Validaciones de Número y Reglas Numéricas")],-1)),n[9]||(n[9]=e("p",null,[s("En Zod 4 los esquemas "),e("code",null,"z.number()"),s(" son finitos por defecto y rechazan "),e("code",null,"Infinity"),s(".")],-1)),o(a,{language:"typescript",code:`const precio = z.number()
  .min(0, "No puede ser negativo")
  .max(10000, "Valor tope superado")
  .gt(10)          // Estrictamente mayor que 10
  .gte(10)         // Mayor o igual que 10
  .lt(100)         // Estrictamente menor que 100
  .lte(100)        // Menor o igual que 100
  .int("Debe ser un número entero")
  .positive("Debe ser positivo")
  .negative("Debe ser negativo")
  .nonnegative()   // Mayor o igual a 0
  .nonpositive()   // Menor o igual a 0
  .multipleOf(5, "Debe ser múltiplo de 5")
  .safe();         // Entre Number.MIN_SAFE_INTEGER y MAX_SAFE_INTEGER

// Regla para par/impar (no existen métodos .even() o .odd()):
const esPar = z.number().multipleOf(2, "Debe ser par");
const esImpar = z.number().refine((n) => Math.abs(n % 2) === 1, "Debe ser impar");`})]),e("div",S,[n[10]||(n[10]=e("div",{class:"card-header"},[e("h3",null,"Coerción de Tipos y Alerta con Booleanos"),e("span",{class:"badge danger"},"Cuidado")],-1)),n[11]||(n[11]=e("p",null,[e("code",null,"z.coerce"),s(" transforma el valor antes de validar. Presta especial atención al tratamiento de valores booleanos procedentes de query strings o formularios.")],-1)),o(a,{language:"typescript",code:`// Coerción numérica y de fechas:
const edad = z.coerce.number(); // "30" => 30
const fecha = z.coerce.date();   // "2026-10-24" => Date

// ¡ATENCIÓN con z.coerce.boolean()!
// Aplica Boolean(val). Por lo tanto:
// z.coerce.boolean().parse("false") => ¡devuelve TRUE!
// porque cualquier string no vacío es verdadero en JS.

// Solución en Zod 4: z.stringbool() o transformación explícita
const activoSeguro = z.stringbool(); // "true" => true, "false" => false

// O con .transform():
const booleanoQuery = z.enum(["true", "false"])
  .transform((v) => v === "true");`})])]),n[17]||(n[17]=e("br",null,null,-1)),n[18]||(n[18]=e("br",null,null,-1)),e("div",E,[e("div",x,[n[12]||(n[12]=e("div",{class:"card-header"},[e("h3",null,"Literales, Enums y Uniones")],-1)),o(a,{language:"typescript",code:`// 1. Valores Literales
const soloActivo = z.literal("activo");
const pi = z.literal(3.14);

// 2. Enums nativos de Zod
const Rol = z.enum(["admin", "editor", "viewer"]);
type Rol = z.infer<typeof Rol>; // "admin" | "editor" | "viewer"

// 3. TypeScript Enums (En Zod 4, z.enum() acepta enums directamente)
enum Direccion {
  Norte = "N",
  Sur = "S",
  Este = "E",
  Oeste = "O"
}
const dirSchema = z.enum(Direccion);

// 4. Uniones
const idSchema = z.union([z.string(), z.number()]);
const aliasUnion = z.string().or(z.number()); // Sintaxis fluida alternativa`})])])]),n[56]||(n[56]=e("hr",{class:"divider"},null,-1)),e("section",j,[n[21]||(n[21]=e("h2",{class:"section-title node"},"Esquemas de Objetos",-1)),n[22]||(n[22]=e("p",{class:"section-desc"},[e("code",null,"z.object()"),s(" es el bloque de construcción fundamental para validar payloads, formularios y entidades de dominio.")],-1)),e("div",T,[e("div",h,[n[19]||(n[19]=e("div",{class:"card-header"},[e("h3",null,"Definición y Modificadores de Campos")],-1)),o(a,{language:"typescript",code:`import { z } from "zod";

const UsuarioSchema = z.object({
  id:       z.uuid(),
  nombre:   z.string().min(2),
  email:    z.email(),
  edad:     z.number().int().min(18).optional(),   // campo?: number | undefined
  bio:      z.string().nullable(),                 // string | null
  rol:      z.enum(["admin", "user"]).default("user"), // Valor por defecto
  creadoEn: z.coerce.date(),
});

// Inferencia automática del tipo de TypeScript
type Usuario = z.infer<typeof UsuarioSchema>;
/*
type Usuario = {
  id: string;
  nombre: string;
  email: string;
  edad?: number | undefined;
  bio: string | null;
  rol: "admin" | "user";
  creadoEn: Date;
}
*/`})]),e("div",N,[n[20]||(n[20]=e("div",{class:"card-header"},[e("h3",null,"Composición de Objetos y Modos en Zod 4"),e("span",{class:"badge success"},"Prácticas Modernas")],-1)),o(a,{language:"typescript",code:`const Base = z.object({
  id: z.string(),
  nombre: z.string(),
});

// .extend(): forma canónica de añadir o sobreescribir propiedades
const ConEmail = Base.extend({ email: z.email() });

// Destructuración directa del shape (rendimiento óptimo en TS)
const Fusionado = z.object({
  ...Base.shape,
  activo: z.boolean(),
});

// .pick() y .omit(): filtrado selectivo de campos
const Publico = UsuarioSchema.pick({ nombre: true, email: true });
const SinId   = UsuarioSchema.omit({ id: true });

// .partial() y .required()
const TodosOpcionales = UsuarioSchema.partial();
const TodosObligatorios = TodosOpcionales.required();

// Manejo de claves desconocidas:
// En Zod 4 se recomiendan z.strictObject y z.looseObject
const Estricto = z.strictObject({ nombre: z.string() }); // Error ante llaves extra
const Permisivo = z.looseObject({ nombre: z.string() }); // Mantiene llaves extra`})])])]),n[57]||(n[57]=e("hr",{class:"divider"},null,-1)),e("section",q,[n[26]||(n[26]=e("h2",{class:"section-title node"},"Arrays, Colecciones y Uniones Discriminadas",-1)),n[27]||(n[27]=e("p",{class:"section-desc"},"Estructuras para colecciones indexadas, pares posicionales y uniones polimórficas de alto rendimiento.",-1)),e("div",P,[e("div",R,[n[23]||(n[23]=e("div",{class:"card-header"},[e("h3",null,"Arrays, Tuplas y Registros")],-1)),o(a,{language:"typescript",code:`// Arrays con validación de cardinalidad
const tags = z.array(z.string())
  .min(1, "Debe incluir al menos un tag")
  .max(5, "Máximo 5 tags permitidos")
  .nonempty("La lista no puede entregarse vacía");

// Tuplas: elementos con longitud y tipos fijos según su posición
const punto2D = z.tuple([z.number(), z.number()]);
const tuplaConRest = z.tuple([z.string(), z.number()]).rest(z.boolean());
// Tipo inferido: [string, number, ...boolean[]]

// Records: objetos con claves y valores fuertemente tipados
const metricas = z.record(z.string(), z.number()); // Record<string, number>

// Maps y Sets
const cache = z.map(z.string(), z.object({ valor: z.any() }));
const tagsUnicos = z.set(z.string()).min(1);`})]),e("div",C,[n[24]||(n[24]=e("div",{class:"card-header"},[e("h3",null,"Unión Discriminada (Discriminated Union)"),e("span",{class:"badge success"},"Recomendado")],-1)),n[25]||(n[25]=e("p",null,[s("Al validar eventos, respuestas polimórficas o mensajes de WebSocket, "),e("code",null,"z.discriminatedUnion()"),s(" ofrece mayor rendimiento y mejores mensajes de error al indexar por la clave discriminante.")],-1)),o(a,{language:"typescript",code:`const EventoWebSocket = z.discriminatedUnion("tipo", [
  z.object({
    tipo: z.literal("mensaje_chat"),
    usuario: z.string(),
    texto: z.string().min(1),
  }),
  z.object({
    tipo: z.literal("cambio_estado"),
    usuario: z.string(),
    enLinea: z.boolean(),
  }),
  z.object({
    tipo: z.literal("error_servidor"),
    codigo: z.number().int(),
    motivo: z.string(),
  }),
]);

type EventoWS = z.infer<typeof EventoWebSocket>;

const evento = EventoWebSocket.parse({
  tipo: "mensaje_chat",
  usuario: "diego",
  texto: "¡Hola a todos!",
});

// TypeScript discrimina el tipo sin requerir type assertions:
if (evento.tipo === "mensaje_chat") {
  console.log(evento.texto); // Reconocido automáticamente
}`})])])]),n[58]||(n[58]=e("hr",{class:"divider"},null,-1)),e("section",I,[n[32]||(n[32]=e("h2",{class:"section-title node"},"Transformaciones, Refinamientos e Input vs Output",-1)),n[33]||(n[33]=e("p",{class:"section-desc"},"Zod no solo valida: normaliza, parsea y altera los tipos resultantes. Al usar transformaciones, el tipo recibido difiere del tipo entregado.",-1)),e("div",A,[e("div",D,[n[28]||(n[28]=e("div",{class:"card-header"},[e("h3",null,"Diferencia entre z.input y z.output")],-1)),n[29]||(n[29]=e("p",null,[s("Cuando un esquema incluye transformaciones, el tipo del dato que entra ("),e("code",null,"z.input"),s(") no es idéntico al que sale validado ("),e("code",null,"z.output"),s(").")],-1)),o(a,{language:"typescript",code:`const stringAFecha = z.string().transform((val) => new Date(val));

// Tipo esperado al enviar los datos a validar:
type Entrada = z.input<typeof stringAFecha>;  // string

// Tipo que entrega parse() tras la validación y transformación:
type Salida = z.output<typeof stringAFecha>;   // Date
// z.infer<T> es un alias equivalente a z.output<T>`})]),e("div",Z,[n[30]||(n[30]=e("div",{class:"card-header"},[e("h3",null,".transform() y .pipe()")],-1)),o(a,{language:"typescript",code:`// Normalización con múltiples transformaciones
const emailNormalizado = z.string()
  .trim()
  .toLowerCase()
  .transform((val) => ({
    email: val,
    dominio: val.split("@")[1],
  }));

// .pipe(): encadena la salida de un esquema a la entrada de otro
const stringANumeroPositivo = z.string()
  .transform((val) => Number(val))
  .pipe(z.number().positive("Debe ser un número mayor a cero"));`})])]),n[34]||(n[34]=e("br",null,null,-1)),n[35]||(n[35]=e("br",null,null,-1)),e("div",O,[e("div",U,[n[31]||(n[31]=e("div",{class:"card-header"},[e("h3",null,".refine() y Validaciones Contextuales")],-1)),o(a,{language:"typescript",code:`// Validación personalizada simple
const passwordSchema = z.string()
  .min(8, "Mínimo 8 caracteres")
  .refine((val) => /[A-Z]/.test(val), "Debe contener al menos una mayúscula")
  .refine((val) => /[0-9]/.test(val), "Debe contener al menos un dígito numérico");

// Comparación entre múltiples campos (ej: confirmación de contraseña)
const RegistroSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      // En Zod 4 el código se declara como string literal
      code: "custom",
      message: "Las contraseñas no coinciden",
      path: ["confirmPassword"],
    });
  }
});`})])])]),n[59]||(n[59]=e("hr",{class:"divider"},null,-1)),e("section",M,[n[39]||(n[39]=e("h2",{class:"section-title node"},"Manejo de Errores y Formateo en Zod 4",-1)),n[40]||(n[40]=e("p",{class:"section-desc"},"Estrategias para inspeccionar, extraer y formatear fallas de validación de forma legible para el usuario o la API.",-1)),e("div",w,[e("div",k,[n[36]||(n[36]=e("div",{class:"card-header"},[e("h3",null,"parse vs safeParse")],-1)),o(a,{language:"typescript",code:`const schema = z.object({ edad: z.number().min(18) });

// 1. parse(): Lanza una excepción ZodError si no coincide
try {
  schema.parse({ edad: 15 });
} catch (err) {
  if (err instanceof z.ZodError) {
    // Lista de issues con código, mensaje y ruta afectada
    console.error(err.issues);
  }
}

// 2. safeParse(): Retorna un objeto discriminado (success: true | false)
const resultado = schema.safeParse({ edad: 15 });
if (!resultado.success) {
  console.log(resultado.error.issues);
} else {
  console.log(resultado.data); // Tipado con exactitud
}

// 3. safeParseAsync(): Para esquemas con refinamientos asincrónicos
const asyncRes = await schema.safeParseAsync({ edad: 25 });`})]),e("div",V,[n[37]||(n[37]=e("div",{class:"card-header"},[e("h3",null,"Formateo de Errores en Zod 4 (Funciones Top-Level)"),e("span",{class:"badge success"},"Moderno")],-1)),o(a,{language:"typescript",code:`const schema = z.object({
  usuario: z.string().min(3),
  email: z.email(),
});

const res = schema.safeParse({ usuario: "al", email: "correo_invalido" });

if (!res.success) {
  // 1. z.flattenError(): agrupa errores por campo en fieldErrors
  const plano = z.flattenError(res.error);
  console.log(plano.fieldErrors);
  // {
  //   usuario: ["Too small: expected string length >= 3"],
  //   email: ["Invalid input: expected valid email"]
  // }

  // 2. z.treeifyError(): estructura jerárquica clara para logging
  const arbol = z.treeifyError(res.error);
  console.log(arbol);

  // 3. z.prettifyError(): representación en texto amigable para terminal
  console.log(z.prettifyError(res.error));
}`})])]),n[41]||(n[41]=e("br",null,null,-1)),n[42]||(n[42]=e("br",null,null,-1)),e("div",F,[e("div",L,[n[38]||(n[38]=e("div",{class:"card-header"},[e("h3",null,"Mensajes Personalizados y Configuración Global")],-1)),o(a,{language:"typescript",code:`// 1. Mensaje de error personalizado en el esquema
const contactoSchema = z.object({
  nombre: z.string({ error: "El nombre es obligatorio" }),
  edad: z.number().min(18, "Debes ser mayor de edad para registrarte"),
});

// 2. Configuración global en Zod 4 con z.config()
// Nota: z.setErrorMap() ha sido reemplazado en Zod 4
z.config({
  customError: (issue) => {
    if (issue.code === "invalid_type") {
      return \`Tipo de dato incorrecto recibido.\`;
    }
    return undefined; // Usa el mensaje por defecto
  },
});`})])])]),n[60]||(n[60]=e("hr",{class:"divider"},null,-1)),e("section",B,[n[50]||(n[50]=e("h2",{class:"section-title node"},"Casos de Uso Esenciales en Node.js",-1)),n[51]||(n[51]=e("p",{class:"section-desc"},"Patrones reales de producción para validar variables de entorno, APIs de Express y contratos con JSON Schema.",-1)),e("div",J,[e("div",W,[n[43]||(n[43]=e("div",{class:"card-header"},[e("h3",null,"1. Validación Segura de process.env"),e("span",{class:"badge success"},"Imprescindible")],-1)),n[44]||(n[44]=e("p",null,[s("Valida la configuración al arrancar la aplicación en Node.js para fallar de inmediato ("),e("em",null,"fail-fast"),s(") si faltan credenciales o puertos requeridos.")],-1)),o(a,{language:"typescript",code:`// src/config/env.ts
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.url("DATABASE_URL debe ser una URL válida"),
  JWT_SECRET: z.string().min(32, "JWT_SECRET debe poseer al menos 32 caracteres"),
  CORS_ORIGIN: z.string().default("*"),
});

// Parsea y valida process.env inmediatamente
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Variables de entorno inválidas:", z.flattenError(parsedEnv.error).fieldErrors);
  process.exit(1);
}

// Exporta el objeto completamente tipado
export const env = parsedEnv.data;`})]),e("div",G,[n[45]||(n[45]=e("div",{class:"card-header"},[e("h3",null,"2. Middleware Reutilizable en Express")],-1)),n[46]||(n[46]=e("p",null,[s("Centraliza la validación del cuerpo de la petición ("),e("code",null,"req.body"),s(") y reemplázalo con los datos tipados y transformados.")],-1)),o(a,{language:"typescript",code:`import express, { Request, Response, NextFunction } from "express";
import { z } from "zod";

// Esquema de creación
export const CrearUsuarioSchema = z.object({
  nombre: z.string().min(2).max(50),
  email: z.email(),
  edad: z.number().int().min(18),
  rol: z.enum(["admin", "user"]).default("user"),
});

export type CrearUsuarioDto = z.infer<typeof CrearUsuarioSchema>;

// Middleware genérico tipado con z.ZodTypeAny
export const validarBody = <T extends z.ZodTypeAny>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: "Cuerpo de solicitud inválido",
        detalles: z.flattenError(result.error).fieldErrors,
      });
    }
    // Reasigna req.body con los datos parseados/transformados
    req.body = result.data;
    next();
  };
};

// Uso en las rutas
const app = express();
app.use(express.json());

app.post("/api/usuarios", validarBody(CrearUsuarioSchema), (req: Request<{}, {}, CrearUsuarioDto>, res: Response) => {
  // req.body cuenta con autocompletado y validación de tipos
  res.status(201).json({ mensaje: "Usuario creado", usuario: req.body });
});`})])]),n[52]||(n[52]=e("br",null,null,-1)),n[53]||(n[53]=e("br",null,null,-1)),e("div",H,[e("div",Q,[n[47]||(n[47]=e("div",{class:"card-header"},[e("h3",null,"3. Conversión a JSON Schema (z.toJSONSchema)")],-1)),n[48]||(n[48]=e("p",null,[s("Zod 4 integra la función "),e("code",null,"z.toJSONSchema()"),s(" directamente en el núcleo para generar contratos compatibles con Swagger, OpenAPI y generadores de interfaces.")],-1)),o(a,{language:"typescript",code:`import { z } from "zod";

const ProductoSchema = z.object({
  id: z.uuid(),
  nombre: z.string().min(1),
  precio: z.number().positive(),
  enStock: z.boolean().default(true),
});

// Conversión nativa a especificación JSON Schema estándar
const jsonSchema = z.toJSONSchema(ProductoSchema);
console.log(JSON.stringify(jsonSchema, null, 2));
/*
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "id": { "type": "string", "format": "uuid" },
    "nombre": { "type": "string", "minLength": 1 },
    "precio": { "type": "number", "exclusiveMinimum": 0 },
    "enStock": { "type": "boolean", "default": true }
  },
  "required": ["id", "nombre", "precio"]
}
*/`})]),n[49]||(n[49]=i('<div class="card info"><div class="card-header"><h3>4. Standard Schema y Ecosistema Moderno</h3></div><p>Zod 4 adopta la especificación comunitaria <strong>Standard Schema</strong> (<code>~standard</code>). Esto permite que librerías como <code>tRPC</code>, <code>Hono</code> y <code>React Hook Form</code> consuman esquemas de Zod, Valibot o ArkType mediante una interfaz universal y sin adaptadores.</p><ul class="def-list"><li><span class="def-term">Zod:</span> Ideal para aplicaciones con TypeScript estricto, documentación rica y ecosistema maduro.</li><li><span class="def-term">Zod Mini:</span> Subconjunto ligero de Zod optimizado para Edge Runtimes y bundles mínimos.</li><li><span class="def-term">Valibot / ArkType:</span> Alternativas que también implementan Standard Schema con distintos balances entre tamaño de bundle y velocidad de compilación.</li></ul></div>',1))])]),n[61]||(n[61]=e("hr",{class:"divider"},null,-1)),o(r,{references:[{techId:"nodejs",moduleId:"envvars",text:"Variables de Entorno en Node.js"},{techId:"nodejs",moduleId:"express",text:"Express.js - Framework Web"},{techId:"nodejs",moduleId:"apirest",text:"API REST con Node.js"},{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos en TypeScript"},{techId:"typescript",moduleId:"genericos",text:"Genéricos en TypeScript"}]})]))}});export{ee as default};
