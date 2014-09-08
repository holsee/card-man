var express = require('express');
var router = express.Router();
var game = require('../models/game');

var getRandomName = function() {
  var names = ["Edgey Edward", "Scrubby Scrubberson"];
  var max = names.length - 1;
  var idx = Math.round(Math.random());
  return names[idx];
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { name: getRandomName() });
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
router.get('/game/:id', function(req, res) {
  game.create(function(err, game){
    //TODO: Game not found
    res.render('game', { game: game });
  });
});

module.exports = router;