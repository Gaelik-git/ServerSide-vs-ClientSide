console.warn("First thing doing !");

require('import-export');
require('node-jsx').install();


var express = require('express');
var app = express();

var React = require('react');
var { renderToString } = require('react-dom/server');
var App = require('./browser/react/App');
 
app.use('/client',express.static('public'));

app.get('/server', function(req, res){
  
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000); 