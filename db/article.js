const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    title: String,
    publication: String,
    date: String,
    excerpt: String,
    url: String,
  }
  // {
  //   timestamps: {},
  // }
);

module.exports = articleSchema;

/*
TODO:
- Make a production database (easy)
- Make a separate image store for production on s3 (medium)
- Add timestamps
*/
