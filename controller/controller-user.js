const User =require('../models/model-user');

const getUser = async (req, resp) => {
    try {
        const user= await User.find();
        resp.status(200).json(user)
    } catch (error) {
        console.log(error);
        resp.status(500).json({ err: error.message })
    }
};

module.exports = {getUser}