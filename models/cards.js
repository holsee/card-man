var whiteCards = require("../data/wcards").whiteCards;
var blackCards = require("../data/bcards2").blackCards;

var isPick2 = function(card) {
  var answers = card.match(/__________/g);
  if(answers) {
    return answers.length == 2
  }
  return false;
};

exports.issueDeck = function(){
  return {
    whiteCards: whiteCards.slice(0),
    blackCards: blackCards.map(function(c) { 
     return { 
        pick2: isPick2(c),
        card: c
      }
    }).slice(0)
  }
};