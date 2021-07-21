const db = require('../../config/mongoose')
const Category = require('../Category')

const categoryData =  [
    {
        categoryName: '家居物業',
        categoryIcon: 'fas fa-utensils'
    },
    {
        categoryName: '交通出行',
        categoryIcon: 'fas fa-shuttle-van'
    },
    {
        categoryName: '休閒娛樂',
        categoryIcon: 'fas fa-grin-beam'
    },
    {
        categoryName: '餐飲食品',
        categoryIcon: 'fas fa-utensils'
    },
    {
        categoryName: '其他',
        categoryIcon: 'fas fa-pen'
    }
]

db.once('open' , () => {
    Category.create(categoryData)
      .then(() => {
        console.log('Add category seeder')
        return db.close()
      })
      .catch(err => console.error(err))
})