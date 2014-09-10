var express = require('express');
var router = express.Router();

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
