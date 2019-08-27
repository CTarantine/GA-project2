const express = require('express')
const app = express()
const methodOverride = require('method-override')
const hbs = require('hbs')


const { homePageRouter } = require('./controllers/home.js')
const { locationRouter } = require('./controllers/location.js')
const { employeesRouter } = require('./controllers/employees.js')
const { reviewsRouter } = require('./controllers/reviews.js')


app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

/* Step 3.c
 *
 * use the `./public` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(__dirname+"/public"))


app.set('view engine', 'hbs')


// app.use('/home', homePageRouter)
app.use('/location', locationRouter)
app.use('/employees', employeesRouter)
// app.use('/reviews', reviewsRouter)


const PORT = process.env.PORT || 3000 


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
