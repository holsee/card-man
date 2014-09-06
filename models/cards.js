var whiteCards = require("../data/wcards").whiteCards;
var blackCards = require("../data/bcards").blackCards;

exports.issueDeck = function(){
  return {
    whiteCards: whiteCards.slice(0),
    blackCards: blackCards.slice(0)
  }
};