var cards = require('./cards');
var deck = require('./deck')
            .withPack(cards.issueDeck());

var createPlayer = function(name) {
  return {
    name: name,
    hand: deck.dealWhite(10),
    score: 0
  }
}

exports.create = function(cb) {
  
  var game = {
    name: "Scrubs",
    url: "/game/scrubs",
    players: [
      createPlayer("holsee"), 
      createPlayer("cree"),
      createPlayer("walliums")
    ], 
    round: {
      blackCard: deck.dealBlack()
    }
  }

  cb(null, game);
}