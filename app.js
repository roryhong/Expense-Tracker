const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()

require('./config/mongoose')

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        toDate(date) {
            return new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000))
                .toISOString()
                .split("T")[0]
        }
    }
}))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(3000, () => {
    console.log('app is running on http://localhost:3000')
})