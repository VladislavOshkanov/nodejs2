var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
console.log(mongoose.version);
var db = mongoose.createConnection('mongodb://localhost/test');



var User = db.model("User",UserSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MySite' });
});

router.post('/', function(req,res,next){
  var title = req.body.title;
  var newUser = new User({ name: title});
  
});

  console.log(title);
  res.render('index', {title: title })
});

module.exports = router;
