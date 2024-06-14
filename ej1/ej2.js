const express = require("express")
const app = express()
const db = require('./config/database.js')
app.use(express.json())



// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman
app.post('/', (req, res) => {
    const sql = `INSERT INTO categories (name)
    values
        ('comida'),
        ('ropa');`
   
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('categories added...')
    })
})

// Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
app.post('/', (req, res) => {
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