var express = require('express');
var app = express();
var logger = require('morgan');
var routes = require('./routes/routes.js')
var PORT = 3000;

app.use(express.static('public'));
app.use(logger('dev'));
app.use('/', routes);

app.listen(PORT, function () {
  console.log('Listening on PORT %s', PORT);
})
