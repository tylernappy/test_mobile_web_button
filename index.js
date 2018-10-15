// index.js
var path = require('path');

var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var port = process.env.PORT || 5000;

app.get('/:html_file', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', req.params.html_file + '.html'));
});

app.get('/', function(req, res) {
  const url = req.query.url;
  res.render('index', {
    url,
  });
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
