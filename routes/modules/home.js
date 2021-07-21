const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

router.get('/', (req , res) => {
    const category = req.query.category
    const filter = {}
    if(category) {
      filter.category = category
    }
    
    const categories = []
    Category.find()
      .lean()
      .then(category => categories.push(...category))
      .catch(error => console.log(error))

    Record.find()
      .lean()
      .then(records => {
        let totalAmount = 0
        records.forEach(record => totalAmount += record.amount)
        res.render('index', { category , categories , records , totalAmount })
      })
      .catch(error => console.log(error))
})


module.exports = router