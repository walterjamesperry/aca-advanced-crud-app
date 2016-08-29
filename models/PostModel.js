const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// DONE - TODO: Write your PostModel schema here
// DONE - Hint: Don't for get to export it!

const postSchema = new Schema({
  'author': String,
  'date'  : String,
  'text'  : String
});

module.exports = mongoose.model('Post', postSchema);
