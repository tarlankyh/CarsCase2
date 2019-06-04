var express = require('express');
var router = express.Router();
var da = require('../data_access/da');


/* GET invoice listing. */
router.get('/', function(req, res, next) {
  da.getAllInvoice(function(err, invoice) {
    var invoiceid = req.session['invoiceid'];
    if(invoiceid){
      da.getInvoiceById(invoiceid, function(err, Invoice){
        res.render('invoice/invoice', {title:'Invoices', invoice_list: invoice, invoiceid: invoiceid});
      });
    }
    else {
      res.render('invoice/invoice', {title:'Invoices', invoice_list: invoice, invoiceid: invoiceid});
    }

  });
});


  router.get('/delete', function(req, res){
    da.deleteInvoice(req.query.id, function(err){
      res.redirect('/invoice');
    });
  });
  
  

  router.post('/', function(req, res, next) {
    da.saveInvoiceFromForm(req.body, function(err) {
      res.redirect('/invoice');
    });
  });


  router.get('/add', function(req, res){
    var invoiceid = req.session['invoiceid'];
    res.render('invoice/add', {title: 'Add Invoice', invoiceid: invoiceid});
  });
  

module.exports = router;
