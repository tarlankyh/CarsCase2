var express = require('express');
var router = express.Router();
var da = require('../data_access/da');

router.post('/', function(req, res){
    da.search(req.body['search'], function(err, shop){
        var shopid = req.session['shopid'];
        da.getshopbyId(shopid, function(err, shops){
            res.render('shop/shop', {title:'Shop listing', shop_list: shop, shopid: shopid, });
        });
    });
});

module.exports = router;