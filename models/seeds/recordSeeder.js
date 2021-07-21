const db = require('../../config/mongoose')
const Category = require('../Category')
const Record = require('../Record')

const RecordData = [
    {
        name: '早餐',
        category: '餐飲食品',
        date: '2021/7/1',
        amount: 100
    },
    {
        name: '悠遊卡加值',
        category: '交通出行',
        date: '2021/6/29',
        amount: 500
    },
    {
        name: '看電影',
        category: '休閒娛樂',
        date: '2021/6/28',
        amount: 200
    },
]

db.once('open', () => {
    const categoryList = {}
    Category.find()
      .lean()
      .then(categories => {
        categories.forEach(category => {
            categoryList[category.categoryName] = category._id
        })
      })

    Record.create(RecordData)
      .then(() => {
        console.log('Add record seeder!')
        return db.close()
      })
      .catch(err => console.error(err))
})