const db = require('../config/database.js')

const ProductController = {

    create(req, res) {
        const sql =
        'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR(20), price int, category_id int, PRIMARY KEY(id), FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE)'
        db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('Products table created...')
        })
    },

    fillData(req,res){
        const sql = `INSERT INTO products (name, price, category_id)
        values
            ('aceituna', 1, 1),
            ('chaqueta', 100, 2);`
    
        db.query(sql, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('products added...')
        })
    },

    update(req,res){
        const newPrice = 5
        const sql = `UPDATE products SET price = '${newPrice}' WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
        if (err) throw err
        res.send('Product price updated...')
        })
    },

    getAll(req,res){
        const sql = `SELECT * FROM products`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Get products', result })
        })
    },

    getAllDesc(req,res){
        const sql = `SELECT * FROM products ORDER BY name DESC`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send({ message: 'Get products', result })
        })
    },

    getById(req,res){
        const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    getByName(req,res){
        const sql = `SELECT * FROM products WHERE name = ${req.params.name}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },

    deleteById(req,res){
        const sql = `DELETE FROM products WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.send('Product deleted')
        })
    }
}

module.exports = ProductController