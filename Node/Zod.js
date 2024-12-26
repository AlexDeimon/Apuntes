//* Definir y validar un esquema
const z = require('zod');

//* Definir un esquema
const userSchema = z.object({
  name: z.string(),       //? 'name' debe ser un string
  age: z.number().int().positive(),        //? 'age' debe ser un número entero positivo
  email: z.string().email(), //? 'email' debe ser un string con formato de correo electrónico
});

//* Validar datos
const userData = {
  name: "Diego",
  age: 25,
  email: "diego@mail.com"
};

try {
  const validUser = userSchema.parse(userData); //? Valida los datos
  console.log("Datos válidos:", validUser);
} catch (e) {
  console.error("Errores de validación:", e.errors);
}

//* Validación Segura con safeParse
const result = userSchema.safeParse(userData);

if (result.success) {
  console.log("Datos válidos:", result.data);
} else {
  console.log("Errores de validación:", result.error.errors);
}

//* reglas de validación personalizadas con refine
const passwordSchema = z.string().refine((password) => password.length >= 8, {
    message: "La contraseña debe tener al menos 8 caracteres",
});
  
try {
    passwordSchema.parse("12345"); //! Error
} catch (e) {
    console.error(e.errors);
}

try {
    passwordSchema.parse("12345678"); //* Correcto
} catch (e) {
    console.error(e.errors);
}

//* tipos primitivos
const stringSchema = z.string();
const numberSchema = z.number();
const bigintSchema = z.bigint();
const booleanSchema = z.boolean();
const dateSchema = z.date();
const symbolSchema = z.symbol();

//* tipos vacios
const undefinedSchema = z.undefined();
const nullSchema = z.null();
const voidSchema = z.void();

//* cualquier tipo
const anySchema = z.any();

//* tipo desconocido
const unknownSchema = z.unknown();

//* tipos no permitidos
const neverSchema = z.never();

//* Strings y validaciones
const stringSchema = z.string();

stringSchema.max(5); //? Longitud máxima
stringSchema.min(5); //? Longitud mínima
stringSchema.length(5); //? Longitud exacta
stringSchema.email(); //? Formato de correo electrónico
stringSchema.url(); //? Formato de URL
stringSchema.uuid(); //? Formato UUID
stringSchema.regex(/^[0-9]+$/); //? Expresión regular
stringSchema.includes("hola"); //? Incluye una cadena
stringSchema.excludes("adios"); //? Excluye una cadena
stringSchema.startsWith("hola"); //? Empieza con una cadena
stringSchema.endsWith("mundo"); //? Termina con una cadena
stringSchema.datetime(); //? Formato de fecha y hora ISO 8601 (YYYY-MM-DDTHH:MM:SSZ)
stringSchema.date(); //? Formato de fecha ISO 8601 (YYYY-MM-DD)
stringSchema.time(); //? Formato de hora ISO 8601 (HH:MM:SS)
stringSchema.ip(); //? Formato de dirección IP (IPv4 o IPv6)
stringSchema.ipv4(); //? Formato de dirección IPv4
stringSchema.ipv6(); //? Formato de dirección IPv6
stringSchema.hostname(); //? Formato de nombre de host
stringSchema.duration(); //? Formato de duración ISO 8601 (PnYnMnDTnHnMnS)
stringSchema.enum(["hola", "mundo"]); //? Valores permitidos

//* transformaciones
stringSchema.trim(); //? Elimina espacios en blanco al principio y al final
stringSchema.lowercase(); //? Convierte a minúsculas
stringSchema.uppercase(); //? Convierte a mayúsculas
stringSchema.capitalize(); //? Convierte la primera letra a mayúscula
stringSchema.truncate(5); //? Trunca a una longitud máxima
stringSchema.strip(); //? Elimina espacios en blanco
stringSchema.replace("hola", "adios"); //? Reemplaza una cadena
stringSchema.padStart(5, "0"); //? Añade caracteres al principio
stringSchema.padEnd(5, "0"); //? Añade caracteres al final
stringSchema.toDate(); //? Convierte a fecha
stringSchema.toTime(); //? Convierte a hora
stringSchema.toNumber(); //? Convierte a número
stringSchema.toBigInt(); //? Convierte a bigint
stringSchema.toBoolean(); //? Convierte a boolean
stringSchema.toJSON(); //? Convierte a JSON
stringSchema.toXML(); //? Convierte a XML

