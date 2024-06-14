const express = require("express")
const app = express()
const db = require('./config/database.js')
app.use(express.json())

// Crea un endpoint donde puedas eliminar un producto por su id
app.delete('/products/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Product deleted')
    })
})