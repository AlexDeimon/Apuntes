<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title node">Zod</h1>
      <p class="subtitle">Biblioteca de validación de esquemas TypeScript-first con inferencia de tipos estáticos.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title node">¿Qué es Zod?</h2>
      <p class="section-desc"><strong>Zod</strong> es una biblioteca de validación TypeScript-first que permite definir <em>esquemas</em> para validar datos en tiempo de ejecución y obtener el tipo TypeScript correcto de forma automática. A diferencia de otros validadores, Zod elimina la necesidad de duplicar definiciones de tipos y contratos de validación.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Características Principales</h3>
          </div>
          <ul class="def-list">
            <li><span class="def-term">Definición de Esquemas:</span> Zod permite crear esquemas complejos combinando tipos primitivos, objetos, arrays y más.</li>
            <li><span class="def-term">Validación:</span> Valida datos de manera simple con métodos como parse o safeParse.</li>
            <li><span class="def-term">Integración con TypeScript:</span> Genera automáticamente tipos TypeScript basados en los esquemas definidos.</li>
            <li><span class="def-term">Encadenamiento de Métodos:</span> Define reglas adicionales mediante métodos como min, max, regex, etc.</li>
            <li><span class="def-term">Composición de Esquemas:</span> Puede combinar esquemas para representar datos más complejos.</li>
            <li><span class="def-term">Tipado seguro:</span> ermite definir esquemas de validación de datos en TypeScript, lo que garantiza que los datos de entrada cumplan con las reglas definidas en el esquema.</li>
            <li><span class="def-term">Sintaxis simple:</span> La sintaxis de Zod es simple y fácil de entender, lo que facilita la definición de esquemas de validación de datos.</li>
            <li><span class="def-term">Extensibilidad:</span> ermite extender los esquemas de validación con reglas personalizadas, lo que brinda flexibilidad para adaptar la validación a las necesidades específicas de cada proyecto.</li>
            <li><span class="def-term">Manejo de Errores:</span> Proporciona mensajes de error claros y detallados cuando los datos no cumplen con el esquema.</li>
            <li><span class="def-term">Coerción:</span> Puede transformar automáticamente los datos de entrada para que cumplan con el esquema.</li>
            <li><span class="def-term">Conversión a JSON Schema:</span> Convierte esquemas Zod a JSON Schema con un solo método.</li>
          </ul>
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Instalación</h3>
          </div>
          <CodeBlock language="bash" code="# Con npm
npm install zod

# Con pnpm
pnpm add zod

# Con Bun
bun add zod" />
          <p>Requiere <strong>TypeScript v5.5+</strong> con <code>strict: true</code> en tu <code>tsconfig.json</code>.</p>
          <CodeBlock language="json" code='{
  "compilerOptions": {
    "strict": true
  }
}' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Tipos Primitivos</h2>
      <p class="section-desc">
        Zod expone métodos para todos los tipos primitivos de TypeScript. Cada uno devuelve un esquema que puede validar, parsear o transformar datos.
      </p>

      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Primitivos Básicos</h3>
          </div>
          <CodeBlock language="typescript" code='import { z } from "zod";

// Tipos primitivos
const schema = {
  nombre:   z.string(),
  edad:     z.number(),
  activo:   z.boolean(),
  id:       z.bigint(),
  dato:     z.undefined(),
  nulo:     z.null(),
  cualquier: z.any(),
  vacio:    z.void(),
};

// Parsear y validar
const nombre = z.string().parse("Alex");   // "Alex"
const edad   = z.number().parse(30);       // 30

// SafeParse: no lanza excepciones
const result = z.string().safeParse(42);
// result.success === false
// result.error.issues[0].message === "Expected string, received number"' />
        </div>

        <div class="card info">
          <div class="card-header">
            <h3>Validaciones de String</h3>
          </div>
          <CodeBlock language="typescript" code='const schema = z.string()
  .min(3, "Mínimo 3 caracteres")
  .max(50, "Máximo 50 caracteres")
  .length(10, "Debe tener 10 caracteres")
  .email("Email inválido")
  .url("URL inválida")
  .uuid("UUID inválido")
  .regex(/^[a-z]+$/, "Solo minúsculas")
  .startsWith("https://")
  .endsWith(".com")
  .includes("@")
  .excludes(".co")
  .trim()       // transforma: quita espacios
  .toLowerCase(); // transforma: a minúsculas

// Validaciones especiales Zod 4
const ipSchema = z.string().ip();           // IPv4 o IPv6
const ipv4Schema = z.string().ipv4();       // IPv4
const ipv6Schema = z.string().ipv6();       // IPv6
const dateTimeSchema = z.string().dateTime(); // "2024-01-15T12:30:00"
const dateStr  = z.string().date();         // "2024-01-15"
const timeStr  = z.string().time();         // "12:30:00"
const jwt      = z.string().jwt();          // Token JWT
const base64   = z.string().base64();       // Cadena base64
const hostname = z.string().hostname();     // Solo hostname (sin IP)
' />
        </div>
      </div><br><br>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Validaciones de Número</h3>
          </div>
          <CodeBlock language="typescript" code='const precio = z.number()
  .min(0, "No puede ser negativo")
  .max(10000)
  .gt(10) // Mayor que 10
  .gte(10) // Mayor o igual que 10
  .lt(100) // Menor que 100
  .lte(100) // Menor o igual que 100
  .int("Debe ser entero")
  .positive("Debe ser positivo")
  .negative("Debe ser negativo")
  .nonnegative() // Mayor o igual a 0
  .nonpositive() // Menor o igual a 0
  .multipleOf(5, "Debe ser múltiplo de 5")
  .even("Debe ser par")
  .odd("Debe ser impar")
  .finite("No se permiten Infinity")
  .nan() // No es un número
  .safe(); // Number.MIN_SAFE_INTEGER a MAX_SAFE_INTEGER

// Coerción: convierte automáticamente el tipo
const edad = z.coerce.number(); // "30" => 30
const activo = z.coerce.boolean(); // "true" => true
const fecha = z.coerce.date(); // "2024-01-15" => Date' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Literales, Enums y Uniones</h3>
          </div>
          <CodeBlock language="typescript" code='// Literal: solo acepta un valor específico
const estado = z.literal("activo");
const pi = z.literal(3.14);

// Enum nativo de Zod
const Rol = z.enum(["admin", "editor", "viewer"]);
type Rol = z.infer<typeof Rol>; // "admin" | "editor" | "viewer"
Rol.options; // ["admin", "editor", "viewer"]

// Con enum de TypeScript
enum Direccion { Norte = "N", Sur = "S" }
const dir = z.nativeEnum(Direccion);

// Union: acepta varios tipos
const idSchema = z.union([z.string(), z.number()]);
// O con el alias:
const id = z.string().or(z.number());' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Esquemas de Objetos</h2>
      <p class="section-desc"><code>z.object()</code> es el tipo más usado. Permite definir la forma exacta de un objeto, y Zod infiere el tipo TypeScript automáticamente.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Definición Básica y Campos Opcionales</h3>
          </div>
          <CodeBlock language="typescript" code='import { z } from "zod";

const UsuarioSchema = z.object({
  id:       z.string().uuid(),
  nombre:   z.string().min(2),
  email:    z.string().email(),
  edad:     z.number().int().min(18).optional(), // Campo opcional
  bio:      z.string().nullable(),               // Puede ser null
  rol:      z.enum(["admin", "user"]).default("user"), // Con valor por defecto
  creadoEn: z.coerce.date(),
});

// Inferir el tipo automáticamente
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
*/' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Métodos de Objeto</h3>
          </div>
          <CodeBlock language="typescript" code='const Base = z.object({ id: z.string(), nombre: z.string() });

// .extend(): agrega nuevas propiedades
const Extendido = Base.extend({ email: z.string().email() });

// .merge(): fusiona dos objetos
const Completo = Base.merge(z.object({ activo: z.boolean() }));

// .pick() y .omit(): seleccionan o eliminan campos
const Publico = UsuarioSchema.pick({ nombre: true, email: true });
const SinId   = UsuarioSchema.omit({ id: true });

// .partial(): hace todos los campos opcionales
const Parcial  = UsuarioSchema.partial();

// .required(): hace todos los campos requeridos
const Completo2 = Parcial.required();

// .passthrough(): permite propiedades extra (por defecto se omiten)
const Permisivo = Base.passthrough();

