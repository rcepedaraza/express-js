const express = require('express');
const http = require('http');
const app = express();
const path = require("path");

// Sets up the public path
const publicPath = path.resolve(__dirname, "public");
console.log(__dirname);
console.log(publicPath);
// Sends static files from the publicPath directory
app.use(express.static(publicPath));

app.use(function(req, res) {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Looks like you didn't find a static file.");
})

http.createServer(app).listen(3000);