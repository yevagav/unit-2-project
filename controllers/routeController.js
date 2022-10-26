//start our router
const express = require('express')
const router = express.Router()

const dataController = require('./dataController')
const viewController = require('./viewController')

//Routes
//Index
router.get('/',dataController.index, viewController.index)
//New
router.get('/new', viewController.newView)
//Delete
//Update
//Create
//Edit
//Show

module.exports = router;