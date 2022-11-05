const Article = require('../models/article')

const dataController = {
  index(req, res, next) {
    Article.find({}, (err, foundArticles) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.articles = foundArticles
        next()
      }
    })
  },
  // Destroy
  destroy(req, res, next) {
    Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.article = deletedArticle
        next()
      }
    })
  },
  // Update
  update(req, res, next) {
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArticle) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.article = updatedArticle
        next()
      }
    })
  },
  // Create
  create(req, res, next) {
    Article.create(req.body, (err, createdArticle) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.article = createdArticle
        next()
      }
    })
  },
  // Show
  show(req, res, next) {
    Article.findById(req.params.id, (err, foundArticle) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a fruit with that ID'
        })
      } else {
        res.locals.data.article = foundArticle
        next()
      }
    })
  }
}

module.exports = dataController
