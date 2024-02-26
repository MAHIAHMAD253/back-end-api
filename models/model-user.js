const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    address: {type: String, },
    descrinption: {type: String, },
    rating: Object,
});

const User = mongoose.model("User", userSchema);

module.exports= User