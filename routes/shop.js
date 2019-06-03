var express = require('express');
var router = express.Router();
var da = require('../data_access/da');


/* GET shop listing. */
router.get('/', function(req, res, next) {
  da.showShop(function(err, shop) {
    var shopid = req.session['shopid'];
    if(shopid){
      da.getShopById(shopid, function(err, shops){
        res.render('shop/shop', {title:'Shop listing', shop_list: shop, shopid: shopid});
      });
    }
    else {
      res.render('shop/shop', {title:'Shop listing', shop_list: shop, shopid: shopid});
    }

  });
});



  router.get('/delete', function(req, res){
    da.deleteShop(req.query.id, function(err){
      res.redirect('/shop');
    });
  });
  
  

module.exports = router;
