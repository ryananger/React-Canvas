const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/neighbrly', {useNewUrlParser: true, useUnifiedTopology: true});

var movieSchema = {
  title: String,
  description: String,
  year: Number
};

var Movie = mongoose.model('Movie', movieSchema);

module.exports = {
  Movie: Movie
};