//* validaciones con mensajes de error personalizados
stringSchema.max(5, { message: "La longitud máxima es de 5 caracteres" });
stringSchema.min(5. { message: "La longitud mínima es de 5 caracteres" });
stringSchema.length(5. { message: "La longitud debe ser de 5 caracteres" });
stringSchema.email({ message: "El correo electrónico no es válido" });
stringSchema.url({ message: "La URL no es válida" });
stringSchema.uuid({ message: "El UUID no es válido" });
stringSchema.regex(/^[0-9]+$/, { message: "Solo se permiten números" }); 
stringSchema.includes("hola", { message: "Debe incluir 'hola'" }); 
stringSchema.excludes("adios", { message: "No debe incluir 'adios'" }); 
stringSchema.startsWith("hola", { message: "Debe empezar con 'hola'" }); 
stringSchema.endsWith("mundo", { message: "Debe terminar con 'mundo'" }); 
stringSchema.datetime({ message: "La fecha y hora no son válidas" }); 
stringSchema.date({ message: "La fecha no es válida" }); 
stringSchema.time({ message: "La hora no es válida" }); 
stringSchema.ip({ message: "La dirección IP no es válida" });
stringSchema.ipv4({ message: "La dirección IPv4 no es válida" }); 
stringSchema.ipv6({ message: "La dirección IPv6 no es válida" }); 
stringSchema.hostname({ message: "El nombre de host no es válido" }); 
stringSchema.duration({ message: "La duración no es válida" }); 
stringSchema.enum(["hola", "mundo"], { message: "El valor no es válido" }); 

//* Números y validaciones
const numberSchema = z.number();
numberSchema.max(5); //? Valor máximo
numberSchema.min(5); //? Valor mínimo
numberSchema.gt(5); //? Mayor que
numberSchema.gte(5); //? Mayor o igual que
numberSchema.lt(5); //? Menor que
numberSchema.lte(5); //? Menor o igual que
numberSchema.integer(); //? Número entero
numberSchema.positive(); //? Número positivo
numberSchema.negative(); //? Número negativo
numberSchema.nonpositive(); //? Número no positivo
numberSchema.nonnegative(); //? Número no negativo
numberSchema.multipleOf(5); //? Múltiplo de
numberSchema.even(); //? Número par
numberSchema.odd(); //? Número impar
numberSchema.finite(); //? Número finito
numberSchema.infinite(); //? Número infinito
numberSchema.nan(); //? No es un número
numberSchema.enum([1, 2, 3]); //? Valores permitidos
numberSchema.safe(); //? Número seguro

//* validaciones con mensajes de error personalizados
numberSchema.max(5, { message: "El valor máximo es 5" });
numberSchema.min(5, { message: "El valor mínimo es 5" });
numberSchema.gt(5, { message: "Debe ser mayor que 5" });
numberSchema.gte(5, { message: "Debe ser mayor o igual que 5" });
numberSchema.lt(5, { message: "Debe ser menor que 5" });
numberSchema.lte(5, { message: "Debe ser menor o igual que 5" });
numberSchema.integer({ message: "Debe ser un número entero" });
numberSchema.positive({ message: "Debe ser un número positivo" });
numberSchema.negative({ message: "Debe ser un número negativo" });
numberSchema.nonpositive({ message: "No debe ser un número positivo" });
numberSchema.nonnegative({ message: "No debe ser un número negativo" });
numberSchema.multipleOf(5, { message: "Debe ser un múltiplo de 5" });
numberSchema.even({ message: "Debe ser un número par" });
numberSchema.odd({ message: "Debe ser un número impar" });
numberSchema.finite({ message: "Debe ser un número finito" });
numberSchema.infinite({ message: "Debe ser un número infinito" });
numberSchema.nan({ message: "Es un número" });
numberSchema.enum([1, 2, 3], { message: "El valor no es válido" });
numberSchema.safe({ message: "El número no es seguro" });

//* mensajes de error en creación de esquemas
const edad = z.number({
    required_error: "La edad es obligatoria",
    invalid_type_error: "La edad debe ser un número",
});

const usuario = z.object({
    nombre: z.string(),
    edad,
});

try {
    usuario.parse({ nombre: "Diego" }); //! Error
} catch (e) {
    console.error(e.errors);
}

try {
    usuario.parse({ nombre: "Diego", edad: "25" }); //! Error
} catch (e) {
    console.error(e.errors);
}

try {
    usuario.parse({ nombre: "Diego", edad: 25 }); //* Correcto
} catch (e) {
    console.error(e.errors);
}   

//* objetos
const userSchema = z.object({
    nombre: z.string(),
    edad: z.number(),
    email: z.string().email(),
});

type User = z.infer<typeof userSchema>; //? Tipo inferido

const usuario: User = {
    nombre: "Diego",
    edad: 25,
    email: "diego@mqil.com"
};

