const Article = require('../models/article')

const dataController = {
    index (req, res, next) {
        Article.find({}, (err, foundArticles) => {
            if(err) {
                res.status(400).send({
                    msg: err.message
                })
            } else{
                res.locals.data.articles = foundArticles
                next()
            }
        })
    }
}

module.exports = dataController