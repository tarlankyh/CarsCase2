var express = require('express');
var router = express.Router();
var da = require('../data_access/da');


/* GET customer list. */
router.get('/', function(req, res, next) {
  da.findPersons(function(err, customers) {
    var customerid = req.session['customerid'];
    if(customerid){
      da.getUserById(customerid, function(err, customer){
        res.render('customers/customers', {title:'Customers', customer_list: customers, customerid: customerid});
      });
    }
    else {
      res.render('customers/customers', {title:'Customers', customer_list: customers, customerid: customerid});
    }

  });
});

router.post('/', function(req, res, next) {
  da.savePersonFromForm(req.body, function(err) {
    res.redirect('/customers');
  });
});

router.get('/add', function(req, res){
  var customerid = req.session['customerid'];
  res.render('customers/add', {title: 'Add customer', customerid: customerid});
});

router.get('/delete', function(req, res){
  da.deleteUser(req.query.id, function(err){
    res.redirect('/customers');
  });
});


module.exports = router;
