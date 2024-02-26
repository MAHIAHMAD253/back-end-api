const Product =require('../models/model-product');

const getProducts = async (req, resp) => {
    try {
        const products = await Product.find().populate("catagory").exec();
        resp.status(200).json(products)
    } catch (error) {
        console.log(error);
        resp.status(500).json({ err: error.message })
    }
};


const getProduct = async (req, resp) => {

    const id = req.params.id
    console.log(id);
    try {
        const product = await Product.findOne({ id: parseInt(id) })

        if (!product) {
            return resp.status(404).json({ err: "not found product" })
        }
        resp.status(200).json(product);
    } catch (error) {
        console.log(error);
        resp.status(500).json({ err: error.message })
    }
};

const deleteProduct = async (req, resp) => {

    const _id = req.params.id;
    console.log(_id);
    try {
        const product = await Product.deleteOne({ _id })

        if (!product) {
            return resp.status(404).json({ err: "not found product" })
        }
        resp.status(200).json(product);
    } catch (error) {
        console.log(error);
        resp.status(500).json({ err: error.message })
    }
};


const postProduct= async (req, resp) => {
    let productDetail = req.body;
    console.log(productDetail);
    try {
        const product = await Product(productDetail)
        await product.save().then(() => {
            resp.status(201).json({ messeage: "product is created", data: product });
        }).catch((err) => {
            resp.status(500).json({err: err.message });
        });

    } catch (error) {
        console.log(error);

        resp.status(500).json({ err: "no data" })
    }
};

module.exports = {getProducts, getProduct,  deleteProduct, postProduct};