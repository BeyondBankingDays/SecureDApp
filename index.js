var express  = require('express');
var path = require('path');
var app  = express();
var port = process.env.PORT || 1337;
app.listen(port);
app.use(express.static(__dirname + '/public'));
console.log("Server running at http://localhost:%d", port);
app.get('*', function (req, res) {
    res.sendFile("./public/index.html");
});