const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    orderDate: {type:Date,},
    products: Array,
    user: {type: mongoose.Types.ObjectId, ref:("User")},
    orderStatus: {type:String}
});

const Order = mongoose.model("Order", orderSchema);

module.exports= Order