const express = require('express');
const req = require('express/lib/request');
const http = require('http');
const app = express();
const morgan = require("morgan");

app.use(morgan("short"));

app.use(function(req, res, next) {
    console.log(`In comes a ${req.method} to ${req.url}`);
    next();
})


app.use(function (req, res, next) {
    let minute = (new Date()).getMinutes();
    console.log(`minute: ${minute}`);
    if ((minute % 2) === 0) {
        next();
    } else {
        res.statusCode = 403;
        res.end("Not authorized");
    }
})

app.use(function(req, res) {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello, world!");
})

http.createServer(app).listen(3000);