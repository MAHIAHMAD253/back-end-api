const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title: {type: String, required: true },
    price: {type: Number, min: [0, "number are postive"]},
    descrinption: {type: String, required: [true, "wrong word is database"] },
    catagory: {type: mongoose.Types.ObjectId, ref:("Catagory")},
    rating: Object,
});

const Product = mongoose.model("Product", productSchema);

module.exports= Product