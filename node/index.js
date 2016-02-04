module.exports = function() {
  var express = require('express');
  var app = express();

  app.use(express.static(__dirname + '/../assets'))

  return app
}
