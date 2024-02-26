const Catagory =require('../models/model-catagory');

const getCatagory = async (req, resp) => {
    try {
        const catagorys = await Catagory.find();
        resp.status(200).json(catagorys)
    } catch (error) {
        console.log(error);
        resp.status(500).json({ err: error.message })
    }
};

module.exports = {getCatagory}