const db = require('../config/database.js')

const CategoryController = {

    create(req, res) {
        const sql =
        'CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(20), PRIMARY KEY(id))'
        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('Categories table created...')
        })
    },

    fillData(req,res){
        const sql = `INSERT INTO categories (name)
        values
            ('comida'),
            ('ropa');`
    
        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('categories added...')
        })
    },

    update(req,res){
        const newName = 'Otros'
        const sql = `UPDATE products SET nae = '${newName}' WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Category name updated...')
        })
    },

    getAll(req,res){
        const sql = `SELECT * FROM categories`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Get categories', result })
        })
    },

    getById(req,res){
        const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    }
}

module.exports = CategoryController