var express = require('express');
var logger = require('morgan');
var routes = require('./routes/routes.js')
var app = express();
var PORT = 3000;

app.use(logger('dev'));
app.use('/', routes);

app.listen(PORT, function () {
  console.log('Listening on PORT %s', PORT);
})
