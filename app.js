const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT

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
app.use(express.urlencoded( { extended : true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(routes)

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})