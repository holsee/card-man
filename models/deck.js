exports.withPack = function(deck) {
  return {
      _deck: deck,

      deal: function(amount) {
      //_shuffle();
      
      var temp = [];

      for (var i = amount - 1; i >= 0; i--) {
        temp.push(this._deck.whiteCards.pop());
      }

      return temp;
    }
  };
};