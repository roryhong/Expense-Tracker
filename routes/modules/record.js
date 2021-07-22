const express = require('express')
const router = express.Router()
const Record = require('../../models/Record')
const Category = require('../../models/Category')

const categories = []
Category.find()
  .lean()
  .then(category => categories.push(...category))
  .catch(error => console.log(error))

//create
router.get('/new', (req , res) => {
    res.render('new' , { categories })
})

router.post('/' , (req, res) => {
    Record.create(req.body)
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
})


//edit
router.get('/:_id/edit', (req , res) => {
    const id = req.params._id
    return Record.findById(id)
      .lean()
      .then(record => res.render('edit' , { categories , record }))
      .catch(error => console.log(error))
})

router.put('/:id' , (req , res) => {
    const id = req.params.id
    const { name , category , date , amount } = req.body
    return Record.findById(id)
      .then(records => {
          records.name = name
          records.category = category
          records.date = date
          records.amount = amount
          return records.save()
      })
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
})


//delete
router.delete('/:id', (req , res) => {
    const id = req.params.id
    return Record.findById(id)
      .then(record => record.remove())
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
})

module.exports = router