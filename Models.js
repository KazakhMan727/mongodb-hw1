const mongoose = require("mongoose");
const schemas = require("./Schemas");

const Laptop = mongoose.Model("Laptop", schemas.LaptopSchema);
const Phone = mongoose.Model("Phone", schemas.PhoneSchema);

module.exports = {
    Laptop,
    Phone
}