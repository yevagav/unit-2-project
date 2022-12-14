require('dotenv').config()
// Require Models
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const app = express()
const PORT = process.env.PORT || 3000

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
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: true,
    resave: false
  })
)

/* End Config */

/* Start Middleware */
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))
app.use(express.static('public'))

// setting up localhost:3000/ as the entry for my routes
app.use('/articles', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))

app.get('/', (req, res) => {
  res.render('Home.jsx')
})

/* End Middleware */

// Tell the app to listen to a port
app.listen(PORT, () => {
  console.log('Listening on Port', PORT)
})