// .strict(): lanza error si hay propiedades extra
const Estricto = Base.strict();' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Arrays y Colecciones</h2>
      <p class="section-desc">Zod ofrece tipos para arrays, tuplas, registros (mapas tipados) y conjuntos.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Arrays y Tuplas</h3>
          </div>
          <CodeBlock language="typescript" code='// Array: arreglos de cualquier longitud con un tipo fijo
const lista = z.array(z.string());
const ids   = z.string().array(); // Sintaxis alternativa

// Con restricciones de longitud
const tags = z.array(z.string())
  .min(1, "Al menos un tag")
  .max(5, "Máximo 5 tags")
  .nonempty("La lista no puede estar vacía");

// Tupla: longitud y tipos fijos por posición
const coordenadas = z.tuple([z.number(), z.number()]);
// Puede aceptar elementos extra al final con .rest()
const conExtras = z.tuple([z.string(), z.number()]).rest(z.boolean());
// Tipo inferido: [string, number, ...boolean[]]

// Record: objeto con claves y valores tipados
const puntajes = z.record(z.string(), z.number());
// type: Record<string, number>

// Map y Set
const mapaSchema = z.map(z.string(), z.number());
const setSchema  = z.set(z.string()).min(1).max(10);' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Discriminated Union</h3>
          </div>
          <p>Cuando varios esquemas comparten un campo "discriminador", usa <code>z.discriminatedUnion()</code> para un parseo más eficiente y mejores mensajes de error.</p>
          <CodeBlock language="typescript" code='const ResultadoSchema = z.discriminatedUnion("tipo", [
  z.object({
    tipo: z.literal("exito"),
    datos: z.object({ usuario: z.string() }),
  }),
  z.object({
    tipo: z.literal("error"),
    mensaje: z.string(),
    codigo: z.number(),
  }),
]);

type Resultado = z.infer<typeof ResultadoSchema>;

// Parsear:
const res = ResultadoSchema.parse({
  tipo: "exito",
  datos: { usuario: "Alex" }
});
// TypeScript sabe que res.datos existe y res.mensaje no' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Transformaciones y Refinamientos</h2>
      <p class="section-desc">Zod no solo valida: también puede <strong>transformar</strong> los datos al parsearlos. Además, puedes agregar validaciones personalizadas con <code>.refine()</code>.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>.transform() y .preprocess()</h3>
          </div>
          <CodeBlock language="typescript" code='// .transform(): cambia el tipo del output
const fechaSchema = z.string().transform((val) => new Date(val));
type TipoFecha = z.infer<typeof fechaSchema>; // Date (¡no string!)

// .transform() con múltiples pasos
const normalizedEmail = z.string()
  .trim()
  .toLowerCase()
  .transform((val) => ({ email: val, domain: val.split("@")[1] }));

// z.preprocess(): transforma antes de validar
const stringANumero = z.preprocess(
  (val) => parseInt(String(val), 10),
  z.number().min(0)
);
stringANumero.parse("42"); // => 42 (number)

// .pipe(): encadena esquemas
const schema = z.string()
  .transform(Number)
  .pipe(z.number().min(0));' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>.refine() y .superRefine()</h3>
          </div>
          <CodeBlock language="typescript" code='// .refine(): validación personalizada
const passwordSchema = z.string()
  .min(8)
  .refine(
    (val) => /[A-Z]/.test(val),
    "Debe contener al menos una mayúscula"
  )
  .refine(
    (val) => /[0-9]/.test(val),
    { message: "Debe contener al menos un número", path: ["password"] }
  );

// .superRefine(): acceso al contexto completo (ctx)
const RegistroSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Las contraseñas no coinciden",
      path: ["confirmPassword"],
    });
  }
});' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Manejo de Errores</h2>
      <p class="section-desc">Zod lanza errores tipados cuando la validación falla. La diferencia entre <code>parse</code> y <code>safeParse</code> determina si se lanzan excepciones o se devuelven resultados de error.</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>parse vs safeParse</h3>
          </div>
          <CodeBlock language="typescript" code='const schema = z.object({ edad: z.number().min(18) });

// parse: lanza ZodError si falla
try {
  const dato = schema.parse({ edad: 15 });
} catch (e) {
  if (e instanceof z.ZodError) {
    console.log(e.issues);
    // [{
    //   code: "too_small",
    //   minimum: 18,
    //   message: "Number must be greater than or equal to 18",
    //   path: ["edad"],
    // }]
  }
}

