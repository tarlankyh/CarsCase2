const Person = require('../models/customer');
const Shopp=require('../models/shops');
const Invo = require('../models/Invoice');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


function connect2db() {
    mongoose.connect('mongodb://localhost:27017/CarsDB',
        { useNewUrlParser: true });

    mongoose.connection.once('open', function () {
        console.log("Connection to MongoDB made...");
    }).on('error', function (error) {
        console.log("Error connecting to MongoDB. Error:", error);
    });
}

function savePerson(p, cb) {
    connect2db();
    var p1 = new Person(p);
    bcrypt.hash(p1.password, 10, function(err, hash){
        p1.password = hash;
        p1.save(function(err){
            if(err) {
                console.log("Error creating customer" + err)
            }
            cb(err);
        });
    });
}


function search(pattern, cb) {
    connect2db();
    Shopp.find({$or: [
                        {Name: {$regex: pattern }},
                        {Adress:{$regex: pattern }}
                      ]
    }, function(err, shops){
        cb(err, shops);
    });
}

function deleteUser(id, cb) {
    connect2db();
    Person.deleteOne({"_id": id}, function (err, res) {
       if(err) {
           console.log("Error deleting user" + err);
       }
       cb(err);
    });
}

function deleteInvoice(id, cb) {
    connect2db();
    Invo.deleteOne({"_id": id}, function (err, res) {
       if(err) {
           console.log("Error deleting invoice" + err);
       }
       cb(err);
    });
}



function getAllPersons(cb) {
    connect2db();
    Person.find(function(err, customers) {
        if(err) {
            console.log('Error getting users' + err);
        }
        cb(err, customers);
    });
}


function deleteShop(id, cb) {
    connect2db();
    Shopp.deleteOne({"_id": id}, function (err, res) {
       if(err) {
           console.log("Error deleting shop" + err);
       }
       cb(err);
    });
}




function getAllShop(cb) {
    connect2db();
    Shopp.find(function(err, shop) {
        if(err) {
            console.log('Error getting invoice' + err);
        } 
        cb(err, shop);
    });
}


function getAllInvoice(cb) {
    connect2db();
    Invo.find(function(err, invoice) {
        if(err) {
            console.log('Error getting invoice' + err);
        }
        cb(err, invoice);
    });
}



function getPersonById(customerid, cb) {
    connect2db();
    Person.findOne({'_id': customerid}, function(err, customer){
        cb(err, customer);
    });
}


function getShopById(shopid, cb) {
    connect2db();
    Shopp.findOne({'_id': shopid}, function(err, shops){
        cb(err, shops);
    });
}



function getInvoiceById(invoiceid, cb) {
    connect2db();
    Invo.findOne({'_id': invoiceid}, function(err, Invoice){
        cb(err, Invoice);
    });
}




function saveInvoice(p, cb) {
    connect2db();
    var p1 = new Invo(p);
    
        
        p1.save(function(err){
            if(err) {
                console.log("Error creating customer" + err)
            }
            cb(err);
        });
 
}



module.exports = {
    savePersonFromForm: savePerson,
    findPersons: getAllPersons,
    search: search,
    deleteUser: deleteUser,
    getUserById: getPersonById,
    showShop:getAllShop,
    deleteShop:deleteShop,
    getshopbyId:getShopById,
    Invo:getAllInvoice,
    getInvoiceById:getInvoiceById,
    deleteInvoice:deleteInvoice,
    saveInvoiceFromForm:saveInvoice,
};