const express = require('express')
const router = express.Router()
const db = require('../config/database.js')

router.get('/createTableCategories', (req, res) => {
    const sql =
      'CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(20), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Categories table created...')
    })
})

// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman
router.post('/', (req, res) => {
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

// Crea un endpoint para actualizar una categoría.
router.put('/categories/id/:id', (req, res) => {
    const newName = 'Otros'
    const sql = `UPDATE products SET nae = '${newName}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Category name updated...')
    })
})

// Crea un endpoint que muestre todas las categorías
router.get('/categories', (req, res) => {
    const sql = `SELECT * FROM categories`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send({ message: 'Get categories', result })
      })
})

// Crea un endpoint donde puedas seleccionar una categoría por id
router.get('/categories/id/:id', (req, res) => {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
})


module.exports = router