const express = require("express")
const app = express()
const db = require('./config/database.js')
app.use(express.json())

// Crea un endpoint que muestre todos los productos
app.get('/products', (req, res) => {
    const sql = `SELECT * FROM products`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get products', result })
      })
})

// Crea un endpoint que muestre todas las categorías
app.get('/categories', (req, res) => {
    const sql = `SELECT * FROM categories`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get categories', result })
      })
})

// Crea un endpoint que muestra todos los productos con sus categorías
app.get('/all', (req, res) => {
    const sql = `SELECT products.id, products.name AS product, products.price, categories.name AS category
    FROM products
    INNER JOIN categories ON products.category_id = categories.id`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get all', result })
      })
})

// Crea un endpoint donde puedas seleccionar un producto por id
app.get('/products/id/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
})

// Crea un endpoint que muestre de forma descendente los productos.
app.get('/products', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY name DESC`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get products', result })
      })
})

// Crea un endpoint donde puedas seleccionar una categoría por id
app.get('/categories/id/:id', (req, res) => {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
})

// Crea un endpoint donde puedas buscar un producto por su nombre
app.get('/products/name/:name', (req, res) => {
    const sql = `SELECT * FROM products WHERE name = ${req.params.name}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
})