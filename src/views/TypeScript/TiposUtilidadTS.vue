<template>
  <div class="module-content">
    <div class="header-section">
      <h1 class="main-title typescript">Tipos de Utilidad (Utility Types)</h1>
      <p class="subtitle">Herramientas nativas para transformar y manipular tipos existentes sin duplicar código.</p>
    </div>
    <section class="topic-section">
      <h2 class="section-title typescript">¿Qué son los Utility Types?</h2>
      <p class="section-desc">TypeScript proporciona una serie de tipos globales que nos ayudan a facilitar las transformaciones de tipos comunes. En lugar de crear múltiples interfaces para cada pequeña variación de tus datos, puedes usar estos tipos para derivar nuevas estructuras basadas en las existentes de manera rápida y segura.</p>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Modificadores de Propiedades</h2>
      <p class="section-desc">Transforman el estado de las propiedades de una interfaz (opcional, requerido, inmutable).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Partial&lt;Type&gt;</h3>
          </div>
          <p>Convierte todas las propiedades de un tipo en <strong>opcionales</strong>. Es extremadamente útil para funciones de actualización (update/patch).</p>
          <CodeBlock language="typescript" code="interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

// Para actualizar un usuario, no necesitamos todos los campos
function actualizarUsuario(usuario: Partial<Usuario>) {
  // ...
}

actualizarUsuario({ nombre: 'Alex' }); // Valido
actualizarUsuario({ email: 'alex@mail.com' }); // Valido" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Required&lt;Type&gt;</h3>
          </div>
          <p>Es el opuesto a <code>Partial</code>. Convierte todas las propiedades en <strong>requeridas</strong>, incluso si estaban marcadas como opcionales.</p>
          <CodeBlock language="typescript" code="interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 }; // Valido

// Obliga a proveer 'a' y 'b'
const obj2: Required<Props> = { a: 5, b: 'Texto' };" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Readonly&lt;Type&gt;</h3>
          </div>
          <p>Convierte todas las propiedades de un tipo en <strong>solo lectura</strong> (no se pueden reasignar).</p>
          <CodeBlock language="typescript" code="interface Todo {
  titulo: string;
}

const tarea: Readonly<Todo> = {
  titulo: 'Aprender TS'
};

// tarea.titulo = 'Otra cosa'; // Error: Cannot assign to 'titulo'" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Extracción y Exclusión de Propiedades</h2>
      <p class="section-desc">Permiten crear nuevos tipos seleccionando u omitiendo propiedades específicas de una interfaz grande.</p>
      <div class="cards-grid">
        <div class="card recommended">
          <div class="card-header">
            <h3>Pick&lt;Type, Keys&gt;</h3>
            <span class="badge success">Muy usado</span>
          </div>
          <p>Crea un tipo <strong>escogiendo</strong> un conjunto de propiedades específicas de otro tipo.</p>
          <CodeBlock language="typescript" code="interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

// Solo nos interesa el nombre y precio
type ProductoPreview = Pick<Producto, 'nombre' | 'precio'>;

const preview: ProductoPreview = {
  nombre: 'Laptop',
  precio: 1500
};" />
        </div>
        <div class="card recommended">
          <div class="card-header">
            <h3>Omit&lt;Type, Keys&gt;</h3>
            <span class="badge success">Muy usado</span>
          </div>
          <p>Crea un tipo <strong>omitiendo</strong> ciertas propiedades de otro tipo (lo inverso a Pick).</p>
          <CodeBlock language="typescript" code="interface Tarea {
  id: string;
  titulo: string;
  completada: boolean;
  createdAt: Date;
}

// Un usuario no debería enviar el ID ni createdAt al crear
type CrearTareaDTO = Omit<Tarea, 'id' | 'createdAt'>;

const nuevaTarea: CrearTareaDTO = {
  titulo: 'Estudiar Utility Types',
  completada: false
};" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Diccionarios y Registros</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Record&lt;Keys, Type&gt;</h3>
          </div>
          <p>Construye un tipo de objeto cuyas propiedades son <code>Keys</code> y sus valores son de tipo <code>Type</code>. Es excelente para crear mapas o diccionarios.</p>
          <CodeBlock language="typescript" code="type Rol = 'admin' | 'usuario' | 'invitado';

interface Permisos {
  leer: boolean;
  escribir: boolean;
}

// Crea un diccionario que obliga a definir permisos para cada Rol
const permisosPorRol: Record<Rol, Permisos> = {
  admin: { leer: true, escribir: true },
  usuario: { leer: true, escribir: false },
  invitado: { leer: false, escribir: false }
};" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Inferencia y Funciones</h2>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>ReturnType&lt;Type&gt;</h3>
          </div>
          <p>Obtiene el tipo de dato que retorna una función. Muy útil cuando usas funciones de librerías externas o no quieres escribir el tipo manualmente.</p>
          <CodeBlock language="typescript" code="function crearUsuario(nombre: string, edad: number) {
  return { nombre, edad, id: Math.random() };
}

// Extraemos el tipo del valor retornado
type UsuarioCreado = ReturnType<typeof crearUsuario>;

const user: UsuarioCreado = {
  nombre: 'Alex',
  edad: 25,
  id: 0.123
};" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <section class="topic-section">
      <h2 class="section-title typescript">Manipulación de Uniones (Union Types)</h2>
      <p class="section-desc">Se aplican directamente sobre uniones (<code>type A = 'X' | 'Y' | 'Z'</code>).</p>
      <div class="cards-grid">
        <div class="card info">
          <div class="card-header">
            <h3>Exclude&lt;UnionType, ExcludedMembers&gt;</h3>
          </div>
          <p>Excluye de una unión aquellos tipos que sean asignables a <code>ExcludedMembers</code>.</p>
          <CodeBlock language="typescript" code="type Metodos = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Quitamos POST y PUT
type MetodosSeguros = Exclude<Metodos, 'POST' | 'PUT'>;
// Resultado: 'GET' | 'DELETE'" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>Extract&lt;Type, Union&gt;</h3>
          </div>
          <p>Extrae de <code>Type</code> los tipos que sean asignables a <code>Union</code> (lo inverso a Exclude).</p>
          <CodeBlock language="typescript" code="type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// Resultado: 'a'

type T1 = Extract<string | number | boolean, boolean | string>;
// Resultado: string | boolean" />
        </div>
        <div class="card info">
          <div class="card-header">
            <h3>NonNullable&lt;Type&gt;</h3>
          </div>
          <p>Elimina <code>null</code> y <code>undefined</code> de un tipo.</p>
          <CodeBlock language="typescript" code="type Valor = string | number | null | undefined;

type ValorSeguro = NonNullable<Valor>;
// Resultado: string | number" />
        </div>
      </div>
    </section>
    <hr class="divider" />
    <ReferenceSection :references="[
      { techId: 'typescript', moduleId: 'tipos', text: 'Tipos de Datos' },
      { techId: 'typescript', moduleId: 'genericos', text: 'Genéricos' }
    ]" />
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ReferenceSection from '@/components/ReferenceSection.vue'
</script>
