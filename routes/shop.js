var express = require('express');
var router = express.Router();
var da = require('../data_access/da');


/* GET shop listing. */
router.get('/', function(req, res, next) {
  da.showShop(function(err, shop) {
    var shopid = req.session['shopid'];
    if(shopid){
      da.getShopById(shopid, function(err, shops){
        res.render('shop/shop', {title:'Shops', shop_list: shop, shopid: shopid});
      });
    }
    else {
      res.render('shop/shop', {title:'Shops', shop_list: shop, shopid: shopid});
    }

  });
});






router.get('/Parts', function(req, res, next) {
  da.showShop(function(err, shop) {
    var shopid = req.session['shopid'];
    if(shopid){
      da.getShopById(shopid, function(err, shops){
        res.render('shop/Parts', {title:'Parts', shop_list: shop, shopid: shopid});
      });
    }
    else {
      res.render('shop/Parts', {title:'Parts', shop_list: shop, shopid: shopid});
    }

  });
});





router.get('/Staff', function(req, res, next) {
  da.showShop(function(err, shop) {
    var shopid = req.session['shopid'];
    if(shopid){
      da.getShopById(shopid, function(err, shops){
        res.render('shop/Staff', {title:'Staff', shop_list: shop, shopid: shopid});
      });
    }
    else {
      res.render('shop/Staff', {title:'Staff', shop_list: shop, shopid: shopid});
    }

  });
});






router.get('/Manufacturer', function(req, res, next) {
  da.showShop(function(err, shop) {
    var shopid = req.session['shopid'];
    if(shopid){
      da.getShopById(shopid, function(err, shops){
        res.render('shop/Manufacturer', {title:'Manufactur', shop_list: shop, shopid: shopid});
      });
    }
    else {
      res.render('shop/Manufacturer', {title:'Manufactur', shop_list: shop, shopid: shopid});
    }

  });
});



  router.get('/delete', function(req, res){
    da.deleteShop(req.query.id, function(err){
      res.redirect('/shop');
    });
  });
  
  

module.exports = router;
