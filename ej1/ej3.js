const express = require("express")
const app = express()
const db = require('./config/database.js')
app.use(express.json())

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