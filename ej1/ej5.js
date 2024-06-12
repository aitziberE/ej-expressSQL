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

// Crea un endpoint donde puedas eliminar un producto por su id
app.delete('/products/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Product deleted')
    })
})