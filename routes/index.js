const express = require('express'),
      router = express.Router(),
// could use one line instead: const router = require('express').Router();
      tweetBank = require('../tweetBank'),
      bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false}));


router.get('/', function (req, res) {
  let tweets = tweetBank.list()
  res.render('index', { tweets: tweets, showForm: true })
})

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/public/stylesheets/style.css')
})

// extra credit
// For every incoming request:

// Use request.path to get the route
// See if that route maps to a valid file in the public directory
// If not, go defer to the next matching middleware
// If the file matches, send over its contents

router.get('/users/:name', function (req, res) {
  // make sure to match cases
  var name = req.params.name
  var tweets = tweetBank.find({name: name})
  res.render('index', { tweets: tweets, name: name, showForm: true })
})

router.get('/tweets/:id', function (req, res) {
  var id = +req.params.id
  var tweets = tweetBank.find({id: id})
  res.render('index', { tweets: tweets })
})

router.post('/tweets', function(req, res) {
  console.log(req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router
