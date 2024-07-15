// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the public directory for static files
app.use(express.static('public'));

// Use the comments.js file for routes
app.use(require('./comments.js'));

// Start the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});