const RESOURCE_PATH = '/articles'

const viewController = {
    index (req, res, next) {
        res.send('hello')
    }
}

module.exports = viewController;