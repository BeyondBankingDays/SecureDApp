var express  = require('express');
var app  = express();
var port = process.env.PORT || 1337;
app.listen(port);
app.use(express.static(__dirname + '/public'));
app.get('*', function (req, res) {
    res.sendFile('./public/index.html');
});