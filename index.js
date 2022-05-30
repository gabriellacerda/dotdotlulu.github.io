const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var http = require('http');
// var enforce = require('express-sslify');

// app.use(enforce.HTTPS());

app.use(express.static('docs'));

http.createServer(app).listen(port, () => {
    console.log('app is up!');
})