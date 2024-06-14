const express = require("express")
const app = express()
const db = require('./config/database.js')

app.use(express.json())

app.use('/products', require('./routes/products'))
app.use('/categories', require('./routes/categories'))

// Crea endpoint de base de datos 
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE ej1DB'
   
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Database created...')
    })
})