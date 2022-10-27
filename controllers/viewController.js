const RESOURCE_PATH = '/articles'

const viewController = {
  index (req, res, next) {
    res.render('articles/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('articles/New')
  },
  edit (req, res, next) {
    res.render('articles/Edit', res.locals.edit)
  },
  show (req, res, next) {
    res.render('articles/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const articleId = req.params.id || res.locals.data.article._id
    res.redirect(`${RESOURCE_PATH}/${articleId}`)
  }
}

module.exports = viewController
