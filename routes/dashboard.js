const express = require('express');
const router = express.Router();
const da = require('../data_access/da');


    
const rdl = (req, res, next) => {
    if(!req.session['customerid']) {
        res.redirect('/customers');
    }
    else {
        next();
    }
};



const rd2 = (req, res, next) => {
    if(!req.session['shopid']) {
        res.redirect('/shop');
    }
    else {
        next();
    }
};

router.get('/', rdl, function(req, res){
    da.getUserById(req.session['customerid'], function(err, u){

        da.getAllPersons(u, function(Customers){
            console.log(Customers);
            res.render('dashboard', {
                title: "Dashboard for " + u.First_name,
                customer: u,
                customerid: customerid,
                
            });
        });

    });

});



router.get('/', rd2, function(req, res){
    da.getShopById(req.session['shopid'], function(err, u){

        da.getAllShop(u, function(shop){
            console.log(shop);
            res.render('dashboard', {
                title: "Dashboard for " + u.Name,
                shop: u,
                shopid: shopid,
                
            });
        });

    });

});


module.exports = router;