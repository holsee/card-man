var express = require('express');
var router = express.Router();
var game = require('../models/game');

/* GET game page. */
router.get('/:name', function(req, res) {
  //TODO: validate name
  game.create(function(err, game) {
    res.render('game', { game: game });
  });
});

module.exports = router;