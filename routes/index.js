var express = require('express');
var router = express.Router();
var game = require('../models/game');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET game page. */
router.get('/game', function(req, res) {
  game.create(function(err, game){
    if(err){
      res.json({error: err});
      return;
    }
    res.json(game)
  });
});

/* GET game page. */
router.get('/game', function(req, res) {
  cardman(function(err, game){
    if(err){
      res.json({error: err});
      return;
    }
    res.json(game)
  });
});

module.exports = router;