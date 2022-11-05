const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.articles)
  },
  show (req, res, next) {
    res.json(res.locals.data.articles)
  }
}

module.exports = apiController
