const express = require('express')
const router = express.Router()
const db = require('../config/database.js')

router.post('/', (req, res) => {
 let post = { title: req.body.title, body: req.body.body }
 let sql = 'INSERT INTO posts SET ?'
 db.query(sql, post, (err, result) => {
   if (err) throw err
   console.log(result)
   res.send('Post added...')
 })
})


module.exports = router