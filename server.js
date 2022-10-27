require('dotenv').config()
// Require Models
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

// connect to database
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to the MongoDB Atlas')
})

// Configure the app
/* Start The Config */
// Initialize View Enging
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.urlencoded({ extended: true }))

/* End Config */

/* Start Middleware */
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))
app.use(express.static('public'))

// setting up localhost:3000/ as the entry for my routes
app.use('/articles', require('./controllers/routeController'))

/* End Middleware */

// Tell the app to listen to a port
app.listen(PORT, () => {
  console.log('Listening on Port', PORT)
})
