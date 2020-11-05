var express = require('express');
var app = express();
app.get('/', function (req, res) {
    console.info("Entry: / :: app.get() :: " + __filename);
    res.sendFile(__dirname + "/index.html");
});
var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});  