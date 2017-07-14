const
  express = require('express'),
  nunjucks = require('nunjucks'),
  app = express(),
  server = app.listen(3000),
  socketio = require('socket.io'),
  io = socketio.listen(server),
  routes = require('./routes'),
  bodyParser = require('body-parser')

app.use(express.static('public'))

app.use(function (req, res, next) {
  // logging
  console.log(`${req.method} ${req.url} ${res.statusCode}`)
  next()
})

app.use('/', routes(io))

app.use(bodyParser.urlencoded({ extended: false}))

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})

var locals = {
  title: 'An Example',
  people: [ { name: 'Gandalf'}, { name: 'Frodo' }, { name: 'Hermione'} ]
}

// app.get('/', function (req, res, next) {
//   res.render('index', locals)
//   next()
// })

// app.listen(3000, function () {
//   console.log('server listening')
// })
