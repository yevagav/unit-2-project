const mongoose = require('mongoose')

// Make A Schema
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  image: { type: String, required: false }
},
{ timestamps: true }
)

// make a model from the schema
const Article = mongoose.model('Article', articleSchema)

// export the model for use in the app
module.exports = Article
