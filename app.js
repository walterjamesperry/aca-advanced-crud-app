const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// used to add mock put and delete protocols on client (localhost)
const methodOverride = require('method-override');
// Require Routes
const posts = require('./routes/posts');

// Set up database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aca-advanced-crud-app');
// DONE - TODO: You need to write the line to connect to the mongo database

// Create our instance of our app
const app = express();

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
// DONE - TODO: Add a comment here explaining, briefly, what bodyParser is doing to our request
// The body-parser takes the request from the submitted form data and puts the info into a javascript object and assigns the object to req.body variable. This allows me to update the database documents with new or updated form data.

// must be after bodyParser to correctly read body
app.use(methodOverride('_method'));
// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set our directory for serving static files
app.use(express.static('public'));

// Registering a simple route to redirect to '/posts'
app.get('/', (req, res, next) => {
  res.redirect('/posts');
});

// DONE - TODO: Register our `posts` routes name-spaced under '/posts'
// Register our routes
app.use('/posts', posts);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
