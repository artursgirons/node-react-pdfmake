module.exports = function() {
  var express = require('express');
  var path = require('path');
  var app = express();

  var assetsPath = path.resolve(__dirname, path.relative(__dirname, './'), 'node_modules/node-react-pdfmake/assets')

  app.use(express.static(assetsPath))

  return app
}
