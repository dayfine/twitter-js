const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.use(function (req, res, next) {
  console.log(req.url, 'url')
  console.log(req.body, 'body')
  // needs more work on logging
  next()
})

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})

var locals = {
  title: 'An Example',
  people: [ { name: 'Gandalf'}, { name: 'Frodo' }, { name: 'Hermione'} ]
}

app.get('/', function (req, res, next) {
  res.render('index', locals, function (err, output) {
    console.log(output)
  })
  next()
})

app.listen(3000, function () {
  console.log('server listening')
})
