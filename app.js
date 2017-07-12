const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.use(function(req, res, next){
  console.log(req.url, 'url');
  console.log(req.body, 'body');
//needs more work on logging
  next();
});
app.get('/', function(req, res, next){
  res.send('Hello World');
});



app.listen(3000, function(){
  console.log('server listening');
});
