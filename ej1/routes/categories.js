const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')
const db = require('../config/database.js')

router.post('/createTable', CategoryController.create)

// Crea un endpoint para crear una categoría y añade 2 categorías nuevas desde el postman
router.post('/', CategoryController.fillData)

// Crea un endpoint para actualizar una categoría.
router.put('/id/:id', CategoryController.update)

// Crea un endpoint que muestre todas las categorías
router.get('/', CategoryController.getAll)

// Crea un endpoint donde puedas seleccionar una categoría por id
router.get('/id/:id', CategoryController.getById)


module.exports = router