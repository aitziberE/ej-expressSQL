const express = require('express')
const router = express.Router()
const db = require('../config/database.js')

/* router.post('/', (req, res) => {
 let post = { title: req.body.title, body: req.body.body }
 let sql = 'INSERT INTO posts SET ?'
 db.query(sql, post, (err, result) => {
   if (err) throw err
   console.log(result)
   res.send('Post added...')
 })
}) */

router.get('/createTableProducts', (req, res) => {
    const sql =
      'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR(20), price int, category_id int, PRIMARY KEY(id), FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE)'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Products table created...')
    })
})

// Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
router.post('/', (req, res) => {
    const sql = `INSERT INTO products (name, price, category_id)
    values
        ('aceituna', 1, 1),
        ('chaqueta', 100, 2);`
   
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('products added...')
    })
})

// Crea un endpoint para actualizar un producto. 
router.put('/products/id/:id', (req, res) => {
    const newPrice = 5
    const sql = `UPDATE products SET price = '${newPrice}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Product price updated...')
    })
})

// Crea un endpoint que muestre todos los productos
router.get('/products', (req, res) => {
    const sql = `SELECT * FROM products`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get products', result })
      })
})

// Crea un endpoint donde puedas seleccionar un producto por id
router.get('/products/id/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
})

// Crea un endpoint que muestre de forma descendente los productos.
router.get('/products', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY name DESC`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get products', result })
      })
})

// Crea un endpoint donde puedas buscar un producto por su nombre
router.get('/products/name/:name', (req, res) => {
    const sql = `SELECT * FROM products WHERE name = ${req.params.name}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
})

// Crea un endpoint donde puedas eliminar un producto por su id
router.delete('/products/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Product deleted')
    })
})

//??????????
// Crea un endpoint que muestra todos los productos con sus categorías
router.get('/all', (req, res) => {
    const sql = `SELECT products.id, products.name AS product, products.price, categories.name AS category
    FROM products
    INNER JOIN categories ON products.category_id = categories.id`

    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get all', result })
      })
})


module.exports = router