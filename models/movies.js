const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    date: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie