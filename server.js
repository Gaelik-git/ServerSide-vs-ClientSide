console.warn("First thing doing !");

require('import-export');
require('node-jsx').install();
const volleyball = require('volleyball')
 
var express = require('express');
var app = express();

var React = require('react');
var { renderToString } = require('react-dom/server');
var { App } = require('./browser/react/App');
var fs = require('fs');
 
app.use(volleyball)

app.use('/client',express.static('public'));


app.get('/server', function(req, res){
  
  const renderedComp = renderToString(React.createElement(App));
  let myHtml = fs.readFileSync(__dirname + "/public/index.html","utf8");
  myHtml = myHtml.replace('<div id="root"></div>','<div id="root">'+renderedComp+'</div>')
  res.send(myHtml);
});

app.use('/server',express.static('public'));

app.get('/', function(req, res){
  res.send('App Cleared');
  process.stdout.write('\033c');
});

app.listen(3000); 