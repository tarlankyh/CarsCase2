const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Person Schema
const customerschema = new Schema({
    FirstName: String,
    LastName: String,
    Adress:String,
    Tel:String,
    Email: String

}, { collection: 'Customer' });

// Create model
const Person = mongoose.model('customer', customerschema);

module.exports = Person;