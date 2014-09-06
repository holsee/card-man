var express = require('express');
var router = express.Router();
var cards = require('../models/cards');
var deck = require('../models/deck')
            .withPack(cards.issueDeck());

var createPlayer = function(name) {
  return {
    name: name,
    hand: deck.deal(10),
    score: 0
  }
}

var cardman = function(cb) {
  
  var game = {
    name: "Scrubs",
    url: "/game/scrubs",
    players: [
      createPlayer("holsee"), 
      createPlayer("cree"),
      createPlayer("walliums")
    ]
  }

  cb(null, game);
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
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