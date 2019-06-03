const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Shop Schema

const Parts=new Schema({
    Item:String,
    Brand:String,
    Info:String,
    Fits:String,
    ID:String,
    Price_in:String,
    Price_out:String,
    Quantity:Number
} ,  );


const StafF=new Schema({
    FirstName:String,
    LastName:String
}, );



const ManufactureR=new Schema({
    Manufacturer:String,
    CarParts:[{
    type:mongoose.Schema.ObjectId,
    ref:"shop"}],
}, );

const shopschema = new Schema({
    Name: String,
    Adress: String,
    Tel:String,
    Email: String,
    CarParts : [Parts],
    Staff:[StafF],
    Manufacturer:[ManufactureR]
    }, 
    

    
    { collection: 'shop' });


   
const Shopp = mongoose.model('shop', shopschema);


module.exports = Shopp;
