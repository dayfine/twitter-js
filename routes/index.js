const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function(req, res){
  res.sendFile('/public/stylesheets/style.css');
})
// extra credit
//For every incoming request:

// Use request.path to get the route
// See if that route maps to a valid file in the public directory
// If not, go defer to the next matching middleware
// If the file matches, send over its contents

module.exports = router;
