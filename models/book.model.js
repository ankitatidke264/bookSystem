const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    bookName: { type: String, require: true },
    author: {type: String, default: null},
    title: {type: String, default: null},
    description: {type: String, default: null},
    date: { type: Date, default: Date.now },
  });

const bookModel = mongoose.model('books', book);
module.exports = bookModel