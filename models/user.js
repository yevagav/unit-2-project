const mongoose = require('mongoose')

// Define Model

// pull Schema and model from mongoose
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true }
})

// make a User model
const User = model('User', userSchema)

module.exports = User
