const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()


app.engine('hbs', exphbs({defaultLayout : 'main', extname : '.hbs'}))
app.set('view engine' , 'hbs')
require('./config/mongoose')

app.use(routes)

app.listen(3000, () => {
    console.log('app is running on http://localhost:3000')
})