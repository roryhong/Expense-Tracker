const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    data : {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('expense', expenseSchema)