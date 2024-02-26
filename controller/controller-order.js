const Order =require('../models/model-oder');

const getOrder = async (req, resp) => {
    try {
        const order= await Order.find().populate('user').exec();
        resp.status(200).json(order)
    } catch (error) {
        console.log(error);
        resp.status(500).json({ err: error.message })
    }
};

module.exports = {getOrder}