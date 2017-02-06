// index.js
var path = require('path')

var express = require('express')
var app = express()

var port = process.env.PORT || 5000

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function() {
  console.log('Listening on port: ' + port)
})