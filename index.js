/*
var http = require('http');

var server = http.createServer(function(request, response) {

   /!* response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");*!/

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
*/
var express  = require('express');
var path = require('path');
var app      = express();
// Define the port
var port = process.env.PORT || 1337;
app.listen(port);
app.use(express.static(__dirname + '/public'));
console.log("Server running at http://localhost:%d", port);
app.get('*', function (req, res) {
    res.sendFile("./public/index.html");

});