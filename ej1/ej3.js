const express = require("express")
const app = express()
const mysql = require('mysql2')
app.use(express.json())

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'abcd*1234',
    database:  'ej1DB'
})

db.connect()

// Crea un endpoint para actualizar un producto. 
//UPDATE posts
app.put('/products/id/:id', (req, res) => {
    const newPrice = 5
    const sql = `UPDATE products SET price = '${newPrice}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Product price updated...')
    })
})

// Crea un endpoint para actualizar una categoría.
app.put('/categories/id/:id', (req, res) => {
    const newName = 'Otros'
    const sql = `UPDATE products SET nae = '${newName}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Category name updated...')
    })
})