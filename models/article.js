// Dependencies
const mongoose = require('mongoose');
// Create schema class
const Schema = mongoose.Schema;

// Define article schema
const ArticleSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true
  },
  headline: {
    type: String,
    trim: true,
    required: true
  },
  summary: {
    type: String,
    trim: true,
    required: true
  },
  byline: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  savedDate: {
    type: Date,
    default: Date.now
  }
});

// Create model with schema
const Article = mongoose.model('Article', ArticleSchema);

// Export the model
module.exports = Article;
