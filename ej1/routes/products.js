const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

const db = require('../config/database.js')

//Creaa tabla productos
router.post('/createTable', ProductController.create)

// Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
router.post('/', ProductController.fillData)

// Crea un endpoint para actualizar un producto. 
router.put('/id/:id', ProductController.update)

// Crea un endpoint que muestre todos los productos
router.get('/', ProductController.getAll)

// Crea un endpoint donde puedas seleccionar un producto por id
router.get('/id/:id', ProductController.getById)

// Crea un endpoint que muestre de forma descendente los productos.
router.get('/', ProductController.getAllDesc)

// Crea un endpoint donde puedas buscar un producto por su nombre
router.get('/name/:name', ProductController.getByName)

// Crea un endpoint donde puedas eliminar un producto por su id
router.delete('/id/:id', ProductController.deleteById)

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