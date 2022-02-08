var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
var PORT = process.env.PORT || 3000
var server = app.listen(PORT,function () {

  var host = server.address().address
  var port=PORT

  console.log("Example app listening at http://%s:%s", host, port)

})