const express = require('express');
const app = express();

app.use(express.json()); //* Middleware para manejar JSON

//* Simulación de una base de datos
let productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, marca: 'HP' },
    { id: 2, nombre: 'Teclado', precio: 50, marca: 'Logitech' },
    { id: 3, nombre: 'Mouse', precio: 25, marca: 'Genius' },
    { id: 4, nombre: 'Monitor', precio: 300, marca: 'Samsung' },
    { id: 5, nombre: 'Audífonos', precio: 30, marca: 'Sony' },
    { id: 6, nombre: 'Tablet', precio: 500, marca: 'Apple' },
    { id: 7, nombre: 'Smartphone', precio: 700, marca: 'Samsung' },
    { id: 8, nombre: 'Smartwatch', precio: 200, marca: 'Samsung' },
    { id: 9, nombre: 'Impresora', precio: 150, marca: 'HP' },
    { id: 10, nombre: 'Bocinas', precio: 75, marca: 'Sony' }
];

//* Obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

//* Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).send('Producto no encontrado');
  res.json(producto);
});

//* filtrar productos por marca usando query params 
app.get('/productos/filtrar', (req, res) => {
  const marca = req.query.marca;
  const productosFiltrados = productos.filter(p => p.marca === marca);
  res.json(productosFiltrados);
});
//? http://localhost:3000/productos/filtrar?marca=HP

//* Crear un nuevo producto
app.post('/productos', (req, res) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

//* Actualizar un producto
app.put('/productos/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).send('Producto no encontrado');

  producto.nombre = req.body.nombre;
  producto.precio = req.body.precio;
  res.json(producto);
});

//* Eliminar un producto
app.delete('/productos/:id', (req, res) => {
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Producto no encontrado');

  productos.splice(index, 1);
  res.status(204).send(); //* 204: Sin contenido
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
