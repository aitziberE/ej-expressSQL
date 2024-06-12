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

// Crea endpoint de base de datos 
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE ej1DB'
   
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Database created...')
    })
})

// Crea las siguientes tablas usando Express y MySQL como hemos visto en clase:
// Tabla Products
app.get('/createTableProducts', (req, res) => {
    const sql =
      'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR(20), price int, category_id int, PRIMARY KEY(id), FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE)'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Products table created...')
    })
})
// Tabla Categories
app.get('/createTableCategories', (req, res) => {
    const sql =
      'CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(20), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Categories table created...')
    })
})
// *Recuerda que en el caso de una relación muchos a muchos necesitarás una tabla intermedia.