exports.withPack = function(deck) {
  return {
      _deck: deck,

    dealWhite: function(amount) {
      //_shuffle();
      
      var temp = [];

      for (var i = amount - 1; i >= 0; i--) {
        temp.push(this._deck.whiteCards.pop());
      }

      return temp;
    },
    dealBlack: function() {
      return this._deck.blackCards.pop();
    }
  };
};