// safeParse: nunca lanza, devuelve un resultado
const result = schema.safeParse({ edad: 15 });
if (!result.success) {
  console.log(result.error.issues);
} else {
  console.log(result.data); // Tipado correctamente
}

// safeParseAsync: para esquemas con refine async
const asyncResult = await schema.safeParseAsync(data);' />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Personalizar Mensajes de Error</h3>
          </div>
          <CodeBlock language="typescript" code='// Mensaje inline (Zod 4)
const schema = z.object({
  nombre: z.string({ error: "El nombre es requerido" }),
  edad: z.number().min(18, "Debes tener al menos 18 años"),
});

// errorMap global para internacionalización
import { z, ZodErrorMap, ZodIssueCode } from "zod";

const errorMapES: ZodErrorMap = (issue, ctx) => {
  if (issue.code === ZodIssueCode.invalid_type) {
    return { message: `Se esperaba ${issue.expected}, se recibió ${issue.received}` };
  }
  if (issue.code === ZodIssueCode.too_small) {
    return { message: `El valor mínimo permitido es ${issue.minimum}` };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(errorMapES);' />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title node">Caso de Uso: Validación en Express + Middleware</h2>
      <p class="section-desc">Un patrón muy común es usar Zod para validar los cuerpos de petición en las rutas de Express, centralizando la lógica de validación en un middleware reutilizable.</p>
      <div class="card info">
        <div class="card-header">
          <h3>Middleware de Validación con Zod</h3>
        </div>
        <CodeBlock language="typescript" code='import express from "express";
import { z, ZodError } from "zod";

// 1. Definir esquemas
const CrearUsuarioSchema = z.object({
  nombre: z.string().min(2).max(50),
  email: z.string().email(),
  edad: z.number().int().min(18),
  rol: z.enum(["admin", "user"]).default("user"),
});

type CrearUsuarioDto = z.infer<typeof CrearUsuarioSchema>;

// 2. Middleware genérico reutilizable
const validarBody = (schema: z.ZodSchema) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: "Datos inválidos",
        detalles: result.error.flatten().fieldErrors,
      });
    }
    req.body = result.data; // Sobreescribe con datos validados/transformados
    next();
  };
};

// 3. Usar en la ruta
const router = express.Router();

router.post(
  "/usuarios",
  validarBody(CrearUsuarioSchema),
  (req: express.Request<{}, {}, CrearUsuarioDto>, res) => {
    // req.body está tipado y validado
    console.log(req.body.nombre); // TypeScript sabe que nombre es string
    res.status(201).json({ mensaje: "Usuario creado", data: req.body });
  }
);' />
      </div><br><br>
      <div class="card recommended">
        <div class="card-header">
          <h3>Esquemas Avanzados: Recursivos y JSON Schema</h3>
        </div>
        <CodeBlock language="typescript" code='// Tipos recursivos con z.lazy()
type Categoria = {
  nombre: string;
  subcategorias: Categoria[];
};

const CategoriaSchema: z.ZodType<Categoria> = z.lazy(() =>
  z.object({
    nombre: z.string(),
    subcategorias: z.array(CategoriaSchema),
  })
);

// ─── Conversión a JSON Schema (Zod 4) ───────────────────────────────────────
import { z, toJsonSchema } from "zod";

const ProductoSchema = z.object({
  id: z.string().uuid(),
  nombre: z.string().min(1),
  precio: z.number().positive(),
});

const jsonSchema = toJsonSchema(ProductoSchema);
// Se puede usar con openapi, form generators, etc.
console.log(jsonSchema);
/*
{
  type: "object",
  properties: {
    id: { type: "string", format: "uuid" },
    nombre: { type: "string", minLength: 1 },
    precio: { type: "number", exclusiveMinimum: 0 }
  },
  required: ["id", "nombre", "precio"]
}
*/' />
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'nodejs', moduleId: 'express', text: 'Express.js - Framework Web' },
      { techId: 'nodejs', moduleId: 'apirest', text: 'API REST con Node.js' },
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos en TypeScript' },
      { techId: 'typescript', moduleId: 'genericos', text: 'Genéricos en TypeScript' },
    ]" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
