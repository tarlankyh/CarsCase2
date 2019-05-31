var express = require('express');
var router = express.Router();

/* GET to home page. */
router.get('/', function(req, res, next) {
  var customerid = req.session['customerid'];
  res.render('index', { title: 'CAR PARTS SHOP', customerid: customerid });
});

module.exports = router;
