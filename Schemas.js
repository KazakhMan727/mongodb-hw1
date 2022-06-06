const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LaptopSchema = new Schema({
    laptopModel: String,
    price: Number
});

const PhoneSchema = new Schema({
    phoneModel: String,
    price: Number
});

module.exports = {
    LaptopSchema,
    PhoneSchema
};