const mongoose = require('mongoose');

const Schema = mongoose.Schema;



// Create Invoice Schema
const invoiceschema = new Schema({
    order_date:{
        type:Date, default:Date.now,
    } ,
    ShopID: [{
        type:mongoose.Schema.ObjectId,
        ref:"shop"
    }],
    CustomerID:[{
        type:mongoose.Schema.ObjectId,
        ref:"customer"
    }],
    Item:[{
        type:mongoose.Schema.ObjectId,
        ref:"shop"
    }],
    Price: String,
    Brand:String,
    Seller:[String],
    Manufacturer:String
}, { collection: 'Invoice' });




// Create model
const Invo = mongoose.model('invoice', invoiceschema);

module.exports = Invo;
