const express = require('express');
const http = require('http');
const app = express();
const path = require("path");

// Sets up the public path
const publicPath = path.resolve(__dirname, "public");
// Sends static files from the publicPath directory
app.use(express.static(publicPath));

// Called when a request to the root is made
app.get('/', function(req, res) {
    res.end("Welcome to my homepage");
})
// Called when a request to /about is made
app.get('/about', function(req, res) {
    res.end("Welcom to the about page");
})
// Called when a request to /weather comes in
app.get('/weather', function(req, res) {
    res.end('The current weather is NICE')
})
// Grabbing data from routes
app.get('/hello/:who', function(req, res) {
    res.end(`Hello ${req.params.who}.`);
})
// If you miss the others, you'll end up here.
app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404");
})

http.createServer(app).listen(3000);